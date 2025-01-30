"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { OrganizationCard } from "../../components/ui/organization-card";
import profile from "@/public/images/developer.jpg";

const members = [
  {
    id: "1",
    name: "Leader Name",
    location: "Uzbekistan",
    imageUrl: { profile },
    isLeader: true,
  },
  {
    id: "2",
    name: "Member a",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
  {
    id: "3",
    name: "Member r",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
  {
    id: "4",
    name: "Member b",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
  {
    id: "5",
    name: "Member q",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
  {
    id: "6",
    name: "Member w",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
  {
    id: "6",
    name: "Member q",
    location: "Uzbekistan",
    imageUrl: { profile },
  },
];

export default function OrganizationGrid() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {members.map((member) => (
            <OrganizationCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
