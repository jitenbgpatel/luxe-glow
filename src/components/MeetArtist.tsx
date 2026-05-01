import { motion } from 'motion/react';

export default function MeetArtist() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
              alt="Mahi Patel - The Artist" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10" />
        </motion.div>

        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-gold font-bold block mb-4"
          >
            Behind the Glow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-8"
          >
            Meet <span className="italic">Mahi Patel</span>
          </motion.h2>
          <div className="space-y-6 text-charcoal/60 font-light leading-relaxed text-lg">
            <p>
              With over a decade of experience in the luxury beauty industry, I've dedicated my career to mastering the art of the 'effortless glow.' 
            </p>
            <p>
              I believe makeup should never be a mask; rather, it's a tool to unveil the most radiant version of yourself. Whether I'm prepping a bride in her childhood home or styling for an editorial shoot, my approach is always bespoke, intimate, and focused on your unique features.
            </p>
            <p>
              As a solo artist, I handle every detail personally—from our initial consultation to the final sweep of highlighter. I bring the entire professional studio experience directly to you.
            </p>
          </div>
          
          <div className="mt-10 flex items-center space-x-6">
             <div className="w-12 h-px bg-gold/30" />
             <span className="font-serif italic text-charcoal text-xl">Mahi Patel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
