import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { skillsData } from '@/lib/data';
import { SectionHeading } from './section-heading';

export const Skills = () => {
  const { ref: sectionRef } = useSectionInView('Skills'); // Ensure "Skills" is in your types/links if using active-section

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"

    >

      <SectionHeading heading="My Skills" content="A comprehensive list of my technical expertise." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  viewport={{ once: true }}
                  className="bg-background border px-3 py-1.5 rounded-full text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors"
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
