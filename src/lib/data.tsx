import { Icons } from '@/components/icons';

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
    image: '/images/project1.png',
    title: 'Personal Portfolio',
    description:
      'A personal portfolio built with React and Next.js to showcase projects, skills, and experience. Features smooth animations, responsive design, and a contact form powered by Resend.',
    technologies: [
      'Frontend',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Resend',
    ],
    links: {
      preview: 'https://muhammadfareed.vercel.app',
      github: 'https://github.com/MuhammadFareed2/My-Portfolio',
    },
  },
  {
    image: '/images/project2.png',
    title: 'BriefAI',
    description:
      'BriefAI is an AI-powered tool that turns messy briefs into structured ones with clarifying questions and missing info detection. It includes a dashboard, history tracking, and a detailed brief page for easy management.',
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'AI Integration',
      'Tailwind',
      'JWT',
    ],
    links: {
      preview: 'https://brief-ai-frontend.vercel.app/',
      github: 'https://github.com/MuhammadFareed2/Brief-AI',
    },
  },
] as const;

export const educationData = [
  {
    title: 'Intermediate in Computer Science',
    company: 'The Govt National College, Karachi',
    description:
      'Currently pursuing Intermediate in Computer Science with a focus on programming fundamentals, problem-solving, and core concepts of software development.',
    period: 'Aug 2025 – Present',
    technologies: ['Computer Science', 'Mathematics', 'Logic'],
  },
  {
    title: 'O Level in Computer Science',
    company: 'The Zatians Academy, Karachi',
    description:
      'Completed O Level with a specialization in Computer Science, covering core subjects such as programming basics, data structures, and algorithms.',
    period: 'Jun 2023 – Jun 2025',
    technologies: ['Computer Science', 'O Level Curriculum'],
  },
  {
    title: 'Web & App Development Diploma',
    company: 'Saylani Mass IT Training (SMIT), Karachi',
    description:
      'Successfully completed a one-year diploma focusing on full-stack web and app development, including hands-on training in modern frameworks and technologies.',
    period: 'Jan 2024 – Dec 2024',
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript ES6',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Redux',
      'Node.js',
      'Express.js',
      'REST API',
      'Socket.IO',
      'Firebase',
      'Supabase',
      'MongoDB',
      'PostgreSQL',
      'React Native',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.angular className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
] as const;
