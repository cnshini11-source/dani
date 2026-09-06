import React from 'react';
import { ArrowRight, Zap, Smartphone, Lock, BookOpen, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onOpenPreview }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 overflow-hidden flex flex-col justify-center bg-[#09080c]">
      
      {/* 
        HERO FULL CINEMATIC BACKGROUND:
        - Mobile: Custom portrait (https://i.imgur.com/BTwWPuH.jpeg)
        - Desktop: Daniel standing on European terrace at sunset (https://i.imgur.com/Q47VRe4.jpeg)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mobile Background Image */}
        <img
          src="https://i.imgur.com/BTwWPuH.jpeg"
          onError={(e) => {
            e.currentTarget.src = "/images/daniel-hero-mobile.jpg";
          }}
          alt="Daniel - Author of The Things People Feel"
          className="block lg:hidden w-full h-full object-cover object-[50%_15%] opacity-70 sm:opacity-80 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Desktop Background Image */}
        <img
          src="https://i.imgur.com/Q47VRe4.jpeg"
          onError={(e) => {
            e.currentTarget.src = "/images/daniel-hero.jpg";
          }}
          alt="Daniel - Author of The Things People Feel"
          className="hidden lg:block w-full h-full object-cover object-[84%_18%] opacity-90 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Desktop Smooth Gradient: Solid black on left for maximum text contrast, seamlessly unveiling Daniel on the right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#09080c] via-[#09080c]/95 via-42% via-[#09080c]/40 to-transparent" />
        
        {/* Mobile Smooth Gradient: Soft darkening so text is 100% crisp while keeping Daniel visible in background */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-[#09080c]/60 via-[#09080c]/80 via-40% to-[#09080c]" />
        
        {/* Top Vignette (blends seamlessly with top navigation) */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-40 bg-gradient-to-b from-[#09080c] via-[#09080c]/80 to-transparent" />

        {/* Bottom Vignette (blends seamlessly into Pillars section) */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#09080c] via-[#09080c]/90 to-transparent" />

        {/* Warm golden ambient glow behind the book and center area */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#dfc18b]/8 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* 
            LEFT COLUMN:
            On Mobile: Appears immediately FIRST at the top!
            - Badge
            - Title: "THE THINGS PEOPLE FEEL... BUT NEVER SAY."
            - Subhead: "A deeper look into the human behavior, emotional patterns and relationship dynamics we all experience — but rarely talk about."
            - On mobile: the Book Mockup is inserted right after this subhead, rendered in a compact, elegant size!
            - CTA button, Price, Trust Badges, and Quote follow naturally!
          */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 text-left order-1">
            
            {/* Main Headline: Appears right at the top on mobile and desktop */}
            <div className="space-y-0.5">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-medium leading-[1.08] text-[#fbf8f2] tracking-tight drop-shadow-md">
                THE THINGS <br />
                PEOPLE FEEL... <br />
                <span className="text-[#eed6aa] italic font-normal">BUT NEVER SAY.</span>
              </h1>
            </div>

            {/* Subtitle Paragraph: Directly under the headline */}
            <p className="text-base sm:text-lg text-[#d1c9bd] font-normal leading-relaxed max-w-xl drop-shadow-sm">
              A deeper look into the human behavior, emotional patterns and relationship dynamics we all experience — but rarely talk about.
            </p>

            {/* 
              MOBILE-ONLY BOOK DISPLAY:
              Appears immediately after the subhead text on mobile devices with slightly increased size.
            */}
            <div className="block lg:hidden my-2.5 sm:my-3.5">
              <div className="flex flex-col items-center">
                <div 
                  className="relative w-40 sm:w-48 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 z-10"
                  onClick={onOpenPreview}
                >
                  {/* Subtle golden backlight aura */}
                  <div className="absolute -inset-3.5 bg-gradient-to-tr from-[#dfc18b]/30 via-[#c59a52]/15 to-transparent rounded-full blur-xl pointer-events-none" />

                  {/* 3D Book card with https://i.imgur.com/6TLICsT.jpeg */}
                  <div className="relative rounded-sm overflow-hidden shadow-[0_18px_38px_-8px_rgba(0,0,0,0.9),0_0_22px_rgba(223,193,139,0.22)] border border-[#524430]/70 group">
                    <img
                      src="https://i.imgur.com/6TLICsT.jpeg"
                      onError={(e) => {
                        e.currentTarget.src = "/images/book-cover.jpg";
                      }}
                      alt="The Things People Feel... But Never Say book cover"
                      className="w-full h-auto object-cover block"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Spine highlight reflection */}
                    <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 left-2.5 w-[1px] bg-black/40 pointer-events-none" />

                    {/* Interactive Look Inside badge on tap/hover */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 active:opacity-100 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="bg-[#dfc18b] text-[#0c0b0e] text-[10px] sm:text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-xs shadow-xl flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>Look Inside</span>
                      </span>
                    </div>
                  </div>

                  {/* Ground shadow */}
                  <div className="w-5/6 h-3.5 mx-auto bg-black/80 blur-sm rounded-full mt-2" />
                </div>

                {/* Excerpt preview link for mobile */}
                <button
                  onClick={onOpenPreview}
                  className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#141219]/85 backdrop-blur-md border border-[#2d2737] rounded-full text-[11px] text-[#dfc18b] hover:text-[#eed6aa] transition-colors cursor-pointer shadow-md"
                >
                  <BookOpen className="w-3 h-3" />
                  <span className="font-medium tracking-wider uppercase">Preview Excerpt</span>
                </button>
              </div>
            </div>

            {/* CTA & Price Component */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                id="hero-get-book-btn"
                onClick={onOpenCheckout}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#dfc18b] hover:bg-[#ebd4aa] text-[#121014] font-semibold text-sm tracking-[0.15em] uppercase rounded-xs transition-all shadow-xl hover:shadow-[#dfc18b]/30 cursor-pointer active:scale-[0.99]"
              >
                <span>GET THE BOOK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Price Tag with launch discount note */}
              <div className="flex items-center gap-3 border-l-0 sm:border-l sm:border-[#383342] sm:pl-6 justify-center sm:justify-start">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#eed6aa]">
                  $19
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-[#968c7e] line-through font-medium">$38 Regular</span>
                  <span className="text-[11px] tracking-wider uppercase text-[#dfc18b] font-semibold">Digital Edition</span>
                </div>
              </div>
            </div>

            {/* Trust Badges: Instant Access, Read on Any Device, Secure Checkout */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 sm:gap-x-6 pt-1 text-xs tracking-wide text-[#b8ad9d]">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#dfc18b]" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#dfc18b]" />
                <span>Read on Any Device</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#dfc18b]" />
                <span>Secure Checkout</span>
              </div>
            </div>

            {/* Featured Pull Quote & Daniel Signature */}
            <div className="pt-4 border-t border-[#292433] max-w-xl">
              <blockquote className="text-[#e2dbcd] font-serif text-lg sm:text-xl italic leading-relaxed drop-shadow-sm">
                &ldquo;People are not always as simple as they seem. Sometimes, the behavior tells you more than the words.&rdquo;
              </blockquote>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="w-6 h-[1px] bg-[#dfc18b]" />
                <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#eed6aa] uppercase">
                  DANIEL
                </span>
              </div>
            </div>

          </div>

          {/* 
            DESKTOP-ONLY RIGHT COLUMN:
            Displays the prominent 3D Book standing in front of Daniel on the terrace on large screens (lg+).
            Hidden on mobile since mobile displays it compact immediately after the subhead text!
          */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center justify-center my-0 order-2">
            
            <div className="relative group flex flex-col items-center">
              
              {/* Soft warm golden backlight under the book */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#dfc18b]/25 via-[#c59a52]/10 to-transparent rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* 3D Realistic Hardcover Book in perspective */}
              <div 
                className="relative w-68 sm:w-72 lg:w-[292px] cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-500 ease-out z-10 select-none"
                onClick={onOpenPreview}
              >
                {/* 3D Hardcover perspective wrapper */}
                <div className="relative rounded-sm overflow-hidden shadow-[0_24px_48px_-10px_rgba(0,0,0,0.9),0_0_26px_rgba(223,193,139,0.2)] border border-[#524430]/60">
                  <img
                    src="https://i.imgur.com/6TLICsT.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/book-cover.jpg";
                    }}
                    alt="The Things People Feel... But Never Say book cover"
                    className="w-full h-auto object-cover block"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Spine Highlight and realistic book crease */}
                  <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-3.5 w-[1px] bg-black/40 pointer-events-none" />
                  
                  {/* Interactive Look Inside hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-[#dfc18b] text-[#0c0b0e] text-xs uppercase font-bold tracking-widest px-4 py-2 rounded-xs shadow-xl">
                      Look Inside
                    </span>
                  </div>
                </div>

                {/* Ground book shadow on the surface */}
                <div className="w-5/6 h-4 mx-auto bg-black/85 blur-md rounded-full mt-2.5" />
              </div>

              {/* Discreet Excerpt Preview Button directly under book */}
              <div className="mt-3 z-10">
                <button
                  onClick={onOpenPreview}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#141219]/80 hover:bg-[#1c1924] backdrop-blur-md border border-[#2d2737] rounded-full text-xs text-[#dfc18b] hover:text-[#eed6aa] transition-colors cursor-pointer shadow-lg"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="font-medium tracking-wide">Preview Excerpt</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
