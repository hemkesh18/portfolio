import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, CheckCircle2 } from 'lucide-react';

export default function Hackathons() {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Competitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Hackathons & Engineering Challenges
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Collegiate and national engineering hackathons. Roles, prototypes, and confirmed outcomes are kept transparent without embellishment.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-teal-700 dark:text-teal-400 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {hackathon.name}
                    </h3>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 shrink-0">
                    {hackathon.statusBadge || 'Completed'}
                  </span>
                </div>

                <div className="space-y-2 mt-3 text-xs text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-[11px]">Role:</span>
                    <span>{hackathon.role}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-[11px]">Tech Stack:</span>
                    <span className="font-mono text-[11px] text-teal-700 dark:text-teal-400">{hackathon.stack}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-[11px]">What was built:</span>
                    <span>{hackathon.built}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-teal-700 dark:text-teal-400 shrink-0" />
                <span><strong className="text-slate-900 dark:text-white font-semibold">Outcome:</strong> {hackathon.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
