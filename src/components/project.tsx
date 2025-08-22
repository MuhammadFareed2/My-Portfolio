'use client';

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
  className?: string; // ✅ allows passing className
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export const Project = ({ project, index, className }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`flex flex-col rounded border p-5 ${className || ''}`} // ✅ merge className
    >
      {/* Preview image */}
      <Link
        href={links.preview}
        aria-label={title}
        target="_blank"
        className="overflow-hidden rounded"
      >
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="rounded transition-transform hover:scale-105"
        />
      </Link>

      {/* Title + description */}
      <h3 className="mt-3 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground mb-2 mt-1">{description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links (Preview + GitHub) */}
      <div className="flex gap-2 mt-auto">
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
