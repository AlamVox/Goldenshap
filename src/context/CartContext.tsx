import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, ProductVariant } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activeProductForDetail: Product | null;
  setActiveProductForDetail: (product: Product | null) => void;
  itemCount: number;
  subtotal: number;
  shippingFee: number;
  hasFreeDelivery: boolean;
  total: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'goldensap_cart_items_v2';
const FREE_SHIPPING_THRESHOLD = 999;
const FLAT_SHIPPING_FEE = 79;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProductForDetail, setActiveProductForDetail] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    variant?: ProductVariant
  ) => {
    if (quantity <= 0) return;
    const effectiveProduct: Product = variant
      ? {
          ...product,
          id: `${product.id}-${variant.id}`,
          weight: variant.weight,
          weightInGrams: variant.weightInGrams,
          price: variant.price,
          originalPrice: variant.originalPrice,
          discountPercent: variant.discountPercent,
        }
      : product;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === effectiveProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === effectiveProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product: effectiveProduct, selectedVariant: variant, quantity }];
    });
    showToast(`Added ${quantity} × ${effectiveProduct.name} (${effectiveProduct.weight}) to bag`);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // All products have 100% Free Pan-India Delivery
  const hasFreeDelivery = true;
  const shippingFee = 0;
  const total = subtotal;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeProductForDetail,
        setActiveProductForDetail,
        itemCount,
        subtotal,
        shippingFee,
        hasFreeDelivery,
        total,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
