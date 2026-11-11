import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMD } from './components/AboutMD';
import { Services } from './components/Services';
import { ThreeDVisualizer } from './components/ThreeDVisualizer';
import { Packages } from './components/Packages';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState<string>('Premium Package');
  const [estimatedCostForQuote, setEstimatedCostForQuote] = useState<number | undefined>(undefined);
  const [areaForQuote, setAreaForQuote] = useState<number | undefined>(undefined);

  const handleOpenQuote = (packageName?: string, estimatedCost?: number, area?: number) => {
    if (packageName) setSelectedPackageForQuote(packageName);
    if (estimatedCost) setEstimatedCostForQuote(estimatedCost);
    if (area) setAreaForQuote(area);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Top Glass Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. About Us & Managing Director Jadi Sampath */}
        <AboutMD />

        {/* 3. Comprehensive Services Grid (8 Services) */}
        <Services onOpenQuote={(service) => handleOpenQuote(service || 'Residential Construction')} />

        {/* 4. Interactive 3D Architectural Villa & Structural Visualizer */}
        <ThreeDVisualizer />

        {/* 5. Residential Construction Packages (₹1,800 - ₹2,500/sq.ft) & Live Cost Estimator */}
        <Packages onOpenQuote={(pkg, cost, area) => handleOpenQuote(pkg, cost, area)} />

        {/* 6. Our Projects Portfolio (7 Categories) */}
        <Projects onOpenQuote={() => handleOpenQuote()} />

        {/* 7. Why Choose Bhanu Builders (7 Core Pillars) */}
        <WhyChooseUs />

        {/* 8. Contact Us & Customer Enquiry Form */}
        <Contact />
      </main>

      {/* Footer & Floating WhatsApp CTA */}
      <Footer />

      {/* Modal for Free Quotations */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        defaultPackage={selectedPackageForQuote}
        defaultCost={estimatedCostForQuote}
        defaultArea={areaForQuote}
      />
    </div>
  );
}
