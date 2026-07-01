import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Calendar, User, Clock, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { Project } from '../types';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Extract unique categories for filter row
  const categories = useMemo(() => {
    const list = new Set(PROJECTS_DATA.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & Search computation
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesSearch =
        proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.techTags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || proj.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden bg-slate-950/80 border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-accent-400 px-3 py-1 rounded-full text-xs font-mono"
          >
            <span>Our Launch Ledger</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Case Studies & Launch Specs
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Review detailed reports on actual production software environments engineered, benchmarked, and maintained securely by our teams.
          </p>
        </div>
      </section>

      {/* Interactive controls and Grid Section */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-50 p-4.5 rounded-2xl border border-slate-150">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md select-text">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                id="portfolio-search-input"
                type="text"
                placeholder="Search projects (React, AWS, Spring Boot...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-slate-850 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none transition-all shadow-2xs"
              />
            </div>

            {/* Layout Indicator metadata info */}
            <div className="text-xs font-mono text-slate-450 hidden lg:block text-right">
              Showing {filteredProjects.length} of {PROJECTS_DATA.length} specs
            </div>
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                id={`filter-trigger-${cat.toLowerCase().replace(' ', '-')}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/10'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  id={`portfolio-item-card-${proj.id}`}
                  className="glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Project Crop container */}
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        referrerPolicy="no-referrer"
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded">
                        {proj.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3 text-left">
                      <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-primary-500 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges footer info */}
                  <div className="px-6 pb-6 text-left space-y-4">
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {proj.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono glass-badge text-slate-750 px-2.5 py-0.5 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      id={`analysis-trigger-${proj.id}`}
                      onClick={() => setActiveModalProject(proj)}
                      className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Analyze Spec Case</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent-400" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Search Empty handler */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center space-y-3">
              <p className="text-slate-450 font-sans text-base">
                No active software specifications match your current filters.
              </p>
              <button
                id="portfolio-reset-trigger"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-xs font-semibold text-primary-500 hover:underline"
              >
                Reset Searches
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT DETAILS SPECS MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              id="spec-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            >
              {/* Modal Card container */}
              <motion.div
                id="spec-modal-container"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/80 backdrop-blur-3xl rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/50"
              >
                {/* Header Showcase image */}
                <div className="relative aspect-video max-h-[250px] overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    referrerPolicy="no-referrer"
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />
                  <button
                    id="spec-modal-close"
                    onClick={() => setActiveModalProject(null)}
                    className="absolute top-4 right-4 bg-slate-950/70 hover:bg-slate-950/90 text-white p-2 rounded-full focus:outline-none cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  {/* Category Tag overlay */}
                  <div className="absolute left-6 bottom-6 text-left">
                    <span className="bg-primary-500 text-white text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded">
                      {activeModalProject.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6 text-left select-text">
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-1000">
                      {activeModalProject.title}
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Detailed case analysis for our corporate client partner.
                    </p>
                  </div>

                  {/* Metadata Row layout */}
                  <div className="grid grid-cols-3 gap-4 p-4.5 bg-white/45 backdrop-blur-md rounded-2xl border border-white/40 text-xs sm:text-sm font-sans font-medium text-slate-700">
                    <div className="space-y-1">
                      <div className="text-slate-400 font-mono text-[10px] uppercase font-bold">Client Partner</div>
                      <div className="text-slate-800 font-semibold">{activeModalProject.client}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-slate-400 font-mono text-[10px] uppercase font-bold">Duration Specs</div>
                      <div className="text-slate-800 font-semibold">{activeModalProject.timeline}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-slate-400 font-mono text-[10px] uppercase font-bold">Launch Phase</div>
                      <div className="text-emerald-600 font-bold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 inline-block" />
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* Long description */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Case Analysis Overview
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
                      {activeModalProject.longDescription}
                    </p>
                  </div>

                  {/* Measured Outcomes */}
                  <div className="space-y-3.5">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Measured Strategic Outcomes
                    </h3>
                    <div className="space-y-2.5">
                      {activeModalProject.results.map((r, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 text-xs sm:text-sm font-sans font-medium">
                            {r}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies utilized list */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Technologies Deployed
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techTags.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10.5px] font-mono glass-badge text-slate-750 px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                  <button
                    id="spec-modal-footer-close"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl cursor-pointer"
                  >
                    Dismiss Analysis
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
