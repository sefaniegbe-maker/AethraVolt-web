import React, { useEffect, useState } from 'react';
import { MapPin, Zap, ArrowRight, Factory, Building, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Cases = () => {
  const [cases, setCases] = useState<any[]>([]);
  const [activeIndustry, setActiveIndustry] = useState('All');
  const { t } = useLanguage();

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => setCases(data))
      .catch(err => console.error(err));
  }, []);

  const industries = ['全部', '制造业', '园区'];

  const filteredCases = activeIndustry === '全部' 
    ? cases 
    : cases.filter(c => c.industry === activeIndustry);

  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-ink">
            成功案例
          </h1>
          <p className="text-xl text-stone-600 font-sans leading-relaxed">
            AethraVolt 零碳解决方案在各行各业的实际应用。
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-stone-200 pb-8">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndustry === ind 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <Link key={item.id} to={`/cases/${item.id}`} className="group">
              <div className="card-editorial h-full flex flex-col p-0 overflow-hidden hover:shadow-md transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Factory size={12} />
                    {item.industry}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-stone-500 text-xs mb-4 uppercase tracking-wider font-medium">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-stone-100">
                    <div>
                      <div className="text-2xl font-serif text-ink">{item.capacity}</div>
                      <div className="text-xs text-stone-500 uppercase tracking-wide">装机容量</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif text-accent">{item.savings}</div>
                      <div className="text-xs text-stone-500 uppercase tracking-wide">年收益</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex items-center text-sm font-medium text-ink group-hover:translate-x-1 transition-transform">
                    查看案例详情 <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
