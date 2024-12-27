// Types for Information
export type InformationItem = {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  imageUrl: string;
  link: string;
};

// Array
export type InformationData = InformationItem[];

// Get the latest 3 information items
export function getLatestInformation(): InformationItem[] {
  return informationItems
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
    .slice(0, 3); // Get the first 3 items
}

// Get information data by ID
export function getInformationById(id: string): InformationItem | null {
  return informationItems.find((item) => item.id === id) || null;
}

// Information Data
export const informationItems: InformationData = [
  {
    id: "1",
    title: "Unraveling the Mysteries of Aetheria's Forgotten Isles",
    summary:
      "Join a team of explorers as they chart the perilous lands of Aetheria's Forgotten Isles, uncovering ancient relics and confronting creatures from myth.",
    author: "Lorekeeper Studios",
    date: "December 22, 2024",
    imageUrl: "/images/stock/example-picture.jpg",
    link: "https://lorekeeperstudios.com/blog/unraveling_aetheria",
  },
  {
    id: "2",
    title: "Mastering the Art of Elemental Weaving",
    summary:
      "Discover the secrets of elemental magic through the eyes of an aspiring mage, as they learn to balance destruction and creation in their quest for harmony.",
    author: "Ardyn Cross",
    date: "November 5, 2024",
    imageUrl: "/images/stock/background1.jpg",
    link: "https://lorekeeperstudios.com/blog/elemental_weaving",
  },
  {
    id: "3",
    title: "The Rise of the Shadow Vanguard",
    summary:
      "A deep dive into the enigmatic Shadow Vanguard faction, their origins, and their role in reshaping the fate of the world with their mysterious agenda.",
    author: "Seren Voltaire",
    date: "October 15, 2024",
    imageUrl: "/images/stock/background2.jpg",
    link: "https://lorekeeperstudios.com/blog/shadow_vanguard",
  },
];
