import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Copy, Check, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';
import {
  BRAND_WHATSAPP_DISPLAY,
  BRAND_WHATSAPP_NUMBER,
  buildWhatsAppOrderMessage,
  formatCurrencyINR,
  generateOrderReference,
  openWhatsAppWithOrder,
  OrderPayload,
} from '../utils/whatsapp';
import { OrderCustomerDetails } from '../types';

const INDIAN_STATES = [
  'West Bengal',
  'Maharashtra',
  'Delhi',
  'Karnataka',
  'Tamil Nadu',
  'Uttar Pradesh',
  'Gujarat',
  'Telangana',
  'Kerala',
  'Rajasthan',
  'Andhra Pradesh',
  'Madhya Pradesh',
  'Punjab',
  'Haryana',
  'Bihar',
  'Odisha',
  'Assam',
  'Jharkhand',
  'Chhattisgarh',
  'Uttarakhand',
  'Goa',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Tripura',
  'Other State / UT',
];

export const CheckoutModal: React.FC = () => {
  const {
    cartItems,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    subtotal,
    shippingFee,
    hasFreeDelivery,
    total,
  } = useCart();

  const [form, setForm] = useState<OrderCustomerDetails>({
    fullName: '',
    phoneNumber: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: 'West Bengal',
    pincode: '',
    notes: '',
  });

  const [submittedPayload, setSubmittedPayload] = useState<OrderPayload | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!form.fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!form.phoneNumber.trim() || form.phoneNumber.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit WhatsApp or mobile number.');
      return;
    }
    if (!form.addressLine.trim()) {
      setValidationError('Please enter your delivery street address / house details.');
      return;
    }
    if (!form.city.trim()) {
      setValidationError('Please enter your city.');
      return;
    }
    if (!form.pincode.trim() || form.pincode.trim().length < 6) {
      setValidationError('Please enter a valid 6-digit postal PIN code.');
      return;
    }

    setValidationError(null);

    const payload: OrderPayload = {
      orderRef: generateOrderReference(),
      items: cartItems,
      customer: form,
      subtotal,
      shipping: shippingFee,
      total,
      hasFreeDelivery,
    };

    setSubmittedPayload(payload);
    openWhatsAppWithOrder(payload);
  };

  const handleCopyMessage = () => {
    if (!submittedPayload) return;
    const msg = buildWhatsAppOrderMessage(submittedPayload);
    navigator.clipboard.writeText(msg);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleClose = () => {
    if (submittedPayload) {
      clearCart();
    }
    setIsCheckoutOpen(false);
    setSubmittedPayload(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c120c]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#faf7f2] w-full max-w-2xl rounded-xl shadow-2xl border border-[#e6dcce] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-[#241711] text-[#faf7f2] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">
              GOLDEN SAP • WhatsApp Checkout
            </span>
            <h3 className="font-serif-brand text-2xl font-bold mt-0.5">
              {submittedPayload ? 'Order Prepared for WhatsApp' : 'Delivery & Checkout Details'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-[#c7b5a5] hover:text-[#faf7f2] p-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedPayload ? (
          /* Success Screen */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[#e9f8ee] text-[#25D366] rounded-full mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-brand text-2xl font-bold text-[#241711]">
                Order #{submittedPayload.orderRef} Ready
              </h4>
              <p className="text-sm text-[#594235] max-w-md mx-auto leading-relaxed">
                WhatsApp has been launched with your order summary! If WhatsApp did not open automatically, click the green button below or copy the message.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#e6dcce] space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-[#e6dcce]">
                <span className="font-semibold text-[#241711]">Order Reference:</span>
                <span className="font-mono text-sm font-bold text-[#b8860b]">
                  #{submittedPayload.orderRef}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#785b46]">Deliver to:</span>
                <span className="font-medium text-[#241711] text-right">
                  {submittedPayload.customer.fullName} ({submittedPayload.customer.city})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#785b46]">Total Amount:</span>
                <span className="font-bold text-[#241711] tabular-nums">
                  {formatCurrencyINR(submittedPayload.total)}
                </span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  buildWhatsAppOrderMessage(submittedPayload)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat ({BRAND_WHATSAPP_DISPLAY})</span>
              </a>

              <button
                onClick={handleCopyMessage}
                className="py-3 px-4 bg-white border border-[#d8cbba] hover:bg-[#f5ede0] text-[#241711] font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedMessage ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#785b46]" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 bg-[#fbf6ee] rounded-lg border border-[#e8d7be] text-xs text-[#594235] space-y-1.5">
              <div className="font-semibold text-[#241711] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
                <span>What happens next?</span>
              </div>
              <p>
                1. Send the generated order text to our official WhatsApp number.
              </p>
              <p>
                2. Our team directly sends you the UPI QR / ID (Google Pay, PhonePe, Paytm, or Net Banking) for zero-commission instant transfer.
              </p>
              <p>
                3. Your fresh winter harvest Patali Gur will be vacuum-packed and dispatched with tracking within 24 hours.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 text-center text-xs text-[#785b46] hover:text-[#241711] underline cursor-pointer"
            >
              Done & Return to Store
            </button>
          </div>
        ) : (
          /* Delivery Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {validationError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                {validationError}
              </div>
            )}

            {/* Order Brief Summary */}
            <div className="bg-white p-4 rounded-lg border border-[#e6dcce] flex items-center justify-between text-sm">
              <div>
                <span className="text-xs text-[#785b46] block">Order Summary:</span>
                <span className="font-semibold text-[#241711]">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items (
                  {cartItems.map((i) => `${i.product.weight} × ${i.quantity}`).join(', ')})
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#785b46] block">Total Payable:</span>
                <span className="font-bold text-base text-[#b8860b] tabular-nums">
                  {formatCurrencyINR(total)}
                </span>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Subhashish Roy"
                  value={form.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  WhatsApp / Contact Phone *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#594235] mb-1">
                Street Address / House No. / Apartment *
              </label>
              <input
                type="text"
                name="addressLine"
                required
                placeholder="House / Flat No., Street, Area"
                value={form.addressLine}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  name="landmark"
                  placeholder="Near temple, school, etc."
                  value={form.landmark}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  City / Town *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. Kolkata / Mumbai"
                  value={form.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  maxLength={6}
                  placeholder="6 digits (e.g. 700001)"
                  value={form.pincode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  State / Union Territory *
                </label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                >
                  {INDIAN_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594235] mb-1">
                  Special Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="e.g. Call before delivery, morning drop"
                  value={form.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                />
              </div>
            </div>

            {/* Note on WhatsApp Checkout */}
            <div className="p-3 bg-[#f5ede0] rounded-md text-xs text-[#594235] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>
                Clicking the button below formats your order and redirects you to WhatsApp (
                <strong>{BRAND_WHATSAPP_DISPLAY}</strong>) to finalize with our team.
              </span>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Continue to WhatsApp Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
