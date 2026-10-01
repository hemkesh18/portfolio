import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, ArrowRight, Mail, MapPin, CheckCircle, ShieldCheck, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-12 pb-14 md:pt-18 md:pb-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          {personal.status.available && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status.text}</span>
            </div>
          )}

          {/* Headline */}
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
            {personal.role}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {personal.name}
          </h1>

          {/* Sharp One-Liner pointing to Preflight as proof */}
          <div className="mt-4 space-y-1.5 text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
            <p className="font-semibold text-slate-900 dark:text-white">
              {personal.tagline}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              {personal.proofLine}
            </p>
          </div>

          {/* Target Role & Engineering Focus Callout */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80">
            <span className="font-bold text-teal-700 dark:text-teal-400">Target Role:</span>
            <span>{personal.targetRole}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 dark:text-slate-300">{personal.targetFocus}</span>
          </div>

          {/* Academic, Tutoring & Location Metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-slate-400" />
              {personal.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-semibold text-teal-700 dark:text-teal-400">
              <CheckCircle size={13} />
              98.6%ile JEE Mains
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
              <BookOpen size={13} className="text-teal-600 dark:text-teal-400" />
              Academic Tutor, Brain Hub
            </span>
            <span>•</span>
            <span>
              {personal.yearStatus} (CGPA: {personal.cgpa})
            </span>
          </div>

          {/* Actions: No pill buttons, small border radius */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#preflight"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white shadow-xs transition-colors"
            >
              <ShieldCheck size={16} />
              <span>Explore Preflight</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <span>All Projects</span>
              <ArrowRight size={15} />
            </a>

            <button
              onClick={onOpenResume}
              aria-label="Open ATS resume preview modal"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Profiles:
            </span>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            {personal.socials.leetcode && (
              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-slate-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 transition-colors"
                title="LeetCode Profile"
              >
                <LeetcodeIcon size={18} />
              </a>
            )}

            <a
              href={`mailto:${personal.socials.email}`}
              className="p-1.5 rounded-md text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Real Metrics Grid (No fake numbers, only verified) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
