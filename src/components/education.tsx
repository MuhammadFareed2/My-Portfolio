'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
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
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Education"
        content="Academic background and qualifications that shaped my skills and career path."
      />

      <div className="grid gap-8 max-w-screen-md">
        {educationData.map(
          ({ title, description, company, period, technologies }) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                'rounded-xl border bg-card/40 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all'
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-background">
                  <Icons.building className="size-5" />
                </div>
                <span className="text-lg font-semibold">{company}</span>
              </div>

              {/* Title + Period */}
              <div className="mb-2">
                <h3 className="text-xl font-medium">{title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Icons.calendar className="size-4" />
                  <span>{period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{description}</p>

              {/* Technologies */}
              {technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
