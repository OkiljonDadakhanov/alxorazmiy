"use client";

import { useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import shavkat from "@/public/images/team/shavkat.jpg";
import azimboy from "@/public/images/team/azimboy.png";
import farhod from "@/public/images/team/farhod.jpg";
import otkir from "@/public/images/team/utkir.jpg";

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
    name: "Leader Name",
    location: "Uzbekistan",
    imageUrl: shavkat,
    isLeader: true,
  },
  {
    id: "2",
    name: "Member One",
    location: "Uzbekistan",
    imageUrl: azimboy,
  },
  {
    id: "3",
    name: "Member Two",
    location: "Uzbekistan",
    imageUrl: farhod,
  },
  {
    id: "4",
    name: "Member Three",
    location: "Uzbekistan",
    imageUrl: otkir,
  },
  {
    id: "5",
    name: "Member Three",
    location: "Uzbekistan",
    imageUrl: otkir,
  },
  {
    id: "6",
    name: "Member Three",
    location: "Uzbekistan",
    imageUrl: otkir,
  },
  {
    id: "7",
    name: "Member Three",
    location: "Uzbekistan",
    imageUrl: otkir,
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
    </section>
  );
}
