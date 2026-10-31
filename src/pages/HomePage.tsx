import React, { useState } from 'react';
import { Product, PageId } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BRAND_WHATSAPP_NUMBER, BRAND_WHATSAPP_DISPLAY } from '../utils/whatsapp';
import {
  Sparkles,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Clock,
  Flame,
  CheckCircle2,
  Heart,
  MessageSquare,
} from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onSelectProduct,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const heroImage = '/src/assets/images/hero_khejur_gur_jaggery_1793456303525.jpg';
  const processImage = '/src/assets/images/process_date_palm_tapping_1793456305763.jpg';

  const faqs = [
    {
      q: 'What is Khejur Gur and how is it different from normal sugarcane jaggery?',
      a: 'Khejur Gur (Date Palm Jaggery) is extracted from the natural, sweet sap of wild date palm trees (Phoenix sylvestris) during the crisp winter months of Bengal. Unlike standard sugarcane jaggery, it has a sophisticated earthy aroma, delicate caramel undertones, and a velvety fudge-like melt.',
    },
    {
      q: 'Does GOLDEN SAP add any sugar, glucose syrup, or chemicals?',
      a: 'Never. Our Khejur Gur is 100% pure date palm sap. We strictly reject artificial sweeteners, sugar syrup fillers, chemical clarifiers, or artificial coloring agents. You receive the pure, unadulterated essence of the winter harvest.',
    },
    {
      q: 'How should I store the solid Patali Gur?',
      a: 'Keep the jaggery in a clean, airtight container away from moisture and direct sunlight. In warm or humid environments, storing it in the refrigerator helps preserve its aromatic floral compounds and prevents softening.',
    },
    {
      q: 'How does WhatsApp checkout work?',
      a: 'When you select your items and fill your delivery details, our site formats a complete order summary and redirects you directly to our official WhatsApp (+91 8945046367). Our team will confirm stock and share direct UPI payment details (Google Pay, PhonePe, Paytm, or Net Banking) for zero-commission, instant checkout.',
    },
    {
      q: 'Do you deliver all over India?',
      a: 'Yes, we ship safely to all serviceable Indian PIN codes via reliable express couriers. Every package is vacuum-sealed and insulated in protective food-safe packaging to ensure fresh delivery without melting or damage.',
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#241711] text-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 z-10">
              <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#d4af37]">
                <span>Artisanal Bengal Heritage</span>
                <span aria-hidden="true">·</span>
                <span>Winter 2026 Harvest</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#c7b5a5]">
                  GOLDEN SAP
                </span>
                <h1 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf7f2] leading-[1.15] text-balance">
                  Pure Tradition. <br />
                  <span className="text-[#d4af37] italic font-normal">Golden Taste.</span>
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-[#c7b5a5] max-w-xl font-normal leading-relaxed text-balance">
                Experience the authentic taste of Bengal's traditional Khejur Gur. Hand-extracted at winter dawn by master Shiuli climbers, slow-simmered over wood fire in wide iron pans, and delivered fresh to your doorstep across India.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-5 py-2.5 bg-[#d4af37] hover:bg-[#c59b27] text-[#1c120c] font-bold text-xs tracking-wide uppercase rounded-md shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Shop Khejur Gur</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    'Hello GOLDEN SAP, I would like to order authentic Bengali Khejur Gur.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-transparent hover:bg-white/5 border border-[#d4af37]/60 hover:border-[#d4af37] text-[#faf7f2] font-semibold text-xs rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-3 border-t border-[#3d2417] grid grid-cols-3 gap-3 text-xs text-[#bda088]">
                <div>
                  <div className="font-bold text-[#faf7f2] text-sm tabular-nums">100%</div>
                  <div className="mt-0.5 text-[11px]">Pure Date Palm Sap</div>
                </div>
                <div>
                  <div className="font-bold text-[#faf7f2] text-sm tabular-nums">0%</div>
                  <div className="mt-0.5 text-[11px]">No Added Sugar/Syrup</div>
                </div>
                <div>
                  <div className="font-bold text-[#faf7f2] text-sm">Pan India</div>
                  <div className="mt-0.5 text-[11px]">Free Home Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Media (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#593924] shadow-2xl aspect-4/3 lg:aspect-5/6 bg-[#1c120c]">
                <img
                  src={heroImage}
                  alt="Authentic Bengali Khejur Gur Date Palm Jaggery and Liquid Nolen Gur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#ede4d8] backdrop-blur-md bg-black/40 p-2.5 rounded-lg border border-white/10">
                  <div className="font-serif-brand text-xs sm:text-sm font-semibold text-[#d4af37]">
                    Handcrafted Bengali Khejur Patali
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#c7b5a5] mt-0.5">
                    Slow-boiled over rural wood fire for authentic caramel richness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#e6dcce] p-4 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 text-[#241711]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f5ede0] text-[#b8860b] flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                100% Natural Sap
              </h4>
              <p className="text-xs text-[#594235] mt-1 leading-relaxed">
                Single-origin wild date palm trees. No preservatives, colors, or refined sugar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f5ede0] text-[#b8860b] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                Wood-Fired Simmering
              </h4>
              <p className="text-xs text-[#594235] mt-1 leading-relaxed">
                Boiled gently in iron cauldrons to capture the iconic smoky, buttery aroma.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f5ede0] text-[#b8860b] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                Free Pan-India Delivery
              </h4>
              <p className="text-xs text-[#594235] mt-1 leading-relaxed">
                Zero delivery charges on all products and pack sizes across India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f5ede0] text-[#b8860b] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                WhatsApp Checkout
              </h4>
              <p className="text-xs text-[#594235] mt-1 leading-relaxed">
                Order directly on WhatsApp without complex payment gateways or extra surcharges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
            Artisanal Reserve
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241711]">
            Featured Khejur Gur
          </h2>
          <p className="text-xs sm:text-sm text-[#594235] leading-relaxed">
            Handcrafted solid Patali Gur (পাটালি গুড়) and silky liquid Nolen Gur (নলেন গুড়) from Bengal's sweetest date palm sap. Available in signature packs and our popular Duo Combo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#241711] text-[#241711] hover:bg-[#241711] hover:text-[#faf7f2] text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer"
          >
            <span>View Full Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Traditional Preparation Process */}
      <section className="bg-[#f5ede0] py-10 sm:py-14 border-y border-[#e6dcce]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Process Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden border border-[#d8cbba] shadow-xl aspect-4/3 lg:aspect-3/4">
                <img
                  src={processImage}
                  alt="Traditional sap harvesting from Bengal Date Palm trees at dawn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#ede4d8]">
                  <p className="font-serif-brand text-base font-bold text-[#d4af37]">
                    Shiuli Artisans at Dawn
                  </p>
                  <p className="text-[11px] text-[#c7b5a5] mt-0.5">
                    Collecting the earthen clay pots before sunlight warms the fresh sap.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
                  Time-Honored Craftsmanship
                </span>
                <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241711] mt-1.5">
                  The Journey of Golden Sap
                </h2>
                <p className="text-xs sm:text-sm text-[#594235] mt-2 leading-relaxed">
                  Authentic Khejur Gur is deeply tied to winter in Bengal. We adhere strictly to ancestral methods passed down over generations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-[#e6dcce] space-y-1.5">
                  <div className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    01. Evening Tapping
                  </div>
                  <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                    The Gentle Incision
                  </h4>
                  <p className="text-xs text-[#594235] leading-relaxed">
                    Shiuli climbers shave the upper trunk of date palm trees and fasten sterile earthen clay pots as dusk settles over the groves.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-[#e6dcce] space-y-1.5">
                  <div className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    02. Dawn Harvest
                  </div>
                  <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                    Cold-Weather Nectar
                  </h4>
                  <p className="text-xs text-[#594235] leading-relaxed">
                    Sap is retrieved at first morning light while the temperature is low, preventing premature natural fermentation and safeguarding pure sweetness.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-[#e6dcce] space-y-1.5">
                  <div className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    03. Wood-Fire Simmering
                  </div>
                  <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                    Open Iron Cauldrons
                  </h4>
                  <p className="text-xs text-[#594235] leading-relaxed">
                    Fresh sap is filtered and reduced in large shallow iron pans over wood embers for hours until it thickens into fragrant golden amber.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-[#e6dcce] space-y-1.5">
                  <div className="text-[11px] font-bold text-[#b8860b] uppercase tracking-wider">
                    04. Hand-Poured Patali
                  </div>
                  <h4 className="font-serif-brand text-base font-bold text-[#241711]">
                    Natural Setting
                  </h4>
                  <p className="text-xs text-[#594235] leading-relaxed">
                    Stirred vigorously by hand to initiate natural micro-crystallization, then poured into moulds to solidify without synthetic binders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose GOLDEN SAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241711] text-[#faf7f2] rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#3d2417] shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
              Our Promise
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Why Discerning Sweet Lovers Choose GOLDEN SAP
            </h2>
            <p className="text-xs sm:text-sm text-[#c7b5a5] leading-relaxed">
              In a commercial market flooded with adulterated jaggery mixed with white sugar syrup and chemical bleaching agents, GOLDEN SAP stands uncompromisingly for purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#3d2417]">
            <div className="space-y-3">
              <h4 className="font-serif-brand text-xl font-bold text-[#d4af37]">
                Single-Origin Purity
              </h4>
              <p className="text-xs text-[#c7b5a5] leading-relaxed">
                Sourced directly from native palm groves in rural Bengal. Every batch is traceable, unblended, and uncompromised.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif-brand text-xl font-bold text-[#d4af37]">
                Rich in Natural Minerals
              </h4>
              <p className="text-xs text-[#c7b5a5] leading-relaxed">
                Retains its native iron, potassium, magnesium, and plant micronutrients that refined sugars completely lack.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif-brand text-xl font-bold text-[#d4af37]">
                Respect for Artisans
              </h4>
              <p className="text-xs text-[#c7b5a5] leading-relaxed">
                We work directly with traditional rural Shiuli tree harvesters, preserving Bengal's centuries-old winter culinary legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Authentic Tasting Appreciation (No fake reviews or fake certifications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
            Patron Voices & Tasting Appreciation
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#241711]">
            Cherished by Connoisseurs of Bengal's Heritage
          </h2>
          <p className="text-xs sm:text-sm text-[#594235]">
            Reflections from patrons who celebrate authentic winter Payesh, Pithe, and artisanal Khejur Gur across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-[#e6dcce] flex flex-col justify-between space-y-3">
            <p className="text-xs text-[#594235] italic leading-relaxed">
              "The aroma when opening the package immediately took me back to winter mornings in Nadia. The Gur melted effortlessly in our Gobindobhog Payesh without curdling the milk—the ultimate sign of genuine chemical-free purity."
            </p>
            <div className="pt-2.5 border-t border-[#f0e8db] flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-[#241711]">Seasonal Tasting Note</div>
                <div className="text-[#785b46]">Patron from Bengaluru</div>
              </div>
              <span className="text-[11px] text-[#b8860b] font-medium">Winter Payesh</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#e6dcce] flex flex-col justify-between space-y-3">
            <p className="text-xs text-[#594235] italic leading-relaxed">
              "Most jaggery bought in city stores is hard and overly sweet from sugar crystals. GOLDEN SAP has that genuine velvety, fudge-like bite and subtle woody smokiness that authentic Patali is renowned for."
            </p>
            <div className="pt-2.5 border-t border-[#f0e8db] flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-[#241711]">Seasonal Tasting Note</div>
                <div className="text-[#785b46]">Patron from Mumbai</div>
              </div>
              <span className="text-[11px] text-[#b8860b] font-medium">Patali Connoisseur</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#e6dcce] flex flex-col justify-between space-y-3">
            <p className="text-xs text-[#594235] italic leading-relaxed">
              "Ordered the 750g + 750g combo pack. The packaging was immaculate—no leakage or moisture damage during transit to Delhi. The WhatsApp checkout was remarkably swift and convenient."
            </p>
            <div className="pt-2.5 border-t border-[#f0e8db] flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-[#241711]">Seasonal Tasting Note</div>
                <div className="text-[#785b46]">Patron from New Delhi</div>
              </div>
              <span className="text-[11px] text-[#b8860b] font-medium">Pan-India Delivery</span>
            </div>
          </div>
        </div>

        {/* Feedback Share Callout */}
        <div className="mt-6 text-center bg-[#f5ede0] p-4 sm:p-5 rounded-xl border border-[#e6dcce] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-brand text-base sm:text-lg font-bold text-[#241711]">
              Tried our Khejur Gur this season?
            </h4>
            <p className="text-xs text-[#594235]">
              We value honest patron feedback. Share your culinary creations or tasting thoughts with our family via WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hello GOLDEN SAP, I would like to share my feedback on your Khejur Gur:'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 7. Frequently Asked Questions (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 space-y-1.5">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
            Knowledge & Guidance
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#241711]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#e6dcce] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#faf7f2]"
                >
                  <span className="font-serif-brand text-sm sm:text-base font-bold text-[#241711]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#785b46] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#b8860b]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-[#594235] leading-relaxed border-t border-[#f0e8db] pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Bottom WhatsApp Order Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-[#1c120c] rounded-2xl p-6 sm:p-8 text-[#faf7f2] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#362015] shadow-xl">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Direct From The Grove
            </span>
            <h3 className="font-serif-brand text-xl sm:text-2xl font-bold">
              Ready to Taste Authentic Bengali Khejur Gur?
            </h3>
            <p className="text-xs text-[#c7b5a5]">
              Order directly through WhatsApp with transparent pricing, zero gateway commissions, and personalized care from our family.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('shop')}
              className="px-5 py-2.5 bg-[#d4af37] hover:bg-[#c59b27] text-[#1c120c] font-bold text-xs uppercase tracking-wider rounded-md transition-colors text-center cursor-pointer"
            >
              Shop Khejur Gur
            </button>
            <a
              href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hello GOLDEN SAP, I would like to order fresh Khejur Gur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
