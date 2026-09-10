import React from 'react';
import { TOOLS } from '../data/toolsData';

export default function Home({ onSelectTool, setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Write. Create. Build. <br />
          <span className="text-indigo-400">Get things done with AI.</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Access writing, video, career, and business AI tools from one dashboard.
        </p>
        <button
          onClick={() => setActivePage('tools')}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm"
        >
          Explore All Tools
        </button>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-6">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOOLS.slice(0, 3).map(tool => (
            <div
              key={tool.id}
              onClick={() => onSelectTool(tool.id)}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-indigo-500 transition-colors"
            >
              <h3 className="font-bold text-white mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
