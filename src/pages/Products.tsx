import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">产品与解决方案</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            全栈式能源数字化产品矩阵，赋能企业绿色转型
          </p>
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

export default Products;
