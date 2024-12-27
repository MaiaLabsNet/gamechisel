// NewsArticleView Component

// Components
import SectionHeader from "@/components/base/SectionHeader";
import BackButton from "../base/BackButton";
import Image from "next/image";

interface NewsContentItem {
  text: string;
  picture: string;
}

interface NewsArticleProps {
  title: string;
  category: string;
  smallDescription: string;
  thumbnail: string;
  content?: NewsContentItem[];
}

const NewsArticleView: React.FC<NewsArticleProps> = ({
  title,
  category,
  smallDescription,
  thumbnail,
  content = [],
}) => {
  return (
    <div>
      <SectionHeader
        title={title}
        subtitle={category}
        description={smallDescription}
      />
      <div>
        {/* Back Button Section */}
        <BackButton text="Back to News" link="/news" />

        {/* Thumbnail Image */}
        <div className="w-full">
          <Image
            src={thumbnail}
            width={1920}
            height={1080}
            alt={`${title} Thumbnail`}
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
          />
        </div>

        {/* News Content */}
        <div className="mt-10">
          <p className="text-lg simple-text mb-6">{smallDescription}</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={item.picture}
                  width={1280}
                  height={720}
                  alt={`Content ${index + 1}`}
                  className="rounded-md shadow-md mb-4 object-cover"
                />
                <p className="simple-text leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleView;
