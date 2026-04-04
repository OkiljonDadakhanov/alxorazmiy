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
          <TableHead>Judge</TableHead>
          <TableHead>Team leader</TableHead>
          <TableHead>Participant</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {programs.map((program, rowIndex) => (
          <TableRow key={`${program.time}-${rowIndex}`}>
            <TableCell className="font-medium align-top">
              {program.time}
            </TableCell>
            <TableCell className="align-top text-sm sm:text-base">
              {program.judges}
            </TableCell>
            <TableCell className="align-top text-sm sm:text-base">
              {program.leaders}
            </TableCell>
            <TableCell className="align-top text-sm sm:text-base">
              {program.contestants}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProgramTable;
