import React from 'react';
import { Brain, Heart, Eye, Sparkles } from 'lucide-react';
import { CORE_PILLARS } from '../data/bookData';

export const PillarsBar: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'brain':
        return <Brain className="w-7 h-7 text-[#dfc18b] stroke-[1.4]" />;
      case 'heart':
        return <Heart className="w-7 h-7 text-[#dfc18b] stroke-[1.4]" />;
      case 'eye':
        return <Eye className="w-7 h-7 text-[#dfc18b] stroke-[1.4]" />;
      case 'leaf':
        return (
          <svg className="w-7 h-7 text-[#dfc18b] stroke-[1.4]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3 4.5 3 13.5 0 18" />
          </svg>
        );
      default:
        return <Sparkles className="w-7 h-7 text-[#dfc18b]" />;
    }
  };

  return (
    <section id="pillars" className="relative z-20 border-y border-[#27232e] bg-[#121016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#27232e]">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center text-center px-4 lg:px-6 space-y-3 group transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* Icon with subtle gold ring */}
              <div className="w-14 h-14 rounded-full bg-[#1b1822] border border-[#342e3f] flex items-center justify-center group-hover:border-[#dfc18b]/60 group-hover:bg-[#201d2a] transition-colors shadow-inner">
                {getIcon(pillar.icon)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4efe6] tracking-wide group-hover:text-[#eed6aa] transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#9c9384] max-w-xs font-normal leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
