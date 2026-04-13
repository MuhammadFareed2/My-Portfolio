'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/button';
import { projectsData } from '@/lib/data';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button onClick={() => router.push('/')} variant="outline">
          Back to Home
        </Button>
      </div>
    );
  }

  const {
    title,
    fullDescription,
    image,
    technologies,
    links,
    features = [],
  } = project as any;

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

        <div className="container relative flex h-full flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="mb-6 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Back to projects
            </Link>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              {title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-6 text-2xl font-bold">Project Overview</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {fullDescription}
            </p>

            {features.length > 0 && (
              <>
                <h3 className="mb-6 text-xl font-bold">Key Features</h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.map((feature: string) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border bg-card/50 p-4"
                    >
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="sticky top-24 space-y-6"
          >
            <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-bold">Project Links</h3>
              <div className="flex flex-col gap-3">
                {links.preview && (
                  <Button asChild className="w-full gap-2 py-6">
                    <Link href={links.preview} target="_blank">
                      Live Preview <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                )}
                {links.github && (
                  <Button asChild variant="outline" className="w-full gap-2 py-6">
                    <Link href={links.github} target="_blank">
                      Source Code <Github className="size-4" />
                    </Link>
                  </Button>
                )}
                {!links.preview && !links.github && (
                  <p className="text-sm text-muted-foreground text-center py-4 italic">
                    Links are private for this project.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-lg border bg-background px-3 py-1.5 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
