import { CartItem, OrderCustomerDetails } from '../types';

export const BRAND_WHATSAPP_NUMBER = '918945046367'; // +91 8945046367
export const BRAND_WHATSAPP_DISPLAY = '+91 8945046367';
export const BRAND_EMAIL = 'goldensap.in@gmail.com';

export function formatCurrencyINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateOrderReference(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `GS-${randomSuffix}`;
}

export interface OrderPayload {
  orderRef: string;
  items: CartItem[];
  customer: OrderCustomerDetails;
  subtotal: number;
  shipping: number;
  total: number;
  hasFreeDelivery: boolean;
}

export function buildWhatsAppOrderMessage(payload: OrderPayload): string {
  const { orderRef, items, customer, subtotal, shipping, total, hasFreeDelivery } = payload;

  const itemsListText = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n   Qty: ${item.quantity} | Weight: ${item.product.weight} | Price: ${formatCurrencyINR(
          item.product.price * item.quantity
        )}`
    )
    .join('\n\n');

  const fullAddress = [
    customer.addressLine,
    customer.landmark ? `Landmark: ${customer.landmark}` : null,
    `${customer.city}, ${customer.state} - ${customer.pincode}`,
  ]
    .filter(Boolean)
    .join(', ');

  const message = `*NEW ORDER - GOLDEN SAP*
Order Reference: #${orderRef}
Date: ${new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}

--------------------------------
*CUSTOMER & DELIVERY DETAILS*
--------------------------------
• Name: ${customer.fullName}
• Phone: ${customer.phoneNumber}
• Delivery Address:
  ${fullAddress}
${customer.notes ? `• Special Instructions: ${customer.notes}\n` : ''}
--------------------------------
*ORDER ITEMS*
--------------------------------
${itemsListText}

--------------------------------
*PAYMENT SUMMARY*
--------------------------------
• Subtotal: ${formatCurrencyINR(subtotal)}
• Shipping: ${hasFreeDelivery ? 'FREE (Pan-India)' : formatCurrencyINR(shipping)}
• *Total Payable: ${formatCurrencyINR(total)}*

--------------------------------
Hello GOLDEN SAP Team! I would like to confirm this order for authentic Bengali Khejur Gur. Please share your direct payment details (UPI / Bank Transfer). Thank you!`;

  return message;
}

export function openWhatsAppWithOrder(payload: OrderPayload): void {
  const message = buildWhatsAppOrderMessage(payload);
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodedText}`;

  // Fallback / standard window open
  if (typeof window !== 'undefined') {
    const newWindow = window.open(whatsappUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  }
}

export function openGeneralWhatsAppInquiry(inquirySubject: string = 'Inquiry about Khejur Gur'): void {
  const text = `Hello GOLDEN SAP team, I have an inquiry regarding: ${inquirySubject}. Could you please guide me?`;
  const url = `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}
