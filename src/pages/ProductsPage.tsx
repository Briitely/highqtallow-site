import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductsHero from '../components/ProductsHero';
import ProductTeaser from '../components/ProductTeaser';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductsHero />
      <ProductTeaser />
      <FAQ />
      <Footer />
    </div>
  );
}
