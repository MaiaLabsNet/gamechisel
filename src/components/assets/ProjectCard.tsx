// ProjectCard.tsx

// Imports
import Image from "next/image";
import Link from "next/link";

// Define the types for the props
interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ img, title, description, link }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white shadow-lg h-48">
        <Image
          alt={title}
          loading="lazy"
          width={768}
          height={768}
          decoding="async"
          className="h-full w-full object-cover"
          src={img}
        />
      </div>
      <div className="p-6 text-left">
        {link ? (
          <Link
            href={link}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <span className="font-semibold text-xl mb-2">{title}</span>
          </Link>
        ) : (
          <span className="font-semibold text-xl mb-2 text-gray-300">
            {title}
          </span>
        )}
        <p className="text-base font-normal text-gray-400 mb-6">
          {description}
        </p>
        {link && (
          <Link
            href={link}
            rel="noopener noreferrer"
            className="border border-white text-white py-2 px-4 rounded-lg text-xs font-bold uppercase hover:bg-yellow-200 hover:text-black transition duration-300 ease-in-out"
          >
            See details
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
