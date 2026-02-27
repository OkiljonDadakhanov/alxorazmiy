"use client";

import { useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
import abbos from "@/public/images/team/abbos.png";
import tukhtaev from "@/public/images/team/tukhtaev.jpg";
import tamanno from "@/public/images/team/tamanno.jpg";
import abduvali from "@/public/images/team/abduvali.jpg";
import fayyoz from "@/public/images/team/fayyoz.jpg";
import shovqiddin from "@/public/images/team/shovqiddin.jpg";
import tursunboy from "@/public/images/team/tursunboy.png";
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
import charos from "@/public/images/team/charos.jpg";
import ibrat from "@/public/images/team/ibrat.jpg";
import AbbosMuhammedov from "@/public/images/team/Abbos_muhammedov.jpg";

interface OrganizationMember {
  id: string;
  name: string;
  location: string;
  desc?: string;
  imageUrl: StaticImageData;
  isLeader?: boolean;
}

interface SupervisoryMember {
  id: string;
  name: string;
  role: string;
}

const supervisoryCommittee: SupervisoryMember[] = [
  { id: "s1", name: "E.G. Karimova", role: "Minister of Preschool and School Education, Chair of the Supervisory Committee" },
  { id: "s2", name: "Q.A. Sharipov", role: "Minister of Higher Education, Science and Innovation, Co-Chair of the Supervisory Committee" },
  { id: "s3", name: "Sh.Sh. Abdurazakov", role: "Mayor of Namangan Region, Co-Chair of the Organizing Committee" },
  { id: "s4", name: "Sh.A. Ayupov", role: "President of the Academy of Sciences" },
  { id: "s5", name: "B.J. A'loev", role: "First Deputy Minister of Foreign Affairs, Member of the Supervisory Committee" },
  { id: "s6", name: "A.T. Rahmatullaev", role: "First Deputy Minister of Internal Affairs, Member of the Supervisory Committee" },
  { id: "s7", name: "I. Norqulov", role: "First Deputy Minister of Economy and Finance, Member of the Supervisory Committee" },
  { id: "s8", name: "O.M. Umarov", role: "First Deputy Minister of Digital Technologies, Member of the Supervisory Committee" },
  { id: "s9", name: "A.Sh. Boboev", role: "First Deputy Minister of Health, Member of the Supervisory Committee" },
  { id: "s10", name: "M.A. Omarov", role: "First Deputy Minister of Transport, Member of the Supervisory Committee" },
  { id: "s11", name: "T. Kuziyev", role: "First Deputy Director of the Cultural Heritage Agency, Member of the Supervisory Committee" },
  { id: "s12", name: "A.R. Sormonkulov", role: "First Deputy Commander of the National Guard" },
  { id: "s13", name: "A. Djuraboev", role: "Chairman of the National Television and Radio Company of Uzbekistan" },
];

const members: {
  math: OrganizationMember[];
  informatics: OrganizationMember[];
  mainorg: OrganizationMember[];
} = {
  mainorg: [
    {
      id: "1",
      name: "To'raboy Shermatov",
      location: "Director of Science Olympiad Center, Chair of the Organizing Committee",
      imageUrl: turaboy,
      isLeader: true,
    },
    {
      id: "2",
      name: "Kh.R. Shakirov",
      location: "Deputy Director of the Agency for Specialized Educational Institutions, Co-Chair of the Organizing Committee",
      imageUrl: sevara,
      isLeader: false,
    },
    {
      id: "3",
      name: "Davron Tuxtayev",
      location: "Deputy Director of the Science Olympiad Center, Member of the Organizing Committee",
      imageUrl: tukhtaev,
      isLeader: false,
    },
    {
      id: "4",
      name: "Abduvali Chuliyev",
      location: "Head of the finance department",
      imageUrl: abduvali,
      isLeader: false,
    },
    {
      id: "5",
      name: "Fayyoz Tuychiev",
      location: "Head of the Department for Selection and Training of Students for International Science Olympiads",
      imageUrl: fayyoz,
      isLeader: false,
    },
    {
      id: "6",
      name: "Shovxiddin Ishmuradov",
      location: "Head of the transport and logistics department",
      imageUrl: shovqiddin,
      isLeader: false,
    },
    {
      id: "7",
      name: "Tursunboy Jumayev",
      location: "Exam preparation and supporting track",
      imageUrl: tursunboy,
      isLeader: false,
    },
    {
      id: "8",
      name: "Oqiljon Dadaxanov",
      location: "Software engineer",
      imageUrl: akilhan,
    },
    {
      id: "9",
      name: "Tamanno Turayeva",
      location: "Head of the Department for Digital Media Resources and Communications",
      imageUrl: tamanno,
      isLeader: false,
    },
    {
      id: "10",
      name: "Ibrat Urunov",
      location: "Technology and technical support track",
      imageUrl: ibrat,
      isLeader: false,
    },
    {
      id: "11",
      name: "Ruxsora Toirova",
      location: "Coordinator of the Olympiad, Science Olympiad Center",
      imageUrl: ruxsora,
    },
    {
      id: "12",
      name: "Charos Abdusattorova",
      location: "Head coordinator of the KhIMIOs 2026",
      imageUrl: charos,
      isLeader: false,
    },
    {
      id: "13",
      name: "Abbosbek Akramov",
      location: "Coordinator of the KhIMIOs 2026",
      imageUrl: abbos,
      isLeader: false,
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
      location: "Deputy Chairman of Scientific Committee",
      desc: "Researcher at the Sharif University of Technology, Tehran, Iran.",
      imageUrl: navid,
    },
    {
      id: "y1",
      name: "Yakov Shubin",
      location: "International Expert",
      desc: "Russia, Expert",
      imageUrl: profile,
    },
    {
      id: "88",
      name: "Miroslav Marinov",
      location: "International Expert",
      desc: "Bulgaria, Expert",
      imageUrl: profile,
    },
    {
      id: "3",
      name: "Prof. Mirfozil Mirzaahmedov",
      location: "Head professor at the Muhammad al-Khwarizmi Specialized IT School",
      imageUrl: mirfozil,
    },
    {
      id: "12",
      name: "Prof. Abdulla A'zamov",
      location: "Head of the Laboratory of Dynamic Systems and their Applications",
      imageUrl: abdulla,
    },
    {
      id: "4",
      name: "Dr. Qahramon Ibodullayev",
      location: "Dean of the Preschool Education Faculty of Chirchik State Pedagogical University",
      imageUrl: qahramon,
    },
    {
      id: "5",
      name: "Farxod Haydarov",
      location: "Researcher of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: farhodImage,
    },
    {
      id: "6",
      name: "O'tkir Boltayev",
      location: "Researcher of the Institute of Mathematics named after V.I.Romanovsky",
      imageUrl: otkirImage,
    },
    {
      id: "m10",
      name: "Abbos Muhammedov",
      location: "Mathematics Teacher of the Presidential School of Bukhara region",
      imageUrl: AbbosMuhammedov,
    },
    {
      id: "m11",
      name: "Jasurbek Baxramov",
      location: "Head of Gulistan Alpha Academy NTM and Mathematics Teacher",
      imageUrl: jasur,
    },
    {
      id: "14",
      name: "Jahongir Norboyev",
      location: "Silver medalist of the 2020 IZHO Olympics",
      imageUrl: jahongir,
    },
    {
      id: "15",
      name: "Abdushukur Axadov",
      location: "Gulistan Branch of the Muhammad al-Khwarizmi Specialized School",
      imageUrl: axadov,
    },
    {
      id: "16",
      name: "Jasurbek Imomov",
      location: "Student of the National University of Singapore",
      imageUrl: jasur2,
    },
    {
      id: "m15",
      name: "Anvarbek Sadulloyev",
      location: "Student of the National University of Uzbekistan",
      imageUrl: profile,
    },
    {
      id: "m16",
      name: "Madina Suyunova",
      location: "Student of the National University of Uzbekistan",
      imageUrl: profile,
    },
    {
      id: "m17",
      name: "Ochilov Farhod",
      location: "Student of the National University of Uzbekistan",
      imageUrl: profile,
    },
    {
      id: "m18",
      name: "Zarif Ibragimov",
      location: "Associate Professor of National Pedagogical University of Uzbekistan",
      imageUrl: profile,
    },
    {
      id: "m19",
      name: "Abdulla Ismatov",
      location: "Teacher of Termez Specialized Boarding School N 1",
      imageUrl: profile,
    },
  ],
  informatics: [
    {
      id: "1",
      name: "Dr. Muminov Bahodir",
      location: "Chairman of Scientific Committee",
      desc: "Department \"Fundamentals of Informatics\", Doctor of Technical Sciences",
      imageUrl: bahodir,
      isLeader: true,
    },
    {
      id: "2",
      name: "Farkhod Khakimiyon",
      location: "Founder of Olympiad Center \"Yozdah Tarhi Yak\" in Tajikistan",
      imageUrl: farkhodImage,
    },
    {
      id: "i3",
      name: "Jamshed Rahimov",
      location: "Leading teacher of the \"Yozdah Tarhi Yak\" Olympic Center, Tajikistan",
      imageUrl: profile,
    },
    {
      id: "i4",
      name: "Yusuf Rahimov",
      location: "Leading teacher of the \"Yozdah Tarhi Yak\" Olympic Center, Tajikistan",
      imageUrl: profile,
    },
    {
      id: "i5",
      name: "Aleksandr Kapitonov",
      location: "Professor at the New Uzbekistan University",
      imageUrl: profile,
    },
    {
      id: "i6",
      name: "Caskurlu Bugra",
      location: "Professor at the New Uzbekistan University",
      imageUrl: profile,
    },
    {
      id: "9",
      name: "Prof. Xakimjon Zaynidinov",
      location: "Head of the Department of \"Artificial Intelligence\" at the University",
      desc: "Doctor of technical sciences",
      imageUrl: xakimjon,
    },
    {
      id: "10",
      name: "Dr. Xusniddin Mamadaliyev",
      location: "Head of the Department of \"Algorithmizing and Mathematical Modeling\" at the University",
      imageUrl: xusniddin,
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
      location: "IOI 2017 and ICPC world finalist",
      imageUrl: temurImage,
    },
    {
      id: "i11",
      name: "Azamat Rustamov",
      location: "2023, 2024, 2025 ICPC Semi-finalist",
      imageUrl: profile,
    },
    {
      id: "i12",
      name: "Asilbek Sunnatov",
      location: "2025, 37th IOI silver medalist",
      imageUrl: profile,
    },
    {
      id: "132",
      name: "Hasan Ghulomzoda",
      location: "",
      desc: "Leading Instructor at Olympiad Center \"Yozdah Tarhi Yak\"",
      imageUrl: Hasan,
      isLeader: false,
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
    {
      id: "i14",
      name: "Alisher Ikramov",
      location: "Professor at the New Uzbekistan University",
      imageUrl: profile,
    },
    {
      id: "i15",
      name: "Ergashev Adizbek",
      location: "Researcher of the Tashkent University of Information Technologies",
      imageUrl: profile,
    },
    {
      id: "i16",
      name: "Shohruh Rahmatillayev",
      location: "Researcher of the Tashkent University of Information Technologies",
      imageUrl: profile,
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

      {/* Supervisory Committee */}
      <section id="supervisory" className="scroll-mt-20">
        <div className="organizing__team text-center mb-8">
          <h2 className="text-5xl">Supervisory Committee</h2>
        </div>
        <div className="container mx-auto px-4 py-12 w-[80%]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supervisoryCommittee.map((member) => (
              <div
                key={member.id}
                data-aos="fade-up"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg p-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0a192f] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {renderMembers("mainorg", "Organizing Committee", "organization")}
      {renderMembers("math", "Scientific Committee (Mathematics)", "math")}
      {renderMembers(
        "informatics",
        "Scientific Committee (Informatics)",
        "informatics"
      )}
    </section>
  );
}
