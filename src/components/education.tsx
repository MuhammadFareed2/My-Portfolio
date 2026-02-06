'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { educationData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export const Education = () => {
  const { ref: sectionRef } = useSectionInView('Education');

  return (
    <section ref={sectionRef} id="education" className="mb-20 scroll-mt-28 sm:mb-28">
      <SectionHeading heading="My Education" content="Academic journey and professional certifications." />

      <div className="max-w-3xl mx-auto mt-12 relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={cn(
                  "relative flex flex-col sm:flex-row gap-6 sm:gap-0 group",
                  !isLeft && "sm:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 top-0 sm:top-6 z-10 hidden sm:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm group-hover:scale-125 transition-transform" />
                </div>

                {/* Mobile Line Dot */}
                <div className="absolute left-8 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm sm:hidden z-10 -translate-x-1/2" />
                <div className="absolute left-8 top-4 bottom-0 w-0.5 bg-border sm:hidden -translate-x-1/2" />

                {/* Content Card */}
                <div className={cn(
                  "sm:w-1/2 sm:px-8 pl-16 sm:pl-8 relative",
                  isLeft ? "sm:text-right" : "sm:text-left"
                )}>
                  <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className={cn("flex flex-wrap gap-2 pt-2", isLeft ? "sm:justify-end" : "sm:justify-start")}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-[10px] uppercase tracking-wider rounded-md"
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
