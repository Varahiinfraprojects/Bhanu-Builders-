import React from 'react';
import { COMPANY_DETAILS, PHOTO_ASSETS } from '../data/companyData';
import { ArrowDown, MessageCircle, Calculator, ChevronRight, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const serviceHighlights = [
    'CC Roads & Drainage',
    'Residential & Commercial Buildings',
    'Culverts & Bridges',
    'Layouts & Development Works',
    'Civil Engineering Consultancy',
    'Government Works & Tenders'
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero 3D Luxury Villa Render with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_villa_3d_1794022270277.jpg"
          alt="Bhanu Builders Luxury Modern Architectural Villa 3D Render"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep architectural scrim overlay for crisp legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-slate-950/50" />
        {/* Subtle decorative architectural blueprint grid lines */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Left Hero Column (Content & CTAs) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Location & Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Chennur · Mancherial Dist · Telangana
              </span>
              <span className="text-slate-400 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-300">Govt Licensed & Turnkey Contractor</span>
            </div>

            {/* Main Heading as Specified */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase text-balance">
                BHANU <span className="text-gold-gradient">BUILDERS</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-amber-400/95 italic">
                Building Trust. Building Tomorrow.
              </p>
            </div>

            {/* Description as Specified */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal text-balance">
              A trusted construction partner delivering quality residential, commercial and infrastructure development projects with professionalism, transparency and customer satisfaction.
            </p>

            {/* 6 Key Service Highlights */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Engineering Capabilities:
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:border-amber-400/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Prominent Required Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>Get a Free Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-amber-400/50 transition-all flex items-center gap-2"
              >
                <span>Explore Our Projects</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Bhanu%20Builders%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/30 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column: Managing Director Feature Card */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="relative group rounded-2xl p-1 bg-gradient-to-b from-amber-400/30 via-slate-700/40 to-slate-900/90 shadow-2xl backdrop-blur-md">
              <div className="relative rounded-[14px] bg-slate-900/95 overflow-hidden border border-amber-500/20 p-5 space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                      Leadership & Vision
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Telangana State
                  </span>
                </div>

                {/* Managing Director Photograph */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-inner border border-slate-700/70 group-hover:border-amber-400/40 transition-colors bg-slate-900">
                  <img
                    src={PHOTO_ASSETS.mdPhoto}
                    alt="Jadi Sampath, Managing Director of Bhanu Builders"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                  
                  {/* Floating Overlay Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-amber-300">Managing Director</p>
                    <h3 className="font-display font-bold text-xl tracking-tight text-white">
                      JADI SAMPATH
                    </h3>
                    <p className="text-[11px] text-slate-300">Civil Engineering Contractor</p>
                  </div>
                </div>

                {/* Direct MD Connect Strip */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs text-slate-300 italic border-l-2 border-amber-500 pl-3">
                    &ldquo;Every foundation we lay is built on uncompromising quality, structural integrity, and personal accountability.&rdquo;
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Jadi%20Sampath%20garu%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp MD</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metric Strip below Hero (Anti-desert island) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
              ₹1,800<span className="text-sm font-medium text-amber-400">/sq.ft</span>
            </span>
            <p className="text-xs text-slate-400 font-medium">Starting Construction Rate</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tabular-nums">
              100%
            </span>
            <p className="text-xs text-slate-400 font-medium">Vaastu & Structural Compliance</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
              Grade-A
            </span>
            <p className="text-xs text-slate-400 font-medium">Tata/JSW Steel & UltraTech Cement</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
              Chennur, TG
            </span>
            <p className="text-xs text-slate-400 font-medium">Headquartered in Mancherial Dist</p>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-400 transition-colors p-2"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
