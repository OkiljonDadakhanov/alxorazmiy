"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import sardor from "@/public/images/team/sardor.jpg";
import shavkat from "@/public/images/team/shavkat.jpg";
import utkir from "@/public/images/team/utkir.jpg";
import farhod from "@/public/images/team/farhod.jpg";
import azimboy from "@/public/images/team/azimboy.png";
import jasur from "@/public/images/team/jasur.jpg";
import jasur2 from "@/public/images/team/jasur2.jpg";
import elkakim from "@/public/images/team/eljakim.jpg";
import farkhod from "@/public/images/team/farkhod.jpg";
import ahmed from "@/public/images/team/ahmed.jpg";
import sunatullo from "@/public/images/team/sunatullo.jpeg";
import temurbek from "@/public/images/team/temurbek.jpg";
import kim from "@/public/images/team/kim.jpg";
import dilshod from "@/public/images/team/dilshod.webp";

const cards = [
  {
    image: shavkat,
    title: "Shavkat Ayupov",
    text: "Uzbekistan",
  },
  {
    image: utkir,
    title: "Utkir Boltayev",
    text: "Uzbekistan",
  },
  {
    image: azimboy,
    title: "Azimboy Sadullayev",
    text: "Uzbekistan",
  },
  {
    image: farhod,
    title: "Farhod Haydarov",
    text: "Uzbekistan",
  },
  {
    image: jasur,
    title: "Jasur Bahromov",
    text: "Uzbekistan",
  },
  {
    image: jasur2,
    title: "Jasur Imomov",
    text: "Uzbekistan",
  },
  {
    image: sardor,
    title: "Sardor Bazarbaev",
    text: "Uzbekistan",
  },
];

const cards2 = [
  {
    image: elkakim,
    title: "Eljakim Elkakim",
    text: "Netherlands",
  },
  {
    image: farkhod,
    title: "Farkhod Khakimiyon",
    text: "Tajikistan",
  },

  {
    image: ahmed,
    title: "Ahmed Khaled",
    text: "Egypt",
  },

  {
    image: sunatullo,
    title: "Sunatullo Xojiyev",
    text: "Uzbekistan",
  },

  {
    image: temurbek,
    title: "Temurbek Xo'jayev",
    text: "Uzbekistan",
  },

  {
    image: dilshod,
    title: "Dilshodbek Xo'jayev",
    text: "Uzbekistan",
  },
  {
    image: kim,
    title: "Svyatoslav Kim",
    text: "Uzbekistan",
  },
];

// Props interface for Card component
interface CardProps {
  image: string | StaticImageData;
  title: string;
  text: string;
}

// Card component
const Card: FC<CardProps> = ({ image, title, text }) => {
  return (
    <div
      className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4 h-72 max-w-xs mx-auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Link href="#" className="flex flex-col h-full">
        <div className="relative mb-4">
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className="w-[150px] h-[150px] object-cover rounded-full mx-auto"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm text-center flex-grow">{text}</p>
      </Link>
    </div>
  );
};

// Main component to render the custom staggered layout
const CardList: FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center space-y-6">
        {" "}
        {/* Space between rows */}
        {/* First row */}
        <div className="flex space-x-6">
          {" "}
          {/* Space between cards */}
          <Card {...cards[0]} />
        </div>
        {/* Second row */}
        <div className="flex space-x-9">
          {" "}
          {/* Space between cards */}
          <Card {...cards[1]} />
          <Card {...cards[2]} />
          <Card {...cards[3]} />
        </div>
        {/* Third row */}
        <div className="flex space-x-9">
          {" "}
          {/* Space between cards */}
          <Card {...cards[3]} />
          <Card {...cards[4]} />
          <Card {...cards[5]} />
        </div>
        {/* Fourth row */}
      </div>

      <div className="organizing__team text-center  mb-8 mt-8">
        <h2 className="text-5xl">Scientific Committee (Informatics)</h2>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {" "}
        {/* Space between rows */}
        {/* First row */}
        <div className="flex space-x-6">
          {" "}
          {/* Space between cards */}
          <Card {...cards2[0]} />
        </div>
        {/* Second row */}
        <div className="flex space-x-9">
          {" "}
          {/* Space between cards */}
          <Card {...cards2[1]} />
          <Card {...cards2[2]} />
          <Card {...cards2[3]} />
        </div>
        {/* Third row */}
        <div className="flex space-x-9">
          {" "}
          {/* Space between cards */}
          <Card {...cards2[4]} />
          <Card {...cards2[5]} />
          <Card {...cards2[6]} />
        </div>
        {/* Fourth row */}
      </div>
    </main>
  );
};

export default CardList;
