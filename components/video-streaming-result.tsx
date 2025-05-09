import React from "react";
import Link from "next/link";

const OlympiadLivestream = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-800 mb-3">
          <span className="mr-2">📢</span>
          The 1st round trials of the Al-Khwarizmi International Mathematics and
          Informatics Olympiad are in full swing!
        </h1>

        {/* Responsive YouTube Embed */}
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg shadow-md mb-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/61MZObtwmMo?si=8o646UMbLytzCyBR"
            title="Al-Khwarizmi Olympiad Livestream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
          <p className="text-lg text-indigo-700 font-medium mb-3 md:mb-0">
            <span className="mr-2">❗️</span>
            You can follow the results of the Informatics participants through
            this link:
          </p>
          <Link
            href="https://day1-ranking-novery.khimio2025.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
          >
            View Results
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OlympiadLivestream;
