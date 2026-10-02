import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Coffee,
  Terminal,
  FileCode,
  Database,
  Code,
  Code2,
  Server,
  Zap,
  Layers,
  Atom,
  Sparkles,
  Braces,
  Cpu,
  Brain,
  Layout,
  Boxes,
  Binary,
  BookOpen,
  Info,
} from 'lucide-react';

const iconMap = {
  Coffee,
  Terminal,
  FileCode,
  Database,
  Code,
  Code2,
  Server,
  Zap,
  Layers,
  Atom,
  Sparkles,
  Braces,
  Cpu,
  Brain,
  Layout,
  Boxes,
  Binary,
  BookOpen,
};

const categoryIconMap = {
  Languages: Code2,
  'Backend and Data': Server,
  Frontend: Layout,
  'AI and Agents': Brain,
  'CS Foundations': BookOpen,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeSkill, setActiveSkill] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ left: '50%', transform: 'translateX(-50%)', align: 'center' });
  const containerRef = useRef(null);

  // Close tooltip on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveSkill(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  const handleActivate = (e, skill) => {
    if (!skill.usedIn) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    if (rect.left < 130) {
      setTooltipPos({ left: '0', right: 'auto', transform: 'none', align: 'left' });
    } else if (screenWidth - rect.right < 130) {
      setTooltipPos({ left: 'auto', right: '0', transform: 'none', align: 'right' });
    } else {
      setTooltipPos({ left: '50%', right: 'auto', transform: 'translateX(-50%)', align: 'center' });
    }
    setActiveSkill(skill.name);
  };

  const handleDeactivate = (skill) => {
    if (activeSkill === skill.name) {
      setActiveSkill(null);
    }
  };

  const handleToggle = (e, skill) => {
    if (!skill.usedIn) return;
    if (activeSkill === skill.name) {
      setActiveSkill(null);
    } else {
      handleActivate(e, skill);
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Technical Skills
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Grouped by engineering domain with verified repository usage. Hover, tap, or focus any skill chip to inspect project verification.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skills.map((card, cIdx) => {
            const CategoryIcon = categoryIconMap[card.category] || Code2;
            const isCsFoundations = card.category === 'CS Foundations';
            const activeCardSkill = card.items.find((i) => i.name === activeSkill);

            return (
              <div
                key={cIdx}
                className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-sm transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60">
                        <CategoryIcon size={18} />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {card.category}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {card.items.length} skills
                    </span>
                  </div>

                  {/* Card Description */}
                  <p className="mt-2.5 text-xs text-slate-500 dark:text-slate-400">
                    {card.description}
                  </p>

                  {/* Chips Container */}
                  <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
                    {card.items.map((skill, sIdx) => {
                      const IconComponent = iconMap[skill.icon] || Code;
                      const hasTooltip = Boolean(skill.usedIn) && !isCsFoundations;
                      const isActive = hasTooltip && activeSkill === skill.name;
                      const tooltipId = `tooltip-${cIdx}-${sIdx}`;

                      return (
                        <div
                          key={sIdx}
                          role={hasTooltip ? 'button' : undefined}
                          tabIndex={hasTooltip ? 0 : undefined}
                          aria-label={
                            hasTooltip
                              ? `${skill.name}${skill.level ? ` (${skill.level})` : ''}. Used in: ${skill.usedIn}`
                              : `${skill.name}${skill.level ? ` (${skill.level})` : ''}`
                          }
                          aria-describedby={isActive ? tooltipId : undefined}
                          onMouseEnter={hasTooltip ? (e) => handleActivate(e, skill) : undefined}
                          onMouseLeave={hasTooltip ? () => handleDeactivate(skill) : undefined}
                          onFocus={hasTooltip ? (e) => handleActivate(e, skill) : undefined}
                          onBlur={hasTooltip ? () => handleDeactivate(skill) : undefined}
                          onClick={hasTooltip ? (e) => handleToggle(e, skill) : undefined}
                          onKeyDown={
                            hasTooltip
                              ? (e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleToggle(e, skill);
                                  } else if (e.key === 'Escape') {
                                    setActiveSkill(null);
                                  }
                                }
                              : undefined
                          }
                          className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 select-none border ${
                            hasTooltip
                              ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 dark:focus:ring-offset-slate-900'
                              : 'cursor-default'
                          } ${
                            isActive
                              ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-400 dark:border-teal-600 text-teal-950 dark:text-teal-100 shadow-sm'
                              : 'bg-slate-50 hover:bg-slate-100/90 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700/80'
                          }`}
                        >
                          <IconComponent
                            size={14}
                            className={`shrink-0 ${
                              isActive
                                ? 'text-teal-700 dark:text-teal-300'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          />
                          <span className="font-semibold">{skill.name}</span>

                          {/* Strong Marker */}
                          {skill.level === 'Strong' && (
                            <span className="ml-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-teal-100/80 dark:bg-teal-950/90 text-teal-800 dark:text-teal-300 border border-teal-300/70 dark:border-teal-700/70">
                              Strong
                            </span>
                          )}

                          {/* Familiar Marker */}
                          {skill.level === 'Familiar' && (
                            <span className="ml-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-300/80 dark:border-slate-600">
                              Familiar
                            </span>
                          )}

                          {/* Floating Tooltip (excluded for CS Foundations) */}
                          {hasTooltip && (
                            <div
                              id={tooltipId}
                              role="tooltip"
                              style={{
                                left: tooltipPos.left,
                                right: tooltipPos.right,
                                transform: tooltipPos.transform,
                              }}
                              className={`absolute bottom-full mb-2 z-30 w-max max-w-[210px] sm:max-w-xs px-2.5 py-1.5 text-xs text-left font-normal rounded-md shadow-xl bg-slate-950 text-slate-100 dark:bg-slate-100 dark:text-slate-900 border border-slate-800 dark:border-slate-200 transition-all duration-150 pointer-events-none ${
                                isActive
                                  ? 'opacity-100 scale-100 visible'
                                  : 'opacity-0 scale-95 invisible'
                              }`}
                            >
                              <span className="font-semibold text-teal-400 dark:text-teal-700">
                                Used in:
                              </span>{' '}
                              <span>{skill.usedIn}</span>

                              {/* Arrow Pointer */}
                              <div
                                className={`absolute top-full -mt-1 border-4 border-transparent border-t-slate-950 dark:border-t-slate-100 ${
                                  tooltipPos.align === 'left'
                                    ? 'left-4'
                                    : tooltipPos.align === 'right'
                                    ? 'right-4'
                                    : 'left-1/2 -translate-x-1/2'
                                }`}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Accessible Card Context Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 min-h-[32px] flex items-center text-[11px] text-slate-500 dark:text-slate-400">
                  {isCsFoundations ? (
                    <span className="text-slate-500 dark:text-slate-400">
                      Core academic curriculum and computer science theory
                    </span>
                  ) : activeCardSkill ? (
                    <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-300">
                      <Info size={13} className="shrink-0 text-teal-600 dark:text-teal-400" />
                      <span>
                        <strong className="font-semibold">{activeCardSkill.name}:</strong> Used in {activeCardSkill.usedIn}
                      </span>
                    </div>
                  ) : (
                    <span className="italic text-slate-400 dark:text-slate-500">
                      Hover or tap any chip to inspect project verification
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
