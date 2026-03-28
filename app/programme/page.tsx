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
import Reveal from "@/components/ui/reveal";

export default function Programme() {
  const downloadFile = (path: string, filename: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <PageHeader title="Programme" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex justify-end mt-2 gap-3 flex-wrap">
          <Button
            onClick={() => downloadFile("/program-uz.pdf", "program-uz.pdf")}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download Uzbek Version
          </Button>
          <Button
            onClick={() => downloadFile("/program-en.pdf", "program-en.pdf")}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download English Version
          </Button>
        </div>
      </div>

      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 p-5 sm:p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm">
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
                className="text-[#1E3A8A] hover:text-[#1E3A8A]/80 underline underline-offset-4"
              >
                www.khimio.uz
              </a>
            </p>
          </div>
        </div>
      </div>
      </Reveal>

      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      <Accordion type="single" collapsible className="w-full">
        {programsData.map(({ title, date, programs }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{`${title} (${date})`}</AccordionTrigger>
            <AccordionContent>
              <ProgramTable programs={programs} />

              {index === 0 && (
                <div className="mt-4 p-4 bg-[#E0F2FE]/60 text-sm border border-[#1E3A8A]/15 rounded-2xl">
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
      </Reveal>
    </section>
  );
}
