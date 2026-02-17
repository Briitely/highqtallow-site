import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-midnight pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Terms & Conditions
          </h1>
          <p className="font-body text-sm text-white/50 mt-4">
            Effective Date: February 17, 2026
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="font-body text-midnight/80 text-base leading-relaxed space-y-8">
          <div>
            <p className="mb-2">
              These Terms govern your use of{' '}
              <a
                href="https://highqtallow.com"
                className="text-sage-dark hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://highqtallow.com
              </a>
              .
            </p>
            <p>By using this website, you agree to these Terms.</p>
          </div>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              1. Business Identity
            </h2>
            <p className="mb-2">This website is owned and operated by:</p>
            <div className="bg-warm rounded-xl p-6">
              <p>High Q Foods Inc.</p>
              <p>Operating as High Q Tallow</p>
              <p>Lethbridge, Alberta, Canada</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              2. Use of Website
            </h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to accounts</li>
              <li>Interfere with site security</li>
              <li>Copy or reproduce content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              3. Intellectual Property
            </h2>
            <p className="mb-2">All content including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Logos</li>
              <li>Product names</li>
              <li>Branding</li>
              <li>Images</li>
              <li>Product descriptions</li>
            </ul>
            <p>
              are the property of High Q Foods Inc. and may not be used without written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              4. Account Registration
            </h2>
            <p className="mb-2">
              If you create an account, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Maintaining confidentiality of login credentials</li>
              <li>All activity under your account</li>
            </ul>
            <p>We reserve the right to suspend accounts at our discretion.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              5. Subscriptions
            </h2>
            <p className="mb-2">If we offer subscription products:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You authorize recurring charges</li>
              <li>
                You may cancel according to the subscription terms provided at purchase
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              6. Wholesale Portal
            </h2>
            <p>
              Wholesale access is granted at our discretion. We reserve the right to approve,
              deny, or terminate wholesale accounts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              7. Limitation of Liability
            </h2>
            <p className="mb-2">
              To the fullest extent permitted by law, High Q Foods Inc. shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Indirect or consequential damages</li>
              <li>Allergic reactions</li>
              <li>Misuse of products</li>
              <li>Loss of profits</li>
            </ul>
            <p>
              Total liability shall not exceed the amount paid for the product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-midnight mb-4">
              8. Governing Law
            </h2>
            <p>These Terms are governed by the laws of Alberta, Canada.</p>
          </section>

          <div className="border-t border-midnight/10 pt-10">
            <h2 className="font-display text-3xl font-bold text-midnight mb-8">
              Terms of Sale (E-Commerce)
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                  1. Orders
                </h3>
                <p className="mb-2">All orders are subject to acceptance and availability.</p>
                <p className="mb-2">We reserve the right to cancel orders due to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pricing errors</li>
                  <li>Suspected fraud</li>
                  <li>Inventory limitations</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                  2. Pricing
                </h3>
                <p className="mb-2">All prices are listed in Canadian Dollars (CAD).</p>
                <p>We reserve the right to modify prices at any time.</p>
              </section>

              <section>
                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                  3. Payment
                </h3>
                <p>
                  Payments are processed securely via Stripe through Briitely/GHL.
                </p>
              </section>

              <section>
                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                  4. Shipping
                </h3>
                <p className="mb-2">We currently ship within Canada only.</p>
                <p>Shipping times are estimates and not guarantees.</p>
              </section>

              <section>
                <h3 className="font-display text-2xl font-bold text-midnight mb-4">
                  5. Returns & Refunds
                </h3>
                <p className="mb-4">
                  Due to the nature of personal care products, we do not accept returns of opened
                  or used products.
                </p>
                <p className="mb-4">
                  If your item arrives damaged or defective, contact us within 7 days at{' '}
                  <a
                    href="mailto:info@highqtallow.com"
                    className="text-sage-dark hover:underline"
                  >
                    info@highqtallow.com
                  </a>{' '}
                  with photos.
                </p>
                <p className="mb-4">
                  Approved refunds will be issued to the original payment method.
                </p>
                <p>Shipping fees are non-refundable unless the error was ours.</p>
              </section>
            </div>
          </div>

          <div className="border-t border-midnight/10 pt-10">
            <h2 className="font-display text-3xl font-bold text-midnight mb-6">
              Product Disclaimer
            </h2>
            <p className="mb-4">Our products are cosmetic and skincare products.</p>
            <p className="mb-4">
              They are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mb-4">
              Information on this website is for educational purposes only and is not medical
              advice.
            </p>
            <p className="mb-4">
              Always consult a qualified healthcare provider before using new skincare products,
              particularly if pregnant, nursing, or under medical care.
            </p>
            <p className="mb-4">
              We recommend performing a patch test before full use. Discontinue use if irritation
              occurs.
            </p>
            <p>Individual results may vary.</p>
          </div>

          <div className="border-t border-midnight/10 pt-10">
            <h2 className="font-display text-3xl font-bold text-midnight mb-6">
              SMS Marketing Terms
            </h2>
            <p className="mb-4">
              By opting into SMS marketing from High Q Tallow, you agree to receive recurring
              promotional messages.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consent is not a condition of purchase.</li>
              <li>Message and data rates may apply.</li>
              <li>Message frequency varies.</li>
              <li>Reply STOP to unsubscribe.</li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
