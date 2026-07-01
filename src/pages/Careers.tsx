import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, DollarSign, Calendar, Sparkles, CheckCircle2, ShieldCheck, Heart, Award, X, Send } from 'lucide-react';
import { CAREERS_DATA } from '../data/companyData';
import { JobOpening } from '../types';

export default function Careers() {
  const [activeJobApply, setActiveJobApply] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [hasAppliedSuccessfully, setHasAppliedSuccessfully] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName.trim() && applicantEmail.trim() && applicantResume.trim()) {
      setHasAppliedSuccessfully(true);
      // Clean states with simulated delay or keeping values
    }
  };

  const resetApplicationWorkflow = () => {
    setActiveJobApply(null);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantResume('');
    setApplicantPortfolio('');
    setHasAppliedSuccessfully(false);
  };

  // Perks details
  const companyPerks = [
    {
      title: 'Remote-First Setup',
      description: 'Choose your own corporate environment: operate from home, from our shared hubs, or travel.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-500 border-rose-100'
    },
    {
      title: 'Premium HW Stipend',
      description: 'Receive modern macOS or Linux arrays alongside custom screen configurations yearly.',
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-500 border-amber-100'
    },
    {
      title: 'Continuous Mastery',
      description: 'We reimburse technical books, certifications, cloud registries, and conference keys.',
      icon: Award,
      color: 'bg-emerald-50 text-emerald-500 border-emerald-100'
    },
    {
      title: 'Flexible Rest & Safe',
      description: 'Mandatory 30-day holidays, absolute sick leave, and mental-health resources included.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-500 border-blue-100'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden bg-slate-950/80 border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute left-1/3 top-10 w-[320px] h-[320px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-accent-400 px-3 py-1 rounded-full text-xs font-mono"
          >
            <span>We are hiring</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Join Code Crafters
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Help us construct fast, secure, enterprise-grade software architectures for ambitious corporate clients. We hate technical compromise.
          </p>
        </div>
      </section>

      {/* Culture explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest">Our Culture</span>
              <h2 className="text-3xl font-display font-extrabold text-slate-1000 tracking-tight leading-tight">
                No Micromanagement. <br />
                Just High-Craft Engineering.
              </h2>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans">
                At Code Crafters Services, we do not monitor keystroke percentages or demand useless daily logs. We measure success strictly by the elegance, speed, and integrity of the software structures we deploy.
              </p>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans">
                Each of our engineers operates under complete creative ownership. We meet for short weekly progress loops, verify design parameters together, and then execute independently. This has allowed us to retain senior tech-leads and maintain high customer confidence.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl bg-slate-100 border border-slate-150">
              <img
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perk Cards Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Developer Perks & Care Highlights
            </h2>
            <p className="text-slate-500 text-sm font-sans max-w-xl mx-auto">
              We design our perks to make sure you have the energy, instruments, and flexibility to ship great codebases:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPerks.map((perk) => {
              const PerkIcon = perk.icon;
              return (
                <div
                  id={`perk-card-${perk.title.toLowerCase().replace(' ', '-')}`}
                  key={perk.title}
                  className="glass-card-hover p-6 rounded-2xl text-left space-y-3"
                >
                  <div className={`w-10 h-10 rounded-lg ${perk.color} flex items-center justify-center`}>
                    <PerkIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-md">{perk.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Positions Accordion checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest block">
              Active Vacancies
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-1000 tracking-tight">
              We are seeking Elite Minds
            </h2>
            <p className="text-slate-500 text-sm font-sans">
              Apply to active openings or share the profiles with fellow engineers:
            </p>
          </div>

          {/* Job cards list */}
          <div className="space-y-6">
            {CAREERS_DATA.map((job) => (
              <div
                id={`job-row-card-${job.id}`}
                key={job.id}
                className="glass-card-hover rounded-2xl p-6.5 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                {/* Left job info metadata */}
                <div className="space-y-3 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10.5px] font-mono glass-badge text-blue-600 px-2.2 py-0.5 rounded-lg">
                      {job.department}
                    </span>
                    <span className="text-[10.5px] font-mono glass-badge text-emerald-600 px-2.2 py-0.5 rounded-lg">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">
                    {job.title}
                  </h3>

                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-sans">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap text-xs text-slate-400 gap-x-6 gap-y-1.5 pt-1.5 font-sans font-medium">
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                      <span>{job.experience} Exp</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                      <span>{job.salaryRange}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Trigger */}
                <button
                  id={`apply-open-trigger-${job.id}`}
                  onClick={() => setActiveJobApply(job)}
                  className="w-full md:w-auto inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Apply to Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB APPLICATION MODAL OVERLAY */}
      <AnimatePresence>
        {activeJobApply && (
          <>
            {/* Backdrop */}
            <motion.div
              id="apply-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetApplicationWorkflow}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            >
              {/* Modal Container */}
              <motion.div
                id="apply-modal-container"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/80 backdrop-blur-3xl rounded-3xl overflow-hidden max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/50 flex flex-col justify-between"
              >
                {/* Header bar */}
                <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold bg-primary-100 text-primary-600 px-2 rounded uppercase">
                      Careers Portal
                    </span>
                    <h2 className="font-display font-extrabold text-slate-900 text-lg mt-1">
                      {activeJobApply.title}
                    </h2>
                  </div>
                  <button
                    id="apply-modal-close"
                    onClick={resetApplicationWorkflow}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-150 cursor-pointer"
                    aria-label="Close Apply Form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 text-left select-text">
                  <AnimatePresence mode="wait">
                    {!hasAppliedSuccessfully ? (
                      /* Phase 1: Input Form */
                      <motion.form
                        id="job-application-form"
                        onSubmit={handleApplySubmit}
                        key="apply-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="appl-name" className="text-xs font-mono text-slate-500 uppercase font-bold">
                              Full Name *
                            </label>
                            <input
                              id="appl-name"
                              type="text"
                              required
                              placeholder="Alex Carter"
                              value={applicantName}
                              onChange={(e) => setApplicantName(e.target.value)}
                              className="w-full bg-white text-slate-800 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor="appl-email" className="text-xs font-mono text-slate-500 uppercase font-bold">
                              Email Address *
                            </label>
                            <input
                              id="appl-email"
                              type="email"
                              required
                              placeholder="alex@example.com"
                              value={applicantEmail}
                              onChange={(e) => setApplicantEmail(e.target.value)}
                              className="w-full bg-white text-slate-800 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="appl-portfolio" className="text-xs font-mono text-slate-500 uppercase font-bold">
                            Portfolio or LinkedIn Profile Link
                          </label>
                          <input
                            id="appl-portfolio"
                            type="url"
                            placeholder="https://github.com/alexcarter"
                            value={applicantPortfolio}
                            onChange={(e) => setApplicantPortfolio(e.target.value)}
                            className="w-full bg-white text-slate-800 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="appl-resume" className="text-xs font-mono text-slate-500 uppercase font-bold">
                            Brief Resume details or Cover Note *
                          </label>
                          <textarea
                            id="appl-resume"
                            rows={4}
                            required
                            placeholder="Draft key timeline items, years with Spring Boot/React, and why you are looking to join our squads..."
                            value={applicantResume}
                            onChange={(e) => setApplicantResume(e.target.value)}
                            className="w-full bg-white text-slate-800 text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:outline-none resize-none"
                          />
                        </div>

                        <div className="text-[11px] text-slate-400 font-sans">
                          By submitting, you agree that your mock resume metrics remain static logs for review. No cookies are stored.
                        </div>

                        <button
                          id="submit-appl-trigger"
                          type="submit"
                          className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-xl transition-colors cursor-pointer mt-4"
                        >
                          <span>Submit Application</span>
                          <Send className="w-4 h-4 text-accent-400" />
                        </button>
                      </motion.form>
                    ) : (
                      /* Phase 2: Thank You state */
                      <motion.div
                        id="apply-success-sheet"
                        key="success-sheet"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-8 text-center space-y-4"
                      >
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h3 className="font-display font-extrabold text-slate-900 text-lg">
                          Mock Application Saved Successfully!
                        </h3>
                        <p className="text-slate-500 text-sm font-sans max-w-sm mx-auto leading-relaxed">
                          Thank you, <strong>{applicantName}</strong>. Your mock application submission for the position of <strong>{activeJobApply.title}</strong> has been logged in local state safely.
                        </p>
                        <div className="pt-4">
                          <button
                            id="apply-success-dismiss"
                            onClick={resetApplicationWorkflow}
                            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl cursor-pointer"
                          >
                            Dismiss Window
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
