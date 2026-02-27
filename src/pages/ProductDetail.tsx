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

  if (loading) return <div className="pt-32 text-center text-ink font-serif">Loading...</div>;
  if (!product) return <div className="pt-32 text-center text-ink font-serif">Product not found</div>;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-stone-500 hover:text-accent mb-8 transition-colors font-medium text-sm uppercase tracking-wide">
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[400px] md:h-auto bg-stone-100 relative">
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="inline-block px-3 py-1 rounded-full border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider mb-6">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-ink mb-6">{product.name}</h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-sans">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {product.features?.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-stone-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-8 mb-8">
                <h3 className="font-serif font-bold text-lg mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                  {Object.entries(product.specs || {}).map(([key, value]: [string, any]) => (
                    <div key={key}>
                      <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">{key}</div>
                      <div className="font-mono text-ink font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 btn-primary">
                  Request Quote
                </button>
                <button className="flex items-center justify-center gap-2 px-6 border border-stone-300 rounded-full font-medium text-ink hover:bg-stone-50 transition-colors">
                  <Download size={18} /> Datasheet
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
