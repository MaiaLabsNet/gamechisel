"use client";

import React, { useState } from "react";
import Image from "next/image"; // Keep import for Image

// Interface
export type AssetProps = {
  title: string;
  author: string;
  authorProfile: string;
  price: string;
  originalPrice: string;
  discount: string;
  views: number;
  licenseType: string;
  refundPolicy: string;
  media: { type: "image" | "video"; src: string }[];
  details: { type: "header" | "paragraph"; content?: string }[];
  reviews: { author: string; rating: number; comment: string; date: string }[];
};

const AssetPage = ({
  title,
  author,
  authorProfile,
  price,
  originalPrice,
  discount,
  views,
  licenseType,
  refundPolicy,
  media,
  details,
  reviews,
}: AssetProps) => {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);

  return (
    <div className="max-w-7xl mx-auto pt-6 text-gray-100">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Display */}
        <div className="w-full md:w-2/3">
          <div className="relative pb-[56.25%] h-0">
            {selectedMedia.type === "video" ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src={selectedMedia.src}
                title={`${title} Video`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                src={selectedMedia.src}
                alt="Selected Media"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md object-cover"
                layout="fill"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedMedia(item)}
                className={`w-24 h-16 rounded-md border ${
                  selectedMedia.src === item.src
                    ? "ring-2 ring-yellow-500"
                    : "hover:ring-2 hover:ring-gray-400"
                } transition`}
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.src}
                      alt="Video Thumbnail"
                      className="object-cover w-full h-full rounded-md"
                      width={96}
                      height={64}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                      ▶
                    </span>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                    width={96}
                    height={64}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/3 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-sm text-gray-400">by</p>
              <a
                href={authorProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-400 hover:underline"
              >
                {author}
              </a>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-red-500">{price}</p>
            <p className="text-sm line-through text-gray-400">
              {originalPrice}
            </p>
            <p className="text-xs text-green-500">{discount} OFF</p>
          </div>

          <div className="text-sm text-gray-400 space-y-2">
            <p>{views} views in the past week</p>
            <p>License type: {licenseType}</p>
            <p>Refund policy: {refundPolicy}</p>
          </div>

          <button className="w-full border bg-gray-900 border-white text-white py-3 rounded-md shadow-md hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Dynamic Details Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Details</h2>
        <div className="text-gray-200 mt-4 space-y-4">
          {details.map((detail, index) => {
            if (detail.type === "header") {
              return (
                <h3 key={index} className="text-lg font-semibold">
                  {detail.content}
                </h3>
              );
            }
            if (detail.type === "paragraph") {
              return <p key={index}>{detail.content}</p>;
            }
            return null;
          })}
        </div>
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white">Reviews</h2>
          <div className="space-y-4 mt-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border border-gray-700 p-4 rounded-md shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-white">
                    {review.author}
                  </p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
                <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                <p className="text-gray-300 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetPage;
