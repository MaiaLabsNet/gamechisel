// News Article Column Component

// Components
import { newsArticles } from "@/_news";
import SectionHeader from "../base/SectionHeader";
import NewsLink from "./NewsLink";

const NewsColumn = () => {
  return (
    <section id="news-column">
      <div className="container contx conty mx-auto">
        <SectionHeader
          title="News"
          subtitle="Updates"
          description="Check out all the history of GameChisel."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {newsArticles.map((item, index) => (
            <NewsLink key={index} content={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsColumn;
