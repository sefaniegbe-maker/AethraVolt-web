import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, PieChart, TrendingUp } from 'lucide-react';

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

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!caseItem) return <div className="pt-32 text-center">Case not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] bg-slate-900">
        <img 
          src={caseItem.image_url} 
          alt={caseItem.title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link to="/cases" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={18} /> 返回案例列表
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">{caseItem.industry}</span>
              <span className="text-white/60 font-mono">{caseItem.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl">{caseItem.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">项目背景与挑战</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              {caseItem.description}
              <br /><br />
              随着全球碳中和进程加速，该客户面临着巨大的能源成本压力和供应链减碳要求。传统能源管理方式粗放，缺乏精细化数据支撑，难以满足日益严格的ESG合规需求。
            </p>

            <h2 className="text-2xl font-bold mb-6">解决方案</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              合擎源动为其量身定制了“零碳工厂”整体解决方案：
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>部署 <strong>AethraEdge</strong> 边缘控制器，实现高耗能设备的毫秒级智能调控。</li>
                <li>建设 2MW 分布式光伏与 1MWh 储能系统，提升绿电使用比例。</li>
                <li>接入 <strong>AethraGrid</strong> 能源管理云平台，实现全厂能流可视化与碳排实时监测。</li>
              </ul>
            </p>
          </div>

          <div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-32">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="text-blue-600" /> 项目成果
              </h3>
              <div className="space-y-6">
                {caseItem.results?.map((res: string, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {res.match(/[\d\.]+/)?.[0]}
                      <span className="text-sm ml-1 text-slate-500 font-normal">
                        {res.replace(/[\d\.]+/g, '')}
                      </span>
                    </div>
                    <div className="text-sm text-slate-400">关键指标提升</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
