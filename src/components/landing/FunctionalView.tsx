import React from "react";
import SectionHeader from "@/components/base/SectionHeader";
import Image from "next/image";

// Reusable FunctionalCard Component
interface FunctionalCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const FunctionalCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: FunctionalCardProps) => {
  return (
    <div className="functional-card max-w-sm text-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="functional-card-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={480} // Specify a width (adjust according to your layout)
          height={480} // Specify a height (adjust according to your layout)
          className="w-full h-64 object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="functional-card-content p-6 flex flex-col items-center">
        <h3 className="functional-card-title text-xl font-semibold mb-2 text-center">
          {title}
        </h3>
        <p className="functional-card-description text-sm text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const FunctionalView = () => {
  return (
    <section id="FunctionalView">
      <div className="functional-view flex flex-col items-center justify-center pt-24 pb-24 dark-background">
        <SectionHeader
          title="Design Pillars"
          subtitle="Principles"
          description=""
        />

        <div className="functional-cards-container flex flex-wrap justify-center gap-8 px-4">
          {/* Community Support */}
          <FunctionalCard
            imageSrc="/images/stock/community.webp"
            imageAlt="Community Support"
            title="Community Support"
            description="Two characters, one humanoid and one animal-like companion, work together to construct a bridge in a vibrant, lush jungle. The atmosphere radiates teamwork and unity."
          />

          {/* Story & Nature */}
          <FunctionalCard
            imageSrc="/images/stock/nature.webp"
            imageAlt="Story & Nature"
            title="Story & Nature"
            description="A serene view of a glowing forest with ancient ruins. Two characters reflect on their journey amidst mysterious wildlife and a magical sunset."
          />

          {/* Fight & Jumping */}
          <FunctionalCard
            imageSrc="/images/stock/fight.webp"
            imageAlt="Fight & Jumping"
            title="Fight & Jumping"
            description="High-energy combat scene featuring two characters battling robotic enemies in a futuristic naturalistic setting. Sparks and action light up the dark background."
          />
        </div>
      </div>
    </section>
  );
};

export default FunctionalView;
