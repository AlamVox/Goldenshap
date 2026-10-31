import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'golden-sap-patali-gur',
    name: 'GOLDEN SAP Patali Gur',
    tagline: 'The Nature Sweetness of Bengal • 100% Natural Solid Khejur Gur',
    weight: '1 kg Pack',
    weightInGrams: 1000,
    price: 649,
    originalPrice: 782,
    discountPercent: 17,
    image: '/assets/aistudio/ChatGPT_Image_Oct_31__2026__07_02_18_PM_8e4838b4.jpg',
    description:
      'Pure homemade traditional Bengali Patali Gur (পাটালি গুড়). 100% natural date palm jaggery molded into solid circular cakes with a rich fudge-like bite and deep caramel aroma.',
    fullDescription:
      'Harvested in the chill of early winter mornings in rural Bengal. Extracted from first-draw date palm sap by master Shiuli climbers and slow-boiled in wide iron cauldrons over wood fire. Handcrafted into traditional solid round Patali cakes (পাটালি গুড়) without chemical clarifiers, synthetic coloring, or white sugar fillers. Melts effortlessly on your tongue with rich smoky caramel undertones.',
    tasteProfile: ['Deep Amber Caramel', 'Subtle Smoky Wood Notes', 'Fudge-like Natural Crystal'],
    ingredients: '100% Pure Date Palm Sap (Phoenix sylvestris). No added sugar, chemicals, or preservatives.',
    storage: 'Store in an airtight container in a cool, dry place. In warmer months, refrigeration is recommended to preserve delicate floral notes.',
    inStock: true,
    featured: true,
    badge: '17% Off • Winter Harvest',
    freeShippingNotice: 'Free Delivery Across India',
    variants: [
      {
        id: 'patali-500g',
        weight: '500g Pack',
        weightInGrams: 500,
        price: 399,
        originalPrice: 480,
        discountPercent: 17,
      },
      {
        id: 'patali-1kg',
        weight: '1 kg Pack',
        weightInGrams: 1000,
        price: 649,
        originalPrice: 782,
        discountPercent: 17,
        badge: 'Most Popular',
      },
      {
        id: 'patali-2kg',
        weight: '2 kg Pack',
        weightInGrams: 2000,
        price: 1299,
        originalPrice: 1565,
        discountPercent: 17,
        badge: 'Best Value',
      },
    ],
  },
  {
    id: 'golden-sap-nolen-gur',
    name: 'GOLDEN SAP Nolen Gur',
    tagline: 'The Nature Sweetness of Bengal • Pure Liquid Date Palm Jaggery',
    weight: '500g Jar',
    weightInGrams: 500,
    price: 599,
    originalPrice: 721,
    discountPercent: 17,
    image: '/assets/aistudio/ChatGPT_Image_Oct_31__2026__07_02_24_PM_c052c310.jpg',
    description:
      'Authentic Bengali liquid Nolen Gur (নলেন গুড় / Jhola Gur) in a sealed glass jar. Luminous, slow-dripping golden nectar with an enchanting winter aroma, ideal for Payesh, Pithe, and daily desserts.',
    fullDescription:
      'The crown jewel of Bengal winter: genuine liquid Nolen Gur (নলেন গুড় / Jhola Gur). Simmered to perfection when the reduced date palm sap reaches peak aroma and pourable viscous consistency. Rich in iron, potassium, and active plant bio-minerals, this pure liquid nectar transforms winter Payesh, Patishapta, Joynagar Moa, and desserts into culinary masterpieces.',
    tasteProfile: ['Warm Molasses & Wild Floral Nectar', 'Silky Velvet Pour', 'Authentic Smoky Aroma'],
    ingredients: '100% Pure Date Palm Sap. Unadulterated, unrefined, and single-origin.',
    storage: 'Keep sealed tightly in the glass jar. Refrigerate after opening to preserve peak freshness and aroma.',
    inStock: true,
    featured: true,
    badge: '17% Off • Liquid Gold',
    freeShippingNotice: 'Free Delivery Across India',
    variants: [
      {
        id: 'nolen-250g',
        weight: '250g Jar',
        weightInGrams: 250,
        price: 299,
        originalPrice: 360,
        discountPercent: 17,
      },
      {
        id: 'nolen-500g',
        weight: '500g Jar',
        weightInGrams: 500,
        price: 599,
        originalPrice: 721,
        discountPercent: 17,
        badge: 'Popular',
      },
      {
        id: 'nolen-1kg',
        weight: '1 kg Jar',
        weightInGrams: 1000,
        price: 1099,
        originalPrice: 1324,
        discountPercent: 17,
        badge: 'Best Value',
      },
    ],
  },
  {
    id: 'khejur-gur-combo-750g-750g',
    name: 'GOLDEN SAP Combo Pack – Patali Gur + Nolen Gur',
    tagline: 'The Nature Sweetness of Bengal • Patali Gur + Nolen Gur Duo',
    weight: '750g + 750g (1.5kg)',
    weightInGrams: 1500,
    price: 1499,
    originalPrice: 1806.02,
    discountPercent: 17,
    image: '/assets/aistudio/Golden_Sap_Combo_Pack__Patali_and_Nonel_Gur_27aabe1f.png',
    description:
      'Value duo pack containing authentic solid Patali Gur alongside golden liquid Nolen Gur. Packed in eco-friendly protective packaging with complimentary delivery across India.',
    fullDescription:
      'Experience the complete culinary wonder of Bengal winter. Contains one container of signature solid Patali Gur and one pack of golden liquid Nolen Gur (1500g net total). Savor the rich fudge-like bite of Patali and the flowing honey-like richness of Nolen Gur with your family. Delivered safely across all Indian pin codes at zero shipping cost.',
    tasteProfile: ['Signature Golden Caramel', 'Rich Velvet Texture', 'Pure Earthy Sweetness'],
    ingredients: '100% Pure Date Palm Sap. Completely chemical-free.',
    storage: 'Store in a cool dry space; refrigerate upon opening for lasting freshness.',
    inStock: true,
    featured: true,
    badge: 'Best Value • 17% Off',
    freeShippingNotice: 'Free Delivery Across India',
  },
];

const STORAGE_KEY = 'goldensap_products_data_v6';

export function getStoredProducts(): Product[] {
  if (typeof window === 'undefined') return INITIAL_PRODUCTS;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return INITIAL_PRODUCTS;
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to read products from localStorage:', err);
  }
  return INITIAL_PRODUCTS;
}

export function saveStoredProducts(products: Product[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (err) {
    console.error('Failed to save products to localStorage:', err);
  }
}

export function resetStoredProducts(): Product[] {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return INITIAL_PRODUCTS;
}
