import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe2, ShieldCheck, ChevronRight, TrendingUp, Leaf, Check, Activity, Cpu, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-transparent overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl text-white mb-8 max-w-3xl font-sans leading-tight font-medium tracking-tight"
            >
              引领能源数字化与碳管理未来
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl font-sans leading-relaxed font-light"
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

      {/* Stats Section */}
      <section className="py-20 bg-transparent border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-center mb-12">
            <div className="w-16 h-1 bg-[#D97757]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-gradient-blue mb-6 tracking-tight">1GW+</div>
              <div className="text-stone-300 text-lg font-light tracking-wider">管理绿色能源规模</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-gradient-blue mb-6 tracking-tight">亿美元级</div>
              <div className="text-stone-300 text-lg font-light tracking-wider">累计节省能源成本</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-gradient-blue mb-6 tracking-tight">160 万吨</div>
              <div className="text-stone-300 text-lg font-light tracking-wider">减少碳排放</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section - AethraVolt Services */}
      <section className="py-24 bg-transparent border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-sans font-medium mb-2 text-white tracking-tight">合擎源动三大品牌服务</h2>
              <p className="text-gradient-blue font-medium tracking-wide uppercase text-sm mb-6">AethraVolt SERVICES</p>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                针对高端制造业痛点，提供全方位的能源数字化与碳管理解决方案。
              </p>
            </div>
            <Link to="/products" className="text-white font-medium border-b border-transparent hover:border-blue-400 pb-1 hover:text-blue-400 transition-colors">
              查看所有解决方案
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
              <div key={index} className="card-editorial group">
                <div className="mb-6 text-blue-400 bg-blue-900/20 w-16 h-16 rounded flex items-center justify-center border border-stone-800 group-hover:bg-blue-900/40 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-sans font-medium mb-4 text-white tracking-tight">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed mb-6 text-sm min-h-[60px] font-light">
                  {item.desc}
                </p>
                <div className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2 text-sm text-stone-400 font-light">
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
      <section className="py-24 bg-transparent border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-medium mb-4 text-white tracking-tight">{t('home.benefits.title')}</h2>
            <p className="text-stone-400 font-light">{t('home.benefits.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "15%", label: "省成本", desc: "能耗优化 + 削峰填谷" },
              { val: "10%", label: "多收入", desc: "电网辅助 + 现货交易" },
              { val: "20%", label: "高效率", desc: "AI调度 + 数据驱动" },
              { val: "100%", label: "绿品牌", desc: "能碳管理 + 绿电ESG" },
            ].map((item, i) => (
              <div key={i} className="border-t border-stone-800 pt-6">
                <div className="text-5xl font-sans font-medium text-gradient-blue mb-4 tracking-tight">{item.val}</div>
                <div className="text-lg font-medium text-white mb-2">{item.label}</div>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section (Dark) */}
      <section className="py-24 bg-transparent text-stone-200 border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <div className="text-gradient-blue font-medium mb-6 tracking-wide uppercase text-sm">
                {t('home.tech.tag')}
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-medium text-white mb-8 leading-tight tracking-tight">
                {t('home.tech.title')} <br />
                <span className="text-gradient-blue italic font-normal">{t('home.tech.subtitle')}</span>
              </h2>
              <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-xl font-light">
                {t('home.tech.desc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: t('home.tech.stat_accuracy'), value: "95%+" },
                  { label: t('home.tech.stat_speed'), value: "<10ms" },
                  { label: t('home.tech.stat_efficiency'), value: "15%" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-stone-800 pl-6">
                    <div className="text-3xl font-sans font-medium text-white mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-sm text-stone-400 font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                {/* Dynamic AI Energy Scheduling Visualization */}
                <div className="absolute inset-0 bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl flex flex-col">
                  {/* Header */}
                  <div className="h-10 border-b border-stone-800 flex items-center px-4 justify-between bg-stone-900/80 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-stone-400">AethraGrid Live</span>
                    </div>
                    <div className="text-xs font-mono text-blue-400">AI OPTIMIZING</div>
                  </div>

                  {/* Main Visualization Area */}
                  <div className="flex-1 relative p-4 flex flex-col gap-4">
                    {/* Top Row: Source-Grid-Load-Storage */}
                    <div className="flex justify-between items-center h-1/3 relative">
                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                        <motion.path
                          d="M 40 40 L 150 40 L 150 100"
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          strokeDasharray="4,4"
                          fill="none"
                          className="opacity-50"
                          animate={{ strokeDashoffset: [0, -20] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                         <motion.path
                          d="M 320 40 L 210 40 L 210 100"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="4,4"
                          fill="none"
                          className="opacity-50"
                          animate={{ strokeDashoffset: [0, -20] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                      </svg>

                      {/* Nodes */}
                      <div className="z-10 flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                          <span className="text-xs font-mono text-blue-400">GRID</span>
                        </div>
                        <span className="text-[10px] text-stone-500">市电网</span>
                      </div>
                      
                      <div className="z-10 flex flex-col items-center gap-1">
                        <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-indigo-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] relative">
                           <div className="absolute inset-0 rounded-full border border-indigo-400 animate-ping opacity-20" />
                           <span className="text-xs font-bold font-sans text-indigo-300">AI CORE</span>
                        </div>
                      </div>

                      <div className="z-10 flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center">
                          <span className="text-xs font-mono text-green-400">PV/ESS</span>
                        </div>
                        <span className="text-[10px] text-stone-500">光储系统</span>
                      </div>
                    </div>

                    {/* Middle Row: Prediction Curve */}
                    <div className="h-1/3 border border-stone-800 rounded-lg bg-stone-950/50 p-2 relative overflow-hidden flex flex-col justify-end">
                      <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-500">负荷预测 vs 实时电价</div>
                      
                      {/* Animated Chart */}
                      <div className="w-full h-12 relative flex items-end gap-1">
                        {[40, 60, 80, 50, 30, 70, 90, 60, 40, 50, 80, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            className="flex-1 bg-blue-500/20 rounded-t-sm relative"
                            initial={{ height: `${h}%` }}
                            animate={{ height: [`${h}%`, `${h + (Math.random() * 20 - 10)}%`, `${h}%`] }}
                            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut" }}
                          >
                            {/* Price indicator dot */}
                            {h > 70 && (
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-500" />
                            )}
                            {h < 40 && (
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-500" />
                            )}
                          </motion.div>
                        ))}
                        
                        {/* Overlay Curve */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                           <motion.path
                             d="M 0 60 Q 20 40, 40 80 T 80 50 T 100 30"
                             fill="none"
                             stroke="#8b5cf6"
                             strokeWidth="2"
                             className="opacity-70"
                             animate={{ d: ["M 0 60 Q 20 40, 40 80 T 80 50 T 100 30", "M 0 50 Q 20 60, 40 70 T 80 40 T 100 40", "M 0 60 Q 20 40, 40 80 T 80 50 T 100 30"] }}
                             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                           />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Row: Decisions & Benefits */}
                    <div className="h-1/3 flex gap-2">
                       <div className="flex-1 border border-stone-800 rounded-lg bg-stone-950/50 p-2 flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                          <div className="text-[10px] text-stone-500 mb-1">智能决策</div>
                          <motion.div 
                            key="decision"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
                            className="text-xs font-mono text-blue-300"
                          >
                            &gt; 触发削峰填谷<br/>
                            &gt; 储能放电 500kW
                          </motion.div>
                       </div>
                       <div className="flex-1 border border-stone-800 rounded-lg bg-stone-950/50 p-2 flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                          <div className="text-[10px] text-stone-500 mb-1">碳减排效益</div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-mono text-green-400 tracking-tighter">↓12.4</span>
                            <span className="text-[10px] text-stone-500">tCO₂e</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-transparent border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans font-medium mb-4 text-white tracking-tight">全球布局</h2>
          </div>
          
          <div className="relative w-full aspect-[2/1] bg-[#0a0a0a] rounded-lg overflow-hidden border border-stone-800">
             {/* Map Background - Complete World Map Image */}
             <div className="absolute inset-0 opacity-40">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                 alt="World Map" 
                 className="w-full h-full object-cover filter invert opacity-80"
               />
             </div>

             {/* Interactive Points */}
             <div className="absolute inset-0 z-10">
                {[
                  { label: "德国", x: "49%", y: "24%" },
                  { label: "中国", x: "74%", y: "34%" },
                  { label: "越南", x: "76%", y: "48%", labelClass: "top-full mt-3 left-1/2 -translate-x-1/2" },
                  { label: "泰国", x: "71%", y: "42%", labelClass: "bottom-full mb-3 left-1/2 -translate-x-1/2" },
                  { label: "澳大利亚", x: "85%", y: "75%" },
                ].map((loc, i) => (
                  <div 
                    key={i}
                    className="absolute group"
                    style={{ left: loc.x, top: loc.y }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Dot */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          y: [0, -3, 0],
                          boxShadow: [
                            "0 0 10px rgba(59,130,246,0.5)",
                            "0 0 20px rgba(59,130,246,0.9)",
                            "0 0 10px rgba(59,130,246,0.5)"
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-3 h-3 rounded-full bg-blue-500 relative z-10 border border-stone-900" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                        className="absolute w-full h-full rounded-full bg-blue-500" 
                      />
                      
                      {/* Label */}
                      <div className={`absolute ${loc.labelClass || 'bottom-full mb-3 left-1/2 -translate-x-1/2'} bg-stone-800/90 backdrop-blur-sm px-2 py-1 rounded border border-stone-700 text-stone-200 text-xs font-medium whitespace-nowrap shadow-xl`}>
                        {loc.label}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-24 bg-transparent border-t border-stone-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-sans font-medium mb-4 text-white tracking-tight">适用于多类高耗能场景</h2>
              <p className="text-stone-400 text-lg font-light">
                针对不同行业特性，提供定制化的能源运营解决方案
              </p>
            </div>
            <Link to="/products" className="btn-outline flex items-center gap-2 group whitespace-nowrap">
              查看行业解决方案 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <FileCheck className="w-8 h-8" />, label: "工业制造" },
              { icon: <Globe2 className="w-8 h-8" />, label: "园区" },
              { icon: <Leaf className="w-8 h-8" />, label: "农业" },
              { icon: <ShieldCheck className="w-8 h-8" />, label: "数据中心" },
              { icon: <BarChart3 className="w-8 h-8" />, label: "商业综合体" }
            ].map((item, index) => (
              <div key={index} className="bg-stone-900/40 backdrop-blur-sm border border-stone-800 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 hover:bg-stone-800/60 transition-all duration-300 cursor-pointer group">
                <div className="text-stone-400 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </div>
                <div className="text-white font-medium text-center">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-transparent border-t border-stone-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 max-w-3xl mx-auto leading-tight tracking-tight">
            {t('home.cta.title')}
          </h2>
          <p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto font-light">
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
