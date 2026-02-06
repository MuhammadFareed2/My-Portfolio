export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },

  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/meeting-companio.png',
    title: 'Meeting Companion',
    description:
      'Full meeting automation platform with transcripts, minutes of meeting, and action items generation. Features real-time audio processing and AI-powered summaries.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'AssemblyAI',
      'DeepSeek',
      'TypeScript',
      'Cloudinary',
    ],
    links: {
      preview: 'https://meeting-companion.vercel.app/',
      github: 'https://github.com/MuhammadFareed2/Meeting-Companion-Frontend',
    },
  },
  {
    image: '/images/brief-ai.png',
    title: 'Brief AI',
    description:
      'AI-powered tool that transforms messy creative briefs into structured, professional documents with intelligent clarifying questions. Includes dashboard and history tracking.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenAI API',
      'Tailwind',
      'JWT',
    ],
    links: {
      preview: 'https://brief-ai-frontend.vercel.app/',
      github: 'https://github.com/MuhammadFareed2/Brief-AI',
    },
  },
  {
    image: '/images/ai-finance-application.png',
    title: 'AI Money & Budget App',
    description:
      'AI-powered finance app with multi-wallet tracking, smart budgets, and real-time insights. Includes chat-based transaction entry, auto-categorization, and OCR receipt scanning.',
    technologies: [
      'React Native',
      'NativeWind',
      'Node.js',
      'MongoDB',
      'Clerk',
      'OpenAI',
      'OCR',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    image: '/images/ai-crm-dashboard.png',
    title: 'CRM Dashboard',
    description:
      'Comprehensive dashboard for tracking leads, customers, and sales metrics. Features real-time updates and interactive visualizations using Recharts.',
    technologies: [
      'React',
      'TypeScript',
      'LangChain',
      'LangGraph',
      'Node.js',
      'Express',
      'MongoDB',
      'Zustand',
      'Recharts',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
] as const;

export const educationData = [
  {
    title: 'Data Science & Artificial Intelligence',
    company: 'Saylani Mass IT Training',
    period: '2025 – Present',
    description:
      'Deepening expertise in AI/ML pipelines, handling complex datasets with Pandas/NumPy, and building predictive models. Focusing on practical applications of GenAI and LLMs.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'GenAI'],
  },
  {
    title: 'Intermediate in Computer Science',
    company: 'The Govt National College',
    description:
      'Building a strong theoretical foundation in computer science, logic building, and mathematics. Active member of the CS society.',
    period: '2025 – Present',
    technologies: ['Computer Science', 'Mathematics', 'Logic'],
  },
  {
    title: 'Web & App Development Diploma',
    company: 'Saylani Mass IT Training (SMIT)',
    description:
      'Intensive 1-year bootcamp mastering the MERN stack. Built multiple production-grade applications, learned agile methodologies, and collaborated on team projects.',
    period: '2024',
    technologies: [
      'MERN Stack',
      'TypeScript',
      'Next.js',
      'NativeWind',
      'PostgreSQL',
    ],
  },
  {
    title: 'O Level in Computer Science',
    company: 'The Zatians Academy',
    description:
      'Achieved excellence in core computer science subjects. Developed early passion for coding through basic programming projects.',
    period: '2023 – 2025',
    technologies: ['Programming Basics', 'Algorithms'],
  },
] as const;

export const experienceData = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelancer (Remote)',
    description:
      'Built and deployed full-stack applications using modern frameworks. Integrated third-party APIs and delivered production-ready features with scalable architecture and CI/CD pipelines.',
    period: '2024 – Present',
    technologies: [
      // Frontend
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript ES6',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Redux',

      // Backend
      'Node.js',
      'Express.js',
      'REST API',

      // Realtime / Integrations
      'Socket.IO',
      'Firebase',
      'Supabase',
      'Stripe',
      'OpenAI',

      // Databases
      'MongoDB',
      'PostgreSQL',

      // DevOps (Freelance only)
      'Docker',
      'GitHub Actions (CI/CD)',

      // Mobile
      'React Native',
    ],
  },
  {
    title: 'Full-Stack Training Projects',
    company: 'Saylani Mass IT Training (Onsite)',
    description:
      'Completed hands-on projects as part of a full-stack development diploma. Built MERN applications with authentication, dashboards, APIs, and collaborative Git/GitHub version control.',
    period: '2024',
    technologies: [
      // Frontend
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript ES6',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Redux',

      // Backend
      'Node.js',
      'Express.js',
      'REST API',

      // Realtime / Integrations
      'Socket.IO',
      'Firebase',
      'Supabase',

      // Databases
      'MongoDB',
      'PostgreSQL',

      // Tools (Not DevOps)
      'Git/GitHub',

      // Mobile
      'React Native',
    ],
  },
] as const;

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'Redux',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets (Socket.io)',
      'FastAPI',
      'Python',
    ],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase (Firestore)'],
  },
  {
    category: 'AI / LLM Tools',
    skills: ['OpenAI API', 'LangChain', 'LangGraph', 'Prompt Engineering'],
  },
  {
    category: 'Automation & Tools',
    skills: [
      'n8n',
      'Cursor',
      'Antigravity',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn (basics)'],
  },
] as const;
