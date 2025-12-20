export const resumeData = {
  name: "Terrell A. Lancaster",
  title: "Cloud-Focused IT Operations Manager",
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
        id: "1",
        title: "Focus Freight TMS",
        description: "A comprehensive Transportation Management System for logistics operations.",
        techStack: ["React", "Firebase", "GCP"],
        githubLink: "https://github.com",
        image: {
            id: "project-1",
        }
    },
    {
        id: "2",
        title: "RedPill Insights",
        description: "A Chrome Extension for providing valuable web insights.",
        techStack: ["JavaScript", "Manifest V3", "Chrome API"],
        githubLink: "https://github.com",
        image: {
            id: "project-2",
        }
    },
    {
        id: "3",
        title: "Due Process",
        description: "A legal tech application to streamline document handling.",
        techStack: ["Python", "GCP", "Legal Tech"],
        githubLink: "https://github.com",
        image: {
            id: "project-3",
        }
    }
];
