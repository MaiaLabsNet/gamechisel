// Hero.tsx

import Image from "next/image";
import NeonButton from "../base/NeonButton";

function Hero() {
  return (
    <section id="Home">
      <div className="relative w-full py-12 px-8 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 md:block hidden"
          style={{
            backgroundImage: "url('/images/stock/example-picture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "100%",
            width: "100%",
            opacity: 0.8, // Set the desired opacity
          }}
        ></div>

        {/* Overlay for text contrast */}
        <div className="inset-0 z-10"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-20 gap-6 lg:gap-12">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            style={{
              opacity: 1, // Default opacity
            }}
          >
            <Image
              src="/images/stock/example-picture.jpg"
              alt="Game Preview"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg max-w-full h-auto md:opacity-0 md:bg-black"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-16 lg:mt-0 lg:mb-32 lg:ml-48">
            {/* Hero Header */}
            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 antialiased font-sans"
              style={{
                // color: "#ffdfa0", // Light Gold
                textShadow: "4px 4px 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              GameChisel <br />
            </h1>

            {/* Hero Subheading */}
            <p
              className="text-lg md:text-xl font-semibold mb-6 antialiased font-sans uppercase"
              style={{
                // color: "#d4af37", // Golden Text
                textShadow: "4px 4px 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              3D Stylized Platformer Game & Assets
            </p>

            {/* Extra */}
            <div className="flex flex-col gap-2">
              <NeonButton
                href="/game"
                text="&rarr; Download Game!"
                variant="1"
              />
              <NeonButton
                href="/assets"
                text="&rarr; Grab your assets now!"
                variant="1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
