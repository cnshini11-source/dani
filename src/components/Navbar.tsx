import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenPreview }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0b0e]/95 backdrop-blur-md border-b border-[#25222b] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0c0b0e]/90 via-[#0c0b0e]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group flex flex-col items-start cursor-pointer focus:outline-none"
        >
          <span className="font-serif tracking-[0.3em] text-2xl sm:text-3xl font-semibold text-[#f4efe6] group-hover:text-[#dfc18b] transition-colors uppercase">
            DANIEL
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#a59a88] uppercase font-sans font-medium mt-0.5">
            HUMAN NATURE. REAL INSIGHTS.
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs tracking-[0.15em] uppercase text-[#c3bbb0] font-medium">
          <button
            onClick={() => scrollToSection('pillars')}
            className="hover:text-[#dfc18b] transition-colors cursor-pointer py-1"
          >
            Core Pillars
          </button>
          <button
            onClick={() => scrollToSection('about-daniel')}
            className="hover:text-[#dfc18b] transition-colors cursor-pointer py-1"
          >
            About Daniel
          </button>
          <button
            onClick={() => scrollToSection('inside-the-book')}
            className="hover:text-[#dfc18b] transition-colors cursor-pointer py-1"
          >
            Inside The Book
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#dfc18b] transition-colors cursor-pointer py-1"
          >
            Reader Reviews
          </button>
          <button
            onClick={onOpenPreview}
            className="text-[#dfc18b] hover:text-[#eed6aa] transition-colors flex items-center gap-1.5 cursor-pointer py-1 border-b border-[#dfc18b]/30 pb-0.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Read Excerpt
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="nav-get-book-btn"
            onClick={onOpenCheckout}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#dfc18b] hover:bg-[#eed6aa] text-[#141217] font-semibold text-xs tracking-wider uppercase rounded-xs transition-all shadow-md hover:shadow-[#dfc18b]/20 cursor-pointer"
          >
            <span>Get The Book</span>
            <span className="font-serif text-sm font-bold border-l border-[#141217]/30 pl-2">$19</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#f4efe6] hover:text-[#dfc18b] p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121017] border-b border-[#2a2632] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase text-[#d5cebf]">
            <button
              onClick={() => scrollToSection('pillars')}
              className="text-left py-2 hover:text-[#dfc18b] border-b border-[#201d27]"
            >
              Core Pillars
            </button>
            <button
              onClick={() => scrollToSection('about-daniel')}
              className="text-left py-2 hover:text-[#dfc18b] border-b border-[#201d27]"
            >
              About Daniel
            </button>
            <button
              onClick={() => scrollToSection('inside-the-book')}
              className="text-left py-2 hover:text-[#dfc18b] border-b border-[#201d27]"
            >
              Inside The Book
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left py-2 hover:text-[#dfc18b] border-b border-[#201d27]"
            >
              Reader Reviews
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreview();
              }}
              className="text-left py-2 text-[#dfc18b] flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Read Free Excerpt (Chapter 1)
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 bg-[#dfc18b] hover:bg-[#eed6aa] text-[#141217] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get The Book — $19</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
