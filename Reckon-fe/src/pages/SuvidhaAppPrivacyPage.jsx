import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import CTASection from '@/components/home/CTASection';
import {
  Smartphone,
  ShieldCheck,
  Database,
  RefreshCw,
  Lock,
  Mail,
  Building2,
  Phone,
  MapPin,
  Baby,
  FileCheck2,
  Scale,
  Cookie,
  UserCheck,
} from 'lucide-react';

export default function SuvidhaAppPrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Suvidha Retailer B2B App | Reckon Sales</title>
        <meta
          name="description"
          content="Privacy Policy for Suvidha : Retailer B2B App owned and operated by Reckon Sales Private Limited."
        />
      </Helmet>

      <PageHeader
        title="Privacy Policy - Suvidha App"
        subtitle="Privacy policy for Suvidha : Retailer B2B App owned and operated by Reckon Sales Private Limited."
        breadcrumbs={[
          { label: 'Suvidha-App Privacy Policy' },
        ]}
        gradient
      />

      <section className="py-6 sm:py-8 md:py-10 bg-background relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">

          {/* Scope Header Card */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Retailer B2B Application Policy</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-0.5">
                  Privacy Policy for <span className="text-primary">Suvidha : Retailer B2B App</span>
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed pt-1">
              <p>
                This Privacy Policy (&quot;Privacy Policy&quot;) describes what information Reckon Sales Private Limited (&quot;Company&quot;), as the owner and operator of the application and website at <a href="https://reckonsales.in/" className="text-primary font-bold hover:underline">reckonsales.in</a> (&quot;We&quot;/ &quot;Us&quot;/ &quot;Our&quot;), may collect from a user (&quot;You&quot;, &quot;Your&quot; or &quot;User&quot;), on or through our mobile application <strong>Suvidha : Retailer B2B App</strong> (the &quot;App&quot;), directly or in relation to technology and services that the licensed wholesalers of the Products (as defined below) (&quot;Sellers&quot;) may use to connect with registered retail pharmacies (&quot;Buyers&quot;) and the Buyers may use to source a wide selection of products like pharmaceutical, fast moving consumer goods, nutraceutical products, over the counter products etc. (&quot;Products&quot;), including Our facilitation through the App, of communication between Sellers and the Buyers, real time price discovery, inventory visibility, technology enabling ordering, and payments in a digitized, self-serve manner and the facilitation of services by third parties which may include, delivery of the Products through the App, insurance benefits, and credit availability or any other services as may be available from time to time on the App (each a &quot;Service&quot;, and collectively the &quot;Services&quot;) and how We use, process, disclose and try to protect such information.
              </p>
              <p>
                You agree and understand that the Company is responsible for operation and maintenance of the App and all information collected and processed on the App is collected and processed by us strictly in relation to our business.
              </p>
              <p>
                By clicking on &apos;SUBMIT&apos; during the sign-up process, by using Our App, You confirm that You have read, understood, and agree with the privacy practices described in this Privacy Policy, and the Terms of Use (the &quot;Terms&quot;) and the collection, storage and processing of Your information in accordance with them.
              </p>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-4 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Compliance Framework</h3>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p className="font-bold text-foreground">This Privacy Policy is published in compliance with, inter alia:</p>
              <p className="p-4 rounded-xl bg-surface-secondary/70 border border-border">
                Section 43A of the Information Technology Act, 2000 (&quot;IT Act&quot;); Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (&quot;SPDI Rules&quot;); and Regulation 3(1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021 (&quot;Intermediaries Guidelines&quot;).
              </p>
            </div>
          </div>

          {/* General Terms */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">General Terms:</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                By accessing or using the App, You confirm that You have the capacity to enter into a legally binding contract under Indian law, in particular, the Indian Contract Act, 1872, and have read, understood and agreed to the practices and policies outlined in this Privacy Policy and agree to be bound by the Privacy Policy.
              </p>
              <p>
                You hereby consent to Our collection, use, sharing, and disclosure of Your information as described in this Privacy Policy. We reserve the right to change, modify, add or delete portions of the terms of this Privacy Policy, at Our sole discretion, at any time, and any continued use of the App, following any such amendments to the Privacy Policy, will be deemed as an implicit acceptance of the Privacy Policy in its amended form. You are requested to review the Privacy Policy from time to time to keep yourself updated with any changes; modifications made to the terms hereof.
              </p>
              <p>
                If You do not agree with any of the terms and conditions of this Privacy Policy, please do not proceed further to the App. This Privacy Policy is subject to change at any time without notice. To make sure You are aware of any changes, please review this policy on the App periodically.
              </p>
            </div>
          </div>

          {/* What information About You is collected on the App? */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Database className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">What information About You is collected on the App?</h3>
            </div>

            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              When You access the App, You may provide, or We may collect information that may specifically identify You or any other individual. Given below are the types of information that We may collect:
            </p>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                <strong>Information You Give Us:</strong> We receive and store any information you enter on Our App or provide us in any other way. When you register on the App, We collect registration details such as phone number, name, geographical address and email address. We verify your phone number with the help of a one-time password sent to your phone number.
              </p>
              <p>
                We may also collect information in relation to Your business such as identity information, GST registration and/or related information about your business, your company name, business type and information about requisite licenses required under the applicable law. If you are a Seller, we collect details about the goods and products that you intend to sell via the App and details about your sales/transactions on the App and if you are a Buyer we collect details or preferences about the Products that you may be interested in buying via the App and any details or preferences relevant to your purchases;
              </p>
              <p>
                <strong>Information from Other Sources:</strong> We might receive information about You such as order details, Your details shared with Our partners etc. from other sources including from Our partners, advertisers or other third parties and add it to Our account information.
              </p>
              <p>
                <strong>Cookies and Other Tracking Technologies:</strong> We utilize &quot;cookies&quot; and other tracking technologies. A &quot;cookie&quot; is a small text file that may be used, for example, to collect information about activity on the App. Some cookies and other technologies may serve to recall information previously indicated or submitted by a User. Most browsers/mobile settings allow You to control cookies, including whether or not to accept them and how to remove them. You may set most browsers/mobile application to notify You if You receive a cookie, or You may choose to block cookies with Your browser/mobile applications.
              </p>
              <p>
                <strong>Automatic Information:</strong> We receive and store certain types of information whenever You interact with Us. We may receive/store information about Your location and Your mobile device, including a unique identifier for Your device. We may use this information for internal analysis and to provide You with location-based services, such as advertising, search results, and other personalized content.
              </p>
            </div>
          </div>

          {/* How do We use the information We collect? */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">How do We use the information We collect?</h3>
            </div>

            <div className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                We use information We collect, in a variety of ways in order to provide the Services on the App and to operate Our business, including the following: To carry out Our obligations arising from Your requests on the App; To operate and improve the App in order to foster a positive user experience and to improve Our business as a whole; To process and deliver Your orders placed with the Sellers; We use the information that You provide for such purposes such as responding to Your requests, customizing Your experience, improving Our App or communicating with You; For non-targeting reasons such as frequency capping, compliance, billing, ad reporting or delivery, market research or product development purposes; To analyse the use of Our resources, troubleshooting problems and improving the Services, by using the information regarding Your mobile device and software; Contacting users, for updates, resolution of queries, or interacted with.
              </p>
            </div>
          </div>

          {/* Security & Access */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Security &amp; Data Access Protection</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                We work to protect the security of Your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information You input in addition to maintaining security of Your information as per the international standards on &quot;Information Technology Security Techniques Information Security Management System-Requirements&quot;.
              </p>
              <p>
                We restrict access to personal information, to Our employees and agents who need to know that information in order to process it for Us, and who are subject to strict contractual confidentiality obligations, and may be disciplined or whose relationship with Us may terminate if they fail to meet these obligations.
              </p>
              <p>
                No employee or administrator will have knowledge of Your password of Your account on the App. It is important for You to protect Your account against unauthorized access to Your password and Your mobile phone, as detailed in the &apos;User Account, Password and Security&apos; section of the Terms. You must be sure to log off from the App when You have finished use thereof. We do not undertake any liability for any unauthorised use of Your account and password.
              </p>
              <p>
                Under certain circumstances, We shall not be able to take Your prior consent before disclosing Your information in case the information is demanded by government agencies or otherwise mandated under law to obtain SPDI, or during investigation of cyber incidents, prosecution of offenses etc.
              </p>
              <p>
                Further, We shall not be responsible for any breach of security or for any actions of any third parties or events that are beyond Our reasonable control including but not limited to acts of government, computer hacking, unauthorised access to computer data and storage device, computer crashes, breach of security and encryption, poor quality of internet service or telephone service of the User, etc.
              </p>
            </div>
          </div>

          {/* What Information Can I Access? */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">What Information Can I Access?</h3>
            </div>

            <div className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                The App gives You access to a broad range of information about Your account and Your interactions with the App for the limited purpose of viewing and, in certain cases, modifying, deleting information provided on the App or the Site. You may rectify any inaccurate or deficient personal information or SPDI, as feasible. You have the option to opt-out of optional services such as receiving promotional materials etc. and should You desire to opt-in to such services at the time of signing up You can choose do so.
              </p>
            </div>
          </div>

          {/* Are Children Allowed to Use the App? */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                <Baby className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Are Children Allowed to Use the App?</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                Use of the App is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872. If You are under 18 years of age, then please do not use or access the Service(s) at any time or in any manner. If We learn that a person under 18 years of age has used or accessed the App or Service or any personally identifiable information has been collected on the App from persons under 18 years of age, then We will take the appropriate steps to delete this information. If You are a parent or guardian and discover that Your child under 18 years of age has obtained an account on or otherwise accessed the Service, then You may alert Us at <a href="mailto:admin@reckonsales.com" className="text-primary font-bold hover:underline">admin@reckonsales.com</a> and request that We delete that child&apos;s personally identifiable information from Our systems.
              </p>
              <p>
                You further acknowledge and agree that We are not liable for any loss or damage which may be incurred by You as a result of the collection and/or disclosure of Your information via Third Party Links, as a result of any reliance placed by You on the completeness, accuracy or existence of any advertising, products services, or other materials on, or available via such Third Party Links. This will include all transactions, and information transmitted therein, between You and any such third-party sites or applications or resources, such transactions are strictly bi-partite. We shall not be liable for any disputes arising from or in connection with such transactions between You and the aforementioned third parties.
              </p>
              <p className="font-semibold text-foreground">
                Please note that uninstalling the App will not result in deletion of Your personal information or SPDI.
              </p>
            </div>
          </div>

          {/* Changes to Your Information */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Changes to Your Information</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                You may review, correct, update, change the information that You have provided by logging into Your account. However, You are not permitted to delete any part of the personal information or any other information generated on the App. You may update Your information at any point by writing to Us at the details indicated below in the contact section.
              </p>
              <p>
                Should You choose to update Your personal information or SPDI or modify it in a way that is not verifiable by Us, or leads to such information being incorrect, We will be unable to provide You with access to Our Site, App or the Services, as described under the Terms, and such modification may be regarded as the User seeking to discontinue his or her access to Our Site, App or the Services.
              </p>
              <p>
                We reserve the right to verify and authenticate Your identity and Your personal information in order to ensure accurate delivery of products and services. Access to or correction, updating or deletion of Your personal information or SPDI may be denied or limited by Us if it would violate another person&apos;s rights and/or is not otherwise permitted by applicable law.
              </p>
            </div>
          </div>

          {/* Notices */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Notices &amp; Contact Information</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <p>
                If You have any concern about privacy or grievances on the App, please contact Us with a thorough description and We will try to resolve the issue for You. If You have any concerns or questions in relation to this Privacy Policy, You may address them to Our officer at:
              </p>
              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-border space-y-1 text-sm sm:text-base">
                <p className="font-bold text-foreground">Reckon Sales Private Limited</p>
                <p className="flex items-center gap-1.5 text-muted">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  SF-2 New Medicine Market, Meer Jaan Lane, Naya Goan East, Lucknow-226018
                </p>
                <p className="flex items-center gap-1.5 text-muted">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  Phone number: +91 522 4972500
                </p>
                <p className="flex items-center gap-1.5 text-muted">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  E-mail: <a href="mailto:admin@reckonsales.com" className="text-primary font-bold hover:underline">admin@reckonsales.com</a>
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
