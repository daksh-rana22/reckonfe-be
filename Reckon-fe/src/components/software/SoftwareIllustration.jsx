import React from 'react';

export default function SoftwareIllustration({ slug }) {
  switch (slug) {
    case 'automobiles-parts':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="120" r="80" fill="white" fillOpacity="0.1" />
          <circle cx="150" cy="160" r="50" fill="white" fillOpacity="0.05" />
          <g transform="translate(260, 50) scale(0.7)" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.4">
            <circle cx="20" cy="20" r="15" strokeDasharray="6 3" />
            <circle cx="20" cy="20" r="8" />
          </g>
          {/* Static Shadow */}
          <ellipse cx="175" cy="202" rx="75" ry="10" fill="black" fillOpacity="0.25" />
          <rect x="62" y="205" width="28" height="5" fill="#4B5563" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <rect x="70" y="180" width="12" height="30" fill="#EF4444" />
            <g transform="translate(85, 90)">
              <path d="M15 80C15 65 30 55 60 55H120C150 55 165 65 165 80V98C165 104 160 108 152 108H28C20 108 15 104 15 98V80Z" fill="#EF4444" />
              <path d="M30 55C35 32 55 24 90 24C125 24 145 32 150 55H30Z" fill="#F87171" />
              <path d="M42 50C45 35 60 30 90 30C120 30 135 35 138 50H42Z" fill="#FECACA" />
              <ellipse cx="32" cy="78" rx="10" ry="5" fill="white" />
              <ellipse cx="148" cy="78" rx="10" ry="5" fill="white" />
              <rect x="55" y="76" width="70" height="8" rx="4" fill="#7F1D1D" />
              <rect x="22" y="98" width="18" height="12" rx="3" fill="#1F2937" />
              <rect x="140" y="98" width="18" height="12" rx="3" fill="#1F2937" />
            </g>
          </g>
        </svg>
      );

    case 'books-stationery':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="120" r="90" fill="white" fillOpacity="0.1" />
          {/* Static Shadows */}
          <ellipse cx="270" cy="205" rx="95" ry="12" fill="black" fillOpacity="0.15" />
          <ellipse cx="100" cy="205" rx="30" ry="6" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(180, 45)">
              <rect x="15" y="130" width="150" height="24" rx="3" fill="#8B5CF6" />
              <rect x="15" y="133" width="146" height="18" fill="#A78BFA" />
              <path d="M165 133H158V151H165V133Z" fill="#E5E7EB" />
              <path d="M120 133H112V158H120V133Z" fill="#EF4444" />
              <rect x="10" y="102" width="155" height="26" rx="3" fill="#6D28D9" />
              <rect x="10" y="105" width="151" height="20" fill="#7C3AED" />
              <path d="M165 105H161V125H165V105Z" fill="#E5E7EB" />
              <rect x="20" y="78" width="135" height="22" rx="3" fill="#4C1D95" />
              <rect x="20" y="80" width="132" height="18" fill="#5B21B6" />
              <path d="M152 80H148V98H152V80Z" fill="#E5E7EB" />
            </g>
            <g transform="translate(60, 80)">
              <rect x="42" y="10" width="12" height="100" rx="2" fill="#C084FC" transform="rotate(12, 42, 10)" />
              <rect x="24" y="25" width="8" height="85" rx="2" fill="#8B5CF6" transform="rotate(-15, 24, 25)" />
              <path d="M12 60H68L60 125H20L12 60Z" fill="#DDD6FE" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="2.5" />
            </g>
          </g>
        </svg>
      );

    case 'chemist-shop':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="120" r="85" fill="white" fillOpacity="0.1" />
          {/* Static Shadows */}
          <rect x="185" y="50" width="105" height="150" rx="8" fill="black" fillOpacity="0.15" />
          <ellipse cx="105" cy="200" rx="15" ry="4" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(180, 40)">
              <rect x="0" y="5" width="105" height="150" rx="8" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2" />
              <rect x="32" y="0" width="40" height="14" rx="4" fill="#22C55E" />
              <rect x="12" y="25" width="18" height="18" rx="4" fill="#22C55E" fillOpacity="0.2" />
              <path d="M21 28V40M17 34H25" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="38" y="28" width="55" height="5" rx="2.5" fill="#E5E7EB" />
              <rect x="38" y="38" width="40" height="5" rx="2.5" fill="#E5E7EB" />
              <path d="M15 135L35 135L42 120L48 145L55 130L60 135H90" stroke="#EF4444" strokeWidth="2" />
            </g>
            <g transform="translate(80, 80)">
              <path d="M10 65C10 52 40 52 40 65V120H10V65Z" fill="#22C55E" />
              <circle cx="25" cy="28" r="11" fill="#FDBA74" />
              <path d="M14 26C14 26 18 16 25 16C32 16 36 26 36 26H14Z" fill="#15803D" />
            </g>
          </g>
        </svg>
      );

    case 'reckon-mart':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="210" rx="110" ry="8" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(80, 60)">
              <rect x="10" y="30" width="220" height="120" rx="6" fill="#FCA5A5" />
              <rect x="10" y="30" width="220" height="25" fill="#EF4444" />
              <rect x="30" y="70" width="60" height="80" rx="3" fill="#FFFFFF" />
              <rect x="130" y="70" width="80" height="80" rx="3" fill="#1F2937" />
              <path d="M10 55L30 30H50L30 55H10ZM70 55L90 30H110L90 55H70Z" fill="#B91C1C" />
            </g>
          </g>
        </svg>
      );

    case 'reckon-suvidha':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="215" rx="60" ry="7" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <path d="M140 50C170 40 230 40 260 50C260 110 240 170 200 200C160 170 140 110 140 50Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="4" />
            <path d="M200 80V160M160 120H240" stroke="white" strokeWidth="15" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'reckon-seller':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="210" rx="65" ry="8" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(130, 60)">
              <path d="M70 10L130 40L70 70L10 40L70 10Z" fill="#F59E0B" />
              <path d="M10 40L70 70V140L10 110V40Z" fill="#D97706" />
              <path d="M130 40L70 70V140L130 110V40Z" fill="#B45309" />
              <path d="M70 40L100 25M40 25L70 40L70 110" stroke="#92400E" strokeWidth="6" />
            </g>
          </g>
        </svg>
      );

    case 'reckon-bizview':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <rect x="115" y="65" width="180" height="120" rx="8" fill="black" fillOpacity="0.1" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(110, 60)">
              <rect x="0" y="0" width="180" height="120" rx="8" fill="#E0F7FA" stroke="#00ACC1" strokeWidth="3" />
              <rect x="15" y="20" width="40" height="80" rx="3" fill="#00ACC1" />
              <rect x="70" y="45" width="40" height="55" rx="3" fill="#00E676" />
              <rect x="125" y="10" width="40" height="90" rx="3" fill="#FFB300" />
              <path d="M10 100H170" stroke="#006064" strokeWidth="2" />
            </g>
          </g>
        </svg>
      );

    case 'cosmetics-personal-care':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="200" rx="45" ry="5" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(140, 50)">
              <circle cx="60" cy="50" r="45" fill="#FCE7F3" stroke="#EC4899" strokeWidth="4" />
              <path d="M60 95V140H30H90" stroke="#EC4899" strokeWidth="5" strokeLinecap="round" />
              <rect x="110" y="60" width="20" height="60" rx="3" fill="#1F2937" />
              <rect x="110" y="100" width="20" height="10" fill="#EC4899" />
              <path d="M113 60L127 60V35L113 42V60Z" fill="#F43F5E" />
            </g>
          </g>
        </svg>
      );

    case 'department-grocery':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="260" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadows */}
          <ellipse cx="120" cy="208" rx="40" ry="5" fill="black" fillOpacity="0.2" />
          <ellipse cx="245" cy="175" rx="45" ry="5" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(195, 75)">
              <rect x="5" y="70" width="95" height="20" rx="4" fill="#374151" />
              <circle cx="20" cy="77" r="2" fill="#10B981" />
              <path d="M15 70L30 35H75L85 70H15Z" fill="#4B5563" />
              <rect x="25" y="46" width="30" height="20" rx="1" fill="#1F2937" />
              <g transform="translate(45, 10) rotate(-5)">
                <rect x="0" y="0" width="45" height="30" rx="3" fill="#1F2937" stroke="#9CA3AF" strokeWidth="1.5" />
                <rect x="4" y="4" width="37" height="22" rx="1" fill="#06B6D4" />
              </g>
            </g>
            <g transform="translate(65, 80)">
              <ellipse cx="25" cy="118" rx="7" ry="7" fill="#374151" />
              <ellipse cx="78" cy="118" rx="7" ry="7" fill="#374151" />
              <path d="M10 35H25L38 105H85L98 40H30" stroke="#374151" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M38 105L28 118H85" stroke="#374151" strokeWidth="3.5" />
              <rect x="45" y="24" width="18" height="24" rx="2" fill="#EF4444" />
              <path d="M68 28C68 20 80 20 80 28V45H68V28Z" fill="#FBBF24" />
            </g>
          </g>
        </svg>
      );

    case 'dry-fruits-spices':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="188" rx="45" ry="5" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(120, 60)">
              <rect x="70" y="120" width="20" height="10" fill="#374151" />
              <line x1="80" y1="20" x2="80" y2="120" stroke="#374151" strokeWidth="5" />
              <line x1="30" y1="40" x2="130" y2="40" stroke="#374151" strokeWidth="5" />
              <path d="M10 40L30 80H50L70 40H10Z" fill="#D97706" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" />
              <path d="M90 40L110 80H130L150 40H90Z" fill="#D97706" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" />
              <circle cx="120" cy="55" r="12" fill="#F59E0B" />
            </g>
          </g>
        </svg>
      );

    case 'footwear-showroom':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="180" rx="100" ry="10" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(110, 60)">
              <rect x="0" y="80" width="180" height="30" rx="10" fill="#4F46E5" />
              <path d="M20 80C20 40 50 20 90 20H130C160 20 180 50 180 80H20Z" fill="#6366F1" />
              <rect x="135" y="35" width="30" height="30" rx="4" fill="#FFFFFF" />
              <path d="M50 35L75 25M55 45L80 35M60 55L85 45" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      );

    case 'furniture-home-decor':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="100" ry="10" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(100, 70)">
              <rect x="10" y="60" width="180" height="40" rx="8" fill="#0D9488" />
              <rect x="30" y="20" width="140" height="50" rx="12" fill="#14B8A6" />
              <rect x="0" y="50" width="30" height="50" rx="6" fill="#0D9488" />
              <rect x="170" y="50" width="30" height="50" rx="6" fill="#0D9488" />
              <rect x="40" y="100" width="10" height="15" fill="#78350F" />
              <rect x="150" y="100" width="10" height="15" fill="#78350F" />
            </g>
          </g>
        </svg>
      );

    case 'fmcg-distribution':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="120" r="75" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="200" rx="98" ry="10" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(90, 70)">
              <circle cx="48" cy="115" r="18" fill="#1F2937" />
              <circle cx="160" cy="115" r="18" fill="#1F2937" />
              <rect x="5" y="15" width="130" height="85" rx="3" fill="#0284C7" />
              <rect x="12" y="22" width="116" height="71" fill="#0EA5E9" />
              <path d="M135 40H185C192 40 198 48 198 56V100H135V40Z" fill="#F3F4F6" />
            </g>
          </g>
        </svg>
      );

    case 'garments-apparel':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="210" rx="60" ry="6" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(130, 50)">
              <path d="M70 10C65 0 75 0 70 10C50 25 20 35 10 40H130C120 35 90 25 70 10Z" stroke="#4B5563" strokeWidth="3" fill="none" />
              <path d="M30 40L10 65L25 80L40 70V150H100V70L115 80L130 65L110 40H30Z" fill="#A855F7" />
              <circle cx="70" cy="65" r="10" fill="#E5E7EB" />
            </g>
          </g>
        </svg>
      );

    case 'home-appliances':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="60" ry="6" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(110, 60)">
              <rect x="0" y="0" width="180" height="100" rx="4" fill="#1F2937" stroke="#3B82F6" strokeWidth="4" />
              <rect x="80" y="100" width="20" height="20" fill="#4B5563" />
              <rect x="60" y="120" width="60" height="6" rx="2" fill="#1F2937" />
              <path d="M30 30L90 70L150 20" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      );

    case 'mobile-accessories':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="170" cy="180" rx="40" ry="5" fill="black" fillOpacity="0.2" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(140, 50)">
              <rect x="0" y="0" width="60" height="120" rx="10" fill="#10B981" stroke="#059669" strokeWidth="3" />
              <rect x="6" y="10" width="48" height="95" rx="4" fill="#1F2937" />
              <ellipse cx="60" cy="60" rx="45" ry="30" stroke="#34D399" strokeWidth="2.5" fill="none" />
            </g>
          </g>
        </svg>
      );

    case 'saree-suit-salwar':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          <g transform="translate(150, 40)">
            {/* The base & pole are static */}
            <line x1="50" y1="10" x2="50" y2="170" stroke="#4B5563" strokeWidth="4" />
            <rect x="35" y="170" width="30" height="8" rx="2" fill="#1F2937" />
            {/* ONLY the dress body floats! */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -8; 0 0"
                keyTimes="0; 0.5; 1"
                dur="5s"
                repeatCount="indefinite"
              />
              <path d="M30 30C25 40 10 50 10 75C10 110 25 130 30 140H70C75 130 90 110 90 75C90 50 75 40 70 30H30Z" fill="#F43F5E" />
            </g>
          </g>
        </svg>
      );

    case 'toys-gifts':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="180" rx="60" ry="7" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(140, 60)">
              <rect x="10" y="30" width="100" height="80" rx="4" fill="#2563EB" />
              <rect x="5" y="18" width="110" height="15" rx="2" fill="#1D4ED8" />
              <rect x="50" y="18" width="20" height="92" fill="#FBBF24" />
              <path d="M60 18C45 0 55 0 60 18C65 0 75 0 60 18Z" fill="#FBBF24" />
            </g>
          </g>
        </svg>
      );

    case 'vegetables-fruits':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="165" rx="70" ry="7" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(120, 60)">
              <path d="M15 50C15 90 145 90 145 50H15Z" fill="#84CC16" />
              <rect x="10" y="40" width="140" height="10" rx="3" fill="#65A30D" />
              <circle cx="50" cy="35" r="16" fill="#EF4444" />
              <circle cx="90" cy="35" r="16" fill="#F59E0B" />
              <circle cx="115" cy="40" r="12" fill="#84CC16" />
            </g>
          </g>
        </svg>
      );

    case 'wine-shop':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="180" rx="60" ry="6" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(140, 50)">
              <rect x="20" y="30" width="22" height="90" rx="4" fill="#7C3AED" />
              <rect x="27" y="10" width="8" height="20" fill="#6D28D9" />
              <path d="M70 70V120H90V70H70ZM60 65H100V70H60V65Z" fill="#A78BFA" fillOpacity="0.5" stroke="#7C3AED" strokeWidth="2" />
            </g>
          </g>
        </svg>
      );

    case 'erp-supermarket':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="100" ry="7" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(100, 60)">
              <rect x="10" y="40" width="180" height="80" rx="4" fill="#EF4E5D" />
              <rect x="10" y="20" width="180" height="20" fill="#B91C1C" />
              <circle cx="100" cy="70" r="22" fill="white" stroke="#EF4E5D" strokeWidth="3" />
              <path d="M92 70L108 70M100 62V78" stroke="#EF4E5D" strokeWidth="4" />
            </g>
          </g>
        </svg>
      );

    case 'erp-auto-parts':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="65" ry="6" fill="black" fillOpacity="0.1" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(130, 60) scale(1.2)">
              <circle cx="40" cy="40" r="30" fill="#EF4444" fillOpacity="0.15" stroke="#EF4444" strokeWidth="3" strokeDasharray="10 5" />
              <circle cx="40" cy="40" r="15" fill="#EF4444" />
              <circle cx="80" cy="80" r="25" fill="#4B5563" fillOpacity="0.2" stroke="#4B5563" strokeWidth="3" strokeDasharray="6 3" />
              <circle cx="80" cy="80" r="10" fill="#4B5563" />
            </g>
          </g>
        </svg>
      );

    case 'erp-pharmacy':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="100" ry="7" fill="black" fillOpacity="0.15" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(100, 50)">
              <rect x="10" y="40" width="180" height="90" rx="4" fill="#86EFAC" />
              <rect x="10" y="25" width="180" height="15" fill="#22C55E" />
              <rect x="80" y="0" width="40" height="40" rx="8" fill="#FFFFFF" stroke="#22C55E" strokeWidth="3.5" />
              <path d="M100 10V30M90 20H110" stroke="#22C55E" strokeWidth="4.5" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      );

    case 'erp-multi-location':
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          {/* Static Shadow */}
          <ellipse cx="200" cy="190" rx="80" ry="7" fill="black" fillOpacity="0.1" />
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(100, 60)">
              <circle cx="90" cy="60" r="18" fill="#0EA5E9" />
              <circle cx="30" cy="100" r="14" fill="#06B6D4" />
              <circle cx="150" cy="100" r="14" fill="#06B6D4" />
              <circle cx="90" cy="10" r="14" fill="#3B82F6" />
              <line x1="90" y1="60" x2="30" y2="100" stroke="#D1D5DB" strokeWidth="3.5" />
              <line x1="90" y1="60" x2="150" y2="100" stroke="#D1D5DB" strokeWidth="3.5" />
              <line x1="90" y1="60" x2="90" y2="10" stroke="#D1D5DB" strokeWidth="3.5" />
            </g>
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full max-h-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="80" fill="white" fillOpacity="0.1" />
          <g opacity="0.35" stroke="white" strokeWidth="1">
            <line x1="50" y1="50" x2="350" y2="50" />
            <line x1="50" y1="100" x2="350" y2="100" />
            <line x1="50" y1="150" x2="350" y2="150" />
            <line x1="50" y1="200" x2="350" y2="200" />
            <line x1="100" y1="30" x2="100" y2="220" />
            <line x1="200" y1="30" x2="200" y2="220" />
            <line x1="300" y1="30" x2="300" y2="220" />
          </g>
          {/* Floating Main Illustration */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              keyTimes="0; 0.5; 1"
              dur="5s"
              repeatCount="indefinite"
            />
            <g transform="translate(145, 60)">
              <rect x="10" y="5" width="90" height="60" rx="4" fill="#4B5563" stroke="#D1D5DB" strokeWidth="2.5" />
              <rect x="15" y="10" width="80" height="40" rx="1.5" fill="#1F2937" />
              <path d="M45 65L40 90H70L65 65H45Z" fill="#374151" />
              <path d="M22 25L42 35L55 20L78 38" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      );
  }
}
