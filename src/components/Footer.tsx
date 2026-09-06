import React from 'react';
import { BookOpen, ShieldCheck, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onOpenPreview }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070608] text-[#938a7c] border-t border-[#1f1b26] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1f1b26]">
          
          {/* Brand & Author Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              onClick={scrollToTop}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif tracking-[0.25em] text-2xl sm:text-3xl font-semibold text-[#f4efe6] group-hover:text-[#dfc18b] transition-colors uppercase block">
                DANIEL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#a59a88] uppercase font-sans font-semibold mt-0.5 block">
                HUMAN NATURE. REAL INSIGHTS.
              </span>
            </button>

            <p className="text-xs sm:text-sm text-[#8c8273] leading-relaxed max-w-sm">
              An independent exploration of the unvoiced emotional patterns, subconscious dynamics, and interpersonal realities that shape our lives.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-[#a69b8b]">
              <span className="w-2 h-2 rounded-full bg-[#dfc18b]" />
              <span>Worldwide Digital Distribution</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#dfc18b]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('about-daniel');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#dfc18b] transition-colors cursor-pointer"
                >
                  About The Author
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('inside-the-book');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#dfc18b] transition-colors cursor-pointer"
                >
                  Inside The Book
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('reviews');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#dfc18b] transition-colors cursor-pointer"
                >
                  Reader Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPreview}
                  className="hover:text-[#dfc18b] transition-colors cursor-pointer text-[#dfc18b]"
                >
                  Read Free Excerpt (Ch. 1)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCheckout}
                  className="hover:text-[#dfc18b] transition-colors cursor-pointer font-semibold"
                >
                  Get The Book ($19)
                </button>
              </li>
            </ul>
          </div>

          {/* Guarantee & Editions */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#dfc18b]">
              Formats Included
            </h4>
            <p className="text-xs text-[#8c8273] leading-relaxed">
              Every copy includes DRM-free files optimized for Kindle, Apple Books, Kobo, Android, and printable PDF.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded bg-[#17151e] border border-[#2c2636] text-[10px] font-mono text-[#c5bdaf]">
                .EPUB
              </span>
              <span className="px-2.5 py-1 rounded bg-[#17151e] border border-[#2c2636] text-[10px] font-mono text-[#c5bdaf]">
                .PDF
              </span>
              <span className="px-2.5 py-1 rounded bg-[#17151e] border border-[#2c2636] text-[10px] font-mono text-[#c5bdaf]">
                .MOBI
              </span>
              <span className="px-2.5 py-1 rounded bg-[#17151e] border border-[#2c2636] text-[10px] font-mono text-[#dfc18b]">
                30-Day Program
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#786e60] block">
                Direct inquiries or media questions: <a href="mailto:ec1665851@gmail.com" className="text-[#a49887] hover:underline">ec1665851@gmail.com</a>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#70675a]">
          <div>
            &copy; {new Date().getFullYear()} Daniel. All rights reserved. Real Insights publication.
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: We never sell or share your email address. All payments are encrypted via 256-bit SSL."); }} className="hover:text-[#a09483]">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Digital licenses grant personal, lifetime reading access on unlimited personal devices."); }} className="hover:text-[#a09483]">Terms of Service</a>
            <a href="#refunds" onClick={(e) => { e.preventDefault(); alert("Refund Policy: 30-day unconditional refund policy. Email us anytime for an immediate hassle-free refund."); }} className="hover:text-[#a09483]">30-Day Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
