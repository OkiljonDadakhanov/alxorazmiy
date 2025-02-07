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
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  const getIcon = (iconName: Regulation["icon"]) => {
    const commonClasses =
      "w-10 h-10 text-[#64ffda] mb-6 transform transition-all duration-300 group-hover:scale-110";
    switch (iconName) {
      case "award":
        return <Award className={commonClasses} />;
      case "book":
        return <Book className={commonClasses} />;
      case "clock":
        return <Clock className={commonClasses} />;
      case "fileText":
        return <FileText className={commonClasses} />;
      case "globe":
        return <Globe className={commonClasses} />;
      case "users":
        return <Users className={commonClasses} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#64ffda] to-[#4fd1c5] bg-clip-text text-transparent"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          International Olympiad Regulations
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regulations.map((regulation, index) => (
            <div
              key={regulation.id}
              className="group bg-[#1f2937]/90 backdrop-blur-sm rounded-xl shadow-lg p-8 
                        transition-all duration-500 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]
                        hover:translate-y-[-8px] hover:bg-[#1f2937]/95"
              data-aos="fade-up"
              data-aos-delay={150 + index * 50}
            >
              <div className="flex flex-col items-center mb-6">
                {getIcon(regulation.icon)}
                <h2
                  className="text-2xl font-semibold text-[#64ffda] text-center mb-4 
                             transition-colors duration-300 group-hover:text-[#4fd1c5]"
                >
                  {regulation.title}
                </h2>
              </div>
              {Array.isArray(regulation.content) ? (
                <ul className="space-y-3">
                  {regulation.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <span className="text-[#64ffda] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {regulation.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulationList;
