export const resumeData = {
  identity: {
    name: "Terrell A. Lancaster",
    title: "Aspiring SOC Analyst & IT Professional",
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
    certifications: 10
  },
  expertise: {
    security: ["SIEM (Splunk/Wazuh)", "Packet Analysis", "Incident Response", "Vulnerability Management", "Linux Hardening"],
    networking: ["TCP/IP", "DNS/DHCP", "Firewall Config", "Subnetting", "VPN"],
    cloud: ["Google Cloud Platform", "Firebase", "IAM", "Virtualization"],
    tools: ["Wireshark", "Nmap", "Burp Suite", "Active Directory", "PowerShell"]
  },
  achievements: [
    {
      title: "WGU Cybersecurity Program",
      impact: "Currently enrolled, focusing on Network Defense and Incident Response",
      year: 2025
    },
    {
      title: "Operation Enduring Freedom Deployment",
      impact: "Managed HR systems for 1,500+ personnel in combat zone with Secret Clearance",
      year: 2011
    },
    {
      title: "Focus Freight TMS Development",
      impact: "Built secure logistics platform handling $2M+ in freight annually",
      year: 2023
    }
  ],
  summary: "U.S. Army Veteran and IT Manager pivoting into Cybersecurity. Currently enrolled in the WGU Cybersecurity Bachelor's program. leveraging 9+ years of operational leadership and recent full-stack development experience to secure enterprise environments. Seeking entry-level SOC Analyst or IT Support roles.",
  certifications: ["CompTIA Security+", "CompTIA Network+", "CompTIA A+", "Google Cybersecurity", "Google Project Management", "ITIL Foundation", "CDL Class A"],
  skills: {
    cybersecurity: ["SIEM", "IDS/IPS", "Wireshark", "Linux Command Line", "NIST Framework"],
    it_ops: ["Active Directory", "Windows Server", "Troubleshooting", "Help Desk", "Office 365"],
    dev: ["Scripting (Python/Bash)", "SQL", "Git", "API Security"]
  },
  history: [
    {
      role: "Student - Cybersecurity",
      company: "Western Governors University (WGU)",
      dates: "2025-Present",
      desc: "Pursuing B.S. in Cybersecurity and Information Assurance. Focusing on network security, secure network design, and incident management."
    },
    { 
      role: "Senior IT Manager", 
      company: "Drive On Transportation", 
      dates: "2022-2025", 
      desc: "Managed IT infrastructure and security for logistics operations. Architected 'Focus Freight' TMS with role-based access control (RBAC). Maintained 99.9% system uptime." 
    },
    { 
      role: "Real Estate Team Lead", 
      company: "Simply Vegas", 
      dates: "2017-2022", 
      desc: "Administered Salesforce CRM, managing user permissions and data integrity. Implemented automated workflows to streamline client communication." 
    },
    {
      role: "Owner-Operator / Logistics",
      company: "Lancaster Logistics",
      dates: "2012-2017",
      desc: "Managed logistics operations with a focus on compliance and safety. Maintained zero-incident record across 300,000+ miles."
    },
    { 
      role: "HR Ops Manager", 
      company: "U.S. Army", 
      dates: "2004-2012", 
      desc: "Managed sensitive personnel data for 1,500+ soldiers. Maintained operational security (OPSEC) in deployed environments. Held Secret Security Clearance." 
    }
  ]
};

export const projectsData = [
    {
        id: "scoretrack-crm",
        title: "ScoreTrack CRM",
        description: "A comprehensive, white-label credit repair management platform designed for credit repair professionals. Features AI-powered dispute generation, predictive score forecasting, and automated client management.",
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase", "AI Integration"],
        githubLink: "https://github.com/tlancas25/trackr-333-score",
        image: {
            id: "scoretrack-crm-image",
        },
        gallery: [
            "scoretrack-crm-image"
        ]
    }
];
