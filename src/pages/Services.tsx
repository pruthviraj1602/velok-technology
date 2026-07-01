import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Laptop,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Terminal,
  MessagesSquare
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

// Helper maps
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Laptop: Laptop,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Atom: Layers,
  Cloud: Cloud,
  Sparkles: Sparkles
};

// Maps service IDs to stock images
const ImageMap: { [key: string]: string } = {
  'web-dev': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'mobile-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
  'springboot-dev': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  'react-dev': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
  'cloud-solutions': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  'ai-solutions': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80'
};

export default function Services() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden bg-slate-950/80 border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute left-1/4 bottom-1/4 w-[350px] h-[350px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-primary-400 px-3 py-1 rounded-full text-xs font-mono"
          >
            <span>Our Technical Offerings</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Enterprise Technical Services
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Discover detailed insights and architectural frameworks of our custom web/backend designs, Kubernetes alignments, and smart AI models.
          </p>
        </div>
      </section>

      {/* Services Grid Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((srv, index) => {
            const IconComp = IconMap[srv.iconName] || Laptop;
            const srvImage = ImageMap[srv.id] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
            const isEven = index % 2 === 0;

            return (
              <div
                id={`srv-detail-card-${srv.id}`}
                key={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 ${
                  index !== SERVICES_DATA.length - 1 ? 'border-b border-slate-100' : ''
                }`}
              >
                {/* Text Block Column */}
                <div className={`lg:col-span-7 space-y-6 text-left ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-11 h-11 rounded-lg bg-gradient-to-tr ${srv.colorClass} flex items-center justify-center`}>
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Core Technology Pillar
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-1000 tracking-tight leading-tight">
                    {srv.title}
                  </h2>

                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans">
                    {srv.longDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Key Technical Advantages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {srv.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs sm:text-sm font-sans">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badge set */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {srv.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-semibold glass-badge text-slate-750 px-3 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cover Image Column */}
                <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-square lg:aspect-[4/3] bg-slate-100 border border-slate-200">
                    <img
                      referrerPolicy="no-referrer"
                      src={srvImage}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust reassurance banner */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Avoid Obsolete Tech Debt Pathways
          </h2>
          <p className="text-slate-600 text-sm font-sans leading-relaxed">
            Many managers hire generic freelancers or rely on unreviewed code plugins to boot their corporate tools, only to observe them freeze under user traffic surges. We assemble optimized microflows, secure caching, and isolated containers to protect our partners from structural losses.
          </p>

          <div className="pt-4">
            <Link
              id="services-to-contact"
              to="/contact"
              className="inline-flex items-center space-x-2 bg-slate-950 hover:bg-slate-850 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Speak to our System Engineers</span>
              <ArrowRight className="w-4 h-4 text-accent-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
