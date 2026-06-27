import React from 'react';
import { Zap, ShieldCheck, Cpu, ArrowRight, QrCode, Smartphone, Wifi } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: Language;
  onExploreStore: () => void;
  onExploreMap: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreStore, onExploreMap }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="hero" className="relative pt-12 pb-24 overflow-hidden bg-slate-950">
      
      {/* Background Futuristic Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-fuchsia-600/20 via-pink-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 animate-pulse" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase mb-8 shadow-[0_0_25px_rgba(236,72,153,0.3)] animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
          <span>{t.hero_badge}</span>
        </div>

        {/* Main Hero Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          {t.hero_title_1}{' '}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]">
            {t.hero_title_2}
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          {t.hero_desc}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={onExploreStore}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 hover:from-fuchsia-500 hover:to-rose-500 text-white font-sans text-base font-bold shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_45px_rgba(236,72,153,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <QrCode className="w-5 h-5 text-fuchsia-200 group-hover:rotate-12 transition-transform" />
            <span>{t.hero_cta_esim}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreMap}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-sans text-base font-bold transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <Wifi className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span>{t.nav_coverage}</span>
          </button>
        </div>

        {/* Live Network Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md max-w-5xl mx-auto shadow-2xl">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/50 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center mb-3 text-fuchsia-400 font-black">
              50
            </div>
            <span className="text-xl font-black text-white">{t.stats_states}</span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">USA NATIONWIDE</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/50 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 text-cyan-400 font-black">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-white">{t.stats_uptime}</span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">ORBITAL CORE</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/50 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-3 text-pink-400 font-black">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-white">{t.stats_speed}</span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">SUB-15MS LATENCY</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/50 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-400 font-black">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-white">{t.stats_users}</span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">ACTIVE DEVICES</span>
          </div>
        </div>

        {/* Showcase Banner Preview */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_80px_rgba(236,72,153,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80" 
            alt="VIVA Mobile 5G Futuristic Smartphone" 
            className="w-full h-[320px] sm:h-[460px] object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-fuchsia-600 text-white shadow-lg">
                <Smartphone className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold text-base sm:text-lg">Instant eSIM QR Profile Generation</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Works seamlessly with iPhone 17 Pro Max, 16 Pro, and Galaxy S26 Ultra</p>
              </div>
            </div>
            <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 font-bold self-end sm:self-center">
              READY IN 60 SECS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
