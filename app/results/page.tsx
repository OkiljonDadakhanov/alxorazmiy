import React from "react";

export default function Results() {
  return (
    <section className="min-h-screen  text-blue-500 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-semibold">Results</h1>
      </div>

      {/* Coming Soon Animation */}

      <h2 className="text-3xl font-medium mb-4">Coming Soon</h2>
      <p className="text-blue-500 text-lg mb-6 max-w-md text-center">
        We’re working hard to bring you the latest updates. Stay tuned for
        exciting results!
      </p>
    </section>
  );
}
