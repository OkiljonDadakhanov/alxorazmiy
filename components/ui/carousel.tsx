"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = [
  "/images/buhoro.jpg",
  "/images/samarqand.jpg",
  "/images/tog.jpg",
  "/images/toshkent.jpeg",
  "/images/xiva.jpeg",
];

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const intervalId = setInterval(autoplay, 4000); // Autoplay every 4 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [emblaApi]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div
              className="relative flex-[0_0_100%] w-full h-full overflow-hidden"
              key={index}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
