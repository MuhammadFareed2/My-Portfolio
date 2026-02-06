import { motion } from 'framer-motion';

import { SectionHeading } from './section-heading';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { skillsData } from '@/lib/data';


export const Skills = () => {
  const { ref: sectionRef } = useSectionInView('Skills'); // Ensure "Skills" is in your types/links if using active-section

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading
        heading="My Skills"
        content="A comprehensive list of my technical expertise."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card/50 rounded-xl border p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
          >
            <h3 className="text-primary mb-4 text-xl font-semibold">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  viewport={{ once: true }}
                  className="bg-background hover:bg-primary/10 hover:border-primary/50 rounded-full border px-3 py-1.5 text-sm transition-colors"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
