"use client";

import React from "react";
import PageHeader from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, Calendar, Phone, Mail } from "lucide-react";

export default function PressRelease() {
  return (
    <section>
      <PageHeader title="Press Release" />

      <div className="mt-8 max-w-4xl mx-auto px-4 py-8">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Uzbekistan will host the Al-Khwarizmi International Olympiad in
              Mathematics and Informatics
            </h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Al-Khwarizmi International Olympiad in Mathematics and
                Informatics will take place in Tashkent, Uzbekistan, from May 25
                to 31, 2026. This prestigious event will gather talented high
                school students from across the globe to showcase their skills
                in two of the most fundamental fields of science: mathematics
                and informatics.
              </p>

              <p className="text-lg leading-relaxed">
                More than ten countries, including Uzbekistan, Kazakhstan,
                Kyrgyzstan, Turkmenistan, Tajikistan, Azerbaijan, Belarus,
                Turkey, Italy, Malaysia and Qatar are expected to
                participate in this year&apos;s Olympiad.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">
                  More information:
                </h2>

                <p className="mb-6">
                  The opening ceremony of the Al-Khwarizmi International
                  Olympiad in Mathematics and Informatics will be held at the
                  Tashkent region, Uzbekistan. The closing and awards
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
                    <span>26 May 2026, 10:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">
                      Closing & Awards Ceremony:
                    </span>
                    <span>30 May 2026, 15:00</span>
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
                    Renaissance (Tashkent Region, Uzbekistan)
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Participants and accommodation:
                </h2>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <span>
                    Accommodation - Renaissance camp (Tashkent region,
                    Bustonlik district, Burchmullo city, Yusufkhona street, 44)
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Organising Committee of the Olympiad:
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
                      Phone: +998775503366, Telegram/WhatsApp: +998775503366
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <span>
                      Website:{" "}
                      <a
                        href="https://khimio.uz"
                        className="text-blue-600 hover:underline"
                      >
                        https://khimio.uz
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:khimio@olympcenter.uz"
                        className="text-blue-600 hover:underline"
                      >
                        khimio@olympcenter.uz
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
