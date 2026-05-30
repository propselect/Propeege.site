import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send,
  Instagram,
  Facebook,
  Twitter,
  Clock
} from 'lucide-react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6"
          >
            Let's Connect
          </motion.h1>
          <p className="text-dark/60 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Have a question about our services or want to book a special group session? We're here to help.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-7xl pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Call Us', detail: CONTACT_INFO.phone, icon: <Phone size={24} />, color: 'bg-primary' },
                { title: 'WhatsApp', detail: 'Chat with us instantly', sub: CONTACT_INFO.whatsapp, icon: <MessageCircle size={24} />, color: 'bg-highlight' },
                { title: 'Email Us', detail: CONTACT_INFO.email, icon: <Mail size={24} />, color: 'bg-accent' },
                { title: 'Visit Us', detail: 'No 15 Gonan Ganye, Zaria', icon: <MapPin size={24} />, color: 'bg-dark' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-[40px] shadow-sm border border-rose-50 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-dark">{item.title}</h4>
                    <p className="text-dark/60 font-body text-sm mt-1">{item.detail}</p>
                    {item.sub && <p className="text-primary font-button font-bold text-xs mt-2">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Opening Hours & Map Placeholder */}
            <div className="bg-dark rounded-[50px] p-10 text-white space-y-8 shadow-2xl">
              <h3 className="text-3xl font-heading font-bold">Standard Opening Hours</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/40 font-button uppercase text-xs tracking-widest">Mon - Sat</span>
                  <span className="font-body text-lg">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-white/40 font-button uppercase text-xs tracking-widest">Sunday</span>
                  <span className="font-body text-lg">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="pt-6 space-y-4">
                <p className="text-white/40 text-xs font-button uppercase tracking-widest">Find Us on Socials</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram /></a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook /></a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 lg:p-16 rounded-[60px] shadow-xl border border-rose-100"
          >
            <h3 className="text-3xl font-heading font-bold text-dark mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="block">
                  <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Your Name</span>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Halima Abubakar"
                    className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Email Address</span>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="halima@example.com"
                    className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Subject</span>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Service Inquiry"
                  className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                />
              </label>
              <label className="block">
                <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">How can we help?</span>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Message..."
                  className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all resize-none"
                />
              </label>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-3xl font-button font-bold text-lg shadow-xl shadow-primary/20 hover:bg-rose-500 transition-all flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="container mx-auto px-4 max-w-7xl mt-24">
        <div className="bg-white rounded-[60px] p-4 shadow-xl border border-rose-50 overflow-hidden h-[500px]">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_REAL_KEY&q=${encodeURIComponent(CONTACT_INFO.address)}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            className="rounded-[50px]"
          />
        </div>
      </section>
    </div>
  );
};
