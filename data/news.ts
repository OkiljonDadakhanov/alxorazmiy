import PageHeader from "@/components/ui/page-header";
import Link from "next/link";
import Image from "next/image";

type NewsItem = {
  id: number;
  title: string;
  message: string;
  mainImage: string;
  additionalImages?: string[]; // Optional array of additional image paths
  slug: string;
};

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "New Campus Opening Soon",
    message: "We're excited to announce the opening of our new campus this fall. This expansion includes new facilities and state-of-the-art labs for students. The new campus will feature modern architecture, sustainable design elements, and cutting-edge technology integration throughout all facilities. Students will benefit from expanded library resources, dedicated study spaces, and collaborative areas designed to encourage innovation and teamwork.",
    mainImage: "/2025/1.jpg",
    additionalImages: [
      "/2025/2.jpg",
      "/2025/3.jpg",
      "/2025/5.jpg"
    ],
    slug: "new-campus-opening",
  },
  {
    id: 2,
    title: "Scholarship Opportunities 2025",
    message: "Applications are now open for our 2025 scholarship program. Apply early to increase your chances of receiving funding. Our scholarship program covers a wide range of disciplines and is designed to support talented students from diverse backgrounds. This year, we've increased the funding pool by 30% and introduced several new categories including STEM excellence, creative arts, and community leadership scholarships.",
    mainImage: "/2025/4.jpg",
    additionalImages: [
      "/2025/6.jpg",
      "/2025/7.jpg"
    ],
    slug: "scholarship-opportunities-2025",
  },
];