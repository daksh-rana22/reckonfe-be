import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import CTASection from '@/components/home/CTASection';
import {
  Smartphone,
  ShieldCheck,
  Camera,
  Image,
  Database,
  RefreshCw,
  Share2,
  Lock,
  Mail,
  Building2,
  Phone,
  MapPin,
  Baby,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';

export default function SellerAppPrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Seller Mobile App | Reckon Sales</title>
        <meta
          name="description"
          content="Privacy Policy for Seller Mobile App developed by Reckon Sales Private Limited."
        />
      </Helmet>

      <PageHeader
        title="Privacy Policy - Seller Mobile App"
        subtitle="Privacy policy and data collection practices for the Seller Mobile App by Reckon Sales Private Limited."
        breadcrumbs={[
          { label: 'Seller-App Privacy Policy' },
        ]}
        gradient
      />

      <section className="py-6 sm:py-8 md:py-10 bg-background relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">

          {/* Scope Header Card */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-sm flex items-start gap-4">
            <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Mobile Application Policy</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-0.5">
                Privacy Policy for <span className="text-primary">Seller Mobile App</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/90 mt-2 leading-relaxed">
                This Privacy Policy describes how personal information is collected, used, and disclosed when you use the <strong>Seller</strong> Mobile App (referred to as &quot;the App&quot;) developed by <strong>Reckon Sales Private Limited</strong> on <a href="https://reckonsales.in/" className="text-primary font-bold hover:underline">reckonsales.in</a> (referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. By using the App, you consent to the practices outlined in this Privacy Policy.
              </p>
            </div>
          </div>

          {/* 1. Information We Collect */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Database className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Information We Collect:</h3>
            </div>

            {/* 1.1 Information You Provide */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-bold text-foreground underline">1.1 Information You Provide:</h4>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                When you use the App, we may collect certain information that you directly provide, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-foreground/90 leading-relaxed">
                <li>Personal information such as your name, phone number, and postal address.</li>
                <li>Account credentials, including your username and password.</li>
                <li>Transaction-related information, such as order details, payment information, and address.</li>
              </ul>
            </div>

            {/* 1.2 Information Automatically Collected */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base sm:text-lg font-bold text-foreground">1.2 Information Automatically Collected:</h4>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                When you access or use the App, we may automatically collect certain information, including but not limited to:
              </p>
              <div className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
                <p>
                  <strong>Device information:</strong> We may collect information about the device you use to access the App, such as the device type, operating system version, unique device identifiers, and mobile network information.
                </p>
                <p>
                  <strong>Log information:</strong> We automatically collect server logs, which may include information such as your IP address, app crashes, access dates and times, and the pages you viewed or interacted with.
                </p>
                <p>
                  <strong>Usage information:</strong> We may collect information about your interactions with the App, including the features you use, the pages you visit, the actions you take, and the time spent on specific pages.
                </p>
              </div>
            </div>

            {/* 1.3 APP Permission & Reasons */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base sm:text-lg font-bold text-foreground">1.3 APP Permission &amp; Reasons:</h4>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-border space-y-1.5">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-base">
                    <Camera className="w-5 h-5" />
                    <span>Camera Permission:</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    To allow <strong>the App</strong> to access the camera for clicking and uploading photos of your documents against your bookings on <strong>the App</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-border space-y-1.5">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-base">
                    <Image className="w-5 h-5" />
                    <span>Media Permission:</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    To allow <strong>the App</strong> to upload photos of your documents against the booking on <strong>the App</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use the Information */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">How We Use the Information:</h3>
            </div>

            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              We may use the collected information for various purposes, including but not limited to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <li>Providing and maintaining the App&apos;s functionality.</li>
              <li>Managing your account and preferences.</li>
              <li>Processing and fulfilling orders and transactions.</li>
              <li>Improving and enhancing the user experience of the App.</li>
              <li>Analyzing and monitoring usage patterns and trends.</li>
              <li>Communicating with you regarding updates, offers, and promotional materials.</li>
              <li>Protecting the security and integrity of the App.</li>
              <li>Complying with legal obligations and enforcing our rights.</li>
            </ul>
          </div>

          {/* Information Sharing and Disclosure */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Information Sharing and Disclosure:</h3>
            </div>

            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              We do not sell, rent, or lease your personal information to third parties. However, we may disclose your information in the following circumstances:
            </p>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                <strong>Service Providers:</strong> We may engage trusted third-party service providers who assist us in operating the App and delivering services to you. These providers have access to your information but are obligated not to disclose or use it for any other purpose.
              </p>
              <p>
                <strong>Legal Compliance:</strong> We may disclose your information if required by law, regulation, or legal process, or in response to valid governmental requests.
              </p>
              <p>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our assets, your information may be transferred as part of the transaction.
              </p>
              <p>
                <strong>Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of data collection.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Data Security:</h3>
            </div>

            <div className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Your Choices */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Your Choices:</h3>
            </div>

            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              You have certain rights and choices regarding the personal information we collect and how it is used:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <li>You can access, update, or delete your personal information by logging into your account or contacting us directly.</li>
              <li>You can unsubscribe from promotional communications by following the instructions provided in the emails or contacting us.</li>
              <li>You can disable cookies or change your device settings to prevent the automatic collection of certain information.</li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                <Baby className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Children&apos;s Privacy</h3>
            </div>

            <div className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                Our mobile application is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible.
              </p>
            </div>
          </div>

          {/* Changes to Our Privacy Policy */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Changes to Our Privacy Policy</h3>
            </div>

            <div className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our mobile application. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Contact Us</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                If you have any questions about our Privacy Policy, please contact us at <a href="mailto:sales@reckonsales.com" className="text-primary font-bold hover:underline">sales@reckonsales.com</a>
              </p>
              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-border space-y-1 text-sm sm:text-base">
                <p className="font-bold text-foreground">Reckon Sales Private Limited.</p>
                <p className="flex items-center gap-1.5 text-muted">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  SF-2 New Medicine Market, Meer Jaan Lane, Naya Gaon East, Lucknow-226018 UP
                </p>
                <p className="flex items-center gap-1.5 text-muted">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  Phone - 0522-4972500
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
