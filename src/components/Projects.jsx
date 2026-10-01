import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);

  // Deep-linking via URL hash: #project/:id
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        const found = projects.find((p) => p.id === id);
        if (found) setActiveProject(found);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [projects]);

  const openModal = (project) => {
    setActiveProject(project);
    window.history.pushState(null, '', `#project/${project.id}`);
  };

  const closeModal = () => {
    setActiveProject(null);
    window.history.pushState(null, '', '#projects');
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Selected Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Full-Stack & Systems Projects
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Software architectures developed across web systems, normalized databases, and machine learning pipelines.
          </p>
        </div>

        {/* Projects Grid: 2 cards (LMS and Second Flagship Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {project.date}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.github && !project.github.includes('[TODO') && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveDemo && !project.liveDemo.includes('[TODO') && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-slate-500 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
                        title="Open Live Application"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {project.subtitle}
                </p>

                {/* Explicit Tech Stack Line */}
                {project.techStackLine && (
                  <div className="mt-2 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-baseline gap-1.5">
                    <span className="font-semibold text-slate-900 dark:text-white font-sans text-xs">Tech stack:</span>
                    <span className="text-teal-700 dark:text-teal-400 font-semibold">{project.techStackLine}</span>
                  </div>
                )}

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Concrete Feature & Design Decision */}
                {(project.concreteDecision || project.keyTechnicalDecision) && (
                  <div className="mt-4 p-3 rounded bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block mb-0.5">
                      Concrete Feature & Design Decision
                    </span>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.concreteDecision || project.keyTechnicalDecision}
                    </p>
                  </div>
                )}

                {/* Bullet Points */}
                <div className="mt-4 space-y-1.5">
                  {project.bulletPoints.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer: Tech Stack & Case Study Modal Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors shrink-0"
                >
                  <span>Details</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={closeModal}
      />
    </section>
  );
}
