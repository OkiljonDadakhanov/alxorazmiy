"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import developer from "@/public/images/developer.jpg";

const cards = [
  {
    image: developer,
    title: "Prof. Dr. Hasan MANDAL",
    text: "Director of TÜBİTAK Department of Science Fellowships and Grant Programs (BİDEB)",
  },
  {
    image: developer,
    title: "Dr. Hatice DAĞLIOĞLU",
    text: "TÜBİTALorem ipsum dolor sit amet, consectetur adipiscing Kssssssssssssssssssssss",
  },
  {
    image: developer,
    title: "Austria",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: developer,
    title: "Czechia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: developer,
    title: "Finland",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: developer,
    title: "Norway",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4 h-72 max-w-xs mx-auto">
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

// Main component to render the list of cards
const CardList: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardList;
