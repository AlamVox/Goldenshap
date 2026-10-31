import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { formatCurrencyINR } from '../utils/whatsapp';
import { Plus, Minus, ShoppingBag, Truck, Info, ArrowUpRight, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const { addToCart, setIsCheckoutOpen } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );

  const activePrice = selectedVariant ? selectedVariant.price : product.price;
  const activeOriginalPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;
  const activeDiscount = selectedVariant ? selectedVariant.discountPercent : product.discountPercent;
  const activeWeight = selectedVariant ? selectedVariant.weight : product.weight;

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQty((q) => q + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQty((q) => (q > 1 ? q - 1 : 1));
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, qty, selectedVariant);
  };

  const handleInstantBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, qty, selectedVariant);
    setIsCheckoutOpen(true);
  };

  const handleVariantClick = (e: React.MouseEvent, variant: ProductVariant) => {
    e.stopPropagation();
    setSelectedVariant(variant);
  };

  return (
    <article
      onClick={() => onSelectProduct(product)}
      className="group bg-white rounded-xl border border-[#e6dcce] overflow-hidden flex flex-col hover:border-[#b8860b]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Container (4:3 ratio) */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#f5ede0]">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quiet unboxed text badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#241711] bg-[#faf7f2]/90 backdrop-blur-xs px-2 py-0.5 rounded-sm shadow-xs border border-[#e6dcce]">
              {product.badge}
            </span>
          )}
          {product.freeShippingNotice && (
            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-emerald-200 flex items-center gap-1">
              <Truck className="w-3 h-3 text-emerald-700" />
              <span>{product.freeShippingNotice}</span>
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
          className="absolute top-3 right-3 p-1.5 bg-[#faf7f2]/80 hover:bg-[#faf7f2] text-[#241711] rounded-md backdrop-blur-xs transition-colors"
          title="View product details"
          aria-label="View details"
        >
          <Info className="w-4 h-4 text-[#785b46]" />
        </button>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata: Category & Weight */}
          <div className="flex items-center gap-2 text-xs text-[#785b46] mb-1.5 font-medium">
            <span>The Nature Sweetness of Bengal</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#241711]">{activeWeight}</span>
          </div>

          <h3 className="font-serif-brand text-xl font-bold text-[#241711] group-hover:text-[#b8860b] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#594235] mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Size / Weight Variant Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-[#f2eae0]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#785b46] block mb-1.5">
                Select Pack Size:
              </span>
              <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                {product.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={(e) => handleVariantClick(e, v)}
                      className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1 border ${
                        isSelected
                          ? 'bg-[#241711] text-[#faf7f2] border-[#241711] shadow-2xs'
                          : 'bg-[#faf7f2] text-[#594235] border-[#d8cbba] hover:border-[#b8860b]'
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

          {/* Pricing Row */}
          <div className="mt-4 flex items-baseline gap-2.5">
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
        </div>

        {/* Action Zone: Quantity & Add to Bag / Buy */}
        <div className="pt-2 space-y-2 border-t border-[#f0e8db]">
          <div className="flex items-center gap-2">
            {/* Quantity Selector */}
            <div
              className="flex items-center border border-[#d8cbba] rounded-lg bg-[#faf7f2]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleDecrement}
                className="px-2.5 py-2 text-[#594235] hover:text-[#241711] transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 text-xs font-bold tabular-nums text-[#241711]">
                {qty}
              </span>
              <button
                onClick={handleIncrement}
                className="px-2.5 py-2 text-[#594235] hover:text-[#241711] transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAdd}
              className="flex-1 py-2 px-3 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Add {activeWeight}</span>
            </button>
          </div>

          {/* Instant Buy via WhatsApp */}
          <button
            onClick={handleInstantBuy}
            className="w-full py-2 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] hover:text-[#0b6b5e] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Express WhatsApp Order</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
