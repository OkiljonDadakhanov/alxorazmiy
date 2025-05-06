'use client'

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

  const videos: VideoItem[] = [
    {
      id: 1,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/full_hd.mp4",
      title: "2024 Olympiad Highlights",
      thumbnail: "/media/winners.jpg", // You can use one of your existing images as thumbnail
      description: "Highlights from the 2024 Olympiad featuring key moments and achievements.",
    },
    {
      id: 2,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/al-khwarazmi.mp4",
      title: "Compete with the best minds from around the world – May 7-13, 2025.",
      thumbnail: "/media/opening.jpg", // You can use one of your existing images as thumbnail
      description: "A promotional video for the upcoming Al-Khwarizmi International Olympiad.",
    },
    {
      id: 3,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/0504%20(1)(2).mp4",
      title: "Al-Khwarizmi International Olympiad 2025",
      description: "The Al-Khwarizmi International Olympiad in Mathematics and Informatics will be held! The Olympiad held in Tashkent from May 7th to 13th. 202 participants from teams representing Turkiye, Azerbaijan, Belarus, Malaysia, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan will be competing. The 3rd Al-Khwarizmi International Olympiad in Mathematics and Informatics is the first time competition organizing in two disciplines: Mathematics and Informatics. We wish you the highest achievements!",
    },
    {
      id: 4,
      src: "https://alxorazmiy.nyc3.cdn.digitaloceanspaces.com/malasia.mp4",
      title: "Malaysian Team Interview",
      description: "The team from Malaysia was warmly welcomed at the Al-Khwarizmi International Mathematics and Informatics Olympiad. So, what are our international guests` expectations and impressions of the Olympiad? Find out more in the full interview.",
    }
  ];

  // State to track which descriptions are expanded
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});

  // Toggle description expansion
  const toggleDescription = (videoId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
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
              <h2 className="text-2xl font-semibold">Photo Gallery</h2>
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