// BackButton.tsx

// Imports
import Link from "next/link";

// Interfaces
interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton: React.FC<BackButtonProps> = ({ text, link }) => {
  return (
    <div className="flex items-center">
      <Link href={link}>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-200 my-6">
          &larr; {text}
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
