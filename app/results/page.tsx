import React from "react";

export default function Results() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-500 text-gray-300">
      {/* Header */}
      <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8 w-full">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
          Results
        </h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold text-blue-400 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg max-w-lg mb-6">
          We’re working hard to bring you the latest updates. Stay tuned for
          exciting results from the Olympiad!
        </p>

        {/* Placeholder for animation */}
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v12m0 0l-3-3m3 3l3-3M21 12.5a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </main>
    </section>
  );
}
