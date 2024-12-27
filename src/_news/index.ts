// Types for News
export type NewsDisplay = {
  category: string;
  title: string;
  smallDescription: string;
  link: string;
};

export type NewsData = {
  id: string;
  author: string;
  date: string;
  title: string;
  smallDescription: string;
  thumbnail: string;
  category: string;
  link: string;
  content: { text: string; picture: string }[];
};

// News Data
export const newsArticles: NewsData[] = [
  {
    id: "1",
    author: "Jane Doe",
    date: "2024-12-01",
    title: "Exploring the Latest Game Development Trends",
    smallDescription:
      "A deep dive into the latest innovations in game development for 2024.",
    thumbnail: "/images/news/news-1.jpg",
    category: "News Deep Dive",
    link: "/news/view/1",
    content: [
      {
        text: "Game development is rapidly evolving with new technologies such as AI-driven NPCs and real-time ray tracing.",
        picture: "/images/news/news-4.jpg",
      },
      {
        text: "Major studios are integrating blockchain technology for secure in-game asset trading.",
        picture: "/images/news/news-4.jpg",
      },
    ],
  },
  {
    id: "2",
    author: "John Smith",
    date: "2024-12-05",
    title: "Asset Library Update: New Characters and Props",
    smallDescription:
      "We’ve added 50+ new assets to our library, including characters and props.",
    thumbnail: "/images/news/news-2.jpg",
    category: "Asset",
    link: "/news/view/2",
    content: [
      {
        text: "The latest update includes high-quality 3D models of modern city props and fantasy creatures.",
        picture: "/images/news/news-4.jpg",
      },
      {
        text: "We’ve focused on enhancing compatibility with major engines like Unity and Unreal Engine.",
        picture: "/images/news/news-4.jpg",
      },
    ],
  },
  {
    id: "3",
    author: "Emily Davis",
    date: "2024-12-10",
    title: "New Code Snippets for Advanced AI Systems",
    smallDescription:
      "Discover how our latest code snippets can power your game’s AI.",
    thumbnail: "/images/news/news-3.jpg",
    category: "Code",
    link: "/news/view/3",
    content: [
      {
        text: "Our new AI snippets allow for dynamic decision-making and advanced pathfinding.",
        picture: "/images/news/news-4.jpg",
      },
      {
        text: "Implement behavior trees easily with our pre-built functions.",
        picture: "/images/news/news-4.jpg",
      },
    ],
  },
  {
    id: "4",
    author: "Mark Taylor",
    date: "2024-12-15",
    title: "Major Update: Version 3.0 Released",
    smallDescription:
      "We’ve rolled out Version 3.0 with exciting new features and improvements.",
    thumbnail: "/images/news/news-4.jpg",
    category: "Update",
    link: "/news/view/4",
    content: [
      {
        text: "Version 3.0 brings a complete overhaul of the UI for better accessibility.",
        picture: "/images/news/news-4.jpg",
      },
      {
        text: "Performance optimizations ensure smoother gameplay across all supported platforms.",
        picture: "/images/news/news-4.jpg",
      },
    ],
  },
];

// Get the latest 4 news articles
export function getLatestNews(): NewsDisplay[] {
  return newsArticles
    .slice(-4) // Get the last 4 articles
    .reverse() // Reverse to get the most recent ones first
    .map(({ category, title, smallDescription, link }) => ({
      category,
      title,
      smallDescription,
      link,
    }));
}

// Get news data by ID
export function getNewsById(id: string): NewsData | null {
  return newsArticles.find((news) => news.id === id) || null;
}
