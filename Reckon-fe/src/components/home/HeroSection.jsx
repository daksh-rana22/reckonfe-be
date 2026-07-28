import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const ROTATING_WORDS = ['Pharmacies', 'Retail Stores', 'Distributors', 'Supermarkets', 'Auto Parts'];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  /* Typing effect */
  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    let timeout;
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const TRUST_BADGES = ['GST Compliant', 'Cloud ERP', '25K+ Users'];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-8 sm:py-10 lg:py-14 xl:py-16 flex items-center overflow-hidden select-none transition-colors duration-500"
      style={{
        background: isDark
          ? 'var(--gradient-section-dark)'
          : 'var(--gradient-section-light)'
      }}
    >
      {/* Animated glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-16 left-8 w-80 h-80 rounded-full blur-[120px] animate-pulse-soft"
          style={{ backgroundColor: 'var(--section-glow-1)' }}
        />
        <div
          className="absolute bottom-16 right-8 w-96 h-96 rounded-full blur-[140px] animate-pulse-soft"
          style={{ animationDelay: '2s', backgroundColor: 'var(--section-glow-2)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px]"
          style={{ backgroundColor: 'var(--section-glow-3)' }}
        />
      </div>

      {/* Grid mesh */}
      <div
        className="absolute inset-0 grid-mesh pointer-events-none"
        style={{
          maskImage: isHovered
            ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
            : 'radial-gradient(circle 600px at center, black 40%, transparent)',
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
            : 'radial-gradient(circle 600px at center, black 40%, transparent)',
        }}
      />

      {/* Cursor spotlight */}
      <div
        className="absolute pointer-events-none rounded-full blur-[120px] w-[500px] h-[500px] transition-opacity duration-400"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(220,38,38,0.18), rgba(37,99,235,0.10), transparent)'
            : 'radial-gradient(circle, rgba(249,115,22,0.12), rgba(59,130,246,0.12), transparent)',
          left: coords.x - 250,
          top: coords.y - 250,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Floating geometric decorations */}
      <div className="absolute top-16 right-16 w-20 h-20 border border-primary/15 rounded-3xl rotate-12 opacity-30 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-14 h-14 border border-primary/20 rounded-2xl -rotate-6 opacity-20 animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 lg:py-6 w-full my-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/12 border border-primary/25 text-primary text-xs font-bold mb-3 sm:mb-5 shadow-[0_0_20px_rgba(249,115,22,0.12)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by 25,000+ users across India
            </motion.div>

            {/* Headline */}
            <h1 className={cn(
              "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.08] tracking-tight",
              isDark ? "text-white" : "text-[#0B0816]"
            )}>
              India's{' '}
              <span className="relative inline-block">
                <span className="text-gradient-warm">Leading ERP</span>
              </span>
              <br />
              for{' '}
              <span className={cn("relative", isDark ? "text-white" : "text-[#0B0816]")}>
                {displayed}
                <span className="inline-block w-0.5 h-[0.85em] bg-primary ml-0.5 align-middle animate-pulse" />
              </span>
            </h1>

            <p className={cn(
              "mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0",
              isDark ? "text-white/55" : "text-[#0B0816]/70"
            )}>
              Powerful, GST-compliant business management software designed for pharmacies,
              retail stores, distributors, and 16+ industries. Transform your operations today.
            </p>

            {/* Trust badges */}
            <div className="mt-3 sm:mt-4 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-semibold",
                    isDark ? "text-white/55" : "text-slate-600"
                  )}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-success" />
                  {badge}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-3.5">
              <Link
                to="/software"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-glow hover:scale-[1.03] transition-all duration-300 active:scale-95"
              >
                Explore Software
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-all duration-300 backdrop-blur-sm",
                  isDark
                    ? "bg-white/8 text-white border-white/12 hover:bg-white/14 hover:border-white/22"
                    : "bg-white/40 text-blue-600 border-blue-500/30 hover:bg-white/60 hover:border-blue-500/50"
                )}
              >
                <Play className="w-4 h-4" />
                Schedule Demo
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[['#DC2626', 'RK'], ['#2563EB', 'PS'], ['#7C3AED', 'AV'], ['#EC4899', 'DG']].map(([bg, init]) => (
                  <div
                    key={init}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black text-white",
                      isDark ? "border-[#130F24]" : "border-white"
                    )}
                    style={{ background: bg }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-warning text-xs">★</span>
                  ))}
                </div>
                <p className={cn("text-[11px] mt-0.5", isDark ? "text-white/45" : "text-slate-500")}>
                  Rated 4.9/5 by our clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Dashboard Preview ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="hidden lg:flex lg:justify-end"
          >
            <div className="relative w-fit max-w-full">
              {/* Outer glow ring */}
              <div className={cn(
                "absolute -inset-3 bg-gradient-to-r rounded-3xl blur-2xl",
                isDark
                  ? "from-red-600/30 via-red-500/15 to-blue-600/20"
                  : "from-blue-500/25 via-indigo-500/10 to-blue-600/20"
              )} />
              <div className={cn(
                "absolute -inset-1 bg-gradient-to-r rounded-2xl blur-sm",
                isDark
                  ? "from-red-600/15 to-blue-600/10"
                  : "from-blue-500/10 to-indigo-500/5"
              )} />

              {/* Showcase Image */}
              <div className={cn(
                "relative rounded-2xl border shadow-2xl p-1 overflow-hidden transition-colors duration-300 inline-block",
                isDark
                  ? "bg-[#161228]/40 border-white/8"
                  : "bg-white/45 border-white/60 backdrop-blur"
              )}>
                <img
                  src="/images/home_pos_showcase.png"
                  alt="Reckon POS Showcase"
                  className="rounded-xl h-auto w-auto max-h-[460px] xl:max-h-[520px] 2xl:max-h-[560px] max-w-full object-contain hover:scale-[1.01] transition-transform duration-700 shadow-md block"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-success text-white text-[11px] font-black px-3.5 py-1.5 rounded-xl shadow-xl border border-success-light/30 z-10"
              >
                GST Ready ✓
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={cn(
                  "absolute -bottom-3 -left-3 text-[11px] font-black px-3.5 py-1.5 rounded-xl shadow-xl transition-colors duration-300 z-10",
                  isDark
                    ? "bg-blue-600 text-white shadow-lg border border-blue-500/20"
                    : "bg-blue-600 text-white shadow-lg border border-blue-500/20"
                )}
              >
                ☁️ Cloud Powered
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
