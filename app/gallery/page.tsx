"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "/gallery/1.JPG", width: 600, height: 400 },
  { src: "/gallery/2.JPG", width: 600, height: 400 },
  { src: "/gallery/3.JPG", width: 600, height: 400 },
  { src: "/gallery/4.JPG", width: 600, height: 400 },
  { src: "/gallery/10.JPG", width: 600, height: 400 },
  { src: "/gallery/14.JPG", width: 600, height: 400 },
];

const photos2 = [
  { src: "/gallery/5.JPG", width: 800, height: 600 },
  { src: "/gallery/6.JPG", width: 800, height: 600 },
  { src: "/gallery/7.JPG", width: 800, height: 600 },
  { src: "/gallery/8.JPG", width: 800, height: 600 },
  { src: "/gallery/9.JPG", width: 800, height: 600 },
  { src: "/gallery/15.JPG", width: 600, height: 400 },
];

const photos3 = [
  { src: "/gallery/11.JPG", width: 800, height: 600 },
  { src: "/gallery/22.JPG", width: 800, height: 600 },
  { src: "/gallery/33.JPG", width: 800, height: 600 },
  { src: "/gallery/44.JPG", width: 800, height: 600 },
  { src: "/gallery/55.JPG", width: 800, height: 600 },
  { src: "/gallery/111.JPG", width: 800, height: 600 },
];

const photos4 = [
  { src: "/gallery/66.JPG", width: 800, height: 600 },
  { src: "/gallery/77.JPG", width: 800, height: 600 },
  { src: "/gallery/88.JPG", width: 800, height: 600 },
  { src: "/gallery/99.JPG", width: 800, height: 600 },
  { src: "/gallery/222.JPG", width: 800, height: 600 },
  { src: "/gallery/11.JPG", width: 800, height: 600 },
];

export default function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Gallery</h1>
      </div>

      <div className="mx-auto mt-8 w-[80%] space-y-12">
        <h1 className="text-center font-semibold text-4xl md:text-5xl lg:text-4xl text-gray-800 mt-8 mb-4 leading-snug">
          Scenes from Al-Khwarizmi Olympiad 2024
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-right"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-300 shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`Gallery Image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Al-Khwarizmi 2024</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-left"
        >
          {photos2.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-300 shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`Gallery Image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Al-Khwarizmi 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 w-[80%] space-y-12">
        <h1 className="text-center font-semibold text-4xl md:text-5xl lg:text-4xl text-gray-800 mt-8 mb-4 leading-snug mt-5">
          Scenes from Muhammad al-Bukhari Olympiad 2024
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up-right"
        >
          {photos4.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-300 shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`Gallery Image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-medium">
                  Muhammad al-Bukhari 2024
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          data-aos="fade-up-left"
        >
          {photos3.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-300 shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`Gallery Image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-medium">
                  Muhammad al-Bukhari 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
