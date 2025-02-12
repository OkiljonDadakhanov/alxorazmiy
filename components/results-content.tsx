import { YEARS } from "@/constants/years";
import { results } from "@/data/results";
import ResultTable from "./results-table";
import DownloadButton from "./download-button";

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

export default ResultsContent;
