import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { ShieldCheck, HardHat, Briefcase, Clock, BadgePercent, Users, Compass, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    HardHat,
    Briefcase,
    Clock,
    BadgePercent,
    Users,
    Compass
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#060B18] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
              The Bhanu Builders Standard
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-gold-gradient">Bhanu Builders?</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Constructing a home or civic structure is a monumental investment. Here is how our engineering discipline, ethics, and material standards safeguard your dream.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-display font-black text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Guaranteed in writing</span>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Direct MD Guarantee Card to balance the 3-column layout */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B132B] to-[#121A33] border border-amber-500/40 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 block">
                Direct Accountability
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Personal Assurance by Managing Director Jadi Sampath
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No middleman brokers or distant corporate desks. You have direct telephonic access to our Managing Director throughout the life cycle of your construction project.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">JADI SAMPATH</span>
                <span className="text-[11px] text-slate-400">Managing Director</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Verified Contractor
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
