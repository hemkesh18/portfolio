import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">
            {personal.name}
          </div>
          <p className="mt-0.5">
            Computer Science Engineering, CBIT Hyderabad. Last updated: {personal.lastUpdated}.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-2"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
