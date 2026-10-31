import React from 'react';
import { PageId } from '../types';
import { FileText, ShieldAlert, CheckCircle2, RotateCcw } from 'lucide-react';
import { BRAND_EMAIL, BRAND_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          Legal & Operational Terms
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Terms & Conditions
        </h1>
        <p className="text-sm text-[#594235] max-w-xl mx-auto leading-relaxed">
          Please review the following terms regarding ordering, payment, and delivery of artisanal Bengali Khejur Gur from GOLDEN SAP.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-xl border border-[#e6dcce] shadow-xs space-y-8 text-sm text-[#594235] leading-relaxed">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#241711]">
            <CheckCircle2 className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">1. Nature of Artisanal Product</h2>
          </div>
          <p>
            GOLDEN SAP offers authentic, homemade, traditional Bengali Khejur Gur (Date Palm Jaggery) prepared through artisanal manual methods without synthetic preservatives or artificial color standardization. Because our products are handcrafted from natural tree sap, slight seasonal variations in amber color shade, texture, and aroma intensity may naturally occur between harvest batches.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <FileText className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">2. WhatsApp Order Placement & Acceptance</h2>
          </div>
          <p>
            Orders initiated through our website checkout are transmitted via WhatsApp to our official number (<strong>{BRAND_WHATSAPP_DISPLAY}</strong>). An order is considered confirmed only after our team confirms stock availability and receives proof of direct UPI payment or bank transfer from the customer.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <h2 className="font-serif-brand text-2xl font-bold text-[#241711]">3. Pricing & Currency</h2>
          <p>
            All listed prices are in Indian Rupees (INR - ₹). Prices reflect the current winter harvest. For the Khejur Gur Combo Pack (750g + 750g), the listed selling price of ₹1,499 includes complimentary delivery anywhere across India. We reserve the right to modify prices or discontinue seasonal items as winter supplies fluctuate.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <RotateCcw className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">4. Cancellations, Returns & Replacements</h2>
          </div>
          <p>
            Due to the perishable and food-grade nature of artisanal date palm jaggery:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Orders may be cancelled on WhatsApp prior to physical courier dispatch. Once a parcel is handed over to the courier partner, cancellation is not possible.</li>
            <li>We do not accept returns for change of mind once the package has been opened.</li>
            <li>In the event of transit damage or package compromise, please provide clear photos of the outer box and inner vacuum pouch on WhatsApp within 24 hours of delivery. Upon verification, we will promptly issue a replacement.</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <ShieldAlert className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">5. Contact Information</h2>
          </div>
          <p>
            For any clarifications regarding these terms, please contact our team via WhatsApp at <strong>{BRAND_WHATSAPP_DISPLAY}</strong> or via email at <strong>{BRAND_EMAIL}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
