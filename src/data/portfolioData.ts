export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  iconName: string;
  description: string;
  tag: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string;
  techStack: string[];
  featured: boolean;
  architectureType: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const portfolioData = {
  name: "Jefin Agilbert",
  role: "Software Engineer",
  titleExtended: "Backend Architect & Cross-Platform Engineer",
  tagline: "Architecting resilient distributed systems, sub-50ms backend services, and high-performance React Native applications.",
  location: "Chennai, India",
  email: "jefinagilbert@gmail.com",
  phone: "+91 6383916053",
  linkedin: "https://linkedin.com/in/jefin-agilbert-35948a20b",
  github: "https://github.com/jefinagilbert",
  repoUrl: "https://github.com/jefinagilbert/jefinagilbert",
  
  about: {
    summary: `Software Engineer with 3+ years of experience architecting scalable backend services and high-performance cross-platform applications. Proficient in driving end-to-end development, bridging robust Node.js and PostgreSQL architectures with seamless React Native user interfaces to deliver resilient, high-availability solutions.`,
    highlights: [
      "3+ years of end-to-end software engineering across production distributed systems.",
      "Engineered sub-50ms API response pipelines with Node.js, Redis, and optimized PostgreSQL schemas.",
      "Built real-time Kafka event streaming & socket protocols for IoT diagnostic and maritime telematics.",
      "Reduced CI/CD deployment overhead by 60% with Docker containerization and GitHub Actions/Bitrise.",
      "Published IEEE author in energy-efficient smart IoT automation systems."
    ],
    quickStats: [
      { label: "Years Experience", value: "3+", icon: "Clock" },
      { label: "API Latency SLA", value: "< 50ms", icon: "Zap" },
      { label: "DB Load Reduction", value: "40%", icon: "Database" },
      { label: "Deployment Speedup", value: "60%", icon: "Rocket" },
    ]
  },

  skillsCategories: [
    {
      category: "Backend & System Design",
      icon: "Server",
      description: "Scalable microservices, RESTful APIs, and distributed computing",
      skills: [
        { name: "Node.js", level: 95, highlight: true },
        { name: "Express.js", level: 92, highlight: true },
        { name: "RESTful APIs", level: 95, highlight: true },
        { name: "System Design", level: 88, highlight: true },
        { name: "Microservices Architecture", level: 86, highlight: true },
        { name: "TypeScript", level: 90, highlight: false },
        { name: "API Security & Auth", level: 88, highlight: false },
      ]
    },
    {
      category: "Databases & Caching",
      icon: "Database",
      description: "ACID transactions, query tuning, indexing, and high-throughput caching",
      skills: [
        { name: "PostgreSQL", level: 92, highlight: true },
        { name: "Redis", level: 90, highlight: true },
        { name: "MongoDB", level: 85, highlight: false },
        { name: "Schema Design & ACID", level: 90, highlight: true },
        { name: "Query Optimization", level: 88, highlight: false },
        { name: "Data Persistence", level: 90, highlight: false },
      ]
    },
    {
      category: "Event-Driven & Messaging",
      icon: "Activity",
      description: "Real-time streaming pipelines, async processing, and WebSockets",
      skills: [
        { name: "Apache Kafka", level: 88, highlight: true },
        { name: "Socket Communication", level: 92, highlight: true },
        { name: "WebSockets / Socket.IO", level: 90, highlight: true },
        { name: "Event-Driven Architecture", level: 89, highlight: true },
        { name: "Pub/Sub Systems", level: 87, highlight: false },
        { name: "Data Streaming", level: 85, highlight: false },
      ]
    },
    {
      category: "DevOps & Cloud Automation",
      icon: "Cpu",
      description: "Containerization, automated pipelines, quality analysis, and zero-downtime releases",
      skills: [
        { name: "Docker", level: 88, highlight: true },
        { name: "Kubernetes", level: 78, highlight: false },
        { name: "GitHub Actions", level: 90, highlight: true },
        { name: "Bitrise CI/CD", level: 86, highlight: true },
        { name: "Monorepo Management", level: 88, highlight: true },
        { name: "SonarQube Quality Gates", level: 85, highlight: false },
        { name: "Sonatype Nexus", level: 82, highlight: false },
      ]
    },
    {
      category: "Frontend & Mobile",
      icon: "Smartphone",
      description: "Pixel-perfect, fluid cross-platform mobile and web applications",
      skills: [
        { name: "React Native", level: 94, highlight: true },
        { name: "React.js", level: 92, highlight: true },
        { name: "Next.js", level: 88, highlight: true },
        { name: "State Management", level: 90, highlight: false },
        { name: "Design Systems & UI", level: 88, highlight: false },
        { name: "Tailwind CSS", level: 92, highlight: false },
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      company: "Marlow Navigation",
      role: "Software Engineer",
      period: "June 2025 – Present",
      location: "Chennai, India",
      badge: "Current Role",
      description: [
        "Architected and maintained scalable full-stack applications, seamlessly integrating cross-platform React Native front-ends with high-performance Node.js and Express backend services.",
        "Designed ACID-compliant PostgreSQL schemas and implemented Redis caching, reducing database load by 40% and cutting API response latency to under 50ms.",
        "Engineered real-time data streaming pipelines via socket communication, leveraging Apache Kafka to ensure reliable, asynchronous event-driven processing.",
        "Containerized backend services with Docker and automated CI/CD via Bitrise and GitHub Actions, reducing manual deployment time by 60% while achieving zero-downtime releases for frontend and backend.",
        "Streamlined full-stack development workflows within a monorepo environment, resolving SonarQube-reported code smells to ensure long-term maintainability across both client and server codebases.",
        "Contributed to a scalable front-end design system published via Sonatype Nexus, accelerating cross-project UI feature delivery while maintaining cross-platform consistency."
      ],
      skills: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "GitHub Actions", "Bitrise", "React Native", "Monorepo"]
    },
    {
      company: "Hemex Health",
      role: "React Native Developer",
      period: "Oct 2024 – May 2025",
      location: "Coimbatore, India",
      description: [
        "Developed a React Native application enabling real-time monitoring and control of portable Wi-Fi medical diagnostic devices.",
        "Implemented socket-based communication with embedded diagnostic systems, decreasing connectivity drops by over 30% and improving real-time data sync reliability.",
        "Optimized rendering and state management, reducing UI lag and improving screen responsiveness across varying mobile hardware specs.",
        "Diagnosed and resolved critical production integration issues, enhancing application stability and improving overall medical diagnostic device reliability."
      ],
      skills: ["React Native", "Socket Communication", "IoT Protocols", "Mobile State Optimization", "TypeScript", "Diagnostic Telemetry"]
    },
    {
      company: "Carecentra",
      role: "Product Engineer",
      period: "March 2023 – Sept 2024",
      location: "Chennai, India",
      description: [
        "Developed and maintained cross-platform mobile and web applications utilizing React Native and React.js, delivering responsive and user-centric interfaces.",
        "Built and integrated RESTful APIs using Node.js and Express, facilitating seamless and secure data communication between client-side applications and the server.",
        "Managed data persistence and retrieval by writing structured SQL queries and implementing CRUD operations in PostgreSQL, ensuring accurate data display on the front-end.",
        "Collaborated across the stack to debug and resolve complex issues, tracing data flow from UI components down to the backend database to improve overall application stability.",
        "Participated in Agile development workflows, utilizing standard version control (Git) and collaborative tools to reliably deliver feature enhancements across sprint cycles."
      ],
      skills: ["React Native", "React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Agile/Scrum", "Git"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      title: "Maritime Fleet Telemetry & Event Streaming Platform",
      category: "Distributed Backend & IoT",
      tagline: "Sub-50ms real-time event pipeline for maritime operations",
      description: "Architected a high-throughput event processing pipeline integrating Apache Kafka and Redis for real-time vessel telemetry, synchronized with a cross-platform React Native client app. Achieved 40% database load reduction and sub-50ms response latency.",
      metrics: "< 50ms API Latency | 40% DB Load Reduction",
      techStack: ["Node.js", "Express", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "React Native"],
      featured: true,
      architectureType: "Event-Driven Microservices",
      githubUrl: "https://github.com/jefinagilbert",
    },
    {
      title: "Medical Diagnostic Device Wi-Fi Controller",
      category: "Mobile & Embedded IoT",
      tagline: "Low-latency diagnostic telemetry mobile application",
      description: "Engineered a mission-critical React Native mobile application for real-time monitoring and control of portable Wi-Fi diagnostic hardware. Created resilient socket sync protocols that reduced connectivity dropouts by 30%.",
      metrics: "30% Fewer Connection Drops | Real-Time Sync",
      techStack: ["React Native", "TypeScript", "WebSockets", "IoT Protocols", "Redux Toolkit"],
      featured: true,
      architectureType: "Embedded Socket Gateway",
      githubUrl: "https://github.com/jefinagilbert",
    },
    {
      title: "An Intelligent Street Lighting System (IEEE Research)",
      category: "Research & Smart Energy",
      tagline: "Smart energy optimization and automated traffic density control",
      description: "Published research in IEEE demonstrating an intelligent lighting automation algorithm that dynamically modulates energy output based on ambient conditions and vehicular density, achieving massive energy efficiency savings.",
      metrics: "IEEE Published Author | 45%+ Energy Saved",
      techStack: ["Node.js", "IoT Sensors", "Automation Algorithms", "Python", "Data Modeling"],
      featured: true,
      architectureType: "IoT Smart Energy Automation",
      githubUrl: "https://github.com/jefinagilbert",
    },
    {
      title: "Enterprise Full-Stack Monorepo Engine",
      category: "Architecture & DevOps",
      tagline: "Zero-downtime CI/CD and unified frontend/backend repository",
      description: "Designed a production monorepo infrastructure unifying Node.js backend microservices, React Native mobile apps, and Next.js portals with SonarQube automated code quality gates and Bitrise/GitHub Actions pipelines.",
      metrics: "60% Faster Release Cycle | Zero Downtime",
      techStack: ["Docker", "GitHub Actions", "Bitrise", "SonarQube", "Node.js", "Next.js", "Nexus"],
      featured: false,
      architectureType: "Monorepo & CI/CD Pipeline",
      githubUrl: "https://github.com/jefinagilbert",
    }
  ] as ProjectItem[],

  achievements: [
    {
      title: "IEEE Published Research Author",
      issuer: "IEEE Conference",
      iconName: "FileCheck",
      description: "Published research paper titled 'An Intelligent Street Lighting System', focusing on automated energy optimization, sensor mesh networks, and dynamic energy conservation.",
      tag: "Research & Publication"
    },
    {
      title: "3rd Place Podium - Hackathon",
      issuer: "Inter-College Innovation Hackathon",
      iconName: "Trophy",
      description: "Secured 3rd place podium award for conceiving, engineering, and presenting a working full-stack software prototype under strict 24-hour time constraints.",
      tag: "Innovation & Speed"
    },
    {
      title: "Production Performance Excellence",
      issuer: "Marlow Navigation & Hemex Health",
      iconName: "Zap",
      description: "Recognized for proactive debugging and optimization that achieved sub-50ms API latencies, 40% PostgreSQL load reduction, and 30% connection stability improvement in live deployments.",
      tag: "High Impact"
    }
  ] as AchievementItem[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Hindustan Institute of Technology and Science",
      location: "Chennai, TN",
      period: "Aug 2021 – May 2023",
      highlights: [
        "Advanced specialization in Distributed Systems, Database Architectures, and Full-Stack Engineering.",
        "Lead technical researcher for smart IoT and energy optimization systems."
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science (B.Sc CS)",
      institution: "St. Xavier's College",
      location: "Tirunelveli, TN",
      period: "Jun 2018 – May 2021",
      highlights: [
        "Core foundational coursework in Data Structures, Algorithms, Operating Systems, and Object-Oriented Programming.",
        "Hackathon finalist and active coding club contributor."
      ]
    }
  ] as EducationItem[],

  codeSnippet: `const jefinAgilbert = {
  role: "Software Engineer",
  focus: ["Distributed Systems", "Sub-50ms APIs", "React Native"],
  backend: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Kafka"],
  mobileAndWeb: ["React Native", "React", "Next.js", "TypeScript"],
  devOps: ["Docker", "Kubernetes", "GitHub Actions", "Bitrise"],
  achievements: [
    "Published IEEE Paper on Smart Energy Automation",
    "40% Database Load Reduction via Redis Caching",
    "Sub-50ms Production API Latency",
    "60% Deployment Automation with CI/CD"
  ],
  availableForCollaboration: true,
};`
};
