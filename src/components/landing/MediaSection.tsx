// MediaSection.tsx

// Imports
import React from "react";
import SectionHeader from "../base/SectionHeader";
import Image from "next/image";
import GlowingButton from "./GlowingButton";

const MediaSection = () => {
  return (
    <section id="Media">
      <div className="container contx conty w-full">
        {/* Header */}
        <SectionHeader
          title="Media"
          subtitle="Explore"
          description="Follow us on different websites"
        />

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
          {/* Figure SVG Picture */}
          <div>
            <Image
              src="/images/game/figure.webp"
              alt="Facebook"
              width={240}
              height={480}
            />
          </div>

          {/* YouTube Button */}
          <div className="flex flex-col items-center justify-center">
            <GlowingButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
