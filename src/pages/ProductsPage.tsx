import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import ProductsHero from '../components/ProductsHero';
import ProductTeaser from '../components/ProductTeaser';
import FAQ from '../components/FAQ';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bison Tallow Balms & Soaps | High Q Tallow Canada</title>
        <meta
          name="description"
          content="Shop Canadian-made bison tallow balms and cold-process soaps. No seed oils. No synthetic fragrance. Just nutrient-dense bison tallow skincare."
        />
        <link
          rel="canonical"
          href="https://highqtallow.com/products"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Bison Tallow Balms & Soaps | High Q Tallow" />
        <meta
          property="og:description"
          content="Simple, effective bison tallow skincare made in Canada. No fillers. No seed oils."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://highqtallow.com/products" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <ProductsHero />
          <ProductTeaser />
          <FAQ />
           {/* <InstagramFeed /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
