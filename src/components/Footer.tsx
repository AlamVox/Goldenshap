import React from 'react';
import { PageId } from '../types';
import { BRAND_EMAIL, BRAND_WHATSAPP_DISPLAY, BRAND_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { Phone, Mail, MapPin, Truck, ShieldCheck, Heart, Settings, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCatalogManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCatalogManager }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c120c] text-[#ede4d8] border-t border-[#362015] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#362015]">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <h2 className="font-serif-brand text-2xl font-bold tracking-wider text-[#d4af37] uppercase">
                GOLDEN SAP<sup className="text-[10px] font-sans font-medium text-[#bda088] ml-0.5 align-super tracking-normal">TM</sup>
              </h2>
              <p className="text-xs uppercase tracking-[0.16em] text-[#bda088] font-sans-brand mt-0.5">
                The Nature Sweetness of Bengal
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#c7b5a5]">
              Homemade traditional Patali Gur & liquid Nolen Gur handcrafted in Bengal winter. Extracted fresh at dawn, slow-simmered over wood fires, and delivered unadulterated pan-India.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#a8907e]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#d4af37]" /> Pan-India Delivery
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> 100% Pure Sap
              </span>
            </div>
            {/* Official Social Handles */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#d4af37]">
              <a
                href="https://www.instagram.com/goldensap.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39c12] transition-colors flex items-center gap-1.5 group"
                title="Instagram: @goldensap.in"
                aria-label="Instagram @goldensap.in"
              >
                <Instagram className="w-4 h-4 text-[#d4af37] group-hover:text-[#f39c12] transition-colors shrink-0" />
                <span className="group-hover:underline">@goldensap.in</span>
              </a>
              <span aria-hidden="true" className="text-[#594235]">·</span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39c12] transition-colors flex items-center gap-1.5 group"
                title="Facebook: Golden Sap"
                aria-label="Facebook Golden Sap"
              >
                <Facebook className="w-4 h-4 text-[#d4af37] group-hover:text-[#f39c12] transition-colors shrink-0" />
                <span className="group-hover:underline">Golden Sap</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-widest text-[#d4af37] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#c7b5a5]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Shop Khejur Gur
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  About Us & Craftsmanship
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Policies */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-widest text-[#d4af37] mb-4">
              Customer Care & Policies
            </h3>
            <ul className="space-y-2.5 text-sm text-[#c7b5a5]">
              <li>
                <button
                  onClick={() => handleNav('shipping')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Shipping & Packaging Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenCatalogManager}
                  className="flex items-center gap-1.5 text-xs text-[#a8907e] hover:text-[#d4af37] transition-colors cursor-pointer border border-[#362015] hover:border-[#d4af37]/40 px-2.5 py-1 rounded"
                  title="Owner Product & Price Configurator"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Store Catalog Manager</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp Order */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-widest text-[#d4af37] mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3.5 text-sm text-[#c7b5a5]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#a8907e]">WhatsApp Order Line</div>
                  <a
                    href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#ede4d8] hover:text-[#d4af37] transition-colors"
                  >
                    {BRAND_WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#a8907e]">Customer Support Email</div>
                  <a
                    href={`mailto:${BRAND_EMAIL}`}
                    className="font-medium text-[#ede4d8] hover:text-[#d4af37] transition-colors break-all"
                  >
                    {BRAND_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#a8907e]">Origin & Dispatch</div>
                  <span className="text-[#ede4d8] font-medium">
                    Bethuadahari, Nadia - 741126
                  </span>
                  <div className="text-[11px] text-[#a8907e]">West Bengal, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9c8472] gap-4">
          <p>© {new Date().getFullYear()} GOLDEN SAP. All rights reserved. Handcrafted in Bethuadahari, Nadia, West Bengal.</p>
          <div className="flex items-center gap-2">
            <span>Pure Date Palm Jaggery (Khejur Gur)</span>
            <span aria-hidden="true">·</span>
            <span>Free Pan-India Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
