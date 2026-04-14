'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
  const { image, title, description, technologies, links, slug } = project;

  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${slug}`);
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      onClick={handleCardClick}
      className="bg-card/50 text-card-foreground hover:border-primary/20 group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl"
    >
      <div className="flex h-full flex-col">
        {/* Image Section with 4:3 Aspect Ratio (1600x1200) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

          {/* Links Overlay - Prevent propagation so clicking links doesn't trigger the card link */}
          <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {links.preview && (
              <a
                href={links.preview}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-background/90 text-foreground hover:text-primary flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110"
                title="Live Preview"
              >
                <Icons.preview className="size-5" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-background/90 text-foreground hover:text-primary flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110"
                title="GitHub Code"
              >
                <Icons.githubOutline className="size-5" />
              </a>
            )}
          </div>

          {/* Hover Hint Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="bg-primary/90 text-primary-foreground rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-sm">
              Click to View Details
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-foreground line-clamp-1 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
              {title}
            </h3>
          </div>

          <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-[10px] font-medium transition-colors sm:text-sm"
              >
                {tech}
              </span>
            ))}

            {technologies.length > 5 && (
              <span className="text-muted-foreground text-[10px] font-medium">
                +{technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
