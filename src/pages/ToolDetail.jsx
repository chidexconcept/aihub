import React, { useState } from 'react';
import { TOOLS } from '../data/toolsData';

export default function ToolDetail({ toolId, onBack }) {
  const tool = TOOLS.find(t => t.id === toolId) || TOOLS[0];
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!input) return;
    setLoading(true);
    setTimeout(() => {
      setOutput(`Generated result for: "${input}"\n\nYour optimized content is ready!`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button onClick={onBack} className="text-xs text-slate-400 hover:text-white">
        ← Back to catalog
      </button>

      <h1 className="text-2xl font-bold text-white">{tool.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <textarea
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={tool.placeholder}
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm"
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 min-h-[160px]">
          <p className="text-xs font-semibold text-slate-400 mb-2">OUTPUT</p>
          <div className="text-sm text-slate-200 whitespace-pre-wrap">
            {output || 'Result will appear here...'}
          </div>
        </div>
      </div>
    </div>
  );
}
