import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Leaf } from 'lucide-react';

const Cases = () => {
  const [cases, setCases] = useState<any[]>([]);
  const [filter, setFilter] = useState('全部');

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => setCases(data))
      .catch(err => console.error(err));
  }, []);

  const industries = ['全部', '制造业', '园区', '商业建筑'];

  const filteredCases = filter === '全部' 
    ? cases 
    : cases.filter(c => c.industry === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">成功案例</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            见证我们如何帮助客户实现零碳转型与降本增效
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === ind 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
                  {item.industry}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-slate-400 font-mono text-sm">{item.year}</span>
                </div>
                <p className="text-slate-600 mb-8 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8 border-t border-slate-100 pt-6">
                  {item.results?.slice(0, 3).map((res: string, i: number) => (
                    <div key={i} className="text-center">
                      <div className="text-blue-600 font-bold text-sm mb-1">{res.split(/(\d+)/)[1] || 'High'}</div>
                      <div className="text-xs text-slate-400">{res.replace(/\d+/g, '').replace(/[\%\+]/g, '')}</div>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/cases/${item.id}`}
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all"
                >
                  查看详情 <ArrowRight size={18} className="text-blue-600" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
