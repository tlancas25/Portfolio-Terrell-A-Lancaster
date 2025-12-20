# **App Name**: Operational Cloud Portfolio

## Core Features:

- Status Board Hero: Display system status, location, and uptime in a dashboard format.
- Dynamic Project Feed: Retrieve and display project data (title, tech stack, GitHub link, screenshot URL) from a Firestore collection named `projects`.
- AI Resume Agent (Genkit): Implement a chat widget powered by Firebase Genkit. It uses the provided 'Master Resume' as its RAG (Retrieval-Augmented Generation) source to answer questions, acting as a tool for recruiters.
- Logistics Archive: Display a visual timeline component showcasing Army and CDL experience.
- Firestore Integration: Set up Firestore collections and documents for project data.
- GitHub Actions CI/CD: Automated deployment pipeline from GitHub to Firebase hosting.

## Style Guidelines:

- Primary color: Deep gray (#333333) as a background, to resemble a dark terminal environment.
- Accent color: Subtle greenish yellow (#c6e300) for operational stats and interactive elements, creating a system monitor aesthetic.
- Highlight color: Soft blue (#ADD8E6) for links and hover effects, adding a touch of visibility.
- Header font: 'Space Grotesk' sans-serif for headers to provide a tech-inspired, commanding feel.
- Body font: 'Inter' sans-serif for body text to ensure readability and a clean interface.
- Use minimalistic icons that evoke system status and data flow.
- Implement subtle animations such as pulses on status lights to mimic a live operational dashboard.