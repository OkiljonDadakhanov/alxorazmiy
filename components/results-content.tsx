import { YEARS } from "@/constants/years";
import { results } from "@/data/results";
import ResultTable from "./results-table";
import DownloadButton from "./download-button";

const ResultsContent: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-4 sm:mb-6">
      {YEARS.PREVIOUS} - {YEARS.CURRENT} - 2025 Results
    </h2>

    <p className="text-base sm:text-lg text-center text-gray-600 mb-6 sm:mb-8">
      Congratulations to all participants! Here are the top performers for the
      past three years.
    </p>

    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
      <DownloadButton year={YEARS.CURRENT} />
      <DownloadButton year={YEARS.PREVIOUS} />
      <DownloadButton year={YEARS.NEW} />
    </div>

    <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
        Highlights & Achievements
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Over 1,000 students participated in this year's Olympiad.</li>
        <li>Participants from 25+ countries showcased their talent.</li>
        <li>Average scores improved significantly across all regions.</li>
      </ul>
    </div>

    <div className="text-center text-gray-700 italic mb-8">
      Keep pushing your limits and preparing for the next challenge — your name could be here next year!
    </div>

    {/* <ResultTable year={YEARS.CURRENT} data={results[YEARS.CURRENT]} />
    <ResultTable year={YEARS.PREVIOUS} data={results[YEARS.PREVIOUS]} /> */}
  </div>
);

export default ResultsContent;
