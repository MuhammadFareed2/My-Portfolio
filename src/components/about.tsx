'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
I&apos;m Muhammad Fareed, a full-stack developer from Pakistan with a
passion for building modern, scalable applications. I enjoy turning
complex problems into simple, elegant solutions through clean code
and thoughtful design. My expertise covers React, Next.js, Angular,
Node.js, Express, and databases like PostgreSQL and MongoDB. I also
have hands-on experience with Redux, React Native, Firebase, Supabase,
and real-time technologies like Socket.IO, while currently exploring
Data Science and AI.


        </p>
        <p>
          I&apos;m open to opportunities where I can contribute my skills, grow
          professionally, and work on impactful projects. If you&apos;re looking
          for a developer who can deliver quality and adapt quickly, feel free
          to reach out.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
