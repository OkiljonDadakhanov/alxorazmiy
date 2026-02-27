import { results } from "@/data/results";
import ResultTable from "./results-table";
import DownloadButton from "./download-button";

const ResultsContent: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-4 sm:mb-6">
      2024 &amp; 2025 Results
    </h2>

    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 sm:mb-8">
      Congratulations to all participants! Here are the top performers for the
      past two years.
    </p>

    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
      <DownloadButton year={2024} />
      <DownloadButton year={2025} />
    </div>

    <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
        Highlights &amp; Achievements
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Over 1,000 students participated in this year&apos;s Olympiad.</li>
        <li>Participants from 25+ countries showcased their talent.</li>
        <li>Average scores improved significantly across all regions.</li>
      </ul>
    </div>

    <div className="text-center text-gray-700 italic mb-8">
      Keep pushing your limits and preparing for the next challenge — your name could be here next year!
    </div>

    <ResultTable year={2025} data={results[2025]} />
    <ResultTable year={2024} data={results[2024]} />
  </div>
);

export default ResultsContent;
