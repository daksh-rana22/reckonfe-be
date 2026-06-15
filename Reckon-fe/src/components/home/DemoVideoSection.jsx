import { motion } from 'framer-motion';
import { Play, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

export default function DemoVideoSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-b border-border/50">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative mb-12">
          {/* Phone Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute -left-6 lg:-left-12 xl:-left-20 top-1/2 -translate-y-1/2 hidden lg:block"
          >

          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Product Walkthrough
            </motion.div>
            <SectionHeading
              title="See Reckon in Action"
              subtitle="Explore how our GST billing and inventory solution can transform your retail, distribution, or pharmacy business."
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Video Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative"
          >
            {/* Glowing borders around mock screen */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            {/* Mock Screen Frame */}
            <div className="relative bg-surface rounded-xl border border-border/80 shadow-2xl p-2.5 overflow-hidden">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-surface-secondary border-b border-border/50 rounded-t-lg mb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-danger/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="text-[10px] text-muted-foreground font-mono select-none px-4 py-0.5 bg-surface rounded border border-border/30 max-w-sm w-48 text-center truncate">
                  reckonsales.in/demo
                </div>
                <div className="w-12" />
              </div>

              {/* Playable YouTube Video */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/QsGOKDv-FK8?autoplay=0&rel=0&modestbranding=1"
                  title="Getting Started with Reckon ERP & Billing Software — Full Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                Designed for speed and complete operational control.
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                Watch the video to see our fast POS checkout module, detailed stock filters, automatic expiry alerts, and integrated GST compliance engine.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {[
                { icon: Zap, title: 'Speedy Billing', desc: 'Punch invoices in seconds with comprehensive hotkey mappings.' },
                { icon: Cpu, title: 'Smart Sync', desc: 'Centralized cloud synchronization for multi-branch environments.' },
                { icon: Shield, title: 'Audit Ready', desc: 'Accurate GST report sheets generated with zero manual filing errors.' },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/20 transition-all duration-300">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{feat.title}</h4>
                      <p className="text-muted text-xs mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
