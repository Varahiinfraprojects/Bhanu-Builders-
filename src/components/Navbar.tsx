import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: (defaultPackage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About MD', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-navy border-b border-amber-500/20 shadow-2xl py-3'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single Brand Wordmark with Monogram */}
            <a href="#" className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1">
              <Logo size="md" />
            </a>

            {/* Zone 2: 4-6 concise single-line nav links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action + Quick Call affordance */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-400/50 transition-all whitespace-nowrap shrink-0"
                title="Call Managing Director Jadi Sampath"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gold-gradient hover:brightness-110 rounded-lg transition-all shadow-lg shadow-amber-500/20 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="pb-4 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Quick Navigation</span>
            </div>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                About Us & MD
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Our Projects
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Construction Packages
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <div className="text-xs text-slate-400">
              <p className="font-semibold text-slate-200">Managing Director: Jadi Sampath</p>
              <p>Chennur, Mancherial Dist, Telangana</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 text-slate-100 text-sm font-semibold border border-slate-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Jadi%20Sampath%20garu%2C%20I%20am%20interested%20in%20a%20construction%20project%20with%20Bhanu%20Builders.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-lg bg-gold-gradient text-slate-950 font-bold text-sm shadow-lg text-center"
            >
              Get Free Construction Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};
