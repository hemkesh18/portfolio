import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ShieldCheck,
  AlertOctagon,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  FileCheck,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import PreflightArchitecture from './PreflightArchitecture';
import GateSimulator from './GateSimulator';

export default function PreflightSection() {
  const { preflight } = portfolioData;

  return (
    <section id="preflight" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 mb-2">
              <ShieldCheck size={14} />
              <span>Flagship Engineering Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {preflight.title}: {preflight.tagline}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              {preflight.scenario}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={preflight.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <GithubIcon size={14} />
              <span>GitHub Repo</span>
            </a>

            {preflight.links.liveDemo && !preflight.links.liveDemo.includes('[TODO') ? (
              <a
                href={preflight.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white shadow-xs transition-colors"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                <ExternalLink size={13} />
                <span>Live: {preflight.links.liveDemo}</span>
              </span>
            )}
          </div>
        </div>

        {/* Narrative Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                The Problem
              </h3>
              <p>{preflight.problem}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                The Approach
              </h3>
              <p>{preflight.approach}</p>
            </div>
          </div>

          {/* Tech Stack & Gate Thresholds */}
          <div className="lg:col-span-6 space-y-4">
            {/* Tech Stack Chips */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {preflight.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Gate Thresholds Table */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                CI/CD Gate Thresholds & Enforcement
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] font-mono uppercase text-slate-400">
                      <th className="pb-1.5">Score Range</th>
                      <th className="pb-1.5">Label</th>
                      <th className="pb-1.5">Action</th>
                      <th className="pb-1.5">Pipeline Behavior</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 text-[11px]">
                    {preflight.thresholds.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="py-1.5 font-mono text-slate-600 dark:text-slate-300">{row.range}</td>
                        <td className="py-1.5 font-bold text-slate-900 dark:text-white">{row.classification}</td>
                        <td className="py-1.5 font-mono font-bold">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] ${
                              row.action === 'PASS'
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                                : row.action === 'WARN'
                                ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                                : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                            }`}
                          >
                            {row.action}
                          </span>
                        </td>
                        <td className="py-1.5 text-slate-600 dark:text-slate-400">{row.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            System Architecture
          </h3>
          <PreflightArchitecture />
        </div>

        {/* How It Works Explainer Callout */}
        <div className="mt-8 p-4 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <div className="font-bold text-teal-900 dark:text-teal-200 flex items-center gap-2">
            <Cpu size={16} className="text-teal-700 dark:text-teal-400" />
            <span>How It Works</span>
          </div>
          <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {Array.isArray(preflight.howItWorks) ? (
              preflight.howItWorks.map((line, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="font-semibold text-teal-800 dark:text-teal-300 shrink-0">{idx + 1}.</span>
                  <span>{line}</span>
                </p>
              ))
            ) : (
              <p>{preflight.howItWorks}</p>
            )}
          </div>
        </div>

        {/* Simulated Benchmark Results: Before / After Comparison */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-1">
                <span>{preflight.benchmarkType}</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Evaluation Benchmark Results
              </h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {preflight.results.headline}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Benchmark setup:</span> {preflight.setupNote}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                <span className="font-semibold text-teal-800 dark:text-teal-300">Simulated benchmark result:</span> with memory, Preflight caught 4 of 9 repeat-outage incidents; the stateless baseline caught 1 of 9.
              </p>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Ground-truth validated against data/results/replay.json
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-[10px] font-mono uppercase text-slate-500">
                  <th className="py-2.5 px-4">Evaluation Cohort</th>
                  <th className="py-2.5 px-4 font-bold text-teal-800 dark:text-teal-300">With Memory (Preflight)</th>
                  <th className="py-2.5 px-4 text-slate-600 dark:text-slate-400">Without Memory (Baseline)</th>
                  <th className="py-2.5 px-4 text-slate-500">Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {preflight.results.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="py-2.5 px-4 font-semibold text-slate-900 dark:text-white">{row.metric}</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-teal-700 dark:text-teal-300">
                      {row.memoryOn}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-600 dark:text-slate-400">
                      {row.memoryOff}
                    </td>
                    <td className="py-2.5 px-4 text-xs text-slate-500 dark:text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Honest Limitations Statement */}
          <div className="mt-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
            <AlertOctagon size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white mr-1">Simulation Context:</span>
              <span>{preflight.limitations}</span>
            </div>
          </div>
        </div>

        {/* Key Engineering Decisions */}
        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            Key Architectural Decisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {preflight.engineeringDecisions.map((dec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-slate-900 dark:text-white">
                  <FileCheck size={16} className="text-teal-600 dark:text-teal-400" />
                  <span>{dec.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Gate Simulator Widget */}
        <GateSimulator />
      </div>
    </section>
  );
}
