import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-14 md:py-18 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
            Engineering Focus & Mentorship
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-sm sm:text-base font-normal text-slate-900 dark:text-slate-100">
              {about.overview}
            </p>
            <p>
              {about.focus}
            </p>

            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Core Principles:
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Ground AI outputs with persistent memory and verifiable citations rather than unchecked generations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Write deterministic invariants in pytest to prevent temporal leakage and contradictory metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Teach foundational science and mathematics by breaking complex multi-step problems into repeatable principles.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-slate-200 dark:border-slate-700">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Academic Status</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">{personal.yearStatus} (CGPA: {personal.cgpa})</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-slate-200 dark:border-slate-700">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Engineering Focus</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">AI-backed release gates, persistent memory, and backend systems</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-slate-200 dark:border-slate-700">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Instruction</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Academic Tutor for IIT Foundation at Brain Hub</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Codebases for Preflight, LMS, and active tools are public and reviewable on GitHub.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
