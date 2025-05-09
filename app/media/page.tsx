"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Image as ImageIcon,
  Video,
  FolderOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Define interfaces for our data types
interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface VideoItem {
  id: number;
  src: string;
  title: string;
  thumbnail?: string;
  description?: string;
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

  // New welcome section images
  const welcomeImages: ImageItem[] = [
    {
      id: 1,
      src: "/2025/1.jpg",
      alt: "Arrival of participants",
      title: "Participants Arrival Day",
    },
    {
      id: 2,
      src: "/2025/4.jpg",
      alt: "Registration desk",
      title: "Registration Process",
    },
    {
      id: 3,
      src: "/2025/3.jpg",
      alt: "Welcome ceremony",
      title: "Welcome Ceremony",
    },
    {
      id: 4,
      src: "/2025/5.jpg",
      alt: "Preparation meeting",
      title: "Preparation Meeting",
    },
    {
      id: 5,
      src: "/2025/9.jpg",
      alt: "Campus tour",
      title: "Campus Tour",
    },
    {
      id: 6,
      src: "/2025/10.jpg",
      alt: "Team introductions",
      title: "Team Introductions",
    },
    {
      id: 7,
      src: "/2025/11.jpg",
      alt: "Welcome dinner",
      title: "Welcome Dinner",
    },
    {
      id: 8,
      src: "/2025/12.jpg",
      alt: "Venue preparation",
      title: "Venue Preparation",
    },
    {
      id: 9,
      src: "/2025/13.jpg",
      alt: "Participants orientation",
      title: "Participants Orientation",
    },
    {
      id: 10,
      src: "/2025/16.jpg",
      alt: "Welcome kit distribution",
      title: "Welcome Kit Distribution",
    },
    {
      id: 11,
      src: "/2025/15.jpg",
      alt: "Welcome kit distribution",
      title: "Welcome Kit Distribution",
    },
    {
      id: 12,
      src: "/2025/14.jpg",
      alt: "Welcome kit distribution",
      title: "Welcome Kit Distribution",
    },
  ];

  const videos: VideoItem[] = [
    {
      id: 1,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/full_hd.mp4",
      title: "2024 Olympiad Highlights",
      thumbnail: "/media/winners.jpg", // You can use one of your existing images as thumbnail
      description:
        "Highlights from the 2024 Olympiad featuring key moments and achievements.",
    },
    {
      id: 2,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/al-khwarazmi.mp4",
      title:
        "Compete with the best minds from around the world – May 7-13, 2025.",
      thumbnail: "/media/opening.jpg", // You can use one of your existing images as thumbnail
      description:
        "A promotional video for the upcoming Al-Khwarizmi International Olympiad.",
    },
    {
      id: 3,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0504%20(1)(2).mp4",
      title: "Al-Khwarizmi International Olympiad 2025",
      description:
        "The Al-Khwarizmi International Olympiad in Mathematics and Informatics will be held! The Olympiad held in Tashkent from May 7th to 13th. 202 participants from teams representing Turkiye, Azerbaijan, Belarus, Malaysia, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan will be competing. The 3rd Al-Khwarizmi International Olympiad in Mathematics and Informatics is the first time competition organizing in two disciplines: Mathematics and Informatics. We wish you the highest achievements!",
    },
    {
      id: 4,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/malasia.mp4",
      title: "Malaysian Team Interview",
      description:
        "The team from Malaysia was warmly welcomed at the Al-Khwarizmi International Mathematics and Informatics Olympiad. So, what are our international guests` expectations and impressions of the Olympiad? Find out more in the full interview.",
    },
    {
      id: 5,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0506(2).mp4",
      title: "Tajikistan and Kyrgyzstan Team Interview",
      description:
        "The teams from Tajikistan and Kyrgyzstan are warmly welcomed to the Al-Khwarizmi International Olympiad in Mathematics and Informatics. Get to know the participants and hear what they're looking forward to at the Olympiad watch in our interview video!",
    },
    {
      id: 6,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/07-05-25-eng.mp4",
      title: "Belarus and Turkiye Team Interview",
      description:
        "⚡️The teams from Belarus and Turkiye participating in the Al-Khwarizmi International Mathematics and Informatics Olympiad have been warmly welcomed. What do the international participants think about this prestigious competition? More details — in the interview.",
    },
    {
      id: 7,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0507%20(2)(1).mp4",
      title: "IMIO 2025: The Journey Begins!",
      description:
        "Al-Khwarizmi International Olympiad in Mathematics and Informatics is ABOUT TO START! More details in the video report.",
    },
      {
      id: 8,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0509(1).mp4",
      title: "IMIO 2025: First Round in Motion.",
      description:
        "📌 Video from the 1st round of the Al-Khwarizmi International Mathematics and Informatics Olympiad",
    },
  ];

  // State to track which descriptions are expanded
  const [expandedDescriptions, setExpandedDescriptions] = useState<
    Record<number, boolean>
  >({});

  // Toggle description expansion
  const toggleDescription = (videoId: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

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
                Photo Gallery of IMIO 2024
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

        {/* New Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">
                Welcoming participants and preparation for Al-Khwarizmi
                International Mathematics and Informatics Olympiad 2025
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

        {/* Video Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Video className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">Video Gallery</h2>
            </div>
            <Link
              href="https://drive.google.com/drive/folders/1K64fxCgVyJrtYy0LLvn7n7DTMHi0CPmX?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FolderOpen className="w-4 h-4" />
              <span>View All Videos</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group hover:shadow-lg transition-all"
              >
                <CardContent className="p-3">
                  <div className="relative aspect-video mb-3">
                    <video
                      className="rounded-lg w-full h-full object-cover"
                      controls
                      poster={video.thumbnail}
                    >
                      <source src={video.src} type="video/mp4" />
                      <source
                        src={video.src.replace(".mp4", ".MP4")}
                        type="video/MP4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Video title with better spacing */}
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-1">
                    {video.title}
                  </h3>

                  {/* Description with expand/collapse functionality */}
                  {video.description && (
                    <div className="mt-1">
                      <div
                        className={`text-sm text-gray-600 ${
                          !expandedDescriptions[video.id] ? "line-clamp-2" : ""
                        }`}
                      >
                        {video.description}
                      </div>

                      {/* Show more/less button for longer descriptions */}
                      {video.description && video.description.length > 100 && (
                        <button
                          onClick={() => toggleDescription(video.id)}
                          className="text-xs flex items-center text-blue-600 hover:text-blue-800 mt-1 font-medium"
                        >
                          {expandedDescriptions[video.id] ? (
                            <>
                              <ChevronUp className="w-3 h-3 mr-1" />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 mr-1" />
                              Show more
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
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
