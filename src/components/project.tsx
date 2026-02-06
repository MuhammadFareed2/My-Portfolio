'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';


type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const [expanded, setExpanded] = useState(false);

  // Determine if description is long enough to need expansion
  const isLongDescription = description.length > 120;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -5 }}
      className="bg-card/50 text-card-foreground hover:border-primary/20 group relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-lg"
    >
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden sm:h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60" />

        {/* Hover Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {links.preview && (
            <Link
              href={links.preview}
              target="_blank"
              className="bg-background/90 text-foreground hover:text-primary flex items-center justify-center rounded-full p-3 shadow-lg transition-transform hover:scale-110 active:scale-95"
              title="View Live"
            >
              <Icons.preview className="size-5" />
            </Link>
          )}
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              className="bg-background/90 text-foreground hover:text-primary flex items-center justify-center rounded-full p-3 shadow-lg transition-transform hover:scale-110 active:scale-95"
              title="View Code"
            >
              <Icons.githubOutline className="size-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-foreground group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
          {title}
        </h3>

        <div className="text-muted-foreground mt-3 text-sm leading-relaxed">
          <motion.div
            animate={{
              height: expanded ? 'auto' : isLongDescription ? '4.5rem' : 'auto',
            }}
            initial={false}
            className="overflow-hidden"
          >
            <p>{description}</p>
          </motion.div>

          {isLongDescription && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary mt-2 flex items-center gap-1.5 text-xs font-medium hover:underline focus:outline-none"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="size-3" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="size-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary/30 text-secondary-foreground hover:border-primary/30 hover:bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
