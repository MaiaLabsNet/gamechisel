// DevelopmentSection.tsx

// Imports
import SectionHeader from "../base/SectionHeader";

export default function Development() {
  const developmentFeatures = [
    {
      category: "Character Features",
      items: [
        { name: "Main Character", isDone: false },
        {
          name: "Character Abilities",
          isDone: false,
          subitems: [
            { name: "Speed", isDone: false },
            { name: "Strength", isDone: false },
            { name: "Shooting", isDone: false },
            { name: "Dashing", isDone: false },
            { name: "Healing", isDone: false },
            { name: "Throwing", isDone: false },
          ],
        },
        { name: "Character Customization", isDone: false },
        { name: "Animation", isDone: false },
        { name: "Design", isDone: false },
        { name: "Character Skin Variants", isDone: false },
        { name: "Character Voice Acting", isDone: false },
        { name: "Facial Expressions", isDone: false },
      ],
    },
    {
      category: "Gameplay",
      items: [
        { name: "Jumping", isDone: false },
        { name: "Fighting", isDone: false },
        { name: "Enemies", isDone: false },
        { name: "Multiplayer", isDone: false },
        { name: "AI Behavior", isDone: false },
        { name: "Health System", isDone: false },
        { name: "Combat System", isDone: false },
        { name: "Skills/Abilities System", isDone: false },
        { name: "Physics", isDone: false },
        { name: "Movement System", isDone: false },
      ],
    },
    {
      category: "World Map",
      items: [
        { name: "Spruce Forest", isDone: false },
        { name: "Caves", isDone: false },
        { name: "Battle Arena", isDone: false },
        { name: "Desert", isDone: false },
        { name: "Zoomer Pathways", isDone: false },
        { name: "Racetrack", isDone: false },
        { name: "Night Cycle", isDone: false },
        { name: "Dynamic Weather", isDone: false },
        { name: "Day/Night Cycle", isDone: false },
        { name: "World Transitions", isDone: false },
      ],
    },
    {
      category: "Abilities",
      items: [
        { name: "Speed", isDone: false },
        { name: "Strength", isDone: false },
        { name: "Shooting", isDone: false },
        { name: "Dashing", isDone: false },
        { name: "Stealth", isDone: false },
        { name: "Telekinesis", isDone: false },
        { name: "Energy Shield", isDone: false },
      ],
    },
    {
      category: "Enemies",
      items: [
        { name: "Robot Enemies", isDone: false },
        { name: "Boss Battles", isDone: false },
        { name: "Enemy AI", isDone: false },
        { name: "Enemy Variants", isDone: false },
        { name: "Enemy Difficulty Scaling", isDone: false },
        { name: "Elite Enemies", isDone: false },
      ],
    },
    {
      category: "System",
      items: [
        { name: "Multiplayer", isDone: false },
        { name: "Dynamic Map", isDone: false },
        { name: "Weather System", isDone: false },
        { name: "Player Progression", isDone: false },
        { name: "Saving", isDone: false },
        { name: "World-Events", isDone: false },
        { name: "Achievements", isDone: false },
        { name: "Analytics", isDone: false },
      ],
    },
    {
      category: "Essentials",
      items: [
        {
          name: "Quest System",
          isDone: false,
          subitems: [{ name: "Map", isDone: false }],
        },
        {
          name: "Spawnpoints",
          isDone: false,
          subitems: [{ name: "Portals", isDone: false }],
        },
        { name: "HUD", isDone: false },
        { name: "Inventory System", isDone: false },
        { name: "Crafting System", isDone: false },
      ],
    },
    {
      category: "Vehicles",
      items: [
        { name: "Zoomer", isDone: false },
        { name: "Rover", isDone: false },
        { name: "Racetrack", isDone: false },
        { name: "Vehicle Customization", isDone: false },
      ],
    },
    {
      category: "Building",
      items: [
        { name: "Portal", isDone: false },
        { name: "Station", isDone: false },
        { name: "Base", isDone: false },
        { name: "Power Systems", isDone: false },
      ],
    },
    {
      category: "Design & Input",
      items: [
        { name: "Design", isDone: false },
        { name: "User Interface", isDone: false },
        { name: "Control Inputs", isDone: false },
        { name: "Camera Controls", isDone: false },
        { name: "Accessibility Features", isDone: false },
      ],
    },
    {
      category: "Music",
      items: [
        { name: "Background Music", isDone: false },
        { name: "Ambient Sounds", isDone: false },
        { name: "Combat Music", isDone: false },
        { name: "Character Theme Music", isDone: false },
      ],
    },
    {
      category: "Storyline",
      items: [
        { name: "The Agent's Journey", isDone: false },
        { name: "Ancient Ruins", isDone: false },
        { name: "Robot Invasion", isDone: false },
        { name: "The Final Boss", isDone: false },
        { name: "Portals to Other Worlds", isDone: false },
        { name: "Plot Twists", isDone: false },
      ],
    },
    {
      category: "Marketing",
      items: [
        { name: "Game Trailer", isDone: false },
        { name: "Social Media Strategy", isDone: false },
        { name: "Website Launch", isDone: false },
        { name: "Beta Testing", isDone: false },
        { name: "Press Kit", isDone: false },
      ],
    },
    {
      category: "Polishing",
      items: [
        { name: "Bug Fixing", isDone: false },
        { name: "Performance Optimization", isDone: false },
        { name: "UI Tweaks", isDone: false },
        { name: "Audio Balancing", isDone: false },
        { name: "Final Testing", isDone: false },
      ],
    },
  ];

  return (
    <section id="development" className="container contx conty mx-auto w-full">
      <SectionHeader
        title="In Progress"
        subtitle="Development"
        description="new upcoming features are listed here."
      />
      <div className="flex flex-wrap justify-between gap-6">
        {developmentFeatures.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="space-y-6 border rounded p-4 w-full"
          >
            <h2 className="text-2xl font-bold text-white">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300">
                  <div className="flex items-center gap-2">
                    {/* Visual indicator based on the isDone property */}
                    <span
                      className={`${
                        item.isDone ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.isDone ? "✔️" : "❌"}
                    </span>
                    {item.name}
                  </div>
                  {item.subitems && (
                    <ul className="ml-4 list-disc">
                      {item.subitems.map((subitem, subitemIndex) => (
                        <li key={subitemIndex}>
                          <div className="flex items-center gap-2">
                            <span
                              className={`${
                                subitem.isDone
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {subitem.isDone ? "✔️" : "❌"}
                            </span>
                            {subitem.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
