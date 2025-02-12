import { ResultTableProps } from "@/types/results";

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

export default ResultTable;
