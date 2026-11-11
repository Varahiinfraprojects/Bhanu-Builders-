import React from 'react';
import { COMPANY_DETAILS, PHOTO_ASSETS } from '../data/companyData';
import { ShieldCheck, HardHat, Smile, FileCheck, Clock, Coins, CheckCircle, Mail, Phone, MessageCircle } from 'lucide-react';

export const AboutMD: React.FC = () => {
  const commitments = [
    {
      title: 'Quality Construction',
      desc: 'Zero tolerance for substandard inputs. We exclusively use primary grade TMT steel, 53-grade certified cement, and machine-tested aggregates.',
      icon: ShieldCheck
    },
    {
      title: 'Professional Engineering Practices',
      desc: 'Every structure is backed by comprehensive STAAD.Pro structural analysis, soil bearing capacity calculations, and IS-code compliant reinforcement detailing.',
      icon: HardHat
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Transparent collaboration from architectural conceptualization to final turnkey key handover, tailored precisely to your family’s dreams and aspirations.',
      icon: Smile
    },
    {
      title: 'Transparent Project Execution',
      desc: 'No hidden clauses or surprise variation costs. Clear written contracts, itemized bill of quantities (BOQ), and stage-wise milestone payment schedules.',
      icon: FileCheck
    },
    {
      title: 'Timely Delivery',
      desc: 'Strict adherence to committed completion deadlines through disciplined on-site labor scheduling, timely material stocking, and proactive project management.',
      icon: Clock
    },
    {
      title: 'Cost-Effective Construction',
      desc: 'Engineered cost optimization through direct bulk material procurement and waste reduction without ever sacrificing structural safety or longevity.',
      icon: Coins
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950/80 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
            About Our Company
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Rooted in Chennur. <span className="text-gold-gradient">Building for Telangana.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-balance">
            BHANU BUILDERS is a premier construction, real estate and infrastructure development company based in Chennur, Mancherial District, Telangana, dedicated to elevating living standards and civic infrastructure.
          </p>
        </div>

        {/* 2-Column Story & MD Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Managing Director Portrait & Executive Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden glass-card border border-amber-500/30 p-2 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={PHOTO_ASSETS.mdPhoto}
                  alt="Jadi Sampath - Managing Director of Bhanu Builders"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Executive Leadership</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    JADI SAMPATH
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Managing Director & Civil Engineering Contractor
                  </p>
                </div>
              </div>

              {/* MD Contact & Credentials Footer inside Card */}
              <div className="p-4 space-y-3 bg-slate-900/90 rounded-xl mt-2 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="text-slate-400">Headquarters:</span>
                  <span className="font-semibold text-white">Chennur, Mancherial, TG</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="text-slate-400">Direct Contact:</span>
                  <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="font-semibold text-amber-400 hover:underline">
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Namaste%20Jadi%20Sampath%20garu%2C%20I%20would%20like%20to%20consult%20with%20you%20regarding%20a%20construction%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp MD</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}?subject=Construction%20Enquiry%20-%20Bhanu%20Builders`}
                    className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                Engineering Homes and Infrastructure Built to Outlast Generations
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Under the dynamic leadership of <strong className="text-white">Managing Director Jadi Sampath</strong>, Bhanu Builders has emerged as a respected name in Telangana’s civil contracting landscape. Based in <strong className="text-amber-400">Chennur, Mancherial District</strong>, our multidisciplinary team transforms architectural visions into solid reality.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                From luxury residential duplexes and custom family villas to critical public works including CC road networks, town stormwater drains, culverts and bridges, every project is executed with personal on-site engineering supervision and uncompromised ethics.
              </p>
            </div>

            {/* Quote Box from MD */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/25 space-y-2">
              <p className="text-sm sm:text-base italic text-amber-100/90 leading-relaxed">
                &ldquo;At Bhanu Builders, our motto &lsquo;Building Trust. Building Tomorrow&rsquo; is not just words—it is our operating protocol. When a client hands over their life savings to build a home or a municipality entrusts us with critical civic infrastructure, we honor that faith through meticulous engineering and unwavering honesty.&rdquo;
              </p>
              <div className="pt-2 text-right">
                <span className="font-display font-bold text-sm text-amber-400 block">— Jadi Sampath</span>
                <span className="text-[11px] text-slate-400">Managing Director, Bhanu Builders</span>
              </div>
            </div>

            {/* Quick trust checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-Site Engineer Supervision</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Vaastu Verified Floor Plans</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Government & Municipal Tender Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Hidden Escalation Costs</span>
              </div>
            </div>

          </div>

        </div>

        {/* The 6 Core Commitments Grid */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Our 6 Pillars of Commitment
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              The foundational principles guiding every Bhanu Builders construction site
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl glass-card border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-gold-gradient group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
