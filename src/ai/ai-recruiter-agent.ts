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
  return terrellChat(input);
}

const TERRELL_KNOWLEDGE = `
Terrell A. Lancaster - Master Profile
=====================================
Military Service: 9 years U.S. Army, Secret Clearance
- HR Operations Manager for 1,500+ personnel
- Deployment: Operation Enduring Freedom
- Awards: Army Commendation Medal, Good Conduct Medal

Technical Expertise:
- Cloud: GCP Architect (in progress), Firebase Expert
- Languages: JavaScript/TypeScript, Python, Go
- Frameworks: React, Next.js, Express, FastAPI
- DevOps: Docker, Kubernetes, CI/CD, Terraform
- Security: CompTIA Network+, Google Cybersecurity Cert

Professional Experience:
- 300,000 miles OTR trucking (zero incidents)
- Built Focus Freight TMS handling $2M annually
- Real Estate Team Lead at Simply Vegas
- Current: Senior IT Manager at Drive On Transportation

Project Highlights:
- Focus Freight: React/Node.js TMS with 99.9% uptime
- RedPill Insights: Chrome Extension with 5,000+ users
- Due Process: AI legal tech processing 50,000+ documents

Location: Las Vegas, NV
Availability: Immediate for remote/hybrid roles
Preferred Roles: Cloud Architect, DevOps Engineer, Technical Lead
`;

export const terrellChat = ai.defineFlow(
  {
    name: 'terrellChat',
    inputSchema: AIRecruiterAgentInputSchema,
    outputSchema: AIRecruiterAgentOutputSchema,
  },
  async ({ question }) => {
    const prompt = `
    You are an AI assistant representing Terrell A. Lancaster.
    Use this knowledge base to answer questions:
    ${TERRELL_KNOWLEDGE}
    
    Question: ${question}
    
    Respond professionally but with confidence.
    Highlight relevant experience and metrics.
    If asked about availability, mention immediate start capability.
    `;

    const response = await ai.generate({ prompt });
    return { answer: response.text };
  }
);
