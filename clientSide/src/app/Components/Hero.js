"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "./01.jpg";
import image2 from "./02.webp";
import image3 from "./03.webp";
import image4 from "./04.webp";
import image5 from "./05.webp";
import image6 from "./06.webp";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Discover Hidden Gems",
    description: "Uncover unique destinations and hidden treasures.",
  },
  {
    id: 2,
    image: image2,
    title: "Embark on Epic Adventures",
    description: "Set off on thrilling and unforgettable journeys.",
  },
  {
    id: 3,
    image: image3,
    title: "Explore the World's Wonders",
    description: "Experience awe-inspiring sights and natural wonders.",
  },
  {
    id: 4,
    image: image4,
    title: "Immerse Yourself in Culture",
    description: "Dive into diverse cultures and rich heritage.",
  },
  {
    id: 5,
    image: image5,
    title: "Relax and Rejuvenate",
    description: "Find serenity and relaxation in picturesque settings.",
  },
  {
    id: 6,
    image: image6,
    title: "Adventure Beckons",
    description: "Answer the call of thrilling adventures around the globe.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let sliderInterval;
    if (autoPlay) {
      sliderInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 4500);
    }
    return () => clearInterval(sliderInterval);
  }, [autoPlay]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 4000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-5 right-5 text-sm px-2 z-10 text-white">
        <span>{currentIndex + 1}</span>/<span>{slides.length}</span>
      </div>

      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-25">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-12 mx-auto pb-2 z-10 absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-6 h-6 rounded-full ${
              currentIndex === index ? "bg-purple-800" : "bg-purple-400"
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={() =>
          handleSlideChange((currentIndex - 1 + slides.length) % slides.length)
        }
        className="absolute left-14 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 text-gray-500 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => handleSlideChange((currentIndex + 1) % slides.length)}
        className="absolute right-14 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-8 h-8 text-gray-500 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;
