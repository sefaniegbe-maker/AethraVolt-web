import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Layers, Cpu, BarChart, Zap, Settings, ShieldCheck, Activity } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('全部');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const categories = ['全部', '智能设备', '软件系统', '解决方案'];
  
  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">产品与解决方案</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            以擎苍 AethraCore 能源中枢大模型为核心，构建“1+5”多维产品矩阵，赋能企业绿色转型
          </p>
        </div>

        {/* 1+5 Product Matrix */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">“1+5” 多维产品矩阵</h2>
            <p className="text-slate-500">以 AI 大模型为核心，驱动五大应用平台</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Core */}
            <div className="lg:col-start-2 relative">
              <div className="aspect-square rounded-full bg-slate-900 flex flex-col items-center justify-center text-white p-8 relative z-10 shadow-2xl border-4 border-blue-500/30">
                <Cpu className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">AethraCore</h3>
                <p className="text-center text-slate-400 text-sm">能源中枢智能体<br/>大模型</p>
              </div>
              {/* Connecting Lines (Visual only) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-slate-300 rounded-full -z-0 hidden lg:block" />
            </div>

            {/* 5 Platforms */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 lg:mt-0">
               {[
                 { name: "擎元", desc: "设备管理和能效优化平台", icon: <Settings className="w-6 h-6" /> },
                 { name: "擎碳", desc: "智慧能碳管理平台", icon: <LeafIcon /> },
                 { name: "擎穹", desc: "智慧能源管理平台", icon: <Activity className="w-6 h-6" /> },
                 { name: "擎维", desc: "智能运维和运维平台", icon: <ShieldCheck className="w-6 h-6" /> },
                 { name: "擎能", desc: "电能质量监测和优化平台", icon: <Zap className="w-6 h-6" /> },
               ].map((p, i) => (
                 <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center group">
                   <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     {p.icon}
                   </div>
                   <h4 className="font-bold text-lg mb-2">{p.name}</h4>
                   <p className="text-xs text-slate-500">{p.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* 6-Dimension System */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">对标《零碳工厂指导意见》的“六维”建设体系</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "科学算碳", desc: "建立 ISO14064 核算体系，实现能源活动与工业过程碳排精准量化。", color: "bg-blue-50 text-blue-600" },
              { title: "源头减碳", desc: "分布式光储 + 绿电直连试点，物理确权绿色电力来源。", color: "bg-green-50 text-green-600" },
              { title: "过程脱碳", desc: "AI 设备级智控，对空压机、暖通系统毫秒级寻优，能耗降 15%。", color: "bg-purple-50 text-purple-600" },
              { title: "智能控碳", desc: "数字化能碳中心，政府/企业双视角监管，实现实时“控排”。", color: "bg-orange-50 text-orange-600" },
              { title: "协同降碳", desc: "产品全生命周期 LCA 建模，打造国际互认的“绿色产品身份证”。", color: "bg-yellow-50 text-yellow-600" },
              { title: "抵销披露", desc: "对接国际认证机构（TÜV/SGS），协助通过零碳工厂第三方认证。", color: "bg-cyan-50 text-cyan-600" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <Layers size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
              <h3 className="font-bold text-lg mb-4 px-2">产品分类</h3>
              <nav className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === cat 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={product.image_url} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features?.slice(0, 2).map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/products/${product.id}`}
                      className="w-full py-2.5 border border-slate-200 rounded-lg text-center text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      查看详情
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

export default Products;
