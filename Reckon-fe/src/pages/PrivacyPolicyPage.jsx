import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import CTASection from '@/components/home/CTASection';
import {
  ShieldCheck,
  Building2,
  Database,
  RefreshCw,
  Share2,
  Mail,
  Scale,
  Calendar,
  Lock,
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Reckon Sales Pvt. Ltd.</title>
        <meta
          name="description"
          content="Privacy Policy for Reckon Sales Pvt. Ltd. Learn how we collect, use, and protect your information."
        />
      </Helmet>

      <PageHeader
        title="Privacy Policy"
        subtitle="This Privacy Policy applies to the Reckon Sales Pvt. Ltd."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        gradient
      />

      <section className="py-6 sm:py-8 md:py-10 bg-background relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">

          {/* Scope & Introduction */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Official Policy Statement</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-0.5">
                  This Privacy Policy applies to the <span className="text-primary">Reckon Sales Pvt. Ltd.</span>
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90 pt-1">
              <p>
                Reckon Sales recognizes the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on <a href="https://www.reckonsales.com/" className="text-primary font-bold hover:underline">www.reckonsales.com</a> and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.
              </p>
              <p>
                <a href="https://www.reckonsales.com/" className="text-primary font-bold hover:underline">www.reckonsales.com</a> is a property of <strong>Reckon Sales Pvt. Ltd.</strong>, an Indian Company registered under the Companies Act, 2013 having its <strong>registered office at New Medicine Market, Meer Jaan Lane, Naya Gaon East, Lucknow- 226001.</strong>
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Database className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Information we collect</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>Contact information:</strong> We might collect your name, email, mobile number, phone number, street, city, state, pin code, country and IP address.
              </p>
              <p>
                <strong>Payment and billing information:</strong> We might collect your firm name, billing address and payment method mode. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website.
              </p>
              <p>
                <strong>Information you post.</strong> We collect information you post in a public space on our website or on a third-party social media site belonging to <a href="https://www.reckonsales.com/" className="text-primary font-bold hover:underline">www.reckonsales.com</a>
              </p>
              <p>
                <strong>Demographic information:</strong> We may collect demographic information about you and any other information provided by you during the use of our website. We might collect this as a part of a survey also.
              </p>
              <p>
                <strong>Other information:</strong> If you use our website, we may collect information about your IP address and the browser you&apos;re using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.
              </p>
            </div>
          </div>

          {/* How We Collect Information */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">We collect information in different ways.</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>We collect information directly from you.</strong> We collect information directly from you when you register as visitor or client. We also collect information if you post a comment on our websites or ask us a question through phone or email.
              </p>
              <p>
                <strong>We collect information from you passively.</strong> We may use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.
              </p>
              <p>
                <strong>We get information about you from third parties.</strong> For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.
              </p>
            </div>
          </div>

          {/* Use of Personal Information */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Use of your personal information</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>We use information to contact you:</strong> We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.
              </p>
              <p>
                <strong>We use information to respond to your requests or questions.</strong> We might use your information to confirm your registration for any type of query.
              </p>
              <p>
                <strong>We use information to improve our products and services.</strong> We might use your information to customize your experience with us. This could include displaying content based upon your preferences.
              </p>
              <p>
                <strong>We use information to look at site trends and customer interests.</strong> We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.
              </p>
              <p>
                <strong>We use information for security purposes.</strong> We may use information to protect our company, our customers, or our websites.
              </p>
              <p>
                <strong>We use information for marketing purposes.</strong> We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products.
              </p>
              <p>
                <strong>We use information to send you transactional communications.</strong> We might send you emails or SMS about your account and other information
              </p>
              <p className="font-bold text-foreground pt-1">
                We use information as otherwise permitted by law.
              </p>
            </div>
          </div>

          {/* Sharing of Information with Third Parties */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Sharing of information with third-parties</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>We will share information with third parties who perform services on our behalf.</strong> We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.
              </p>
              <p>
                <strong>We will share information with our business partners.</strong> This includes a third party who provide sale, support, service. Our partners use the information we give them as described in their privacy policies.
              </p>
              <p>
                <strong>We may share information if we think we have to in order to comply with the law or to protect ourselves.</strong> We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.
              </p>
              <p>
                <strong>We may share information with any successor to all or part of our business.</strong> For example, if part of our business is sold we may give our customer list as part of that transaction.
              </p>
              <p>
                <strong>We may share your information for reasons not described in this policy.</strong> We will tell you before we do this.
              </p>
            </div>
          </div>

          {/* Opt-Out & Third Party Sites */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Opt-Out &amp; Third Party Sites</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>You can opt out of receiving our marketing emails.</strong> To stop receiving our promotional emails, please email unsubscribed @ <a href="https://www.reckonsales.com/" className="text-primary font-bold hover:underline">www.reckonsales.com</a> It may take about some days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS.
              </p>
              <p>
                <strong>Third party sites:</strong> If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.
              </p>
            </div>
          </div>

          {/* Grievance Officer */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Grievance Officer</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                <strong>Grievance Officer:</strong> In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
              </p>
              <p>
                If you have any questions about this Policy or other privacy concerns, you can also email us at <a href="mailto:myreckonteam@gmail.com" className="text-primary font-bold hover:underline">myreckonteam@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Updates to this policy */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Updates to this policy</h3>
            </div>

            <div className="text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                This Privacy Policy was last updated on 01.12.2020. From time to time we may change our privacy policy as required by company or by law, we will also post an updated copy on our website. Please check our website periodically for updates.
              </p>
            </div>
          </div>

          {/* Jurisdiction */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Jurisdiction</h3>
            </div>

            <div className="text-sm sm:text-base leading-relaxed text-foreground/90">
              <p>
                If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website&apos;s terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
