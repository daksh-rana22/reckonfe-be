import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import FeaturesGrid from '@/components/home/FeaturesGrid';
import BannerSliderSection from '@/components/home/BannerSliderSection';
import DemoVideoSection from '@/components/home/DemoVideoSection';
import IndustryVerticals from '@/components/home/IndustryVerticals';
import ClientsSection from '@/components/home/ClientsSection';
import StatsCounter from '@/components/home/StatsCounter';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Reckon - India's Leading ERP & Billing Software Solutions</title>
        <meta name="description" content="Reckon Sales provides the best ERP and billing software solutions for pharmacies, retail stores, FMCG distributors, and 16+ industries across India." />
      </Helmet>
      <BannerSliderSection />
      <HeroSection />
      <FeaturesGrid />
      <DemoVideoSection />
      <IndustryVerticals />
      <ClientsSection />
      <StatsCounter />
      <TestimonialsSlider />
      <CTASection />
    </>
  );
}
