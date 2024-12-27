// NewsViewPage.tsx

// Client
"use client";

// Imports
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { newsArticles } from "@/_news"; // Assume this is the exported news array
import NewsArticleView from "@/components/news/NewsArticleView";
import SectionHeader from "@/components/base/SectionHeader";
import BackButton from "@/components/base/BackButton";

export default function NewsPage() {
  const { id } = useParams() as { id: string }; // ID from URL

  useEffect(() => {
    console.log("Router Query ID:", id);
  }, [id]);

  // Find the news article by matching the id with the title converted to lowercase and kebab-case
  const newsData = newsArticles.find(
    (news) => id === news.id.toLowerCase().replace(/\s+/g, "-")
  );

  useEffect(() => {
    console.log("News Data:", newsData);
  }, [newsData]);

  // Handle case where no article is found
  if (!newsData) {
    return (
      <section id="news-view" className="container contx conty mx-auto">
        <SectionHeader
          title="News Not Found"
          subtitle="404"
          description="Sorry, we couldn't find the news article you're looking for."
        />
        <BackButton text="Back to News" link="/news" />
      </section>
    );
  }

  // Render the news article
  return (
    <section id="news-view" className="container contx conty mx-auto">
      <NewsArticleView
        title={newsData.title}
        category={newsData.category}
        smallDescription={newsData.smallDescription}
        thumbnail={newsData.thumbnail}
        content={newsData.content}
      />
    </section>
  );
}
