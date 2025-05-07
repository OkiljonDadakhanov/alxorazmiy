"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import ProgramTable from "@/components/program-table";
import { programsData } from "@/data/programs";

export default function Programme() {
  const handleDownloadUzbek = () => {
    // URL to your Uzbek version document
    const uzbekDocumentUrl = "/dastur.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = uzbekDocumentUrl;
    link.download = "dastur.pdf";

    // Append to the body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section> 
      <PageHeader title="Programme" />
      <div className="w-[70%] mx-auto mb-6">
       
        <div className="flex justify-end mt-2">
          <Button
            onClick={handleDownloadUzbek}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download Uzbek Version
          </Button>
        </div>
      </div>

      <div className="w-[70%] mx-auto mb-4 p-4 bg-blue-50 rounded-md">
        <h2 className="text-xl font-semibold mb-2">
        AL-KHWARIZMI INTERNATIONAL OLYMPIAD IN MATHEMATICS AND INFORMATICS
        </h2>
        <p className="text-sm italic mb-2">
          May 7-13, 2025, Tashkent, Uzbekistan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Location:</strong> Specialized School named after Muhammad
              al-Khwarizmi
            </p>
            <p>
              <strong>Residence of participants:</strong> School
            </p>
          </div>
          <div>
            <p>
              <strong>Residence of judges and team leaders:</strong> Rakat
              Komfort Hotel
            </p>
            <p>
              <strong>Organizer:</strong> Science Olympiad Center
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.khimio.uz/"
                className="text-blue-600 hover:text-blue-800"
              >
                https://www.khimio.uz/
              </a>
            </p>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-[70%] mx-auto">
        {programsData.map(({ title, date, programs }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{`${title} (${date})`}</AccordionTrigger>
            <AccordionContent>
              <ProgramTable programs={programs} />

              {index === 0 && (
                <div className="mt-4 p-3 bg-gray-50 text-sm border-l-4 border-blue-400 rounded">
                  <p>
                    With the help of event organizers and volunteers, guests
                    will be welcomed, taken to the school, and provided with SIM
                    cards in conjunction with a partner telecommunications
                    company, badges, uniforms, gift sets, and information
                    brochures. A familiarization tour of the school will be
                    organized by school volunteers, depending on the
                    participants' arrival schedule.
                  </p>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
