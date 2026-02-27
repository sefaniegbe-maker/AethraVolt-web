import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe2, ShieldCheck, ChevronRight, TrendingUp, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const [news, setNews] = useState<any[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-paper overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-ink tracking-tight"
            >
              {t('home.hero.title')} <br />
              <span className="text-stone-500 italic">{t('home.hero.subtitle')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl font-sans leading-relaxed"
            >
              {t('home.hero.desc')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="btn-primary flex items-center gap-2 group">
                {t('home.hero.cta_explore')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline">
                {t('home.hero.cta_about')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Abstract Visual Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none opacity-60">
           <svg viewBox="0 0 400 800" className="w-full h-full">
             <path d="M200,0 Q300,200 100,400 T200,800" fill="none" stroke="#D97757" strokeWidth="1" className="opacity-30" />
             <path d="M250,0 Q350,200 150,400 T250,800" fill="none" stroke="#191919" strokeWidth="1" className="opacity-10" />
             <defs>
               <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                 <stop offset="0%" style={{stopColor:'#D97757', stopOpacity:1}} />
                 <stop offset="100%" style={{stopColor:'#F4F1EA', stopOpacity:0}} />
               </radialGradient>
             </defs>
             <circle cx="100" cy="400" r="150" fill="url(#grad1)" className="opacity-20 mix-blend-multiply" />
           </svg>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('home.solutions.title')}</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                {t('home.solutions.subtitle')}
              </p>
            </div>
            <Link to="/products" className="text-ink font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
              View all solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('home.solutions.solar'),
                desc: t('home.solutions.solar_desc'),
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: t('home.solutions.ai'),
                desc: t('home.solutions.ai_desc'),
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: t('home.solutions.trading'),
                desc: t('home.solutions.trading_desc'),
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-10 hover:bg-stone-50 transition-colors group">
                <div className="mb-6 text-stone-400 group-hover:text-accent transition-colors">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-8">{item.desc}</p>
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:translate-x-1 transition-transform">
                  {t('home.solutions.learn_more')} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-paper">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('home.benefits.title')}</h2>
            <p className="text-stone-600">{t('home.benefits.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "15%", label: "Save Cash", desc: "Energy Optimization + Peak Shifting" },
              { val: "50%", label: "More Revenue", desc: "Grid Ancillary + Spot Trading" },
              { val: "20%", label: "High Efficiency", desc: "AI Scheduling + Data Driven" },
              { val: "100%", label: "Green Brand", desc: "Carbon Mgmt + Green Power + ESG" },
            ].map((item, i) => (
              <div key={i} className="border-t border-stone-300 pt-6">
                <div className="text-5xl font-serif text-accent mb-4">{item.val}</div>
                <div className="text-lg font-bold text-ink mb-2">{item.label}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section (Dark) */}
      <section className="py-24 bg-stone-900 text-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <div className="text-accent font-medium mb-6 tracking-wide uppercase text-sm">
                {t('home.tech.tag')}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                {t('home.tech.title')} <br />
                <span className="text-stone-500 italic">{t('home.tech.subtitle')}</span>
              </h2>
              <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-xl">
                {t('home.tech.desc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: t('home.tech.stat_accuracy'), value: "95%+" },
                  { label: t('home.tech.stat_speed'), value: "<10ms" },
                  { label: t('home.tech.stat_efficiency'), value: "15%" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-stone-700 pl-6">
                    <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                {/* Abstract Tech Visualization */}
                <div className="absolute inset-0 border border-stone-800 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 border border-stone-800 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border border-stone-800 rounded-full animate-[spin_20s_linear_infinite]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-stone-800 rounded-full flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" />
                     <div className="text-white font-serif italic text-xl relative z-10">Aethra</div>
                   </div>
                </div>

                {/* Data Points */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-stone-800 p-4 rounded-lg border border-stone-700 shadow-xl"
                >
                  <div className="text-xs text-stone-500 mb-1">{t('home.tech.dashboard_power')}</div>
                  <div className="text-xl font-mono text-white">1,245 kW</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-0 bg-stone-800 p-4 rounded-lg border border-stone-700 shadow-xl"
                >
                  <div className="text-xs text-stone-500 mb-1">{t('home.tech.dashboard_carbon')}</div>
                  <div className="text-xl font-mono text-accent">4.2 Ton</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Global Layout & Capital Plan</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Investing 10 Billion RMB over 5 years to build 400+ zero-carbon factories across key global markets.
            </p>
          </div>
          
          <div className="relative w-full aspect-[1.8/1] bg-stone-900 rounded-xl overflow-hidden shadow-2xl">
             {/* Map Background - Refined World Map */}
             <div className="absolute inset-0 opacity-40">
               <svg viewBox="0 0 1000 500" className="w-full h-full fill-stone-700 stroke-stone-800">
                 {/* Simplified World Map Paths */}
                 {/* North America */}
                 <path d="M50,50 L300,50 L250,200 L150,250 L50,150 Z" className="fill-stone-800" />
                 {/* South America */}
                 <path d="M200,250 L300,250 L320,400 L250,480 Z" className="fill-stone-800" />
                 {/* Europe */}
                 <path d="M450,50 L550,50 L550,150 L450,150 Z" className="fill-stone-800" />
                 {/* Africa */}
                 <path d="M450,180 L580,180 L600,350 L500,400 Z" className="fill-stone-800" />
                 {/* Asia */}
                 <path d="M580,50 L900,50 L950,200 L800,300 L600,250 Z" className="fill-stone-800" />
                 {/* Australia */}
                 <path d="M800,320 L950,320 L920,450 L800,420 Z" className="fill-stone-800" />
               </svg>
               <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
             </div>

             {/* Interactive Points */}
             <div className="absolute inset-0 z-10">
                {[
                  { country: "China", city: "Shenzhen (HQ)", x: "78%", y: "35%", active: true },
                  { country: "Vietnam", city: "Ho Chi Minh City", x: "76%", y: "45%", active: true },
                  { country: "Thailand", city: "Bangkok", x: "74%", y: "44%", active: true },
                  { country: "Australia", city: "Sydney", x: "88%", y: "75%", active: true },
                  { country: "Europe", city: "Germany", x: "50%", y: "25%", active: true },
                ].map((loc, i) => (
                  <div 
                    key={i}
                    className="absolute group cursor-pointer"
                    style={{ left: loc.x, top: loc.y }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border border-stone-900 bg-accent" />
                      <div className="absolute w-8 h-8 bg-accent/20 rounded-full animate-ping" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                         <div className="bg-white px-3 py-2 rounded shadow-lg text-xs whitespace-nowrap">
                           <div className="font-bold text-ink">{loc.country}</div>
                           <div className="text-stone-500">{loc.city}</div>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Strong Shareholders & Partners</h2>
            <p className="text-stone-500">Empowered by robust capital and authoritative institutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Guangzhou Smart Electricity & City Lighting",
                desc: "CSG subsidiary responsible for integrated energy investment and operation.",
                icon: "⚡"
              },
              {
                name: "Guorui Energy Group",
                desc: "16GW+ Wind Power Development, covering full renewable energy chain.",
                icon: "🌪️"
              },
              {
                name: "Zhongshan Public Utilities",
                desc: "Local SOE, New Energy Industry Investor.",
                icon: "🏢"
              }
            ].map((partner, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="font-serif font-bold text-lg mb-2 text-ink">{partner.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-paper border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif mb-2">{t('home.news.title')}</h2>
            </div>
            <Link to="/news" className="btn-outline py-2 px-4 text-sm">
              {t('home.news.view_all')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group block">
                <div className="mb-4 overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                </div>
                <div className="text-xs font-medium text-stone-500 mb-2 uppercase tracking-wide">{item.date}</div>
                <h3 className="text-xl font-serif font-bold text-ink mb-3 leading-snug group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
            {t('home.cta.title')}
          </h2>
          <p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto">
            {t('home.cta.desc')}
          </p>
          <Link to="/contact" className="btn-primary bg-white text-stone-900 hover:bg-stone-200">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
