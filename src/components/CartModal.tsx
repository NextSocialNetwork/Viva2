import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2, QrCode, ShieldCheck } from 'lucide-react';
import { CartItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CartModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  language,
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('mantaschicago36@gmail.com');
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => {
    const p = item.product.category === 'esim' ? item.product.monthlyPrice! : item.product.price;
    return sum + (p * item.quantity);
  }, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
      
      {/* Drawer Container */}
      <div className="w-full max-w-lg bg-slate-950 border-l border-slate-800 h-full flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-black text-white text-lg tracking-wide">{t.cart_title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isCompleted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-black text-white">{t.modal_activation_title}</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">{t.modal_activation_desc}</p>

              {/* Simulated QR Code Box */}
              <div className="p-6 rounded-3xl bg-white max-w-[240px] mx-auto shadow-2xl border-4 border-cyan-400 flex flex-col items-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=VIVA_MOBILE_5G_ULTRA_ESIM_SECRET_TOKEN_99214_PRO_MAX" 
                  alt="VIVA Mobile eSIM Activation QR Code" 
                  className="w-40 h-40 object-contain"
                />
                <span className="font-mono font-bold text-[10px] text-slate-900 mt-3 tracking-wider">
                  SCAN FOR INSTANT 5G
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto">
                Profile confirmation dispatched to <span className="text-cyan-400 font-mono font-bold">{customerEmail}</span>
              </div>

              <button
                onClick={() => {
                  onClearCart();
                  setIsCompleted(false);
                  onClose();
                }}
                className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase font-mono tracking-wider"
              >
                Done • Return to Store
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <ShoppingBag className="w-16 h-16 text-slate-800 mx-auto" />
              <p className="text-slate-400 text-sm">{t.cart_empty}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => {
                const isEsim = item.product.category === 'esim';
                const pPrice = isEsim ? item.product.monthlyPrice : item.product.price;

                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-800"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sans font-bold text-white text-sm truncate">{item.product.name}</h4>
                      <span className="text-[10px] text-cyan-400 font-mono block">
                        {isEsim ? 'UNLIMITED 5G eSIM PLAN' : 'OVERNIGHT EXPEDITED DELIVERY'}
                      </span>
                      <span className="text-xs font-black text-white mt-1 block">
                        ${pPrice} {isEsim ? '/mo' : ''} × {item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {!isCompleted && cartItems.length > 0 && (
          <form onSubmit={handleCheckout} className="p-6 border-t border-slate-800 bg-slate-900/80 space-y-4">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">
                Delivery Email (For Instant eSIM QR / Tracking)
              </label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-fuchsia-500 focus:outline-none font-mono"
              />
            </div>

            <div className="flex items-center justify-between py-2 border-y border-slate-800">
              <span className="text-sm font-bold text-slate-300">{t.cart_total}</span>
              <span className="text-2xl font-black text-white font-mono">${totalAmount}</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-cyan-500 hover:from-fuchsia-500 hover:to-cyan-400 text-slate-950 font-sans font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <QrCode className="w-5 h-5" />
              <span>{t.checkout_btn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-BIT ENCRYPTED 5G ULTRA TRANSACTION</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
