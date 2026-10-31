import React, { useState, useEffect } from 'react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { formatCurrencyINR } from '../utils/whatsapp';
import { X, Plus, Minus, ShoppingBag, Truck, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsCheckoutOpen } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);

  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(undefined);
    }
    setQty(1);
  }, [product]);

  if (!product) return null;

  const activePrice = selectedVariant ? selectedVariant.price : product.price;
  const activeOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;
  const activeDiscount = selectedVariant ? selectedVariant.discountPercent : product.discountPercent;
  const activeWeight = selectedVariant ? selectedVariant.weight : product.weight;

  const handleAdd = () => {
    addToCart(product, qty, selectedVariant);
  };

  const handleBuyNow = () => {
    addToCart(product, qty, selectedVariant);
    onClose();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c120c]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#faf7f2] w-full max-w-3xl rounded-xl shadow-2xl border border-[#e6dcce] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top bar with close */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#e6dcce] bg-white">
          <div className="flex items-center gap-2 text-xs text-[#785b46]">
            <span>The Nature Sweetness of Bengal</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#241711]">{activeWeight}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#785b46] hover:text-[#241711] rounded-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-4/3 md:aspect-auto bg-[#f5ede0] flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-[#241711] bg-[#faf7f2]/95 backdrop-blur-xs px-2.5 py-1 rounded-sm shadow-xs border border-[#e6dcce]">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#faf7f2]">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#241711] leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-[#b8860b] font-medium mt-1">
                  {product.tagline}
                </p>
              </div>

              {/* Size Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#785b46] block mb-2">
                    Select Pack / Jar Size:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariant?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`px-3 py-1.5 text-xs rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                            isSelected
                              ? 'bg-[#241711] text-[#faf7f2] border-[#241711] shadow-2xs'
                              : 'bg-white text-[#594235] border-[#d8cbba] hover:border-[#b8860b]'
                          }`}
                        >
                          <span>{v.weight}</span>
                          <span className="opacity-80 font-normal">({formatCurrencyINR(v.price)})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-bold text-[#241711] tabular-nums">
                  {formatCurrencyINR(activePrice)}
                </span>
                {activeOriginalPrice && (
                  <span className="text-sm text-[#9c8472] line-through tabular-nums">
                    {formatCurrencyINR(activeOriginalPrice)}
                  </span>
                )}
                {activeDiscount && (
                  <span className="text-xs font-semibold text-[#b8860b] tabular-nums">
                    Save {activeDiscount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#594235] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Tasting notes */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#785b46] block mb-2">
                  Tasting & Texture Profile
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-[#241711]">
                  {product.tasteProfile.map((note, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-[#e0d3c1] px-2.5 py-1 rounded-md text-[11px] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients & Storage */}
              <div className="space-y-2 text-xs text-[#594235] pt-2 border-t border-[#e6dcce]">
                <div>
                  <strong className="text-[#241711]">Ingredients: </strong>
                  {product.ingredients}
                </div>
                <div>
                  <strong className="text-[#241711]">Storage: </strong>
                  {product.storage}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#e6dcce]">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#d8cbba] rounded-lg bg-white">
                  <button
                    onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                    className="p-2 text-[#594235] hover:text-[#241711] transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-sm font-bold tabular-nums text-[#241711]">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="p-2 text-[#594235] hover:text-[#241711] transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 py-2.5 px-4 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                  <span>Add {activeWeight}</span>
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span>Instant WhatsApp Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-[#785b46] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" /> 100% Natural Sap
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#b8860b]" /> Pan-India Packaging
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
