import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const GALLERY_IMAGES = [
  { id: 1, category: 'Hair', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800', title: 'Silk Press & Treatment' },
  { id: 2, category: 'Nails', url: 'https://images.unsplash.com/photo-1604654894610-df490c74fb01?auto=format&fit=crop&q=80&w=800', title: 'Gel Extensions' },
  { id: 3, category: 'Skincare', url: 'https://images.unsplash.com/photo-1570172619997-ec49a606411f?auto=format&fit=crop&q=80&w=800', title: 'Herbal Facial' },
  { id: 4, category: 'Spa', url: 'https://images.unsplash.com/photo-1544161515-4af6b1d4ef7a?auto=format&fit=crop&q=80&w=800', title: 'Aromatherapy Session' },
  { id: 5, category: 'Hair', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', title: 'Knotless Braids' },
  { id: 6, category: 'Bridal', url: 'https://images.unsplash.com/photo-1519415510236-8cd59630d721?auto=format&fit=crop&q=80&w=800', title: 'Bridal Glam' },
  { id: 7, category: 'Nails', url: 'https://images.unsplash.com/photo-1632345033849-54fb14bc1251?auto=format&fit=crop&q=80&w=800', title: 'Nail Art' },
  { id: 8, category: 'Hair', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f80d91f2?auto=format&fit=crop&q=80&w=800', title: 'Natural Hair Care' },
];

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const filters = ['All', 'Hair', 'Skincare', 'Nails', 'Spa', 'Bridal'];

  const filteredImages = activeFilter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-button font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            Visual Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-dark mb-6"
          >
            A Glimpse of Beauty
          </motion.h1>
          <p className="text-dark/60 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Real clients, real results. Browse our collection of inspired styles and rejuvenating treatments.
          </p>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-rose-100 py-6 sticky top-20 z-40 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4 flex justify-between md:justify-center items-center gap-4 min-w-max">
          <Filter size={18} className="text-primary hidden md:block" />
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-8 py-2.5 rounded-full font-button text-xs font-bold transition-all ${
                activeFilter === f 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-rose-50 text-dark/70 hover:bg-rose-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 max-w-7xl pt-16">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-square rounded-[40px] overflow-hidden bg-white shadow-sm border border-rose-50 cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <Maximize2 size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest block w-fit mb-2">
                    {img.category}
                  </span>
                  <h4 className="text-white font-heading font-bold text-lg leading-tight">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-dark/95 flex items-center justify-center p-4"
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-[40px] shadow-2xl object-contain border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="container mx-auto px-4 max-w-4xl text-center mt-24">
        <h3 className="text-3xl font-heading font-bold text-dark mb-6">See a Style You Love?</h3>
        <p className="text-dark/60 font-body mb-8">Save your favorites and show them to our stylists during your visit!</p>
        <Link to="/booking" className="bg-primary text-white px-10 py-4 rounded-full font-button font-bold text-lg hover:bg-rose-500 transition-all inline-block shadow-xl shadow-primary/20">
          Book Appointment Now
        </Link>
      </section>
    </div>
  );
};
