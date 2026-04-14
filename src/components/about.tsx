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
      <div className="mb-20 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-28">
        <p className="mb-4">
          I&apos;m Muhammad Fareed, a Full Stack Developer and AI Software
          Engineer with 2 years of experience building scalable digital products
          and AI-powered applications. I specialize in the MERN stack, Next.js,
          and React Native for responsive apps, while building robust REST APIs
          and architectures using Node.js and Python. I&apos;m passionate about
          integrating AI and automation into real-world products using tools
          like OpenAI and LangChain to create intelligent systems.
        </p>
        <p>
          My focus is simple: helping founders and businesses solve real
          problems and turn ideas into scalable, production-ready products
          quickly. If you need a developer who delivers intelligent solutions,
          let&apos;s connect.
        </p>

      </div>
    </motion.section>
  );
};
