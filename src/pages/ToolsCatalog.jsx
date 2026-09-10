import React, { useState } from 'react';
import { TOOLS, CATEGORIES } from '../data/toolsData';

export default function ToolsCatalog({ onSelectTool }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = TOOLS.filter(
    t => selectedCategory === 'all' || t.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-white">All AI Tools</h1>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              selectedCategory === cat.id ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-indigo-500"
          >
            <h3 className="font-bold text-white mb-1">{tool.name}</h3>
            <p className="text-xs text-slate-400">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
