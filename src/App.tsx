import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="application-root-wrapper" className="flex flex-col min-h-screen bg-[#F8FAFC]/90 relative overflow-x-hidden select-text">
        {/* Floating Mesh Gradient Background Elements for Frosted Glass Effect */}
        <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/70 rounded-full blur-[130px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-cyan-100/70 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed top-[40%] right-[-5%] w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-[30%] left-[-5%] w-[450px] h-[450px] bg-teal-50/50 rounded-full blur-[110px] pointer-events-none z-0" />

        {/* Sticky Header Layer */}
        <Navbar />

        {/* Dynamic Route Container */}
        <main className="flex-grow relative z-10 select-text">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback pattern */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Corporate Footer Layer */}
        <Footer />
      </div>
    </Router>
  );
}

