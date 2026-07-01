import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Menu, X, ArrowRight, Layers } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle transparent to blurred white transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-md py-4'
            : 'bg-white/10 backdrop-blur-sm py-6 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              id="logo-link"
              to="/"
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide bg-gradient-to-r from-gray-900 via-primary-700 to-primary-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                VELOK
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  id={`nav-link-${link.path.replace('/', 'home')}`}
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-medium text-sm transition-colors duration-200 rounded-lg select-none focus:outline-none ${
                      isActive
                        ? 'text-primary-500'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Action Call Button on Navbar */}
            <div className="hidden md:block">
              <Link
                id="header-cta-button"
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button
                id="mobile-drawer-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay and Container */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-drawer-container"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl border-l border-gray-100 z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-white">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-display font-medium text-lg leading-none">Code Crafters</span>
                </div>
                <button
                  id="mobile-drawer-close"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="flex flex-col space-y-2 flex-grow overflow-y-auto">
                {navLinks.map((link) => (
                  <NavLink
                    id={`mobile-nav-link-${link.path.replace('/', 'home')}`}
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 ${
                        isActive
                          ? 'bg-primary-50 text-primary-500 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Bottom Drawer Call-to-action */}
              <div className="mt-auto border-t border-gray-100 pt-6">
                <Link
                  id="mobile-drawer-cta"
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-base px-5 py-3 rounded-xl shadow-md shadow-primary-500/10 hover:opacity-95"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-4 text-center text-xs text-gray-400 font-mono">
                  © 2026 Code Crafters Services
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
