import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useAdminStore } from '@/hooks/useAdminStore';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

const INDUSTRY_COLORS = {
  Pharmacy: '#DC2626',
  Retail: '#2563EB',
  'Auto Parts': '#7C3AED',
  Garments: '#EC4899',
  'Home Appliances': '#06B6D4',
  FMCG: '#E11D48',
};


function TestimonialCard({ testimonial, delay }) {
  const { ref, isVisible } = useScrollAnimation();
  const color = INDUSTRY_COLORS[testimonial.industry] || '#DC2626';

  return (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col p-5 rounded-xl bg-card border border-border shadow-sm',
        'hover:shadow-lg transition-all duration-500 overflow-hidden cursor-default',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Colored top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }}
      />

      {/* Ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${color}08, transparent 70%)` }}
      />

      {/* Quote icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3.5 shrink-0"
        style={{ background: `${color}12`, border: `1px solid ${color}22` }}
      >
        <Quote className="w-4 h-4" style={{ color }} />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, j) => (
          <span key={j} className={cn('text-xs', j < testimonial.rating ? 'text-warning' : 'text-border')}>★</span>
        ))}
        <span className="ml-1 text-[11px] font-bold text-muted-foreground">{testimonial.rating}.0</span>
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1 italic">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="mt-4 pt-3.5 border-t border-border flex items-center gap-2.5">
        <div
          className="w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0 text-xs font-black text-white"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[13px] font-bold text-foreground leading-tight">{testimonial.name}</p>
          <p className="text-[11px] text-muted leading-tight mt-0.5">{testimonial.designation} · {testimonial.company}</p>
        </div>
        <span
          className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
          style={{ background: `${color}12`, color }}
        >
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  const { testimonials } = useAdminStore();
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Client Stories"
          title="What Our Clients Say"
          subtitle="Hear from businesses that have transformed their operations with Reckon across India."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

