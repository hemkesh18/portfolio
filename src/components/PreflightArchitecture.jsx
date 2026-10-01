import React from 'react';

export default function PreflightArchitecture() {
  return (
    <div className="w-full my-6 p-4 sm:p-6 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
      <div className="text-center font-mono font-semibold text-slate-700 dark:text-slate-300 mb-4 text-xs">
        PREFLIGHT CI/CD ARCHITECTURE PIPELINE
      </div>

      {/* SVG Pipeline Flow Diagram */}
      <div className="overflow-x-auto pb-2">
        <svg
          viewBox="0 0 820 180"
          className="w-full min-w-[700px] h-auto font-sans"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Step 1: PR / Deploy Proposal */}
          <rect x="10" y="55" width="140" height="70" rx="4" className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="80" y="85" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[13px]">
            Deploy Manifest
          </text>
          <text x="80" y="103" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[11px]">
            PR Approved (Git)
          </text>

          {/* Arrow 1 to 2 */}
          <path d="M150 90 L188 90" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Step 2: Preflight Agent (FastAPI) */}
          <rect x="190" y="45" width="160" height="90" rx="4" className="fill-teal-50/60 dark:fill-teal-950/40 stroke-teal-600 dark:stroke-teal-500" strokeWidth="2" />
          <text x="270" y="75" textAnchor="middle" className="fill-teal-900 dark:fill-teal-200 font-bold text-[13px]">
            Preflight Agent
          </text>
          <text x="270" y="93" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px]">
            FastAPI Pipeline Gate
          </text>
          <text x="270" y="111" textAnchor="middle" className="fill-teal-700 dark:fill-teal-400 font-mono text-[10px]">
            Zero-Leakage Sanitizer
          </text>

          {/* Two-way connector to Hindsight */}
          <path d="M270 45 L270 25 L450 25 L450 50" className="stroke-teal-600 dark:stroke-teal-400" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="360" y="18" textAnchor="middle" className="fill-teal-700 dark:fill-teal-300 font-mono text-[10px]">
            Query-Anchored Recall
          </text>

          {/* Arrow 2 to 3 */}
          <path d="M350 90 L388 90" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Step 3: Vectorize Hindsight & Groq LLM */}
          <rect x="390" y="45" width="170" height="90" rx="4" className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="475" y="72" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px]">
            Vectorize Hindsight
          </text>
          <text x="475" y="89" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[11px]">
            Persistent Incidents & Runbooks
          </text>
          <path d="M410 98 L540 98" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
          <text x="475" y="115" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-mono text-[11px]">
            Groq Open-Weights LLM
          </text>

          {/* Arrow 3 to 4 */}
          <path d="M560 90 L598 90" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Step 4: Gate Decision */}
          <rect x="600" y="40" width="200" height="100" rx="4" className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="700" y="65" textAnchor="middle" className="fill-slate-900 dark:fill-white font-bold text-[12px]">
            CI/CD Gate Verdict
          </text>

          {/* Verdict mini boxes */}
          <rect x="612" y="78" width="54" height="24" rx="3" className="fill-emerald-100 dark:fill-emerald-950/80 stroke-emerald-600" strokeWidth="1" />
          <text x="639" y="94" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-300 font-bold text-[10px]">
            PASS
          </text>

          <rect x="673" y="78" width="54" height="24" rx="3" className="fill-amber-100 dark:fill-amber-950/80 stroke-amber-600" strokeWidth="1" />
          <text x="700" y="94" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-bold text-[10px]">
            WARN
          </text>

          <rect x="734" y="78" width="54" height="24" rx="3" className="fill-rose-100 dark:fill-rose-950/80 stroke-rose-600" strokeWidth="1" />
          <text x="761" y="94" textAnchor="middle" className="fill-rose-800 dark:fill-rose-300 font-bold text-[10px]">
            BLOCK
          </text>

          <text x="700" y="125" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 font-mono text-[9px]">
            Clamped Score + Validated Citations
          </text>

          {/* Arrowhead marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" className="fill-slate-400 dark:fill-slate-500" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 text-center">
        Incoming pull requests are intercepted and compared against historical incidents and runbooks in persistent memory, outputting verifiable citations and boundary-clamped scores.
      </div>
    </div>
  );
}
