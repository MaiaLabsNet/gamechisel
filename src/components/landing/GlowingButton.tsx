// YouTube Button

// Imports
import "./glowingbutton.css";
import React from "react";
import { youtubeLink } from "@/index";

const GlowingButton = () => {
  return (
    <div>
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <button className="glowing-btn">
          <span className="glowing-txt">
            Yo<span className="faulty-letter">u</span>Tube
          </span>
        </button>
      </a>
    </div>
  );
};

export default GlowingButton;
