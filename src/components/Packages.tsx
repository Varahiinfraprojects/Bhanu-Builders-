import React, { useState } from 'react';
import { PACKAGES, ConstructionPackage, COMPANY_DETAILS } from '../data/companyData';
import { Check, Calculator, Sparkles, ChevronDown, ChevronUp, AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface PackagesProps {
  onOpenQuote: (packageName?: string, estimatedCost?: number, area?: number) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenQuote }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [builtUpArea, setBuiltUpArea] = useState<number>(1500);
  const [numFloors, setNumFloors] = useState<string>('G+1 (Duplex)');
  const [expandedPackage, setExpandedPackage] = useState<string | null>('premium');

  const activePackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const calculatedTotal = builtUpArea * activePackage.rate;

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#060B18] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
              Transparent Pricing & Material Catalog
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Residential Construction <span className="text-gold-gradient">Packages</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Engineered with certified branded materials, structural accountability, and stage-by-stage transparent billing. Choose the package that suits your vision.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            const isExpanded = expandedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c1328] border-2 border-amber-400 shadow-2xl shadow-amber-500/15'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-slate-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Most Recommended
                    </span>
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <h3 className="font-display font-bold text-xl text-white">
                      {pkg.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-display font-black text-3xl text-amber-400 tracking-tight">
                        {pkg.rateFormatted.split('/')[0]}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/sq.ft.</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                      Package Inclusions:
                    </span>
                    {pkg.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Accordion Toggle for Specifications */}
                  <button
                    onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 flex items-center justify-between border border-slate-700/80 transition-colors mb-4"
                  >
                    <span>{isExpanded ? 'Hide Detailed Specs' : 'View Material Specifications'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expanded Material Details */}
                  {isExpanded && (
                    <div className="space-y-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs mb-4 animate-in fade-in duration-150">
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase block">Steel & Cement:</span>
                        <p className="text-slate-300">{pkg.steel}</p>
                        <p className="text-slate-400 mt-0.5">{pkg.cement}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase block">Flooring:</span>
                        <p className="text-slate-300">{pkg.flooring}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase block">Doors & Windows:</span>
                        <p className="text-slate-300">{pkg.doorsWindows}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase block">Kitchen & Bath:</span>
                        <p className="text-slate-300">{pkg.kitchenBath}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase block">Plumbing & Electrical:</span>
                        <p className="text-slate-300">{pkg.electricalPlumbing}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <button
                    onClick={() => onOpenQuote(pkg.name, builtUpArea * pkg.rate, builtUpArea)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-gold-gradient text-slate-950 hover:brightness-110'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-amber-400/50'
                    }`}
                  >
                    <span>Enquire for {pkg.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className="w-full text-center text-[11px] text-amber-400 hover:underline py-1"
                  >
                    Use in Live Cost Calculator ↓
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Mandatory Note as Requested in Prompt */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 max-w-4xl mx-auto mb-16">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-amber-300 font-semibold">Important Note: </strong>
            Final quotations depend on project specifications, site conditions, soil bearing capacity, structural layout and agreed scope of work. All rates exclude municipal approval fees, compound wall length beyond standard package, and electrical meter deposit.
          </div>
        </div>

        {/* Interactive Construction Cost Calculator */}
        <div className="rounded-3xl glass-card border border-amber-500/30 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <h3 className="font-display font-bold text-2xl text-white">
                  Interactive Construction Cost Estimator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Estimate your tentative residential construction budget based on built-up area and chosen package.
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 self-start sm:self-auto">
              Selected: {activePackage.name}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Package Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  1. Choose Package:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPackageId(p.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedPackageId === p.id
                          ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold block">{p.name}</span>
                      <span className="text-xs text-amber-400 font-semibold">{p.rateFormatted}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Planned Built-up Area (Sq.Ft.):
                  </label>
                  <span className="text-base font-display font-black text-amber-400 tabular-nums">
                    {builtUpArea.toLocaleString('en-IN')} sq.ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="8000"
                  step="50"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>600 sq.ft (Compact)</span>
                  <span>1,500 sq.ft (Standard)</span>
                  <span>3,000 sq.ft (Duplex)</span>
                  <span>8,000 sq.ft (Mansion)</span>
                </div>
              </div>

              {/* Floor Structure */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  3. Proposed Configuration:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Ground Floor', 'G+1 (Duplex)', 'G+2 (Triplex)'].map((fl) => (
                    <button
                      key={fl}
                      onClick={() => setNumFloors(fl)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                        numFloors === fl
                          ? 'bg-slate-800 border-amber-400 text-amber-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {fl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Result Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a1226] border border-amber-500/40 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Estimated Construction Budget
                </span>

                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-gold-gradient tracking-tight tabular-nums">
                    ₹{calculatedTotal.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    approx. ₹{(calculatedTotal / 100000).toFixed(2)} Lakhs for {builtUpArea.toLocaleString('en-IN')} sq.ft.
                  </p>
                </div>

                {/* Estimate Breakdown summary */}
                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Construction Rate:</span>
                    <span className="font-semibold text-white">{activePackage.rateFormatted}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Steel Brand:</span>
                    <span className="font-semibold text-amber-300 truncate max-w-[200px] text-right">
                      {activePackage.steel.split('(')[0]}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Cement Brand:</span>
                    <span className="font-semibold text-amber-300 truncate max-w-[200px] text-right">
                      {activePackage.cement.split('(')[0]}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Configuration:</span>
                    <span className="font-semibold text-white">{numFloors}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 space-y-2">
                <button
                  onClick={() => onOpenQuote(activePackage.name, calculatedTotal, builtUpArea)}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Request Official Quotation PDF</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Jadi%20Sampath%20garu%2C%20I%20calculated%20an%20estimate%20of%20Rs.%20${calculatedTotal.toLocaleString('en-IN')}%20for%20${builtUpArea}%20sq.ft%20under%20the%20${activePackage.name}.%20Can%20we%20discuss%20my%20site%20in%20Telangana%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to MD on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
