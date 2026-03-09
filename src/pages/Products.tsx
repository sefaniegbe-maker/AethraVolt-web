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
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Expected array of products, got:', data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setProducts([]);
      });
  }, []);

  const categories = ['全部', '智能设备', '软件系统', '解决方案'];

  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-[#050505] min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-sans font-medium mb-6 text-white tracking-tight">
            产品矩阵
          </h1>
          <p className="text-xl text-stone-400 font-sans leading-relaxed font-light">
            以 AethraCore AI 模型为核心的 1+5 多维产品矩阵。
          </p>
        </div>

        {/* 1+5 Matrix Visual Section */}
        <div className="mb-24 bg-stone-900/40 backdrop-blur-sm border border-stone-800 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans font-medium mb-4 tracking-tight">1+5 产品架构</h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light">
              AethraCore 能源中枢Agent 驱动五大应用平台
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Wing */}
            <div className="space-y-6">
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-blue-500/50 transition-colors group bg-stone-900/50">
                <div className="p-3 bg-stone-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Zap className="text-stone-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-1 tracking-tight">AethraSource</h3>
                  <p className="text-sm text-stone-400 font-light">设备管理与能效优化</p>
                </div>
              </div>
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-blue-500/50 transition-colors group bg-stone-900/50">
                <div className="p-3 bg-stone-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Leaf className="text-stone-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-1 tracking-tight">AethraCarbon</h3>
                  <p className="text-sm text-stone-400 font-light">智慧碳管理平台</p>
                </div>
              </div>
            </div>

            {/* Core */}
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-stone-800 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-stone-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="w-48 h-48 bg-stone-900 border border-stone-800 rounded-full flex flex-col items-center justify-center text-white z-10 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full animate-pulse" />
                <Cpu size={48} className="mb-2 text-blue-400 relative z-10" />
                <span className="font-sans font-medium text-xl relative z-10 tracking-tight">AethraCore</span>
                <span className="text-xs text-stone-400 mt-1 relative z-10 font-light">能源中枢 Agent</span>
              </div>
            </div>

            {/* Right Wing */}
            <div className="space-y-6">
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-blue-500/50 transition-colors group bg-stone-900/50">
                <div className="p-3 bg-stone-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Settings className="text-stone-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-1 tracking-tight">AethraGrid</h3>
                  <p className="text-sm text-stone-400 font-light">智慧能源管理平台</p>
                </div>
              </div>
              <div className="card-editorial p-6 flex items-start gap-4 hover:border-blue-500/50 transition-colors group bg-stone-900/50">
                <div className="p-3 bg-stone-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <BarChart3 className="text-stone-400 group-hover:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-1 tracking-tight">AethraOps</h3>
                  <p className="text-sm text-stone-400 font-light">智能运维平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Dimension Construction System */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans font-medium mb-4 tracking-tight">"六维" 建设体系</h2>
            <p className="text-stone-400 font-light">对标“零碳工厂评价规范”</p>
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
              <div key={i} className="bg-stone-900/40 backdrop-blur-sm p-8 rounded-2xl border border-stone-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 font-sans font-medium text-xl mb-4 border border-blue-500/20">
                  {i + 1}
                </div>
                <h3 className="font-sans font-medium text-lg mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <div>
              <h3 className="font-sans font-medium text-lg mb-4 border-b border-stone-800 pb-2 tracking-tight">产品分类</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium font-sans ${
                      activeCategory === cat 
                        ? 'bg-blue-600 text-white' 
                        : 'text-stone-400 hover:bg-stone-800 hover:text-white'
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
                  <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800 rounded-2xl h-full flex flex-col overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                    <div className="h-56 overflow-hidden bg-stone-900 relative">
                      <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-stone-700 text-stone-300">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-sans font-medium mb-3 group-hover:text-blue-400 transition-colors tracking-tight">{product.name}</h3>
                      <p className="text-stone-400 mb-6 line-clamp-2 flex-grow leading-relaxed font-light">
                        {product.description}
                      </p>
                      <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
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
