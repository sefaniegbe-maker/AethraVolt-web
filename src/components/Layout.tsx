import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品中心', path: '/products' },
    { name: '案例中心', path: '/cases' },
    { name: '新闻动态', path: '/news' },
    { name: '关于我们', path: '/about' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Navigation */}
      <header
        className={clsx(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5 text-white'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-blue-600 transition-colors">
              A
            </div>
            <div className={clsx("flex flex-col", isScrolled ? "text-slate-900" : "text-white")}>
              <span className="font-bold text-lg leading-none tracking-tight">AethraVolt</span>
              <span className="text-xs opacity-80 tracking-widest uppercase">合擎源动</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'text-sm font-medium hover:text-blue-500 transition-colors relative group',
                  isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <button className={clsx("flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full border transition-colors", 
              isScrolled ? "border-slate-200 hover:bg-slate-100" : "border-white/30 hover:bg-white/10 text-white")}>
              <Globe size={14} />
              <span>CN</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium text-slate-900">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="border-b border-slate-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">A</div>
                <span className="font-bold text-xl">AethraVolt</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI驱动能源自主，定义零碳新质生产力。
                <br />
                我们致力于为全球企业提供领先的智慧能源解决方案。
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">快速链接</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">产品中心</Link></li>
                <li><Link to="/cases" className="hover:text-blue-400 transition-colors">成功案例</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">关于我们</Link></li>
                <li><Link to="/news" className="hover:text-blue-400 transition-colors">新闻动态</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">解决方案</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">零碳工厂</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">智慧园区</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">分布式光储</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">能源数字化</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">联系我们</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>深圳市南山区科技园南区<br />R3-A栋 12层</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  <span>+86 755 8888 6666</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <span>contact@aethravolt.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2026 Shenzhen AethraVolt Technology Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">粤ICP备20250000号</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
