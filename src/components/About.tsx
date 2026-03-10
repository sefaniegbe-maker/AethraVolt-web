import React from 'react';
import { motion } from 'motion/react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { AnimatedCounter } from './AnimatedCounter';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
  { name: "Shenzhen HQ", coordinates: [114.0579, 22.5431] },
  { name: "California", coordinates: [-119.4179, 36.7783] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Thailand", coordinates: [100.9925, 15.8700] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] },
  { name: "Australia", coordinates: [133.7751, -25.2744] }
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Value Creation */}
        <div className="mb-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light tracking-tight mb-16"
          >
            用数据定义 <span className="text-gradient-tech font-medium">零碳新质生产力</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white mb-4">
                <AnimatedCounter value={1} suffix="GW+" duration={2.5} />
              </div>
              <p className="text-sm text-white/50 tracking-widest uppercase">累计运营可再生能源资产</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white mb-4">
                <AnimatedCounter value={5} suffix="亿度" duration={3} />
              </div>
              <p className="text-sm text-white/50 tracking-widest uppercase">累计节约电能</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-thin tracking-tighter text-white mb-4">
                <AnimatedCounter value={30} suffix="万吨" duration={3.5} />
              </div>
              <p className="text-sm text-white/50 tracking-widest uppercase">累计减少碳排放</p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 font-light tracking-wide max-w-3xl mx-auto"
          >
            "我们不仅提供能源解决方案，更构建可持续发展的底层能源能力。"
          </motion.p>
        </div>

        {/* Global Layout Map */}
        <div className="mb-32">
          <h3 className="text-2xl font-light text-center mb-12 tracking-widest">全球化布局</h3>
          <div className="w-full max-w-5xl mx-auto aspect-[2/1] relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden glass-panel p-4">
            <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-full">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1A1A1A"
                      stroke="#333333"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#222", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  <circle r={4} fill="#00E5FF" className="animate-pulse" />
                  <circle r={12} fill="#0066FF" opacity={0.3} className="animate-ping" />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        {/* Company Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bento-card">
            <h4 className="text-[#00E5FF] text-sm font-medium tracking-widest mb-4">核心愿景</h4>
            <p className="text-white/70 font-light text-sm leading-relaxed">成为全球领先的零碳新质生产力运营商，让清洁能源触手可及。</p>
          </div>
          <div className="bento-card">
            <h4 className="text-[#00E5FF] text-sm font-medium tracking-widest mb-4">核心定位</h4>
            <p className="text-white/70 font-light text-sm leading-relaxed">成立于2017年加州，2025年设立深圳总部。AI+能源双轮驱动。</p>
          </div>
          <div className="bento-card">
            <h4 className="text-[#00E5FF] text-sm font-medium tracking-widest mb-4">聚焦领域</h4>
            <p className="text-white/70 font-light text-sm leading-relaxed">低碳绿色能源、能源精益运营、ESG价值创造。</p>
          </div>
          <div className="bento-card">
            <h4 className="text-[#00E5FF] text-sm font-medium tracking-widest mb-4">客户价值</h4>
            <p className="text-white/70 font-light text-sm leading-relaxed">数字化、去碳化、智能化，助力企业实现零碳转型。</p>
          </div>
        </div>

      </div>
    </section>
  );
};
