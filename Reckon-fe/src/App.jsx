import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/hooks/useTheme';
import { AdminProvider } from '@/hooks/useAdmin';
import { AdminStoreProvider } from '@/hooks/useAdminStore';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SoftwaresPage from '@/pages/SoftwaresPage';
import SoftwareDetailPage from '@/pages/SoftwareDetailPage';
import PartnersPage from '@/pages/PartnersPage';
import GalleryPage from '@/pages/GalleryPage';
import DownloadsPage from '@/pages/DownloadsPage';
import ContactPage from '@/pages/ContactPage';
import TutorialsPage from '@/pages/TutorialsPage';
import HelpPage from '@/pages/HelpPage';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import AdminPage from '@/pages/AdminPage';
import CareerPage from '@/pages/CareerPage';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AdminProvider>
          <AdminStoreProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="softwares" element={<SoftwaresPage />} />
                  <Route path="softwares/:slug" element={<SoftwareDetailPage />} />
                  <Route path="partners" element={<PartnersPage />} />
                  <Route path="gallery" element={<GalleryPage />} />
                  <Route path="downloads" element={<DownloadsPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="tutorials" element={<TutorialsPage />} />
                  <Route path="help" element={<HelpPage />} />
                  <Route path="career" element={<CareerPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AdminStoreProvider>
        </AdminProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
