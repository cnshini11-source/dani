import React from 'react';

interface FinalCtaSectionProps {
  onOpenCheckout?: () => void;
  onOpenPreview?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0c0b0e] text-[#e8e4dc] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#382613]/25 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#dfc18b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Concluding Author Quote */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#f4efe6] leading-relaxed">
            &ldquo;A calmer mind. Healthier relationships. A more meaningful life.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-6 h-[1px] bg-[#dfc18b]/60" />
            <span className="text-xs tracking-[0.3em] font-sans font-semibold text-[#dfc18b] uppercase">
              DANIEL
            </span>
            <div className="w-6 h-[1px] bg-[#dfc18b]/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
