import React from 'react';
import { ClipboardList, Wallet, Receipt, Calculator, CreditCard, FileText } from 'lucide-react';

const features = [
  {
    name: 'Órdenes de Trabajo',
    description: 'Controla el flujo de producción desde la solicitud hasta la entrega final con estados personalizables.',
    icon: ClipboardList,
  },
  {
    name: 'Cartera de Clientes',
    description: 'Monitoreo visual de cuentas por cobrar. Envía recordatorios automáticos y mejora tu liquidez.',
    icon: Wallet,
  },
  {
    name: 'Facturación Electrónica',
    description: 'Emisión ilimitada de documentos legales validados automáticamente ante la autoridad fiscal.',
    icon: Receipt,
  },
  {
    name: 'Cotizador Inteligente',
    description: 'Crea presupuestos atractivos que se convierten en órdenes de venta con un solo clic.',
    icon: Calculator,
  },
  {
    name: 'Control de Gastos',
    description: 'Registro detallado de compras a proveedores y gastos operativos para calcular tu rentabilidad real.',
    icon: CreditCard,
  },
  {
    name: 'Sistema de Créditos',
    description: 'Administra líneas de crédito para tus mejores clientes con historial de pagos y abonos.',
    icon: FileText,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-3">Potencia tu Negocio</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Todo lo que necesitas para escalar
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hemos simplificado los procesos complejos de un ERP tradicional para que puedas enfocarte en lo que realmente importa: hacer crecer tu empresa.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="relative group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-slate-50 border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                    <feature.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{feature.name}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}