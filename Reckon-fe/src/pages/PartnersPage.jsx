import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import { API_BASE } from '../config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ClientsSection from '@/components/home/ClientsSection';
import { Handshake, TrendingUp, HeadphonesIcon, Award, Users, Gift, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { useAdminStore } from '@/hooks/useAdminStore';

const BENEFITS = [
  { icon: TrendingUp, title: 'Revenue Growth', description: 'Earn attractive commissions on every referral and sale. Our partner program is designed to maximize your earning potential.' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', description: 'Get priority access to our technical support team. We ensure your clients are always well-served.' },
  { icon: Award, title: 'Training & Certification', description: 'Access comprehensive training materials and get certified as an authorized Reckon partner.' },
  { icon: Users, title: 'Lead Sharing', description: 'Receive qualified leads from our marketing efforts in your region.' },
  { icon: Gift, title: 'Marketing Materials', description: 'Get professionally designed marketing collateral, presentations, and demo licenses.' },
  { icon: Handshake, title: 'Co-branding', description: 'Joint marketing opportunities and co-branded campaigns to boost your visibility.' },
];

const FALLBACK_PARTNERS = [
  {
    id: 'f1',
    name: 'sthhdfsgegres',
    city: 'feafewfE, india',
    img: '/images/supermarket_gobill.png'
  },
  {
    id: 'f2',
    name: 'Khushi Infotech',
    city: 'Guwahati, Assam',
    img: '/images/home_pos_showcase.png'
  },
  {
    id: 'f3',
    name: 'NexGen Solutions',
    city: 'Bangalore, Karnataka',
    img: '/images/office_real.png'
  },
  {
    id: 'f4',
    name: 'RetailFlow Systems',
    city: 'Mumbai, Maharashtra',
    img: '/images/grocery_real.png'
  },
  {
    id: 'f5',
    name: 'DataSphere Analytics',
    city: 'Hyderabad, Telangana',
    img: '/images/pharma_real.png'
  },
  {
    id: 'f6',
    name: 'Apex Distributors',
    city: 'Delhi',
    img: '/images/fmcg_distributor_billing.png'
  }
];

const formatLocation = (location) => {
  if (!location) return 'Lucknow, India';
  const locLower = location.toLowerCase();
  if (locLower.includes('india')) return location;
  return `${location}, India`;
};

export default function PartnersPage() {
  const { partnerLogos } = useAdminStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [partnerPage, setPartnerPage] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError('Please fill in all required fields.');
      setSuccess(false);
      return;
    }
    if (phone.length !== 10) {
      setError('Phone number must be exactly 10 digits.');
      setSuccess(false);
      return;
    }

    // 2. Email format validation (matching EmailStr requirements)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address (e.g., user@domain.com).');
      setSuccess(false);
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/contact/partner`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || 'Something went wrong. Please try again.');
        return;
      }

      setSuccess(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      setError('Could not connect to server. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Helmet>
        <title>Partner Program - Reckon Sales</title>
        <meta name="description" content="Join the Reckon partner program. Earn commissions, get certified, and grow your business with India's leading ERP provider." />
      </Helmet>

      <PageHeader
        title="Partner With Us"
        subtitle="Join India's fastest-growing ERP partner network. Earn, grow, and succeed together."
        breadcrumbs={[{ label: 'Partners' }]}
        gradient
      />

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Become a Partner?</h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">Our partner program is designed to help you build a profitable business around Reckon's industry-leading software solutions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Directory Section */}
      <section className="py-20 bg-surface-secondary/40 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3.5 animate-pulse-soft">
                Our Ecosystem
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Businesses That Trust Reckon
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                From tech consultants to retail distributors — partners across India run their business operations on our software.
              </p>
            </div>
            
            {/* Slide control arrows (visual detail from image) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (partnerPage > 0) {
                    setPartnerPage(prev => prev - 1);
                  }
                }}
                disabled={partnerPage === 0}
                className={cn(
                  "p-3.5 rounded-xl border border-border transition-all shadow-sm bg-surface shrink-0",
                  partnerPage === 0
                    ? "opacity-30 cursor-not-allowed text-muted"
                    : "hover:bg-slate-50 dark:hover:bg-white/5 hover:scale-105 active:scale-95 text-foreground cursor-pointer"
                )}
                aria-label="Previous page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const totalPartners = partnerLogos && partnerLogos.length > 0 ? partnerLogos.length : FALLBACK_PARTNERS.length;
                  if ((partnerPage + 1) * 8 < totalPartners) {
                    setPartnerPage(prev => prev + 1);
                  }
                }}
                disabled={(() => {
                  const totalPartners = partnerLogos && partnerLogos.length > 0 ? partnerLogos.length : FALLBACK_PARTNERS.length;
                  return (partnerPage + 1) * 8 >= totalPartners;
                })()}
                className={cn(
                  "p-3.5 rounded-xl transition-all shadow-lg shrink-0",
                  (() => {
                    const totalPartners = partnerLogos && partnerLogos.length > 0 ? partnerLogos.length : FALLBACK_PARTNERS.length;
                    return (partnerPage + 1) * 8 >= totalPartners;
                  })()
                    ? "bg-primary/30 opacity-30 cursor-not-allowed text-white/50"
                    : "bg-primary text-white hover:bg-primary-dark hover:scale-105 active:scale-95 cursor-pointer"
                )}
                aria-label="Next page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerLogos && partnerLogos.length > 0 ? (
              partnerLogos.slice(partnerPage * 8, (partnerPage + 1) * 8).map((partner, index) => {
                return (
                  <div
                    key={partner.id || index}
                    className="flex flex-col group"
                  >
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-border/10 bg-slate-900 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10" />
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 select-none opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Content below image */}
                    <div className="mt-4 text-center flex flex-col items-center justify-center px-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 tracking-tight group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base text-muted-foreground">
                        <MapPin className="w-4 h-4 text-sky-500 shrink-0 fill-sky-500/10" />
                        <span className="font-semibold">{formatLocation(partner.city)}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback cards matching the image in case no partners exist in DB yet
              FALLBACK_PARTNERS.slice(partnerPage * 8, (partnerPage + 1) * 8).map((partner, index) => (
                <div
                  key={partner.id || index}
                  className="flex flex-col group"
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-border/10 bg-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10" />
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 select-none opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content below image */}
                  <div className="mt-4 text-center flex flex-col items-center justify-center px-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 tracking-tight group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base text-muted-foreground">
                      <MapPin className="w-4 h-4 text-sky-500 shrink-0 fill-sky-500/10" />
                      <span className="font-semibold">{formatLocation(partner.city)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>



        </div>
      </section>

      <section
        className="py-20 relative overflow-hidden bg-[#0A0D14]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(10, 13, 20, 0.4) 0%, rgba(10, 13, 20, 0.9) 85%), url(/images/partner_handshake_4k.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="text-white">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Fill out the partnership application form and our team will get back to you within 24 hours. We're excited to grow together!
              </p>
              <ul className="space-y-3">
                {['Earn attractive commissions', 'Access to training & certifications', 'Dedicated partner support', 'Co-branding opportunities'].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="bg-surface rounded-2xl border border-border p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6">Partnership Application</h3>

              {error && (
                <div className="flex items-center gap-2.5 p-3.5 mb-5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{error}</span>
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2.5 p-3.5 mb-5 rounded-xl bg-success/10 border border-success/30 text-success text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span className="font-medium">Application submitted! We'll contact you soon.</span>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your business..."
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-md hover:shadow-glow transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function BenefitCard({ benefit, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'p-6 rounded-xl bg-surface border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
    </div>
  );
}
