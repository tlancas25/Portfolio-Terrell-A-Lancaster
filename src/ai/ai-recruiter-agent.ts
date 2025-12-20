'use server';

/**
 * @fileOverview AI agent to answer questions about Terrell's resume.
 *
 * - aiRecruiterAgent - A function that answers questions about Terrell's resume.
 * - AIRecruiterAgentInput - The input type for the aiRecruiterAgent function.
 * - AIRecruiterAgentOutput - The return type for the aiRecruiterAgent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIRecruiterAgentInputSchema = z.object({
  question: z.string().describe('The question about Terrell A. Lancaster you want to ask.'),
});
export type AIRecruiterAgentInput = z.infer<typeof AIRecruiterAgentInputSchema>;

const AIRecruiterAgentOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Terrell A. Lancaster.'),
});
export type AIRecruiterAgentOutput = z.infer<typeof AIRecruiterAgentOutputSchema>;

export async function aiRecruiterAgent(input: AIRecruiterAgentInput): Promise<AIRecruiterAgentOutput> {
  return aiRecruiterAgentFlow(input);
}

const resumeData = `{
  "name": "Terrell A. Lancaster",
  "title": "Cloud-Focused IT Operations Manager",
  "summary": "Bridging the gap between Logistics and Cloud Architecture. U.S. Army Veteran with 9+ years of operational leadership pivoting to GCP solutions.",
  "certifications": ["CompTIA Network+", "CompTIA A+", "Google Cybersecurity", "Google Project Management", "CDL Class A"],
  "skills": {
    "cloud": ["Google Cloud Platform", "Firebase", "Genkit", "Firestore", "IAM"],
    "dev": ["React", "JavaScript", "Python", "VS Code", "Project IDX", "Manifest V3"],
    "ops": ["Cisco Meraki", "SolarWinds", "Active Directory", "Hardware Support"]
  },
  "history": [
    { "role": "Senior IT Manager", "company": "Drive On Transportation", "dates": "2022-2025", "desc": "Built 'Focus Freight' TMS. Migrated data to GCP Storage. Managed 99.9% uptime for ELDs." },
    { "role": "Real Estate Team Lead", "company": "Simply Vegas", "dates": "2017-2022", "desc": "Salesforce CRM Admin. Web development for landing pages." },
    { "role": "HR Ops Manager", "company": "U.S. Army", "dates": "2004-2012", "desc": "Managed systems for 1,500 personnel." }
  ]
}`

const prompt = ai.definePrompt({
  name: 'aiRecruiterAgentPrompt',
  input: {schema: AIRecruiterAgentInputSchema},
  output: {schema: AIRecruiterAgentOutputSchema},
  prompt: `You are an AI Resume Agent expert in Terrell A. Lancaster's skills and experiences.

  Use the following resume data to answer questions about Terrell:
  ${resumeData}

  Question: {{{question}}}
  Answer: `,
});

const aiRecruiterAgentFlow = ai.defineFlow(
  {
    name: 'aiRecruiterAgentFlow',
    inputSchema: AIRecruiterAgentInputSchema,
    outputSchema: AIRecruiterAgentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
