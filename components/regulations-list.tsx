"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, Book, Clock, FileText, Globe, Users } from "lucide-react";

interface Regulation {
  id: string;
  title: string;
  content: string | string[];
  icon: "award" | "book" | "clock" | "fileText" | "globe" | "users";
}

interface RegulationListProps {
  regulations: Regulation[];
}

const RegulationList: React.FC<RegulationListProps> = ({ regulations }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const getIcon = (iconName: Regulation["icon"]) => {
    switch (iconName) {
      case "award":
        return <Award className="w-8 h-8 text-[#64ffda] mb-4" />;
      case "book":
        return <Book className="w-8 h-8 text-[#64ffda] mb-4" />;
      case "clock":
        return <Clock className="w-8 h-8 text-[#64ffda] mb-4" />;
      case "fileText":
        return <FileText className="w-8 h-8 text-[#64ffda] mb-4" />;
      case "globe":
        return <Globe className="w-8 h-8 text-[#64ffda] mb-4" />;
      case "users":
        return <Users className="w-8 h-8 text-[#64ffda] mb-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0a192f] to-[#112240] text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          International Olympiad Regulations
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regulations.map((regulation) => (
            <div
              key={regulation.id}
              className="bg-[#1f2937] rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center mb-4">
                {getIcon(regulation.icon)}
                <h2 className="text-2xl font-semibold text-[#64ffda] text-center">
                  {regulation.title}
                </h2>
              </div>
              {Array.isArray(regulation.content) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {regulation.content.map((item, index) => (
                    <li key={index} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{regulation.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulationList;
