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
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
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
    slug: 'ai-crm-dashboard',
    image: '/images/AI-CRM-Chatbot.png',
    title: 'AI CRM Dashboard - Automated Chatbot',
    description:
      'Multi-platform AI chatbot for fintech CRM with voice integration. Integrated with WhatsApp, Facebook, SMS, and Web.',
    fullDescription:
      'A high-concurrency, multi-platform AI chatbot system designed for Fintech CRM. It leverages RAG (Retrieval-Augmented Generation) and vector search to provide accurate, real-time answers to customer queries. The system handles voice and text across multiple channels including WhatsApp, Facebook, SMS, and Web, significantly reducing manual support workload while improving customer experience.',
    features: [
      'Multi-platform integration (WhatsApp, FB, SMS, Web)',
      'AI Chatbot using RAG and Vector Search',
      'Voice and Text support',
      'Real-time high-concurrency handling',
      'Pinecone Vector DB for intelligent context retrieval',
    ],
    technologies: [
      'MERN Stack',
      'OpenAI API',
      'LangChain',
      'LangGraph',
      'Pinecone',
      'TypeScript',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    slug: 'repurn-fitness',
    image: '/images/Repurn-Ai.png',
    title: 'Repurn — Ai Fitness App',
    description:
      'A habit-first fitness app removing excuses with AI scoring and computer vision rep counting.',
    fullDescription:
      'Repurn is a revolutionary fitness application that prioritizes consistency over intensity. It uses a custom "Rep Engine" scoring algorithm to select a single, perfectly calibrated exercise for the user each day. The app features on-device computer vision for automatic rep counting and provides AI-powered behavioral insights to help users maintain their streaks.',
    features: [
      'Rep Engine: Custom exercise selection algorithm',
      'Computer Vision: On-device pose detection for rep counting',
      'AI-Powered Insights: Behavioral pattern analysis',
      'Streak & Rank System: Gamified progression',
      'Smart Notifications: Learned delivery timing',
    ],
    technologies: [
      'React Native',
      'NativeWind',
      'Pose Detection (MLKit)',
      'Node.js',
      'MongoDB',
      'Framer Motion',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    slug: 'taxi-messages',
    image: '/images/texi-messages.png',
    title: 'Taxi Messages (Driver Messaging Web App)',
    description:
      'AI SaaS used by 80+ taxi operators, handling 150K+ messages daily with automated WhatsApp booking.',
    fullDescription:
      'A powerful AI-driven SaaS platform that automates communication between taxi operators and customers. Handling over 150,000 messages daily, the system uses an intelligent WhatsApp chatbot to automate bookings and provide instant replies. It is built for extreme scalability and high concurrency, serving as a critical tool for dozens of businesses.',
    features: [
      'AI-driven WhatsApp chat automation',
      'Real-time automated taxi booking',
      'Scalable backend for high message volume',
      'Multi-operator dashboard',
      'Instant reply system with contextual awareness',
    ],
    technologies: [
      'MERN Stack',
      'OpenAI API',
      'Node.js',
      'React',
      'MongoDB',
      'Socket.io',
    ],
    links: {
      preview: '',
      github: '',
    },
  },
  {
    slug: 'ai-meeting-assistant',
    image: '/images/Meeting-Assistant.png',
    title: 'AI Powered Meeting Assistant',
    description:
      'Meeting management platform with recording uploads, accurate transcripts, and automated MoM generation.',
    fullDescription:
      'Meeting Companion is an end-to-end AI management platform for corporate meetings. Users can upload recordings, which are then processed into high-accuracy transcripts. The system automatically structures these into Minutes of Meeting (MoM) with action items and summaries. It features secure OTP-based authentication and a professional workflow for meeting documentation.',
    features: [
      'Seamless meeting recording uploads',
      'Automated high-accuracy transcription',
      'AI-generated structured Minutes of Meeting (MoM)',
      'Video-to-audio conversion pipeline',
      'Secure OTP-based authentication system',
    ],
    technologies: [
      'MERN Stack',
      'TypeScript',
      'AssemblyAI',
      'DeepSeek',
      'OpenRouter',
      'Railway (CI/CD)',
    ],
    links: {
      preview: 'https://meeting-companion.railway.app/',
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
