// Sample product data for demonstration
// Ready for Google Shopping API / eBay API / Amazon Affiliate API integration

export type Category = 
  | "electronics"
  | "fashion"
  | "makeup"
  | "accessories"
  | "perfumes"
  | "home"
  | "travel"
  | "insurance"
  | "internet"
  | "digital";

export interface Store {
  id: string;
  name: string;
  logo: string;
  country: string;
  trustScore: number;
  verified: boolean;
}

export interface ProductOffer {
  id: string;
  storeId: string;
  store: Store;
  price: number;
  originalPrice?: number;
  currency: string;
  inStock: boolean;
  freeShipping: boolean;
  deliveryDays: number;
  url: string;
  // API source tracking (for future integration)
  apiSource?: "google_shopping" | "ebay" | "amazon" | "sample";
  apiProductId?: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: Category;
  image: string;
  brand: string;
  offers: ProductOffer[];
  // API fields for future integration
  gtin?: string; // Global Trade Item Number
  mpn?: string; // Manufacturer Part Number
}

// Sample stores data
export const sampleStores: Store[] = [
  {
    id: "amazon-de",
    name: "Amazon.de",
    logo: "/stores/amazon.svg",
    country: "DE",
    trustScore: 95,
    verified: true,
  },
  {
    id: "mediamarkt",
    name: "MediaMarkt",
    logo: "/stores/mediamarkt.svg",
    country: "DE",
    trustScore: 92,
    verified: true,
  },
  {
    id: "saturn",
    name: "Saturn",
    logo: "/stores/saturn.svg",
    country: "DE",
    trustScore: 91,
    verified: true,
  },
  {
    id: "fnac",
    name: "Fnac",
    logo: "/stores/fnac.svg",
    country: "FR",
    trustScore: 89,
    verified: true,
  },
  {
    id: "elcorteingles",
    name: "El Corte Inglés",
    logo: "/stores/elcorteingles.svg",
    country: "ES",
    trustScore: 90,
    verified: true,
  },
  {
    id: "zalando",
    name: "Zalando",
    logo: "/stores/zalando.svg",
    country: "DE",
    trustScore: 94,
    verified: true,
  },
  {
    id: "aboutyou",
    name: "About You",
    logo: "/stores/aboutyou.svg",
    country: "DE",
    trustScore: 88,
    verified: true,
  },
  {
    id: "douglas",
    name: "Douglas",
    logo: "/stores/douglas.svg",
    country: "DE",
    trustScore: 93,
    verified: true,
  },
  {
    id: "sephora",
    name: "Sephora",
    logo: "/stores/sephora.svg",
    country: "FR",
    trustScore: 94,
    verified: true,
  },
  {
    id: "notino",
    name: "Notino",
    logo: "/stores/notino.svg",
    country: "CZ",
    trustScore: 87,
    verified: true,
  },
  {
    id: "ikea",
    name: "IKEA",
    logo: "/stores/ikea.svg",
    country: "SE",
    trustScore: 96,
    verified: true,
  },
  {
    id: "booking",
    name: "Booking.com",
    logo: "/stores/booking.svg",
    country: "NL",
    trustScore: 93,
    verified: true,
  },
];

// Sample products data
export const sampleProducts: Product[] = [
  // Electronics
  {
    id: "iphone-15-pro",
    name: "Apple iPhone 15 Pro 256GB",
    nameAr: "آبل آيفون 15 برو 256 جيجابايت",
    description: "Latest iPhone with A17 Pro chip and titanium design",
    descriptionAr: "أحدث آيفون مع شريحة A17 برو وتصميم تيتانيوم",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    brand: "Apple",
    gtin: "194253401234",
    offers: [
      {
        id: "offer-1",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 1199.00,
        originalPrice: 1299.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-2",
        storeId: "mediamarkt",
        store: sampleStores[1],
        price: 1249.00,
        originalPrice: 1299.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-3",
        storeId: "saturn",
        store: sampleStores[2],
        price: 1239.00,
        currency: "EUR",
        inStock: true,
        freeShipping: false,
        deliveryDays: 4,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-4",
        storeId: "fnac",
        store: sampleStores[3],
        price: 1279.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 5,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 512GB",
    nameAr: "سامسونج جالاكسي S24 الترا 512 جيجابايت",
    description: "Premium Android flagship with S Pen and AI features",
    descriptionAr: "هاتف أندرويد متميز مع قلم S Pen وميزات الذكاء الاصطناعي",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    brand: "Samsung",
    offers: [
      {
        id: "offer-5",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 1349.00,
        originalPrice: 1449.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-6",
        storeId: "mediamarkt",
        store: sampleStores[1],
        price: 1399.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  {
    id: "airpods-pro-2",
    name: "Apple AirPods Pro 2nd Gen",
    nameAr: "آبل إيربودز برو الجيل الثاني",
    description: "Premium wireless earbuds with active noise cancellation",
    descriptionAr: "سماعات لاسلكية متميزة مع عزل نشط للضوضاء",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    brand: "Apple",
    offers: [
      {
        id: "offer-7",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 249.00,
        originalPrice: 279.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 1,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-8",
        storeId: "mediamarkt",
        store: sampleStores[1],
        price: 259.00,
        currency: "EUR",
        inStock: true,
        freeShipping: false,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-9",
        storeId: "saturn",
        store: sampleStores[2],
        price: 255.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Fashion
  {
    id: "nike-air-max",
    name: "Nike Air Max 90",
    nameAr: "نايكي اير ماكس 90",
    description: "Iconic sneaker with visible Air cushioning",
    descriptionAr: "حذاء رياضي أيقوني مع وسادة هوائية مرئية",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400",
    brand: "Nike",
    offers: [
      {
        id: "offer-10",
        storeId: "zalando",
        store: sampleStores[5],
        price: 149.95,
        originalPrice: 179.95,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-11",
        storeId: "aboutyou",
        store: sampleStores[6],
        price: 159.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 4,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  {
    id: "adidas-ultraboost",
    name: "Adidas Ultraboost 23",
    nameAr: "أديداس الترابوست 23",
    description: "Premium running shoe with Boost technology",
    descriptionAr: "حذاء جري متميز مع تقنية بوست",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    brand: "Adidas",
    offers: [
      {
        id: "offer-12",
        storeId: "zalando",
        store: sampleStores[5],
        price: 179.95,
        originalPrice: 199.95,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Makeup
  {
    id: "mac-lipstick",
    name: "MAC Ruby Woo Lipstick",
    nameAr: "ماك روبي وو أحمر شفاه",
    description: "Iconic matte red lipstick",
    descriptionAr: "أحمر شفاه أحمر مطفي أيقوني",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
    brand: "MAC",
    offers: [
      {
        id: "offer-13",
        storeId: "douglas",
        store: sampleStores[7],
        price: 24.00,
        currency: "EUR",
        inStock: true,
        freeShipping: false,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-14",
        storeId: "sephora",
        store: sampleStores[8],
        price: 25.50,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 4,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Perfumes
  {
    id: "dior-sauvage",
    name: "Dior Sauvage EDP 100ml",
    nameAr: "ديور سوفاج عطر 100 مل",
    description: "Fresh and woody fragrance for men",
    descriptionAr: "عطر منعش وخشبي للرجال",
    category: "perfumes",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
    brand: "Dior",
    offers: [
      {
        id: "offer-15",
        storeId: "douglas",
        store: sampleStores[7],
        price: 89.95,
        originalPrice: 119.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-16",
        storeId: "notino",
        store: sampleStores[9],
        price: 79.50,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 5,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-17",
        storeId: "sephora",
        store: sampleStores[8],
        price: 95.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  {
    id: "chanel-no5",
    name: "Chanel No. 5 EDP 100ml",
    nameAr: "شانيل رقم 5 عطر 100 مل",
    description: "Timeless floral fragrance for women",
    descriptionAr: "عطر زهري خالد للنساء",
    category: "perfumes",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400",
    brand: "Chanel",
    offers: [
      {
        id: "offer-18",
        storeId: "douglas",
        store: sampleStores[7],
        price: 145.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-19",
        storeId: "sephora",
        store: sampleStores[8],
        price: 149.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Home
  {
    id: "dyson-v15",
    name: "Dyson V15 Detect Absolute",
    nameAr: "دايسون V15 ديتكت أبسوليوت",
    description: "Advanced cordless vacuum with laser detection",
    descriptionAr: "مكنسة لاسلكية متطورة مع كشف بالليزر",
    category: "home",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
    brand: "Dyson",
    offers: [
      {
        id: "offer-20",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 649.00,
        originalPrice: 749.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-21",
        storeId: "mediamarkt",
        store: sampleStores[1],
        price: 699.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Accessories
  {
    id: "ray-ban-aviator",
    name: "Ray-Ban Aviator Classic",
    nameAr: "راي بان أفياتور كلاسيك",
    description: "Iconic pilot sunglasses",
    descriptionAr: "نظارات شمسية طيار أيقونية",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    brand: "Ray-Ban",
    offers: [
      {
        id: "offer-22",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 129.00,
        originalPrice: 159.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
      {
        id: "offer-23",
        storeId: "zalando",
        store: sampleStores[5],
        price: 139.00,
        currency: "EUR",
        inStock: true,
        freeShipping: true,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  // Small items for testing fee tiers
  {
    id: "phone-case",
    name: "iPhone 15 Pro Silicone Case",
    nameAr: "غطاء سيليكون آيفون 15 برو",
    description: "Official Apple silicone case",
    descriptionAr: "غطاء سيليكون رسمي من آبل",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
    brand: "Apple",
    offers: [
      {
        id: "offer-24",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 8.99,
        currency: "EUR",
        inStock: true,
        freeShipping: false,
        deliveryDays: 3,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
  {
    id: "usb-cable",
    name: "USB-C to Lightning Cable 1m",
    nameAr: "كابل USB-C إلى لايتننج 1 متر",
    description: "Fast charging cable for iPhone",
    descriptionAr: "كابل شحن سريع للآيفون",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    brand: "Apple",
    offers: [
      {
        id: "offer-25",
        storeId: "amazon-de",
        store: sampleStores[0],
        price: 5.99,
        currency: "EUR",
        inStock: true,
        freeShipping: false,
        deliveryDays: 2,
        url: "#",
        apiSource: "sample",
      },
    ],
  },
];

// Service fee calculation
export function calculateServiceFee(price: number): number {
  if (price <= 10) return 0.50;
  if (price <= 100) return 1.50;
  if (price <= 1000) return 2.99;
  return 5.99;
}

// Calculate total price including service fee
export function calculateTotalPrice(price: number): number {
  return price + calculateServiceFee(price);
}

// Search products (ready for API integration)
export function searchProducts(
  query: string,
  category?: Category | null
): Product[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return sampleProducts.filter((product) => {
    const matchesQuery =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.nameAr.includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.descriptionAr.includes(normalizedQuery);

    const matchesCategory = !category || product.category === category;

    return matchesQuery && matchesCategory;
  });
}

// Get products by category
export function getProductsByCategory(category: Category): Product[] {
  return sampleProducts.filter((product) => product.category === category);
}

// Sort offers by price
export function sortOffersByPrice(
  offers: ProductOffer[],
  ascending: boolean = true
): ProductOffer[] {
  return [...offers].sort((a, b) => {
    const diff = a.price - b.price;
    return ascending ? diff : -diff;
  });
}

// API Integration placeholder types
export interface GoogleShoppingAPIResponse {
  items: Array<{
    title: string;
    link: string;
    price: {
      value: string;
      currency: string;
    };
    shippingInfo: {
      shippingCost: string;
      handlingDays: number;
    };
    seller: {
      name: string;
      rating: number;
    };
  }>;
}

export interface EbayAPIResponse {
  itemSummaries: Array<{
    title: string;
    itemWebUrl: string;
    price: {
      value: string;
      currency: string;
    };
    shippingOptions: Array<{
      shippingCostType: string;
      shippingCost: {
        value: string;
      };
    }>;
    seller: {
      username: string;
      feedbackPercentage: string;
    };
  }>;
}

export interface AmazonAffiliateAPIResponse {
  Items: Array<{
    ASIN: string;
    DetailPageURL: string;
    ItemInfo: {
      Title: {
        DisplayValue: string;
      };
    };
    Offers: {
      Listings: Array<{
        Price: {
          Amount: number;
          Currency: string;
        };
        DeliveryInfo: {
          IsFreeShippingEligible: boolean;
        };
      }>;
    };
  }>;
}

// Future API integration functions (placeholders)
export async function fetchGoogleShoppingPrices(query: string): Promise<ProductOffer[]> {
  // TODO: Implement Google Shopping API integration
  // const response = await fetch(`/api/google-shopping?q=${encodeURIComponent(query)}`);
  // return transformGoogleShoppingResponse(await response.json());
  console.log("Google Shopping API not yet connected. Query:", query);
  return [];
}

export async function fetchEbayPrices(query: string): Promise<ProductOffer[]> {
  // TODO: Implement eBay API integration
  // const response = await fetch(`/api/ebay?q=${encodeURIComponent(query)}`);
  // return transformEbayResponse(await response.json());
  console.log("eBay API not yet connected. Query:", query);
  return [];
}

export async function fetchAmazonPrices(query: string): Promise<ProductOffer[]> {
  // TODO: Implement Amazon Affiliate API integration
  // const response = await fetch(`/api/amazon?q=${encodeURIComponent(query)}`);
  // return transformAmazonResponse(await response.json());
  console.log("Amazon API not yet connected. Query:", query);
  return [];
}
