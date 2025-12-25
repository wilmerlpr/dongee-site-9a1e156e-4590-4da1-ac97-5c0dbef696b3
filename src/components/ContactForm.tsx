import React, { useState } from 'react';
import { supabase } from '../supabase';
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              ¿Listo para transformar tu gestión?
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Solicita una demostración personalizada hoy mismo. Nuestro equipo analizará tus requerimientos y te mostrará cómo Nexwil se adapta a tu flujo de trabajo.
            </p>
            
            <div className="mt-10 space-y-6">
               <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-50 rounded-full text-primary">
                     <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                     <h4 className="font-bold text-slate-900">Implementación Asistida</h4>
                     <p className="text-sm text-slate-600">Importamos tus datos y configuramos el sistema por ti.</p>
                  </div>
               </div>
               <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-50 rounded-full text-primary">
                     <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                     <h4 className="font-bold text-slate-900">Soporte 24/7</h4>
                     <p className="text-sm text-slate-600">Acceso directo a ingenieros vía chat y teléfono.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Déjanos tus datos</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="block w-full pl-10 rounded-xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm p-3.5 transition-all placeholder-slate-400"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo corporativo</label>
                <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="block w-full pl-10 rounded-xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm p-3.5 transition-all placeholder-slate-400"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">¿Cómo podemos ayudarte?</label>
                <div className="relative">
                   <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="block w-full pl-10 rounded-xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm p-3.5 transition-all placeholder-slate-400"
                    placeholder="Cuéntanos sobre los retos de tu empresa..."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                >
                  {loading ? 'Enviando...' : <><span className="mr-2">Enviar Solicitud</span> <Send className="h-4 w-4"/></>}
                </button>
              </div>
              {status === 'success' && (
                 <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl flex items-center animate-fade-in">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">¡Recibido! Nos pondremos en contacto contigo pronto.</span>
                 </div>
              )}
              {status === 'error' && (
                 <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center animate-fade-in">
                    <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">Error al enviar. Por favor verifica tu conexión.</span>
                 </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}