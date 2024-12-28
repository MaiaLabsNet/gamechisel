// SkillsSection.tsx

// Imports
import React from "react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "./SkillCard";
import SectionHeader from "../base/SectionHeader";

// Tailored skill data
const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Stylized 3D Assets",
    children:
      "We design and create high-quality, stylized 3D assets, giving our game a unique and visually captivating aesthetic.",
  },
  {
    icon: FingerPrintIcon,
    title: "Scene Building",
    children:
      "Crafting immersive and dynamic game environments that bring our world to life, from serene landscapes to bustling towns.",
  },
  {
    icon: SwatchIcon,
    title: "Asset Marketplace",
    children:
      "Offering our custom 3D assets for developers and creators, helping others bring their own projects to life.",
  },
  {
    icon: HashtagIcon,
    title: "Community-Driven Development",
    children:
      "We actively involve our community in the game's development process, incorporating feedback and ideas to shape the game together.",
  },
  {
    icon: EyeIcon,
    title: "Game Development with Unity",
    children:
      "Developing the game using Unity, we focus on gameplay mechanics, interactivity, and seamless player experiences.",
  },
  {
    icon: DocumentTextIcon,
    title: "Creative Video Content",
    children:
      "Producing engaging video content to showcase our game's development journey, updates, and behind-the-scenes action.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container contx conty">
      <SectionHeader
        title="What we do"
        subtitle="Skills"
        description="What do we produce here? Here are some of the skills to be offered."
      />

      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title}>
            {skill.children}
          </SkillCard>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
