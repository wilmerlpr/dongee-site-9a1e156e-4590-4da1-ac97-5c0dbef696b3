import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductMgmt from './components/ProductMgmt';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <div>
        <Hero />
        <Features />
        <ProductMgmt />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;