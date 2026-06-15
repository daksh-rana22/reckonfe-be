import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - Reckon Sales</title>
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <div className="text-8xl font-extrabold text-gradient mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
          <p className="text-muted mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-glow transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground font-semibold hover:bg-surface-secondary transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
