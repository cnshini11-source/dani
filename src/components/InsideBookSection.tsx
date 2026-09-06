import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, BookOpen, ArrowRight, Sparkles, Download, Layers } from 'lucide-react';
import { BOOK_BULLETS, CHAPTERS } from '../data/bookData';

interface InsideBookSectionProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const InsideBookSection: React.FC<InsideBookSectionProps> = ({ onOpenCheckout, onOpenPreview }) => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  return (
    <section id="inside-the-book" className="relative py-24 lg:py-32 bg-[#0d0c10] text-[#e8e4dc] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c9a76d]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dfc18b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 3D Book Presentation Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-[280px] sm:max-w-[300px]">
              
              {/* Gold glow behind the book */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#dfc18b]/20 via-[#dfc18b]/5 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Book 3D Container with Realistic Perspective */}
              <div 
                className="relative rounded-lg overflow-hidden shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] border border-[#373140] bg-[#141218] cursor-pointer"
                onClick={onOpenPreview}
              >
                <img
                  src="https://i.imgur.com/6TLICsT.jpeg"
                  onError={(e) => {
                    e.currentTarget.src = "/images/book-cover.jpg";
                  }}
                  alt="The Things People Feel"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Look Inside hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-[#dfc18b] text-[#0c0b0e] text-xs uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-xs shadow-xl flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Look Inside</span>
                  </span>
                </div>
              </div>

              {/* Quick Specs pills below book */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-[#17151e] border border-[#2a2633] p-2 rounded">
                  <span className="block text-[#a09584] text-[10px] uppercase tracking-wider">Read Time</span>
                  <span className="font-serif font-semibold text-[#f0ebe0] text-xs sm:text-sm">~4.5 hrs</span>
                </div>
                <div className="bg-[#17151e] border border-[#2a2633] p-2 rounded">
                  <span className="block text-[#a09584] text-[10px] uppercase tracking-wider">Bonus</span>
                  <span className="font-serif font-semibold text-[#eed6aa] text-xs sm:text-sm">30d Plan</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Core Topics & Detailed Learning Objectives */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#dfc18b] uppercase">
                INSIDE THE BOOK
              </span>
              <div className="w-12 h-[1px] bg-[#dfc18b]/40" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-[#fbf8f2] tracking-tight">
              A DEEPER UNDERSTANDING <br />
              <span className="text-[#eed6aa]">OF WHAT DRIVES HUMAN BEHAVIOR.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#b8afa1] font-normal leading-relaxed">
              You'll gain practical insights into the emotional patterns, dynamics, and behaviors that shape the way people think, feel, and act.
            </p>

            {/* The 6 Core Bullets matching the reference image */}
            <div className="space-y-4 pt-1">
              {BOOK_BULLETS.map((bullet, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-lg bg-[#141219]/60 border border-[#24202c] hover:border-[#dfc18b]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#272115] border border-[#c9a76d] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#dfc18b] stroke-[2.5]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-[#f3eee4]">
                      {bullet.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9b9181] mt-0.5 leading-relaxed">
                      {bullet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Chapter Outline Accordion */}
            <div className="pt-3 border-t border-[#26222e]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a79d8d]">
                  Table of Contents Preview (3 Core Modules)
                </span>
                <span className="text-xs text-[#dfc18b]">Click any chapter to view breakdown</span>
              </div>

              <div className="space-y-2">
                {CHAPTERS.slice(0, 3).map((chap) => {
                  const isOpen = activeChapter === chap.number;
                  return (
                    <div 
                      key={chap.number} 
                      className="border border-[#26222f] rounded bg-[#131118] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveChapter(isOpen ? null : chap.number)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#1b1822] cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-sm font-semibold text-[#dfc18b]">
                            0{chap.number}
                          </span>
                          <span className="text-sm font-medium text-[#e8e3d8]">
                            {chap.title}
                          </span>
                          <span className="hidden sm:inline text-xs text-[#8c8273]">
                            — {chap.subtitle}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#dfc18b]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8c8273]" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 bg-[#100e14] border-t border-[#1f1b26] space-y-2 text-xs sm:text-sm text-[#bab1a3] animate-in fade-in duration-200">
                          <p className="italic text-[#dfc18b]/90 font-serif">
                            &ldquo;{chap.keyTakeaway}&rdquo;
                          </p>
                          <p className="leading-relaxed">
                            {chap.excerpt.slice(0, 240)}...
                          </p>
                          <div className="pt-1">
                            <button
                              onClick={onOpenPreview}
                              className="text-xs text-[#eed6aa] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                            >
                              Read full sample of this chapter →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#dfc18b] hover:bg-[#eed6aa] text-[#141217] font-semibold text-xs tracking-widest uppercase rounded-xs transition-all shadow-lg hover:shadow-[#dfc18b]/20 cursor-pointer"
              >
                <span>GET INSTANT ACCESS — $19</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPreview}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1722] hover:bg-[#25212f] text-[#dfc18b] border border-[#3b3446] font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Free Excerpt</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
