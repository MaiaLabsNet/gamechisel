// DevelopmentSection.tsx

// Imports
import SectionHeader from "../base/SectionHeader";

export default function Development() {
  const developmentFeatures = [
    {
      category: "Character Features",
      items: [
        { name: "Main Character", isDone: false },
        { name: "Character Abilities", isDone: false },
        { name: "Animation", isDone: false },
        { name: "Design", isDone: false },
        { name: "Character Voice Acting", isDone: false },
      ],
    },
    {
      category: "Gameplay",
      items: [
        { name: "Movement System", isDone: false },
        { name: "Fighting", isDone: false },
        { name: "Enemies", isDone: false },
        { name: "Multiplayer", isDone: false },
        { name: "AI Behavior", isDone: false },
        { name: "Health System", isDone: false },
        { name: "Combat System", isDone: false },
        { name: "Skills/Abilities System", isDone: false },
        { name: "Physics", isDone: false },
      ],
    },
    {
      category: "Abilities",
      items: [
        { name: "Eletric Speed", isDone: false },
        { name: "Infused Strength", isDone: false },
        { name: "Collectable Shooting", isDone: false },
        { name: "Loaded Dashing", isDone: false },
        { name: "Timed Shield", isDone: false },
        { name: "Collected Health", isDone: false },
      ],
    },
    {
      category: "Abilities",
      items: [
        { name: "Idle Stance", isDone: false },
        { name: "Walking", isDone: false },
        { name: "Running", isDone: false },
        { name: "Sprinting", isDone: false },
        { name: "Climbing", isDone: false },
        { name: "Sliding", isDone: false },
        { name: "Jumping", isDone: false },
        { name: "Double Jump", isDone: false },
        { name: "Wall Jump", isDone: false },
        { name: "Roll", isDone: false },
        { name: "Dodging", isDone: false },
        { name: "Swimming", isDone: false },
        { name: "Gliding", isDone: false },
        { name: "Hovering", isDone: false },
        { name: "Combat Stance", isDone: false },
        { name: "Melee Attack", isDone: false },
        { name: "Ranged Attack", isDone: false },
        { name: "Throwing", isDone: false },
        { name: "Shield Blocking", isDone: false },
        { name: "Parry", isDone: false },
        { name: "Stealth", isDone: false },
        { name: "Energy Charging", isDone: false },
        { name: "Special Ability: Spirit Guide", isDone: false },
        { name: "Special Ability: Eco Powers", isDone: false },
        { name: "Timed Dash", isDone: false },
        { name: "Healing", isDone: false },
        { name: "Environment Interaction", isDone: false },
        { name: "Shooting", isDone: false },
        { name: "Heavy Attack", isDone: false },
        { name: "Focus Aim", isDone: false },
        { name: "Charged Shot", isDone: false },
        { name: "Rot Attack", isDone: false }
      ]
    },    
    {
      category: "Enemies",
      items: [
        { name: "Simple Robot", isDone: false },
        { name: "Flying Robot", isDone: false },
        { name: "Heavy Robot", isDone: false },
        { name: "Mini Robot", isDone: false },
        { name: "Giant Robot", isDone: false },
        { name: "Spin Robot", isDone: false },
        { name: "Invisible Robot", isDone: false },
        { name: "Spider Robot", isDone: false },
        { name: "Jumper Robot", isDone: false },
        { name: "Roller Robot", isDone: false },
        { name: "Shielded Robot", isDone: false },
        { name: "Fog Robot", isDone: false },
        { name: "Poisonous Robot", isDone: false },
        { name: "Creeper Robot", isDone: false },
        { name: "Healing Robot", isDone: false },
        { name: "Magnet Robot", isDone: false },
        { name: "Laser Robot", isDone: false },
        { name: "Fire Robot", isDone: false },
        { name: "Crawler Robot", isDone: false },
        { name: "Shiny Robot", isDone: false },
        { name: "Bomber Robot", isDone: false },
        { name: "Spawner Robot", isDone: false },
        { name: "Enemy AI", isDone: false },
        { name: "Elite Enemies", isDone: false },
        { name: "Boss Robot", isDone: false },
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
      category: "Collectables",
      items: [
        { name: "Thermal Cores", isDone: false },
        { name: "Magnetic Shards", isDone: false },
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
        { name: "Minimal HUD", isDone: false },
        { name: "Inventory System", isDone: false },
        { name: "Crafting System", isDone: false },
      ],
    },
    {
      category: "Locations",
      items: [
        {
          name: "Hub",
          isDone: false,
          level: "Level 0",
          subitems: [
            { name: "Space Station", isDone: false },
            { name: "Hangar", isDone: false },
            { name: "Command Center", isDone: false },
            { name: "Portal Room", isDone: false },
            { name: "Zoomer Racetrack", isDone: false },
            { name: "Training Grounds", isDone: false },
            { name: "Trophy Room", isDone: false },
            { name: "Secret Room", isDone: false },
          ],
        },
        {
          name: "Coast Base",
          isDone: false,
          level: "Level 1",
          subitems: [
            { name: "Main Base", isDone: false },
            { name: "Beach Outskirts", isDone: false },
            { name: "Underground Base", isDone: false },
            { name: "Ship Wreckage", isDone: false },
            { name: "Swamp", isDone: false },
            { name: "Zoomer Waves", isDone: false },
            { name: "Connection Zoomer Racetrack", isDone: false },
          ],
        },
        {
          name: "Electricity Station",
          isDone: false,
          level: "Level 2",
          subitems: [
            { name: "Generator Core", isDone: false },
            { name: "Control Tower", isDone: false },
            { name: "Power Plant", isDone: false },
            { name: "Power Bridge", isDone: false },
            { name: "Spruce Forest", isDone: false },
            { name: "Dead Holes", isDone: false },
            { name: "Zoomer fields", isDone: false },
            { name: "Connection Zoomer Racetrack", isDone: false },
          ],
        },
      ],
    },
    {
      category: "Vehicles",
      items: [
        { name: "Zoomer", isDone: false },
        { name: "Rover", isDone: false },
        { name: "Racetrack", isDone: false },
      ],
    },
    {
      category: "Building",
      items: [
        { name: "Portal", isDone: false },
        { name: "Station", isDone: false },
        { name: "Base", isDone: false },
        { name: "Power Systems", isDone: false },
        { name: "Items", isDone: false },
        { name: "Weapons", isDone: false },
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
