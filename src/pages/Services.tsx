import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Clock, Heart } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { Link } from 'react-router-dom';

export const Services = () => {
  const categories = ['Hair', 'Skincare', 'Nails', 'Spa', 'Special'];
  const [activeCategory, setActiveCategory] = React.useState('Hair');

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            Elegance in Every Detail
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6"
          >
            Our Service Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark/60 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed"
          >
            Explore our curated selection of premium beauty and wellness treatments designed for your physical and mental rejuvenation.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-rose-100 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 py-4 flex justify-between md:justify-center gap-2 md:gap-8 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-button text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-rose-50 text-dark/70 hover:bg-rose-100'
              }`}
            >
              {cat} Services
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <section className="pt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="container mx-auto px-4 max-w-6xl mt-24">
        <div className="bg-primary rounded-[50px] overflow-hidden relative p-12 lg:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 group shadow-2xl">
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">The Weekend Self-Care Bundle</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Combine any 2 services this weekend and get a free glow consultation + complimentary refreshment.
            </p>
            <p className="text-3xl font-heading font-bold">Only ₦18,000</p>
            <Link 
              to="/booking" 
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-button font-bold text-lg hover:scale-105 transition-transform"
            >
              Secure This Bundle
            </Link>
          </div>
          <div className="relative w-full max-w-xs md:max-w-md aspect-square">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse scale-90" />
            <img 
              src="https://images.unsplash.com/photo-1544171905-17dbbd76865d?auto=format&fit=crop&q=80&w=600" 
              alt="Self Care"
              className="relative z-10 w-full h-full object-cover rounded-[100px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: Service, index: number, key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-rose-50 flex flex-col group h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors">{service.name}</h3>
          <div className="flex items-center gap-4 text-dark/40 text-xs font-button uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary/60" /> {service.duration}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary/60" /> {service.priceRange}</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-rose-100 flex items-center justify-center text-rose-200 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
          <Heart size={20} />
        </div>
      </div>
      
      <p className="text-dark/60 font-body text-sm leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="pt-8 mt-auto border-t border-rose-50 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-button uppercase tracking-[0.2em] text-dark/40">Benefit</p>
          <p className="text-xs font-body font-semibold text-primary">{service.benefit}</p>
        </div>
        <Link 
          to="/booking" 
          className="bg-dark text-white px-6 py-2.5 rounded-full font-button text-xs font-bold hover:bg-primary transition-all flex items-center gap-2 group/btn"
        >
          Book Now
          <ShoppingBag size={14} className="group-hover/btn:translate-y-[-2px] transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
