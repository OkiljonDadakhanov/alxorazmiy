"use client";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { Download } from "lucide-react";
import Link from "next/link";

// Types
interface Result {
  rank: number;
  participant: string;
  name: string;
  score: number;
}

interface ResultsData {
  [year: number]: Result[];
}

interface ResultTableProps {
  year: number;
  data: Result[];
}

interface DownloadButtonProps {
  year: number;
}

// Constants
const YEARS = {
  CURRENT: 2024,
  PREVIOUS: 2023,
} as const;

// Data
const results: ResultsData = {
  [YEARS.PREVIOUS]: [
    {
      rank: 1,
      participant: "Uzbekistan Tashkent city",
      name: "Axtamov Ozod",
      score: 90.7,
    },
    {
      rank: 2,
      participant: "Kyrgyzstan",
      name: "Korniiash Fedor",
      score: 72.6,
    },
    {
      rank: 3,
      participant: "Kazakhstan",
      name: "Yerkebulanuly Ali",
      score: 65.7,
    },
    {
      rank: 4,
      name: "Zohidjonov Elbek Elmurod o'g'li",
      participant: "Uzbekistan Tashkent city",
      score: 65.5,
    },
    {
      rank: 5,
      name: "Alinur Nessipbek",
      participant: "Kazakhstan",
      score: 64.9,
    },
    {
      rank: 6,
      name: "Jaylovov To'lqin Turdimurod o'g'li",
      participant: "Uzbekistan Kashkadarya region",
      score: 60.4,
    },
    {
      rank: 7,
      name: "Sailaubay Bexultan",
      participant: "Kazakhstan",
      score: 59.7,
    },
  ],
  [YEARS.CURRENT]: [
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
    {
      rank: 4,
      participant: "Tajikistan 1st team",
      name: "Yusupov Mehrubon",
      score: 36,
    },
    {
      rank: 5,
      participant: "Surkhandarya region",
      name: "Anvarov Javoxir Chorshanbiyevich",
      score: 33,
    },
    {
      rank: 6,
      participant: "Turkmenistan 2nd team",
      name: "Ruslanov Murat",
      score: 33,
    },
    {
      rank: 7,
      participant: "Kazakhstan 1st team",
      name: "Orynbassar Berdibek",
      score: 33,
    },
    {
      rank: 8,
      participant: "Kazakhstan 2nd team",
      name: "Arnur Ansatov",
      score: 31,
    },
    {
      rank: 9,
      participant: "Kyrgyzstan 1st team",
      name: "Musakhodzhaev Sultan",
      score: 31,
    },
    {
      rank: 10,
      participant: "Syrdarya region",
      name: "Mamajonov Azizbek Raxmonali o'g'li",
      score: 31,
    },
  ],
};

// Components
const ResultTable: React.FC<ResultTableProps> = ({ year, data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">
        {year} Gold medalists
      </h2>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-500">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap"
                  >
                    Participant team
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((result, index) => (
                  <tr
                    key={`${result.participant}-${result.rank}`}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 text-sm whitespace-nowrap">
                      {result.rank}
                    </td>
                    <td className="py-2 px-4 text-sm">{result.participant}</td>
                    <td className="py-2 px-4 text-sm">{result.name}</td>
                    <td className="py-2 px-4 text-sm whitespace-nowrap">
                      {result.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ year }) => {
  return (
    <Link href={`/problems/results${year}.pdf`}>
      <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
        <Download className="w-4 h-4 mr-2" />
        Download {year} Full Results
      </Button>
    </Link>
  );
};

const ResultsHeader: React.FC = () => <PageHeader title="Olympiad Results" />;

const ResultsContent: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-4 sm:mb-6">
      {YEARS.PREVIOUS} - {YEARS.CURRENT} Gold medalists
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 sm:mb-8">
      Congratulations to all participants! Here are the top performers for the
      past two years.
    </p>

    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
      <DownloadButton year={YEARS.CURRENT} />
      <DownloadButton year={YEARS.PREVIOUS} />
    </div>

    <ResultTable year={YEARS.CURRENT} data={results[YEARS.CURRENT]} />
    <ResultTable year={YEARS.PREVIOUS} data={results[YEARS.PREVIOUS]} />
  </div>
);

const Results: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-800">
      <ResultsHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        <ResultsContent />
      </main>
    </section>
  );
};

export default Results;
