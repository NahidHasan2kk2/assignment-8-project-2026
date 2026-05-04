"use client";
import React, { useState } from "react";

const slides = [
  {
    title: "Summer Sale 50% OFF",
    subtitle: "Limited time offer",
    bg: "bg-blue-200",
  },
  {
    title: "Hot Deals 🔥",
    subtitle: "Best prices today",
    bg: "bg-green-200",
  },
  {
    title: "New Arrivals",
    subtitle: "Check new collection",
    bg: "bg-yellow-200",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  return (
    <header
      className={`w-full h-[40vh] flex items-center container mx-auto justify-center ${slides[current].bg}`}
    >
      <div className="text-center px-4">

        <h1 className="text-2xl sm:text-4xl font-bold text-black mb-3">
          {slides[current].title}
        </h1>

        <p className="text-sm sm:text-lg text-gray-700 mb-5">
          {slides[current].subtitle}
        </p>

        <button className="bg-black text-white animate__animated animate__bounce px-5 py-2 rounded">
          Shop Now
        </button>

        {/* Simple dots only */}
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-5 h-5 rounded-full cursor-pointer ${i === current ? "bg-black" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;