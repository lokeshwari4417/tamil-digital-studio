export interface BusinessInfo {
  name: string;
  tagline: string;
  establishedYear: string;
  phone: string;
  alternatePhone?: string;
  email: string;
  whatsapp: string;
  instagram: string;
  instagramUrl: string;
  facebook: string;
  facebookUrl: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    googleMapsEmbedUrl?: string;
    googleMapsSearchUrl: string;
    googleReviewsUrl: string;
  };
  serviceArea: string;
  rating: {
    score: number;
    reviewsCount: number;
  };
  stats: {
    experienceYears: string;
    momentsCaptured: string;
    happyClients: string;
    eventsCovered: string;
  };
  openingHours: {
    days: string;
    hours: string;
  };
}

export type ServiceCategory = 
  | 'photography'
  | 'videography'
  | 'printing'
  | 'delivery';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  benefits: string[];
  category: ServiceCategory;
  categoryLabel: string;
  popular?: boolean;
  whatsappContext?: 'photography' | 'wedding' | 'printing' | 'sublimation' | 'delivery' | 'general';
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: 'Weddings' | 'Events' | 'Portraits' | 'Baby' | 'Studio' | 'Outdoor' | 'Products' | 'Creative' | 'All';
  description: string;
  location?: string;
  featured?: boolean;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
  eventType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'delivery' | 'services' | 'printing';
}
