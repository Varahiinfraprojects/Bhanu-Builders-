import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* BB Monogram Icon with Building Roof, Architectural Beams & Modern Geometry */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            <linearGradient id="bbGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="30%" stopColor="#E5C158" />
              <stop offset="70%" stopColor="#C69426" />
              <stop offset="100%" stopColor="#8C6110" />
            </linearGradient>
            <linearGradient id="bbNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
            <linearGradient id="bbRoofGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C69426" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Dark Navy Background Shield with subtle Gold Rim */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="18"
            fill="url(#bbNavyGrad)"
            stroke="url(#bbGoldGrad)"
            strokeWidth="2.5"
          />

          {/* Architectural Blueprint Grid Lines in background */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="rgba(212,175,55,0.15)" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="rgba(212,175,55,0.15)" strokeWidth="1" strokeDasharray="2 3" />

          {/* Cantilevered Modern Architectural Roof Pitch */}
          <path
            d="M16 34 L50 14 L84 34 L78 37 L50 21 L22 37 Z"
            fill="url(#bbRoofGrad)"
          />

          {/* Central Structural Ridge Accent */}
          <circle cx="50" cy="14" r="3" fill="#FFF2D6" />

          {/* Monogram Interlocking BB Geometry */}
          {/* Backbone Left Structural Column */}
          <path
            d="M26 38 H34 V82 H26 Z"
            fill="url(#bbGoldGrad)"
          />

          {/* First 'B' Upper & Lower Arcs (Modern Architectural Cantilever Loops) */}
          <path
            d="M34 38 H47 C54 38 58 41 58 47 C58 52 54 55 47 55 H34 V49 H46 C49 49 51 48 51 47 C51 45 49 44 46 44 H34 V38 Z"
            fill="url(#bbGoldGrad)"
          />
          <path
            d="M34 55 H48 C56 55 60 59 60 66 C60 73 55 76 47 76 H34 V70 H47 C51 70 53 69 53 66 C53 62 50 61 46 61 H34 V55 Z"
            fill="url(#bbGoldGrad)"
          />

          {/* Second Interlocking 'B' Step Offset Layer (Representing Tomorrow / Expansion) */}
          <path
            d="M52 42 H64 C70 42 74 45 74 50 C74 54 71 56 65 57 C72 58 76 62 76 68 C76 75 70 78 62 78 H52 V72 H62 C67 72 69 70 69 68 C69 65 66 63 61 63 H52 V58 H63 C67 58 68 56 68 53 C68 51 66 48 61 48 H52 V42 Z"
            fill="url(#bbGoldGrad)"
            opacity="0.9"
          />

          {/* Foundation Level Bar */}
          <rect x="22" y="81" width="56" height="3" rx="1.5" fill="url(#bbRoofGrad)" />
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-black tracking-wider text-white ${textSizes[size]}`}>
            BHANU <span className="text-gold-gradient">BUILDERS</span>
          </span>
          <span className={`font-sans tracking-[0.22em] uppercase font-semibold text-amber-400/90 mt-1 ${subSizes[size]}`}>
            Building Trust · Building Tomorrow
          </span>
        </div>
      )}
    </div>
  );
};
