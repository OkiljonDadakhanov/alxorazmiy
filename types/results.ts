export interface Result {
  rank: number;
  participant: string;
  name: string;
  score: number;
}

export interface ResultsData {
  [year: number]: Result[];
}

export interface ResultTableProps {
  year: number;
  data: Result[];
}

export interface DownloadButtonProps {
  year: number;
}
