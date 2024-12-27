// TrailerSection.tsx

import React from "react";
import SectionHeader from "../base/SectionHeader";

const TrailerSection = () => {
  return (
    <section id="Trailer">
      <div className="container contx conty flex flex-col items-center justify-center">
        {/* Header */}
        <SectionHeader title="Trailer" subtitle="Watch" description="" />
        {/* Video Embed */}
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/54dabgZJ5YA"
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
