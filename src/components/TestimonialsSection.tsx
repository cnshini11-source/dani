import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { REVIEWS } from '../data/bookData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#ece5d8] text-[#1a181e] overflow-hidden">
      {/* Background subtle grain effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#15131a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="w-8 h-[1px] bg-[#837664]" />
            <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#837664] uppercase">
              WHAT READERS ARE SAYING
            </span>
            <div className="w-8 h-[1px] bg-[#837664]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18161c] tracking-tight uppercase">
            REAL PEOPLE. REAL PERSPECTIVES.
          </h2>

          <p className="text-sm sm:text-base text-[#524b57]">
            Over 1,480 readers have transformed their relationship clarity and interpersonal awareness.
          </p>
        </div>

        {/* Testimonials Grid (Cards matching the reference layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-[#fcfaf5] rounded-lg p-6 sm:p-7 border border-[#ded5c5] shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Author Name and Rating Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-[#1a181f] text-base">
                      {review.name}
                    </h3>
                    {review.role && (
                      <p className="text-xs text-[#766c5d] mt-0.5">
                        {review.role}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[#b58b45]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5e8251]" />
                    <span className="text-[11px] font-medium text-[#5e8251]">Verified</span>
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d29b38] text-[#d29b38]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-[15px] text-[#343038] leading-relaxed italic font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {review.location && (
                <div className="pt-4 mt-4 border-t border-[#eee6d9] text-[11px] text-[#8c8273] flex items-center justify-between">
                  <span>{review.location}</span>
                  <span className="text-[#a49a8b]">Verified Purchase</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Rating & Guarantee Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-lg bg-[#e2dacb] border border-[#d2c7b5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18161c] text-[#dfc18b] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-[#18161c]">
                30-Day Complete Satisfaction Guarantee
              </p>
              <p className="text-xs text-[#5f5647]">
                If the book doesn't bring immediate clarity to your relationships, email us for a full 100% refund.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#b58b45] flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#d29b38] text-[#d29b38]" />
            ))}
            <span className="font-bold text-sm text-[#18161c] ml-1">4.9/5</span>
          </div>
        </div>

      </div>
    </section>
  );
};
