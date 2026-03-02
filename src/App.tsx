import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import CaseDetail from './pages/CaseDetail';

// Placeholder components for now
const Placeholder = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-slate-600">正在建设中...</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Placeholder title="解决方案" />} />
          <Route path="/systems" element={<Placeholder title="产品与系统" />} />
          <Route path="/platform" element={<Placeholder title="AI能源平台" />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/business" element={<Placeholder title="商业模式" />} />
          <Route path="/insights" element={<Placeholder title="资源中心" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Keep old routes for now to avoid breaking links if any remain */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
