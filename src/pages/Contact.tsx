import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, Sparkles, Map } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [interest, setInterest] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim() && message.trim()) {
      setMessageSent(true);
      // reset fields after small mock notification
      setFullName('');
      setEmail('');
      setCompanyName('');
      setMessage('');
      setTimeout(() => setMessageSent(false), 6000);
    }
  };

  const officesList = [
    {
      city: 'Kolhapur, India',
      address: 'Biruba Mandir, Indraprastha Colony, Peth Vadgoan',
      phone: '+91 91457 71128',
      hours: 'Mon - Fri: 9 AM - 6 PM PST'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden bg-slate-950/80 border-b border-white/10 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-1/4 top-10 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-accent-400 px-3 py-1 rounded-full text-xs font-mono"
          >
            <span>Get in touch</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Initiate Consultation
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Ready to build? Specify your parameters below to coordinate a free structural review with our Principal Solutions Specialist.
          </p>
        </div>
      </section>

      {/* Main content split panel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form Details Box */}
            <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl text-left relative overflow-hidden select-text">
              <span className="font-mono text-xs font-bold text-primary-500 uppercase tracking-widest block mb-4">
                Consultation Request Form
              </span>
              
              <AnimatePresence mode="wait">
                {!messageSent ? (
                  <motion.form
                    id="contact-consult-form"
                    onSubmit={handleSubmit}
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="cnt-fullname" className="text-xs font-mono text-slate-500 uppercase font-bold">
                          First & Last Name *
                        </label>
                        <input
                          id="cnt-fullname"
                          type="text"
                          required
                          placeholder="Eleanor Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white/50 text-slate-800 text-sm px-4 py-3 rounded-xl border border-white/40 focus:border-primary-500 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="cnt-email" className="text-xs font-mono text-slate-500 uppercase font-bold">
                          Corporate Email Address *
                        </label>
                        <input
                          id="cnt-email"
                          type="email"
                          required
                          placeholder="eleanor@vanguard.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/50 text-slate-800 text-sm px-4 py-3 rounded-xl border border-white/40 focus:border-primary-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="cnt-company" className="text-xs font-mono text-slate-500 uppercase font-bold">
                          Company Name
                        </label>
                        <input
                          id="cnt-company"
                          type="text"
                          placeholder="Vanguard Corp"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-white/50 text-slate-800 text-sm px-4 py-3 rounded-xl border border-white/40 focus:border-primary-500 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5 relative">
                        <label htmlFor="cnt-interest" className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                          Platform Area of Interest
                        </label>
                        <div className="relative">
                          <select
                            id="cnt-interest"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-white/50 text-slate-800 text-sm px-4 py-3 rounded-xl border border-white/40 focus:border-primary-500 focus:outline-none appearance-none pr-10"
                          >
                            <option value="Web Development">Web development</option>
                            {/*<option value="Mobile App Development">Mobile Systems dev</option>*/}
                            <option value="Spring Boot Development">Spring Boot Microservices</option>
                            <option value="React Development">React Frontends</option>
                            <option value="Cloud Solutions">Cloud/CD Topologies</option>
                            <option value="AI Solutions">AI/Vector Indexes</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="cnt-message" className="text-xs font-mono text-slate-500 uppercase font-bold">
                        Detailed Project Objectives / Spec Outlines *
                      </label>
                      <textarea
                        id="cnt-message"
                        rows={5}
                        required
                        placeholder="Detail load limits, expected transaction frequency, hosting preferences (AWS, GCP, hybrid), or standard timelines..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white/50 text-slate-800 text-sm px-4 py-3 rounded-xl border border-white/45 focus:border-primary-500 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit-trigger"
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-850 text-white font-bold text-sm py-4 rounded-xl shadow-lg transition-colors cursor-pointer"
                    >
                      <span>Send Consultation Ticket</span>
                      <Send className="w-4 h-4 text-accent-400" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="contact-success-container"
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl">
                      Consultation Ticket Logged!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for coordinating with us. Your mock consultation parameters have been logged into client state structures safely. A specialist will follow up in 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        id="contact-reset-view"
                        onClick={() => setMessageSent(false)}
                        className="font-semibold text-xs text-primary-500 underline"
                      >
                        File another inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Address Details, Map Blueprint */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
                  Velok Technology
                </h2>
                
                <div className="space-y-6">
                  {officesList.map((office) => (
                    <div
                      id={`office-row-${office.city.toLowerCase().replace(' ', '-')}`}
                      key={office.city}
                      className="p-5.5 rounded-2xl glass-card-hover space-y-3"
                    >
                      <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                        {office.city}
                      </h3>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
                        <div className="flex items-start space-x-2.5">
                          <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2.5">
                          <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2.5">
                          <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimalist Tech Map Placeholder */}
              <div className="p-4 bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-white/90">
                  <div className="flex items-center space-x-2 font-mono text-xs">
                    <Map className="w-4 h-4 text-accent-400" />
                    <span>gps_anchor_nodes.json</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">● GPS Locked</span>
                </div>

                {/* Grid mockup representing headquarters location and coordinate lines */}
                <div className="h-44 bg-[#0a0f1d] rounded-2xl relative border border-slate-800/80 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  
                  {/* Glowing center indicator nodes */}
                  <span className="absolute w-[200px] h-[200px] bg-primary-500/10 rounded-full blur-2xl" />
                  
                  {/* Minimalist target anchor pin */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center animate-bounce">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-400" />
                    </div>
                    <span className="text-[10px] font-mono text-white/85 bg-slate-950 px-2 py-0.5 mt-1 rounded border border-slate-800">
                      Code Crafters HQ CA 94103
                    </span>
                  </div>
                </div>

                {/* Coordinates footer text details */}
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>Lat: 37.7749° N</span>
                  <span>Long: 122.4194° W</span>
                  <span>Alt: 16m</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
