import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { ArrowRight, Check, Compass, HardHat, Layers } from 'lucide-react';

interface ServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
                End-To-End Civil Capabilities
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Comprehensive <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              From luxury modern residential villas to heavy municipal infrastructure, our licensed civil engineering contracting team delivers durability, precision and aesthetic excellence.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-2xl glass-card overflow-hidden border border-slate-800/90 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 3D Visual Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category & Service Number Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {service.category}
                    </span>
                    <span className="text-xs font-display font-black text-white/80 px-2 py-0.5 rounded bg-slate-900/70 border border-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[11px] font-semibold text-slate-300 block truncate">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Scope points */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    {service.scope.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 mt-2 space-y-2">
                <div className="text-[11px] text-amber-400/90 font-medium py-1 px-2.5 rounded bg-amber-500/10 border border-amber-500/20 truncate">
                  {service.specs}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-2 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-850 text-slate-300 border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="py-2 text-xs font-bold rounded-lg bg-amber-500/20 hover:bg-gold-gradient text-amber-300 hover:text-slate-950 border border-amber-500/40 hover:border-transparent transition-all"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl glass-navy border border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400">
                  {selectedService.category} · Bhanu Builders
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-700">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Engineering Scope & Methodology
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {selectedService.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
              <span className="font-bold uppercase tracking-wider block text-amber-400">Quality Benchmark:</span>
              <p>{selectedService.specs}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(serviceName);
                }}
                className="px-5 py-2.5 rounded-lg bg-gold-gradient text-slate-950 text-xs font-bold shadow-lg"
              >
                Request Quotation for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
