// SkillCard.tsx

import React from "react";

// Skill Card Type
interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  children: string;
}

// Imports
export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="skill-card-title">{title}</h3>
      <p className="skill-card-description">{children}</p>{" "}
    </div>
  );
}

export default SkillCard;
