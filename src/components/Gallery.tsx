import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200', title: 'Editorial Bride' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200', title: 'Glow Detail' },
  { url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200', title: 'Red Carpet Glam' },
  { url: 'https://images.unsplash.com/photo-1515688598190-82d0943ea606?auto=format&fit=crop&q=80&w=1200', title: 'Professional Kit' },
  { url: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=1200', title: 'Editorial Updo' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (direction: number) => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + direction + images.length) % images.length;
    setSelectedIndex(nextIndex);
  };

  return (
    <section className="py-24 bg-cream/50" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-gold font-bold block mb-4"
            >
              The Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-charcoal"
            >
              My <span className="italic">Portfolio</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center space-x-6 border-b border-gold/20 pb-2"
          >
            <span className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Follow @MahiPatelArtistry</span>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gold/60 hover:text-gold transition-colors"><Instagram size={16} /></a>
              <a href="#" className="text-gold/60 hover:text-gold transition-colors"><Facebook size={16} /></a>
            </div>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden bg-charcoal cursor-zoom-in"
              onClick={() => setSelectedIndex(i)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-500 pointer-events-none m-4" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 text-cream/60 hover:text-gold transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/40 hover:text-gold transition-colors"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/40 hover:text-gold transition-colors"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIndex].url} 
                alt={images[selectedIndex].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="mt-8 text-center bg-transparent">
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Portfolio Selection</p>
                <h3 className="text-cream text-2xl font-serif italic">{images[selectedIndex].title}</h3>
              </div>
            </motion.div>

            {/* Click backdrop to close */}
            <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
