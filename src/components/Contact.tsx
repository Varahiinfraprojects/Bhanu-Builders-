import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES, PHOTO_ASSETS } from '../data/companyData';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Building Construction',
    area: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Jadi Sampath garu (Bhanu Builders),
Name: ${formData.name || 'Client'}
Mobile: ${formData.phone}
Email: ${formData.email || 'N/A'}
Service Required: ${formData.service}
Area / Size: ${formData.area || 'Not specified'}
Message: ${formData.message || 'I would like to discuss a construction project in Telangana.'}`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#050A16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
              Get in Touch with Managing Director
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect with <span className="text-gold-gradient">Bhanu Builders</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Whether you are planning a luxury family residence, a commercial development, or municipal civil infrastructure, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* MD Profile Card */}
            <div className="p-6 rounded-2xl glass-card border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={PHOTO_ASSETS.mdPhoto}
                  alt="Jadi Sampath"
                  className="w-16 h-16 rounded-xl object-cover object-center border-2 border-amber-400 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Direct Contact
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {COMPANY_DETAILS.mdName}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {COMPANY_DETAILS.mdDesignation}
                  </p>
                </div>
              </div>

              {/* 3 Prominent Quick Action Buttons: Call, WhatsApp, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 border border-slate-700 hover:border-amber-400/50 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Click to Call</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Jadi%20Sampath%20garu%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project%20with%20Bhanu%20Builders.`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}?subject=Construction%20Enquiry%20-%20Bhanu%20Builders`}
                  className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center flex flex-col items-center justify-center gap-1 border border-slate-700 hover:border-amber-400/50 transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email Now</span>
                </a>
              </div>
            </div>

            {/* Address & Meta List */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Office Location:</span>
                  <p className="font-semibold text-white mt-0.5">{COMPANY_DETAILS.address}</p>
                  <p className="text-slate-400 text-xs">PIN: {COMPANY_DETAILS.pincode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Mobile Number:</span>
                  <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="font-semibold text-amber-300 hover:underline">
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Official Email:</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="font-semibold text-white hover:text-amber-400">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Official Web Domain:</span>
                  <span className="font-semibold text-white">{COMPANY_DETAILS.domain}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">Consultation Hours:</span>
                  <span className="text-slate-300">{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed / Location Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Chennur, Mancherial District, Telangana
                </span>
                <span className="text-amber-400 text-[11px]">Bhanu Builders Site</span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-950">
                <iframe
                  title="Bhanu Builders Office Location Chennur Telangana"
                  src="https://maps.google.com/maps?q=Chennur,%20Mancherial%20District,%20Telangana,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Customer Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-card border border-amber-500/30 shadow-2xl relative">
              <div className="mb-6 space-y-1">
                <h3 className="font-display font-bold text-2xl text-white">
                  Send Construction Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Fill in your project requirements below. Managing Director Jadi Sampath will personally review and contact you with preliminary estimates.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Thank You, {formData.name || 'Valued Client'}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your enquiry for <strong className="text-amber-400">{formData.service}</strong> has been logged. Managing Director Jadi Sampath will call you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Directly to MD WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="youremail@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Plot / Built-up Area
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. 150 sq.yards / 2000 sq.ft"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Residential Construction Package Enquiry">
                        Residential Package Enquiry (₹1,800 - ₹2,500/sq.ft)
                      </option>
                      <option value="Government Works Tender">
                        Government Works & Tender Execution
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Project Details / Site Location *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your site location in Chennur/Mancherial/Telangana, preferred timeline, number of floors, or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gold-gradient text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry to Managing Director</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-slate-400">
                      Your privacy is respected. No spam, ever. Direct contact with Managing Director Jadi Sampath.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
