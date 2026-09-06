/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsBar } from './components/PillarsBar';
import { AboutSection } from './components/AboutSection';
import { InsideBookSection } from './components/InsideBookSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SampleReaderModal } from './components/SampleReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [readerOpen, setReaderOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick-access bar once scrolled past hero (approx 650px)
      setShowStickyBar(window.scrollY > 650);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0b0e] text-[#e5e1da] font-sans selection:bg-[#dfc18b] selection:text-[#121014] relative">
      {/* Top Navigation */}
      <Navbar
        onOpenCheckout={() => setCheckoutOpen(true)}
        onOpenPreview={() => setReaderOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenCheckout={() => setCheckoutOpen(true)}
          onOpenPreview={() => setReaderOpen(true)}
        />

        {/* 4 Pillars Highlights Bar */}
        <PillarsBar />

        {/* About Daniel (Light Linen Editorial Section) */}
        <AboutSection
          onOpenPreview={() => setReaderOpen(true)}
        />

        {/* Inside The Book (Dark Obsidian & Golden Accents) */}
        <InsideBookSection
          onOpenCheckout={() => setCheckoutOpen(true)}
          onOpenPreview={() => setReaderOpen(true)}
        />

        {/* Reader Testimonials & Social Proof (Warm Parchment Section) */}
        <TestimonialsSection />

        {/* Final CTA Offer Section (Atmospheric Dark Gold & Stacked Volumes) */}
        <FinalCtaSection
          onOpenCheckout={() => setCheckoutOpen(true)}
          onOpenPreview={() => setReaderOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={() => setCheckoutOpen(true)}
        onOpenPreview={() => setReaderOpen(true)}
      />

      {/* Floating Bottom Quick Buy Action (Visible when scrolled) */}
      <aside 
        aria-label="Quick action bar"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 transition-all duration-500 transform ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 p-1.5 bg-[#17151e]/90 backdrop-blur-md border border-[#3c3447] rounded-full shadow-2xl">
          <button
            onClick={() => setReaderOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#dfc18b] hover:text-[#eed6aa] rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Read Excerpt</span>
          </button>

          <button
            id="floating-get-book-btn"
            onClick={() => setCheckoutOpen(true)}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#dfc18b] hover:bg-[#ebd4aa] text-[#141217] font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg hover:shadow-[#dfc18b]/30 transition-all cursor-pointer"
          >
            <span>Get The Book</span>
            <span className="font-serif text-sm font-bold border-l border-[#141217]/30 pl-1.5">$19</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Free Sample Chapter Reader Modal */}
      <SampleReaderModal
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
        onOpenCheckout={() => {
          setReaderOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Instant Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onOpenReader={() => {
          setCheckoutOpen(false);
          setReaderOpen(true);
        }}
      />
    </div>
  );
}

