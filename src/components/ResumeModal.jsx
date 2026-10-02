import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, FileText, GraduationCap, Briefcase, Code, FileCode } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const { personal, education, skills, experience, preflight, projects } = portfolioData;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-teal-700 dark:text-teal-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ATS-Optimized Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.tex"
              download="Cuddapah_Hemkesh_Resume.tex"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
              title="Download LaTeX Source (.tex)"
            >
              <FileCode size={13} />
              <span>LaTeX (.tex)</span>
            </a>

            <a
              href={personal.socials.resumePdf}
              download="Hemkesh_Resume.pdf"
              className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white shadow-xs transition-colors"
              title="Download PDF version"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body: ATS Resume Card */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-800 dark:text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 text-center sm:text-left">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {personal.name}
            </h1>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 flex flex-wrap justify-center sm:justify-start gap-2">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`mailto:${personal.socials.email}`} className="text-teal-700 dark:text-teal-400 hover:underline">
                {personal.socials.email}
              </a>
              <span>•</span>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-teal-700 dark:text-teal-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-teal-700 dark:text-teal-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <GraduationCap size={13} />
              <span>Education</span>
            </h4>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between font-semibold text-slate-900 dark:text-white text-xs">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-slate-500 font-normal">{edu.period}</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 flex justify-between">
                  <span>{edu.degree}</span>
                  <span className="font-semibold text-teal-700 dark:text-teal-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code size={13} />
              <span>Technical Skills</span>
            </h4>
            <div className="space-y-1 text-xs">
              {skills.map((s, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900 dark:text-white font-semibold">{s.category || s.group}:</strong>{' '}
                  <span className="text-slate-600 dark:text-slate-300">
                    {s.items.map((item) => (typeof item === 'string' ? item : item.name)).join(', ')}
                  </span>
                </p>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Briefcase size={13} />
              <span>Work Experience</span>
            </h4>
            {experience.map((exp, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                  <span>{exp.role}, <span className="font-normal text-teal-700 dark:text-teal-400">{exp.organization}</span></span>
                  <span className="font-mono text-slate-500 font-normal">{exp.period}</span>
                </div>
                <p className="mt-1 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Flagship & Projects */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code size={13} />
              <span>Featured Engineering Projects</span>
            </h4>
            <div className="space-y-3">
              {/* Preflight */}
              <div className="text-xs">
                <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                  <span>{preflight.title}: {preflight.tagline}</span>
                  <span className="font-mono text-[10px] text-slate-500">Python, FastAPI, Hindsight, Groq</span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {preflight.summary} Validated on 150 simulated deployments: repeat incidents flagged HIGH 4/9 with memory vs 1/9 without.
                </p>
              </div>

              {/* LMS */}
              {projects.filter((p) => !p.id.includes('medication')).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[10px] text-slate-500">{proj.tech.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-500">
          <span>Formatted for standard technical screening.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
