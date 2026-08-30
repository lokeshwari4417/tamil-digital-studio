import { PackageItem } from '../types';

export const packagesData: PackageItem[] = [
  {
    id: 'studio-essential',
    title: 'Studio & Portrait Essential',
    subtitle: 'Perfect for instant portraits, family shoots & ID photos',
    priceNote: 'Custom Package / Inquire for Pricing',
    features: [
      '1 Hour Dedicated Studio Session',
      'Instant On-Screen Photo Selection',
      '10 Retouched High-Res Digital Photos',
      '2 Premium Mounted Desk Frames (8x10)',
      'Complimentary Passport Photo Sheet',
      'Online Cloud Gallery Access'
    ],
    idealFor: 'Families, Graduates, Baby Milestones & Individuals'
  },
  {
    id: 'wedding-signature',
    title: 'Wedding Signature Package',
    subtitle: 'Our most popular comprehensive wedding & reception coverage',
    priceNote: 'Custom Package / Contact for Quotation',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Full Day Marriage & Reception Coverage',
      '2 Senior Photographers + 2 Videographers',
      'Cinematic 4K Wedding Film & Teaser Reel',
      'HD Drone Aerial Photography',
      '1 Full HD Flush Mount Silk Photobook Album',
      '2 Mini Family Albums + Wall Frame (20x30)',
      'Pendrive Box + Lifetime Cloud Archive'
    ],
    idealFor: 'Grand Wedding Celebrations & Receptions'
  },
  {
    id: 'event-celebration',
    title: 'Event & Celebration Package',
    subtitle: 'Ideal for Birthdays, Puberty Functions, Anniversaries & Corporate Events',
    priceNote: 'Custom Package / Tailored Quotation',
    features: [
      'Up to 5 Hours Complete Event Coverage',
      '1 Lead Candid Photographer + 1 HD Videographer',
      'Full Length HD Video Film with Custom Music',
      '200+ Color Corrected Digital Photos',
      '1 Premium Glossy Photobook Album (12x18)',
      'Free 16x24 Framed Family Portrait'
    ],
    idealFor: 'Birthdays, Anniversaries, Puberty Functions & Housewarming'
  }
];
