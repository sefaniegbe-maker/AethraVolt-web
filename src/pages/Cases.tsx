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
    <div className="pt-24 pb-20 bg-[#050505] min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-sans font-medium mb-6 text-white tracking-tight">
            成功案例
          </h1>
          <p className="text-xl text-stone-400 font-sans leading-relaxed font-light">
            AethraVolt 零碳解决方案在各行各业的实际应用。
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-stone-800 pb-8">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndustry === ind 
                  ? 'bg-blue-600 text-white border border-blue-600' 
                  : 'bg-transparent border border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white'
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
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800 rounded-2xl h-full flex flex-col p-0 overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 hover:border-blue-500/50">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" 
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/80 border border-stone-700 backdrop-blur px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 text-stone-300">
                    <Factory size={12} className="text-blue-400" />
                    {item.industry}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-stone-400 text-xs mb-4 uppercase tracking-wider font-medium">
                    <MapPin size={12} className="text-blue-400" />
                    {item.location}
                  </div>
                  
                  <h3 className="text-xl font-sans font-medium mb-4 group-hover:text-blue-400 transition-colors leading-snug text-white tracking-tight">
                    {item.title}
                  </h3>
                  
                  <div className="mb-6 pt-4 border-t border-stone-800">
                    <div>
                      <div className="text-2xl font-sans font-medium text-white tracking-tight">{item.capacity}</div>
                      <div className="text-xs text-stone-500 uppercase tracking-wide font-light">装机容量</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-all">
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
