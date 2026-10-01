import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, CheckCircle, Award } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  const entrance = achievements.find((a) => a.category.includes('Entrance'));
  const beyond = achievements.find((a) => a.category.includes('Beyond'));

  return (
    <section id="achievements" className="py-14 md:py-18 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Entrance Examinations & Achievements
          </h2>
        </div>

        <div className="space-y-4">
          {/* Compressed Entrance Exam Line */}
          {entrance && (
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <Trophy size={18} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    National & State Entrance Merit
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {entrance.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {entrance.detail}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 shrink-0 self-start sm:self-auto">
                <CheckCircle size={13} />
                <span>Verified Scores</span>
              </div>
            </div>
          )}

          {/* Small Beyond Code Line */}
          {beyond && (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <Award size={16} className="text-slate-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white mr-2">Beyond code:</span>
                  <span>{beyond.title}</span>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 shrink-0 hidden sm:inline">
                Collegiate sports & esports
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
