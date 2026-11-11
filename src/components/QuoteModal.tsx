import React, { useState, useEffect } from 'react';
import { PACKAGES, SERVICES, COMPANY_DETAILS } from '../data/companyData';
import { X, Send, CheckCircle2, MessageCircle, Calculator, Building } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultCost?: number;
  defaultArea?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = 'Premium Package',
  defaultCost,
  defaultArea = 1500
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [area, setArea] = useState<number>(defaultArea);
  const [location, setLocation] = useState('Chennur / Mancherial District');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedPackage(defaultPackage || 'Premium Package');
    if (defaultArea) setArea(defaultArea);
  }, [defaultPackage, defaultArea]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPkgObj = PACKAGES.find(p => p.name.toLowerCase().includes(selectedPackage.toLowerCase())) || PACKAGES[1];
  const estimatedAmount = area * currentPkgObj.rate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const message = `Hello Jadi Sampath garu (Bhanu Builders),
I requested a construction quote:
• Client Name: ${name || 'Prospective Client'}
• Phone: ${phone}
• Email: ${email || 'N/A'}
• Package/Service: ${selectedPackage}
• Built-up Area: ${area} sq.ft.
• Estimated Budget: ₹${estimatedAmount.toLocaleString('en-IN')}
• Site Location: ${location}
• Additional Notes: ${notes || 'Looking for site inspection & blueprint consultation.'}`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl glass-navy border border-amber-500/40 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-bold text-2xl text-white">
              Quote Request Received!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Managing Director <strong className="text-amber-400">Jadi Sampath</strong> has received your project parameters for {selectedPackage}.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <p>Estimated Budget: <strong className="text-amber-400 text-sm">₹{estimatedAmount.toLocaleString('en-IN')}</strong> ({area} sq.ft.)</p>
              <p>We will call you at <strong className="text-white">{phone}</strong> within 24 hours.</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward to MD on WhatsApp Now</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Official Estimate Request
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Get a Free Construction Quotation
              </h3>
              <p className="text-xs text-slate-300">
                Directly supervised by Managing Director Jadi Sampath · Chennur, Telangana
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Package / Service Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Selected Package or Service
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} — {p.rateFormatted}
                    </option>
                  ))}
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area slider or number */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Built-up Area (Sq.Ft.)
                  </label>
                  <input
                    type="number"
                    min="400"
                    max="20000"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Tentative Budget
                  </label>
                  <div className="px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-display font-bold text-sm">
                    ₹{estimatedAmount.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 96184 92727"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Site Location in Telangana
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Chennur / Mancherial / Bellampalli / Mandamarri"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Number of floors, timeline, or Vaastu preferences..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate Request</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                * Note: Final quotations depend on project specifications, site conditions & soil test.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
