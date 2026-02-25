import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import FloatingSocial from './components/FloatingSocial';
import CookieConsent from './components/CookieConsent';
import { SHOP_URL } from './config/shop';

// Keep HomePage imports (these are safe)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPromise from './components/BrandPromise';
import BrandIntro from './components/BrandIntro';
import ProductShowcase from './components/ProductShowcase';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// ✅ Lazy-load pages (critical for Leaflet)
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhereToBuyPage = lazy(() => import('./pages/WhereToBuyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'));

function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BrandPromise />
        <BrandIntro />
        <ProductShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/where-to-buy" element={<WhereToBuyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/shop" element={<ExternalRedirect url={SHOP_URL} />} />
        </Routes>
      </Suspense>

      <FloatingSocial />
      <CookieConsent />
    </>
  );
}
