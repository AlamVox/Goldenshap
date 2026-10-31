import React, { useState } from 'react';
import { Product } from '../types';
import { X, Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { formatCurrencyINR } from '../utils/whatsapp';

interface CatalogManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSaveProducts: (updatedProducts: Product[]) => void;
  onResetDefaults: () => void;
}

export const CatalogManagerModal: React.FC<CatalogManagerModalProps> = ({
  isOpen,
  onClose,
  products,
  onSaveProducts,
  onResetDefaults,
}) => {
  const [editableProducts, setEditableProducts] = useState<Product[]>(products);
  const [savedNotice, setSavedNotice] = useState(false);

  // Sync if products prop changes
  React.useEffect(() => {
    setEditableProducts(products);
  }, [products]);

  if (!isOpen) return null;

  const handleFieldChange = (
    id: string,
    field: keyof Product,
    value: string | number | boolean
  ) => {
    setEditableProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          [field]: value,
        };
      })
    );
  };

  const handleSave = () => {
    onSaveProducts(editableProducts);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (confirm('Reset all product prices and descriptions to the default settings?')) {
      onResetDefaults();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c120c]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#faf7f2] w-full max-w-4xl rounded-xl shadow-2xl border border-[#e6dcce] overflow-hidden my-8">
        <div className="bg-[#241711] text-[#faf7f2] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">
              GOLDEN SAP • Store Administration
            </span>
            <h3 className="font-serif-brand text-2xl font-bold">
              Product & Pricing Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#c7b5a5] hover:text-[#faf7f2] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <p className="text-xs text-[#594235] bg-[#f5ede0] p-3 rounded-md border border-[#e6dcce]">
            Update product selling prices, original reference prices, descriptions, and availability. Changes are saved locally and immediately reflected across the website and in WhatsApp checkout.
          </p>

          <div className="space-y-6">
            {editableProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white p-5 rounded-lg border border-[#e6dcce] shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#f0e8db]">
                  <div>
                    <h4 className="font-serif-brand text-lg font-bold text-[#241711]">
                      {p.name}
                    </h4>
                    <span className="text-xs text-[#785b46]">
                      ID: {p.id} • Weight: {p.weight}
                    </span>
                  </div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-[#594235] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={p.inStock}
                      onChange={(e) =>
                        handleFieldChange(p.id, 'inStock', e.target.checked)
                      }
                      className="rounded border-[#d8cbba] text-[#b8860b] focus:ring-[#b8860b]"
                    />
                    <span>{p.inStock ? 'Available In Stock' : 'Out of Stock'}</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#594235] mb-1">
                      Selling Price (₹ INR) *
                    </label>
                    <input
                      type="number"
                      value={p.price}
                      onChange={(e) =>
                        handleFieldChange(p.id, 'price', Number(e.target.value))
                      }
                      className="w-full px-3 py-2 bg-[#faf7f2] border border-[#d8cbba] rounded-md font-bold text-[#241711]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#594235] mb-1">
                      Original Price (₹ INR)
                    </label>
                    <input
                      type="number"
                      value={p.originalPrice || ''}
                      onChange={(e) =>
                        handleFieldChange(
                          p.id,
                          'originalPrice',
                          e.target.value ? Number(e.target.value) : undefined as any
                        )
                      }
                      className="w-full px-3 py-2 bg-[#faf7f2] border border-[#d8cbba] rounded-md text-[#241711]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#594235] mb-1">
                      Discount %
                    </label>
                    <input
                      type="number"
                      value={p.discountPercent || ''}
                      onChange={(e) =>
                        handleFieldChange(
                          p.id,
                          'discountPercent',
                          e.target.value ? Number(e.target.value) : undefined as any
                        )
                      }
                      className="w-full px-3 py-2 bg-[#faf7f2] border border-[#d8cbba] rounded-md text-[#241711]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#594235] mb-1">
                    Short Description
                  </label>
                  <textarea
                    rows={2}
                    value={p.description}
                    onChange={(e) =>
                      handleFieldChange(p.id, 'description', e.target.value)
                    }
                    className="w-full px-3 py-2 text-xs bg-[#faf7f2] border border-[#d8cbba] rounded-md text-[#241711]"
                  />
                </div>

                {/* Size Variants Pricing Editor */}
                {p.variants && p.variants.length > 0 && (
                  <div className="pt-2 border-t border-[#f0e8db]">
                    <span className="block text-xs font-bold text-[#594235] mb-2">
                      Pack Sizes & Prices (₹ INR)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {p.variants.map((v, vIdx) => (
                        <div
                          key={v.id}
                          className="p-2.5 bg-[#faf7f2] rounded border border-[#d8cbba] text-xs space-y-1.5"
                        >
                          <span className="font-bold text-[#241711] block">
                            {v.weight}
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-[10px] text-[#785b46] block">
                                Selling (₹)
                              </span>
                              <input
                                type="number"
                                value={v.price}
                                onChange={(e) => {
                                  const newPrice = Number(e.target.value);
                                  const updatedVariants = [...p.variants!];
                                  updatedVariants[vIdx] = { ...v, price: newPrice };
                                  handleFieldChange(p.id, 'variants', updatedVariants as any);
                                }}
                                className="w-full px-2 py-1 bg-white border border-[#d8cbba] rounded text-xs font-bold text-[#241711]"
                              />
                            </div>
                            <div>
                              <span className="text-[10px] text-[#785b46] block">
                                Original (₹)
                              </span>
                              <input
                                type="number"
                                value={v.originalPrice}
                                onChange={(e) => {
                                  const newOrig = Number(e.target.value);
                                  const updatedVariants = [...p.variants!];
                                  updatedVariants[vIdx] = { ...v, originalPrice: newOrig };
                                  handleFieldChange(p.id, 'variants', updatedVariants as any);
                                }}
                                className="w-full px-2 py-1 bg-white border border-[#d8cbba] rounded text-xs text-[#241711]"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f5ede0] px-6 py-4 border-t border-[#e6dcce] flex items-center justify-between">
          <button
            onClick={handleReset}
            className="text-xs text-[#785b46] hover:text-red-700 flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Initial Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#594235] hover:text-[#241711] cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-[#241711] hover:bg-[#3d2417] text-[#faf7f2] text-xs font-semibold rounded-md flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {savedNotice ? (
                <>
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-[#d4af37]" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
