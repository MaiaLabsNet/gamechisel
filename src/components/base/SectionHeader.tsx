// SectionHeader.tsx

import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="mb-10 text-center">
      <h3 className="text-gray-100 text-lg font-semibold uppercase">
        {subtitle}
      </h3>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      {description && (
        <p className="text-lg font-normal text-gray-400 mx-auto w-full px-4 lg:w-1/2 py-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
