import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const programms = [
  {
    time: "08:00 - 00:00",
    contestants: "Arrivals",
    deputyLeaders: "Arrivals",
    leaders: "Arrivals",
  },
  {
    time: "12:00 - 15:00",
    contestants: "Lunch",
    deputyLeaders: "Lunch",
    leaders: "Lunch",
  },
  {
    time: "15:00 - 18:30",
    contestants: "Free time",
    deputyLeaders: "Free time",
    leaders: "Free time",
  },
  {
    time: "18:30 - 20:30",
    contestants: "Dinner	",
    deputyLeaders: "Dinner	",
    leaders: "Dinner",
  },
  {
    time: "21:00 - 22:00",
    contestants: "Free time",
    deputyLeaders: "First Jury Meeting",
    leaders: "Free time",
  },
];

export default function Programme() {
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-9 mb-8">
        <h1 className="text-center text-5xl font-semibold">Programme</h1>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-[70%] mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Day 1 - Monday (June 25)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Deputy Leaders</TableHead>
                    <TableHead className="">Leaders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms.map((program) => (
                    <TableRow key={program.time}>
                      <TableCell className="font-medium">
                        {program.time}
                      </TableCell>
                      <TableCell>{program.contestants}</TableCell>
                      <TableCell>{program.leaders}</TableCell>
                      <TableCell className="">
                        {program.deputyLeaders}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Day 2 - Tuesday (June 26)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Deputy Leaders</TableHead>
                    <TableHead className="">Leaders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms.map((program) => (
                    <TableRow key={program.time}>
                      <TableCell className="font-medium">
                        {program.time}
                      </TableCell>
                      <TableCell>{program.contestants}</TableCell>
                      <TableCell>{program.leaders}</TableCell>
                      <TableCell className="">
                        {program.deputyLeaders}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Day 3 - Wednesday (June 27)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Deputy Leaders</TableHead>
                    <TableHead className="">Leaders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms.map((program) => (
                    <TableRow key={program.time}>
                      <TableCell className="font-medium">
                        {program.time}
                      </TableCell>
                      <TableCell>{program.contestants}</TableCell>
                      <TableCell>{program.leaders}</TableCell>
                      <TableCell className="">
                        {program.deputyLeaders}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
