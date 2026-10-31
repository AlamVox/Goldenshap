import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const processImage = '/src/assets/images/process_date_palm_tapping_1793456305763.jpg';
  const heroImage = '/src/assets/images/hero_khejur_gur_jaggery_1793456303525.jpg';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 sm:space-y-24">
      {/* Hero Narrative */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          Our Heritage & Origin
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[#241711] leading-tight text-balance">
          Reviving the Ancient Winter Alchemy of Bengal
        </h1>
        <p className="text-base sm:text-lg text-[#594235] leading-relaxed text-balance">
          GOLDEN SAP was born in Bethuadahari, Nadia—the traditional heartland of Bengal's Khejur Gur—out of a profound dedication to authentic, unadulterated date palm nectar that cannot be mechanized or rushed in factories.
        </p>
      </div>

      {/* Split Section 1: The Shiuli & The Date Palm */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b8860b]">
            Ancestral Skill
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#241711]">
            The Art of the Shiuli Climbers
          </h2>
          <p className="text-sm text-[#594235] leading-relaxed">
            As winter descends across the villages of rural Bengal, the ancient rhythm of Khejur Gur begins. Highly skilled traditional climbers, known as <em>Shiulis</em>, ascend the tall, wild date palm trees with nimble agility.
          </p>
          <p className="text-sm text-[#594235] leading-relaxed">
            With razor-sharp curved blades, they carefully shave a tender patch beneath the leafy crown and insert a slender bamboo spigot. Earthen clay pots (<em>bhar</em>) are fastened just below to catch the sweet, crystal-clear sap as it drips droplet by droplet throughout the chilled night.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#241711]">
            <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
            <span>Harvested exclusively during cold winter nights for zero fermentation</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#d8cbba] shadow-xl aspect-4/3 sm:aspect-16/10">
            <img
              src={processImage}
              alt="Artisanal date palm sap gathering in rural Bengal"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Split Section 2: Wood Fires & Iron Pans */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-[#d8cbba] shadow-xl aspect-4/3 sm:aspect-16/10">
            <img
              src={heroImage}
              alt="Traditional Bengali Khejur Patali Gur blocks and liquid Nolen Gur"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b8860b]">
            Purity Without Compromise
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#241711]">
            Simmered Slowly Over Tamarind Wood Fire
          </h2>
          <p className="text-sm text-[#594235] leading-relaxed">
            The freshly gathered sap is poured into shallow iron pans (<em>kadhai</em>) stationed right in the groves. For four to five hours, it is continuously stirred over an open hearth fueled by dry palm fronds and seasoned wood.
          </p>
          <p className="text-sm text-[#594235] leading-relaxed">
            As moisture gently evaporates, the sap thickens into a luminous golden syrup, filling the village air with an unmistakable, intoxicating fragrance. When it reaches peak crystallization temperature, it is poured into natural earthen moulds to cool into solid <strong>Patali</strong>.
          </p>
          <p className="text-sm text-[#594235] leading-relaxed">
            No white sugar, no glucose syrup, no chemicals. Only pure, concentrated date palm sap.
          </p>
        </div>
      </div>

      {/* Core Tenets */}
      <div className="bg-[#f5ede0] rounded-2xl p-8 sm:p-12 border border-[#e6dcce]">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#b8860b]">
            Our Guiding Philosophy
          </span>
          <h3 className="font-serif-brand text-3xl font-bold text-[#241711]">
            The GOLDEN SAP Purity Pledge
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="bg-white p-6 rounded-xl border border-[#e6dcce] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#fbf6ee] text-[#b8860b] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="font-serif-brand text-lg font-bold text-[#241711]">
              Unrefined & Chemical-Free
            </h4>
            <p className="text-xs text-[#594235] leading-relaxed">
              Commercial jaggery often relies on chemical clarifiers like sodium hydrosulphite to artificially lighten color. We use zero chemical clarifiers—retaining the natural deep amber color and wholesome minerals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e6dcce] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#fbf6ee] text-[#b8860b] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif-brand text-lg font-bold text-[#241711]">
              Fair Artisan Support
            </h4>
            <p className="text-xs text-[#594235] leading-relaxed">
              We work directly with traditional rural tree-tappers, providing respectable seasonal livelihoods and keeping this irreplaceable Bengali culinary heritage alive.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e6dcce] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#fbf6ee] text-[#b8860b] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif-brand text-lg font-bold text-[#241711]">
              Pan-India Freshness
            </h4>
            <p className="text-xs text-[#594235] leading-relaxed">
              Whether you reside in Delhi, Mumbai, Bengaluru, or Guwahati, we deliver freshly packaged Khejur Gur with leak-proof protection right to your home.
            </p>
          </div>
        </div>
      </div>

      {/* CTA to Shop */}
      <div className="text-center space-y-4">
        <h3 className="font-serif-brand text-3xl font-bold text-[#241711]">
          Bring Bengal's Golden Tradition to Your Table
        </h3>
        <p className="text-sm text-[#594235] max-w-md mx-auto">
          Stocked for the current winter harvest. Available in 750g, 1kg, and value Combo packs.
        </p>
        <button
          onClick={() => onNavigate('shop')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
        >
          <span>Explore Khejur Gur Collection</span>
          <ArrowRight className="w-4 h-4 text-[#d4af37]" />
        </button>
      </div>
    </div>
  );
};
