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
              Get in Touch
            </h1>
            <p className="text-xl text-stone-600 font-sans leading-relaxed mb-12">
              Interested in our zero-carbon solutions? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Headquarters</h3>
                  <p className="text-stone-600 leading-relaxed">
                    123 Innovation Road, Nanshan District<br />
                    Shenzhen, Guangdong, China
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-stone-600 mb-1">General: contact@aethravolt.com</p>
                  <p className="text-stone-600">Sales: sales@aethravolt.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-ink">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-stone-600">+86 755 8888 6666</p>
                  <p className="text-sm text-stone-400 mt-1">Mon-Fri, 9am - 6pm CST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                  Something went wrong. Please try again later.
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
