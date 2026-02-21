import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPromise from './components/BrandPromise';
import BrandIntro from './components/BrandIntro';
import ProductShowcase from './components/ProductShowcase';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import WhereToBuyPage from './pages/WhereToBuyPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CookieConsent from './components/CookieConsent';
import FloatingSocial from './components/FloatingSocial';
import { SHOP_URL } from './config/shop';

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
      <Hero />
      <BrandPromise />
      <BrandIntro />
      <ProductShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
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
      <FloatingSocial />
      <CookieConsent />
    </>
  );
}

export default App;
