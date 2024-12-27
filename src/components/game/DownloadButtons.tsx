// LauncherButtons.tsx

"use client";

// Imports
import React from "react";
import { FaSteam, FaGooglePlay } from "react-icons/fa";
import {
  SiEpicgames,
  SiPlaystation,
  SiBox,
  SiItchdotio,
  SiNintendoswitch,
} from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import SectionHeader from "../base/SectionHeader";

// Platform Data
const platforms = [
  {
    id: 1,
    name: "EPIC Store",
    icon: <SiEpicgames size={32} />,
    color: "bg-purple-700 hover:bg-purple-800 text-white",
    url: "https://www.epicgames.com/store",
  },
  {
    id: 2,
    name: "Steam",
    icon: <FaSteam size={32} />,
    color: "bg-gray-800 hover:bg-gray-900 text-white",
    url: "https://store.steampowered.com/",
  },
  {
    id: 3,
    name: "PlayStation Store",
    icon: <SiPlaystation size={32} />,
    color: "bg-blue-800 hover:bg-blue-900 text-white",
    url: "https://store.playstation.com/",
  },
  {
    id: 4,
    name: "Xbox Store",
    icon: <SiBox size={32} />,
    color: "bg-green-700 hover:bg-green-800 text-white",
    url: "https://www.microsoft.com/en-us/store/xbox",
  },
  {
    id: 5,
    name: "Apple App Store",
    icon: <AiFillApple size={32} />,
    color: "bg-gray-300 hover:bg-gray-400 text-black",
    url: "https://apps.apple.com/",
  },
  {
    id: 6,
    name: "Google Play Store",
    icon: <FaGooglePlay size={32} />,
    color: "bg-green-700 hover:bg-green-800 text-white",
    url: "https://play.google.com/store",
  },
  {
    id: 7,
    name: "Itch.io",
    icon: <SiItchdotio size={32} />,
    color: "bg-orange-700 hover:bg-orange-800 text-white",
    url: "https://itch.io/",
  },
  {
    id: 8,
    name: "Nintendo Switch",
    icon: <SiNintendoswitch size={32} />,
    color: "bg-red-700 hover:bg-red-800 text-white",
    url: "https://www.nintendo.com/",
  },
];

function LauncherButtons() {
  return (
    <section
      id="launcher"
      className="flex flex-col items-center justify-center p-6 space-y-8"
    >
      <SectionHeader
        title="Get it here!"
        subtitle="Launcher"
        description="coming soon..."
      />
      {/* Buttons in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-md">
        {platforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full text-center py-4 rounded-lg transition duration-200 ${platform.color}`}
          >
            <div className="flex items-center justify-center w-10 h-10">
              {platform.icon}
            </div>
            <span className="font-semibold">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default LauncherButtons;
