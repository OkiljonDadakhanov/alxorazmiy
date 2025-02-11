import React from "react";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LucideIcon,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Globe,
  ExternalLink,
} from "lucide-react";

interface SocialCardProps {
  icon: any;
  title: string;
  handle: string;
  link: string;
  description: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon: Icon,
  title,
  handle,
  link,
  description,
}) => (
  <Card className="group hover:shadow-lg transition-shadow">
    <CardHeader className="space-y-1">
      <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5" />
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
      <a
        href={link}
        className="text-sm text-blue-600 hover:underline flex items-center"
      >
        {handle} <ExternalLink className="ml-1 w-3 h-3" />
      </a>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default function News() {
  const socialAccounts: SocialCardProps[] = [
    {
      icon: Globe,
      title: "Kun.uz - News about Uzbekistan",
      handle: "kun.uz",
      link: "https://kun.uz/en",
      description:
        "Stay updated with the latest news on Uzbekistan, including politics, economy, society, and major local events.",
    },
    {
      icon: Instagram,
      title: "Al-Khwarizmi Olympiad",
      handle: "@fan_olimpiadalari_markazi",
      link: "https://www.instagram.com/fan_olimpiadalari_markazi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      description:
        "Official Instagram page of the Al-Khwarizmi International Mathematics and Informatics Olympiad. Stay updated with competition highlights, announcements, and participant achievements.",
    },
    {
      icon: Globe,
      title: "Al-Khwarizmi Olympiad on Telegram",
      handle: "@Fan_olimpiadalari_M",
      link: "https://t.me/Fan_olimpiadalari_M",
      description:
        "Join the official Telegram channel of the Al-Khwarizmi International Mathematics and Informatics Olympiad for the latest updates, announcements, and competition insights.",
    },
    {
      icon: Youtube,
      title: "Al-Khwarizmi Olympiad",
      handle: "@olympdep",
      link: "http://bit.ly/olimpdep",
      description:
        "Official video coverage of the Al-Khwarizmi International Mathematics and Informatics Olympiad, including competition highlights, expert insights, and participant interviews.",
    },
    {
      icon: Facebook,
      title: "Al-Khwarizmi Olympiad - Facebook",
      handle: "@Fan-olimpiadalari-markazi",
      link: "https://www.facebook.com/share/14NAmhu2D5/?mibextid=wwXIfr",
      description:
        "Follow the official Facebook page of the Al-Khwarizmi International Mathematics and Informatics Olympiad for updates, announcements, and insights into the competition.",
    },
  ];

  return (
    <section>
      <PageHeader title="Press release" />

      <div className="mt-8 max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">
          Recommended News Sources
        </h2>

        <p className="mb-4">
          To stay informed about the Al-Khwarizmi International Mathematics and
          Informatics Olympiad, follow these trusted sources on social media:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialAccounts.map((account) => (
            <SocialCard
              key={account.handle}
              icon={account.icon}
              title={account.title}
              handle={account.handle}
              link={account.link}
              description={account.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Globe className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Tips for Following News</h2>
        </div>
        <div className="space-y-3 text-gray-600">
          <p>
            • Follow official government pages (Ministry of Education, Ministry
            of Digital Technologies of Uzbekistan).
          </p>
          <p>• Check official Olympiad pages for announcements.</p>
          <p>
            • Turn on notifications for Telegram channels, Twitter (X), and news
            apps covering Uzbekistan and educational competitions.
          </p>
          <p>
            • Follow Uzbekistan's major news agencies: Kun.uz, Gazeta.uz,
            Daryo.uz.
          </p>
          <p>
            • Join local Facebook groups, Telegram channels, and forums
            discussing science and education in Uzbekistan.
          </p>
        </div>
      </div>
    </section>
  );
}
