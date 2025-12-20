export const resumeData = {
  identity: {
    name: "Terrell A. Lancaster",
    title: "Cloud Infrastructure Architect & Operations Expert",
    clearance: "Former Secret (US Army)",
    location: {
      city: "Las Vegas",
      state: "NV",
      timezone: "PST",
      coordinates: [36.1699, -115.1398]
    }
  },
  metrics: {
    yearsExperience: 20,
    projectsDelivered: 47,
    teamSize: 1500,
    milesDriven: 300000,
    uptimeRecord: 99.97,
    certifications: 8
  },
  expertise: {
    cloud: {
      gcp: ["Compute Engine", "Cloud Run", "BigQuery", "Vertex AI", "Firebase"],
      aws: ["EC2", "Lambda", "RDS", "S3"],
      azure: ["VMs", "Functions", "Cosmos DB"]
    },
    languages: ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
    frameworks: ["React", "Next.js", "Express", "FastAPI", "Flutter"],
    tools: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"],
    security: ["IAM", "OAuth 2.0", "Zero Trust", "SIEM", "Penetration Testing"]
  },
  achievements: [
    {
      title: "Operation Enduring Freedom Deployment",
      impact: "Managed HR systems for 1,500+ personnel in combat zone",
      year: 2011
    },
    {
      title: "Focus Freight TMS Development",
      impact: "Built logistics platform handling $2M+ in freight annually",
      year: 2023
    },
    {
      title: "300,000 Mile Safety Record",
      impact: "Zero incidents across 48 states as Owner-Operator",
      year: 2015
    }
  ],
  summary: "Bridging the gap between Logistics and Cloud Architecture. U.S. Army Veteran with 9+ years of operational leadership pivoting to GCP solutions.",
  certifications: ["CompTIA Network+", "CompTIA A+", "Google Cybersecurity", "Google Project Management", "CDL Class A"],
  skills: {
    cloud: ["Google Cloud Platform", "Firebase", "Genkit", "Firestore", "IAM"],
    dev: ["React", "JavaScript", "Python", "VS Code", "Project IDX", "Manifest V3"],
    ops: ["Cisco Meraki", "SolarWinds", "Active Directory", "Hardware Support"]
  },
  history: [
    { role: "Senior IT Manager", company: "Drive On Transportation", dates: "2022-2025", desc: "Built 'Focus Freight' TMS. Migrated data to GCP Storage. Managed 99.9% uptime for ELDs." },
    { role: "Real Estate Team Lead", company: "Simply Vegas", dates: "2017-2022", desc: "Salesforce CRM Admin. Web development for landing pages." },
    { role: "HR Ops Manager", company: "U.S. Army", dates: "2004-2012", desc: "Managed systems for 1,500 personnel." }
  ]
};

export const projectsData = [
    {
        id: "focus-freight",
        title: "Focus Freight TMS",
        description: "Enterprise Transportation Management System",
        techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
        githubLink: "https://github.com",
        image: {
            id: "project-1",
        }
    },
    {
        id: "redpill-insights",
        title: "RedPill Insights",
        description: "Chrome Extension for Reddit Analytics",
        techStack: ["Manifest V3", "React", "Firebase", "OpenAI API"],
        githubLink: "https://github.com/tlancaster/redpill",
        image: {
            id: "project-2",
        }
    },
    {
        id: "due-process",
        title: "Due Process",
        description: "A legal tech application to streamline document handling.",
        techStack: ["Python", "GCP", "Legal Tech"],
        githubLink: "https://github.com",
        image: {
            id: "project-3",
        }
    }
];
