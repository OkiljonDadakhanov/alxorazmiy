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
            onClick={() =>
              downloadFile("/dasturs.pdf", "dasturs.pdf")
            }
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download Programme (PDF)
          </Button>
        </div>
      </div>

      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 p-5 sm:p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">
        AL-KHWARIZMI INTERNATIONAL MATHEMATICS AND INFORMATICS OLYMPIAD PROGRAM
        </h2>
        <p className="text-sm italic mb-2">
          June 1–7, 2026, Tashkent, Uzbekistan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Olympiad venue:</strong> Renaissance Camp (hereinafter referred to as &quot;Camp&quot;)
            </p>
            <p>
              <strong>Contestants&apos; accommodation:</strong> Camp
            </p>
          </div>
          <div>
            <p>
              <strong>Judges&apos; and team leaders&apos; accommodation:</strong> Camp
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
                    With the help of event organizers and volunteers, guests will
                    be welcomed, taken to the school, and given a badge, uniform,
                    gift set, and information brochure. Depending on the
                    participants&apos; arrival schedule, a familiarization tour will
                    be organized by camp volunteers.
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
