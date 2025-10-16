import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

function LandingPage() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-neutral-900 dark:text-neutral-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-slate-50 dark:bg-neutral-800 border-slate-200 dark:border-neutral-700">
            Tailwind is loaded ✅
          </span>
          <button
            onClick={toggleTheme}
            className="rounded-md border border-slate-200 dark:border-neutral-700 px-3 py-2 text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
            TAConnect Frontend
          </span>
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Vite + React + Tailwind is running.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-4 py-5 shadow-sm border-slate-200 dark:border-neutral-800">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Framework</p>
            <p className="mt-1 font-semibold">React</p>
          </div>
          <div className="rounded-xl border bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-4 py-5 shadow-sm border-slate-200 dark:border-neutral-800">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Bundler</p>
            <p className="mt-1 font-semibold">Vite</p>
          </div>
          <div className="rounded-xl border bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-4 py-5 shadow-sm border-slate-200 dark:border-neutral-800">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">CSS</p>
            <p className="mt-1 font-semibold">Tailwind</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Count: {count}
          </button>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-500" />
            <span className="text-sm">Live reload is active</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
