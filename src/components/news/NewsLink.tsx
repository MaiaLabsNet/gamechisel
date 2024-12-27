// NewsLink.tsx

// Client
"use client";

// Imports
import React from "react";

// Interface
interface NewsContent {
  link: string;
  category: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  smallDescription: string;
}

const NewsLink = ({ content }: { content: NewsContent }) => {
  return (
    <article className="news-item flex flex-col md:flex-row gap-6 my-12 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg max-w-[860px] w-full">
      {/* Article Link */}
      <a
        href={content.link}
        className="block relative w-full md:w-6/12 lg:w-7/12 order-1 md:order-1"
      >
        {/* Blog Type */}
        <div className="blog-type absolute top-2 left-4 text-sm font-semibold text-gray-800 bg-yellow-200 py-1 px-2 rounded-lg">
          {content.category}
        </div>
        {/* Background Image */}
        <div
          className="bg-image bg-cover bg-center rounded-lg overflow-hidden w-full h-0 pb-[56.25%] mt-2 transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${content.thumbnail})`,
          }}
          title={content.title}
        ></div>
      </a>

      {/* Text Section */}
      <div className="entry_txt flex flex-col justify-center text-white mt-4 md:mt-0 md:w-6/12 lg:w-5/12 order-2 md:order-2 px-4 transition-all duration-300 ease-in-out hover:text-gray-400">
        {/* Author */}
        <div className="author text-sm font-medium text-gray-400">
          {content.author} /
        </div>
        {/* Date */}
        <div className="date text-xs text-gray-400 my-2">{content.date}</div>
        {/* Article Title and Link */}
        <a href={content.link} className="hover:text-gray-400">
          <h3 className="text-2xl font-bold mb-2 leading-tight text-gray-400">
            {content.title}
          </h3>
          <p className="summary text-sm text-gray-300 mb-4">
            {content.smallDescription}
          </p>
        </a>
      </div>
    </article>
  );
};

export default NewsLink;
