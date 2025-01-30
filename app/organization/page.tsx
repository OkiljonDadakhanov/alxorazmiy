"use client";

import { useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import shavkat from "@/public/images/team/shavkat.jpg";
import azimboy from "@/public/images/team/azimboy.png";
import farhod from "@/public/images/team/farhod.jpg";
import otkir from "@/public/images/team/utkir.jpg";
import jasur from "@/public/images/team/jasur.jpg";
import jasurbe from "@/public/images/team/jasur2.jpg";
import sardor from "@/public/images/team/sardor.jpg";
import eljakim from "@/public/images/team/eljakim.jpg";
import farkhod from "@/public/images/team/farkhod.jpg";
import ahmed from "@/public/images/team/ahmed.jpg";
import sunatullo from "@/public/images/team/sunatullo.jpeg";
import temur from "@/public/images/team/temurbek.jpg";
import dilshod from "@/public/images/team/dilshod.webp";
import kim from "@/public/images/team/kim.jpg";

interface OrganizationMember {
  id: string;
  name: string;
  location: string;
  imageUrl: string | StaticImageData;
  isLeader?: boolean;
}

const members: OrganizationMember[] = [
  {
    id: "1",
    name: "Shavkat Ayupov",
    location: "Uzbekistan",
    imageUrl: shavkat,
    isLeader: true,
  },
  {
    id: "2",
    name: "Azimboy Sadullayev",
    location: "Uzbekistan",
    imageUrl: azimboy,
  },
  {
    id: "3",
    name: "Haydarov Farxod",
    location: "Uzbekistan",
    imageUrl: farhod,
  },
  {
    id: "4",
    name: "Boltayev O`tkir",
    location: "Uzbekistan",
    imageUrl: otkir,
  },
  {
    id: "5",
    name: "Baxromov Jasur",
    location: "Uzbekistan",
    imageUrl: jasur,
  },
  {
    id: "6",
    name: "Imomov Jasurbek",
    location: "Uzbekistan",
    imageUrl: jasurbe,
  },
  {
    id: "7",
    name: "Bazarbayev Sardor",
    location: "Uzbekistan",
    imageUrl: sardor,
  },
];

const members2: OrganizationMember[] = [
  {
    id: "1",
    name: "Eljakim Schrijvers",
    location: "Netherlands",
    imageUrl: eljakim,
    isLeader: true,
  },
  {
    id: "2",
    name: "Khakimiyon Farkhod",
    location: "Tajikistan",
    imageUrl: farkhod,
  },
  {
    id: "3",
    name: "Ahmed Khaled",
    location: "Egypt",
    imageUrl: ahmed,
  },
  {
    id: "4",
    name: "Sunatullo Xojiyev",
    location: "Uzbekistan",
    imageUrl: sunatullo,
  },
  {
    id: "5",
    name: "Temurbek Xo'jayev",
    location: "Uzbekistan",
    imageUrl: temur,
  },
  {
    id: "6",
    name: "Dilshodbek Xo'jayev",
    location: "Uzbekistan",
    imageUrl: dilshod,
  },
  {
    id: "7",
    name: "Svyatoslov Kim",
    location: "Uzbekistan",
    imageUrl: kim,
  },
];

function OrganizationCard({ member }: { member: OrganizationMember }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg ${
        member.isLeader ? "md:col-span-3" : ""
      }`}
    >
      <div className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div
            className={`relative overflow-hidden rounded-full ${
              member.isLeader ? "h-48 w-48" : "h-32 w-32"
            }`}
          >
            <Image
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrganizationPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const leader = members.find((member) => member.isLeader);
  const otherMembers = members.filter((member) => !member.isLeader);

  const informaticsLeader = members2.find((member) => member.isLeader);
  const informaticsOtherMembers = members2.filter((member) => !member.isLeader);

  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Organization</h1>
      </div>

      <div className="organizing__team text-center mb-8">
        <h2 className="text-5xl">Scientific Committee (Mathematics)</h2>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {leader && (
            <div key={leader.id} data-aos="fade-up" className="md:col-span-3">
              <OrganizationCard member={leader} />
            </div>
          )}
          {otherMembers.map((member) => (
            <div key={member.id} data-aos="fade-up">
              <OrganizationCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <div className="organizing__team text-center mb-8">
        <h2 className="text-5xl">Scientific Committee (Informatics)</h2>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {informaticsLeader && (
            <div
              key={informaticsLeader.id}
              data-aos="fade-up"
              className="md:col-span-3"
            >
              <OrganizationCard member={informaticsLeader} />
            </div>
          )}
          {informaticsOtherMembers.map((member) => (
            <div key={member.id} data-aos="fade-up">
              <OrganizationCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
