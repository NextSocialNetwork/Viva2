/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, CartItem, Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreSection } from './components/StoreSection';
import { CoverageMap } from './components/CoverageMap';
import { Testimonials } from './components/Testimonials';
import { AiSupportChat } from './components/AiSupportChat';
import { CartModal } from './components/CartModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleAddToCart = (product: Product, planOption?: 'monthly' | 'outright') => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1, planOption }];
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-fuchsia-500 selection:text-white antialiased overflow-x-hidden w-full relative">
      
      {/* Top sticky navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenChat={() => setIsChatOpen(prev => !prev)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          language={language}
          onExploreStore={() => handleNavigate('store')}
          onExploreMap={() => handleNavigate('coverage')}
        />

        <StoreSection
          language={language}
          onAddToCart={handleAddToCart}
        />

        <CoverageMap
          language={language}
        />

        <Testimonials
          language={language}
        />
      </main>

      {/* Global Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Floating AI Chat Assistant */}
      <AiSupportChat
        language={language}
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Checkout Drawer Modal */}
      <CartModal
        language={language}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
