import imgSavingFace from '../assets/5.png';
import imgSayNoToCrack from '../assets/6.png';
import imgDontBeRash from '../assets/7.png';
import imgTheDude from '../assets/1.png';
import imgZestIntentions from '../assets/2.png';
import imgHerbYourEnthusiasm from '../assets/3.png';
import imgOrangeYouGlad from '../assets/4.png';

export interface Product {
  name: string;
  type: string;
  tagline: string;
  subtitle: string;
  description: string;
  accentColor: string;
  image?: string;
  ingredients?: string;
  overlayTextDark?: boolean;
  ribbon?: string;
  highlightPhrase?: string;
}

export const BALMS: Product[] = [
  {
    name: 'Saving Face',
    type: 'Face & Body Cream',
    tagline: 'Your skin deserves better than average.',
    subtitle: 'Daily Facial Balm \u2014 Radiance + Nourishment',
    description:
      'A lightweight, fast-absorbing facial balm made with hyaluronic acid, designed for everyday use to support smooth, hydrated, healthy-looking skin. Perfect for all skin types.',
    accentColor: '#382d72',
    image: imgSavingFace,
    ingredients: '75% grass-fed, grass-finished Alberta bison tallow, jojoba oil*, essential oils* (grapefruit, lavender, ginger, rosemary, jasmine), .1% hyaluronic acid mixture, *organic',
    ribbon: 'Best Seller',
    highlightPhrase: 'hyaluronic acid',
  },
  {
    name: 'Say No to Crack',
    type: 'Foot & Body Cream',
    tagline: 'Because cracked heels are never in style.',
    subtitle: 'Intensive Moisture Balm \u2014 Dry Skin Rescue',
    description:
      'A rich, deeply moisturizing balm. Perfect for heels, elbows, hands, or any area needing intensive hydration. Formulated to repair hardworking skin and deeply hydrate during Alberta\u2019s harsh, dry winters.',
    accentColor: '#646e68',
    image: imgSayNoToCrack,
    ingredients: '67% grass-fed, grass-finished Alberta bison tallow, extra-virgin olive oil*, essential oils* (sandalwood, myrrh, tea tree, frankincense, jasmine), *organic',
    ribbon: 'Deep Repair',
    highlightPhrase: 'repair hardworking skin',
  },
  {
    name: "Don't Be Rash",
    type: 'Face & Body Cream',
    tagline: 'Calm skin, cool head, zero rashes.',
    subtitle: 'Calming Balm \u2014 Comfort + Redness Support',
    description:
      'A gentle balm with finely milled oats to comfort visible redness and support the skin\u2019s natural barrier. Ideal for sensitive or easily irritated skin, and perfect post-shave to soothe razor burn. Use on the face or body wherever your skin needs extra care.',
    accentColor: '#7fb285',
    image: imgDontBeRash,
    ingredients: '75% grass-fed, grass-finished Alberta bison tallow, jojoba oil*, essential oils* (bergamot, orange, clary sage, patchouli), colloidal oatmeal, *organic',
    ribbon: 'Sensitive Skin',
    highlightPhrase: 'easily irritated skin',
  },
];

export const SOAPS: Product[] = [
  {
    name: 'Orange You Glad',
    type: 'Bison Tallow Soap',
    tagline: 'Citrus-forward freshness, tallow-powered clean.',
    subtitle: 'Simple. Bright. Hard to dislike.',
    description:
      'A clean, straightforward orange-scented soap with a fresh, cheerful aroma.',
    accentColor: '#ff7e2e',
    image: imgOrangeYouGlad,
    ingredients: 'Grass-fed, grass-finished Alberta bison tallow, coconut oil*, water, sodium hydroxide, essential oil blend* (sweet orange, ginger), beeswax*, castor oil*, sugar, *organic',
  },
  {
    name: 'Zest Intentions',
    type: 'Bison Tallow Soap',
    tagline: 'The road to clean skin is paved with zest.',
    subtitle: 'Bright. Clean. Get on with your day.',
    description:
      'A fresh, light citrus soap scented with bergamot and grapefruit.',
    accentColor: '#ffe770',
    image: imgZestIntentions,
    ingredients: 'Grass-fed, grass-finished Alberta bison tallow, coconut oil*, water, sodium hydroxide, essential oil blend* (bergamot, grapefruit), beeswax*, castor oil*, sugar, *organic',
    overlayTextDark: true,
  },
  {
    name: 'The Dude',
    type: 'Bison Tallow Soap',
    tagline: 'It really ties the bathroom together.',
    subtitle: 'Simple. Solid. No nonsense.',
    description:
      'Scented with sandalwood and vetiver and made with activated charcoal.',
    accentColor: '#646e68',
    image: imgTheDude,
    ingredients: 'Grass-fed, grass-finished Alberta bison tallow, coconut oil*, water, sodium hydroxide, essential oil blend* (sandalwood, vetiver), beeswax*, activated charcoal, castor oil*, sugar, *organic',
  },
  {
    name: 'Herb Your Enthusiasm',
    type: 'Bison Tallow Soap',
    tagline: 'Herbal freshness for pretty, pretty, pretty good skin.',
    subtitle: 'Calm skin. Clear head.',
    description:
      'A soothing blend of lavender and rosemary with a soft floral aroma and a subtle hint of pine.',
    accentColor: '#cb6ce6',
    image: imgHerbYourEnthusiasm,
    ingredients: 'Grass-fed, grass-finished Alberta bison tallow, coconut oil*, water, sodium hydroxide, essential oil blend* (lavender, rosemary), beeswax*, castor oil*, sugar, *organic',
  },
];
