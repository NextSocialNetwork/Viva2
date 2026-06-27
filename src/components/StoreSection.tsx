import React, { useState } from 'react';
import { ShoppingBag, Star, Smartphone, QrCode, Check, Cpu, Wifi } from 'lucide-react';
import { Product, Language } from '../types';
import { STORE_PRODUCTS } from '../data/storeData';
import { TRANSLATIONS } from '../data/translations';

interface StoreSectionProps {
  language: Language;
  onAddToCart: (product: Product, planOption?: 'monthly' | 'outright') => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ language, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'esim' | 'iphone' | 'samsung'>('all');
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const t = TRANSLATIONS[language];

  const filteredProducts = activeTab === 'all' 
    ? STORE_PRODUCTS 
    : STORE_PRODUCTS.filter(p => p.category === activeTab);

  const handleAdd = (product: Product) => {
    onAddToCart(product, product.category === 'esim' ? 'monthly' : 'outright');
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="store" className="py-24 bg-slate-900 text-white relative">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-4">
            {t.store_title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.store_subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-slate-950/80 p-2 rounded-2xl border border-slate-800 max-w-xl mx-auto">
            {[
              { id: 'all', label: t.filter_all, icon: ShoppingBag },
              { id: 'esim', label: t.filter_esim, icon: QrCode },
              { id: 'iphone', label: t.filter_iphone, icon: Smartphone },
              { id: 'samsung', label: t.filter_samsung, icon: Cpu },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => {
            const isAdded = addedIds[product.id];
            const isEsim = product.category === 'esim';

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-fuchsia-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"
              >
                {/* Badge if available */}
                {product.badge && (
                  <span className="absolute top-6 left-6 z-10 font-mono text-[10px] font-black tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-slate-950 uppercase shadow-md">
                    {product.badge}
                  </span>
                )}

                {/* Top Image Box */}
                <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-900 mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1">
                        <Wifi className="w-3 h-3" /> 5G ULTRA READY
                      </span>
                      <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-amber-400 text-xs font-bold font-mono">
                        <Star className="w-3 h-3 fill-amber-400 inline" /> {product.rating}
                      </div>
                    </div>

                    <h3 className="text-xl font-sans font-black text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Specs Quick List */}
                  <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 text-xs text-slate-300">
                    {product.specs.data && (
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{product.specs.data}</span>
                      </div>
                    )}
                    {product.specs.screen && (
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{product.specs.screen}</span>
                      </div>
                    )}
                    {product.specs.storage && (
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{product.specs.storage}</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">
                        {isEsim ? 'UNLIMITED MONTHLY' : 'STARTING AT'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white">
                          ${isEsim ? product.monthlyPrice : product.price}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {isEsim ? '/mo' : (product.monthlyPrice ? ` or $${product.monthlyPrice}/mo` : '')}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-5 py-3 rounded-xl font-sans text-xs font-bold transition-all flex items-center gap-2 ${
                        isAdded
                          ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                          : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span>ADDED!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>{t.btn_add_cart}</span>
                        </>
                      )}
                    </button>
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
