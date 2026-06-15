import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  Briefcase, MapPin, Clock, ArrowRight, Users, Rocket,
  Heart, Star, Lightbulb, Shield, TrendingUp, Coffee,
} from 'lucide-react';

const OPEN_POSITIONS = [
  {
    title: 'Software Sales Executive',
    department: 'Sales',
    location: 'Lucknow, UP',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Drive software sales, engage clients, and expand our customer base across Uttar Pradesh.',
  },
  {
    title: 'Technical Support Engineer',
    department: 'Support',
    location: 'Lucknow, UP',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Provide expert technical support to our software clients, troubleshoot issues, and ensure client satisfaction.',
  },
  {
    title: 'React Frontend Developer',
    department: 'Engineering',
    location: 'Lucknow, UP / Remote',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build and maintain beautiful, responsive web interfaces using React.js and modern frontend technologies.',
  },
  {
    title: 'Business Development Manager',
    department: 'Business Development',
    location: 'Lucknow, UP',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Identify new business opportunities, develop partner relationships, and grow Reckon\'s market footprint.',
  },
  {
    title: 'Tally & ERP Trainer',
    department: 'Training',
    location: 'Lucknow, UP',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Conduct product training sessions for clients and partners, helping them get the most from Reckon software.',
  },
  {
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Lucknow, UP',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Plan and execute digital marketing campaigns across social media, SEO, and email to drive growth.',
  },
];

const PERKS = [
  { icon: TrendingUp, title: 'Growth Opportunities', description: 'Clear career progression with regular performance reviews and promotions.' },
  { icon: Heart, title: 'Health Benefits', description: 'Comprehensive medical coverage for you and your family.' },
  { icon: Coffee, title: 'Great Work Culture', description: 'Collaborative, friendly, and inclusive workplace with regular team events.' },
  { icon: Lightbulb, title: 'Learning & Development', description: 'Access to training programs, certifications, and industry conferences.' },
  { icon: Shield, title: 'Job Security', description: 'Be part of a stable, growing company with 15+ years of industry experience.' },
  { icon: Star, title: 'Performance Bonuses', description: 'Competitive salaries with attractive incentive and bonus structures.' },
];

const DEPT_COLORS = {
  Sales: 'bg-blue-500/10 text-blue-500',
  Support: 'bg-green-500/10 text-green-500',
  Engineering: 'bg-purple-500/10 text-purple-500',
  'Business Development': 'bg-orange-500/10 text-orange-500',
  Training: 'bg-yellow-500/10 text-yellow-600',
  Marketing: 'bg-pink-500/10 text-pink-500',
};

export default function CareerPage() {
  return (
    <>
      <Helmet>
        <title>Careers - Reckon Sales</title>
        <meta
          name="description"
          content="Join the Reckon Sales team. Explore exciting career opportunities in software sales, engineering, support, and more in Lucknow, India."
        />
      </Helmet>

      <PageHeader
        title="Build Your Career With Us"
        subtitle="Join a passionate team shaping the future of business software in India. We're always looking for talented people."
        breadcrumbs={[{ label: 'Career' }]}
        gradient
      />

      {/* Perks */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Work at Reckon?</h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">
              We believe great work happens when people feel valued, supported, and excited about what they do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <PerkCard key={perk.title} perk={perk} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Open Positions</h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">
              Find your perfect role. We're hiring across multiple functions — join us and make an impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {OPEN_POSITIONS.map((job, i) => (
              <JobCard key={job.title} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't See Your Role?</h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            We're always interested in connecting with exceptional talent. Send us your resume and tell us how you can contribute to Reckon's mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:sales@reckonsales.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-accent text-white font-semibold shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
            >
              Email Us Directly <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PerkCard({ perk, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = perk.icon;
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
      <h3 className="text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{perk.description}</p>
    </div>
  );
}

function JobCard({ job, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const deptColor = DEPT_COLORS[job.department] || 'bg-primary/10 text-primary';
  return (
    <div
      ref={ref}
      className={cn(
        'group p-6 rounded-xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <span className={cn('inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2', deptColor)}>
            {job.department}
          </span>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {job.title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
      </div>

      <p className="text-sm text-muted mb-4 leading-relaxed">{job.description}</p>

      <div className="flex flex-wrap gap-3 text-xs text-muted border-t border-border pt-4">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary" /> {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-primary" /> {job.type}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-primary" /> {job.experience}
        </span>
      </div>

      <Link
        to="/contact"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
      >
        Apply Now <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
