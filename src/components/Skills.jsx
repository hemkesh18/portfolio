import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Code2, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const getGroupBadge = (group) => {
    switch (group) {
      case 'Strong':
        return {
          icon: <CheckCircle2 size={16} className="text-teal-700 dark:text-teal-400" />,
          badge: 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800',
        };
      case 'Working':
        return {
          icon: <Code2 size={16} className="text-blue-700 dark:text-blue-400" />,
          badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        };
      case 'Familiar':
        return {
          icon: <Layers size={16} className="text-slate-600 dark:text-slate-400" />,
          badge: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
        };
      default:
        return {
          icon: <Wrench size={16} />,
          badge: 'bg-slate-100 text-slate-800',
        };
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Technical Skills
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Regrouped honestly by proficiency. No filler listings or inflated skill bars.
          </p>
        </div>

        {/* 3 Columns: Strong, Working, Familiar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const style = getGroupBadge(group.group);
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      {style.icon}
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {group.group}
                      </h3>
                    </div>

                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${style.badge}`}>
                      {group.items.length} items
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((skill, sIdx) => {
                      const isTodo = skill.includes('[TODO');
                      return (
                        <span
                          key={sIdx}
                          className={`px-2.5 py-1 rounded text-xs font-medium border ${
                            isTodo
                              ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800/80 font-mono text-[11px]'
                              : 'bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700/80'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
