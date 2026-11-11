import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/companyData';
import { MapPin, Calendar, Check, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onOpenQuote: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Residential Villas',
    'Modern Independent Houses',
    'Commercial Buildings',
    'CC Roads',
    'Drainage Works',
    'Bridges and Culverts',
    'Infrastructure Development'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#070D1E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
              Civil Engineering Portfolio
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Featured <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Realized residential landmarks, commercial structures, and civic infrastructure executed across Chennur and Telangana with engineering precision.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-card overflow-hidden border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700">
                      {project.completionYear}
                    </span>
                  </div>

                  {/* Location & Specs */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    <span className="font-semibold text-amber-300 text-[11px]">
                      {project.areaOrLength}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    <strong className="text-slate-300">Scope: </strong>
                    {project.scope}
                  </p>

                  <div className="pt-2 border-t border-slate-800 space-y-1">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-amber-400/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Project Overview & Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold text-white">
              Planning a Residential Villa or Infrastructure Work in Telangana?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a site inspection with Managing Director Jadi Sampath for customized architectural plans and soil analysis.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Book Site Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl glass-navy border border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400">
                  {activeModalProject.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeModalProject.location} · Completed {activeModalProject.completionYear}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-700">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Scope:</span>
                  <span className="font-semibold text-white">{activeModalProject.scope}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Dimensions / Scale:</span>
                  <span className="font-semibold text-amber-400">{activeModalProject.areaOrLength}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Key Technical Features & Standards
                </h4>
                <div className="space-y-2">
                  {activeModalProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 rounded-lg bg-gold-gradient text-slate-950 text-xs font-bold shadow-lg"
              >
                Inquire Similar Construction
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
