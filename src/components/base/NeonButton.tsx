// NeonButton.tsx

// Imports
import React from "react";
import "./NeonStyleButton.css";

interface NeonButtonProps {
  href: string;
  text: string;
  variant?: "1" | "2" | "3"; // Allow selection of button style
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  href,
  text,
  variant = "1",
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`neon-button neon-button__${variant} font-bold ${className}`}
    >
      {text}
    </a>
  );
};

export default NeonButton;
