import React, { useState } from 'react';
import { PageId } from '../types';
import {
  BRAND_EMAIL,
  BRAND_WHATSAPP_DISPLAY,
  BRAND_WHATSAPP_NUMBER,
  openGeneralWhatsAppInquiry,
} from '../utils/whatsapp';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Order & Delivery Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const formatted = `Hello GOLDEN SAP Team,\n\nName: ${name}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(formatted)}`;

    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          We Are Here To Assist
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Contact GOLDEN SAP
        </h1>
        <p className="text-sm text-[#594235] leading-relaxed">
          Have an inquiry regarding bulk orders, corporate gifting, seasonal deliveries, or our artisanal process? Reach out directly via WhatsApp or email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e6dcce] shadow-xs space-y-6">
            <h3 className="font-serif-brand text-2xl font-bold text-[#241711]">
              Direct Channels
            </h3>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#eefbf3] border border-[#c3f0d4]">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-[#128C7E] uppercase tracking-wider block">
                  WhatsApp (Fastest Response)
                </span>
                <a
                  href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base text-[#241711] hover:text-[#25D366] transition-colors block mt-0.5"
                >
                  {BRAND_WHATSAPP_DISPLAY}
                </a>
                <p className="text-xs text-[#594235] mt-1">
                  Orders, tracking inquiries, and tasting feedback.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#faf7f2] border border-[#e6dcce]">
              <div className="w-10 h-10 rounded-full bg-[#241711] text-[#d4af37] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-[#785b46] uppercase tracking-wider block">
                  Official Email
                </span>
                <a
                  href={`mailto:${BRAND_EMAIL}`}
                  className="font-semibold text-sm text-[#241711] hover:text-[#b8860b] transition-colors block mt-0.5 break-all"
                >
                  {BRAND_EMAIL}
                </a>
                <p className="text-xs text-[#594235] mt-1">
                  Corporate collaborations and customer support.
                </p>
              </div>
            </div>

            {/* Origin & Pan India */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#faf7f2] border border-[#e6dcce]">
              <div className="w-10 h-10 rounded-full bg-[#241711] text-[#d4af37] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-[#785b46] uppercase tracking-wider block">
                  Artisanal Origin & Dispatch
                </span>
                <p className="font-semibold text-sm text-[#241711] mt-0.5">
                  Bethuadahari, Nadia, West Bengal - 741126
                </p>
                <p className="text-xs text-[#594235] mt-1">
                  Artisanal Date Palm harvest groves & Pan-India courier dispatch.
                </p>
              </div>
            </div>

            {/* Social Media Presence from Packaging */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#faf7f2] border border-[#e6dcce]">
              <div className="w-10 h-10 rounded-full bg-[#241711] text-[#d4af37] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex-1 text-xs">
                <span className="font-bold text-[#785b46] uppercase tracking-wider block mb-1">
                  Official Web & Social Presence
                </span>
                <div className="space-y-1 text-[#241711]">
                  <div>Website: <strong className="text-[#b8860b]">www.goldensap.in</strong></div>
                  <div>Instagram: <a href="https://www.instagram.com/goldensap.in" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] hover:underline">@goldensap.in</a></div>
                  <div>Facebook: <span className="font-semibold">Golden Sap</span></div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#785b46] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#b8860b]" />
              <span>Response Window: Everyday 9:00 AM – 8:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e6dcce] shadow-xs">
            <h3 className="font-serif-brand text-2xl font-bold text-[#241711] mb-2">
              Send a Direct Inquiry
            </h3>
            <p className="text-xs text-[#594235] mb-6">
              Fill in your message below and we will instantly connect you with our team via WhatsApp with your inquiry pre-loaded.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#faf7f2] rounded-lg border border-[#e6dcce]">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif-brand text-xl font-bold text-[#241711]">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs text-[#594235] max-w-sm mx-auto leading-relaxed">
                  Thank you! WhatsApp has opened with your message. If it didn’t open, click below to message us directly.
                </p>
                <a
                  href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp ({BRAND_WHATSAPP_DISPLAY})</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#594235] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anirban Mukherjee"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#faf7f2] border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#594235] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#faf7f2] border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#594235] mb-1">
                    Subject / Topic *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#faf7f2] border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                  >
                    <option value="Order & Delivery Inquiry">Order & Delivery Inquiry</option>
                    <option value="Bulk / Festive Gift Order">Bulk / Festive Gift Order</option>
                    <option value="Tasting Feedback & Recipe Sharing">Tasting Feedback & Recipe Sharing</option>
                    <option value="General Question about Khejur Gur">General Question about Khejur Gur</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#594235] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your inquiry or question here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#faf7f2] border border-[#d8cbba] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#b8860b] text-[#241711]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
