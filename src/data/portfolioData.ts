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
  titleExtended: "React Native Specialist & Backend Architect",
  tagline: "Architecting high-performance React Native mobile applications, resilient Node.js backends, and low-latency database engines.",
  location: "Chennai, India",
  email: "jefinagilbert@gmail.com",
  phone: "+91 6383916053",
  linkedin: "https://linkedin.com/in/jefin-agilbert-35948a20b",
  github: "https://github.com/jefinagilbert",
  repoUrl: "https://github.com/jefinagilbert/jefinagilbert",
  
  about: {
    summary: `Software Engineer with 3+ years of experience bridging high-performance React Native cross-platform mobile interfaces with robust Node.js and PostgreSQL backends. Experienced in driving end-to-end features—from mobile UI optimization and IoT socket communication to database engine internals, event-driven streaming, and automated CI/CD releases.`,
    highlights: [
      "3+ years of end-to-end engineering across production mobile apps and distributed backends.",
      "Engineered sub-50ms API response pipelines with Node.js, Redis, B-Tree indexing, and optimized PostgreSQL schemas.",
      "Built real-time Kafka event streaming & Socket.IO protocols for medical diagnostic and maritime telematics.",
      "Reduced CI/CD deployment overhead by 60% with Docker containerization and Bitrise/GitHub Actions.",
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
      category: "React Native & Mobile Frontend",
      icon: "Smartphone",
      description: "High-performance cross-platform iOS & Android apps, state management, and sockets",
      skills: [
        { name: "React Native", level: 96, highlight: true },
        { name: "Redux Toolkit", level: 92, highlight: true },
        { name: "Socket.IO & WebSockets", level: 92, highlight: true },
        { name: "React.js", level: 90, highlight: false },
        { name: "Next.js", level: 86, highlight: false },
        { name: "TypeScript", level: 92, highlight: false },
        { name: "Design Systems & UI", level: 90, highlight: true },
        { name: "Tailwind CSS", level: 90, highlight: false },
      ]
    },
    {
      category: "Backend & Distributed Systems",
      icon: "Server",
      description: "API Gateway routing, bounded contexts, idempotency, and Node.js microservices",
      skills: [
        { name: "Node.js & Express", level: 95, highlight: true },
        { name: "API Gateway Routing", level: 92, highlight: true },
        { name: "Event-Driven Architecture", level: 94, highlight: true },
        { name: "Idempotency Guarantees", level: 90, highlight: true },
        { name: "Bounded Contexts (DDD)", level: 88, highlight: true },
        { name: "RESTful APIs & GraphQL", level: 92, highlight: false },
        { name: "System Design", level: 90, highlight: true },
      ]
    },
    {
      category: "Databases & Engine Internals",
      icon: "Database",
      description: "ACID compliance, B-Tree indexes, PgBouncer pooling, Redis, and sharding",
      skills: [
        { name: "PostgreSQL", level: 95, highlight: true },
        { name: "ACID Compliance", level: 94, highlight: true },
        { name: "Redis Caching & Pub/Sub", level: 92, highlight: true },
        { name: "Database Engine Internals", level: 90, highlight: true },
        { name: "B-Tree Indexing", level: 92, highlight: true },
        { name: "PgBouncer Connection Pooling", level: 88, highlight: true },
        { name: "Database Sharding", level: 86, highlight: false },
        { name: "MongoDB", level: 85, highlight: false },
      ]
    },
    {
      category: "Systems & Network Protocols",
      icon: "Activity",
      description: "Apache Kafka streaming, OS memory management, and TCP network protocols",
      skills: [
        { name: "Apache Kafka", level: 90, highlight: true },
        { name: "OS Memory Management", level: 88, highlight: true },
        { name: "Network Protocols (TCP/Sockets)", level: 90, highlight: true },
        { name: "Socket Telemetry", level: 92, highlight: true },
        { name: "Stream Partitioning", level: 86, highlight: false },
      ]
    },
    {
      category: "DevOps & Cloud Automation",
      icon: "Cpu",
      description: "Containerization, automated pipelines, quality analysis, and zero-downtime releases",
      skills: [
        { name: "Docker", level: 90, highlight: true },
        { name: "Kubernetes", level: 80, highlight: false },
        { name: "GitHub Actions", level: 90, highlight: true },
        { name: "Bitrise CI/CD", level: 88, highlight: true },
        { name: "Sonatype Nexus Distribution", level: 85, highlight: true },
        { name: "SonarQube Quality Gates", level: 86, highlight: false },
        { name: "Monorepo Management", level: 88, highlight: true },
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
        "Designed ACID-compliant PostgreSQL schemas with B-Tree indexes, Redis caching, and PgBouncer connection pooling, reducing database load by 40% and cutting API latency under 50ms.",
        "Engineered real-time data streaming pipelines via socket communication, leveraging Apache Kafka with bounded contexts to ensure reliable, idempotent event-driven processing.",
        "Containerized backend services with Docker and automated CI/CD via Bitrise and GitHub Actions, reducing manual deployment time by 60% while achieving zero-downtime releases for frontend and backend.",
        "Streamlined full-stack development workflows within a monorepo environment, resolving SonarQube-reported code smells to ensure long-term maintainability across both client and server codebases.",
        "Contributed to a scalable front-end design system published via Sonatype Nexus, accelerating cross-project UI feature delivery while maintaining cross-platform consistency."
      ],
      skills: ["React Native", "Node.js", "Express.js", "PostgreSQL", "ACID Compliance", "B-Tree Indexing", "PgBouncer", "Redis", "Apache Kafka", "Docker", "Bitrise", "GitHub Actions", "Sonatype Nexus"]
    },
    {
      company: "Hemex Health",
      role: "React Native Developer",
      period: "Oct 2024 – May 2025",
      location: "Coimbatore, India",
      description: [
        "Developed a React Native application enabling real-time monitoring and control of portable Wi-Fi medical diagnostic devices.",
        "Implemented Socket.IO and network protocols with embedded diagnostic systems, decreasing connectivity drops by over 30% and improving real-time data sync reliability.",
        "Optimized OS memory management, Redux Toolkit state, and mobile rendering pipelines, reducing UI lag and eliminating frame drops on mobile hardware.",
        "Diagnosed and resolved critical production integration issues, enhancing application stability and improving overall medical diagnostic device reliability."
      ],
      skills: ["React Native", "Redux Toolkit", "Socket.IO", "Network Protocols", "OS Memory Management", "TypeScript", "Diagnostic Telemetry"]
    },
    {
      company: "Carecentra",
      role: "Product Engineer",
      period: "March 2023 – Sept 2024",
      location: "Chennai, India",
      description: [
        "Developed and maintained cross-platform mobile and web applications utilizing React Native and React.js, delivering responsive and user-centric interfaces.",
        "Built and integrated RESTful APIs and GraphQL endpoints using Node.js and Express, facilitating seamless and secure data communication between client-side applications and the server.",
        "Managed data persistence and retrieval by writing structured SQL queries and implementing CRUD operations in PostgreSQL and MongoDB, ensuring accurate data display on the front-end.",
        "Collaborated across the stack to debug and resolve complex issues, tracing data flow from UI components down to the backend database to improve overall application stability.",
        "Participated in Agile development workflows, utilizing standard version control (Git) and collaborative tools to reliably deliver feature enhancements across sprint cycles."
      ],
      skills: ["React Native", "React.js", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Git"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      title: "Medical Diagnostic Device Wi-Fi Controller",
      category: "Mobile & Embedded IoT",
      tagline: "High-performance React Native mobile diagnostic application",
      description: "Engineered a mission-critical React Native mobile application for real-time monitoring and control of portable Wi-Fi diagnostic hardware. Built with Socket.IO telemetry streaming, Redux Toolkit state sync, and OS memory optimization preventing frame drops.",
      metrics: "30% Fewer Connection Drops | Real-Time Sync",
      techStack: ["React Native", "Redux Toolkit", "Socket.IO", "WebSockets", "TypeScript", "IoT Protocols"],
      featured: true,
      architectureType: "React Native Socket Controller",
      githubUrl: "https://github.com/jefinagilbert",
    },
    {
      title: "Maritime Fleet Telemetry & Event Streaming Platform",
      category: "Distributed Backend & IoT",
      tagline: "Sub-50ms real-time event pipeline for maritime operations",
      description: "Architected a high-throughput event processing pipeline integrating Apache Kafka and Redis for real-time vessel telemetry, synchronized with a cross-platform React Native client app. Employs API Gateway routing, PgBouncer pooling, and idempotent consumer queues.",
      metrics: "< 50ms API Latency | 40% DB Load Reduction",
      techStack: ["React Native", "Node.js", "Express", "Apache Kafka", "PgBouncer", "Redis", "PostgreSQL", "Docker"],
      featured: true,
      architectureType: "Event-Driven Microservices",
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
      description: "Designed a production monorepo infrastructure unifying React Native mobile apps, Next.js web portals, and Node.js microservices with bounded contexts, SonarQube automated code quality gates, Sonatype Nexus packages, and Bitrise/GitHub Actions pipelines.",
      metrics: "60% Faster Release Cycle | Zero Downtime",
      techStack: ["React Native", "Next.js", "React.js", "Docker", "GitHub Actions", "Bitrise", "Sonatype Nexus"],
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
  mobileCore: [
    "React Native",
    "Redux Toolkit",
    "Socket.IO",
    "WebSockets",
    "Design Systems (Nexus)"
  ],
  webStack: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],
  backendAndAPIs: [
    "Node.js",
    "Express.js",
    "API Gateway Routing",
    "Event-Driven (Kafka)",
    "Idempotency",
    "Bounded Contexts"
  ],
  databaseInternals: [
    "PostgreSQL",
    "ACID Compliance",
    "Redis (Cache & PubSub)",
    "PgBouncer Pooling",
    "B-Tree Indexing",
    "Database Sharding",
    "MongoDB"
  ],
  infrastructure: [
    "Docker",
    "GitHub Actions",
    "Bitrise CI/CD",
    "OS Memory Management",
    "Network Protocols"
  ],
  availableForCollaboration: true,
};`
};
