import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenPreview: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPreview }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about-daniel" className="relative py-20 lg:py-28 bg-[#ece5d8] text-[#1a181d] overflow-hidden">
      {/* Subtle organic linen texture background accents */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#15131a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text & Philosophy Narrative */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#827563] uppercase">
                ABOUT DANIEL
              </span>
              <div className="w-12 h-[1px] bg-[#827563]/40" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-[#18161c] tracking-tight">
              A LIFETIME OF <br />
              OBSERVING PEOPLE.
            </h2>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#3d3840] leading-relaxed font-normal">
              <p>
                For as long as I can remember, I've been fascinated by what drives human behavior — the thoughts people have, the things they hide, and the patterns that repeat in different relationships and situations.
              </p>
              <p>
                Through my own experiences, conversations, and years of observing people from all walks of life, I began to see that there is often much more beneath the surface.
              </p>
              <p>
                This book is a collection of the insights, patterns, and perspectives I've gathered — written in a clear, practical way to help you understand yourself and others more deeply, and navigate life with greater awareness.
              </p>

              {showFullStory && (
                <div className="pt-2 space-y-4 text-sm sm:text-base border-t border-[#d8cfbe] animate-in fade-in duration-300">
                  <p>
                    Most pain in our lives does not stem from malevolence, but from misinterpretation. We assume intentional silence means indifference, or that hesitation means deception.
                  </p>
                  <p>
                    When you develop the calm discipline to look past the surface drama and read the emotional currents underneath, you liberate yourself from unnecessary anxiety and step into a grounded self-possession.
                  </p>
                </div>
              )}
            </div>

            {/* Action buttons and Story toggle */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="text-xs uppercase tracking-wider font-semibold text-[#665a49] hover:text-[#18161c] border-b border-[#665a49]/40 pb-0.5 cursor-pointer transition-colors"
              >
                {showFullStory ? '— Show Less' : '+ Read Extended Author Philosophy'}
              </button>

              <button
                onClick={onOpenPreview}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 bg-[#18161c] text-[#f4efe6] hover:bg-[#342f3a] transition-colors rounded-xs cursor-pointer shadow"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#dfc18b]" />
                <span>Read Chapter 1 Excerpt</span>
              </button>
            </div>

            {/* Author Signature & Seal */}
            <div className="pt-6 border-t border-[#d8cebe] flex items-center justify-between">
              <div>
                <span className="font-serif tracking-[0.25em] text-2xl font-semibold text-[#18161c] block uppercase">
                  DANIEL
                </span>
                <span className="text-[10px] tracking-[0.2em] font-sans font-semibold text-[#7d715e] uppercase block mt-0.5">
                  HUMAN NATURE. REAL INSIGHTS.
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#6e6353]">
                <Award className="w-4 h-4 text-[#9c7d4e]" />
                <span className="italic font-serif">Independent Author Edition</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High-End Editorial Portrait & Pull Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative vintage frame accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#c5b79e]/40 to-transparent rounded-lg transform -rotate-1 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#1a181f] border border-[#d2c7b5]">
                <div className="relative h-[420px] sm:h-[500px] w-full">
                  <img
                    src="https://i.imgur.com/Ot99qhw.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/daniel-portrait.jpg";
                    }}
                    alt="Daniel in thoughtful contemplation"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay at bottom for the quote */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d12] via-[#0e0d12]/50 to-transparent" />
                </div>

                {/* Editorial Pull Quote Box overlaid at the bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-left">
                  <blockquote className="font-serif text-xl sm:text-2xl italic text-[#f7f3eb] leading-snug">
                    &ldquo;The more you understand people, the less you take things personally.&rdquo;
                  </blockquote>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-[1px] bg-[#dfc18b]" />
                    <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#eed6aa] uppercase">
                      DANIEL
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
