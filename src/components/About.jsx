import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Engineering Background & Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="text-lg font-normal text-slate-800 dark:text-slate-200">
              {about.overview}
            </p>
            <p>
              {about.passion}
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                Core Competencies & Daily Focus:
              </h3>
              <ul className="space-y-2.5">
                {about.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Academic Status</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">B.E. CSE @ CBIT Hyderabad (CGPA: 9.05)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/40">
                  <Cpu size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Engineering Interests</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Web (Node/PostgreSQL), DSA & Core Java</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                  <Layers size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Current Focus</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineering Internships & IIT Foundation Tutoring</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                💡 <span className="font-medium text-slate-700 dark:text-slate-300">Quick Note for Recruiters:</span> All codebases for listed projects are open-source and reviewable on my GitHub profile.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
