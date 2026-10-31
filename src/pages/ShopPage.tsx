import React, { useState } from 'react';
import { Product, PageId } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Truck, ShieldCheck, Sparkles, Filter } from 'lucide-react';

interface ShopPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onSelectProduct,
}) => {
  const [filter, setFilter] = useState<'all' | 'patali' | 'nolen' | 'combo'>('all');

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'patali') return p.id.includes('patali');
    if (filter === 'nolen') return p.id.includes('nolen');
    if (filter === 'combo') return p.id.includes('combo');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#b8860b]">
          The Nature Sweetness of Bengal
        </span>
        <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#241711]">
          Shop Authentic Patali & Nolen Gur
        </h1>
        <p className="text-sm text-[#594235] leading-relaxed">
          Extracted by master artisans in rural Bengal. 100% natural date palm jaggery, unrefined and chemical-free. Delivered fresh to all Indian pincodes.
        </p>
      </div>

      {/* Filter Tabs - Functional Segmented Buttons */}
      <div className="flex items-center justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-[#ede4d8] rounded-lg border border-[#dfd2c0]">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-[#241711] shadow-xs'
                : 'text-[#594235] hover:text-[#241711]'
            }`}
          >
            All Products ({products.length})
          </button>
          <button
            onClick={() => setFilter('patali')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              filter === 'patali'
                ? 'bg-white text-[#241711] shadow-xs'
                : 'text-[#594235] hover:text-[#241711]'
            }`}
          >
            Patali Gur (Solid)
          </button>
          <button
            onClick={() => setFilter('nolen')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              filter === 'nolen'
                ? 'bg-white text-[#241711] shadow-xs'
                : 'text-[#594235] hover:text-[#241711]'
            }`}
          >
            Nolen Gur (Liquid)
          </button>
          <button
            onClick={() => setFilter('combo')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              filter === 'combo'
                ? 'bg-white text-[#241711] shadow-xs'
                : 'text-[#594235] hover:text-[#241711]'
            }`}
          >
            Duo Combo (Free Delivery)
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>

      {/* Trust & Dispatch Reassurance Banner */}
      <div className="bg-[#f5ede0] rounded-xl p-6 sm:p-8 border border-[#e6dcce] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#594235]">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif-brand text-sm font-bold text-[#241711] mb-1">
              Food-Safe Transit Packaging
            </h4>
            <p>
              Packed in food-grade vacuum pouches with moisture-barrier cushioning, ensuring your Khejur Gur arrives intact without melting or breaking.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif-brand text-sm font-bold text-[#241711] mb-1">
              Zero Chemical Additives
            </h4>
            <p>
              100% natural date palm sap. We never add sodium hydrosulphite, artificial coloring, or sucrose syrups.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif-brand text-sm font-bold text-[#241711] mb-1">
              Direct WhatsApp Support
            </h4>
            <p>
              Have a special packing requirement or festive gift order? Our team assists directly on WhatsApp with personal care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
