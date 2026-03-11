import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-32 pb-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                开启您的 <span className="text-gradient-tech font-medium">零碳之旅</span>
              </h2>
              <p className="text-white/60 font-light tracking-wide mb-12 max-w-md">
                无论您是寻求能源转型，还是希望提升ESG评级，AethraVolt 都是您值得信赖的伙伴。
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00E5FF]/50 transition-colors">
                  <Mail className="text-[#00E5FF]" size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium tracking-widest mb-1">联系邮箱</h4>
                  <a href="mailto:info@aethravolt.com" className="text-white/60 hover:text-white transition-colors font-light">info@aethravolt.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00E5FF]/50 transition-colors">
                  <MapPin className="text-[#00E5FF]" size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium tracking-widest mb-1">全球总部</h4>
                  <p className="text-white/60 font-light mb-2">中国 · 深圳南山区清华信息港科研楼</p>
                  <p className="text-white/60 font-light">美国 · 加利福尼亚州 (California)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card"
          >
            <h3 className="text-2xl font-light mb-8">联系我们</h3>
            <form className="space-y-6 flex flex-col h-full">
              <div>
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00E5FF] transition-colors font-light"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="工作邮箱"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00E5FF] transition-colors font-light"
                />
              </div>
              <div>
                <textarea
                  placeholder="项目需求简述"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00E5FF] transition-colors font-light resize-none"
                />
              </div>
              <button type="button" className="btn-primary w-full flex items-center justify-center gap-2 mt-auto">
                发送信息
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40 font-light">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-white flex items-center">
              <span className="text-[#00E5FF]">A</span>
              <span className="text-[#0066FF]">E</span>
              <span className="text-white">thra</span>
              <span className="text-[#0066FF]">V</span>
              <span className="text-white">olt</span>
            </span>
            <span className="ml-2 border-l border-white/20 pl-2">© 2025 All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">ESG报告</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
