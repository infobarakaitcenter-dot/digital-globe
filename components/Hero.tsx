
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold tracking-widest uppercase">
            Transforming Ideas into Reality
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            High-Definition <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Printing Solutions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            From sharp digital prints to massive billboard banners, Digital Globe delivers premium quality that speaks for itself. Experience the future of printing today.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#services" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center group">
              Explore Services
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#ai-consultant" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Talk to AI Expert
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://picsum.photos/seed/printing-hero/800/800" 
              alt="Professional Printing Press" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-check text-xl"></i>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">99.9% Precision</p>
              <p className="text-slate-500 text-sm">Industrial Grade Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
