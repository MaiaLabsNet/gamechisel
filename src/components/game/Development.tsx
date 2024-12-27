// components/Strichliste.js

import SectionHeader from "../base/SectionHeader";

export default function Development() {
  const characterFeatures = [
    "Charakter",
    "Character Abilities: Speed, Strength, Shooting, Dashing",
    "Multiplayer",
    "Jumping",
    "Fighting",
    "Enemies",
    "Animation",
    "Design",
  ];

  const mapFeatures = [
    "Spruce Forest",
    "Caves",
    "Battle Arena",
    "Desert",
    "Zoomer",
    "Rover",
    "Racetrack",
  ];

  const abilitiesAndOther = [
    "Spawnpoints: Portals",
    "Quest-System: Map",
    "Player Progression: Save Status",
    "Dynamic Map",
    "Interactive World",
    "World-Events",
    "Saving",
    "Spaceship",
  ];

  return (
    <section id="development" className="container contx conty mx-auto w-full">
      <SectionHeader
        title="In Progress"
        subtitle="Development"
        description="new upcoming features are listed here."
      />
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {/* Abschnitt für Charakter-Features */}
        <div className="space-y-6 border rounded p-4 w-full">
          <h2 className="text-2xl font-bold text-white">Charakter-Features</h2>
          <ul className="space-y-3">
            {characterFeatures.map((feature, index) => (
              <li key={index} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Abschnitt für Karten-Features */}
        <div className="space-y-6 border rounded p-4 w-full">
          <h2 className="text-2xl font-bold text-white">Karten</h2>
          <ul className="space-y-3">
            {mapFeatures.map((feature, index) => (
              <li key={index} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Abschnitt für weitere Features */}
        <div className="space-y-6 border rounded p-4 w-full">
          <h2 className="text-2xl font-bold text-white">Weitere Features</h2>
          <ul className="space-y-3">
            {abilitiesAndOther.map((feature, index) => (
              <li key={index} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
