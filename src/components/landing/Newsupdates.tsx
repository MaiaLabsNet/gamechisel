// Newsupdates.tsx

// Imports
import Image from "next/image";
import SectionHeader from "@/components/base/SectionHeader";
import { newsArticles } from "@/_news";
import Link from "next/link";

export default function NewsUpdates() {
  const latestNews = newsArticles.slice(0, 4);
  return (
    <section id="News">
      <div className="container conty contx mx-auto">
        <SectionHeader
          title="Updates"
          subtitle="News"
          description="See our latest news here."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="news-preview overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-yellow-400 text-purple-900 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {news.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {news.smallDescription}
                </p>

                <Link
                  href={news.link}
                  rel="noopener noreferrer"
                  className="link mt-8 rounded font-bold"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <a href="/news" className="link mt-6 inline-block">
          Alle Neuigkeiten anzeigen »
        </a>
      </div>
    </section>
  );
}
