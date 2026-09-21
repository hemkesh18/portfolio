import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle, GraduationCap, Briefcase, Code, FileCode } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, skills, projects, experience } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {personal.name} — Resume Preview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ATS-Optimized B.E. CSE Candidate Snapshot
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.tex"
              download="Cuddapah_Hemkesh_Resume.tex"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
              title="Download LaTeX Source (.tex)"
            >
              <FileCode size={14} />
              <span>LaTeX (.tex)</span>
            </a>

            <a
              href={personal.socials.resumePdf}
              download={`${personal.name}_Resume.pdf`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
              title="Download PDF version"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body: ATS Resume Card */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Quick Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              {personal.name}
            </h1>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 flex flex-wrap gap-2">
              <span>{personal.socials.email}</span>
              <span>•</span>
              <span>{personal.location}</span>
              <span>•</span>
              <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personal.socials.github} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
              <GraduationCap size={14} />
              Education
            </h4>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                  <span>{edu.degree}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal">{edu.period}</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 flex justify-between">
                  <span>{edu.institution}</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
              <Code size={14} />
              Technical Skills
            </h4>
            <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {skills.map((s, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900 dark:text-white font-medium">{s.category}:</strong>{' '}
                  {s.items.map((i) => i.name).join(', ')}
                </p>
              ))}
            </div>
          </div>

          {/* Experience */}
          {experience && experience.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                <Briefcase size={14} />
                Experience
              </h4>
              <div className="space-y-3">
                {experience.map((exp, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                      <span>{exp.role} — <span className="font-normal text-indigo-600 dark:text-indigo-400">{exp.organization}</span></span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.period}</span>
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
              <Code size={14} />
              Selected Engineering Projects
            </h4>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[11px] text-slate-500">{proj.tech.slice(0, 4).join(', ')}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                    {proj.bulletPoints.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-500">
          <span>Ready for ATS screening & recruiter evaluation</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
