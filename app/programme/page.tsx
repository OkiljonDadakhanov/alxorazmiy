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
    const uzbekDocumentUrl = "/dastur.pdf";
    const link = document.createElement("a");
    link.href = uzbekDocumentUrl;
    link.download = "dastur.pdf";
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
          May 25–31, 2026, Tashkent Region, Uzbekistan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Venue:</strong> &quot;Renessans&quot; Health Camp under the Agency
              for Specialized Educational Institutions
            </p>
            <p>
              <strong>Participant Accommodation:</strong> &quot;Renessans&quot; Health Camp
            </p>
          </div>
          <div>
            <p>
              <strong>Jury & Team Leader Accommodation:</strong> &quot;Renessans&quot; Health Camp
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
                www.khimio.uz
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
                    Guests will be welcomed by event organizers and volunteers
                    and transported to the camp. In collaboration with our
                    partner telecommunications company, participants will be
                    provided with SIM cards. During registration, ID badges,
                    official uniforms, gift kits, and information brochures will
                    be distributed. Based on the arrival schedule, camp
                    volunteers will organize guided orientation tours around the
                    Renessans Camp for all participants.
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
