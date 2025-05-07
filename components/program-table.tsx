import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Program } from "@/data/programs";

interface ProgramTableProps {
  programs: Program[];
}

const ProgramTable: React.FC<ProgramTableProps> = ({ programs }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Contestants</TableHead>
          <TableHead>Team Leaders</TableHead>
          <TableHead>Judges</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {programs.map((program) => (
          <TableRow key={program.time}>
            <TableCell className="font-medium">{program.time}</TableCell>
            <TableCell>{program.contestants}</TableCell>
            <TableCell>{program.leaders}</TableCell>
            <TableCell>{program.judges}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProgramTable;
