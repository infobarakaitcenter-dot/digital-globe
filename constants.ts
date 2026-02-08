
import { Service, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital',
    title: 'Digital Printing',
    description: 'Perfect for short runs and personalized marketing materials. High speed and exceptional quality for business cards, flyers, and brochures.',
    icon: 'fa-microchip',
    image: 'https://picsum.photos/seed/print1/800/600',
    features: ['On-demand printing', 'Variable data', 'No minimum orders', 'Crisp resolution']
  },
  {
    id: 'offset',
    title: 'Offset Printing',
    description: 'The gold standard for high-volume commercial printing. Cost-effective for large batches with unparalleled color accuracy and finish.',
    icon: 'fa-print',
    image: 'https://picsum.photos/seed/print2/800/600',
    features: ['Bulk cost savings', 'Pantone matching', 'Specialty coatings', 'Large formats']
  },
  {
    id: 'sublimation',
    title: 'Sublimation',
    description: 'Vibrant, long-lasting prints on fabrics and rigid surfaces. Ideal for custom apparel, mugs, and promotional merchandise.',
    icon: 'fa-tshirt',
    image: 'https://picsum.photos/seed/sub/800/600',
    features: ['Fade resistant', 'Continuous tone', 'Polyester fabrics', 'Full-surface coverage']
  },
  {
    id: 'large-format',
    title: 'Large Format',
    description: 'Make a big impact with banners, signage, and posters. Weather-resistant materials for indoor and outdoor displays.',
    icon: 'fa-arrows-alt',
    image: 'https://picsum.photos/seed/large/800/600',
    features: ['Vinyl banners', 'Roll-up stands', 'Exhibition walls', 'UV protection']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, category: 'Branding', title: 'Corporate Identity Kit', image: 'https://picsum.photos/seed/p1/600/400' },
  { id: 2, category: 'Apparel', title: 'Custom Sports Team Jerseys', image: 'https://picsum.photos/seed/p2/600/400' },
  { id: 3, category: 'Marketing', title: 'High-Gloss Product Catalogs', image: 'https://picsum.photos/seed/p3/600/400' },
  { id: 4, category: 'Signage', title: 'Outdoor Retail Banners', image: 'https://picsum.photos/seed/p4/600/400' },
  { id: 5, category: 'Packaging', title: 'Custom Product Boxes', image: 'https://picsum.photos/seed/p5/600/400' },
  { id: 6, category: 'Promotional', title: 'Corporate Gift Set', image: 'https://picsum.photos/seed/p6/600/400' },
];
