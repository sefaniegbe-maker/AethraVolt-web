import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, PieChart, TrendingUp, MapPin } from 'lucide-react';

const CaseDetail = () => {
  const { id } = useParams();
  const [caseItem, setCaseItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/cases/${id}`)
      .then(res => res.json())
      .then(data => {
        setCaseItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-32 text-center text-ink font-serif">Loading...</div>;
  if (!caseItem) return <div className="pt-32 text-center text-ink font-serif">Case not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-paper">
      {/* Hero */}
      <div className="relative h-[60vh] bg-stone-900 overflow-hidden">
        <img 
          src={caseItem.image_url} 
          alt={caseItem.title} 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto px-6 md:px-12">
            <Link to="/cases" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm uppercase tracking-wide">
              <ArrowLeft size={16} /> 返回案例列表
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white text-stone-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{caseItem.industry}</span>
              <span className="text-white/60 font-mono text-sm border-l border-white/20 pl-4">{caseItem.year}</span>
              <span className="text-white/60 font-sans text-sm border-l border-white/20 pl-4 flex items-center gap-2">
                <MapPin size={14} /> {caseItem.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white max-w-4xl leading-tight">{caseItem.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6 text-ink">项目背景与挑战</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 font-sans">
              {caseItem.description}
            </p>

            <h2 className="text-2xl font-serif font-bold mb-6 text-ink">解决方案</h2>
            <div className="text-stone-600 text-lg leading-relaxed mb-12 font-sans">
              AethraVolt 为该项目提供了定制化的零碳解决方案，通过部署 AethraEdge 边缘控制器与 AethraGrid 能源管理平台，实现了能源的数字化管理与优化调度。
              <ul className="list-disc pl-6 mt-6 space-y-4 marker:text-accent">
                <li>部署 <strong>AethraEdge</strong> 边缘控制器，实现毫秒级智能调节。</li>
                <li>建设分布式光伏与储能系统，提高绿电使用比例。</li>
                <li>集成 <strong>AethraGrid</strong> 能源管理云平台，实现全厂能流可视化与碳排放实时监测。</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-8 border border-stone-200 sticky top-32">
              <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-2 text-ink">
                核心成果
              </h3>
              <div className="space-y-8">
                {caseItem.results?.map((res: string, i: number) => {
                  return (
                    <div key={i} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                      <div className="text-xl font-serif text-accent mb-2">
                        {res}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
