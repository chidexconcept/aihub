import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div onClick={() => setActivePage('home')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-white">AIHUB</span>
        </div>

        <nav className="flex items-center gap-4">
          <button
            onClick={() => setActivePage('home')}
            className={`text-sm ${activePage === 'home' ? 'text-indigo-400' : 'text-slate-400'}`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage('tools')}
            className={`text-sm ${activePage === 'tools' ? 'text-indigo-400' : 'text-slate-400'}`}
          >
            Tools
          </button>
        </nav>
      </div>
    </header>
  );
}
