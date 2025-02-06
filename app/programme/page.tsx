import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/ui/page-header";
import ProgramTable from "@/components/program-table";
import { programsData } from "@/data/programs";

export default function Programme() {
  return (
    <section>
      <PageHeader title="Programme" />
      <Accordion type="single" collapsible className="w-[70%] mx-auto">
        {programsData.map(({ title, date, programs }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{`${title} (${date})`}</AccordionTrigger>
            <AccordionContent>
              <ProgramTable programs={programs} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
