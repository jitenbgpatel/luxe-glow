import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-charcoal" id="hero">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/beauty_makeup/1920/1080?grayscale" 
          alt="Luxury Makeup Artistry" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Mahi Patel Artistry — Bespoke Mobile Beauty
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl text-cream font-serif leading-[1.1] mb-8"
          >
            Your <span className="italic font-light">Natural</span> Beauty, <br />
            Enhancement by <span className="text-gold glow-text">Design</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cream/70 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-lg"
          >
            Professional makeup and hair styling for brides and special events. I travel to your sanctuary, providing an intimate glam experience tailored exclusively for you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#booking"
              className="group flex items-center justify-between px-8 py-4 bg-gold text-charcoal font-medium tracking-widest text-xs uppercase hover:bg-cream transition-all duration-300"
            >
              Reserve Your Glow
              <ChevronRight size={16} className="ml-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-cream/20 text-cream font-medium tracking-widest text-xs uppercase hover:bg-cream/10 transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '30%' }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 right-12 md:right-24 w-px bg-gold/30 hidden md:block"
      />
    </section>
  );
}
