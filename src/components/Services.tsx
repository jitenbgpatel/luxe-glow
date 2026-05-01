import { motion } from 'motion/react';
import { Sparkles, Calendar, Zap, Home } from 'lucide-react';

const services = [
  {
    title: 'Bridal Preparations',
    description: 'Luxury packages tailored for your big day. Includes on-site trials and day-of perfection for you and your bridal party.',
    icon: <Sparkles className="text-gold" size={32} />,
    image: 'https://images.unsplash.com/photo-1544473244-f6890326444d?auto=format&fit=crop&q=80&w=800',
    id: 'service-bridal'
  },
  {
    title: 'Special Events',
    description: 'Bespoke glam for galas, proms, and red carpet appearances. I create sophisticated looks that command attention.',
    icon: <Calendar className="text-gold" size={32} />,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    id: 'service-events'
  },
  {
    title: 'Hair Styling',
    description: 'From effortless blowouts to intricate editorial updos. Precision styling that complements your makeup and mood.',
    icon: <Zap className="text-gold" size={32} />,
    image: 'https://images.unsplash.com/photo-1522337363553-56041ec14380?auto=format&fit=crop&q=80&w=800',
    id: 'service-hair'
  },
  {
    title: 'Home Service',
    description: 'Professional glam delivered to your home or hotel. Experience a private luxury session tailored to your schedule.',
    icon: <Home className="text-gold" size={32} />,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800',
    id: 'service-home'
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-cream" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-gold font-bold block mb-4"
          >
            The Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            My Signature Services
          </motion.h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card group overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-serif text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <a 
                  href="#booking" 
                  className="text-[10px] uppercase tracking-widest font-bold text-gold border-b border-gold/20 pb-1 hover:border-gold transition-all"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
