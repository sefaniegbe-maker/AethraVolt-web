import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

const News = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">新闻动态</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            了解行业前沿资讯与公司最新动态
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors">
                  <Link to={`/news/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {item.summary}
                </p>
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
                >
                  阅读全文 <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
