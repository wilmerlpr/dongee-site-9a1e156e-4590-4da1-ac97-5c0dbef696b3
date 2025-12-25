import React from 'react';
import { Check, Box, Sliders } from 'lucide-react';

export default function ProductMgmt() {
  return (
    <div id="products" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1 mt-12 lg:mt-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-800 group">
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Gestión de almacén moderno con cajas"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Floating Stats Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 z-20 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-xs font-semibold text-slate-400 uppercase">Stock Total</span>
                       <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+12% vs mes anterior</span>
                    </div>
                    <div className="text-2xl font-bold text-white">45,231 <span className="text-sm font-normal text-slate-500">unidades</span></div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                       <div className="bg-primary h-full rounded-full w-[75%]"></div>
                    </div>
                 </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Box className="w-3 h-3 mr-2" />
              Inventario Avanzado
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Maestro de Productos Flexible
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Tu inventario no es estático, y tu software tampoco debería serlo. Nexwil te permite modelar productos complejos con múltiples atributos, variantes y listas de precios.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Sliders className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Atributos Dinámicos</h4>
                  <p className="mt-2 text-slate-400">Configura Talla, Color, Material, Lote, Fecha de Vencimiento o cualquier campo que tu industria requiera.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Multi-Almacén y Ubicaciones</h4>
                  <p className="mt-2 text-slate-400">Gestiona existencias en múltiples sucursales y localiza productos específicos dentro de pasillos y estantes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Kits y Combos</h4>
                  <p className="mt-2 text-slate-400">Agrupa productos individuales para venderlos como paquetes promocionales con descuento automático.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}