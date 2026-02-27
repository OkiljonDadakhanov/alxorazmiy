"use client";

import React from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Image as ImageIcon,
  FolderOpen,
} from "lucide-react";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const MediaPage = () => {
  const images: ImageItem[] = [
    {
      id: 1,
      src: "/media/opening.jpg",
      alt: "Opening ceremony",
      title: "Opening Ceremony 2024",
    },
    {
      id: 2,
      src: "/media/awarding.jpg",
      alt: "Award ceremony",
      title: "Award Ceremony",
    },
    {
      id: 3,
      src: "/media/contest.jpg",
      alt: "Participants working",
      title: "Participants During Contest",
    },
    {
      id: 4,
      src: "/media/group.jpg",
      alt: "Group photo",
      title: "Group Photo",
    },
    {
      id: 5,
      src: "/media/discussion.jpg",
      alt: "Problem discussion",
      title: "Problem Discussion Session",
    },
    {
      id: 6,
      src: "/media/event.jpg",
      alt: "Cultural event",
      title: "Cultural Event",
    },
    {
      id: 7,
      src: "/media/venue.jpg",
      alt: "Venue",
      title: "Competition Venue",
    },
    {
      id: 8,
      src: "/media/winners.jpg",
      alt: "Winners",
      title: "Winners Celebration",
    },
  ];

  const welcomeImages: ImageItem[] = [
    { id: 1, src: "/2025/1.jpg", alt: "Arrival of participants", title: "Participants Arrival Day" },
    { id: 2, src: "/2025/4.jpg", alt: "Registration desk", title: "Registration Process" },
    { id: 3, src: "/2025/3.jpg", alt: "Welcome ceremony", title: "Welcome Ceremony" },
    { id: 4, src: "/2025/5.jpg", alt: "Preparation meeting", title: "Preparation Meeting" },
    { id: 5, src: "/2025/9.jpg", alt: "Campus tour", title: "Campus Tour" },
    { id: 6, src: "/2025/10.jpg", alt: "Team introductions", title: "Team Introductions" },
    { id: 7, src: "/2025/11.jpg", alt: "Welcome dinner", title: "Welcome Dinner" },
    { id: 8, src: "/2025/12.jpg", alt: "Venue preparation", title: "Venue Preparation" },
    { id: 9, src: "/2025/13.jpg", alt: "Participants orientation", title: "Participants Orientation" },
    { id: 10, src: "/2025/16.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 11, src: "/2025/15.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 12, src: "/2025/14.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 13, src: "/2025/17.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 14, src: "/2025/18.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 15, src: "/2025/19.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 16, src: "/2025/20.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 17, src: "/2025/21.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 18, src: "/2025/22.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 19, src: "/2025/23.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
    { id: 20, src: "/2025/30.jpg", alt: "Welcome kit distribution", title: "Welcome Kit Distribution" },
  ];

  return (
    <section>
      <PageHeader title="Media" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Photo Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">
                Photo Gallery of KhIMIOs 2024
              </h2>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1K64fxCgVyJrtYy0LLvn7n7DTMHi0CPmX?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FolderOpen className="w-4 h-4" />
              <span>View All Photos</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="group hover:shadow-lg transition-all"
              >
                <CardContent className="p-3">
                  <div className="relative aspect-video mb-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg object-cover w-full h-full"
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {image.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">
                Welcoming participants and preparation for Al-Khwarizmi
                International Mathematics and Informatics Olympiad (KhIMIOs) 2025
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {welcomeImages.map((image) => (
              <Card
                key={image.id}
                className="group hover:shadow-lg transition-all"
              >
                <CardContent className="p-2">
                  <div className="relative aspect-square mb-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg object-cover w-full h-full"
                      width={120}
                      height={120}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPage;
