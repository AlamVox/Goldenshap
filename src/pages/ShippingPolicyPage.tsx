import React from 'react';
import { PageId } from '../types';
import { Truck, ShieldCheck, Clock, PackageCheck, AlertCircle } from 'lucide-react';
import { BRAND_WHATSAPP_DISPLAY, BRAND_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface ShippingPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const ShippingPolicyPage: React.FC<ShippingPolicyPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          Pan-India Fulfillment
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Shipping & Delivery Policy
        </h1>
        <p className="text-sm text-[#594235] max-w-xl mx-auto leading-relaxed">
          How we carefully prepare, package, and dispatch authentic Bengali Khejur Gur from rural groves to your doorstep.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-xl border border-[#e6dcce] shadow-xs space-y-8 text-sm text-[#594235] leading-relaxed">
        {/* Section 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#241711]">
            <Truck className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">1. Pan-India Coverage</h2>
          </div>
          <p>
            GOLDEN SAP ships to all serviceable residential and commercial PIN codes across India. Whether you are in major metropolitan cities (Kolkata, Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Pune) or tier-2 and tier-3 towns, your order will be delivered by recognized courier partners.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <PackageCheck className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">2. Artisanal Food-Safe Packaging</h2>
          </div>
          <p>
            Authentic Date Palm Jaggery (Patali Gur) is sensitive to excessive heat and humidity. To preserve its delicate crystallized structure and prevent any transit damage:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Each Patali cake is individually vacuum-sealed in heavy-duty food-grade pouches.</li>
            <li>Enclosed with moisture-barrier wrapping and impact-resistant corrugated cushioning.</li>
            <li>Packaged in tamper-evident outer cartons clearly labeled for fragile food handling.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <Clock className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">3. Processing & Delivery Timelines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
            <div className="bg-[#faf7f2] p-4 rounded-lg border border-[#e6dcce]">
              <span className="font-bold text-[#241711] block mb-1">Dispatch Window</span>
              Orders placed and payment-confirmed on WhatsApp are freshly packed and dispatched within <strong>24 to 48 hours</strong>.
            </div>
            <div className="bg-[#faf7f2] p-4 rounded-lg border border-[#e6dcce]">
              <span className="font-bold text-[#241711] block mb-1">Transit Estimates</span>
              Major Metro Cities: <strong>3 to 5 business days</strong>.<br />
              Other Indian Regions: <strong>4 to 7 business days</strong>.
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <h2 className="font-serif-brand text-2xl font-bold text-[#241711]">
            4. 100% Free Pan-India Delivery on All Orders
          </h2>
          <p>
            At GOLDEN SAP, <strong>every order enjoys complimentary Free Pan-India Delivery</strong> across all serviceable pincodes. Whether you order a single 250g/500g jar, a 1kg/2kg Patali pack, or our signature Combo Pack, there are zero delivery charges and no minimum purchase requirements.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <ShieldCheck className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">5. Transit Damage Guarantee</h2>
          </div>
          <p>
            In the rare event that your package is damaged during transit, please take a photo/video of the unboxing within 24 hours of receiving the parcel and share it with our WhatsApp team at <strong>{BRAND_WHATSAPP_DISPLAY}</strong>. We will immediately arrange a replacement shipment or resolve the matter with utmost fairness.
          </p>
        </div>
      </div>
    </div>
  );
};
