"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const results = {
  2023: [
    {
      rank: 1,
      participant: "team1",
      name: "John Doe",
      score: 95,
    },
    { rank: 2, participant: "team2", name: "Jane Smith", score: 92 },
    { rank: 3, participant: "team3", name: "Bob Johnson", score: 88 },
  ],
  2024: [
    {
      rank: 1,
      participant: "Kazakhstan 2nd team",
      name: "Anuar Agybayev",
      score: 42,
    },
    {
      rank: 2,
      participant: "Kazakhstan 1st team",
      name: "Zhaksylyk Sherkhan",
      score: 41,
    },
    {
      rank: 3,
      participant: "Turkmenistan 2nd team",
      name: "Gummanov Begench",
      score: 36,
    },
  ],
};

const ResultTable = ({ year, data }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-blue-400 mb-4">{year} Results</h2>
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Rank</th>
          <th className="py-3 px-4 text-left">Participant team</th>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
            <td className="py-3 px-4">{result.rank}</td>
            <td className="py-3 px-4">{result.participant}</td>
            <td className="py-3 px-4">{result.name}</td>
            <td className="py-3 px-4">{result.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DownloadButton = ({ year }) => {
  return (
    <Link href={`/problems/results${year}.pdf`}>
      <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <Download className="w-4 h-4 mr-2" />
        Download {year} Full Results
      </Button>
    </Link>
  );
};

export default function Results() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8 w-full">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
          Olympiad Results
        </h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            2023 - 2024 Results
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Congratulations to all participants! Here are the top performers for
            the past two years.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <DownloadButton year={2024} />
            <DownloadButton year={2023} />
          </div>
          <ResultTable year={2024} data={results[2024]} />
          <ResultTable year={2023} data={results[2023]} />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0a192f] text-white p-4 text-center">
        <p>&copy; 2025 Olympiad Organization. All rights reserved.</p>
      </footer>
    </section>
  );
}
