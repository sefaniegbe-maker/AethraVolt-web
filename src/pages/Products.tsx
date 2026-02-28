import React, { useEffect, useState } from 'react';
import { Search, Filter, ArrowRight, Zap, Cpu, BarChart3, Settings, Globe, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('全部');
  const { t } = useLanguage();

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
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-ink">
            产品矩阵
          </h1>
          <p className="text-xl text-stone-600 font-sans leading-relaxed">
            以 AethraCore AI 模型为核心的 1+5 多维产品矩阵。
          </p>
        </div>

        {/* 1+5 Matrix Visual Section */}
        <div className="mb-24 bg-white border border-stone-200 rounded-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">1+5 产品架构</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              AethraCore 能源中枢Agent 驱动五大应用平台
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Wing */}
            <div className="space-y-6">
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-accent transition-colors group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Zap className="text-stone-600 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">AethraSource</h3>
                  <p className="text-sm text-stone-500">设备管理与能效优化</p>
                </div>
              </div>
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-accent transition-colors group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Leaf className="text-stone-600 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">AethraCarbon</h3>
                  <p className="text-sm text-stone-500">智慧碳管理平台</p>
                </div>
              </div>
            </div>

            {/* Core */}
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-stone-200 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-stone-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="w-48 h-48 bg-stone-900 rounded-full flex flex-col items-center justify-center text-white z-10 shadow-2xl">
                <Cpu size={48} className="mb-2 text-accent" />
                <span className="font-serif font-bold text-xl">AethraCore</span>
                <span className="text-xs text-stone-400 mt-1">能源中枢 Agent</span>
              </div>
            </div>

            {/* Right Wing */}
            <div className="space-y-6">
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-accent transition-colors group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Settings className="text-stone-600 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">AethraGrid</h3>
                  <p className="text-sm text-stone-500">智慧能源管理平台</p>
                </div>
              </div>
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-accent transition-colors group">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <BarChart3 className="text-stone-600 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">AethraOps</h3>
                  <p className="text-sm text-stone-500">智能运维平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Dimension Construction System */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">"六维" 建设体系</h2>
            <p className="text-stone-500">对标“零碳工厂评价规范”</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "科学算碳", desc: "ISO14064核算体系，精准量化碳排放。" },
              { title: "源头减碳", desc: "分布式光伏 + 储能 + 绿电直连。" },
              { title: "过程脱碳", desc: "AI设备级智控，毫秒级寻优，能耗下降15%。" },
              { title: "智能控碳", desc: "数字化碳中枢，实时监测与调控。" },
              { title: "协同降碳", desc: "产品全生命周期LCA建模，打造“绿色产品ID”。" },
              { title: "抵销披露", desc: "对接国际认证机构（TUV/SGS）。" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-accent font-serif font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-lg mb-3 text-ink">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4 border-b border-stone-200 pb-2">产品分类</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
                      activeCategory === cat 
                        ? 'bg-stone-900 text-white' 
                        : 'text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="group">
                  <div className="card-editorial h-full flex flex-col p-0 overflow-hidden">
                    <div className="h-56 overflow-hidden bg-stone-100 relative">
                      <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-stone-200">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{product.name}</h3>
                      <p className="text-stone-600 mb-6 line-clamp-2 flex-grow leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center text-ink font-medium group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
