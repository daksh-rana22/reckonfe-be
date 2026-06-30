import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Palette, Check, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const ACCENTS = [
  { id: 'redblue', label: 'Reckon', hex: '#DC2626', class: 'bg-gradient-to-r from-[#DC2626] to-[#2563EB]' },
  { id: 'violet', label: 'Violet', hex: '#8B5CF6', class: 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]' },
  { id: 'ocean', label: 'Ocean', hex: '#0EA5E9', class: 'bg-gradient-to-r from-[#0EA5E9] to-[#10B981]' },
  { id: 'sunset', label: 'Sunset', hex: '#F97316', class: 'bg-gradient-to-r from-[#F97316] to-[#FBBF24]' },
  { id: 'mono', label: 'Mono', hex: '#737373', class: 'bg-gradient-to-r from-neutral-200 to-neutral-700' },
];

const MASTER_THEMES = [
  {
    id: 'default',
    label: 'Default',
    preview: 'bg-gradient-to-br from-slate-100 to-slate-300',
    dot: 'bg-gradient-to-br from-orange-500 to-red-600',
    desc: 'Original Reckon Look',
  },
  {
    id: 'blue',
    label: 'Oceanic Blue',
    preview: 'bg-gradient-to-br from-sky-100 to-blue-300',
    dot: 'bg-gradient-to-br from-sky-500 to-blue-800',
    desc: 'Vibrant Deep Blue',
  },
  {
    id: 'emerald',
    label: 'Emerald Forest',
    preview: 'bg-gradient-to-br from-emerald-50 to-green-200',
    dot: 'bg-gradient-to-br from-emerald-400 to-green-700',
    desc: 'Forest Green & Teal',
  },
  {
    id: 'midnight',
    label: 'Midnight Royal',
    preview: 'bg-gradient-to-br from-violet-100 to-purple-300',
    dot: 'bg-gradient-to-br from-violet-500 to-purple-800',
    desc: 'Deep Indigo & Purple',
  },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, accent, setAccent, masterTheme, setMasterTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-16 right-0 w-72 bg-glass border border-border rounded-2xl shadow-xl p-4 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
              <span className="font-bold text-foreground text-sm flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '4s' }} />
                Appearance
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-muted hover:text-foreground cursor-pointer"
              >
                Done
              </button>
            </div>

            {/* Master Theme Selection */}
            <div className="mb-4">
              <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                Hero & Footer Theme
              </span>
              <div className="grid grid-cols-2 gap-2">
                {MASTER_THEMES.map((mt) => (
                  <button
                    key={mt.id}
                    onClick={() => setMasterTheme(mt.id)}
                    className={cn(
                      'relative group flex flex-col items-start gap-1.5 p-2.5 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer text-left',
                      masterTheme === mt.id
                        ? 'border-primary bg-primary/8 shadow-sm'
                        : 'border-border bg-surface hover:bg-surface-hover'
                    )}
                  >
                    {/* Preview swatch */}
                    <div className={cn('w-full h-8 rounded-lg relative overflow-hidden', mt.preview)}>
                      <div className={cn('absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-white/80 shadow', mt.dot)} />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-bold text-foreground leading-tight">{mt.label}</span>
                      {masterTheme === mt.id && (
                        <Check className="w-3 h-3 text-primary" />
                      )}
                    </div>
                    <span className="text-[9px] text-muted leading-tight">{mt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Theme */}
            <div>
              <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                Accent Theme
              </span>
              <div className="grid grid-cols-3 gap-2">
                {ACCENTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAccent(item.id)}
                    className={cn(
                      'relative group flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all hover:scale-[1.03] cursor-pointer',
                      accent === item.id
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border bg-surface hover:bg-surface-hover'
                    )}
                  >
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center shadow-inner', item.class)}>
                      {accent === item.id && (
                        <Check
                          className={cn(
                            'w-3.5 h-3.5',
                            item.id === 'sunset' || (item.id === 'mono' && theme === 'dark')
                              ? 'text-slate-950'
                              : 'text-white'
                          )}
                        />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-foreground">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center shadow-xl border cursor-pointer transition-colors duration-300",
          isOpen
            ? "bg-primary text-primary-foreground border-transparent"
            : "bg-glass border-border text-foreground hover:bg-surface-hover"
        )}
        aria-label="Customize page theme"
      >
        <Palette className="w-5 h-5 animate-pulse-soft" />
      </motion.button>
    </div>
  );
}
