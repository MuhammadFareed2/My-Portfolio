'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { educationData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Education = () => {
  const { ref: sectionRef } = useSectionInView('Education');

  return (
    <section
      ref={sectionRef}
      id="education"
      className="mb-20 scroll-mt-28 sm:mb-28"
    >
      <SectionHeading
        heading="My Education"
        content="Academic journey and professional certifications."
      />

      <div className="relative mx-auto mt-12 max-w-3xl px-4">
        {/* Vertical Line */}
        <div className="bg-border absolute inset-y-0 left-8 hidden w-0.5 sm:block md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={cn(
                  'group relative flex flex-col gap-6 sm:flex-row sm:gap-0',
                  !isLeft && 'sm:flex-row-reverse'
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-0 z-10 hidden -translate-x-1/2 items-center justify-center sm:left-1/2 sm:top-6 sm:flex">
                  <div className="bg-primary border-background size-4 rounded-full border-4 shadow-sm transition-transform group-hover:scale-125" />
                </div>

                {/* Mobile Line Dot */}
                <div className="bg-primary border-background absolute left-8 top-0 z-10 size-4 -translate-x-1/2 rounded-full border-4 shadow-sm sm:hidden" />
                <div className="bg-border absolute bottom-0 left-8 top-4 w-0.5 -translate-x-1/2 sm:hidden" />

                {/* Content Card */}
                <div
                  className={cn(
                    'relative pl-16 sm:w-1/2 sm:px-8',
                    isLeft ? 'sm:text-right' : 'sm:text-left'
                  )}
                >
                  <div className="bg-card/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md group-hover:-translate-y-1">
                    <span className="bg-secondary text-secondary-foreground mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium">
                      {item.period}
                    </span>
                    <h3 className="text-foreground text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-2 font-medium">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.technologies && item.technologies.length > 0 && (
                      <div
                        className={cn(
                          'flex flex-wrap gap-2 pt-2',
                          isLeft ? 'sm:justify-end' : 'sm:justify-start'
                        )}
                      >
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-secondary/50 text-secondary-foreground rounded-md px-2 py-1 text-[10px] uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for Grid Layout */}
                <div className="sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
