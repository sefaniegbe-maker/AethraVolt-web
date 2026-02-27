import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle2, Zap, Cpu } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> 返回产品列表
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[400px] md:h-auto bg-slate-100">
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{product.name}</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {product.features?.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-8 mb-8">
                <h3 className="font-bold text-lg mb-4">技术参数</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {Object.entries(product.specs || {}).map(([key, value]: [string, any]) => (
                    <div key={key}>
                      <div className="text-xs text-slate-400 uppercase">{key}</div>
                      <div className="font-mono text-slate-900 font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  咨询报价
                </button>
                <button className="flex items-center justify-center gap-2 px-6 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                  <Download size={18} /> 资料下载
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
