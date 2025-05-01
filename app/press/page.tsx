"use client";

import React from "react";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Calendar, Phone, Mail, FileText } from "lucide-react";

export default function PressRelease() {
  return (
    <section>
      <PageHeader title="Press Release" />

      <div className="mt-8 max-w-4xl mx-auto px-4 py-8">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Tashkent will host the Al-Khwarizmi International Olympiad in
              Mathematics and Informatics
            </h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Al-Khwarizmi International Olympiad in Mathematics and
                Informatics will take place in Tashkent, Uzbekistan, from May 7
                to 13, 2025. This prestigious event will gather talented high
                school students from across the globe to showcase their skills
                in two of the most fundamental fields of science: mathematics
                and informatics.
              </p>

              <p className="text-lg leading-relaxed">
                More than ten countries, including Uzbekistan, Kazakhstan,
                Kyrgyzstan, Turkmenistan, Tajikistan, Azerbaijan, Belarus,
                Turkey, Italy, Malaysia, and South Korea are expected to
                participate in this year's Olympiad.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">
                  More information:
                </h2>

                <p className="mb-6">
                  The opening ceremony of the Al-Khwarizmi International
                  Olympiad in Mathematics and Informatics will be held at the
                  Specialized School named after Muhammad Al-Khwarizmi
                  (Tashkent, Mahtumkuli Street, 1A). The closing and awards
                  ceremony will also take place at the same location, with the
                  presence of officials from the Ministry of Preschool and
                  School Education of the Republic of Uzbekistan, international
                  guests, and diplomatic representatives of the participating
                  countries.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Opening Ceremony:</span>
                    <span>8 May 2025, 10:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">
                      Closing & Awards Ceremony:
                    </span>
                    <span>12 May 2025, 16:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  The main venues of the Olympiad:
                </h2>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <span>
                    Specialized School named after Muhammad Al-Khwarizmi
                    (Tashkent, Mahtumkuli Street, 1A)
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Participants and accommodation:
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <span>
                      Hotel Roadside by Khorrot (Tashkent, Bogishamol Drive,
                      95A)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <span>
                      Accommodation of the Specialized School named after
                      Muhammad Al-Khwarizmi (Tashkent, Mahtumkuli Street, 1A)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Organizing Committee of the Olympiad:
                </h2>
                <div className="space-y-3">
                  <div className="font-semibold text-lg">
                    Science Olympiad Center
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <span>
                      100099, Otchopar-1, Darvozakent Street, House 60
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span>
                      Phone: +998712070524, Telegram/WhatsApp: +998775503366
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <span>
                      Website:{" "}
                      <a
                        href="https://arbicho.uz"
                        className="text-blue-600 hover:underline"
                      >
                        https://arbicho.uz
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:arbicho@olympcenter.uz"
                        className="text-blue-600 hover:underline"
                      >
                        arbicho@olympcenter.uz
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2 mx-auto"
                  onClick={() =>
                    window.open("/press-release-uzbek.pdf", "_blank")
                  }
                >
                  <FileText className="w-5 h-5" />
                  <span>Read in Uzbek (PDF)</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
