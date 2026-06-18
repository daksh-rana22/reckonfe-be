import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Target, Eye, Shield, Users, Smartphone, Cloud, Monitor, Lightbulb } from 'lucide-react';

const VALUES = [
  { icon: Lightbulb, title: 'Service Oriented Solutions', description: 'Through our own software center, we develop desktop, cloud, and mobile systems pan-India, specializing in GST integration and training.' },
  { icon: Target, title: 'Redefining Tech Conventions', description: 'We continuously transition to newer technological solutions to keep our clients flexible, scalable, and ready for Industry 4.0.' },
  { icon: Users, title: 'Client-Focused Approach', description: 'Our clients are our biggest strength, partnering with us for over 25 years to build and grow their businesses.' },
];

export default function AboutPage() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>About Us - Reckon Sales Pvt. Ltd.</title>
        <meta name="description" content="Learn about Reckon Sales, India's leading ERP and billing software company with over 25 years of experience." />
      </Helmet>

      <PageHeader
        title="About Us"
        subtitle="Empowering businesses with smart, robust, and adaptable ERP solutions."
        breadcrumbs={[{ label: 'About Us' }]}
        gradient
      />

      {/* Main Copy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={textRef}
              className={cn(
                "transition-all duration-700",
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">We are Reckon Sales Pvt. Ltd.</h2>
              <p className="text-muted leading-relaxed mb-4">
                We make <strong>ERP software</strong> to make your business more efficient and adaptable. Based out of Lucknow, India, we have industry experience of more than <strong>25 years</strong>. With a team of dedicated veterans of the industry, we want to empower your business and make it as seamless as possible.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Our services include ERP solutions for Retail, Distribution & Multi-Location businesses in various sectors like Pharmaceutical, Super Market, FMCG, Auto Parts, Textile, Footwear, and Restaurants. Dynamism is one of the key visions of our company and that is why we have ventured into providing mobile and cloud-based services for our clients.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-surface-secondary/50 rounded-r-lg mb-4">
                <p className="text-foreground italic font-medium">
                  "Our ambition is to digitalize every small business and introduce them to the big leagues."
                </p>
              </blockquote>
              <p className="text-muted leading-relaxed">
                Our customers, from all over India including International locations, have stayed with us for over 15+ years; a clear indication of our commitment towards them.
              </p>
            </div>
            
            {/* Stats Sidebar */}
            <div className="relative flex flex-col gap-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-50" />
              
              {/* Office Illustration */}
              <div className="relative bg-surface rounded-2xl border border-border overflow-hidden shadow-md">
                <img 
                  src="/images/office_illustration.png" 
                  alt="Reckon Development Center" 
                  className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>

              <div className="relative bg-surface rounded-2xl border border-border p-6 shadow-md">
                <h3 className="text-lg font-bold text-foreground mb-5 text-center">Reckon by the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '25+', label: 'Years Experience' },
                    { value: '25,000+', label: 'Users across India' },
                    { value: '450+', label: 'Growth Partners' },
                    { value: '90+', label: 'Team Members' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3.5 rounded-xl bg-surface-secondary border border-border/50">
                      <div className="text-xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-[11px] text-muted mt-1 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Approach */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Core Philosophy" subtitle="Redefining conventions and putting clients first in everything we build." />
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Reckon Software Compatibility" subtitle="Access your system seamlessly across platforms" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Smartphone, title: 'Mobile Solutions', desc: 'Manage your operations and collect orders on the go.' },
              { icon: Cloud, title: 'Cloud Solutions', desc: 'Secure web and cloud-powered sync across branches.' },
              { icon: Monitor, title: 'Desktop Solutions', desc: 'Heavy-duty high-speed local POS and inventory tools.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-xl bg-surface border border-border flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
