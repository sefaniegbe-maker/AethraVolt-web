import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Globe, ChevronDown, Menu, X, MapPin, Mail } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState('CN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '核心产品', href: '#product' },
    { name: '案例中心', href: '#cases' },
    { name: '关于我们', href: '#about' },
  ];

  const languages = [
    { code: 'CN', label: '简体中文' },
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
              <span>{language}</span>
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
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs tracking-widest hover:bg-white/10 transition-colors ${
                        language === lang.code ? 'text-[#0066FF]' : 'text-white/70'
                      }`}
                    >
                      {lang.label}
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
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                    className={`px-6 py-2 rounded-full border text-sm tracking-widest ${
                      language === lang.code ? 'bg-white text-black border-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    {lang.label}
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
          background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, rgba(0,200,83,0.05) 40%, transparent 70%)',
        }}
      />

      <motion.div style={{ y, opacity, filter, scale }} className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-60 mix-blend-screen"
        >
          {/* 使用用户上传的视频作为背景 */}
          <source src="/uploaded_video.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2021/08/04/83866-584705244_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          style={{ y: textY, rotateX: textRotateX }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-thin text-white leading-tight mb-8 tracking-wide">
            AI+能源驱动的<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-white to-[#00C853] font-light">
              “零碳新质生产力”运营商
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-widest mb-16 max-w-3xl mx-auto">
            用可再生能源与AI技术驱动能源低碳未来
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#product" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-light tracking-widest transition-all duration-500 backdrop-blur-md relative overflow-hidden group">
              <span className="relative z-10">探索解决方案</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00C853]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a href="#about" className="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent hover:bg-white/5 border border-white/10 text-white font-light tracking-widest transition-all duration-500 backdrop-blur-md">
              了解我们
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Parallax Section Component ---
const ParallaxSection = ({ id, title, subtitle, bgImage, keywords, align = 'left' }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section id={id} ref={ref} className="relative h-screen flex items-center overflow-hidden bg-black">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[130%] -top-[15%] z-0">
        <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
        <div className={`absolute inset-0 bg-gradient-to-r ${align === 'left' ? 'from-black/90 via-black/40 to-transparent' : 'from-transparent via-black/40 to-black/90'}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className={`max-w-2xl ${align === 'right' ? 'ml-auto text-right' : ''}`}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-wide"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl text-white/60 font-light mb-16 tracking-wide"
            >
              {subtitle}
            </motion.p>
          )}
          
          <div className={`flex flex-col gap-10 ${align === 'right' ? 'items-end' : 'items-start'}`}>
            {keywords.map((kw: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-light text-white/80 inline-block pb-2 transition-colors duration-500 group-hover:text-white">
                  {kw.word}
                  <div className={`h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out mt-2 ${align === 'right' ? 'ml-auto' : ''}`}></div>
                </div>
                <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-700 ease-out">
                  <p className="text-white/50 font-light text-lg max-w-md leading-relaxed">
                    {kw.desc}
                  </p>
                </div>
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
  const cases = [
    { title: '光储一体化项目', category: '零碳工厂', img: 'https://picsum.photos/seed/solar1/800/600' },
    { title: '绿电 + 水蓄冷项目', category: '零碳工厂', img: 'https://picsum.photos/seed/cooling1/800/600' },
    { title: '光伏 + 污水处理协同项目', category: '零碳园区', img: 'https://picsum.photos/seed/water1/800/600' },
    { title: '德国光储充一体化农场项目', category: '零碳园区', img: 'https://picsum.photos/seed/germany1/800/600' }
  ];

  return (
    <section id="cases" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">案例中心</h2>
          <p className="text-xl text-white/60 font-light tracking-widest">全球化标杆项目落地</p>
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
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[#00C853] text-sm font-medium tracking-widest mb-3 opacity-80">{item.category}</div>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Data Section ---
const DataSection = () => {
  return (
    <section id="about" className="py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-white tracking-widest mb-6">价值创造</h2>
          <p className="text-xl text-white/40 font-light tracking-widest">用数据定义零碳新质生产力</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-24">
          {[
            { label: '累计运营可再生能源资产', value: 1, suffix: 'GW+' },
            { label: '累计节约电能', value: 5, suffix: '亿度' },
            { label: '累计减少碳排放', value: 30, suffix: '万吨' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="text-6xl md:text-8xl font-thin text-white mb-6 group-hover:text-[#0066FF] transition-colors duration-700">
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
          我们不仅提供能源解决方案，更构建可持续发展的底层能源能力。
        </motion.p>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <span className="font-medium text-2xl tracking-widest text-white mb-8 block">
              Aethra<span className="text-[#0066FF]">Volt</span>
            </span>
            <p className="text-xl font-light text-white/60 mb-8 max-w-md leading-relaxed tracking-wide">
              用可再生能源与AI技术驱动能源低碳未来
            </p>
            <a href="mailto:info@aethravolt.com" className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors font-light tracking-wider">
              <Mail size={16} strokeWidth={1} /> info@aethravolt.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80 mb-8 tracking-widest">快速链接</h4>
            <ul className="space-y-6">
              {['首页', '核心产品', '案例中心', '关于我们'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${['home', 'product', 'cases', 'about'][idx]}`} className="text-white/40 hover:text-white transition-colors font-light tracking-widest text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/80 mb-8 tracking-widest">全球总部</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 text-white/40">
                <MapPin size={18} strokeWidth={1} className="shrink-0 text-white/60 mt-1" />
                <div>
                  <div className="text-white/80 font-light tracking-widest mb-2 text-sm">中国 · 深圳</div>
                  <div className="text-xs font-light tracking-wider leading-relaxed">广东省深圳市南山区<br/>清华信息港科研楼</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/40">
                <MapPin size={18} strokeWidth={1} className="shrink-0 text-white/60 mt-1" />
                <div>
                  <div className="text-white/80 font-light tracking-widest mb-2 text-sm">美国 · 加州</div>
                  <div className="text-xs font-light tracking-wider leading-relaxed">San Diego, California<br/>USA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-light tracking-widest">
          <p>© 2025 AethraVolt 合擎源动. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white/20 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      
      <ParallaxSection 
        id="product"
        title="AethraGrid"
        subtitle="AI能源管理云平台"
        bgImage="https://picsum.photos/seed/energycloud/1920/1080?blur=2"
        align="left"
        keywords={[
          { word: "1+5 产品矩阵", desc: "以 AethraCore AI 模型为核心，端-边-云架构驱动能源数字化转型。" },
          { word: "六维建设体系", desc: "科学算碳、源头减碳、过程脱碳、智能控碳、协同降碳、抵消披露。" }
        ]}
      />

      <CasesSection />

      <DataSection />
      <Footer />
    </div>
  );
}
