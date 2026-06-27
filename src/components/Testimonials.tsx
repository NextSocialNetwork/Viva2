import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS_LIST } from '../data/networkData';
import { TRANSLATIONS } from '../data/translations';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
            ))}
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-4">
            {t.testimonials_title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.testimonials_subtitle}
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_LIST.map((item) => {
            const commentText = item.comment[language] || item.comment.en;

            return (
              <div
                key={item.id}
                className="relative rounded-3xl bg-slate-950/90 border border-slate-800 p-8 flex flex-col justify-between hover:border-fuchsia-500/40 transition-all shadow-xl hover:shadow-[0_0_35px_rgba(236,72,153,0.15)]"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-800/40 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 font-mono text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 inline" /> VERIFIED 5G USER
                    </span>
                  </div>

                  <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed mb-8 relative z-10">
                    "{commentText}"
                  </p>
                </div>

                {/* User Author Card */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-fuchsia-500/50"
                    />
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm">{item.name}</h4>
                      <span className="text-xs text-slate-400 block">{item.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-cyan-400 font-bold">
                      {item.phoneModel}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1 font-mono">{item.date}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
