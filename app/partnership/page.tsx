import React from "react";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { partnershipsData } from "@/utils/partnershipsData";

export default function Partnership() {
  return (
    <section>
      {/* Header */}
      <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
          Partnership
        </h1>
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue={partnershipsData[0].id}
        className="w-[90%] ml-1"
      >
        {partnershipsData.map((partner) => (
          <AccordionItem key={partner.id} value={partner.id}>
            <AccordionTrigger className="text-lg font-medium">
              {partner.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.title} Logo`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[16px] tracking-wide">
                  {partner.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-4">
                  {partner.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300 shadow-sm"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-medium shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed mt-1">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
