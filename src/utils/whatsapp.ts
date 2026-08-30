import { businessData } from '../data/business';

export type WhatsAppContext =
  | 'general'
  | 'photography'
  | 'wedding'
  | 'printing'
  | 'sublimation'
  | 'delivery'
  | 'custom';

export const getWhatsAppLink = (context: WhatsAppContext = 'general', customText?: string): string => {
  const number = businessData.whatsapp.replace(/[^0-9]/g, '');

  let text = '';
  switch (context) {
    case 'photography':
      text = 'Hello Tamil Digital Studio, I would like to enquire about photography services.';
      break;
    case 'wedding':
      text = 'Hello Tamil Digital Studio, I would like to enquire about wedding photography and videography.';
      break;
    case 'printing':
      text = 'Hello Tamil Digital Studio, I would like to enquire about printing/photo frame/photo album services.';
      break;
    case 'sublimation':
      text = 'Hello Tamil Digital Studio, I would like to enquire about sublimation printing.';
      break;
    case 'delivery':
      text = 'Hello Tamil Digital Studio, I would like to check delivery availability for my order.';
      break;
    case 'custom':
      text = customText || 'Hello Tamil Digital Studio, I would like to know more about your services.';
      break;
    case 'general':
    default:
      text = 'Hello Tamil Digital Studio, I would like to know more about your services.';
      break;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const openWhatsApp = (context: WhatsAppContext = 'general', customText?: string) => {
  const url = getWhatsAppLink(context, customText);
  window.open(url, '_blank', 'noopener,noreferrer');
};
