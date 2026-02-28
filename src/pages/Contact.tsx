import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-paper min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8 text-ink">
              联系我们
            </h1>
            <p className="text-xl text-stone-600 font-sans leading-relaxed mb-12">
              对我们的零碳解决方案感兴趣？我们期待听到您的声音。
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">总部地址</h3>
                  <p className="text-stone-600 leading-relaxed">
                    深圳市南山区清华信息港科研楼 309
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">邮件联系</h3>
                  <p className="text-stone-600 mb-1">stefanie.ning@fusionvpp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">电话联系</h3>
                  <p className="text-stone-600">18905577397</p>
                  <p className="text-sm text-stone-400 mt-1">周一至周五, 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-8">发送消息</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-700">主题</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="咨询主题"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">消息内容</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="请详细描述您的需求..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> 发送中...
                  </>
                ) : (
                  <>
                    发送消息 <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                  消息发送成功！我们会尽快回复您。
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                  出错了，请稍后再试。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
