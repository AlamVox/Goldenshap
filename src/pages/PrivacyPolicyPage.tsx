import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';
import { BRAND_EMAIL, BRAND_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          Data Transparency
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#594235] max-w-xl mx-auto leading-relaxed">
          At GOLDEN SAP, we treat your personal information with absolute integrity and strict confidentiality.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-xl border border-[#e6dcce] shadow-xs space-y-8 text-sm text-[#594235] leading-relaxed">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#241711]">
            <Lock className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">1. Information We Collect</h2>
          </div>
          <p>
            When you place an order via our WhatsApp checkout or contact us, we collect only the necessary details required to fulfill and deliver your date palm jaggery:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Your Full Name</li>
            <li>Contact Phone / WhatsApp Number</li>
            <li>Delivery Address (Street, City, State, and PIN Code)</li>
            <li>Order specifics, items, and any special delivery instructions</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <ShieldCheck className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">2. How Your Data is Used</h2>
          </div>
          <p>
            Your information is exclusively utilized for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Processing your order and communicating order status over WhatsApp or phone.</li>
            <li>Generating shipping labels with our authorized courier logistics partners.</li>
            <li>Providing tracking links and customer support for delivery updates.</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <EyeOff className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">3. No Sale or Sharing of Personal Data</h2>
          </div>
          <p>
            We do not sell, rent, lease, or monetize your contact information, phone numbers, or addresses to any third-party marketing agencies, advertisers, or lead brokers. Your data is handled strictly within GOLDEN SAP for order fulfillment.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2 text-[#241711]">
            <FileText className="w-5 h-5 text-[#b8860b]" />
            <h2 className="font-serif-brand text-2xl font-bold">4. WhatsApp Privacy & Direct Communication</h2>
          </div>
          <p>
            Our checkout initiates direct end-to-end encrypted messaging via WhatsApp. Your conversations with our team remain private. If at any time you wish to have your contact details removed from our past order records, simply message us on WhatsApp ({BRAND_WHATSAPP_DISPLAY}) or email {BRAND_EMAIL}.
          </p>
        </div>
      </div>
    </div>
  );
};
