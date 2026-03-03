import React from 'react';
import { MapPin, Zap, ArrowRight, Factory, Building, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { casesData } from '../data/cases';

const Cases = () => {
  const { t } = useLanguage();

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

        {/* Cases List */}
        <div className="flex flex-col gap-24">
          {casesData.map((item, index) => (
            <div key={item.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Empty Image Placeholder */}
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] bg-stone-900/30 border border-stone-800/60 rounded-3xl flex items-center justify-center relative overflow-hidden group hover:border-stone-700 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col items-center gap-3 text-stone-600">
                  <div className="w-12 h-12 rounded-full bg-stone-800/50 flex items-center justify-center mb-2">
                    <Sun size={20} className="text-stone-500 opacity-50" />
                  </div>
                  <span className="font-sans tracking-widest uppercase text-sm font-light">
                    图片位置
                  </span>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                    <Factory size={12} />
                    {item.industry}
                  </div>
                  <div className="flex items-center gap-2 text-stone-400 text-sm uppercase tracking-wider font-medium">
                    <MapPin size={14} className="text-blue-400" />
                    {item.location}
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-sans font-medium mb-6 text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-lg text-stone-400 mb-8 leading-relaxed font-light">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="bg-stone-900/40 border border-stone-800 rounded-2xl p-5 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">{item.capacity}</div>
                    <div className="text-xs sm:text-sm text-stone-500 uppercase tracking-wide font-light">装机容量</div>
                  </div>
                  <div className="bg-stone-900/40 border border-stone-800 rounded-2xl p-5 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">{item.savings}</div>
                    <div className="text-xs sm:text-sm text-stone-500 uppercase tracking-wide font-light">经济效益</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {item.results && item.results.map((result: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-stone-300 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      {result}
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-stone-800/50">
                  <Link to={`/cases/${item.id}`} className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group">
                    查看案例详情 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
