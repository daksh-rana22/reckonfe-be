import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAdmin } from '@/hooks/useAdmin';
import { useAdminStore } from '@/hooks/useAdminStore';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import {
  User, Lock, Eye, EyeOff, ArrowLeft,
  CheckCircle, Sparkles, ShieldCheck, AlertCircle
} from 'lucide-react';

export default function LoginPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { isAdmin, login } = useAdmin();
  const { logoUrl } = useAdminStore();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Already logged in → redirect to admin
  if (isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(async () => {
      try {
        const result = await login(username, password);
        setLoading(false);
        if (result && result.success) {
          setSuccess(true);
          setTimeout(() => navigate('/admin'), 1200);
        } else {
          setError((result && result.error) || 'Invalid username or password.');
        }
      } catch (err) {
        setLoading(false);
        setError(err.message || 'Server connection failed.');
      }
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Reckon Sales</title>
        <meta name="description" content="Sign in to the Reckon Sales admin panel to manage site settings, logo, and downloads." />
      </Helmet>

      <div className="min-h-screen grid lg:grid-cols-12 bg-background overflow-hidden relative font-sans">
        
        {/* Floating background gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none bg-primary/10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none bg-blue-600/10" />

        {/* ── LEFT COLUMN: Branding ── */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-12 overflow-hidden select-none border-r border-border/20"
          style={{
            background: isDark
              ? 'var(--gradient-section-dark)'
              : 'var(--gradient-section-light)'
          }}
        >
          {/* Animated decorative shapes */}
          <div className="absolute top-20 right-10 w-24 h-24 border border-primary/10 rounded-2xl rotate-12 animate-float pointer-events-none" />
          <div className="absolute bottom-40 left-10 w-32 h-32 border border-blue-500/10 rounded-full blur-[1px] animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />

          {/* Top branding logo */}
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <img
                src={logoUrl}
                alt="Reckon Logo"
                className="w-10 h-10 object-contain rounded-xl bg-white p-1.5 shadow-md border border-slate-100"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black text-foreground group-hover:text-primary transition-colors">
                  Reckon Sales
                </span>
                <span className="text-[9px] font-bold text-muted uppercase tracking-widest leading-none">
                  Admin Portal
                </span>
              </div>
            </Link>
          </div>

          {/* Middle value statements */}
          <div className="relative z-10 my-auto max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Admin Dashboard
            </div>
            
            <h2 className="text-3xl xl:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
              Manage your site settings in <span className="text-gradient">one place</span>.
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
              Update site logo, manage download entries, and control your Reckon Sales website content.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Logo Management</p>
                  <p className="text-xs text-muted">Upload and update site logo across all pages instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Downloads Editor</p>
                  <p className="text-xs text-muted">Add, remove, and edit setup files, patches, and tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="relative z-10 flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/20">
            <span>© {new Date().getFullYear()} Reckon Sales Pvt. Ltd.</span>
            <Link to="/help" className="hover:text-primary transition-colors">Help</Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Login Form ── */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-12 relative">
          
          {/* Back button */}
          <div className="flex justify-between items-center relative z-10 w-full mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-muted hover:text-foreground transition-all px-3 py-1.5 rounded-xl hover:bg-surface-secondary border border-transparent hover:border-border/40"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to main page
            </Link>
            <div className="lg:hidden">
              <img src={logoUrl} alt="Reckon Logo" className="w-8 h-8 rounded-lg bg-white p-1 shadow-sm" />
            </div>
          </div>

          {/* Main Card */}
          <div className="my-auto w-full flex items-center justify-center relative z-10">
            <div className={cn(
              "w-full max-w-md rounded-3xl p-6 sm:p-10 transition-all duration-500",
              isDark 
                ? "bg-slate-900/60 border border-slate-800/80 shadow-2xl backdrop-blur-xl"
                : "bg-white/70 border border-slate-100/90 shadow-2xl backdrop-blur-xl"
            )}>
              
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-black text-foreground tracking-tight mb-2">
                  Admin Login
                </h1>
                <p className="text-xs sm:text-sm text-muted">
                  Enter your credentials to access the dashboard
                </p>
                <div className="mt-4 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-semibold inline-block">
                  Demo Credentials: <span className="font-bold text-foreground">admin</span> / <span className="font-bold text-foreground">admin</span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 p-3.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-xs flex items-center gap-2.5 animate-pulse-soft">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="font-semibold">{error}</span>
                </div>
              )}

              {/* Success */}
              {success ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-success mb-4 scale-up-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-bold text-foreground mb-1">Welcome, Admin!</p>
                  <p className="text-xs text-muted-foreground">Redirecting to dashboard...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="username" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted pointer-events-none">
                        <User className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="admin"
                        className={cn(
                          "w-full pl-10.5 pr-4 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200",
                          isDark 
                            ? "bg-slate-950/50 border-slate-800 text-white focus:border-primary/50" 
                            : "bg-slate-50/50 border-slate-200 text-slate-900 focus:border-primary/50"
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted pointer-events-none">
                        <Lock className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={cn(
                          "w-full pl-10.5 pr-11 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200",
                          isDark 
                            ? "bg-slate-950/50 border-slate-800 text-white focus:border-primary/50" 
                            : "bg-slate-50/50 border-slate-200 text-slate-900 focus:border-primary/50"
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted hover:text-foreground cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-lg hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : 'Sign In'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Footer for mobile */}
          <div className="mt-12 text-center text-xs text-muted-foreground w-full relative z-10 lg:hidden">
            <span>© {new Date().getFullYear()} Reckon Sales. Lucknow, India.</span>
          </div>
        </div>
      </div>
    </>
  );
}
