import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe2, TrendingUp, Building2, Leaf } from 'lucide-react';

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
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-ink leading-tight">
            About AethraVolt
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-sans leading-relaxed border-l-4 border-accent pl-6">
            AI+Data-driven "Zero-Carbon New Quality Productivity" Energy Operator.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white border-y border-stone-200 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">核心愿景</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                以优质负荷为核心，以AI为引擎，成为全球领先的零碳新质生产力运营商。
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif font-bold text-lg mb-3 flex items-center gap-2">
                    <Target className="text-accent" size={20} /> 核心定位
                  </h3>
                  <p className="text-stone-600 pl-7">AI+数据驱动的“零碳新质生产力”能源运营商</p>
                </div>
                
                <div>
                  <h3 className="font-serif font-bold text-lg mb-3 flex items-center gap-2">
                    <Globe2 className="text-accent" size={20} /> 聚焦领域
                  </h3>
                  <ul className="list-disc pl-12 text-stone-600 space-y-1">
                    <li>低碳绿能</li>
                    <li>能源精益运营</li>
                    <li>ESG价值创造</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg mb-3 flex items-center gap-2">
                    <Award className="text-accent" size={20} /> 客户价值
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pl-7">
                    <div className="bg-stone-50 p-3 rounded text-sm text-center border border-stone-100">省成本</div>
                    <div className="bg-stone-50 p-3 rounded text-sm text-center border border-stone-100">创营收</div>
                    <div className="bg-stone-50 p-3 rounded text-sm text-center border border-stone-100">高效率</div>
                    <div className="bg-stone-50 p-3 rounded text-sm text-center border border-stone-100">ESG标杆</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[500px] bg-stone-100 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office Vision" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Win-Win Model */}
      <section className="py-24 bg-paper">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">三方战略联动</h2>
            <p className="text-stone-600">为政府、制造业和合擎源动创造价值</p>
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
              <div key={i} className="card-editorial text-center hover:border-accent group">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-600 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.role}</h3>
                <div className="text-accent font-medium mb-4 text-sm uppercase tracking-wider">{item.benefit}</div>
                <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Investment */}
      <section className="py-24 bg-stone-900 text-stone-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">全球资本规划</h2>
               <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                 未来5年，我们计划在中国、越南、泰国、澳大利亚和欧洲投资超过 <span className="text-white font-bold">100亿人民币</span>。
               </p>
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-accent">
                     <TrendingUp size={20} />
                   </div>
                   <div>
                     <div className="text-2xl font-serif text-white">400+</div>
                     <div className="text-sm text-stone-500">零碳工厂/园区</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-accent">
                     <Globe2 size={20} />
                   </div>
                   <div>
                     <div className="text-2xl font-serif text-white">6GW+</div>
                     <div className="text-sm text-stone-500">绿色能源资产</div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="md:w-1/2 w-full">
               <div className="bg-stone-800 rounded-xl p-8 border border-stone-700">
                 <h3 className="font-serif text-white mb-6">投资预测 (2026-2030)</h3>
                 <div className="flex items-end gap-4 h-64">
                   {[
                     { year: 2026, val: 2.5, label: "25亿" },
                     { year: 2027, val: 10, label: "100亿" },
                     { year: 2028, val: 20, label: "200亿" },
                     { year: 2029, val: 30, label: "300亿" },
                     { year: 2030, val: 37.5, label: "375亿" }
                   ].map((item, i) => (
                     <div key={i} className="flex-1 flex flex-col justify-end group">
                       <div 
                         className="bg-stone-600 w-full rounded-t-sm group-hover:bg-accent transition-all duration-500 relative"
                         style={{ height: `${(item.val / 40) * 100}%` }}
                       >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                           {item.label}
                         </div>
                       </div>
                       <div className="text-center text-xs text-stone-500 mt-2">{item.year}</div>
                     </div>
                   ))}
                 </div>
                 <div className="text-right text-xs text-stone-600 mt-4">单位：亿人民币 (累计)</div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
