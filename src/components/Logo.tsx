import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  iconOnly?: boolean;
}

export default function Logo({ className = '', showText = true, light = false, iconOnly = false }: LogoProps) {
  // Brand colors sourced exactly from the uploaded reference logo
  const brandDarkBlue = '#0C2340'; // Deep premium navy
  const brandGold = '#E2A925';     // Sharp academic warm gold

  const logoMark = (
    <svg
      id="hemant-logomark"
      viewBox="0 0 100 110"
      className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-13 lg:w-13 flex-shrink-0 drop-shadow-sm transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Shield Backing with beautifully rounded top and sleek pointed bottom corners */}
      <path
        d="M 16,10 L 84,10 C 88,10 90,12 90,16 L 90,62 C 90,81 72,96 50,102 C 28,96 10,81 10,62 L 10,16 C 10,12 12,10 16,10 Z"
        fill={brandDarkBlue}
        stroke={brandGold}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Inner Shield Accent Inlay */}
      <path
        d="M 20,16 L 80,16 C 82,16 84,18 84,20 L 84,60 C 84,75 70,88 50,94 C 30,88 16,75 16,60 L 16,20 C 16,18 18,16 20,16 Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.9"
      />
      
      {/* Handcrafted open book pages matching the elegant logo vector style */}
      <path
        d="M 50,71 C 38,67 25.5,70 20.5,72 V 37.5 C 25.5,35 38,32 50,37 Z"
        fill={brandDarkBlue}
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50,71 C 62,67 74.5,70 79.5,72 V 37.5 C 74.5,35 62,32 50,37 Z"
        fill={brandDarkBlue}
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Styled curved line below the book pages inside the shield */}
      <path 
        d="M 24,78.5 C 36,74.5 44,74.5 50,76.5 C 56,74.5 64,74.5 76,78.5" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      
      {/* Central Serif letter 'H' with custom serif style inside the book area */}
      <text
        x="50"
        y="53.5"
        fill={brandGold}
        fontSize="24"
        fontWeight="bold"
        fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        H
      </text>
    </svg>
  );

  if (iconOnly) {
    return logoMark;
  }

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 lg:gap-3 font-sans ${className}`} id="hemant-logo-container">
      {logoMark}

      {showText && (
        <div className="flex flex-col text-left select-none">
          <span 
            className={`font-sans font-black leading-none tracking-[0.05em] text-[15px] sm:text-lg md:text-xl lg:text-2xl uppercase transition-colors duration-300 ${
              light ? 'text-white' : 'text-slate-900 group-hover:text-brand-blue'
            }`}
          >
            HEMANT
          </span>
          <span 
            className="text-[8.5px] sm:text-[10px] md:text-[11px] lg:text-[12.5px] font-sans font-extrabold tracking-[0.14em] sm:tracking-[0.18em] uppercase whitespace-nowrap mt-1.5 leading-none text-brand-gold"
          >
            COACHING CLASSES —
          </span>
        </div>
      )}
    </div>
  );
}
