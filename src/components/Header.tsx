import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { useCart } from '../context/CartContext';
import { BRAND_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Our Story', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e6dcce] transition-colors">
      {/* Top Announcement Bar */}
      <div className="bg-[#241711] text-[#faf7f2] px-4 py-2 text-xs tracking-wider uppercase text-center font-medium flex items-center justify-center gap-2">
        <span className="text-[#d4af37]">Winter Harvest 2026</span>
        <span aria-hidden="true" className="opacity-40">·</span>
        <span className="text-emerald-400 font-bold">Free Pan-India Delivery on All Orders</span>
        <span aria-hidden="true" className="opacity-40">·</span>
        <span className="hidden sm:inline text-[#e4be68]">100% Homemade Traditional Khejur Gur</span>
      </div>

      {/* Main Navigation - Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group flex flex-col justify-center cursor-pointer whitespace-nowrap shrink-0"
        >
          <span className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-tight text-[#241711] group-hover:text-[#b8860b] transition-colors uppercase leading-tight">
            GOLDEN SAP<sup className="text-[9px] sm:text-[10px] font-sans font-medium text-[#785b46] group-hover:text-[#b8860b] ml-0.5 align-super tracking-normal">TM</sup>
          </span>
          <span className="text-[10px] tracking-[0.16em] text-[#785b46] font-sans-brand font-medium mt-0.5">
            The Nature Sweetness of Bengal
          </span>
        </button>

        {/* Zone 2: Clean single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#594235]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-1 relative ${
                  isActive
                    ? 'text-[#241711] font-semibold border-b-2 border-[#b8860b]'
                    : 'hover:text-[#241711]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Cart Drawer Trigger + Mobile Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hello GOLDEN SAP, I would like to inquire about authentic Bengali Khejur Gur.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#241711] hover:text-[#b8860b] border border-[#d8cbba] hover:border-[#b8860b] rounded-md transition-all whitespace-nowrap shrink-0"
          >
            <span>WhatsApp Quick Help</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#b8860b]" />
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Shopping Cart"
            className="relative px-3.5 py-2 text-xs font-semibold text-[#faf7f2] bg-[#241711] hover:bg-[#3d2417] rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden sm:inline">Bag</span>
            <span className="px-1.5 py-0.2 bg-[#d4af37] text-[#241711] text-[11px] font-bold rounded-sm tabular-nums">
              {itemCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#241711] hover:text-[#b8860b] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2] border-b border-[#e6dcce] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`text-left text-base py-2 transition-colors ${
                  currentPage === link.page
                    ? 'font-semibold text-[#b8860b]'
                    : 'text-[#241711] hover:text-[#b8860b]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#e6dcce] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#241711] text-[#faf7f2] rounded-md text-sm font-semibold"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                  <span>View Shopping Bag</span>
                </span>
                <span className="bg-[#d4af37] text-[#241711] text-xs font-bold px-2 py-0.5 rounded-sm tabular-nums">
                  {itemCount} items
                </span>
              </button>

              <div className="text-xs text-[#785b46] pt-1">
                Direct WhatsApp Order: <span className="font-semibold text-[#241711]">+91 8945046367</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
