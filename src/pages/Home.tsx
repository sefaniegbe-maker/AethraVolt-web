import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="AI Energy Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI驱动能源自主 <br />
              <span className="text-blue-400">定义零碳新质生产力</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
              以数据为关键要素，用AI重构区域能源体系，打造绿色的零碳新质生产力。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all flex items-center gap-2">
                探索解决方案 <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all">
                了解我们
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心解决方案</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              基于 "端-边-云" 三位一体架构，为工商业提供一站式综合能源服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-blue-600" />,
                title: "分布式光储",
                desc: "高效利用屋顶资源，部署光伏与储能系统，实现能源自给自足与削峰填谷。",
                img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
                title: "AI节能优化",
                desc: "AethraEdge边缘控制，非侵入式接入，毫秒级响应，综合能耗降低5-15%。",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
                title: "电力现货交易",
                desc: "基于AI负荷预测模型，智能参与电力市场交易，最大化能源资产收益。",
                img: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-lg">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  <Link to="/products" className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    了解详情 <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section (Dark) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                Aethra AI 技术大脑
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                AI重构能源调度 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  精准预测，智能决策
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                区别于传统能源公司，我们的核心在于 AethraCore 能源中枢大模型。
                通过深度学习算法，实现高达 95%+ 的负荷预测准确率，让每一度电都发挥最大价值。
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "负荷预测准确率", value: "95%+" },
                  { label: "响应速度", value: "<10ms" },
                  { label: "节能效率提升", value: "15%" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 font-bold text-xl border border-white/10">
                      {stat.value}
                    </div>
                    <div>
                      <div className="text-lg font-medium text-white">{stat.label}</div>
                      <div className="text-sm text-slate-500">行业领先水平</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                {/* Abstract UI representation of AI Dashboard */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                  <div className="text-sm font-mono text-blue-400">AethraCore Dashboard</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="text-xs text-slate-400">System Online</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-900/50 rounded-lg border border-slate-700/50 relative overflow-hidden flex items-end p-4 gap-1">
                     {/* Fake Chart */}
                     {[40, 60, 45, 70, 55, 80, 65, 90, 75, 60, 85, 95].map((h, i) => (
                       <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80"
                       />
                     ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1">实时功率</div>
                      <div className="text-xl font-mono text-white">1,245 kW</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1">今日碳减排</div>
                      <div className="text-xl font-mono text-green-400">4.2 Ton</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">全球布局</h2>
          <div className="relative max-w-4xl mx-auto aspect-[16/9] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0047AB_1px,transparent_1px)] [background-size:20px_20px]" />
             <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
                {[
                  { country: "中国", city: "深圳 (HQ)", active: true },
                  { country: "越南", city: "胡志明市", active: true },
                  { country: "泰国", city: "曼谷", active: true },
                  { country: "澳大利亚", city: "悉尼", active: false },
                  { country: "欧洲", city: "德国", active: false },
                ].map((loc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-2 h-2 rounded-full ${loc.active ? 'bg-blue-600' : 'bg-slate-300'}`} />
                    <div>
                      <div className="font-bold text-slate-900">{loc.country}</div>
                      <div className="text-sm text-slate-500">{loc.city}</div>
                    </div>
                  </div>
                ))}
             </div>
             <Globe2 className="absolute text-slate-100 -z-0 w-96 h-96 -right-20 -bottom-20" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">最新动态</h2>
              <p className="text-slate-600">关注合擎源动的最新进展</p>
            </div>
            <Link to="/news" className="text-blue-600 font-medium hover:underline">查看全部</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm text-slate-400 mb-2">{item.date}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                      {item.summary}
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center gap-1">
                      阅读更多 <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开启零碳之旅了吗？</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            联系我们的专家团队，获取为您量身定制的能源数字化转型方案。
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
            立即咨询
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
