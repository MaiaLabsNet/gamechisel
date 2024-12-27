// Asset Preview Type
export type AssetsPreview = {
  title: string; // Title of the asset
  img: string; // URL to the asset's image
  link: string; // URL or route to view the asset
  description: string; // Short description of the asset
};

// Assets Type
export type AssetData = {
  id: string;
  title: string;
  specialSale: boolean;
  isFree: boolean;
  category: string;
  img: string;
  link: string;
  author: string;
  authorProfile: string;
  price: string;
  originalPrice: string;
  discount: string;
  views: number;
  licenseType: string;
  refundPolicy: string;
  description: string;
  media: { type: "image" | "video"; src: string }[]; // Media array with type and source
  details: { type: "header" | "paragraph"; content?: string }[]; // Asset details
  reviews: { author: string; rating: number; comment: string; date: string }[]; // Asset reviews
};

// Assets Data
export const assetsData: AssetData[] = [
  {
    id: "1",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/1",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },
      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
  {
    id: "2",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/2",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },
      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
  {
    id: "3",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/3",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },

      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
  {
    id: "4",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/4",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },

      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
  {
    id: "5",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/5",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },

      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
  {
    id: "6",
    title: "Lurker Village Pack",
    specialSale: true,
    isFree: true,
    category: "Assets",
    img: "/images/assets/maia.webp",
    link: "http://localhost:3000/assets/view/5",
    author: "Milan",
    authorProfile: "https://www.creatorwebsite.com",
    price: "€27.60",
    originalPrice: "€55.20",
    discount: "-50%",
    views: 1000,
    licenseType: "Single Entity",
    refundPolicy: "Eligible for refund",
    description: "A collection of high-quality 3D assets for game development.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/54dabgZJ5YA" },
      { type: "image", src: "/images/game/village.webp" },
      { type: "image", src: "/images/stock/nature.webp" },
      { type: "image", src: "/images/stock/fight.webp" },
    ],
    details: [
      { type: "header", content: "High-Quality Assets" },
      {
        type: "paragraph",
        content:
          "This pack includes a variety of highly detailed 3D assets optimized for game development.",
      },

      { type: "header", content: "Customizable Features" },
      {
        type: "paragraph",
        content:
          "You can adjust wind settings, lighting, and other environmental effects to suit your needs.",
      },
    ],
    reviews: [
      // {
      //   author: "auspicioushope",
      //   rating: 4,
      //   comment:
      //     "Good resource but needs improvement. I need to control the wind direction in the environment manager, but no function to support.",
      //   date: "2 months ago",
      // },
      // {
      //   author: "anotheruser",
      //   rating: 5,
      //   comment: "Amazing quality! Highly recommend.",
      //   date: "1 month ago",
      // },
    ],
  },
];

// Convert asset data to AssetsPreview format
export function convertAssetToPreview(
  asset: (typeof assetsData)[number]
): AssetsPreview {
  const { title, img, link, description } = asset;
  return { title, img, link, description };
}

// Filter assets and convert to preview data
export function getFilteredAssets(filters: {
  title: string;
  category: string;
  isFree: boolean;
  specialSale: boolean;
}): AssetsPreview[] {
  return assetsData
    .filter((asset) => {
      // Filter by title
      if (
        filters.title &&
        !asset.title.toLowerCase().includes(filters.title.toLowerCase())
      ) {
        return false;
      }

      // Filter by category (e.g. All, Assets, etc.)
      if (filters.category !== "All" && asset.category !== filters.category) {
        return false;
      }

      // Filter by free status
      if (filters.isFree && !asset.isFree) {
        return false;
      }

      // Filter by special sale status
      if (filters.specialSale && !asset.specialSale) {
        return false;
      }

      return true;
    })
    .map(convertAssetToPreview); // Convert filtered assets to preview format
}

// Assets Data By ID
export const getAssetById = (id: string): AssetData | null => {
  const asset = assetsData.find((asset) => asset.id === id);
  return asset || null;
};
