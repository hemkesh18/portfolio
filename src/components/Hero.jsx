import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';


export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          {personal.status.available && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status.text}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">{personal.name}</span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200">
            {personal.tagline}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {personal.shortBio}
          </p>

          {/* Location & Quick Meta */}
          <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-slate-400" />
              {personal.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles size={14} className="text-indigo-500" />
              9.05 CGPA • 98.6%ile JEE Mains
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-500/25 transition-all active:scale-95"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail size={16} />
              <span>Get in touch</span>
            </a>
          </div>

          {/* Social Profiles Row */}
          <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Profiles:
            </span>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono text-sm font-bold flex items-center gap-1.5"
              title="LeetCode Profile"
            >
              <LeetcodeIcon size={18} />
              <span className="text-xs font-sans">LeetCode</span>
            </a>

            <a
              href={`mailto:${personal.socials.email}`}
              className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800/60 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
