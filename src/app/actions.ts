'use server';

import { z } from 'zod';

type State = {
  message: string | null;
  answer?: string;
};

const schema = z.object({
  query: z.string().min(1, 'Please enter a question.'),
});

// This function communicates with the Genkit flow running locally.
// Ensure your Genkit server is running with `genkit:dev` or `genkit:watch`.
async function fetchFromGenkit(query: string): Promise<string> {
  const genkitUrl = process.env.GENKIT_API_URL || 'http://127.0.0.1:3400/flow/terrellChat';
  
  try {
    const response = await fetch(genkitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: { question: query } }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Genkit API Error:', errorBody);
        throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    
    // The exact path to the answer may vary based on your flow's output schema.
    // Common paths are result.output.answer, result.output, or just result.
    const answer = result?.output?.answer || result?.output || JSON.stringify(result);

    if (!answer) {
        console.error('Genkit response missing answer:', result);
        return 'The AI agent returned an unexpected response format.';
    }

    return answer;

  } catch (error) {
    console.error('Failed to fetch from Genkit:', error);
    if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
      return 'Could not connect to the AI agent. Please ensure the Genkit server is running.';
    }
    return 'An error occurred while communicating with the AI agent.';
  }
}

export async function askResumeAgent(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    query: formData.get('query'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid query.',
      answer: prevState.answer,
    };
  }
  
  const { query } = validatedFields.data;

  try {
    const answer = await fetchFromGenkit(query);
    return { message: null, answer };
  } catch (e) {
    return { 
        message: 'Something went wrong.',
        answer: prevState.answer,
    };
  }
}
