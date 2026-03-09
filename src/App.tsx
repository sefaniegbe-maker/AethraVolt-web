import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Globe, ChevronDown, Menu, X, MapPin, Mail, ArrowRight } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { translations } from './i18n';

// --- Language Context ---
const LanguageContext = createContext({
  lang: '中文',
  t: translations['中文'],
  setLang: (l: string) => {}
});

// --- AnimatedCounter Component ---
const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration / end) * 1000;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-sans font-thin">
      {count}{suffix}
    </span>
  );
};

// --- Navbar Component ---
const Navbar = () => {
  const { lang, t, setLang } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.product, href: '#product' },
    { name: t.nav.cases, href: '#cases' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages = [
    { code: '中文', label: '中文' },
    { code: 'EN', label: 'English' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'VN', label: 'Tiếng Việt' },
    { code: 'TH', label: 'ไทย' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center z-50 group h-10">
          <div className="relative flex items-center h-full">
            <motion.div
              initial={false}
              animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.8 : 1, filter: isScrolled ? 'blur(4px)' : 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 font-medium text-3xl tracking-widest text-white whitespace-nowrap"
              style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
            >
              A<span className="text-[#0066FF]">E</span>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.9, x: isScrolled ? 0 : -20, filter: isScrolled ? 'blur(0px)' : 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium text-xl tracking-widest text-white flex items-center whitespace-nowrap"
              style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
            >
              Aethra<span className="text-[#0066FF]">V</span>olt
              <span className="mx-3 text-white/30 font-light text-sm">|</span>
              <span className="text-sm text-white/80 font-light tracking-widest">合擎源动</span>
            </motion.div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-light tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 text-xs font-light tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white"
            >
              <Globe size={12} />
              <span>{lang}</span>
              <ChevronDown size={10} />
            </button>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-4 w-32 bg-black/80 border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden backdrop-blur-2xl"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs tracking-widest hover:bg-white/10 transition-colors ${
                        lang === l.code ? 'text-[#00E5FF]' : 'text-white/70'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/90 pt-32 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-8 text-2xl font-light tracking-widest text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-white/10 pb-4 hover:text-[#0066FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex gap-4 flex-wrap">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setIsMobileMenuOpen(false); }}
                    className={`px-6 py-2 rounded-full border text-sm tracking-widest ${
                      lang === l.code ? 'bg-white text-black border-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Hero Section ---
const Hero = () => {
  const { t } = useContext(LanguageContext);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const filter = useTransform(scrollY, [0, 600], ['blur(0px)', 'blur(20px)']);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);
  const textRotateX = useTransform(scrollY, [0, 1000], [0, 15]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Mouse Follow Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none z-10 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 200, mass: 0.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)',
        }}
      />

      <motion.div style={{ y, opacity, filter, scale }} className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-80 mix-blend-screen"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/12/38865-421035541_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          style={{ y: textY, rotateX: textRotateX }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-thin text-white leading-tight mb-16 tracking-wide">
            {t.hero.title1}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-white to-[#00E5FF] font-light">
              {t.hero.title2}
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#product" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-light tracking-widest transition-all duration-500 backdrop-blur-md relative overflow-hidden group">
              <span className="relative z-10">{t.hero.btn1}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00E5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a href="#about" className="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent hover:bg-white/5 border border-white/10 text-white font-light tracking-widest transition-all duration-500 backdrop-blur-md">
              {t.hero.btn2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Product Section Component ---
const ProductSection = () => {
  const { t } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const tabs = [
    {
      title: t.product.tab1,
      content: t.product.tab1Desc
    },
    {
      title: t.product.tab2,
      content: t.product.tab2Desc
    }
  ];

  return (
    <section id="product" className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/uploaded_image_8.png" alt="Carbon Asset Management" className="w-full h-full object-cover opacity-40 mix-blend-screen" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
        
        {/* 动态数据可视化特效 */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:flex items-center justify-center">
          {/* 中心发光球体 */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-48 h-48 bg-[#0066FF] rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-64 h-64 bg-[#00E5FF] rounded-full blur-[120px]"
          />

          {/* 动态数据环 */}
          <svg className="absolute w-full h-full" viewBox="0 0 600 600">
            <motion.circle 
              cx="300" cy="300" r="200" 
              fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle 
              cx="300" cy="300" r="250" 
              fill="none" stroke="rgba(0,102,255,0.2)" strokeWidth="2"
              strokeDasharray="100 200"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle 
              cx="300" cy="300" r="150" 
              fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1"
              strokeDasharray="50 50"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>

          {/* 悬浮数据卡片 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[15%] bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-[0_0_30px_rgba(0,102,255,0.15)] w-48"
          >
            <div className="text-xs text-white/60 mb-2 tracking-wider">{t.product.efficiency}</div>
            <div className="text-3xl font-mono text-[#00E5FF] font-light">98.5%</div>
            <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF]" 
                initial={{ width: "0%" }}
                animate={{ width: "98.5%" }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] left-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.15)] w-56"
          >
            <div className="text-xs text-white/60 mb-2 tracking-wider">{t.product.carbon}</div>
            <div className="text-3xl font-mono text-[#0066FF] font-light">1,245.8 <span className="text-sm text-white/40">tCO₂</span></div>
            <div className="flex items-center gap-2 mt-3 text-xs text-[#00E5FF]">
              <ArrowRight size={14} className="-rotate-45" />
              <span>{t.product.compare}</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[40%] left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
            <div className="text-sm text-white/80 tracking-wide">{t.product.ai}</div>
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-wide"
          >
            {t.product.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-white/60 font-light mb-16 tracking-wide"
          >
            {t.product.subtitle}
          </motion.p>
          
          <div className="flex flex-col gap-6">
            {tabs.map((tab, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer border-l-2 border-white/20 pl-6 py-2 hover:border-[#0066FF] transition-colors"
                onClick={() => setActiveTab(activeTab === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <div className={`text-2xl md:text-3xl font-light transition-colors duration-500 ${activeTab === idx ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                    {tab.title}
                  </div>
                  <motion.div
                    animate={{ rotate: activeTab === idx ? 90 : 0 }}
                    className="text-white/40 group-hover:text-white/80"
                  >
                    <ArrowRight strokeWidth={1} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeTab === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/50 font-light text-lg leading-relaxed">
                        {tab.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Cases Section ---
const CasesSection = () => {
  const { t } = useContext(LanguageContext);
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const cases = [
    { 
      title: t.cases.c1, 
      category: t.cases.c1c, 
      img: '/uploaded_image_4.jpg',
      desc: t.cases.c1d
    },
    { 
      title: t.cases.c2, 
      category: t.cases.c2c, 
      img: '/uploaded_image_7.jpg',
      desc: t.cases.c2d
    },
    { 
      title: t.cases.c3, 
      category: t.cases.c3c, 
      img: '/uploaded_image_5.jpg',
      desc: t.cases.c3d
    },
    { 
      title: t.cases.c4, 
      category: t.cases.c4c, 
      img: '/uploaded_image_6.jpg',
      desc: t.cases.c4d
    }
  ];

  return (
    <section id="cases" className="py-32 bg-black relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop" alt="Cases Background" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">{t.cases.title}</h2>
          <p className="text-xl text-white/60 font-light tracking-widest">{t.cases.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setActiveCase(activeCase === idx ? null : idx)}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col justify-end h-full">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#00E5FF] text-sm font-medium tracking-widest mb-3 opacity-80">{item.category}</div>
                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-4">{item.title}</h3>
                  
                  <AnimatePresence>
                    {(activeCase === idx || true) && ( // Always render but control height/opacity via group-hover for CSS-only interaction, or use state for click
                      <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-out">
                        <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Global Map Section ---
const GlobalMapSection = () => {
  const { t } = useContext(LanguageContext);
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  
  const markers = [
    { name: t.map.cn, coordinates: [104.1954, 35.8617] },
    { name: t.map.us, coordinates: [-95.7129, 37.0902] },
    { name: t.map.de, coordinates: [10.4515, 51.1657] },
    { name: t.map.vn, coordinates: [108.2772, 14.0583] },
    { name: t.map.th, coordinates: [100.9925, 15.8700] },
    { name: t.map.au, coordinates: [133.7751, -25.2744] }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop" alt="Map Background" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-white tracking-widest mb-6">{t.map.title}</h2>
          <p className="text-xl text-white/40 font-light tracking-widest">{t.map.subtitle}</p>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto opacity-80">
          <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-auto">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a1a1a"
                    stroke="#333333"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#222", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <motion.circle
                  r={4}
                  fill="#00E5FF"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <circle r={2} fill="#0066FF" />
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: "Inter", fill: "rgba(255,255,255,0.7)", fontSize: "10px", fontWeight: 300 }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

// --- About Us Section ---
const AboutUsSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="about" className="py-32 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop" alt="About Background" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">{t.about.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="mb-12">
              <h3 className="text-[#0066FF] text-sm font-medium tracking-widest mb-4">{t.about.vTitle}</h3>
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                {t.about.vDesc}
              </p>
            </div>
            <div>
              <h3 className="text-[#00E5FF] text-sm font-medium tracking-widest mb-4">{t.about.pTitle}</h3>
              <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
                {t.about.pDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-white/40 text-sm font-medium tracking-widest mb-6 border-b border-white/10 pb-2">{t.about.fTitle}</h3>
              <ul className="space-y-4 text-lg font-light text-white/80">
                <li>{t.about.f1}</li>
                <li>{t.about.f2}</li>
                <li>{t.about.f3}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white/40 text-sm font-medium tracking-widest mb-6 border-b border-white/10 pb-2">{t.about.cTitle}</h3>
              <ul className="space-y-4 text-lg font-light text-white/80">
                <li>{t.about.c1}</li>
                <li>{t.about.c2}</li>
                <li>{t.about.c3}</li>
                <li>{t.about.c4}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Data Section ---
const DataSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="about" className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop" alt="Data Background" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-white tracking-widest mb-6">{t.data.title}</h2>
          <p className="text-xl text-white/40 font-light tracking-widest">{t.data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-24">
          {[
            { label: t.data.s1, value: 1, suffix: 'GW+' },
            { label: t.data.s2, value: 5, suffix: '亿度' },
            { label: t.data.s3, value: 30, suffix: '万吨' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="text-6xl md:text-8xl font-thin text-white mb-6 group-hover:text-[#00E5FF] transition-colors duration-700">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-light tracking-widest text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-xl md:text-2xl text-white/60 font-light tracking-widest max-w-4xl mx-auto"
        >
          {t.data.desc}
        </motion.p>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <span className="font-medium text-2xl tracking-widest text-white mb-8 block">
              Aethra<span className="text-[#0066FF]">V</span>olt
            </span>
            <p className="text-xl font-light text-white/60 mb-8 max-w-md leading-relaxed tracking-wide">
              {t.footer.desc}
            </p>
            <a href="mailto:info@aethravolt.com" className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors font-light tracking-wider">
              <Mail size={16} strokeWidth={1} /> info@aethravolt.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80 mb-8 tracking-widest">{t.footer.links}</h4>
            <ul className="space-y-6">
              {[t.nav.home, t.nav.product, t.nav.cases, t.nav.about].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${['home', 'product', 'cases', 'about'][idx]}`} className="text-white/40 hover:text-white transition-colors font-light tracking-widest text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80 mb-8 tracking-widest">{t.footer.hq}</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 text-white/40">
                <MapPin size={18} strokeWidth={1} className="shrink-0 text-white/60 mt-1" />
                <div>
                  <div className="text-white/80 font-light tracking-widest mb-2 text-sm">{t.footer.sz}</div>
                  <div className="text-xs font-light tracking-wider leading-relaxed whitespace-pre-line">{t.footer.szDesc}</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/40">
                <MapPin size={18} strokeWidth={1} className="shrink-0 text-white/60 mt-1" />
                <div>
                  <div className="text-white/80 font-light tracking-widest mb-2 text-sm">{t.footer.ca}</div>
                  <div className="text-xs font-light tracking-wider leading-relaxed whitespace-pre-line">{t.footer.caDesc}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-light tracking-widest">
          <p>{t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [lang, setLang] = useState('中文');
  const t = translations[lang] || translations['EN'];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-white/20 selection:text-white scroll-smooth">
        <Navbar />
        <Hero />
        
        <ProductSection />

        <CasesSection />

        <DataSection />
        
        <GlobalMapSection />

        <AboutUsSection />

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
