import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Cases = () => {
  const [activeTag, setActiveTag] = useState('全部');

  const tags = ['全部', '零碳工厂', '零碳园区', '海外项目'];

  const projects = [
    {
      id: 1,
      title: '光储一体化项目',
      category: '零碳工厂',
      image: 'https://picsum.photos/seed/factory1/800/600',
      desc: '实现厂区能源自给率提升40%，年减碳量达5000吨。'
    },
    {
      id: 2,
      title: '绿电+水蓄冷项目',
      category: '零碳工厂',
      image: 'https://picsum.photos/seed/factory2/800/600',
      desc: '利用峰谷电价差，降低空调系统运行成本35%。'
    },
    {
      id: 3,
      title: '光伏+污水处理项目',
      category: '零碳园区',
      image: 'https://picsum.photos/seed/park1/800/600',
      desc: '污水处理厂顶部铺设光伏，实现水务零碳运营。'
    },
    {
      id: 4,
      title: '德国光储充一体化项目',
      category: '海外项目',
      image: 'https://picsum.photos/seed/germany/800/600',
      desc: '符合欧洲ESG标准，打造海外零碳标杆。'
    }
  ];

  const filteredProjects = activeTag === '全部' ? projects : projects.filter(p => p.category === activeTag || (activeTag === '海外项目' && p.title.includes('德国')));

  return (
    <section id="cases" className="section-padding bg-[#111] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              信任背书 <span className="text-gradient-tech font-medium">标杆案例</span>
            </h2>
            <p className="text-white/60 max-w-xl font-light tracking-wide">
              从项目选址到碳中和达标，提供全生命周期的零碳运营服务。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00E5FF] text-xs font-medium tracking-widest uppercase border border-[#00E5FF]/30 px-3 py-1 rounded-full bg-[#00E5FF]/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                  <p className="text-white/70 text-sm font-light tracking-wide transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
