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

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!newsItem) return <div className="pt-32 text-center">News not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> 返回新闻列表
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>

        <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {newsItem.date}
            </span>
            <span>|</span>
            <span>合擎源动新闻中心</span>
          </div>
          <button className="text-slate-400 hover:text-blue-600 transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <img 
            src={newsItem.image_url} 
            alt={newsItem.title} 
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            {newsItem.summary}
          </p>
          <div className="text-slate-700 leading-relaxed space-y-6">
            {/* In a real app, this would be HTML content */}
            <p>
              {newsItem.content === '详细内容...' 
                ? '这里是新闻的详细内容。随着全球能源转型的深入，合擎源动始终站在技术创新的前沿...' 
                : newsItem.content}
            </p>
            <p>
              作为AI+能源领域的先行者，我们将继续加大研发投入，为客户创造更多价值。
            </p>
            <h3>核心亮点</h3>
            <ul>
              <li>技术突破：AI算法效率提升30%</li>
              <li>市场拓展：新增欧洲战略合作伙伴</li>
              <li>客户认可：荣获年度最佳能源解决方案奖</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
