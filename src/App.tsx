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
  <div className="pt-32 pb-20 container mx-auto px-4">
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
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
