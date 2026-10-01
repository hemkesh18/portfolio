import React, { useState, useEffect } from 'react';
import { Star, GitFork, BookMarked, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

// Repositories explicitly excluded by user request
const EXCLUDED_REPOS = ['hydradb', 'rocketride', 'rocketride-server', 'lcode'];

// High-quality fallback descriptions for public repos with empty descriptions
const REPO_DESCRIPTIONS = {
  preflight: 'Autonomous CI/CD release safety gate powered by Vectorize Hindsight persistent memory.',
  portfolio: 'Personal developer portfolio and ATS resume suite built with React 19, Vite, and Tailwind CSS.',
  'learning-management-system': 'Full-stack learning management platform supporting role-based access control and PostgreSQL schemas.',
  'todo-list': 'Full-stack task management web application built with Node.js, Express.js, and modular EJS templates.',
  'LeetHub-2.0': 'Chrome extension automatically syncing verified LeetCode problem solutions to GitHub.',
};

const STATIC_FALLBACK_REPOS = [
  {
    name: 'preflight',
    description: REPO_DESCRIPTIONS.preflight,
    html_url: 'https://github.com/hemkesh18/preflight',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-10-02T03:00:00Z',
  },
  {
    name: 'portfolio',
    description: REPO_DESCRIPTIONS.portfolio,
    html_url: 'https://github.com/hemkesh18/portfolio',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2026-10-02T03:00:00Z',
  },
  {
    name: 'learning-management-system',
    description: REPO_DESCRIPTIONS['learning-management-system'],
    html_url: 'https://github.com/hemkesh18/learning-management-system',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-11-20T10:00:00Z',
  },
  {
    name: 'todo-list',
    description: REPO_DESCRIPTIONS['todo-list'],
    html_url: 'https://github.com/hemkesh18/todo-list',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-07-15T10:00:00Z',
  },
  {
    name: 'LeetHub-2.0',
    description: REPO_DESCRIPTIONS['LeetHub-2.0'],
    html_url: 'https://github.com/hemkesh18/LeetHub-2.0',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-05-10T10:00:00Z',
  },
];

const CACHE_KEY = 'hemkesh_github_repos_cache_v3';
const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export default function GithubActivity() {
  const [repos, setRepos] = useState(STATIC_FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      // 1. Check localStorage cache
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const { timestamp, data } = JSON.parse(cachedRaw);
          if (Date.now() - timestamp < CACHE_EXPIRY_MS && Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsCached(true);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Cache read failed, proceed to fetch
      }

      // 2. Fetch from GitHub API
      try {
        const res = await fetch('https://api.github.com/users/hemkesh18/repos?sort=updated&per_page=20');
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const filtered = data
            .filter((r) => !EXCLUDED_REPOS.includes(r.name.toLowerCase()))
            .slice(0, 6)
            .map((r) => ({
              name: r.name,
              description: r.description || REPO_DESCRIPTIONS[r.name] || 'Public GitHub repository by Cuddapah Hemkesh.',
              html_url: r.html_url,
              stargazers_count: r.stargazers_count || 0,
              forks_count: r.forks_count || 0,
              language: r.language || 'JavaScript',
              updated_at: r.updated_at,
            }));

          if (filtered.length > 0) {
            setRepos(filtered);
            setIsCached(false);
            try {
              localStorage.setItem(
                CACHE_KEY,
                JSON.stringify({ timestamp: Date.now(), data: filtered })
              );
            } catch (storageErr) {
              // Ignore storage errors
            }
          }
        }
      } catch (error) {
        // Fallback to static verified list
        setRepos(STATIC_FALLBACK_REPOS);
        setIsCached(false);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Open Source
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
              Recent GitHub Activity
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 font-mono">
              user: hemkesh18 {isCached && '(cached 1h)'}
            </span>
            <a
              href="https://github.com/hemkesh18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
            >
              <GithubIcon size={14} />
              <span>View Profile</span>
            </a>
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white truncate">
                    <BookMarked size={15} className="text-teal-700 dark:text-teal-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white shrink-0"
                    title={`Open ${repo.name} on GitHub`}
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>{repo.language}</span>
                </span>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
