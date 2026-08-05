import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import CTASection from '@/components/home/CTASection';
import {
  FileText,
  ShieldAlert,
  Ban,
  AlertTriangle,
  Lock,
  Building2,
  Scale,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const GENERAL_LIMITATIONS = [
  'Utilize the Software beyond the applicable Term',
  'Transfer, assign or sublicense your license rights to any other person, and any such attempted transfer, assignment or sublicense shall be void',
  'Provide, divulge, disclose, or make available to, or permit the use of the Software by any third party',
  'Sell, resell, license, sublicense, distribute, rent or lease the Software or include the Software in a service bureau or outsourcing offering',
  'Make error corrections to or otherwise modify or adapt the Software or create derivative works based upon the Software, or to permit third parties to do the same',
  'Decompile, decrypt, reverse engineer, disassemble or otherwise reduce the Software to human-readable form, or to permit third parties to do the same',
];

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Reckon Sales Pvt. Ltd.</title>
        <meta
          name="description"
          content="Official Terms & Conditions and End User Software License Agreement for Reckon Sales Pvt. Ltd."
        />
      </Helmet>

      <PageHeader
        title="Terms & Conditions"
        subtitle="End User Software License Agreement governing the use of Reckon Sales software."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
        gradient
      />

      <section className="py-6 sm:py-8 md:py-10 bg-background relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">

          {/* Section Header Card */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-sm flex items-start gap-4">
            <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Software License Agreement</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-0.5">
                This Terms & Conditions applies to <span className="text-primary">Reckon Sales Pvt. Ltd.</span>
              </h2>
              <p className="text-sm sm:text-base text-muted mt-1.5 leading-relaxed">
                Please read the license terms carefully before downloading, installing, or evaluating any software products or features provided by Reckon Sales Pvt. Ltd. at <a href="https://reckonsales.in/" className="text-primary font-bold hover:underline">reckonsales.in</a>.
              </p>
            </div>
          </div>

          {/* Important Alert Notice */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3 shadow-sm">
            <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-bold text-base sm:text-lg">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <h3>Important Notice – Read Carefully Before Downloading or Installing</h3>
            </div>
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              Important – read these terms carefully before downloading, installing or using this software. By downloading or installing this software, you acknowledge that you have read this license agreement, that you understand it, and that you agree to be bound by its terms. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions, in which case the terms &quot;you&quot; or &quot;your&quot; shall refer to its affiliates. If you do not have such authority, or if you do not agree with these terms and conditions, you must not download or install this software.
            </p>
          </div>

          {/* License Grant & Intellectual Property */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Permission to use Reckon Sales Pvt. Ltd. Software for Final or Free Trial License
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-surface-secondary/60 border border-border space-y-1.5">
                <div className="flex items-center justify-between text-primary">
                  <span className="text-xs font-bold uppercase tracking-wider">Final License</span>
                  <Clock className="w-4 h-4" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">365 Days (One Year)</p>
                <p className="text-xs sm:text-sm text-muted">Term duration for final licensed software from date of activation.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-surface-secondary/60 border border-border space-y-1.5">
                <div className="flex items-center justify-between text-amber-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Free Trial License</span>
                  <Clock className="w-4 h-4" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">Twenty One (21) Days</p>
                <p className="text-xs sm:text-sm text-muted">Term duration for evaluation software from date of activation.</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                Subject to the terms and conditions and acceptance as otherwise provided in this License Agreement, Company permits to you a limited, non-exclusive, non-transferable and non-assignable license to evaluate this Software, modules, and feature(s) (the &quot;Software&quot;) for Your personal purposes only and for a term of 365 days (One Year) for final license and of Twenty One (21) days for Free Trial from the date you activate the Software (the &quot;Term&quot;).
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/15 space-y-2 text-foreground/90">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-primary">
                  <ShieldCheck className="w-5 h-5" /> Intellectual Property Rights
                </div>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  As used herein the &quot;Software&quot; is subject to licenses, you do not have any rights in or to the Software except as expressly granted in this License Agreement. Company retains all copyright, trademarks, patent, and other intellectual property rights to the Software. You acknowledge that the Software, all copies of the Software, any derivative works, compilations, and collective works of the Software, and any know-how and trade secrets related to the Software are the sole and exclusive property of Reckon Sales Pvt. Ltd. and contain Company&apos;s confidential and proprietary materials.
                </p>
              </div>
            </div>
          </div>

          {/* General Limitations */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500">
                <Ban className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">General Limitations</h3>
            </div>

            <p className="text-sm sm:text-base text-muted">
              Except as otherwise expressly provided under this License Agreement, You shall have no right and you specifically agree not to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {GENERAL_LIMITATIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-secondary/50 border border-border hover:border-red-500/30 transition-all text-sm sm:text-base text-foreground/90 leading-relaxed"
                >
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Limited Warranty & Limitation of Liability Terms */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Limited Warranty &amp; Limitation of Liability Terms
              </h3>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm sm:text-base text-muted leading-relaxed space-y-3">
              <p>
                The software is provided <strong>&quot;as is&quot;</strong> without warranty of any kind. All express, implied or statutory conditions, representations, and warranties including, without limitation, any implied warranty or condition of merchantability, fitness for a particular purpose, non-infringement, and satisfactory quality or arising from a course of dealing, law, usage, or trade practice, are hereby excluded to the maximum extent allowed by applicable law. Neither Company nor shall its licensors be liable for your action, or failure to act, in reliance on any information furnished as part of the software. You are solely responsible for maintaining the security of your network and computer systems. Neither Company nor its licensors represent, warrant, or guarantee that (a) security threats, malicious code and/or vulnerabilities will be identified, or (b) the content will render your network and systems safe from malicious code, vulnerabilities, intrusions, or other security breaches, (c) every vulnerability on every tested system or application will be discovered, or (d) there will be no false positives.
              </p>
            </div>
          </div>

          {/* Termination Terms */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Termination Terms</h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                This License Agreement is effective until terminated or the end of the Term. You may terminate this License Agreement at any time (i) by destroying all copies of Software, related documentation, analysis data and report and purging same from memory devices (required at the end of a Term).
              </p>
              <div className="p-4 rounded-xl bg-surface-secondary border border-border text-foreground/90 font-medium">
                Your rights under this License Agreement will terminate immediately without notice from Company if you fail to comply with any provision of this Agreement. Upon any termination, you must destroy all copies of Software and related documentation and purge same from memory devices.
              </div>
              <p>
                All provisions of this License Agreement relating to disclaimers of warranties, limitation of liabilities, remedies, damages protection of information and shall survive termination.
              </p>
            </div>
          </div>

          {/* General Terms */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface border border-border flex items-center justify-between gap-4 flex-wrap shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">General Terms</h3>
                <p className="text-sm sm:text-base text-muted mt-0.5">
                  This License Agreement shall be governed by and construed in accordance with the laws of the <strong>INDIA</strong>.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">
              <CheckCircle className="w-4 h-4" /> Laws of INDIA
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
