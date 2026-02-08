
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our <span className="text-blue-600">Recent Work</span></h2>
            <p className="text-slate-600 text-lg max-w-xl">Take a look at some of the stunning projects we've recently completed for our global clients.</p>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-4">
            <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold hover:bg-blue-600 hover:text-white transition-all">All</button>
            <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold hover:bg-blue-600 hover:text-white transition-all">Print</button>
            <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold hover:bg-blue-600 hover:text-white transition-all">Merch</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group relative rounded-[2rem] overflow-hidden bg-slate-200 aspect-[4/3] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-white font-bold text-2xl">{item.title}</h4>
                <div className="mt-4 flex space-x-2">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                     <i className="fas fa-external-link-alt text-xs"></i>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
            VIEW FULL GALLERY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
