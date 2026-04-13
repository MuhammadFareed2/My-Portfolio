'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/button';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    duration: 40, // Smoother scroll
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const isScrolling = React.useRef(false);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      const { deltaX, deltaY } = event;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Detect horizontal intention or vertical with shift
      if (absX > absY || (event.shiftKey && absY > absX)) {
        if (absX > 10 || absY > 10) {
          isScrolling.current = true;
          
          if (deltaX > 0 || (event.shiftKey && deltaY > 0)) {
            emblaApi.scrollNext();
          } else {
            emblaApi.scrollPrev();
          }

          // Unlock after a short delay to allow next "click" of the wheel
          setTimeout(() => {
            isScrolling.current = false;
          }, 400); // Slightly faster unlock for smoothness
        }
      }
    };

    const emblaRoot = emblaApi.rootNode();
    emblaRoot.addEventListener('wheel', onWheel as any, { passive: true });

    return () => {
      emblaRoot.removeEventListener('wheel', onWheel as any);
    };
  }, [emblaApi]);

  return (
    <section ref={ref} id="projects" className="mb-20 w-full scroll-mt-28 px-4 sm:mb-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="My Projects"
          content="Featured work and personal projects. Swipe or scroll to explore."
        />
      </motion.div>

      <div className="relative mt-8">
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex gap-6 -ml-4 items-stretch">
            {projectsData.map((project, index) => (
              <div
                key={project.slug}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] h-full"
              >
                <Project project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
