import React from "react";
import { FaMedal } from "react-icons/fa6";
import { TbMath, TbBinary, TbNews, TbPhoto, TbBuilding } from "react-icons/tb";
import { GiScrollUnfurled } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";

interface PageHeaderProps {
  title: string;
}

const iconByTitle: Record<string, React.ReactNode> = {
  Programme: <GiScrollUnfurled className="h-6 w-6 text-[#C9A227]" />,
  Regulations: <GiScrollUnfurled className="h-6 w-6 text-[#C9A227]" />,
  Organization: <TbBuilding className="h-6 w-6 text-[#C9A227]" />,
  Uzbekistan: <PiGraduationCap className="h-6 w-6 text-[#C9A227]" />,
  Media: <TbPhoto className="h-6 w-6 text-[#C9A227]" />,
  "News & Updates": <TbNews className="h-6 w-6 text-[#C9A227]" />,
  "Olympiad Results": <FaMedal className="h-6 w-6 text-[#C9A227]" />,
  "Olympiad Results/Problems": <FaMedal className="h-6 w-6 text-[#C9A227]" />,
  Problems: <TbBinary className="h-6 w-6 text-[#C9A227]" />,
  Partnership: <TbMath className="h-6 w-6 text-[#C9A227]" />,
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="relative w-full mb-8 sm:mb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0F2FE] via-white to-[#E0F2FE]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex items-center justify-center gap-3">
            {iconByTitle[title] ?? (
              <TbMath className="h-6 w-6 text-[#C9A227]" />
            )}
            <h1
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
          </div>
          <div className="mt-3 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#1E3A8A]/35 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
