import React, { useState } from 'react';
import { PageId } from '../types';
import { ChevronDown, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_WHATSAPP_NUMBER, BRAND_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      category: 'Purity & Authenticity',
      q: 'How can I verify the purity of GOLDEN SAP Khejur Gur?',
      a: 'Authentic Khejur Gur melts gently with body temperature and possesses a distinct, complex earthy caramel fragrance rather than a sharp, one-dimensional sugar bite. Furthermore, when dissolved into warm milk for preparing Payesh, authentic chemical-free Khejur Gur will not curdle the milk (always ensure the heat is turned low before adding jaggery). We never use sodium hydrosulphite or artificial bleaching clarifiers.',
    },
    {
      category: 'Purity & Authenticity',
      q: 'Do you blend sugarcane molasses or refined white sugar?',
      a: 'Absolutely not. Our jaggery is made strictly from 100% pure date palm sap harvested during cold winter nights. Many commercial brands dilute date palm jaggery with cheap sugarcane molasses or white sugar to cut costs; GOLDEN SAP guarantees single-origin, unadulterated purity.',
    },
    {
      category: 'Culinary & Usage',
      q: 'What is the best way to cook with solid Patali Gur?',
      a: 'Patali Gur is famous for traditional Bengali sweets such as Khejur Gurer Payesh, Patishapta, Gokul Pithe, Dudh Puli, and Joynagar Moa. You can also grate or slice pieces to sweeten daily morning oats, herbal chai, artisan coffee, or simply savor a small piece as a healthy post-meal dessert.',
    },
    {
      category: 'Storage & Freshness',
      q: 'What is the shelf life and how should it be stored?',
      a: 'In a cool, dry pantry inside an airtight glass or food-grade container, solid Khejur Patali remains fresh for 4 to 6 months. During warm summer months or in coastal, humid climates, we strongly recommend storing the jaggery in the refrigerator. This maintains its firm fudge-like texture and locks in its delicate volatile aroma compounds.',
    },
    {
      category: 'Ordering & Payment',
      q: 'Why does GOLDEN SAP use WhatsApp checkout instead of a standard payment gateway?',
      a: 'Artisanal date palm jaggery is a delicate, seasonal craft. By using WhatsApp checkout, we connect with each customer directly, confirm stock availability, verify delivery addresses to avoid courier returns, and eliminate high 2-3% payment gateway intermediary fees—allowing us to offer higher quality jaggery at transparent fair prices.',
    },
    {
      category: 'Ordering & Payment',
      q: 'How do I pay after placing my order on WhatsApp?',
      a: 'Once your order details reach our WhatsApp (+91 8945046367), our team shares our official direct UPI QR code or UPI ID (Google Pay, PhonePe, Paytm, BHIM) or Bank Transfer details. Once you send payment confirmation, your order is locked for prompt dispatch.',
    },
    {
      category: 'Shipping & Delivery',
      q: 'How is the jaggery protected against melting during transit across India?',
      a: 'We pack every jaggery cake in high-barrier, food-grade vacuum pouches with moisture-absorbent cushions and sturdy outer corrugated packaging. This prevents exposure to external humidity and ensures the Patali reaches you in pristine condition anywhere in India.',
    },
    {
      category: 'Shipping & Delivery',
      q: 'Are there any delivery or shipping charges?',
      a: 'No! All products on GOLDEN SAP come with 100% Free Delivery across India. Whether you order a single 250g jar, a 1kg Patali pack, or our signature Combo Pack, shipping is completely complimentary.',
    },
    {
      category: 'Shipping & Delivery',
      q: 'How long does delivery take?',
      a: 'Orders are packed and dispatched within 24-48 hours. Transit typically takes 3 to 5 business days for major metro cities and 4 to 7 business days for regional pin codes. We share courier tracking links on WhatsApp as soon as your parcel ships.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          Clear Answers
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-[#594235] max-w-xl mx-auto leading-relaxed">
          Everything you need to know about traditional Bengali Khejur Gur, culinary tips, storage, and our simple WhatsApp ordering process.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#e6dcce] overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#faf7f2] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b8860b] block mb-1">
                    {item.category}
                  </span>
                  <span className="font-serif-brand text-lg sm:text-xl font-bold text-[#241711] leading-snug">
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#785b46] shrink-0 mt-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#b8860b]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#594235] leading-relaxed border-t border-[#f0e8db] pt-4 animate-in fade-in duration-150">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct WhatsApp Callout */}
      <div className="bg-[#f5ede0] rounded-xl p-8 border border-[#e6dcce] text-center space-y-4">
        <h3 className="font-serif-brand text-2xl font-bold text-[#241711]">
          Still Have Questions?
        </h3>
        <p className="text-xs sm:text-sm text-[#594235] max-w-md mx-auto">
          Our team is happy to answer your questions regarding harvest batches, texture, recipe suggestions, or shipping to your location.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hello GOLDEN SAP, I have a question regarding Khejur Gur:'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Us on WhatsApp ({BRAND_WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
