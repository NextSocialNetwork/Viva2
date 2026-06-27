import { Product } from '../types';

export const STORE_PRODUCTS: Product[] = [
  {
    id: 'esim-ultra-unlimited',
    name: 'VIVA 5G Ultra eSIM Kit',
    category: 'esim',
    tagline: 'Unlimited 5G Ultra Capacity • Instant Email QR Delivery',
    price: 15,
    monthlyPrice: 15,
    rating: 5.0,
    reviewsCount: 14209,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    badge: 'INSTANT ACTIVATION',
    specs: {
      data: 'Unlimited 5G Ultra + 50GB Mobile Hotspot',
      network: 'T-Mobile 5G Standalone Core (SA)',
      storage: 'Digital QR Profile (0 Physical Weight)',
    },
    inStock: true,
    featured: true
  },
  {
    id: 'esim-pro-global',
    name: 'VIVA eSIM Pro Max Kit',
    category: 'esim',
    tagline: 'Unlimited 5G USA + Free Roaming in 180 Countries',
    price: 35,
    monthlyPrice: 35,
    rating: 5.0,
    reviewsCount: 8930,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    badge: 'BEST SELLER',
    specs: {
      data: 'Truly Unlimited High-Speed 5G + Unlimited Roaming',
      network: 'VIVA Ultra Node + T-Mobile Priority Tier 1',
      storage: 'Multi-Device eSIM Transfer Support',
    },
    inStock: true
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max (Titanium Dark)',
    category: 'iphone',
    tagline: 'A19 Pro Neural Engine • Holographic Display • Satellite 5G',
    price: 1199,
    monthlyPrice: 49,
    rating: 5.0,
    reviewsCount: 5240,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badge: 'NEWEST MODEL',
    specs: {
      storage: '512GB NVMe',
      color: 'Cosmic Dark Titanium',
      screen: '6.9" Super Retina XDR ProMotion 120Hz',
      network: 'VIVA 5G mmWave + Sub-6GHz Pre-configured eSIM'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro (Black Titanium)',
    category: 'iphone',
    tagline: 'Camera Control Button • A18 Pro Chip • Apple Intelligence',
    price: 999,
    monthlyPrice: 41,
    rating: 5.0,
    reviewsCount: 12400,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    specs: {
      storage: '256GB',
      color: 'Space Black Titanium',
      screen: '6.3" LTPO OLED ProMotion',
      network: 'Dual eSIM 5G Ultra Ready'
    },
    inStock: true
  },
  {
    id: 'samsung-galaxy-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra AI',
    category: 'samsung',
    tagline: 'Snapdragon 8 Gen 5 for Galaxy • 200MP AI Quad Camera • S-Pen',
    price: 1249,
    monthlyPrice: 52,
    rating: 5.0,
    reviewsCount: 6810,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    badge: 'FUTURISTIC AI',
    specs: {
      storage: '512GB UFS 4.1',
      color: 'Cyber Slate Gray',
      screen: '6.8" Dynamic AMOLED 2X 144Hz Anti-Reflective',
      network: 'VIVA Ultra Capacity Node Direct Link'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'samsung-galaxy-z-fold-7',
    name: 'Samsung Galaxy Z Fold 7',
    category: 'samsung',
    tagline: 'Ultra-Slim Foldable Glass • Desktop DeX Wireless • 5G Ultra',
    price: 1799,
    monthlyPrice: 75,
    rating: 5.0,
    reviewsCount: 3190,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
    badge: 'FOLDABLE FLAGSHIP',
    specs: {
      storage: '1TB',
      color: 'Phantom Obsidian',
      screen: '8.0" Infinity Flex Display + 6.5" Cover Screen',
      network: 'VIVA eSIM + Nano SIM Dual Standby'
    },
    inStock: true
  }
];
