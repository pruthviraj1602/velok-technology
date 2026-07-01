import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Users, RefreshCw, Milestone, Mail, Linkedin, Github } from 'lucide-react';
import { TEAM_DATA } from '../data/companyData';

export default function About() {
  const storyEvents = [
    {
      year: '2026',
      title: 'Our Organization Founding',
      description: 'Velok Technology kicks off operations with three senior engineers aiming to resolve difficult legacy server-side bottlenecks.'
    }
  ];

  const coreValues = [
    {
      title: 'Absolute Alignment',
      description: 'We build exactly to specifications. No unauthorized design modifications, no unrequested feature creep, just precise execution.',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Engineering Honor',
      description: 'We reject temporary spaghetti code. We write well-documented, clean TypeScript types and enterprise-ready Spring microflows.',
      icon: Target,
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      title: 'Extreme Security',
      description: 'All system parameters are sanitized. We isolate private keys, enforce JWT routines, and perform regular penetration audits.',
      icon: Eye,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: 'Radical Cooperation',
      description: 'Every client partner secures premium visibility with real-time access to our repository boards and continuous-delivery progress panels.',
      icon: RefreshCw,
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header banner */}
      <section className="relative py-24 overflow-hidden bg-slate-950/80 border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-1/4 top-1/4 w-[350px] h-[350px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-accent-400 px-3 py-1 rounded-full text-xs font-mono"
          >
            <span>Learn Our Credentials</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Our Organization Story
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Founded on transparency, high-availability architecture, and rigorous quality limits. Discover what fuels Velok Technology.
          </p>
        </div>
      </section>

      {/* Story Introduction Block */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual branding illustration screen */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100 border border-slate-100">
              <img
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Code Crafters Engineering Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-mono text-xs">● Velok Technology Innovation Workspace</span>
              </div>
            </div>

            {/* Main story description */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-mono font-bold text-primary-500 uppercase tracking-widest">
                Our Genesis
              </span>
              <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Established to Build Code That Endures
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Velok Technology was born out of frustration with temporary codebases that collapse under sudden load spikes. Our founders recognized that modern business software cannot operate as an unmonitored collection of plugins.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We design and support custom setups using native compilers, secure database triggers, and robust TypeScript typing. By mapping complete structural blueprints ahead of our build sprints, we bypass technical failures entirely, saving organizations from millions in recovery overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Bento section */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Mission Card */}
            <div className="glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">Our Strategic Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                To construct high-performance digital products and cloud execution frameworks that allow corporations to capture transaction volume, optimize processes, and manage their databases with absolute integrity and confidence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">Our Future Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                To stand as the premier independent engineering partner of choice for ambitious software leaders globally—providing premium solutions backed by reliable Spring, React, DevOps, and strategic AI pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest block">
              Our Principles
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Our Core Engineering Standards
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              These shared guidelines guide our team through difficult architectural tradeoffs, ensuring every codebase we ship complies with executive security, readability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val) => {
              const ValIcon = val.icon;
              return (
                <div
                  id={`value-card-${val.title.toLowerCase().replace(' ', '-')}`}
                  key={val.title}
                  className="glass-card-hover p-6 rounded-2xl text-left"
                >
                  <div className={`w-11 h-11 rounded-lg ${val.color} flex items-center justify-center mb-4`}>
                    <ValIcon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50/40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block">
              The Roadmap
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Our Engineering Timeline
            </h2>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              We did not scale to an enterprise software partner overnight. We grew and improved our systems step-by-step:
            </p>
          </div>

          {/* Core Timeline Grid */}
          <div className="relative text-left border-l-2 border-slate-200 pl-6 ml-4 space-y-12">
            {/* Absolute indicator line cover overlay */}
            <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary-500 via-cyan-400 to-transparent" />

            {storyEvents.map((evt, index) => (
              <div id={`timeline-evt-${evt.year}`} key={evt.year} className="relative space-y-2">
                {/* Bullet node dot indicator */}
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary-500 shadow-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                </div>

                <div className="flex items-center space-x-3.5">
                  <span className="font-mono text-sm sm:text-base font-bold bg-gradient-to-r from-primary-500 to-cyan-500 bg-clip-text text-transparent">
                    {evt.year}
                  </span>
                  <h3 className="font-display font-bold text-slate-950 text-base sm:text-lg">
                    {evt.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest block">
              The Stewards
            </span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Our Executive Leadership
            </h2>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              Meet the software stewards and engineers guiding our client execution pipelines with decades of collective industry competence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_DATA.map((tm) => (
              <div
                id={`team-card-${tm.id}`}
                key={tm.id}
                className="glass-card-hover rounded-3xl overflow-hidden text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                    <img
                      referrerPolicy="no-referrer"
                      src={tm.image}
                      alt={tm.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5.5 space-y-2">
                    <h3 className="font-display font-extrabold text-slate-900 text-base leading-none">
                      {tm.name}
                    </h3>
                    <p className="text-xs font-mono font-medium text-primary-500">
                      {tm.designation}
                    </p>
                    {/*<p className="text-slate-600 text-xs pt-1.5 leading-relaxed font-sans">*/}
                    {/*  {tm.bio}*/}
                    {/*</p>*/}
                  </div>
                </div>

                <div className="px-5.5 pb-5.5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {tm.skills.slice(0, 2).map((skill) => (
                    <span key={skill} className="text-[10px] bg-slate-205/60 text-slate-600 px-2.5 py-0.5 rounded font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
