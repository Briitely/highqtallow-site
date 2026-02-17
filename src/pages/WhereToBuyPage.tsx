import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import WhereToBuyHero from '../components/wheretobuy/WhereToBuyHero';
import StoreLocator from '../components/wheretobuy/StoreLocator';
import OnlineOrderingCTA from '../components/wheretobuy/OnlineOrderingCTA';
import Footer from '../components/Footer';

export default function WhereToBuyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhereToBuyHero />
      <StoreLocator />
      <OnlineOrderingCTA />
      <Footer />
    </div>
  );
}
