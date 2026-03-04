import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe2, TrendingUp, Building2, Leaf } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-[#050505] min-h-screen text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-sans font-medium mb-8 text-white leading-tight tracking-tight">
            关于合擎源动
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-sans leading-relaxed border-l-4 border-blue-500 pl-6 font-light">
            AI+数据驱动的“零碳新质生产力”能源运营商。
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-transparent border-y border-stone-800 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-sans font-medium mb-6 text-white tracking-tight">核心愿景</h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light">
                以优质负荷为核心，以AI为引擎，成为全球领先的零碳新质生产力运营商。
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-medium text-lg mb-3 flex items-center gap-2 text-white tracking-tight">
                    <Target className="text-blue-400" size={20} /> 核心定位
                  </h3>
                  <p className="text-stone-400 pl-7 font-light">AI+数据驱动的“零碳新质生产力”能源运营商</p>
                </div>
                
                <div>
                  <h3 className="font-sans font-medium text-lg mb-3 flex items-center gap-2 text-white tracking-tight">
                    <Globe2 className="text-blue-400" size={20} /> 聚焦领域
                  </h3>
                  <ul className="list-disc pl-12 text-stone-400 space-y-1 font-light">
                    <li>低碳绿能</li>
                    <li>能源精益运营</li>
                    <li>ESG价值创造</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans font-medium text-lg mb-3 flex items-center gap-2 text-white tracking-tight">
                    <Award className="text-blue-400" size={20} /> 客户价值
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pl-7">
                    <div className="bg-stone-900/40 backdrop-blur-sm p-3 rounded-lg text-sm text-center border border-stone-800 text-stone-300 font-light">省成本</div>
                    <div className="bg-stone-900/40 backdrop-blur-sm p-3 rounded-lg text-sm text-center border border-stone-800 text-stone-300 font-light">创营收</div>
                    <div className="bg-stone-900/40 backdrop-blur-sm p-3 rounded-lg text-sm text-center border border-stone-800 text-stone-300 font-light">高效率</div>
                    <div className="bg-stone-900/40 backdrop-blur-sm p-3 rounded-lg text-sm text-center border border-stone-800 text-stone-300 font-light">ESG标杆</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[500px] bg-stone-900 rounded-xl overflow-hidden border border-stone-800">
              <img 
                src="https://image.pollinations.ai/prompt/AI%20energy%20hub%20panorama%2C%20Central%3A%20abstract%20AI%20core%20%28energy%20brain%29%2C%20Periphery%3A%20factories%2C%20parks%2C%20farms%2C%20wind%20power%2C%20photovoltaics%2C%20Connections%3A%20glowing%20energy%20flow%20lines%2C%20High%20tech%2C%20futuristic%2C%20high%20quality%2C%20high%20resolution?width=1200&height=800&nologo=true" 
                alt="AI能源中枢调度全景图" 
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
            <h2 className="text-3xl md:text-4xl font-sans font-medium mb-4 text-white tracking-tight">三方战略联动</h2>
            <p className="text-stone-400 font-light">为政府、制造业和合擎源动创造价值</p>
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
              <div key={i} className="bg-stone-900/40 backdrop-blur-sm border border-stone-800 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group">
                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg border border-stone-700">
                  {item.icon}
                </div>
                <h3 className="text-xl font-sans font-medium mb-2 text-white tracking-tight">{item.role}</h3>
                <div className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">{item.benefit}</div>
                <p className="text-stone-400 leading-relaxed text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
