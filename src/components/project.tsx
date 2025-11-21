'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
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
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  const [expanded, setExpanded] = useState(false);

  const shortDesc =
    description.length > 150 ? description.slice(0, 150) + '...' : description;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex min-w-0 flex-1 flex-col rounded border p-5"
    >
      {/* Preview image */}
      <Link
        href={links.preview}
        aria-label={title}
        target="_blank"
        className="w-full overflow-hidden rounded"
      >
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="h-auto w-full rounded object-cover transition-transform hover:scale-105"
        />
      </Link>

      {/* Title + description */}
      <h3 className="mt-3 text-xl font-medium">{title}</h3>

      <p className="text-muted-foreground mb-2 mt-1">
        {expanded ? description : shortDesc}
      </p>

      {/* See More / See Less */}
      {description.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mb-3 text-sm text-white hover:underline w-fit"
        >
          {expanded ? 'See Less...' : 'See More...'}
        </button>
      )}

      {/* Tech stack */}
      <div className="mb-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links (Preview + GitHub buttons) */}
      <div className="mt-auto flex flex-wrap gap-2">
        {links.preview && (
          <Button asChild size="sm">
            <Link href={links.preview} target="_blank">
              Preview <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        )}
        {links.github && (
          <Button asChild size="sm" variant="outline">
            <Link href={links.github} target="_blank">
              Code <Icons.github className="ml-2 size-4" />
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};
