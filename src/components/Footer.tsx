import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-20 border-t border-cream/5" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 leading-tight">
            MAHI PATEL <span className="text-gold">ARTISTRY</span>
          </h2>
          <p className="text-cream/50 font-light max-w-sm mb-8 leading-relaxed">
            Personalized luxury beauty experiences for your most meaningful moments. Operating from my home studio and available for bespoke sessions at your location.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gold hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gold hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gold hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-6">Area of Coverage</h4>
          <ul className="space-y-4 text-sm text-cream/60 font-light">
            <li className="flex items-center space-x-3">
              <MapPin size={14} className="text-gold/60" />
              <span>Greater Metropolitan Area</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={14} className="text-gold/60" />
              <span>Luxury Resort Partner Sites</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={14} className="text-gold/60" />
              <span>Destination Wedding Travel</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-cream/60 font-light">
            <li className="flex items-center space-x-3 underline decoration-gold/20">
              <Mail size={14} className="text-gold/60" />
              <span>concierge@luxeglow.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>Monday — Saturday</span>
            </li>
            <li className="italic text-xs">By Appointment Only</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-cream/30 font-bold">
        <p>© 2026 LUXE & GLOW ARTISTRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
