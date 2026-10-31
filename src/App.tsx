/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, Product } from './types';
import {
  getStoredProducts,
  saveStoredProducts,
  resetStoredProducts,
  INITIAL_PRODUCTS,
} from './data/products';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CatalogManagerModal } from './components/CatalogManagerModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ShippingPolicyPage } from './pages/ShippingPolicyPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { BRAND_WHATSAPP_NUMBER, BRAND_WHATSAPP_DISPLAY } from './utils/whatsapp';
import { MessageSquare, ArrowUp, Check } from 'lucide-react';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [products, setProducts] = useState<Product[]>(() => getStoredProducts());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogManagerOpen, setIsCatalogManagerOpen] = useState(false);
  const { toastMessage } = useCart();

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    saveStoredProducts(updatedProducts);
  };

  const handleResetDefaults = () => {
    const defaults = resetStoredProducts();
    setProducts(defaults);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            products={products}
            onSelectProduct={setSelectedProduct}
            onNavigate={handleNavigate}
          />
        );
      case 'shop':
        return (
          <ShopPage
            products={products}
            onSelectProduct={setSelectedProduct}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'shipping':
        return <ShippingPolicyPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            products={products}
            onSelectProduct={setSelectedProduct}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#241711] selection:bg-[#e4be68] selection:text-[#1c120c]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#241711] text-[#faf7f2] px-4 py-2.5 rounded-lg shadow-xl border border-[#d4af37]/40 flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-4 h-4 rounded-full bg-[#d4af37] text-[#1c120c] flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Floating WhatsApp Action Button (Mobile & Desktop) */}
      <aside aria-label="Customer Support and WhatsApp Assistance" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(
            'Hello GOLDEN SAP! I would like to inquire about authentic Bengali Khejur Gur.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          title={`Chat with us on WhatsApp (${BRAND_WHATSAPP_DISPLAY})`}
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            Order on WhatsApp
          </span>
        </a>
      </aside>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCatalogManager={() => setIsCatalogManagerOpen(true)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer />

      {/* WhatsApp Checkout Modal */}
      <CheckoutModal />

      {/* Product Quick-View Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Store Owner Product & Price Configurator */}
      <CatalogManagerModal
        isOpen={isCatalogManagerOpen}
        onClose={() => setIsCatalogManagerOpen(false)}
        products={products}
        onSaveProducts={handleSaveProducts}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
