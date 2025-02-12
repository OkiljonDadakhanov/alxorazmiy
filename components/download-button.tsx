import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { DownloadButtonProps } from "@/types/results";

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

export default DownloadButton;
