import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Timeline() {
  const { education, experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Hackathon & Extracurricular Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Briefcase size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Leadership & Experience
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Experience & Roles
                </h2>
              </div>
            </div>

            <div className="space-y-6 border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-3 pl-6">
              {experience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {item.organization}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div id="education">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Academic Background
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Education
                </h2>
              </div>
            </div>

            <div className="space-y-6 border-l-2 border-purple-200 dark:border-purple-900/50 ml-3 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-600 group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {edu.institution}
                    </div>

                    <div className="mt-2 inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {edu.score}
                    </div>

                    {edu.coursework && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          Relevant Coursework
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2 py-0.5 rounded text-[11px] bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
