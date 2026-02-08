
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <i className={`fas ${service.icon} text-xl`}></i>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm font-medium text-slate-500">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>
              {feature}
            </div>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-50">
          <button className="text-blue-600 font-bold flex items-center group/btn">
            LEARN MORE
            <i className="fas fa-arrow-right ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
