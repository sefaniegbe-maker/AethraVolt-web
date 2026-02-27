import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, History, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Intro */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">关于合擎源动</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            深圳合擎源动科技有限公司（AethraVolt）是一家AI+能源驱动的“零碳新质生产力”运营商。
            我们致力于通过人工智能与大数据技术，重构能源管理范式，助力全球企业实现绿色低碳转型。
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-slate-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-10 h-10 text-blue-600" />, title: "使命", desc: "以AI驱动能源自主，定义零碳新质生产力" },
              { icon: <Users className="w-10 h-10 text-blue-600" />, title: "愿景", desc: "成为全球领先的零碳新质生产力运营商" },
              { icon: <Award className="w-10 h-10 text-blue-600" />, title: "价值观", desc: "创新、务实、共赢、可持续" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-16">发展历程</h2>
        <div className="max-w-3xl mx-auto relative border-l-2 border-blue-100 pl-8 space-y-12">
          {[
            { year: "2025", title: "全球化布局", desc: "启动欧洲与东南亚市场战略，发布AethraCore大模型。" },
            { year: "2024", title: "高速成长期", desc: "完成A轮融资，累计服务客户超100家，管理负荷超500MW。" },
            { year: "2023", title: "产品落地", desc: "发布AethraEdge边缘控制器，首个零碳工厂项目交付。" },
            { year: "2022", title: "公司成立", desc: "深圳合擎源动科技有限公司成立，确立AI+能源战略方向。" }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "张三", role: "CEO / 创始人", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
              { name: "李四", role: "CTO / 首席科学家", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "王五", role: "COO / 运营总监", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
              { name: "赵六", role: "海外市场VP", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-700 group-hover:border-blue-500 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
