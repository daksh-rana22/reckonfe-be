import SectionHeading from '@/components/shared/SectionHeading';
import FeatureCard from '@/components/shared/FeatureCard';
import {
  Receipt, Cloud, BarChart3, Smartphone,
  Shield, GitBranch,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Receipt,
    title: 'GST-Ready Billing',
    description: 'Fully compliant with Indian GST regulations. Auto-calculate CGST, SGST, IGST with e-invoicing support.',
    color: '#DC2626',
  },
  {
    icon: GitBranch,
    title: 'Multi-Branch Sync',
    description: 'Real-time data synchronization across all your business locations. Centralized control with local autonomy.',
    color: '#2563EB',
  },
  {
    icon: Cloud,
    title: 'Cloud-Based ERP',
    description: 'Access your business data from anywhere, anytime. Secure cloud infrastructure with 99.9% uptime guarantee.',
    color: '#7C3AED',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with live dashboards, custom reports, and AI-powered business insights.',
    color: '#06B6D4',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Manage your business on-the-go with our companion mobile app. Track sales, inventory, and orders anywhere.',
    color: '#EC4899',
  },
  {
    icon: Shield,
    title: 'Industry-Specific',
    description: 'Tailored solutions for 16+ industries including pharmacy, retail, auto parts, FMCG, garments, and more.',
    color: '#E11D48',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle background aurora */}
      <div className="absolute inset-0 bg-gradient-aurora pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Core Platform"
          title="Built for Indian Businesses"
          subtitle="Everything you need to streamline operations, boost productivity, and grow revenue — all in one platform."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
