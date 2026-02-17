import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-midnight pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-white/50 mt-4">
            Effective Date: February 17, 2026
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="font-body text-midnight/80 text-base leading-relaxed space-y-8">
          <p>
            High Q Foods Inc., operating as High Q Tallow ("High Q Tallow," "we," "our," or
            "us"), respects your privacy and is committed to protecting your personal information
            in accordance with applicable Canadian privacy laws, including the Personal
            Information Protection and Electronic Documents Act (PIPEDA).
          </p>

          <div className="bg-warm rounded-xl p-6">
            <p className="font-semibold text-midnight mb-1">Business Information:</p>
            <p>High Q Foods Inc.</p>
            <p>Operating as High Q Tallow</p>
            <p>514 Stafford Dr N #200</p>
            <p>Lethbridge, AB T1H 2B2</p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@highqtallow.com"
                className="text-sage-dark hover:underline"
              >
                info@highqtallow.com
              </a>
            </p>
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">We may collect the following personal information:</p>

            <h3 className="font-body text-lg font-semibold text-midnight mb-3">
              A. Information You Provide
            </h3>
            <p className="mb-2">When you:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Place an order</li>
              <li>Create an account</li>
              <li>Subscribe to our mailing list</li>
              <li>Opt into SMS marketing</li>
              <li>Submit a retailer inquiry</li>
              <li>Contact us</li>
            </ul>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing address</li>
              <li>Shipping address</li>
              <li>Account login credentials</li>
              <li>Retail business details (for wholesale inquiries)</li>
              <li>Any information you provide in notes or messages</li>
            </ul>

            <h3 className="font-body text-lg font-semibold text-midnight mb-3">
              B. Payment Information
            </h3>
            <p className="mb-6">
              All payment information is processed securely through Stripe via the Briitely/GHL
              platform. We do not store full credit card numbers.
            </p>

            <h3 className="font-body text-lg font-semibold text-midnight mb-3">
              C. Automatically Collected Information
            </h3>
            <p className="mb-2">When you visit our website, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages viewed</li>
              <li>Referring URLs</li>
              <li>Cookie and tracking data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              2. Cookies & Tracking Technologies
            </h2>
            <p className="mb-2">We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Website functionality</li>
              <li>Analytics (e.g., Google Analytics)</li>
              <li>Advertising (Facebook/Instagram, Google Ads)</li>
              <li>Retargeting and conversion tracking</li>
            </ul>
            <p>
              You may disable cookies through your browser settings; however, certain website
              features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use personal information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process and ship orders</li>
              <li>Manage customer accounts</li>
              <li>Communicate about orders</li>
              <li>Send promotional emails</li>
              <li>Send SMS marketing (with consent)</li>
              <li>Improve our website and advertising</li>
              <li>Vet and manage retail partners</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              4. Email & SMS Marketing
            </h2>
            <p className="mb-2">
              By subscribing to our mailing list or opting into SMS marketing, you consent to
              receive:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Promotions</li>
              <li>Product launches</li>
              <li>Educational content</li>
              <li>Company updates</li>
            </ul>
            <p className="mb-2">You may unsubscribe at any time via:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>The unsubscribe link in emails</li>
              <li>Replying STOP to SMS messages</li>
            </ul>
            <p>Message and data rates may apply for SMS.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              5. Retailer Information
            </h2>
            <p className="mb-2">
              Retail partner information submitted through our website is:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Stored securely within Briitely/GHL</li>
              <li>Reviewed manually</li>
              <li>Not sold or shared with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              6. Data Sharing
            </h2>
            <p className="mb-4">We do not sell your personal information.</p>
            <p className="mb-2">
              We may share information with trusted third parties only as necessary to operate our
              business, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Stripe (payment processing)</li>
              <li>Shipping providers</li>
              <li>Website hosting services</li>
              <li>Marketing and analytics providers</li>
              <li>SMS service providers</li>
            </ul>
            <p>These providers are contractually obligated to safeguard your data.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              7. Data Retention
            </h2>
            <p className="mb-2">
              We retain personal information only as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fulfill orders</li>
              <li>Maintain records for accounting and legal compliance</li>
              <li>Provide customer service</li>
              <li>Manage subscriptions and wholesale accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              8. Data Security
            </h2>
            <p>
              We use commercially reasonable security safeguards to protect personal information.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              9. Your Rights
            </h2>
            <p className="mb-2">Under Canadian privacy law, you may request:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Withdrawal of consent (subject to legal limitations)</li>
            </ul>
            <p>
              To make a request, contact:{' '}
              <a
                href="mailto:info@highqtallow.com"
                className="text-sage-dark hover:underline"
              >
                info@highqtallow.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              10. Children's Privacy
            </h2>
            <p>
              Our website and products are intended for general audiences. We do not knowingly
              collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              11. Governing Law
            </h2>
            <p>This Privacy Policy is governed by the laws of Alberta, Canada.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              12. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. The updated version will be posted
              with a revised effective date.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
