import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Send, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [demoFor, setDemoFor] = useState('Retail Pharmacy');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Please fill in all required fields.');
      setSuccess(false);
      return;
    }
    if (phone.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      setSuccess(false);
      return;
    }
    
    setError('');
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setDemoFor('Retail Pharmacy');
    setMessage('');

    setTimeout(() => setSuccess(false), 5000);
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Reckon Sales</title>
        <meta name="description" content="Get in touch with Reckon Sales. Schedule a demo, ask questions, or request support." />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="Ready to transform your business? Get in touch with our team."
        breadcrumbs={[{ label: 'Contact Us' }]}
        gradient
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl border border-border p-8 shadow-md">
                <h2 className="text-xl font-bold text-foreground mb-6">Schedule a Demo</h2>
                {error && (
                  <div className="p-3.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm flex items-center gap-2.5 mb-5 animate-pulse-soft">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span className="font-semibold">{error}</span>
                  </div>
                )}
                {success && (
                  <div className="p-3.5 rounded-xl bg-success/10 border border-success/30 text-success text-sm flex items-center gap-2.5 mb-5">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="font-semibold">Demo Request Submitted successfully!</span>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        maxLength={10}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Demo For *</label>
                      <select
                        value={demoFor}
                        onChange={(e) => setDemoFor(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      >
                        <option>Retail Pharmacy</option>
                        <option>Hospital Pharmacy</option>
                        <option>Pharma Wholesale</option>
                        <option>Grocery Store</option>
                        <option>FMCG Distributor</option>
                        <option>Garment & Clothing</option>
                        <option>Autoparts Traders</option>
                        <option>Mobile App</option>
                        <option>Cloud Software</option>
                        <option>Multi Location Software</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your business requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-md hover:shadow-glow transition-all duration-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Registered Office',
                  content: 'Reckon Sales Private Limited\nSF-2 New Medicine Market, Meer Jaan Lane\nNaya Gaon East, Gautam Budha Marg\nLucknow-226018, Uttar Pradesh, India',
                },
                {
                  icon: Phone,
                  title: 'Helpline',
                  content: '0522-4972500\n6389 590 600 | 6389 590 700\n6389 590 800 | 6389 590 900',
                },
                {
                  icon: Mail,
                  title: 'Sales',
                  content: 'sales@reckonsales.com',
                },
                {
                  icon: Mail,
                  title: 'Support',
                  content: 'care@reckonsales.com',
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Mon – Sat: 10:00 AM – 7:00 PM\nSun: 11:00 AM – 6:00 PM',
                },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex gap-4 p-5 rounded-xl bg-surface border border-border">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{info.title}</h3>
                      <p className="text-sm text-muted mt-0.5" style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                    </div>
                  </div>
                );
              })}

              {/* Quick Links */}
              <div className="p-5 rounded-xl bg-gradient-hero text-white">
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/login" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Partner Portal Login
                  </Link>
                  <a href="http://smartscan.reckonsales.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Reckon SmartScan
                  </a>
                  <Link to="/tutorials" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Video Tutorials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
