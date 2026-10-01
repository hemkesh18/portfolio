import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  Moon,
  Sun,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  Code2,
  Trophy,
  GraduationCap,
  Briefcase,
  ExternalLink,
  X,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onToggleTheme, onOpenResume, theme }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const { personal } = portfolioData;

  const actions = [
    {
      id: 'preflight',
      title: 'Flagship: Preflight Autonomous Gate',
      category: 'Projects',
      icon: <ShieldCheck size={16} className="text-teal-700 dark:text-teal-400" />,
      run: () => {
        window.location.hash = '#preflight';
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'View Engineering Projects (LMS, Second Flagship)',
      category: 'Projects',
      icon: <Code2 size={16} />,
      run: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'Technical Skills (Strong, Working, Familiar)',
      category: 'Navigation',
      icon: <Code2 size={16} />,
      run: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'hackathons',
      title: 'Hackathons & Competitions (SIH, Amazon ML, etc.)',
      category: 'Navigation',
      icon: <Trophy size={16} />,
      run: () => {
        window.location.hash = '#hackathons';
        onClose();
      },
    },
    {
      id: 'github',
      title: 'Recent GitHub Activity',
      category: 'Navigation',
      icon: <ExternalLink size={16} />,
      run: () => {
        window.location.hash = '#github';
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Work Experience (IIT Foundation Tutoring)',
      category: 'Navigation',
      icon: <Briefcase size={16} />,
      run: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'education',
      title: 'Academic Education (CBIT Hyderabad)',
      category: 'Navigation',
      icon: <GraduationCap size={16} />,
      run: () => {
        window.location.hash = '#education';
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Contact Form & Direct Channels',
      category: 'Navigation',
      icon: <Mail size={16} />,
      run: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'Open ATS Resume Preview',
      category: 'Actions',
      icon: <FileText size={16} className="text-teal-700 dark:text-teal-400" />,
      run: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Actions',
      icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />,
      run: () => {
        onToggleTheme();
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : `Copy Email (${personal.socials.email})`,
      category: 'Actions',
      icon: copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />,
      run: () => {
        navigator.clipboard.writeText(personal.socials.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].run();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-72 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, idx) => (
              <button
                key={action.id}
                onClick={action.run}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-xs text-left transition-colors ${
                  selectedIndex === idx
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-slate-500 dark:text-slate-400 shrink-0">
                    {action.icon}
                  </span>
                  <span>{action.title}</span>
                </div>
                <span className="text-[10px] uppercase font-mono text-slate-400 dark:text-slate-500">
                  {action.category}
                </span>
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-xs text-slate-400">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Navigate with ↑ and ↓, press Enter to execute</span>
          <span className="font-mono">Ctrl+K / ⌘K</span>
        </div>
      </div>
    </div>
  );
}
