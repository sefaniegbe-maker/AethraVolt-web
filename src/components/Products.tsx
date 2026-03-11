import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Cloud, Zap, Shield, BarChart, Settings, ChevronDown } from 'lucide-react';

export const Products = () => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const filters = ['全部', '智能设备', '软件系统', '解决方案'];

  const matrixData = [
    { icon: <Cpu />, title: 'AethraEdge', desc: '边缘能量控制器', type: '智能设备' },
    { icon: <Cloud />, title: 'AethraGrid', desc: '能源管理云平台', type: '软件系统' },
    { icon: <Zap />, title: 'AethraPilot', desc: 'AI智能控制', type: '软件系统' },
    { icon: <Shield />, title: '零碳工厂', desc: '整体解决方案', type: '解决方案' },
  ];

  const sixDimensions = [
    { title: '科学算碳', desc: '精准核算碳排放边界与基准线' },
    { title: '源头减碳', desc: '引入绿电绿证，优化能源结构' },
    { title: '过程脱碳', desc: '工艺流程改造与能效提升' },
    { title: '智能控碳', desc: 'AI驱动的动态能源调度' },
    { title: '协同降碳', desc: '供应链全生命周期碳管理' },
    { title: '抵消披露', desc: 'CCER抵消与ESG报告自动生成' },
  ];

  const brands = [
    {
      name: 'Aethra·臻电™',
      desc: '主动式电能治理',
      features: ['电能质量优化', '柔性充电堆', '高功率储能舱'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Aethra·驭能™',
      desc: 'AI驱动的能源自动驾驶',
      features: ['实时碳资产监控', '动态负荷预测', '虚拟电厂(VPP)'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      name: 'Aethra·绿擎™',
      desc: '碳管理与ESG合规',
      features: ['全生命周期LCA', '碳足迹追踪', '一键ESG报告'],
      color: 'from-emerald-400 to-cyan-500'
    }
  ];

  const filteredMatrix = activeFilter === '全部' ? matrixData : matrixData.filter(item => item.type === activeFilter);

  return (
    <section id="products" className="section-padding relative bg-[#0A0A0A] grid-lines">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            科技实效 <span className="text-gradient-tech font-medium">产品矩阵</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light tracking-wide mb-12">
            以 AethraCore AI 模型为核心的 1+5 多维产品矩阵，构建“端-边-云”全链路零碳架构。
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Expandable Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* 1+5 Matrix */}
          <div className="bento-card cursor-pointer group" onClick={() => setExpandedSection(expandedSection === 'matrix' ? null : 'matrix')}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-white">1+5 多维产品矩阵</h3>
              <motion.div animate={{ rotate: expandedSection === 'matrix' ? 180 : 0 }}>
                <ChevronDown className="text-[#00E5FF]" />
              </motion.div>
            </div>
            <AnimatePresence>
              {expandedSection === 'matrix' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-6"
                >
                  <p className="text-sm text-white/60 mb-4">AethraCore能源中枢Agent驱动五大应用平台</p>
                  <motion.div layout className="grid grid-cols-2 gap-4">
                    <AnimatePresence>
                      {filteredMatrix.map((item, i) => (
                        <motion.div
                          key={item.title}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#00E5FF]/50 transition-colors group/item"
                        >
                          <div className="text-[#00E5FF] mb-2 group-hover/item:scale-110 transition-transform origin-left">{item.icon}</div>
                          <div className="font-medium text-white text-sm">{item.title}</div>
                          <div className="text-xs text-white/50 mt-1">{item.desc}</div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Six Dimensions */}
          <div className="bento-card cursor-pointer group" onClick={() => setExpandedSection(expandedSection === 'six' ? null : 'six')}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-white">六维建设体系</h3>
              <motion.div animate={{ rotate: expandedSection === 'six' ? 180 : 0 }}>
                <ChevronDown className="text-[#00E5FF]" />
              </motion.div>
            </div>
            <AnimatePresence>
              {expandedSection === 'six' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-6"
                >
                  <p className="text-sm text-white/60 mb-4">对标零碳工厂评价规范</p>
                  <div className="flex flex-wrap gap-2">
                    {sixDimensions.map((dim, i) => (
                      <div key={i} className="group relative px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#00E5FF]/50 transition-colors">
                        <span className="text-sm text-white/80">{dim.title}</span>
                        <div className="absolute left-0 top-full mt-2 w-48 p-3 bg-[#111] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                          <p className="text-xs text-white/70">{dim.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Brands */}
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bento-card group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <h3 className="text-2xl font-light text-white mb-2">{brand.name}</h3>
              <p className="text-[#00E5FF] text-sm font-medium tracking-widest mb-8">{brand.desc}</p>
              
              <ul className="space-y-4 mt-auto">
                {brand.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${brand.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
