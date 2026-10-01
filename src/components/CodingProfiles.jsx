import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { LeetcodeIcon } from './Icons';

export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  return (
    <section id="coding" className="py-12 md:py-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Problem Solving
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
              Competitive Programming Profiles
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm sm:text-right">
            Verified algorithmic profiles across competitive platforms.
          </p>
        </div>

        <div className="max-w-md">
          {codingProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {profile.platform === 'LeetCode' ? (
                      <LeetcodeIcon size={18} />
                    ) : (
                      <Code2 size={18} className="text-teal-700 dark:text-teal-400" />
                    )}
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {profile.platform}
                    </h3>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-700 dark:hover:text-teal-400"
                    title={`Open ${profile.platform}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
                  {profile.handle}
                </div>

                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {profile.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
