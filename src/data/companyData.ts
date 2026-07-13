import { Service, Project, Testimonial, TeamMember, JobOpening } from '../types';

import shravanImage from '../assets/images/shravan.jpeg';
import pruthvirajImage from '../assets/images/Pruthvi Pic.jpg';
import surajImage from '../assets/images/suraj.jpeg';
import shitalImage from '../assets/images/shital.jpeg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Bespoke, high-performance web applications built with architectural rigour and speed.',
    longDescription: 'Our Web Development team focuses on creating blazing-fast, secure, and visually stunning web applications optimized for scale. We build responsive platforms, enterprise portals, and SaaS dashboards designed to keep users engaged and convert leads with pixel-perfect accuracy.',
    iconName: 'Laptop',
    benefits: [
      'Built for extreme speeds and low latencies',
      'Fully responsive, mobile-first design architecture',
      'Clean, semantic, SEO-optimized HTML Structure',
      'Integration with modern APIs, WebSockets, and CDNs'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'],
    colorClass: 'from-blue-500/20 to-cyan-500/20 text-blue-600'
  },
  {
    id: 'springboot-dev',
    title: 'Spring Boot Development',
    description: 'Enterprise REST APIs and robust microservices systems engineered with Spring Boot.',
    longDescription: 'Our core expertise includes crafting robust enterprise backend systems using Spring Boot. We map intricate domain schemas, establish message queues, and enforce secure JWT-based stateless authorization modules to drive complex transaction engines safely.',
    iconName: 'Cpu',
    benefits: [
      'Highly stable JVM architecture suitable for financial transaction loads',
      'Declarative access controls and military-grade encryption keys',
      'Automated load balancing and persistent cluster configuration',
      'Durable connector adapters supporting relational/NoSQL backends'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'PostgreSQL'],
    colorClass: 'from-emerald-500/20 to-teal-500/20 text-emerald-600'
  },
  {
    id: 'react-dev',
    title: 'React Development',
    description: 'Elegant React components, interactive single-page architectures, and responsive flow.',
    longDescription: 'We design responsive UI/UX layers utilizing state-of-the-art React. Our custom setups utilize precise layout animations, atomic state management, and reusable components to deliver clean user experiences tailored to meet modern corporate standards.',
    iconName: 'Atom',
    benefits: [
      'Component-oriented, clean typescript logic structure',
      'Optimized virtual DOM renders and memoized computation',
      'Stateful interactivity powered by stable custom hooks',
      'Fluid page transitions and custom SVG asset overlays'
    ],
    techStack: ['React 19', 'Tailwind v4', 'Framer Motion', 'Zustand', 'Vite'],
    colorClass: 'from-indigo-500/20 to-blue-500/20 text-indigo-600'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, automated CI/CD triggers, and robust container orchestrations.',
    longDescription: 'Transform your legacy infrastructure into modern, flexible environments. We draft robust multi-region topologies on AWS and GCP, establishing containerized pipelines under Kubernetes, auto-scale monitors, and high-availability backup systems.',
    iconName: 'Cloud',
    benefits: [
      'Zero-downtime rolling deployments via automated pipelines',
      'Over 99.99% uptime with geometric self-healing clustering',
      'Robust cost optimization tracking and telemetry alerts',
      'Infrastructure as Code (IaC) with reproducible blueprints'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    colorClass: 'from-violet-500/20 to-purple-500/20 text-violet-600'
  },
  // {
  //   id: 'ai-solutions',
  //   title: 'AI Solutions',
  //   description: 'Custom machine learning models, smart semantic searches, and automated pipeline intelligence.',
  //   longDescription: 'Supercharge your user experience with modern artificial intelligence. We integrate LLM solutions, configure vector databases for smart retrieval-augmented generation (RAG), and deploy secure pipeline analytics to automate complex business workflows.',
  //   iconName: 'Sparkles',
  //   benefits: [
  //     'Context-aware LLM agents built around specialized business fields',
  //     'Advanced optical character recognition and visual pattern assets',
  //     'Predictive analytics forecast dashboards based on data history',
  //     'Fully secure, private model parameters with sanitized tokens'
  //   ],
  //   techStack: ['Gemini API', 'Python', 'PyTorch', 'Pinecone', 'LangChain'],
  //   colorClass: 'from-pink-500/20 to-rose-500/20 text-pink-600'
  // }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'apexfin-platform',
    title: 'ApexFin Cloud Migration & Bank Core',
    description: 'A multi-region FinTech microservice backend managing transactions securely for international commerce.',
    longDescription: 'ApexFin required a complete server-side rewrite to support 15,000 transactions per second. We designed an isolated Spring Boot architecture deployed in Docker clusters across multi-region AWS zones, secured with oauth layers and connected to PostgreSQL databases.',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techTags: ['Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'Java'],
    client: 'Apex Fintech Corp',
    timeline: '8 Months',
    results: [
      'Reduced server response latency from 450ms down to 18ms',
      'Scaled system database limits to manage over 1 billion historical entries',
      'Eliminated service disruptions completely across an entire fiscal year (100% uptime)'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'nexahealth-mobile',
    title: 'NexaHealth Patient Monitoring Suite',
    description: 'A responsive React Native mobile app providing real-time telemetry and immediate emergency responses.',
    longDescription: 'We developed NexaHealth, a modern HIPAA-compliant native mobile application suite. It pulls continuous biometric metrics from modern smartwatches, charts heart rate and arterial saturation trends, and triggers visual warning alerts through instant push notifications.',
    category: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    techTags: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'iOS & Android'],
    client: 'Nexa Health Partners',
    timeline: '6 Months',
    results: [
      'Achieved a 4.9 App Store rating during the beta testing release',
      'Safely analyzed biometric logs for over 120,000 active patients',
      'Minimized Bluetooth beacon synchronization failure rates by 94%'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'logiflow-dashboard',
    title: 'LogiFlow Supply Chain Dashboard',
    description: 'An advanced analytics and distribution map visualizer built for globally connected supply chains.',
    longDescription: 'LogiFlow aggregates physical container positions, customs status, and weather forecasts onto an interactive map panel. Built around robust React layouts and fluid D3 visualizations, it supports real-time logistics tracking and automated delays mitigation.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    techTags: ['React', 'D3.js', 'Tailwind CSS', 'Vite', 'TypeScript'],
    client: 'LogiFlow Global',
    timeline: '5 Months',
    results: [
      'Empowered logistic leads to plan routes and save $14M in fuel overhead',
      'Rendered thousands of active vector markers with perfect 60fps refresh speeds',
      'Automated custom inspection document routing across 40 shipping terminals'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'edusphere-lms',
    title: 'EduSphere Academic Portal',
    description: 'A responsive digital academy hub hosting educational coursework and real-time remote testing classrooms.',
    longDescription: 'EduSphere is an education platform hosting dynamic video content, progress counters, and secure remote examination rooms. We linked a secure backend cluster (microservices JVM) with a modular React frontend to allow clean file uploads and secure user grading.',
    category: 'React Development',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    techTags: ['Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'JWT Auth'],
    client: 'EduSphere Foundation',
    timeline: '4 Months',
    results: [
      'Successfully served over 75,000 active students concurrently',
      'Maintained resilient testing environments with zero connection failures',
      'Improved video course page loading speeds by 140% via Cloudflare setup'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'auracommerce-shop',
    title: 'AuraCommerce High-End Retail Engine',
    description: 'A modular, headless shopping application with immediate page loading speeds and fluid filters.',
    longDescription: 'Built with optimized React frameworks and Next constructs, AuraCommerce hooks directly into global warehouse APIs. It leverages a modern edge caching matrix to present thousands of design items instantly with extremely fast checkouts.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
    techTags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'GraphQL'],
    client: 'Aura Luxury Group',
    timeline: '6 Months',
    results: [
      'Boosted client checkout conversions by 31% within the initial month',
      'Attained perfect 100/100 Lighthouse performance metrics overall',
      'Seamlessly handled unexpected traffic spikes of 30x the normal load during major sales'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'insightai-vision',
    title: 'InsightAI Product Scanner',
    description: 'A deep-learning smart scanner that automates factory inventory sorting through camera feeds.',
    longDescription: 'InsightAI utilizes visual scanning algorithms to categorize manufacturing inventory directly from live high-definition camera arrays. Operating server-side microflows, this app tags and issues automated inventory reports in milliseconds.',
    category: 'AI Solutions',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80',
    techTags: ['Gemini API', 'Python', 'PyTorch', 'React', 'Docker'],
    client: 'Insight Manufacturing Ltd',
    timeline: '9 Months',
    results: [
      'Replaced human error rates, boosting inventory scanning precision to 99.8%',
      'Handled the automated categorization of over 2.4 million parts weekly',
      'Configured early failure alerts, preventing lines from idling under bottleneck stalls'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'Vanguard Banking Solutions',
    content: "Code Crafters Services reconstructed our transaction systems from scratch. Their clean Spring Boot architecture and resilient multi-zone deployment plan completely eliminated our legacy server downtime. True enterprise-grade engineering.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Founder',
    company: 'GreenLife Logistics',
    content: "The delivery of our global mapping dashboard was on budget and ahead of schedule. The responsiveness of their custom React + D3 layer is exceptional—managing hundreds of micro-updates securely in real time.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't3',
    name: 'Amanda Ross',
    role: 'VP of Product',
    company: 'HealthSync Applets',
    content: "Our patient-care applet required strict security and fluid responsive graphics. Code Crafters delivered a masterpiece that passed external compliance testing instantly. They maintain a stellar level of discipline.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Shravan Jagadannavar',
    designation: 'CEO & Principal Architect',
    image: shravanImage,
    bio: 'Marcus has over 15 years of industry tenure designing software networks for financial blue-chips and digital startups. He leads the design team with an obsession for performance and clean code frameworks.',
    skills: ['Enterprise Systems Design', 'Java Architecture', 'Kubernetes Clusters', 'IT Leadership'],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'marcus@codecrafters.example.com'
    }
  },
  //
  //{
  //   id: 'tm1',
  //   name: 'Pruthviraj Patil',
  //   designation: 'DEVELOPER & Principal Architect',
  //   image: pruthvirajImage,
  //   bio: 'Marcus has over 15 years of industry tenure designing software networks for financial blue-chips and digital startups. He leads the design team with an obsession for performance and clean code frameworks.',
  //   skills: ['Enterprise Systems Design', 'Java Architecture', 'Kubernetes Clusters', 'IT Leadership'],
  //   socials: {
  //     linkedin: 'https://linkedin.com',
  //     twitter: 'https://twitter.com',
  //     github: 'https://github.com',
  //     email: 'marcus@codecrafters.example.com'
  //   }
  // },
  {
    id: 'tm2',
    name: 'Suraj Patil',
    designation: 'Manager',
    image: surajImage,
    bio: 'Elena is a leading specialist in modular UI systems and rich data visualizations. She guarantees that every web layout we craft features absolute layout alignment and responsive, fluid design.',
    skills: ['Team Manage', 'Client-meet', 'Framer Motion Design'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'elena@codecrafters.example.com'
    }
  },
  {
    id: 'tm3',
    name: 'Shital Patil',
    designation: 'HR',
    image: shitalImage,
    bio: 'Siddharth oversees our microservice architecture deployments and database schemas. An authority on Spring Boot and Hibernate mapping, he builds systems prepared for unexpected user traffic swings.',
    skills: ['HR', 'Talent Acquisition', 'Employee Engagement'],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'siddharth@codecrafters.example.com'
    }
  }
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Frontend Engineer (React)',
    department: 'Software Engineering',
    location: 'Remote (US/Europe/India)',
    type: 'Full-time',
    experience: '5+ Years',
    salaryRange: '$110,000 - $140,000 / Year',
    description: 'We are seeking an ambitious Senior React Engineer to craft fluid components for global analytics systems. You will collaborate closely with product managers and cloud specialists to deliver secure, responsive dashboards.',
    requirements: [
      'Advanced command of React 18/19, TypeScript, and modern state architectures (Zustand, Redux Toolkit)',
      'Substantial familiarity with styling libraries like Tailwind CSS or styled-components',
      'Solid grasp of performance tuning (memoization, rendering optimizations, layouts profiling)',
      'A deep aesthetic eye for micro-interactions and smooth, high-fidelity user flows'
    ],
    responsibilities: [
      'Ship clean, well-tested, and performant user interface components',
      'Contribute to our internal, reusable design tokens and layout templates',
      'Mentor intermediate developer teammates and participate in detailed code reviews',
      'Review layout blueprints with UI engineers to verify technical viability before coding starts'
    ]
  },
  {
    id: 'job-2',
    title: 'Senior Backend Developer (Spring Boot / Java)',
    department: 'Engineering Platforms',
    location: 'Hybrid (Berlin, Germany / Pune, India)',
    type: 'Full-time',
    experience: '6+ Years',
    salaryRange: '$120,000 - $155,000 / Year',
    description: 'Join our backend squad and architect stable REST services, microservice structures, and resilient data layers using Spring Boot. You are responsible for designing systems that scale dynamically.',
    requirements: [
      'Strong, production-verified skills with Java (17+) and the complete Spring Ecosystem',
      'Deep knowledge of transactional databases, query optimizations, and database scaling (PostgreSQL/MySQL)',
      'Familiarity with containerized execution via Docker, Kubernetes, and serverless architectures',
      'Familiarity with OAuth2 protocols, Spring Security, and distributed caching (Redis)'
    ],
    responsibilities: [
      'Architect robust API architectures and message queues (Kafka, RabbitMQ)',
      'Improve slow database queries to maintain microsecond API response metrics',
      'Integrate third-party services securely with structured retry and circuit-breaker patterns',
      'Document security policies and coordinate regular vulnerability checks on internal systems'
    ]
  },
  {
    id: 'job-3',
    title: 'Cloud DevOps Architect',
    department: 'Infrastructure & DevOps',
    location: 'Remote (APAC/Europe)',
    type: 'Full-time',
    experience: '4+ Years',
    salaryRange: '$100,000 - $135,000 / Year',
    description: 'Manage the scale and security of our client environments on cloud environments. You will implement Infrastructure-as-code models to streamline server automation and deployment times.',
    requirements: [
      'Extensive experience with AWS (EKS, RDS, S3) or Google Cloud Platform frameworks',
      'Impeccable hands-on experience with Terraform or equivalent Infrastructure-as-code structures',
      'Detailed understanding of continuous delivery (CD) patterns and automated testing workflows',
      'Familiarity with container orchestration (Kubernetes) and containerized builds (Docker)'
    ],
    responsibilities: [
      'Establish robust multi-region deployment blueprints for automated services',
      'Observe real-time traffic logs and deploy system scaling parameters to address load spikes',
      'Analyze hosting budgets and prune idle, unused storage elements',
      'Ensure the server setups comply with relevant compliance rules (HIPAA, GDPR, SOC2)'
    ]
  }
];
