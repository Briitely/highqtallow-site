import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutOrigin from '../components/about/AboutOrigin';
import AboutRendering from '../components/about/AboutRendering';
import AboutGrowth from '../components/about/AboutGrowth';
import AboutVision from '../components/about/AboutVision';
import AboutNow from '../components/about/AboutNow';
import heroBg from '../assets/ChatGPT_Image_Feb_8,_2026,_10_35_25_AM.png';

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Chef Alan in the High Q Kitchen"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-4xl mx-auto px-6 pb-16 md:pb-24 text-center w-full">
          <h1
            className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I never planned to be
            <br />
            "the tallow guy."
          </h1>
          <p
            className={`font-body text-base md:text-lg text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Two years ago, I was just a chef with cracked hands, dry feet, and a
            stubborn belief that there had to be a better way to care for our
            bodies&nbsp;&mdash; inside and out.
          </p>
          <div
            className={`mt-8 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group"
            >
              See the Products
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <AboutOrigin />
      <AboutRendering />
      <AboutGrowth />
      <AboutVision />
      <AboutNow />

      <Footer />
    </div>
  );
}
