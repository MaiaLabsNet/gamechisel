// NewItem.tsx

// Imports
import Link from "next/link";
import NextImage from "next/image";

// Interfaces
interface InformationItemProps {
  href: string;
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  summary: string;
}

const InformationItem: React.FC<InformationItemProps> = ({
  href,
  imageUrl,
  title,
  author,
  date,
  summary,
}) => {
  return (
    <div className="news-item flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <NextImage
        src={imageUrl}
        alt={title}
        width={1920}
        height={1080}
        className="media-wrapper flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
      />

      {/* Text Content */}
      <div className="entry-text p-4 md:p-6 flex flex-col justify-between w-full md:w-1/2 items-center justify-center my-auto">
        <div>
          {/* Author Text */}
          <span className="text-sm font-medium text-gray-300">{author}</span>

          {/* Date Text */}
          <div className="date text-xs text-gray-400">{date}</div>

          <div>
            {/* Title Text */}
            <h3 className="text-lg font-bold text-yellow-200 mt-2">{title}</h3>

            {/* Summary Text */}
            <p className="summary text-sm text-gray-300 mt-2">{summary}</p>
          </div>

          {/* Read More Button */}
          <Link href={href}>
            <button className="arrow-link link mt-4 self-start text-yellow-200 flex items-center">
              &rarr; {"Read more"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationItem;
