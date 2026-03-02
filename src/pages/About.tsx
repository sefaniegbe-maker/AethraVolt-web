import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe2, TrendingUp, Building2, Leaf } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-sans font-bold mb-8 text-white leading-tight">
            关于合擎源动
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-sans leading-relaxed border-l-4 border-blue-500 pl-6">
            AI+数据驱动的“零碳新质生产力”能源运营商。
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-transparent border-y border-stone-800 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-sans font-bold mb-6 text-white">核心愿景</h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                以优质负荷为核心，以AI为引擎，成为全球领先的零碳新质生产力运营商。
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-bold text-lg mb-3 flex items-center gap-2 text-white">
                    <Target className="text-blue-400" size={20} /> 核心定位
                  </h3>
                  <p className="text-stone-400 pl-7">AI+数据驱动的“零碳新质生产力”能源运营商</p>
                </div>
                
                <div>
                  <h3 className="font-sans font-bold text-lg mb-3 flex items-center gap-2 text-white">
                    <Globe2 className="text-blue-400" size={20} /> 聚焦领域
                  </h3>
                  <ul className="list-disc pl-12 text-stone-400 space-y-1">
                    <li>低碳绿能</li>
                    <li>能源精益运营</li>
                    <li>ESG价值创造</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans font-bold text-lg mb-3 flex items-center gap-2 text-white">
                    <Award className="text-blue-400" size={20} /> 客户价值
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pl-7">
                    <div className="bg-stone-900/50 p-3 rounded text-sm text-center border border-stone-800 text-stone-300">省成本</div>
                    <div className="bg-stone-900/50 p-3 rounded text-sm text-center border border-stone-800 text-stone-300">创营收</div>
                    <div className="bg-stone-900/50 p-3 rounded text-sm text-center border border-stone-800 text-stone-300">高效率</div>
                    <div className="bg-stone-900/50 p-3 rounded text-sm text-center border border-stone-800 text-stone-300">ESG标杆</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[500px] bg-stone-900 rounded-xl overflow-hidden border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Factory with automation and energy storage" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Win-Win Model */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-white">三方战略联动</h2>
            <p className="text-stone-400">为政府、制造业和合擎源动创造价值</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-10 h-10" />,
                role: "政府",
                benefit: "零碳基础设施",
                desc: "提升区域绿色发展指数，吸引高质量绿色投资。"
              },
              {
                icon: <Users className="w-10 h-10" />,
                role: "制造业",
                benefit: "降本增效",
                desc: "降低能源成本，保障电力稳定，提升全球出口竞争力。"
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                role: "合擎源动",
                benefit: "资产运营",
                desc: "获取长期能源资产回报，积累高价值能源数据资产。"
              }
            ].map((item, i) => (
              <div key={i} className="card-editorial text-center hover:border-blue-500/50 group">
                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-sans font-bold mb-2 text-white">{item.role}</h3>
                <div className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">{item.benefit}</div>
                <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
