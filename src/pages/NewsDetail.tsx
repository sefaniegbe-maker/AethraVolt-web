import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then(res => res.json())
      .then(data => {
        setNewsItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-32 text-center text-ink font-serif">Loading...</div>;
  if (!newsItem) return <div className="pt-32 text-center text-ink font-serif">News not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-paper">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link to="/news" className="inline-flex items-center gap-2 text-stone-500 hover:text-accent mb-12 transition-colors text-sm uppercase tracking-wide font-medium">
          <ArrowLeft size={16} /> Back to News
        </Link>

        <h1 className="text-3xl md:text-5xl font-serif font-medium text-ink mb-8 leading-tight">
          {newsItem.title}
        </h1>

        <div className="flex items-center justify-between border-b border-stone-200 pb-8 mb-12">
          <div className="flex items-center gap-6 text-sm text-stone-500 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {newsItem.date}
            </span>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span>AethraVolt News</span>
          </div>
          <button className="text-stone-400 hover:text-accent transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        <div className="prose prose-lg prose-stone max-w-none font-sans">
          <img 
            src={newsItem.image_url} 
            alt={newsItem.title} 
            className="w-full h-[500px] object-cover rounded-xl mb-12 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <p className="lead text-xl text-stone-600 mb-10 font-serif italic border-l-4 border-accent pl-6">
            {newsItem.summary}
          </p>
          <div className="text-ink leading-relaxed space-y-8">
            <p>
              {newsItem.content === '详细内容...' 
                ? 'Here is the detailed content of the news. As global energy transition deepens, AethraVolt remains at the forefront of technological innovation...' 
                : newsItem.content}
            </p>
            <p>
              As a pioneer in the AI+Energy sector, we will continue to increase R&D investment to create more value for our customers.
            </p>
            <h3 className="font-serif text-2xl mt-12 mb-6 text-ink">Key Highlights</h3>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Technological Breakthrough: AI algorithm efficiency increased by 30%</li>
              <li>Market Expansion: New strategic partners in Europe</li>
              <li>Customer Recognition: Awarded Annual Best Energy Solution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
