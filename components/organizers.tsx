import { type FC } from "react";
import Image from "next/image";

interface OrganizerCard {
  id: string;
  imageSrc: string;
  altText: string;
}

const ORGANIZERS: OrganizerCard[] = [
  {
    id: "maktabgacha",
    imageSrc: "/logo/maktabgacha.png",
    altText: "Maktabgacha Ta'lim logo",
  },
  {
    id: "agentlik",
    imageSrc: "/logo/agentlik.png",
    altText: "Agentlik logo",
  },
  {
    id: "olympic",
    imageSrc: "/logo/olympic.png",
    altText: "Olympic logo",
  },
] as const;

const OrganizerCard: FC<OrganizerCard> = ({ imageSrc, altText }) => (
  <div
    className="card bg-white rounded-lg shadow-lg w-56 h-72 md:w-64 md:h-80 flex flex-col items-center p-4 md:p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500"
    role="article"
  >
    <div className="flex flex-grow justify-center items-center">
      <Image
        alt={altText}
        src={imageSrc}
        width={200}
        height={200}
        className="object-contain"
        priority
      />
    </div>
  </div>
);

const Organizers: FC = () => {
  return (
    <section aria-labelledby="organizers-title">
      <div className="bg-[#0a192f] text-white p-6 md:p-9 mb-6 md:mb-8">
        <h1
          id="organizers-title"
          className="text-center text-3xl md:text-5xl font-semibold"
        >
          Organizers
        </h1>
      </div>

      <div
        className="flex flex-wrap justify-center items-center gap-6 py-6 md:gap-8 md:py-8"
        role="list"
        aria-label="List of organizing institutions"
      >
        {ORGANIZERS.map((organizer) => (
          <OrganizerCard key={organizer.id} {...organizer} />
        ))}
      </div>
    </section>
  );
};

export default Organizers;
