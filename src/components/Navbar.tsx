import React, { useState } from 'react';
import { Radio, ShoppingBag, MessageSquare, Globe, ChevronDown, Menu, X, Zap } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, LANGUAGE_NAMES } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenChat: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
  onOpenChat,
  activeSection,
  onNavigate
}) => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'hero', label: t.nav_home },
    { id: 'store', label: t.nav_store },
    { id: 'coverage', label: t.nav_coverage },
    { id: 'testimonials', label: t.nav_testimonials },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-cyan-400 p-[2px] shadow-[0_0_20px_rgba(236,72,153,0.4)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Radio className="w-5 h-5 text-fuchsia-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-black tracking-wider text-xl text-white flex items-center gap-1">
              VIVA <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">MOBILE</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold uppercase flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 inline fill-cyan-400" /> 5G ULTRA CAPACITY
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)]' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* AI Chat Support Trigger */}
          <button
            onClick={onOpenChat}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 hover:from-cyan-500/30 hover:to-fuchsia-500/30 border border-cyan-500/40 text-cyan-300 font-sans text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>{t.nav_support}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" />
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-fuchsia-400" />
              <span className="text-base leading-none">{LANGUAGE_NAMES[language].flag}</span>
              <span className="uppercase font-mono font-bold">{language}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                {(Object.keys(LANGUAGE_NAMES) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between transition-colors ${
                      language === lang 
                        ? 'bg-fuchsia-500/20 text-fuchsia-300 font-bold border-l-2 border-fuchsia-500' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{LANGUAGE_NAMES[lang].flag}</span>
                      <span>{LANGUAGE_NAMES[lang].native}</span>
                    </span>
                    <span className="font-mono uppercase text-[10px] opacity-60">{lang}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-all group"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4 group-hover:text-fuchsia-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-sans text-sm font-semibold ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-fuchsia-600/30 to-pink-600/30 text-fuchsia-300 border border-fuchsia-500/40'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenChat();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.nav_support}</span>
          </button>
        </div>
      )}
    </header>
  );
};
