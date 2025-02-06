import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8 w-full">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
