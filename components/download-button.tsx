import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DownloadButtonProps } from "@/types/results";

const DownloadButton: React.FC<DownloadButtonProps> = ({
  year,
  href,
  label,
  download,
}) => {
  const fileHref = href ?? `/problems/results${year}.pdf`;
  const buttonLabel = label ?? `Download ${year} Full Results`;

  return (
    <a href={fileHref} download={download}>
      <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center">
        <Download className="w-4 h-4 mr-2" />
        {buttonLabel}
      </Button>
    </a>
  );
};

export default DownloadButton;
