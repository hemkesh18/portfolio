import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const { education, experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Column 1: Academic Tutoring Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-teal-700 dark:text-teal-400" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Instruction & Mentorship
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Work Experience
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                    {item.organization} • {item.location}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div id="education">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-teal-700 dark:text-teal-400" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Academic Background
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Education
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </div>

                  <div className="mt-2 text-xs font-bold text-teal-700 dark:text-teal-400">
                    {edu.score}
                  </div>

                  {edu.coursework && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Key Coursework
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded text-[11px] bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
