export interface ProductVariant {
  id: string;
  weight: string;
  weightInGrams: number;
  price: number;
  originalPrice: number;
  discountPercent: number;
  badge?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  weight: string;
  weightInGrams: number;
  price: number; // in INR
  originalPrice?: number;
  discountPercent?: number;
  image: string;
  description: string;
  fullDescription: string;
  tasteProfile: string[];
  ingredients: string;
  storage: string;
  inStock: boolean;
  featured: boolean;
  badge?: string;
  freeShippingNotice?: string;
  variants?: ProductVariant[];
}

export interface CartItem {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface OrderCustomerDetails {
  fullName: string;
  phoneNumber: string;
  addressLine: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export type PageId =
  | 'home'
  | 'shop'
  | 'about'
  | 'contact'
  | 'faq'
  | 'shipping'
  | 'privacy'
  | 'terms';
