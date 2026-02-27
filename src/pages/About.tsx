import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, History, Target, Globe2, TrendingUp, Building2, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Intro */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">关于合擎源动</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            深圳合擎源动科技有限公司（AethraVolt）是一家AI+能源驱动的“零碳新质生产力”运营商。
            我们以优质负荷为核心，以AI为引擎，致力于重构区域能源体系，打造全球领先的零碳新质生产力运营商。
          </p>
        </div>
      </div>

      {/* Core Positioning & Vision */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-10 h-10 text-blue-600" />, title: "核心定位", desc: "AI+数据驱动的“零碳新质生产力”能源运营商" },
              { icon: <Globe2 className="w-10 h-10 text-blue-600" />, title: "公司愿景", desc: "以AI与数据重塑能源世界，成为全球领先的零碳新质生产力运营商" },
              { icon: <Zap className="w-10 h-10 text-blue-600" />, title: "聚焦领域", desc: "低碳绿色能源 · 能源精益运营 · ESG价值创造" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Win-Win Model */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">协同共赢：三方战略联动模式</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            激活能源数据要素价值，重构绿色能源体系，为区域经济注入“零碳新质生产力”源动力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Government */}
          <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-blue-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-slate-900">政府</h3>
            </div>
            <div className="mb-4 text-sm font-bold text-blue-600 uppercase tracking-wider">顶层设计与政策牵引</div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              提供政策资质支持、绿色金融激励及应用场景开放。实现区域减排目标，提升招商环境软实力。
            </p>
            <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-sm">
              <span className="text-sm font-bold text-slate-400 block mb-1">获得收益</span>
              <span className="text-blue-700 font-semibold">新质生产力高地、绿色税收</span>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <Factory className="text-blue-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-slate-900">制造企业</h3>
            </div>
            <div className="mb-4 text-sm font-bold text-blue-600 uppercase tracking-wider">生产载体与零碳主体</div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              提供屋顶资产与生产负荷数据。实施AI能源技改，确保供应链合规。降低综合用能成本。
            </p>
            <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-sm">
              <span className="text-sm font-bold text-slate-400 block mb-1">获得收益</span>
              <span className="text-blue-700 font-semibold">CBAM豁免、能源降本、ESG溢价</span>
            </div>
          </div>

          {/* AethraVolt */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl transform md:-translate-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-yellow-400 w-8 h-8" />
              <h3 className="text-2xl font-bold">合擎源动</h3>
            </div>
            <div className="mb-4 text-sm font-bold text-blue-200 uppercase tracking-wider">AI技术与投建运营商</div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              提供核心AI算法、边缘控制硬件。出资投建能源微网，代运营电力交易与碳排认证。
            </p>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-bold text-blue-200 block mb-1">获得收益</span>
              <span className="text-white font-semibold">能源运营收益、技术溢价</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Layout & Investment */}
      <div className="bg-slate-900 text-white py-24 mb-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]" />
           <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">全球布局与资本规划</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                未来5年，我们计划在全球范围内总投资额达 <span className="text-yellow-400 font-bold">100亿</span>，
                重点布局中国、越南、泰国、澳大利亚和欧洲市场。
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-yellow-400 font-bold text-2xl">
                    400+
                  </div>
                  <div>
                    <div className="text-xl font-bold">零碳工厂或园区</div>
                    <div className="text-slate-400">未来5年投资运营目标</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-green-400 font-bold text-2xl">
                    6GW
                  </div>
                  <div>
                    <div className="text-xl font-bold">绿色能源资产</div>
                    <div className="text-slate-400">运营风电和光伏等资产</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Simple Chart Visualization */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-lg font-bold mb-8 text-center">投资增长预测 (单位: 万元)</h3>
                <div className="flex items-end justify-between h-64 gap-2 md:gap-4">
                  {[
                    { year: '2026', val: 25000, h: '15%' },
                    { year: '2027', val: 100000, h: '30%' },
                    { year: '2028', val: 200000, h: '50%' },
                    { year: '2029', val: 300000, h: '75%' },
                    { year: '2030', val: 375000, h: '100%' },
                  ].map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div className="text-xs text-slate-400 mb-1 hidden md:block">{d.val}</div>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: d.h }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md opacity-90 hover:opacity-100 transition-opacity"
                      />
                      <div className="text-sm font-bold text-slate-300">{d.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-16">发展历程</h2>
        <div className="max-w-3xl mx-auto relative border-l-2 border-blue-100 pl-8 space-y-12">
          {[
            { year: "2025", title: "全球化布局", desc: "启动欧洲与东南亚市场战略，发布AethraCore大模型。" },
            { year: "2024", title: "高速成长期", desc: "完成A轮融资，累计服务客户超100家，管理负荷超500MW。" },
            { year: "2023", title: "产品落地", desc: "发布AethraEdge边缘控制器，首个零碳工厂项目交付。" },
            { year: "2022", title: "公司成立", desc: "深圳合擎源动科技有限公司成立，确立AI+能源战略方向。" }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "张三", role: "CEO / 创始人", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
              { name: "李四", role: "CTO / 首席科学家", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "王五", role: "COO / 运营总监", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
              { name: "赵六", role: "海外市场VP", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg group-hover:border-blue-500 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
