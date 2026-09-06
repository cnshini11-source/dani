import React, { useState } from 'react';
import { X, BookOpen, ChevronRight, Sparkles, Bookmark, ArrowLeft } from 'lucide-react';
import { CHAPTERS, BOOK_DETAILS } from '../data/bookData';

interface SampleReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const SampleReaderModal: React.FC<SampleReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout
}) => {
  // Show only 2 chapters/topics in the preview sample as requested
  const sampleChapters = CHAPTERS.slice(0, 2);
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  if (!isOpen) return null;

  const currentChap = sampleChapters[selectedChapterIdx] || sampleChapters[0];

  const themeClasses = {
    dark: 'bg-[#121016] text-[#e0dad0] border-[#2c2736]',
    sepia: 'bg-[#f4ebd9] text-[#2c2419] border-[#dfd2be]',
    light: 'bg-[#ffffff] text-[#1f1b24] border-[#e2dde7]'
  };

  const textClasses = {
    dark: 'text-[#d6cec0]',
    sepia: 'text-[#443828]',
    light: 'text-[#332e3a]'
  };

  const fontSizes = {
    sm: 'text-sm sm:text-base leading-relaxed',
    md: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Container: More compact, mobile-friendly size */}
      <div 
        className={`relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-xl shadow-2xl border ${themeClasses[theme]} overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-inherit flex items-center justify-between flex-shrink-0 bg-black/10">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfc18b] flex-shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a89d8d] font-bold block">
                Free Sample • Part {currentChap.number} of 2
              </span>
              <h3 className="font-serif text-sm sm:text-base font-medium truncate">
                {currentChap.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Prominent Exit / Close Button (English) */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dfc18b]/15 hover:bg-[#dfc18b]/30 border border-[#dfc18b]/40 text-[#dfc18b] hover:text-[#eed6aa] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Exit Reader"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Exit</span>
              <X className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>

        {/* 2 Selected Chapters Tabs: Clean, compact and clearly showing only 2 items */}
        <div className="px-3 sm:px-6 py-2 bg-black/15 border-b border-inherit flex items-center justify-center gap-2 text-xs flex-shrink-0">
          {sampleChapters.map((c, i) => (
            <button
              key={c.number}
              onClick={() => setSelectedChapterIdx(i)}
              className={`flex-1 max-w-[200px] py-1.5 px-3 rounded-md text-center transition-all cursor-pointer truncate ${
                selectedChapterIdx === i
                  ? 'bg-[#dfc18b] text-[#141217] font-semibold shadow-md'
                  : 'bg-black/20 hover:bg-black/30 text-inherit opacity-75'
              }`}
            >
              Part {c.number}: {c.title}
            </button>
          ))}
        </div>

        {/* Reader Body Content */}
        <div className="px-4 sm:px-8 py-5 sm:py-6 overflow-y-auto flex-1 space-y-5">
          <div className="text-center max-w-lg mx-auto pb-3 border-b border-inherit">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a76d] font-bold block mb-1">
              Part {currentChap.number} Excerpt
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              {currentChap.title}
            </h2>
            <p className="font-serif italic text-sm sm:text-base mt-1 opacity-80">
              {currentChap.subtitle}
            </p>
          </div>

          {/* Key Principle Callout */}
          <div className="p-3.5 sm:p-4 rounded-lg border border-[#c9a76d]/30 bg-[#c9a76d]/10">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#dfc18b] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#dfc18b] block">
                  Core Insight
                </span>
                <p className="font-serif italic text-sm sm:text-base mt-0.5 font-medium">
                  &ldquo;{currentChap.keyTakeaway}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className={`space-y-4 ${textClasses[theme]} ${fontSizes[fontSize]}`}>
            {currentChap.excerpt.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="indent-3 sm:indent-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <p className="indent-3 sm:indent-6 leading-relaxed">
              When you learn to observe without the compulsion to immediately defend or react, the entire interpersonal landscape reorganizes itself. Behavior ceases to be an attack on your character and becomes a map of the other person's internal pressure points.
            </p>
          </div>

          {/* Excerpt lock notice */}
          <div className="mt-6 p-4 sm:p-5 rounded-lg bg-black/25 border border-inherit text-center space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#dfc18b]/20 text-[#dfc18b] flex items-center justify-center mx-auto">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium">
                End of Free Preview
              </h4>
              <p className="text-xs opacity-75 max-w-sm mx-auto mt-0.5">
                Get full instant access to all chapters, guides, and digital formats.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#dfc18b] hover:bg-[#eed6aa] text-[#141217] font-semibold text-xs tracking-widest uppercase rounded shadow cursor-pointer active:scale-95 transition-all"
              >
                <span>Unlock Full Book • $19</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs opacity-80 hover:opacity-100 uppercase tracking-wider font-medium cursor-pointer"
              >
                Back to Overview
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Exit Bar with explicit exit button (English) */}
        <div className="px-4 sm:px-6 py-2.5 border-t border-inherit flex items-center justify-between flex-shrink-0 bg-black/10 text-xs">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1 text-[#dfc18b] hover:text-[#eed6aa] font-medium transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Close Preview</span>
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="text-[#eed6aa] hover:underline font-semibold uppercase tracking-wider cursor-pointer"
          >
            Get Full book
          </button>
        </div>

      </div>
    </div>
  );
};
