import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrencyINR } from '../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    hasFreeDelivery,
    total,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 999;
  const amountNeededForFree = Math.max(0, freeDeliveryThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1c120c]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf7f2] shadow-2xl flex flex-col border-l border-[#e6dcce]">
          {/* Header */}
          <div className="p-6 border-b border-[#e6dcce] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#b8860b]" />
              <h2 className="font-serif-brand text-2xl font-bold text-[#241711]">
                Your Shopping Bag
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#785b46] hover:text-[#241711] transition-colors rounded-md"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Banner */}
          <div className="bg-[#eefbf3] px-6 py-3 border-b border-[#c3f0d4] text-xs">
            <div className="flex items-center gap-2 text-[#128C7E] font-medium">
              <Truck className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Complimentary <strong>FREE Pan-India Delivery</strong> on all orders!</span>
            </div>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#785b46]">
                <div className="w-16 h-16 rounded-full bg-[#f2e9dc] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#b8860b]" />
                </div>
                <h3 className="font-serif-brand text-xl font-bold text-[#241711] mb-1">
                  Your bag is empty
                </h3>
                <p className="text-sm max-w-xs mb-6 text-[#785b46]">
                  Experience the authentic artisanal Khejur Gur of Bengal. Add our handcrafted jaggery blocks to get started.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#241711] text-[#faf7f2] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#3d2417] transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-white rounded-lg border border-[#e6dcce] relative group transition-shadow hover:shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-md bg-[#f5ede0] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif-brand text-base font-bold text-[#241711] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[#785b46] mt-0.5">
                      Net Wt: {item.product.weight}
                    </p>
                    <div className="text-sm font-semibold text-[#241711] mt-1 tabular-nums">
                      {formatCurrencyINR(item.product.price)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#d8cbba] rounded-md bg-[#faf7f2]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-[#594235] hover:text-[#241711] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold tabular-nums text-[#241711]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-[#594235] hover:text-[#241711] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#9c8472] hover:text-red-700 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#e6dcce] space-y-4 shadow-lg">
              <div className="space-y-2 text-sm text-[#594235]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#241711] tabular-nums">
                    {formatCurrencyINR(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pan-India Shipping</span>
                  <span className="font-semibold tabular-nums">
                    {hasFreeDelivery ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      formatCurrencyINR(shippingFee)
                    )}
                  </span>
                </div>
                <div className="border-t border-[#e6dcce] pt-2 flex justify-between text-base font-bold text-[#241711]">
                  <span>Total Amount</span>
                  <span className="text-lg text-[#b8860b] tabular-nums">
                    {formatCurrencyINR(total)}
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#785b46]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Zero Advance Payment Gateway Fees • Direct UPI Confirmation</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
