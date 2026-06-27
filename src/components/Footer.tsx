import React from 'react';
import { Radio, Zap, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate, onOpenChat }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Radio className="w-4 h-4 text-fuchsia-400" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-sans font-black tracking-widest text-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-300 to-cyan-400 leading-none">
                  VIVA
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-fuchsia-400 uppercase mt-0.5">
                  MOBILE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.footer_tagline} Official portal: <a href="https://www.MyVivaMobile.Com" className="text-cyan-400 underline hover:text-cyan-300 font-mono">www.MyVivaMobile.Com</a>
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] text-emerald-400 font-bold">5G ULTRA NODES ONLINE ACROSS ALL 50 STATES</span>
            </div>
          </div>

          {/* Directory Col */}
          <div>
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">{t.nav_home}</button></li>
              <li><button onClick={() => onNavigate('store')} className="hover:text-white transition-colors">{t.nav_store}</button></li>
              <li><button onClick={() => onNavigate('coverage')} className="hover:text-white transition-colors">{t.nav_coverage}</button></li>
              <li><button onClick={() => onNavigate('testimonials')} className="hover:text-white transition-colors">{t.nav_testimonials}</button></li>
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-4">Customer AI Portal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={onOpenChat} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold"><MessageSquare className="w-3.5 h-3.5 inline" /> {t.nav_support}</button></li>
              <li><a href="https://www.MyVivaMobile.Com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1"><Globe className="w-3.5 h-3.5 inline text-fuchsia-400" /> www.MyVivaMobile.Com</a></li>
              <li className="font-mono text-[10px] text-slate-500 pt-2">LATENCY: SUB-15MS</li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>{t.footer_rights}</p>
          <div className="flex items-center gap-4">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF 5G SERVICE</span>
            <span className="text-fuchsia-400/80">BUILD v2.5.0-ULTRA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
