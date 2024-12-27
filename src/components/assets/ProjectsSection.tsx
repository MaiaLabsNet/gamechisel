// ProjectsSection.tsx

"use client";

// Imports
import { useState, useEffect } from "react";
import ProjectCard from "@/components/assets/ProjectCard";
import SectionHeader from "../base/SectionHeader";
import { getFilteredAssets } from "@/_assets";
import { AssetsPreview } from "@/_assets"; // Import AssetsPreview type

// Interfaces
interface FilterOptions {
  specialSale: boolean;
  title: string;
  category: string;
  isFree: boolean;
}

export function ProjectsSection() {
  const [filters, setFilters] = useState<FilterOptions>({
    specialSale: false,
    title: "",
    category: "All", // Default category is "All"
    isFree: false,
  });

  const [projects, setProjects] = useState<AssetsPreview[]>([]); // Use AssetsPreview type here

  useEffect(() => {
    const filteredProjects = getFilteredAssets(filters); // This will return AssetsPreview[]
    setProjects(filteredProjects);
  }, [filters]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle category filter button click
  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  return (
    <section id="Projects" className="container contx conty w-full mx-auto">
      <SectionHeader
        title="Assets"
        subtitle="Products"
        description="Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality."
      />
      <div className="">
        {/* Filter Section */}
        <div className="mb-8 px-4">
          <div className="flex flex-wrap gap-4 justify-start items-center">
            {/* Title Search Filter */}
            <input
              type="text"
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
              placeholder="Search by title"
              className="p-2 border rounded-md w-64"
            />

            {/* Category Filter with Buttons */}
            <div className="flex flex-wrap gap-4">
              {["All", "Assets", "Scripts", "More"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filters.category === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Free Filter */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isFree"
                checked={filters.isFree}
                onChange={handleFilterChange}
                className="form-checkbox text-green-600"
              />
              Free
            </label>

            {/* Special Sale Filter */}
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="checkbox"
                name="specialSale"
                checked={filters.specialSale}
                onChange={handleFilterChange}
                className="form-checkbox text-indigo-600"
              />
              Special Sale
            </label>
          </div>
        </div>

        {/* Display Projects */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <div key={idx} className="relative">
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <p className="text-red-500 text-left pl-4">
              No projects found matching the criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
