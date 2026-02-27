import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useLanguage } from '../contexts/LanguageContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.cases'), path: '/cases' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'CN', label: '简体中文' },
    { code: 'EN', label: 'English' },
    { code: 'DE', label: '德语' },
    { code: 'VN', label: '越南语' },
    { code: 'TH', label: '泰国语' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-paper selection:bg-accent selection:text-white">
      {/* Navigation */}
      <header
        className={clsx(
          'fixed w-full z-50 transition-all duration-500 ease-in-out border-b',
          isScrolled 
            ? 'bg-paper/90 backdrop-blur-md border-stone-200 py-4' 
            : 'bg-paper border-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            {/* Animated Logo Container */}
            <div className="flex items-center overflow-hidden h-10">
              <motion.div 
                layout
                className="flex items-center justify-center font-serif font-bold text-2xl text-ink shrink-0 z-10"
              >
                A
              </motion.div>
              
              <div className="relative flex items-center">
                <AnimatePresence mode="wait">
                  {isScrolled ? (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: 'auto' }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col ml-1 overflow-hidden whitespace-nowrap"
                    >
                      <span className="font-serif font-bold text-xl leading-none tracking-tight text-ink">ethraVolt</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="short"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.3 }}
                      className="ml-0.5"
                    >
                      <span className="font-serif font-bold text-2xl tracking-tight text-ink">E</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-stone-600 hover:text-ink transition-colors relative group"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full border border-stone-200 hover:bg-white transition-colors text-stone-600"
              >
                <Globe size={14} />
                <span>{language}</span>
                <ChevronDown size={12} />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-stone-100 py-2 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={clsx(
                          "w-full text-left px-4 py-2 text-sm hover:bg-paper transition-colors",
                          language === lang.code ? "text-accent font-bold" : "text-ink"
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-paper pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-serif text-ink">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="border-b border-stone-200 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <div className="text-sm text-stone-500 mb-3 font-sans">Language</div>
                <div className="flex gap-3 flex-wrap">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={clsx(
                        "px-4 py-2 rounded-full border text-sm font-sans",
                        language === lang.code 
                          ? "bg-ink text-white border-ink" 
                          : "border-stone-300 text-stone-600"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-200 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white mb-4">
                <span className="font-serif font-bold text-2xl">AethraVolt</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed whitespace-pre-line font-sans">
                {t('footer.desc')}
              </p>
            </div>

            <div>
              <h3 className="text-white font-serif text-lg mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3 text-sm font-sans text-stone-400">
                <li><Link to="/products" className="hover:text-white transition-colors">{t('nav.products')}</Link></li>
                <li><Link to="/cases" className="hover:text-white transition-colors">{t('nav.cases')}</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif text-lg mb-6">{t('footer.solutions')}</h3>
              <ul className="space-y-3 text-sm font-sans text-stone-400">
                <li><Link to="/products" className="hover:text-white transition-colors">{t('home.solutions.solar')}</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">{t('home.solutions.ai')}</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">{t('home.solutions.trading')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif text-lg mb-6">{t('footer.contact')}</h3>
              <ul className="space-y-4 text-sm font-sans text-stone-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>{t('footer.address')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0" />
                  <span>+86 755 8888 6666</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0" />
                  <span>contact@aethravolt.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-sans">
            <p>{t('footer.rights')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-white transition-colors">粤ICP备20250000号</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
