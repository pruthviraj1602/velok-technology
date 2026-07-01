import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Laptop,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  Zap,
  Globe2,
  Calendar,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA, TEAM_DATA } from '../data/companyData';

// Helper to match string names to Lucide Icon components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Laptop: Laptop,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Atom: Layers, // Map Atom to Layers for Lucide compliance
  Cloud: Cloud,
  Sparkles: Sparkles
};

export default function Home() {
  // Statistical Counter States
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [expYears, setExpYears] = useState(0);

  // Testimonials slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Increment metrics triggers
  useEffect(() => {
    const timer = setTimeout(() => {
      if (projectCount < 50) setProjectCount((prev) => prev + 2);
      if (clientCount < 20) setClientCount((prev) => prev + 1);
      if (expYears < 5) setExpYears((prev) => prev + 1);
    }, 40);
    return () => clearTimeout(timer);
  }, [projectCount, clientCount, expYears]);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  // Tech stack items for showcase badges
  const techStack = [
    { name: 'Java', color: 'bg-red-50 text-red-600 border-red-200' },
    { name: 'Spring Boot', color: 'bg-green-50 text-green-600 border-green-200' },
    { name: 'React', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    { name: 'Angular', color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { name: 'AWS', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { name: 'Docker', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { name: 'Kubernetes', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { name: 'MySQL', color: 'bg-cyan-50 text-cyan-600 border-cyan-200' }
  ];

  // Why Choose Us array
  const keyBenefits = [
    {
      title: 'Experienced Team',
      description: 'Our engineers carry senior-level tenure from international tech consulting labs.',
      icon: Users,
      color: 'text-blue-500 bg-blue-50'
    },
    {
      title: 'Modern Technologies',
      description: 'We code exclusively with modern stacks, bypassing obsolete tech-debt patterns.',
      icon: Zap,
      color: 'text-cyan-500 bg-cyan-50'
    },
    {
      title: 'Agile Development',
      description: 'Weekly iteration reviews, transparent issue boards, and complete product control.',
      icon: Compass,
      color: 'text-emerald-500 bg-emerald-50'
    },
    {
      title: 'Quality Assurance',
      description: 'Automated unit profiling, security scans, and continuous deployment testing.',
      icon: ShieldCheck,
      color: 'text-indigo-500 bg-indigo-50'
    },
    {
      title: 'Timely Delivery',
      description: 'Rigorous timeline scaffolding and checkpoint gates ensure product shipments land on plan.',
      icon: Calendar,
      color: 'text-pink-500 bg-pink-50'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated critical escalation channels to watch cloud health and microservice grids.',
      icon: Globe2,
      color: 'text-violet-500 bg-violet-50'
    }
  ];

  return (
    <div className="pt-20">
      {/* SECTION 1: HERO CONTAINER (Full-length layout with tech nodes) */}
      <section id="hero-section" className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#fcfdfe]">
        {/* Subtle decorative grid cells in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        
        {/* Abstract glowing spotlights */}
        <div className="absolute left-[10%] top-[15%] w-72 h-72 bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-[15%] bottom-[15%] w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading Copy & Actions */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-100 text-primary-600 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Enterprise Digital Transformation Specialists</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]"
              >
                Next-Gen <br />
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Enterprise Software
                </span> <br />
                For Global Growth
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans"
              >
                Velok Technology architectures support complex transaction grids, modular frontend single-pages, and containerized scale-out environments. We turn abstract specifications into resilient, business-building platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  id="hero-get-started"
                  to="/services"
                  className="inline-flex items-center space-x-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-slate-950/10 hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 text-accent-400" />
                </Link>
                <Link
                  id="hero-contact-us"
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  <span>Get in Touch</span>
                </Link>
              </motion.div>

              {/* Trusted partner trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Technologies:</span>
                <div className="flex flex-wrap gap-2.5">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-mono">Spring Boot</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-mono">React 19</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-mono">AWS Cloud</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-mono">Docker/K8s</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High-fidelity tech graphics mockup with frosted glass cards */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md bg-white/40 backdrop-blur-2xl p-6 rounded-3xl border border-white/50 shadow-2xl z-10"
              >
                {/* Visual mockup Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/30">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">system_node_live.yaml</span>
                </div>

                {/* Simulated Server/App Node Code lines block */}
                <div className="pt-4 space-y-4 font-mono text-xs text-slate-700 leading-relaxed text-left">
                  <div className="p-3 bg-white/60 backdrop-blur-md rounded-xl space-y-1 border border-white/50">
                    <span className="text-[#a855f7]">@Configuration</span>
                    <div>
                      <span className="text-[#3b82f6]">export class</span>{' '}
                      <span className="text-emerald-600">EnterpriseCluster</span> {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-indigo-600">private static final</span>{' '}
                      <span className="text-amber-600">PORT = 3000;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#10b981]">isAlive() == true;</span>
                    </div>
                    {'}'}
                  </div>

                  {/* Active telemetry cards showing premium craft details */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm">
                      <span className="text-slate-400 text-[10px] uppercase font-semibold">Microflows</span>
                      <div className="text-lg font-bold text-slate-800 tracking-tight">15k/sec</div>
                      <span className="text-[10px] text-emerald-600">● Optimal speed</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm">
                      <span className="text-slate-400 text-[10px] uppercase font-semibold">Active Hosts</span>
                      <div className="text-lg font-bold text-slate-800 tracking-tight">99.99%</div>
                      <span className="text-[10px] text-cyan-600">● 4 Nodes Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Backing decorative floating icons with subtle hover-like motion */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg pointer-events-none"
              >
                <Cloud className="w-8 h-8" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-8 -left-6 w-14 h-14 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg pointer-events-none"
              >
                <Cpu className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT PREVIEW (Static counters and core intro) */}
      <section id="about-preview" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest">
                Our Credibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Engineering Long-Term Digital Value
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                 Velok Technology was established to bridge the gap between complex software parameters and seamless product execution. We believe structured development pipelines are not an extra expense, but rather the cornerstone of any scalable modern corporation.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-750 text-sm font-sans">
                    <strong>Zero Outages Policy</strong>: Redundant cloud clustering secures product workflows.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-750 text-sm font-sans">
                    <strong>Transparent Metrics</strong>: Live development dashboard access granted securely to every corporate partner.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  id="about-cta-link"
                  to="/about"
                  className="inline-flex items-center text-sm font-bold text-primary-500 hover:text-primary-650 group transition-colors"
                >
                  <span>More About Our Organization</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right statistics grid columns */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass-card-hover text-center space-y-2 shadow-xs">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                  {projectCount}+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 font-sans">Projects Completed</div>
              </div>
              <div className="p-6 rounded-2xl glass-card-hover text-center space-y-2 shadow-xs">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-indigo-600 animate-pulse">
                  {clientCount}+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 font-sans">Enterprise Clients</div>
              </div>
              <div className="p-6 rounded-2xl glass-card-hover text-center space-y-2 shadow-xs">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent-500">
                  {expYears}+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 font-sans">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES (Clean grid) */}
      <section id="services-grid" className="py-24 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest text-center block">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight text-center">
              Our Professional IT Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
              Our engineering squads focus on technical excellence, compiling components designed to minimize latency, protect user access, and scale immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => {
              const IconComp = IconMap[srv.iconName] || Laptop;
              return (
                <div
                  id={`srv-home-card-${srv.id}`}
                  key={srv.id}
                  className="glass-card-hover rounded-2xl p-6.5 text-left group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${srv.colorClass} flex items-center justify-center`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-primary-500 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {srv.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 font-sans">
                      {srv.techStack.slice(0, 3).join(' • ')}
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-primary-500 flex items-center group-hover:text-accent-500 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section id="why-choose-us" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-widest text-center block">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight text-center">
              Why Corporate Leaders Choose Code Crafters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
              Building standard solutions is easy. We focus heavily on the microscopic details of high-stability enterprise execution:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((item, idx) => {
              const BenefComp = item.icon;
              return (
                <div
                  id={`benefit-card-${idx}`}
                  key={item.title}
                  className="glass-card-hover p-6 rounded-2xl text-left"
                >
                  <div className={`w-11 h-11 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                    <BenefComp className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-display font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS/TECHNOLOGY BADGES */}
      <section id="technology-showcase" className="py-20 bg-slate-50/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest text-center block">
            Engineered Integrations
          </span>
          <h2 className="text-xl font-display font-semibold text-slate-800 tracking-tight text-center">
            Optimized for Modern Tech Scaffolding
          </h2>

          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <span
                id={`tech-badge-${tech.name.replace(' ', '')}`}
                key={tech.name}
                className={`px-4.5 py-2 rounded-xl text-sm font-semibold border ${tech.color} shadow-2xs font-sans hover:-translate-y-0.5 transition-transform cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIAL SLIDER */}
      <section id="testimonials-slider-section" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest text-center block mb-4">
            Partner Feedback
          </span>
          <h2 className="text-3xl text-center font-display font-extrabold text-slate-900 tracking-tight mb-16">
            Trusted by Modern CTOs and Founders
          </h2>

          <div className="relative glass-card rounded-3xl p-8 sm:p-12">
            {/* Absolute quote background icon */}
            <Quote className="absolute right-8 top-8 w-24 h-24 text-gray-200/50 pointer-events-none" />

            <div className="min-h-[180px] flex flex-col justify-between text-left">
              <div className="space-y-4">
                {/* Visual rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIALS_DATA[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Review citation */}
                <p className="text-slate-700 text-base sm:text-lg italic font-sans leading-relaxed">
                  "{TESTIMONIALS_DATA[currentTestimonial].content}"
                </p>
              </div>

              {/* Reviewer bio */}
              <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-slate-150">
                <img
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  src={TESTIMONIALS_DATA[currentTestimonial].image}
                  alt={TESTIMONIALS_DATA[currentTestimonial].name}
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {TESTIMONIALS_DATA[currentTestimonial].name}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans">
                    {TESTIMONIALS_DATA[currentTestimonial].role} at{' '}
                    <strong className="text-slate-700">{TESTIMONIALS_DATA[currentTestimonial].company}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Switch controls */}
            <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 flex items-center space-x-2">
              <button
                id="testimonial-prev-trigger"
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-trigger"
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PORTFOLIO HIGHLIGHT (Slight grid showing 3 items) */}
      <section id="portfolio-home-preview" className="py-24 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between text-left gap-4">
            <div className="space-y-4 max-w-xl">
              <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest block">
                Latest Shipments
              </span>
              <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Case Studies From the Field
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Explore real, verified IT engineering solutions launched securely for our active corporate partners.
              </p>
            </div>
            <Link
              id="portfolio-home-view-all"
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <span>View Full Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div
                id={`proj-home-card-${proj.id}`}
                key={proj.id}
                className="glass-card-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    referrerPolicy="no-referrer"
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-primary-500 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  
                  <div className="pt-5 mt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      {proj.timeline}
                    </span>
                    <Link
                      to="/portfolio"
                      className="text-xs font-semibold text-primary-550 inline-flex items-center hover:text-accent-500 transition-colors"
                    >
                      <span>Analysis Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRIMARY CTA */}
      <section id="banner-home-cta" className="relative py-28 overflow-hidden bg-slate-950/85 border-t border-white/10">
        {/* Abstract futuristic grid backing */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        {/* Soft cyan spot layer */}
        <div className="absolute -left-1/4 -top-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-1/4 -bottom-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-accent-400 px-3.5 py-1.5 rounded-full text-xs font-mono"
          >
            <span>Have a technical blueprint ready?</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Our cloud specialists and frontend architects are prepared to draft high-efficiency strategies tailored around your transaction loads.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Link
              id="cta-bottom-started"
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-primary-500/15 pointer-events-auto cursor-pointer"
            >
              <span>Get Free Quotation</span>
              <ArrowRight className="w-5 h-5 text-accent-200" />
            </Link>
            <Link
              id="cta-bottom-team"
              to="/careers"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-750 text-white font-semibold text-base px-8 py-4 rounded-xl border border-slate-700 shadow-sm pointer-events-auto cursor-pointer"
            >
              <span>Join As Engineer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
