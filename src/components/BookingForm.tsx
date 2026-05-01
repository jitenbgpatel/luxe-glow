import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'bridal',
    date: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Inquiry Received:', formData);
    setSubmitted(true);
    // In a real app, this would send to an API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="py-24 bg-charcoal text-cream text-center" id="booking">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-6 py-12 border border-gold/20 bg-charcoal/50"
        >
          <CheckCircle2 className="mx-auto text-gold mb-6" size={64} />
          <h2 className="text-3xl font-serif mb-4">Request Received</h2>
          <p className="text-cream/60 font-light mb-8">
            Thank you for choosing Mahi Patel Artistry. I will contact you within 24 hours to confirm your reservation.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-widest text-gold hover:text-cream transition-colors"
          >
            Send Another Request
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-white" id="booking">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/3">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-gold font-bold block mb-4"
          >
            Reservation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-8"
          >
            Reserve Your <span className="italic">Session</span>
          </motion.h2>
          <p className="text-charcoal/60 font-light leading-relaxed mb-8">
            Please provide your details below. For wedding inquiries, include your venue location and bridal party size for a comprehensive quote.
          </p>
          
          <div className="space-y-4 text-xs tracking-widest uppercase text-charcoal/80">
            <div className="flex items-center space-x-4">
              <span className="w-8 h-px bg-gold/40" />
              <span>Available Mon—Sun</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-8 h-px bg-gold/40" />
              <span>Mobile Concierge Exclusive</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-2/3"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8" id="booking-form">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Full Name</label>
              <input 
                required
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Charlotte Dubois"
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Email Address</label>
              <input 
                required
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="charlotte@example.com"
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Select Service</label>
              <select 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal appearance-none cursor-pointer"
              >
                <option value="bridal">Bridal Preparations</option>
                <option value="events">Special Events</option>
                <option value="hair">Editorial Hair Styling</option>
                <option value="home">Home Service Glam</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Event Date</label>
              <input 
                required
                type="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal"
              />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Service Location</label>
              <input 
                required
                type="text" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                placeholder="Hotel, Estate, or Residence Address"
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal"
              />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold ml-1">Message & Inspiration</label>
              <textarea 
                rows={4}
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your vision or any special requirements..."
                className="w-full bg-cream/50 border-b border-charcoal/10 py-3 px-1 focus:border-gold transition-colors outline-none text-charcoal resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-charcoal text-cream text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-charcoal transition-all duration-500 flex items-center justify-center space-x-4 group"
              >
                <span>Submit Inquiry</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
