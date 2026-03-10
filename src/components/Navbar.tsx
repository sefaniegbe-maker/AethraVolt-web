import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('中');

  const languages = [
    { code: 'zh', label: '中' },
    { code: 'en', label: 'EN' },
    { code: 'th', label: 'TH' },
    { code: 'vi', label: 'VI' },
    { code: 'de', label: 'DE' },
  ];

  const links = [
    { name: '首页', href: '#home' },
    { name: '产品中心', href: '#products' },
    { name: '案例中心', href: '#cases' },
    { name: '关于我们', href: '#about' },
    { name: '联系我们', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Animation */}
        <a href="#home" className="flex items-center gap-2 group relative z-50">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center overflow-hidden">
            <span className="text-[#00E5FF]">A</span>
            <span className="text-[#0066FF]">E</span>
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 180, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex items-center whitespace-nowrap overflow-hidden relative h-8"
                >
                  <motion.div
                    animate={{ x: [180, -180] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute flex items-center"
                  >
                    <span className="text-white">thra</span>
                    <span className="text-[#0066FF]">V</span>
                    <span className="text-white">olt</span>
                    <span className="ml-3 text-xs font-light tracking-widest text-white/70 border-l border-white/20 pl-3">合擎源动</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#00E5FF] transition-colors duration-300 tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Globe size={16} />
              <span>{currentLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-24 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl glass-panel"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.label);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-[#00E5FF] transition-colors tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm ${currentLang === lang.label ? 'text-[#00E5FF]' : 'text-white/50'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
