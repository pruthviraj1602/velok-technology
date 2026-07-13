import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight, Linkedin, Twitter, Github, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000); // reset state after 5s
    }
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Client Work', path: '/portfolio' },
    // { name: 'Join Our Team', path: '/careers' },
    { name: 'Get In Touch', path: '/contact' },
  ];

  const services = [
    { name: 'Web Applications', id: 'web-dev' },
    { name: 'Mobile Systems', id: 'mobile-dev' },
    { name: 'Spring Boot APIs', id: 'springboot-dev' },
    { name: 'React Development', id: 'react-dev' },
    { name: 'Cloud & Kubernetes', id: 'cloud-solutions' },
    { name: 'AI & Machine Learning', id: 'ai-solutions' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950/40 backdrop-blur-xl text-slate-300 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Core Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-white">
                <Code2 className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                Velok Technology
              </span>
            </Link>
            <p className="text-gray-100 text-sm leading-relaxed max-w-sm">
              We engineer beautiful, high-efficiency, enterprise-grade software answers. Our modular digital products drive transaction volume and optimize mission-critical cloud workflows securely.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-primary-500 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-accent-500 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-teal-500 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Corporate
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-100 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-primary-500/0 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Pillars */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((srv) => (
                <li key={srv.name}>
                  <Link
                    to="/services"
                    className="group flex items-center text-gray-100 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-accent-500/0 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{srv.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Lead Gen Hook */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Subscribe
            </h4>
            <p className="text-gray-450 text-xs leading-relaxed">
              Sign up for our tech-radar brief on Spring, React, DevOps paradigms, and strategic AI integrations.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/30 text-gray-200 text-sm rounded-xl px-4 py-3 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors pr-10"
                />
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="absolute right-2 top-1.5 p-1.5 text-primary-500 hover:text-accent-500 focus:outline-none transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2 text-emerald-400 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Subscribed! Check your inbox soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="pt-2 text-xs text-gray-100 space-y-1">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                <span>Biruba Mandir, Indraprastha Colony, Peth Vadgoan</span>
              </div>
              {/*<div className="flex items-center space-x-2">*/}
              {/*  <Mail className="w-3.5 h-3.5 text-accent-500 shrink-0" />*/}
              {/*  <span>info@codecrafters.example.com</span>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-100">
          <p>© 2026 Velok Technology Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Enterprise Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
