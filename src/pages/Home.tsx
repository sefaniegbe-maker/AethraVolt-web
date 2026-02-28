import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe2, ShieldCheck, ChevronRight, TrendingUp, Leaf, Check, Activity, Cpu, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const patents = [
    {
      name: "擎苍-智慧调度中枢系统 V1.0",
      regNo: "2025SR2430976",
      certNo: "软著登字第17087174号",
      date: "2025年12月17日",
      image: "https://i.ibb.co/tTRyDXT5/image.png"
    },
    {
      name: "擎穹-智慧能源管理平台 V1.0",
      regNo: "2025SR2416202",
      certNo: "软著登字第17072400号",
      date: "2025年12月15日",
      image: "https://i.ibb.co/YFd277mB/image.png"
    },
    {
      name: "擎碳-智慧能碳管理系统 V1.0",
      regNo: "2025SR2416337",
      certNo: "软著登字第17072535号",
      date: "2025年12月15日",
      image: "https://i.ibb.co/zHNmCKWQ/image.png"
    },
    {
      name: "擎维-智能运维和运营系统 V1.0",
      regNo: "2025SR2416395",
      certNo: "软著登字第17072593号",
      date: "2025年12月15日",
      image: "https://i.ibb.co/MyXJhvRM/image.png"
    },
    {
      name: "擎元-智慧设备管理和能效优化系统 V1.0",
      regNo: "2025SR2416414",
      certNo: "软著登字第17072612号",
      date: "2025年12月15日",
      image: "https://i.ibb.co/FbFHLf1F/image.png"
    },
    {
      name: "智能电能质量监测和优化系统 V1.0",
      regNo: "2025SR2416802",
      certNo: "软著登字第17073000号",
      date: "2025年12月15日",
      image: "https://i.ibb.co/dwB6jG5Z/image.png"
    }
  ];

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

      {/* Solutions Section - AethraVolt Services */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-2">合擎源动三大品牌服务</h2>
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-6">AethraVolt SERVICES</p>
              <p className="text-stone-600 text-lg leading-relaxed">
                针对高端制造业痛点，提供全方位的能源数字化与碳管理解决方案。
              </p>
            </div>
            <Link to="/products" className="text-ink font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
              View all solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Aethra · 臻电™",
                desc: "针对高端制造业痛点，提供基于AI的主动式电能治理方案，保障生产“大动脉”稳定运行。",
                features: [
                  "三相不平衡治理: 解决负荷分配不均难题",
                  "谐波抑制: 保护精密制造设备寿命",
                  "无功补偿: 提升功率因数至99%以上",
                  "AI主动防御: 毫秒级响应电压波动"
                ]
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Aethra · 驭能™",
                desc: "构建“源-网-荷-储”多维灵活性资源池，实现AI驱动的能源自动驾驶，将成本中心转化为收益资产。",
                features: [
                  "AI削峰填谷: 降低容量电费与尖峰电费",
                  "智能水蓄冷: 错峰制冷，优化空调能耗",
                  "VPP收益: 聚合柔性负荷参与市场交易",
                  "绿电最大化: 提升光伏/储能自用率"
                ]
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Aethra · 绿擎™",
                desc: "以能源数字化和AI驱动，提供可量化、可核查的碳管理报告，助力企业实现全球供应链的绿色合规。",
                features: [
                  "AethraGrid平台: 能源管理AI中枢",
                  "EMS+MES联动: 产线级能耗监控与预警",
                  "碳足迹追踪: 实时生成国际标准碳报告",
                  "ESG合规服务: 满足CBAM要求"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-6 text-accent bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-ink">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6 text-sm min-h-[60px]">
                  {item.desc}
                </p>
                <div className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2 text-sm text-stone-700">
                      <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
              { val: "15%", label: "省现金", desc: "能耗优化 + 削峰填谷" },
              { val: "50%", label: "多收入", desc: "电网辅助 + 现货交易" },
              { val: "20%", label: "高效率", desc: "AI调度 + 数据驱动" },
              { val: "100%", label: "绿品牌", desc: "能碳管理 + 绿电ESG" },
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
            <h2 className="text-3xl font-serif mb-4">全球布局与资本规划</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              未来5年投资100亿人民币，在全球核心市场建设400+零碳工厂。
            </p>
          </div>
          
          <div className="relative w-full aspect-[2/1] bg-[#1a1d24] rounded-xl overflow-hidden shadow-2xl border border-stone-800">
             {/* Map Background - Complete World Map Image */}
             <div className="absolute inset-0 opacity-60">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                 alt="World Map" 
                 className="w-full h-full object-cover filter invert opacity-80"
               />
             </div>

             {/* Interactive Points */}
             <div className="absolute inset-0 z-10">
                {[
                  { label: "Europe", x: "49%", y: "24%" },
                  { label: "China", x: "74%", y: "34%" },
                  { label: "Vietnam", x: "75%", y: "46%" },
                  { label: "Thailand", x: "73%", y: "44%" },
                  { label: "Australia", x: "85%", y: "75%" },
                ].map((loc, i) => (
                  <div 
                    key={i}
                    className="absolute group"
                    style={{ left: loc.x, top: loc.y }}
                  >
                    <div className="relative flex items-center">
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-[#D97757] shadow-[0_0_10px_rgba(217,119,87,0.8)] relative z-10 border border-[#1a1d24]" />
                      <div className="absolute w-full h-full rounded-full bg-[#D97757]/30 animate-ping" />
                      
                      {/* Label */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-[#1f2937]/90 backdrop-blur-sm px-2 py-1 rounded border border-stone-700 text-stone-200 text-xs font-medium whitespace-nowrap shadow-xl">
                        {loc.label}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-24 bg-paper border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif mb-4">核心技术知识产权</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              坚持自主研发，构建核心技术壁垒，拥有多项软件著作权。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
                {/* Certificate Image Placeholder */}
                <div className="relative aspect-[1/1.414] mb-4 overflow-hidden rounded-lg border border-stone-100 bg-stone-50">
                  <img 
                    src={item.image} 
                    alt={`${item.name} 证书`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-medium">{item.certNo}</p>
                  </div>
                </div>

                <h3 className="text-base font-bold text-ink mb-2 leading-snug min-h-[2.5rem]">
                  {item.name}
                </h3>
                
                <div className="mt-auto space-y-1 text-xs text-stone-500 font-mono">
                  <div className="flex justify-between">
                    <span>登记号:</span>
                    <span className="text-ink">{item.regNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>日期:</span>
                    <span className="text-ink">{item.date}</span>
                  </div>
                </div>
              </div>
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
