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
import sardorImage from "@/public/images/team/sardor.jpg";
import farkhodImage from "@/public/images/team/farkhod.jpg";
import sunatulloImage from "@/public/images/team/sunatullo.jpeg";
import temurImage from "@/public/images/team/temurbek.jpg";
import turaboy from "@/public/images/team/turaboy.jpg";
import sevara from "@/public/images/team/sevara.jpg";
import akrom from "@/public/images/team/akrom.jpg";
import jurabek from "@/public/images/team/jurabek.jpg";
import inom from "@/public/images/team/inom.jpg";
import oybek from "@/public/images/team/oybek.jpg";
import davron from "@/public/images/team/davron.jpg";
import murodjon from "@/public/images/murodbek.jpg";
import tamanno from "@/public/images/team/tamanno.jpg";
import otabek from "@/public/images/team/otabek.jpg";
import mirfozil from "@/public/images/team/mirfozil.jpg";
import qahramon from "@/public/images/team/qahramon.jpg";
import karim from "@/public/images/team/karim.jpg";
import nosir from "@/public/images/team/nosir.png";
import abdulla from "@/public/images/team/abdulla.png";
import navid from "@/public/images/team/navid.png";
import bahodir from "@/public/images/team/bahodir.jpg";
import xakimjon from "@/public/images/team/hakimjon.png";
import xusniddin from "@/public/images/team/xusniddin.png";
import davlat from "@/public/images/team/davlat.png";
import jasur from "@/public/images/team/jasur.jpg";
import jasur2 from "@/public/images/team/jasur2.jpg";
import jahongir from "@/public/images/team/jahongir.png";
import axadov from "@/public/images/team/axadov.png";
import akilhan from "@/public/images/team/akilhan.jpeg";
import xusanboy from "@/public/images/team/xusanboy.png";
import profile from "@/public/images/team/profile.png";
import Hasan from "@/public/images/team/Hasan.jpg";
import ruxsora from "@/public/images/team/ruxsora.webp";

interface OrganizationMember {
  id: string;
  name: string;
  location: string;
  desc?: string;
  imageUrl: StaticImageData;
  isLeader?: boolean;
}

// Group members into a single array
const members: {
  math: OrganizationMember[];
  informatics: OrganizationMember[];
  mainorg: OrganizationMember[];
} = {
  mainorg: [
    {
      id: "1",
      name: "To'raboy Shermatov",
      location:
        "Director of Science Olympiad Center and Chairman of the Organizing Committee",
      imageUrl: turaboy,
      isLeader: true,
    },
    {
      id: "2",
      name: "Sevara Shakirova ",
      location:
        "Vice Diector of the Agency of Specialized Educational Institutions and Committee member",
      imageUrl: sevara,
      isLeader: false,
    },
    {
      id: "3",
      name: "Akromxo‘ja Umarxodjayev ",
      location: "Head of the event organization Department",
      imageUrl: akrom,
      isLeader: false,
    },
    {
      id: "4",
      name: "Jo‘rabek Jangirov ",
      location: "Head of the Web & Social Networks and Content Department",
      imageUrl: jurabek,
      isLeader: false,
    },
    {
      id: "5",
      name: "Xujamov Inom",
      location: "Head of IT and technical Department",
      imageUrl: inom,
      isLeader: false,
    },
    {
      id: "6",
      name: "Usmonov Oybek",
      location: "Head of the transport and logistics Department",
      imageUrl: oybek,
      isLeader: false,
    },
    {
      id: "7",
      name: "Davron Tuxtayev ",
      location: "Exam preparation and supporting track",
      imageUrl: davron,
      isLeader: false,
    },
    {
      id: "8",
      name: "Murotjon Islamov ",
      location: "Head of the Events and public relations track",
      imageUrl: murodjon,
      isLeader: false,
    },
    {
      id: "9",
      name: "Tamanno To‘rayeva ",
      location: "Media track",
      imageUrl: tamanno,
      isLeader: false,
    },
    {
      id: "10",
      name: "Otabek Karimov ",
      location: "Technology and technical support track",
      imageUrl: otabek,
      isLeader: false,
    },
    {
      id: "11",
      name: "Dadaxanov Oqiljon",
      location: "Software engineer",
      imageUrl: akilhan,
    },
    {
      id: "12",
      name: "Ruxsora Toirova ",
      location: "Lead Specialist",
      imageUrl: ruxsora,
    },
  ],
  math: [
    {
      id: "1",
      name: "Prof. Shavkat Ayupov",
      location: "Chairman of Scientific Committee",
      desc: "President of the Academy of Sciences of Uzbekistan.",
      imageUrl: shavkatImage,
      isLeader: true,
    },
    {
      id: "11",
      name: "Navid Safaei",
      location: "Vice Chairman of Scientific Commmitte",
      desc: "Researcher at the Sharif University of Technology, Tehran, Iran.",
      imageUrl: navid,
    },
    {
      id: "2",
      name: "Azimboy Sadullayev",
      location: "Member of the Academy of Sciences of Uzbekistan",
      imageUrl: azimboyImage,
    },
    {
      id: "3",
      name: "Prof. Mirfozil Mirzaahmedov ",
      location:
        "The head teacher of the specialized school named after Muhammad al-Khorazmi",
      imageUrl: mirfozil,
    },

    {
      id: "12",
      name: "Prof. Abdulla A'zamov ",
      location: "Member of the Academy of Sciences of Uzbekistan",
      imageUrl: abdulla,
    },

    {
      id: "9",
      name: "Prof. Nosir G'anixodjayev ",
      location:
        "Head of the laboratory of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: nosir,
    },

    {
      id: "4",
      name: "Dr. Qahramon Ibodullayev ",
      location:
        "Dean of the Preschool Education Faculty of Chirchik State Pedagogical University",
      imageUrl: qahramon,
    },

    {
      id: "5",
      name: "Farxod Haydarov ",
      location:
        "Researcher of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: farhodImage,
    },

    {
      id: "7",
      name: "Dr. Karim Rahimov ",
      location:
        "Researcher of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: karim,
    },
    {
      id: "8",
      name: " Sardor Bazarbayev ",
      location: "Researcher of the National University of Uzbekistan",
      imageUrl: sardorImage,
    },
    {
      id: "6",
      name: "O'tkir Boltayev ",
      location:
        "Researcher of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: otkirImage,
    },

    {
      id: "13",
      name: "Jasur Baxromov  ",
      location: "Researcher of the National University of Uzbekistan",
      imageUrl: jasur,
    },
    {
      id: "14",
      name: "Jahongir Norboyev",
      location: "Researcher of the National University of Uzbekistan",
      imageUrl: jahongir,
    },
    {
      id: "15",
      name: "Abdushukur Axadov ",
      location: "Researcher of the National University of Uzbekistan",
      imageUrl: axadov,
    },

    {
      id: "16",
      name: "Jasurbek Imomov ",
      location: "Researcher of the National University of Uzbekistan",
      imageUrl: jasur2,
    },
    {
      id: "88",
      name: "Marinov Miroslav",
      location: "Member of Scientific Committee",
      imageUrl: profile,
    },
  ],
  informatics: [
    {
      id: "1",
      name: "Dr. Muminov Bahodir",
      location: "Chairman of Scientific Committee ",
      desc: "Doctor of technical sciences at the department 'Basics of Informatics'",
      imageUrl: bahodir,
      isLeader: true,
    },

    {
      id: "2",
      name: "Farkhod Khakimiyon ",
      location: "Founder of Olympiad Center “Yozdah Tarhi Yak” in Tajikistan",
      imageUrl: farkhodImage,
    },

    {
      id: "9",
      name: "Prof. Xakimjon Zaynidinov",
      location:
        "Head of the Department of “Artificial Intelligence” at the University",
      desc: "Doctor of technical sciences",
      imageUrl: xakimjon,
    },

    {
      id: "10",
      name: "Dr. Xusniddin Mamadaliyev",
      location:
        "Head of the Department of “Algorithmizing and Mathematical Modeling” at the University.",
      imageUrl: xusniddin,
    },

  

    {
      id: "132",
      name: "Hasan Ghulomzoda",
      location: "",
      desc: "Leading Instructor at Olympiad Center “Yozdah Tarhi Yak",
      imageUrl: Hasan,
      isLeader: false,
    },

    {
      id: "4",
      name: "Sunatullo Xojiyev",
      location: "Researcher of Tashkent University of Information Technologies",
      imageUrl: sunatulloImage,
    },
    {
      id: "5",
      name: "Temurbek Xo'jayev",
      location: " IOI 2017 and ICPC world finalist",
      imageUrl: temurImage,
    },
   
    {
      id: "7",
      name: "Davlatbek Miroqilov",
      location: "Researcher of Tashkent University of Information Technologies",
      imageUrl: davlat,
    },

    {
      id: "12",
      name: "Mansuraliyev Husanboy",
      location: "Researcher at New Uzbekistan University",
      imageUrl: xusanboy,
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
          <p className="text-sm text-gray-500">{member.desc}</p>
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

  const renderMembers = (
    category: "mainorg" | "math" | "informatics",
    title: string,
    id: string
  ) => {
    const leader = members[category].find((m) => m.isLeader);
    const others = members[category].filter((m) => !m.isLeader);

    return (
      <section id={id} className="scroll-mt-20">
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
      </section>
    );
  };

  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Organization</h1>
      </div>
      {renderMembers("mainorg", "Organizing team", "organization")}
      {renderMembers("math", "Scientific Committee (Mathematics)", "math")}
      {renderMembers(
        "informatics",
        "Scientific Committee (Informatics)",
        "informatics"
      )}
    </section>
  );
}
