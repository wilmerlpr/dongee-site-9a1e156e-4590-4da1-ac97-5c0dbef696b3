import React from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-gradient-to-br from-primary to-indigo-600 p-2 rounded-lg">
               <Hexagon className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="ml-3 text-xl font-bold text-white tracking-wide">Nexwil ERP</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Características</a>
            <a href="#products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Inventario</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">Contacto</a>
            <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900 hover:bg-primaryHover active:scale-95 shadow-lg shadow-indigo-500/30">
              Solicitar Demo
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 space-y-6">
           <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors">Características</a>
           <a href="#products" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors">Inventario</a>
           <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors">Contacto</a>
           <hr className="border-slate-800"/>
           <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-primary text-white font-bold rounded-xl active:scale-95 transition-transform">
             Solicitar Demo
           </a>
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white">
             <X className="h-8 w-8" />
           </button>
        </div>
      </div>
    </nav>
  );
}