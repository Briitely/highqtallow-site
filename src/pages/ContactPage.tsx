import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactDetails from '../components/contact/ContactDetails';
import SellOurProduct from '../components/contact/SellOurProduct';

export default function ContactPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactDetails />
      <SellOurProduct />
      <Footer />
    </div>
  );
}
