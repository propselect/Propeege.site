import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Heart, ShieldCheck, Users } from 'lucide-react';
import { STAFF } from '../constants';

export const About = () => {
  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase block">Our Story</span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark leading-tight">
                Bringing Excellence to <br /> <span className="text-primary italic">Zaria's</span> Beauty Scene
              </h1>
              <p className="text-dark/60 text-lg font-body leading-relaxed max-w-xl">
                Halima Professional Salon was founded with a simple yet powerful mission: to provide world-class beauty care using safe, high-quality products. What started as a passion for hair health has grown into a trusted community hub for wellness and style.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <p className="text-4xl font-heading font-bold text-primary">5+</p>
                  <p className="text-xs font-button uppercase tracking-widest text-dark/40">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-heading font-bold text-primary">1k+</p>
                  <p className="text-xs font-button uppercase tracking-widest text-dark/40">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-rose-50">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                  alt="Inside the Salon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white border-t border-rose-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: 'Our Mission', 
                desc: 'To enhance your natural beauty and confidence through safe, personalized services.',
                icon: <Heart size={32} />
              },
              { 
                title: 'Our Standards', 
                desc: 'Meticulous hygiene, premium skin-friendly products, and continuous staff training.',
                icon: <ShieldCheck size={32} />
              },
              { 
                title: 'Our Community', 
                desc: 'Creating a warm, welcoming space where every client is treated like family.',
                icon: <Users size={32} />
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-10 rounded-[50px] space-y-6 hover:shadow-xl transition-all group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark">{v.title}</h3>
                <p className="text-dark/60 font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
          <span className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase block mb-4">The Professionals</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">Dedicated to Your Care</h2>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {STAFF.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[60px] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-center md:items-start group"
              >
                <div className="w-48 h-48 rounded-[40px] overflow-hidden flex-shrink-0 shadow-lg border-4 border-rose-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-dark">{member.name}</h4>
                    <p className="text-sm font-button font-bold text-primary uppercase tracking-widest">{member.specialty}</p>
                    <p className="text-xs text-dark/30 font-button uppercase mt-1">{member.experience} Experience</p>
                  </div>
                  <p className="text-dark/60 text-sm leading-relaxed font-body italic">
                    "{member.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="py-24 bg-dark text-white rounded-[80px] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Your Self-Care Safe Space</h2>
                <p className="text-white/60 text-lg font-body leading-relaxed">
                  In a post-pandemic world, your health is our priority. We maintain medical-grade hygiene protocols for every treatment.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  'Daily Studio Sanitization',
                  'Fresh Towels for Every Client',
                  'Single-Use Disposables',
                  'Sterilized Manicure Tools',
                  'FDA Approved Skin Products',
                  'Continuous Air Purification'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-sm font-button text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800" 
                alt="Sanitary Equipment"
                className="w-full h-full object-cover rounded-[100px] shadow-2xl skew-y-3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
