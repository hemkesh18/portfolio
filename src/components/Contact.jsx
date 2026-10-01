import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', hp_bot: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection: if filled, quietly succeed without doing anything
    if (formState.hp_bot) {
      setStatus('success');
      return;
    }

    // Basic client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Formspree endpoint (User replaces TODO_FORM_ID with real endpoint)
      const res = await fetch('https://formspree.io/f/TODO_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '', hp_bot: '' });
      } else {
        // Fallback to mailto when Formspree endpoint is placeholder
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
        const body = encodeURIComponent(
          `Hi ${personal.name},\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
        );
        window.location.href = `mailto:${personal.socials.email}?subject=${subject}&body=${body}`;
        setStatus('success');
      }
    } catch (err) {
      // Fallback to mailto on network failure
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi ${personal.name},\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
      );
      window.location.href = `mailto:${personal.socials.email}?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Contact Information & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                Get In Touch
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I am open to software engineering internships and technical discussions regarding full-stack systems, backend engineering, and autonomous AI agents.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                Primary Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 truncate"
                >
                  {personal.socials.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form with validation & honeypot spam protection */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="mb-4 p-3 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <Check size={15} className="shrink-0" />
                  <span>Thank you. Your message has been prepared/dispatched. I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3 rounded bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{errorMessage || 'Failed to submit form. Please use the direct email link above.'}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Honeypot field (hidden from genuine users) */}
                <input
                  type="text"
                  name="hp_bot"
                  value={formState.hp_bot}
                  onChange={(e) => setFormState({ ...formState, hp_bot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="contact-name" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-700 dark:focus:border-teal-400 text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-700 dark:focus:border-teal-400 text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Inquiry regarding software engineering internship opportunities or project review..."
                    className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-700 dark:focus:border-teal-400 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white transition-colors"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
