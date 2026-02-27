import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const [news, setNews] = useState<any[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-ink">
            News & Insights
          </h1>
          <p className="text-xl text-stone-600 font-sans leading-relaxed">
            Latest updates, industry trends, and company announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured/Latest News (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            {news.map((item, index) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group block border-b border-stone-200 pb-12 last:border-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
                    <img 
                      src={item.image_url} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-xs font-medium text-stone-500 mb-3 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full" />
                      <span className="text-accent">{item.category || 'Corporate'}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-stone-600 mb-6 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-ink border-b border-ink pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                      Read Article
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-12">
            {/* Categories */}
            <div className="bg-white p-8 rounded-xl border border-stone-200">
              <h3 className="font-serif font-bold text-lg mb-6">Categories</h3>
              <ul className="space-y-3">
                {['Corporate News', 'Industry Insights', 'Technology', 'ESG Reports'].map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="flex justify-between items-center text-stone-600 hover:text-accent transition-colors group">
                      <span>{cat}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-stone-900 text-white p-8 rounded-xl">
              <h3 className="font-serif font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-stone-400 text-sm mb-6">
                Get the latest updates delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-accent transition-colors"
                />
                <button className="w-full btn-primary bg-white text-stone-900 hover:bg-stone-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
