import React, { useState } from 'react';
import { Wifi, Activity, Zap, Play, Search, MapPin, Radio, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { MAJOR_CITIES, US_STATES } from '../data/networkData';
import { TRANSLATIONS } from '../data/translations';

interface CoverageMapProps {
  language: Language;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(MAJOR_CITIES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<{ ping: number; down: number; up: number } | null>({
    ping: 12,
    down: 1680,
    up: 320
  });

  const t = TRANSLATIONS[language];

  const filteredStates = US_STATES.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const runScanner = () => {
    setIsScanning(true);
    setScanResults(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResults({
        ping: Math.floor(Math.random() * 6) + 11, // 11-16ms
        down: Math.floor(Math.random() * 400) + 1400, // 1400-1800 Mbps
        up: Math.floor(Math.random() * 100) + 280
      });
    }, 2200);
  };

  return (
    <section id="coverage" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold mb-6">
            <Radio className="w-4 h-4 animate-spin text-cyan-400" />
            <span>{t.map_signal_live}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-4">
            {t.map_title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.map_subtitle}
          </p>
        </div>

        {/* Main Map & Scanner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Interactive Map Visualizer (Cols 1-8) */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 relative flex flex-col justify-between min-h-[500px] shadow-2xl backdrop-blur-xl">
            
            {/* Top Bar inside map */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <span className="font-mono text-xs text-slate-300 font-bold flex items-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>5G ULTRA T-MOBILE NATIONWIDE GRID</span>
              </span>
              <span className="font-mono text-[11px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                ● 100% ORBITAL LINK ACTIVE
              </span>
            </div>

            {/* Stylized USA Map Stage with Live City Pins */}
            <div className="relative flex-1 my-8 bg-slate-950/60 rounded-2xl border border-slate-800/60 overflow-hidden flex items-center justify-center p-4">
              
              {/* Decorative Map Outline Background Grid */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative w-full max-w-2xl h-[340px] border border-cyan-500/20 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center shadow-inner">
                <span className="absolute inset-0 flex items-center justify-center font-black text-6xl sm:text-8xl tracking-widest text-slate-800/30 select-none pointer-events-none">
                  UNITED STATES 5G
                </span>

                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-[pulse_3s_infinite] pointer-events-none" />

                {/* Render Major City Nodes */}
                {MAJOR_CITIES.map(city => {
                  const isSelected = selectedCity.city === city.city;
                  return (
                    <div
                      key={city.city}
                      onClick={() => setSelectedCity(city)}
                      style={{ left: `${city.coordinates[0]}%`, top: `${city.coordinates[1]}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    >
                      <div className={`relative flex items-center justify-center p-2 rounded-full transition-all ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}>
                        <span className={`absolute w-6 h-6 rounded-full animate-ping opacity-75 ${
                          isSelected ? 'bg-fuchsia-500' : 'bg-cyan-400'
                        }`} />
                        <MapPin className={`w-6 h-6 relative z-10 transition-colors ${
                          isSelected ? 'text-fuchsia-400 fill-fuchsia-500/30 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]' : 'text-cyan-400 fill-cyan-400/20 group-hover:text-white'
                        }`} />
                        
                        {/* Hover City Tooltip */}
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center whitespace-nowrap bg-slate-950 px-3 py-1.5 rounded-xl border border-cyan-500/40 shadow-2xl z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                          <span className="text-xs font-bold text-white">{city.city}, {city.state}</span>
                          <span className="text-[10px] font-mono text-cyan-300">{city.latencyMs}ms ping • {city.speedMbps} Mbps</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom City Status Indicator Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">SELECTED METRO</span>
                  <span className="text-sm font-black text-white">{selectedCity.city}, {selectedCity.state}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">LATENCY & PING</span>
                  <span className="text-sm font-black text-cyan-400 font-mono">{selectedCity.latencyMs}ms (ULTRA-FAST)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">UPTIME & SPEED</span>
                  <span className="text-sm font-black text-emerald-400 font-mono">{selectedCity.uptimePercent} • {selectedCity.speedMbps} Mbps</span>
                </div>
              </div>
            </div>

          </div>

          {/* Live Scanner Simulator (Cols 9-12) */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-fuchsia-500 animate-ping" />
                <h3 className="font-sans font-black text-lg text-white uppercase tracking-wide">
                  {t.map_simulator_title}
                </h3>
              </div>

              <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                Run an instant real-time diagnostic simulation of orbital T-Mobile 5G Ultra towers directly from your current IP coordinates.
              </p>

              {/* Live Animation Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center mb-8 relative overflow-hidden">
                {isScanning && (
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-fuchsia-500/10 to-transparent animate-pulse" />
                )}

                {isScanning ? (
                  <div className="py-12 flex flex-col items-center justify-center space-y-4">
                    <Radio className="w-12 h-12 text-cyan-400 animate-spin" />
                    <span className="text-xs font-mono text-cyan-300 animate-pulse">{t.map_sim_running}</span>
                  </div>
                ) : scanResults ? (
                  <div className="space-y-6 py-4">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">{t.map_sim_ping}</span>
                        <span className="text-2xl font-black font-mono text-cyan-400">{scanResults.ping} ms</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">{t.map_sim_down}</span>
                        <span className="text-2xl font-black font-mono text-fuchsia-400">{scanResults.down} Mbps</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono block">{t.map_sim_up}</span>
                      <span className="text-xl font-bold font-mono text-emerald-400">{scanResults.up} Mbps</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <button
              onClick={runScanner}
              disabled={isScanning}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-sans font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{isScanning ? 'DIAGNOSTIC IN PROGRESS...' : t.map_sim_btn}</span>
            </button>
          </div>

        </div>

        {/* All States Search & Table Breakdown */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-sans font-black text-white">All 50 States Coverage Directory</h3>
              <p className="text-xs text-slate-400 mt-1">Real-time T-Mobile Ultra node verification across the USA</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={t.map_search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Scrollable State Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredStates.map(st => (
              <div key={st.code} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs font-black text-cyan-400 flex items-center justify-center">
                    {st.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{st.name}</h4>
                    <span className="text-[10px] text-slate-400 font-mono">{st.nodesCount}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-emerald-400 block font-mono">{st.coveragePercent}%</span>
                  <span className="text-[10px] text-slate-400 font-mono">{st.avgSpeedMbps} Mbps</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
