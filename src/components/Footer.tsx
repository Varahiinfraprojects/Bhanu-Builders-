import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060E] text-slate-300 relative border-t border-slate-800">
      
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & MD Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              BHANU BUILDERS is a distinguished construction, real estate and infrastructure development company based in Chennur, Mancherial District, Telangana. Committed to structural precision, transparent billing, and enduring quality.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Executive Leadership</span>
              </div>
              <p className="text-white font-semibold">Managing Director: {COMPANY_DETAILS.mdName}</p>
              <p className="text-slate-400 text-[11px]">{COMPANY_DETAILS.mdDesignation}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-300 transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-300 transition-colors">Construction Packages</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Civil Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Residential Villas</li>
              <li>Commercial Buildings</li>
              <li>CC Roads & Pavements</li>
              <li>Town Drainage Systems</li>
              <li>RCC Bridges & Culverts</li>
              <li>Gated Layout Ventures</li>
              <li>Government Works</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Office & Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="hover:text-amber-300 font-semibold text-white">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 font-semibold text-white"
                >
                  WhatsApp: +{COMPANY_DETAILS.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-amber-300 text-slate-300">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[11px] text-slate-500 block">Official Domain:</span>
                <span className="text-slate-300 font-semibold">{COMPANY_DETAILS.domain}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Scroll to Top */}
      <div className="border-t border-slate-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">BHANU BUILDERS</strong>. All Rights Reserved. Building Trust. Building Tomorrow.
          </div>

          <div className="flex items-center gap-6">
            <span>Chennur · Mancherial · Telangana</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Button on Bottom Right */}
      <a
        href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Jadi%20Sampath%20garu%2C%20I%20am%20reaching%20out%20via%20bhanubuilders.in%20to%20enquire%20about%20a%20construction%20project.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-110 active:scale-95 flex items-center gap-2 group border border-emerald-400/40"
        title="Chat with Managing Director Jadi Sampath on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-xs font-bold pr-1">WhatsApp Enquiry</span>
      </a>

    </footer>
  );
};
