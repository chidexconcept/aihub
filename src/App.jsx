import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ToolsCatalog from './pages/ToolsCatalog';
import ToolDetail from './pages/ToolDetail';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedToolId, setSelectedToolId] = useState(null);

  const handleSelectTool = (id) => {
    setSelectedToolId(id);
    setActivePage('tool-detail');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <Home onSelectTool={handleSelectTool} setActivePage={setActivePage} />}
      {activePage === 'tools' && <ToolsCatalog onSelectTool={handleSelectTool} />}
      {activePage === 'tool-detail' && <ToolDetail toolId={selectedToolId} onBack={() => setActivePage('tools')} />}
    </div>
  );
}
