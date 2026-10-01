import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {project.badge}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {/* Summary */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Approach (if present) */}
          {project.problem && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                Problem Statement
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.approach && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                Technical Approach
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          )}

          {/* Key Technical Decision */}
          {project.keyTechnicalDecision && (
            <div className="p-3.5 rounded-lg bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1">
                Key Engineering Decision
              </h4>
              <p className="text-teal-950 dark:text-teal-100 text-xs leading-relaxed">
                {project.keyTechnicalDecision}
              </p>
            </div>
          )}

          {/* Implementation Highlights */}
          {project.bulletPoints && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Implementation Details
              </h4>
              <ul className="space-y-2">
                {project.bulletPoints.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs">
                    <CheckCircle2 size={14} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs">
          <div className="flex items-center gap-3">
            {project.github && !project.github.includes('[TODO') ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="text-slate-400 font-mono text-[11px]">
                GitHub: {project.github}
              </span>
            )}

            {project.liveDemo && !project.liveDemo.includes('[TODO') ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-teal-700 dark:text-teal-400 hover:underline"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-slate-400 font-mono text-[11px]">
                Live: {project.liveDemo}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
