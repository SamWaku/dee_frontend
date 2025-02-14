import React, { useState, useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const images = [
  "/assets/edited/Bouqeut1.png",
  "/assets/edited/Bouqeut2.png",
  "/assets/edited/Bouqeut3.png",
  // "/assets/edited/Bouqeut4.png", // Add more images if needed
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = index * scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.clientWidth
      );
      setCurrentIndex(index);
    }
  };

  return (
    <div className="md:mx-12 md:py-10 md:space-y-10">
      {/* Header Section */}
      <div className="text-[#524d41] md:grid md:grid-cols-2">
        <div className="md:space-y-2">
          <p className="uppercase">Type of Bouquet</p>
          <p className="md:text-4xl md:font-semibold">
            Find your perfect <br />
            flower bouquet
          </p>
        </div>
        <div className="md:flex-row md:space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            libero debitis, harum eos ad dolor dolores eum dolore nemo saepe.
          </p>
          <div className="md:grid md:grid-cols-2">
            <button className="text-center border md:p-2 bg-[#504d43] text-white font-light">
              Show All
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Images */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full snap-center"
            >
              {/* Label */}
              <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 rounded">
                <p>Bouquet {index + 1}</p>
              </div>

              {/* Image */}
              <Image
                className="rounded-t-full"
                src={img}
                alt={`Bouquet ${index + 1}`}
                width={320}
                height={400}
                priority
              />

              {/* Shop Now Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <p className="uppercase">Shop Now</p>
                <MoveRight width={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#504d43] w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
