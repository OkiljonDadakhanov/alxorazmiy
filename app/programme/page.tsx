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
    time: "08:00 - 11:00",
    contestants: "check-in (school)",
    deputyLeaders: "check-in (hotel)",
    leaders: "check-in (hotel)",
  },
  {
    time: "11:00 - 13:00",
    contestants: "registration (hotel)",
    deputyLeaders: "registration (hotel)",
    leaders: "registration (hotel)",
  },
  {
    time: "13:00 - 14:00",
    contestants: "lunch(school)",
    deputyLeaders: "lunch(hotel)",
    leaders: "lunch(hotel)",
  },
  {
    time: "18:00 - 19:00",
    contestants: "dinner(school)",
    deputyLeaders: "dinner(hotel)	",
    leaders: "dinner(hotel)",
  },
  {
    time: "20:00 - 22:00",
    contestants: "1st meeting",
    deputyLeaders: "1st meeting",
    leaders: "1st meeting",
  },
];

const programms2 = [
  {
    time: "07:00 - 08:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (hotel)",
    leaders: "breakfast (hotel)",
  },
  {
    time: "10:00 - 12:00",
    contestants: "opening ceremony",
    deputyLeaders: "opening ceremony",
    leaders: "opening ceremony",
  },
  {
    time: "13:00 - 14:00",
    contestants: "lunch(school)",
    deputyLeaders: "lunch(hotel)",
    leaders: "lunch(hotel)",
  },
  {
    time: "15:00 - 17:00",
    contestants: "excursion",
    leaders: "excursion",
    deputyLeaders: "preparation for the exam",
  },
  {
    time: "18:00 - 19:00",
    contestants: "dinner(school)",
    deputyLeaders: "dinner(hotel)",
    leaders: "dinner(hotel)",
  },
];

const programms3 = [
  {
    time: "07:00 - 08:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (school)",
    leaders: "breakfast (school)",
  },
  {
    time: "08:00 - 09:00",
    contestants: "free time",
    deputyLeaders: "translation exam",
    leaders: "translation exam",
  },
  {
    time: "09:30 - 13:30",
    contestants: "exam day-1",
    deputyLeaders: "free time",
    leaders: "free time",
  },
  {
    time: "13:30 - 14:30",
    contestants: "lunch(school)",
    deputyLeaders: "lunch(school)",
    leaders: "lunch(school)",
  },
  {
    time: "15:00 - 17:00",
    contestants: "excursion",
    leaders: "excursion",
    deputyLeaders: "check of exam day-1",
  },
  {
    time: "18:00 - 19:00",
    contestants: "dinner(school)",
    deputyLeaders: "dinner(school)",
    leaders: "dinner(hotel)",
  },
];

const programms4 = [
  {
    time: "07:00 - 08:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (school)",
    leaders: "breakfast (school)",
  },
  {
    time: "08:00 - 09:00",
    contestants: "free time",
    deputyLeaders: "translation exam",
    leaders: "translation exam",
  },
  {
    time: "09:30 - 13:30",
    contestants: "exam day-2",
    deputyLeaders: "free time",
    leaders: "free time",
  },
  {
    time: "13:30 - 14:30",
    contestants: "lunch(school)",
    leaders: "lunch(school)",
    deputyLeaders: "lunch(school)",
  },
  {
    time: "15:00 - 17:00",
    contestants: "excursion",
    leaders: "excursion",
    deputyLeaders: "check of exam day-2",
  },
  {
    time: "18:00 - 19:00",
    contestants: "dinner(school)",
    deputyLeaders: "dinner(school)",
    leaders: "dinner(hotel)",
  },
];

const programms5 = [
  {
    time: "06:00 - 07:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (hotel)",
    leaders: "breakfast (hotel)",
  },
  {
    time: "07:00 - 09:00",
    contestants: "physical activity",
    deputyLeaders: "moderation of day-1",
    leaders: "moderation of day-1",
  },
  {
    time: "13:00 - 14:00",
    contestants: "lunch(school)",
    leaders: "lunch(school)",
    deputyLeaders: "lunch(school)",
  },
  {
    time: "17:00 - 19:00",
    contestants: "mental activity",
    leaders: "moderation of day-2",
    deputyLeaders: "moderation of day-2",
  },
  {
    time: "20:00 - 21:00",
    contestants: "dinner(school)",
    deputyLeaders: "dinner(school)",
    leaders: "dinner(school)",
  },
];

const programms6 = [
  {
    time: "06:00 - 07:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (hotel)",
    leaders: "breakfast (hotel)",
  },
  {
    time: "10:00 - 12:00",
    contestants: "free time",
    deputyLeaders: "free time",
    leaders: "free time",
  },
  {
    time: "13:00 - 14:00",
    contestants: "lunch(school)",
    leaders: "lunch(hotel)",
    deputyLeaders: "lunch(hotel)",
  },
  {
    time: "16:00 - 18:00",
    contestants: "closing ceremony",
    leaders: "closing ceremony",
    deputyLeaders: "closing ceremony",
  },
  {
    time: "19:00 - 21:00",
    contestants: "gala dinner",
    deputyLeaders: "gala dinner",
    leaders: "gala dinner",
  },
];

const programms7 = [
  {
    time: "06:00 - 07:00",
    contestants: "breakfast (school)",
    deputyLeaders: "breakfast (hotel)",
    leaders: "breakfast (hotel)",
  },
  {
    time: "08:00 - 13:00",
    contestants: "departure",
    deputyLeaders: "departure",
    leaders: "departure",
  },
  {
    time: "13:00 - 14:00",
    contestants: "lunch(school)",
    leaders: "lunch(hotel)",
    deputyLeaders: "lunch(hotel)",
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
            <AccordionTrigger>Day 1 - Wednesday (May 7)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
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
            <AccordionTrigger>Day 2 - Thursday (May 8)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms2.map((program) => (
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
            <AccordionTrigger>Day 3 - Friday (May 9)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms3.map((program) => (
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

          <AccordionItem value="item-4">
            <AccordionTrigger>Day 4 - Saturday (May 10)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms4.map((program) => (
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

          <AccordionItem value="item-5">
            <AccordionTrigger>Day 5 - Sunday (May 11)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms5.map((program) => (
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

          <AccordionItem value="item-6">
            <AccordionTrigger>Day 6 - Monday (May 12)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms6.map((program) => (
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

          <AccordionItem value="item-7">
            <AccordionTrigger>Day 7 - Tuesday (May 13)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="">Time </TableHead>
                    <TableHead className="">Contestants</TableHead>
                    <TableHead>Team Leaders</TableHead>
                    <TableHead className="">Juries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programms7.map((program) => (
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
