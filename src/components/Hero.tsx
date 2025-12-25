import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-20 lg:pt-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
         {/* Gradient Overlay: Adjusted to be less opaque on the right side so the image shows through */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40 z-10"></div>
         
         {/* New Image: High quality Industrial/Tech factory setting */}
         <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Ingeniera industrial con tablet controlando fábrica"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Nueva versión 2.0 disponible
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight animate-fade-in delay-100">
            El control total de tu fábrica <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              en tiempo real
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed animate-fade-in delay-200">
            Olvídate de las hojas de cálculo. Nexwil ERP centraliza producción, inventario y facturación en una interfaz diseñada para humanos, no para robots.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primaryHover hover:shadow-lg hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900 active:scale-95"
            >
              Comenzar Gratis
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900 active:scale-95"
            >
              <PlayCircle className="mr-2 -ml-1 h-5 w-5" />
              Ver Demo
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 animate-fade-in delay-300">
             <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                   <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-950 grayscale opacity-70" src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Usuario" />
                ))}
             </div>
             <p>Más de <span className="text-white font-bold">500+ empresas</span> confían en nosotros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}