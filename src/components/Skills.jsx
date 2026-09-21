import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Brain, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Category Icon helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'CS Core Subjects':
        return <BookOpen size={18} className="text-amber-500" />;
      case 'Programming Languages':
        return <Code size={18} className="text-indigo-500" />;
      case 'Web Technologies':
        return <Server size={18} className="text-blue-500" />;
      case 'Developer Tools':
        return <Wrench size={18} className="text-emerald-500" />;
      case 'Soft Skills & Leadership':
        return <Brain size={18} className="text-purple-500" />;
      default:
        return <Code size={18} className="text-indigo-500" />;
    }
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Technical Arsenal
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Skills & Core Competencies
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Technologies, frameworks, and Computer Science fundamentals I work with across coursework, competitive coding, and personal engineering projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {categoryGroup.category}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {categoryGroup.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        • {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 dark:text-slate-500">
                {categoryGroup.items.length} proficiencies listed
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
