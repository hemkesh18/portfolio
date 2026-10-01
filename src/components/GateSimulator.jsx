import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldAlert, ShieldCheck, AlertTriangle, BookOpen, Terminal, CheckCircle2, Info } from 'lucide-react';

export default function GateSimulator() {
  const { simulatorPresets } = portfolioData.preflight;
  const [selectedId, setSelectedId] = useState(simulatorPresets[0].id);

  const activePreset = simulatorPresets.find((p) => p.id === selectedId) || simulatorPresets[0];

  const getDecisionBadge = (decision) => {
    switch (decision) {
      case 'PASS':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300',
          icon: <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />,
          label: 'PASS (Exit 0)',
        };
      case 'WARN':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/70 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300',
          icon: <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400" />,
          label: 'WARN (Exit 0)',
        };
      case 'BLOCK':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/70 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300',
          icon: <ShieldAlert size={16} className="text-rose-600 dark:text-rose-400" />,
          label: 'BLOCK (Exit 1)',
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-800',
          icon: null,
          label: decision,
        };
    }
  };

  const badge = getDecisionBadge(activePreset.decision);

  return (
    <div className="mt-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Interactive CI/CD Gate Simulator
            </h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Select a deployment proposal to preview the persistent memory evaluation and grounded citations.
          </p>
        </div>

        <span className="self-start sm:self-auto px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Cached backtest replay data (N=150)
        </span>
      </div>

      {/* Preset Buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        {simulatorPresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setSelectedId(preset.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              selectedId === preset.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-slate-900 dark:border-white font-semibold shadow-xs'
                : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span className="font-mono text-[11px] mr-1">{preset.id}:</span>
            <span>{preset.service}</span>
          </button>
        ))}
      </div>

      {/* Simulation Result Box */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
        {/* Left: Deployment Proposal Overview */}
        <div className="lg:col-span-5 space-y-3 text-xs">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Proposal Metadata
            </span>
            <div className="mt-1 font-semibold text-sm text-slate-900 dark:text-white">
              {activePreset.title}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Service</span>
              <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                {activePreset.service}
              </span>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Change Type</span>
              <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                {activePreset.changeType}
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">Planted Failure Pattern</span>
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {activePreset.pattern}
            </span>
          </div>

          {/* Stateless baseline comparison */}
          <div className="p-3 rounded border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/30">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
              Memory-Off Stateless Baseline
            </span>
            <p className="text-amber-900 dark:text-amber-200 text-[11px] leading-relaxed">
              {activePreset.memoryOffVerdict}
            </p>
          </div>
        </div>

        {/* Right: Preflight Memory-On Evaluation */}
        <div className="lg:col-span-7 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Preflight Gate Verdict (Memory-On)
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-semibold text-slate-600 dark:text-slate-300">
                Risk Score: {activePreset.riskScore.toFixed(2)}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold border ${badge.bg}`}>
                {badge.icon}
                <span>{badge.label}</span>
              </span>
            </div>
          </div>

          {/* Reasoning */}
          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
              <Terminal size={13} className="text-teal-600 dark:text-teal-400" />
              <span>Grounded Agent Reasoning</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              {activePreset.reasoning}
            </p>
          </div>

          {/* Cited Runbook */}
          <div className="p-3 rounded bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/70">
            <div className="font-semibold text-teal-900 dark:text-teal-200 mb-1 flex items-center gap-1.5">
              <BookOpen size={13} className="text-teal-700 dark:text-teal-400" />
              <span>Cited Operational Runbook</span>
            </div>
            <p className="text-teal-800 dark:text-teal-300 text-xs font-mono">
              {activePreset.runbook}
            </p>
          </div>

          {/* Validated Evidence Citations */}
          <div>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block mb-1">
              Validated Hindsight Memory IDs (Hallucinations Stripped):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activePreset.evidenceIds.map((id, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {id.slice(0, 16)}...
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
