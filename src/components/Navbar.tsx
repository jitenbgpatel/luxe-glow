import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
  ];

  // Dynamic text color classes
  const textColorClass = scrolled ? 'text-charcoal' : 'text-white';
  const logoColorClass = scrolled ? 'text-charcoal' : 'text-white';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <span className={`text-2xl md:text-3xl font-serif tracking-tighter transition-colors duration-500 ${logoColorClass}`}>
            MAHI <span className="text-gold font-light">PATEL</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className={`text-xs uppercase tracking-widest font-medium transition-colors duration-500 hover:text-gold ${textColorClass}`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border ${
              scrolled 
                ? 'bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold hover:text-charcoal' 
                : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-charcoal'
            }`}
          >
            Reserve
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-500 ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-toggle"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed inset-0 bg-cream h-screen px-6 py-20 flex flex-col items-center justify-center space-y-10 z-[100]"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-charcoal hover:text-gold transition-colors"
          >
            <X size={32} />
          </button>
          
          <span className="text-2xl font-serif tracking-tighter text-charcoal mb-4">
            MAHI <span className="text-gold font-light">PATEL</span>
          </span>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif italic text-charcoal hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="px-12 py-4 bg-charcoal text-white text-xs uppercase tracking-widest"
          >
            Reserve Your Glow
          </a>

          <div className="flex space-x-8 pt-8 border-t border-charcoal/10 w-48 justify-center">
            <Instagram size={24} className="text-charcoal/40 hover:text-gold transition-colors" />
            <Facebook size={24} className="text-charcoal/40 hover:text-gold transition-colors" />
            <Phone size={24} className="text-charcoal/40 hover:text-gold transition-colors" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
