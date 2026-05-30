import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Star,
  Zap
} from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

export const Home = () => {
  const featuredServices = SERVICES.slice(0, 4);

  const stats = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Excellence', value: '100%' },
    { label: 'Staff Experience', value: '10+ Yrs' },
  ];

  const testimonials = [
    {
      name: 'Aisha',
      location: 'Zaria',
      rating: 5,
      comment: 'The best salon experience in Zaria! Halima and her team are incredibly professional and my hair looks amazing every time.'
    },
    {
      name: 'Zainab',
      location: 'Gonan Ganye',
      rating: 5,
      comment: 'Their facials are life-changing. Very hygienic and a strictly professional environment. Highly recommended!'
    },
    {
      name: 'Fatima',
      location: 'Zaria',
      rating: 5,
      comment: 'Professional service at affordable prices. I love the warm reception and the quality of products they use.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
            src="/src/assets/images/halima_salon_hero_1780137400777.png"
            alt="Halima Professional Salon"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Halima <br />
              <span className="text-primary italic font-serif">Professional Salon</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-white/90 mb-10 leading-relaxed max-w-lg">
              Your beauty, our passion. Experience premium hair, skin, and wellness care at No 15 Gonan Ganye, Zaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking"
                className="bg-primary hover:bg-rose-500 text-white px-10 py-4 rounded-full font-button font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
              >
                Book Appointment Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-button font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Call / WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats highlight */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex justify-around border border-rose-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <p className="text-3xl font-heading font-bold text-primary group-hover:scale-110 transition-transform">{stat.value}</p>
                <p className="text-xs font-button uppercase tracking-widest text-dark/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Quick Overview) */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Specialties</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight">
                Designed to make you <br /> Feel & Look Extraordinary
              </h2>
            </div>
            <Link to="/services" className="text-primary font-button font-bold group flex items-center gap-2 h-fit pb-2 border-b-2 border-primary/20 hover:border-primary transition-all">
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-rose-50 flex flex-col group"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {idx === 0 && <Scissors size={32} />}
                  {idx === 1 && <Sparkles size={32} />}
                  {idx === 2 && <Zap size={32} />}
                  {idx === 3 && <Sparkles size={32} />}
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <p className="text-primary font-button font-bold text-lg">{service.priceRange}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Stylist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Trust & Quality</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight">
                  Premium Care You <br /> Can Truly Trust
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: 'Highly Trained Stylists', desc: 'Expert therapists and stylists with years of local and international experience.', icon: <CheckCircle2 size={24} /> },
                  { title: 'Strict Hygiene Standards', desc: 'We prioritize your safety with medical-grade sterilization for all our tools.', icon: <CheckCircle2 size={24} /> },
                  { title: 'Premium Products', desc: 'Only approved, skin-friendly, and nourishing products touch your hair and skin.', icon: <CheckCircle2 size={24} /> },
                  { title: 'Warm Atmosphere', desc: 'A comfortable environment designed for your maximum relaxation and peace.', icon: <CheckCircle2 size={24} /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">Loved by Our Clients</h2>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[50px] shadow-sm border border-rose-50"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-dark/80 font-body text-lg leading-relaxed mb-10 italic">
                  "{t.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div className="text-left">
                    <h5 className="font-heading font-bold text-dark">{t.name}</h5>
                    <p className="text-dark/60 text-xs font-button uppercase tracking-tight">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Visit Us Today</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-heading font-bold mb-2 text-white/90 uppercase tracking-widest text-xs">Address</h4>
                    <p className="text-white/60 leading-relaxed font-body">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-heading font-bold mb-2 text-white/90 uppercase tracking-widest text-xs">Opening Hours</h4>
                    <p className="text-white/60 leading-relaxed font-body">Mon - Sat: 8:00 AM - 7:00 PM</p>
                    <p className="text-white/60 leading-relaxed font-body">Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-rose-500 text-white px-8 py-4 rounded-xl font-button font-bold transition-all"
                >
                  Get Directions
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] bg-white/5 relative">
              {/* This would be an embedded map in a real scenario */}
              <div className="absolute inset-0 flex items-center justify-center group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524660988544-14d9ee3c3752?auto=format&fit=crop&q=80&w=1200" 
                  alt="Zaria City View"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-xl">
                    <MapPin size={32} />
                  </div>
                  <p className="text-white font-heading text-2xl font-bold">No 15 Gonan Ganye, Zaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
