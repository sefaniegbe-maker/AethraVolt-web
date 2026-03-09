import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Globe, ChevronDown, Menu, X, ArrowRight, Zap, Leaf, BarChart3, Shield, Cpu, Cloud, MapPin, Mail, ChevronRight } from 'lucide-react';

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
    <span ref={ref} className="font-mono font-bold">
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
    { name: '产品中心', href: '#products' },
    { name: '案例中心', href: '#cases' },
    { name: '关于我们', href: '#about' },
    { name: '联系我们', href: '#contact' },
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
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-black/70 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 z-50">
          <span className="font-bold text-2xl tracking-wider text-white">
            Aethra<span className="text-[#0066FF]">Volt</span>
          </span>
          <span className="hidden md:inline-block mx-2 text-white/50">|</span>
          <span className="hidden md:inline-block text-lg text-white/90 font-medium">合擎源动</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#00C853] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white"
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
                  className="absolute right-0 top-full mt-2 w-32 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl py-2 overflow-hidden backdrop-blur-xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                        language === lang.code ? 'text-[#0066FF] font-bold' : 'text-white/80'
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
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex gap-3 flex-wrap">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      language === lang.code ? 'bg-[#0066FF] text-white border-[#0066FF]' : 'border-white/20 text-white/60'
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
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/14/38863-421566835_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
            <span className="text-sm font-medium text-white/90 tracking-wide">AI-Driven Energy Autonomy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            AI驱动能源自主 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C853]">
              定义零碳新质生产力
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm">
            用AI重构区域能源体系，打造绿色的零碳新质生产力。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)]">
              探索解决方案 <ArrowRight size={18} />
            </a>
            <a href="#about" className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-all backdrop-blur-md">
              了解我们
            </a>
          </div>
        </motion.div>

        {/* Data Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto"
        >
          {[
            { label: '聚合管理绿色能源', value: 1, suffix: 'GW+', desc: '分布式优质负荷' },
            { label: '节约能源成本', value: 1, suffix: '亿+', desc: '美元累计创造' },
            { label: '等效减少碳排放', value: 100, suffix: '万吨', desc: 'CO₂减排量' },
            { label: '全球化布局', value: 6, suffix: '国', desc: '业务覆盖网络' }
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-[#00C853] mb-1">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Products Section ---
const Products = () => {
  const [filter, setFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: '全部' },
    { id: 'device', label: '智能设备' },
    { id: 'software', label: '软件系统' },
    { id: 'solution', label: '解决方案' }
  ];

  const products = [
    { id: 1, category: 'device', name: 'AethraEdge', desc: '边缘能量控制器，毫秒级响应' },
    { id: 2, category: 'software', name: 'AethraGrid', desc: '能源管理云平台，全局优化' },
    { id: 3, category: 'solution', name: '零碳工厂整体解决方案', desc: '端-边-云一体化建设' },
    { id: 4, category: 'software', name: 'AethraPilot', desc: 'AI智能控制模块，自适应调节' },
    { id: 5, category: 'software', name: '擎苍AethraCore', desc: '能源中枢大模型，智能决策' }
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="products" className="py-24 bg-[#050505] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">1+5 多维产品矩阵</h2>
          <p className="text-white/60 max-w-2xl mx-auto">以 AethraCore AI 模型为核心，端-边-云架构驱动能源数字化转型</p>
        </div>

        {/* 6-Dimension System */}
        <div className="mb-24">
          <h3 className="text-xl font-bold text-white mb-8 text-center">六维建设体系 (对标零碳工厂评价规范)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['科学算碳', '源头减碳', '过程脱碳', '智能控碳', '协同降碳', '抵消披露'].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 text-center hover:border-[#00C853]/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#00C853]/10 flex items-center justify-center mb-4 text-[#00C853]">
                  <Leaf size={20} />
                </div>
                <div className="text-white font-medium">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter & Products */}
        <div className="mb-24">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id ? 'bg-white text-black' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#0066FF]/50 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 transition-transform">
                    {product.category === 'device' ? <Cpu /> : product.category === 'software' ? <Cloud /> : <Shield />}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                  <p className="text-white/60 text-sm">{product.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3 Brand Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 text-center">三大品牌服务</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Aethra·臻电™', desc: '主动式电能治理，保障生产大动脉稳定运行。', icon: <Zap size={24} />, color: 'from-blue-500/20 to-transparent', border: 'hover:border-blue-500/50' },
              { name: 'Aethra·驭能™', desc: 'AI驱动的能源自动驾驶，实现源网荷储协同。', icon: <Cpu size={24} />, color: 'from-green-500/20 to-transparent', border: 'hover:border-green-500/50' },
              { name: 'Aethra·绿擎™', desc: '碳管理与ESG合规，打造国际互认绿色名片。', icon: <Leaf size={24} />, color: 'from-emerald-500/20 to-transparent', border: 'hover:border-emerald-500/50' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl bg-gradient-to-b ${service.color} bg-[#0a0a0a] border border-white/5 ${service.border} transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 group-hover:-rotate-12">
                  {service.icon}
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.name}</h4>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                  了解详情 <ChevronRight size={16} className="ml-1" />
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
const Cases = () => {
  const cases = [
    { id: 1, title: '零碳工厂：光储一体化项目', tag: '光储一体化', img: 'https://picsum.photos/seed/solar/800/600' },
    { id: 2, title: '零碳工厂：绿电+水蓄冷项目', tag: '水蓄冷', img: 'https://picsum.photos/seed/cooling/800/600' },
    { id: 3, title: '零碳园区：光伏+污水处理项目', tag: '污水处理', img: 'https://picsum.photos/seed/water/800/600' },
    { id: 4, title: '零碳园区：德国光储充一体化项目', tag: '海外标杆', img: 'https://picsum.photos/seed/germany/800/600' }
  ];

  return (
    <section id="cases" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">案例中心</h2>
            <p className="text-white/60 max-w-xl">全球化标杆项目，见证零碳新质生产力的落地与价值创造。</p>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
            查看全部案例
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/20 text-[#00C853] text-xs font-medium backdrop-blur-md mb-3 border border-[#00C853]/30">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  探索项目细节 <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00C853]/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">关于合擎源动</h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              成立于2017年加州，2025年设立深圳总部。我们聚焦低碳绿色能源、能源精益运营、ESG价值创造。
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              以优质负荷为核心，以AI为引擎，致力于成为全球领先的零碳新质生产力运营商。我们的使命是用可再生能源与AI技术驱动能源低碳未来。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-[#0066FF] mb-2">2017</div>
                <div className="text-sm text-white/60">创立于美国加州</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-[#00C853] mb-2">2025</div>
                <div className="text-sm text-white/60">设立中国深圳总部</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center animate-[spin_60s_linear_infinite]">
              {/* Global Layout Visualization */}
              <Globe size={120} className="text-white/10 absolute" />
              
              {[
                { name: '深圳', angle: 0, radius: 140 },
                { name: '美国', angle: 60, radius: 160 },
                { name: '德国', angle: 120, radius: 130 },
                { name: '泰国', angle: 180, radius: 150 },
                { name: '越南', angle: 240, radius: 140 },
                { name: '澳大利亚', angle: 300, radius: 160 },
              ].map((loc, idx) => {
                const x = Math.cos((loc.angle * Math.PI) / 180) * loc.radius;
                const y = Math.sin((loc.angle * Math.PI) / 180) * loc.radius;
                return (
                  <div 
                    key={idx}
                    className="absolute w-16 h-16 flex items-center justify-center"
                    style={{ transform: `translate(${x}px, ${y}px) rotate(-${loc.angle}deg)` }}
                  >
                    <div className="flex flex-col items-center animate-[spin_60s_linear_infinite_reverse]">
                      <div className="w-3 h-3 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] mb-2"></div>
                      <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{loc.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="font-bold text-3xl tracking-wider text-white mb-6 block">
              Aethra<span className="text-[#0066FF]">Volt</span>
            </span>
            <p className="text-2xl font-medium text-white/90 mb-6 max-w-md leading-snug">
              用可再生能源与AI技术驱动能源低碳未来
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="mailto:info@aethravolt.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} /> info@aethravolt.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">快速链接</h4>
            <ul className="space-y-4">
              {['首页', '产品中心', '案例中心', '关于我们'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${['home', 'products', 'cases', 'about'][idx]}`} className="text-white/60 hover:text-[#00C853] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">全球总部</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="shrink-0 text-[#0066FF]" />
                <div>
                  <div className="text-white font-medium mb-1">中国·深圳</div>
                  <div className="text-sm">广东省深圳市南山区高新科技园</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="shrink-0 text-[#0066FF]" />
                <div>
                  <div className="text-white font-medium mb-1">美国·加州</div>
                  <div className="text-sm">San Diego, California, USA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 AethraVolt 合擎源动. All rights reserved.</p>
          <div className="flex gap-6">
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
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#0066FF]/30 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Products />
      <Cases />
      <About />
      <Footer />
    </div>
  );
}
