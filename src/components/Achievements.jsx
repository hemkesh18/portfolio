import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="py-16 md:py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Honors & Problem Solving
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Key competitive entrance ranks, collegiate honors, and academic milestones achieved throughout my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-800/60 transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Trophy size={20} />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {item.category}
                </span>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle size={13} />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
