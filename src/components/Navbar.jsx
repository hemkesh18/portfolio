import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, Search, ShieldCheck } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenResume, onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('preflight');
  const [scrollProgress, setScrollProgress] = useState(0);

  const { personal } = portfolioData;

  const navLinks = [
    { name: 'Preflight', href: '#preflight' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Reading progress indicator and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // Check which section is in view
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-700 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
        {/* Reading Progress Bar */}
        <div
          className="h-[2px] bg-teal-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base tracking-tight hover:opacity-90 transition-opacity shrink-0"
          >
            <span className="w-7 h-7 rounded bg-teal-700 text-white flex items-center justify-center font-mono text-xs font-bold">
              CH
            </span>
            <span className="font-semibold text-sm hidden sm:inline">{personal.name}</span>
          </a>

          {/* Desktop Navigation Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-teal-700 dark:text-teal-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Controls: Command Palette, Theme, Resume */}
          <div className="flex items-center gap-2">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open command palette"
            >
              <Search size={13} />
              <span className="hidden sm:inline font-mono text-[10px]">Ctrl+K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Toggle to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white shadow-xs transition-colors"
            >
              <FileText size={13} />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-1.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
