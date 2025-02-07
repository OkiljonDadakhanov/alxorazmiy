"use client";

import { useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing team images
import shavkatImage from "@/public/images/team/shavkat.jpg";
import azimboyImage from "@/public/images/team/azimboy.png";
import farhodImage from "@/public/images/team/farhod.jpg";
import otkirImage from "@/public/images/team/utkir.jpg";
import jasurImage from "@/public/images/team/jasur.jpg";
import jasurbeImage from "@/public/images/team/jasur2.jpg";
import sardorImage from "@/public/images/team/sardor.jpg";
import eljakimImage from "@/public/images/team/eljakim.jpg";
import farkhodImage from "@/public/images/team/farkhod.jpg";
import ahmedImage from "@/public/images/team/ahmed.jpg";
import sunatulloImage from "@/public/images/team/sunatullo.jpeg";
import temurImage from "@/public/images/team/temurbek.jpg";
import dilshodImage from "@/public/images/team/dilshod.webp";
import kimImage from "@/public/images/team/kim.jpg";

interface OrganizationMember {
  id: string;
  name: string;
  location: string;
  imageUrl: StaticImageData;
  isLeader?: boolean;
}

// Group members into a single array
const members: {
  math: OrganizationMember[];
  informatics: OrganizationMember[];
} = {
  math: [
    {
      id: "1",
      name: "Shavkat Ayupov",
      location: "Chairman of Scientific Committee",
      imageUrl: shavkatImage,
      isLeader: true,
    },
    {
      id: "2",
      name: "Azimboy Sadullayev",
      location: "Member",
      imageUrl: azimboyImage,
    },
    {
      id: "3",
      name: "Haydarov Farxod",
      location: "Uzbekistan",
      imageUrl: farhodImage,
    },
    {
      id: "4",
      name: "Boltayev O`tkir",
      location: "Uzbekistan",
      imageUrl: otkirImage,
    },
    {
      id: "5",
      name: "Baxromov Jasur",
      location: "Uzbekistan",
      imageUrl: jasurImage,
    },
    {
      id: "6",
      name: "Imomov Jasurbek",
      location: "Uzbekistan",
      imageUrl: jasurbeImage,
    },
    {
      id: "7",
      name: "Bazarbayev Sardor",
      location: "Uzbekistan",
      imageUrl: sardorImage,
    },
  ],
  informatics: [
    {
      id: "1",
      name: "Eljakim Schrijvers",
      location: "Netherlands",
      imageUrl: eljakimImage,
      isLeader: true,
    },
    {
      id: "2",
      name: "Khakimiyon Farkhod",
      location: "Member",
      imageUrl: farkhodImage,
    },
    { id: "3", name: "Ahmed Khaled", location: "Member", imageUrl: ahmedImage },
    {
      id: "4",
      name: "Sunatullo Xojiyev",
      location: "Member",
      imageUrl: sunatulloImage,
    },
    {
      id: "5",
      name: "Temurbek Xo'jayev",
      location: "Member",
      imageUrl: temurImage,
    },
    {
      id: "6",
      name: "Dilshodbek Xo'jayev",
      location: "Member",
      imageUrl: dilshodImage,
    },
    {
      id: "7",
      name: "Svyatoslov Kim",
      location: "Member",
      imageUrl: kimImage,
    },
  ],
};

function OrganizationCard({ member }: { member: OrganizationMember }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg ${
        member.isLeader ? "md:col-span-3" : ""
      }`}
    >
      <div className="p-6 flex flex-col items-center space-y-4">
        <div
          className={`relative overflow-hidden rounded-full ${
            member.isLeader ? "h-48 w-48" : "h-32 w-32"
          }`}
        >
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function OrganizationPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const renderMembers = (category: "math" | "informatics", title: string) => {
    const leader = members[category].find((m) => m.isLeader);
    const others = members[category].filter((m) => !m.isLeader);

    return (
      <>
        <div className="organizing__team text-center mb-8">
          <h2 className="text-5xl">{title}</h2>
        </div>
        <div className="container mx-auto px-4 py-12 w-[80%]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {leader && (
              <div key={leader.id} data-aos="fade-up" className="md:col-span-3">
                <OrganizationCard member={leader} />
              </div>
            )}
            {others.map((member) => (
              <div key={member.id} data-aos="fade-up">
                <OrganizationCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Organization</h1>
      </div>
      {renderMembers("math", "Scientific Committee (Mathematics)")}
      {renderMembers("informatics", "Scientific Committee (Informatics)")}
    </section>
  );
}
