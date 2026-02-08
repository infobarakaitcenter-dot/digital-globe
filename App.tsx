
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Grid */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute top-20 right-0 text-[15rem] font-black text-slate-50 select-none -z-0 leading-none">
          SERVICES
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Mastering the <span className="text-blue-600">Art of Print</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From concept to finished product, we provide a full range of high-end printing services tailored to your unique requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black">15k+</p>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black">1200</p>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Global Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black">24h</p>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Average Turnaround</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black">100%</p>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
      <AIConsultant />
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -ml-32 -mb-32"></div>
             
             <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">Ready to start your <br /> next <span className="text-blue-500">printing project?</span></h2>
             <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Join thousands of businesses who trust Digital Globe for their premium brand visibility and high-quality printed materials.</p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1">
                 REQUEST A QUOTE
               </button>
               <button className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                 CONTACT SALES
               </button>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
