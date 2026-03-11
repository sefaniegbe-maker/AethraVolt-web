import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Cases } from './components/Cases';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#00E5FF]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Cases />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;