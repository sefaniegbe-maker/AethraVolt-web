import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe2, ShieldCheck, ChevronRight, TrendingUp, Leaf, Check, Activity, Cpu, FileCheck, Factory, Building2, Sprout, Server, ShoppingBag, AlertTriangle, ArrowDownRight, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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
              AI驱动能源自主 <br />
              <span className="text-stone-500 italic">重构企业能源成本结构</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl font-sans leading-relaxed"
            >
              聚合管理超1GW绿色能源资产，为高耗能企业提供降本、增效与零碳转型的一体化解决方案
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/solutions" className="btn-primary flex items-center gap-2 group">
                获取能源优化方案 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline">
                预约专家咨询
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
      <section className="py-20 bg-ink text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">真实数据验证平台能力</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-serif text-accent mb-4">1GW+</div>
              <div className="text-lg text-stone-300">管理绿色能源规模</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif text-accent mb-4">亿美元级</div>
              <div className="text-lg text-stone-300">累计节省能源成本</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif text-accent mb-4">近百万吨</div>
              <div className="text-lg text-stone-300">减少碳排放</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">让能源从成本中心变为收益资产</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">通过智能调度与精细化运营，全面重塑企业能源价值链</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ArrowDownRight className="w-8 h-8" />, title: "降低用能成本", desc: "优化用电结构，削峰填谷，显著降低企业综合用能支出。" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "提升供电稳定性", desc: "电能质量治理与微电网支撑，保障生产设备安全稳定运行。" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "创造能源收益", desc: "聚合柔性负荷参与电力市场交易与需求响应，获取额外收益。" },
              { icon: <Leaf className="w-8 h-8" />, title: "满足ESG合规", desc: "精准碳足迹追踪与绿电认证，助力企业跨越国际绿色贸易壁垒。" },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 bg-paper border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">制造企业面临的<br/><span className="text-accent italic">能源现实</span></h2>
              <p className="text-stone-600 mb-8 text-lg">在全球能源转型与市场竞争加剧的背景下，传统粗放式的能源管理已无法支撑企业的高质量发展。</p>
              <div className="space-y-6">
                {[
                  "电费占生产成本比例持续上升",
                  "峰段电费占比超50%",
                  "企业缺乏碳管理能力",
                  "零碳转型技术门槛高"
                ].map((challenge, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                    <div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-ink">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-full bg-stone-200 absolute -inset-4 opacity-50 blur-3xl"></div>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Industry Manufacturing" className="relative rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* System Capabilities */}
      <section className="py-24 bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">端–边–云一体化能源系统架构</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">通过边缘控制器、AI模块与能源云平台联动，实现全域能源自动管理。</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-800 -translate-y-1/2 z-0"></div>
              
              {[
                { step: "01", label: "数据采集", icon: <Activity /> },
                { step: "02", label: "AI预测", icon: <Cpu /> },
                { step: "03", label: "策略决策", icon: <BarChart3 /> },
                { step: "04", label: "自动调度", icon: <Zap /> },
                { step: "05", label: "实时优化", icon: <TrendingUp /> },
                { step: "06", label: "自主学习", icon: <Globe2 /> }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center group">
                  <div className="w-16 h-16 bg-stone-900 border-2 border-stone-700 rounded-full flex items-center justify-center text-stone-400 group-hover:border-accent group-hover:text-accent transition-colors shadow-xl mb-4">
                    {item.icon}
                  </div>
                  <div className="text-accent font-mono text-xs mb-1">{item.step}</div>
                  <div className="font-medium text-sm whitespace-nowrap">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">适用于多类高耗能场景</h2>
              <p className="text-stone-600 text-lg">针对不同行业特性，提供定制化的能源运营解决方案</p>
            </div>
            <Link to="/solutions" className="btn-outline shrink-0">
              查看行业解决方案
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Factory className="w-8 h-8" />, label: "工业制造" },
              { icon: <Building2 className="w-8 h-8" />, label: "园区" },
              { icon: <Sprout className="w-8 h-8" />, label: "农业" },
              { icon: <Server className="w-8 h-8" />, label: "数据中心" },
              { icon: <ShoppingBag className="w-8 h-8" />, label: "商业综合体" },
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 border border-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-stone-400 group-hover:text-accent transition-colors mb-4">
                  {item.icon}
                </div>
                <div className="font-bold text-ink">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Advantages */}
      <section className="py-24 bg-paper border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">真正的竞争壁垒来自算法</h2>
            <p className="text-stone-600 text-lg">我们的AI能源大脑通过深度强化学习与海量数据训练，在复杂能源场景中展现出卓越的决策能力。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { val: "＞95%", label: "负荷预测准确率", desc: "精准预测未来用能趋势，为调度决策提供可靠依据" },
              { val: "10倍", label: "系统响应速度提升", desc: "毫秒级边缘控制，实时应对电网波动与设备状态变化" },
              { val: "4.7倍", label: "收益稳定性提升", desc: "多目标优化算法，在电力现货市场中实现收益最大化" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="text-4xl md:text-5xl font-serif text-accent mb-4">{stat.val}</div>
                <div className="text-xl font-bold text-ink mb-3">{stat.label}</div>
                <p className="text-stone-500 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section (Kept from original) */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif mb-4">核心技术知识产权</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              坚持自主研发，构建核心技术壁垒，拥有多项软件著作权。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((item, index) => (
              <div key={index} className="bg-stone-50 p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
                {/* Certificate Image Placeholder */}
                <div className="relative aspect-[1/1.414] mb-4 overflow-hidden rounded-lg border border-stone-100 bg-white">
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
            开启你的能源智能化升级
          </h2>
          <Link to="/contact" className="btn-primary bg-white text-stone-900 hover:bg-stone-200 inline-flex items-center gap-2">
            申请方案评估 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
