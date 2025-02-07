import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Uzbekistan() {
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-8 sm:p-12">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
          Uzbekistan
        </h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
          Land of Great History and New Opportunities
        </h2>

        <div className="mb-12">
          <p className="text-xl mb-6 text-center text-gray-700">
            Located in the heart of Central Asia, Uzbekistan is a country
            distinguished by its rich history, cultural heritage, and natural
            beauty. Its ancient cities, architectural monuments, national
            cuisine, and hospitable people continue to captivate global
            attention.
          </p>
          <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/qr3tvR2tcJA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>

        <Card className="mb-12 hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-[#0a192f]">
              Historical Heritage and Culture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-8 text-xl text-center text-gray-700">
              Historically situated at the heart of the Great Silk Road,
              Uzbekistan served as a bridge between Eastern and Western
              civilizations. Cities like Samarkand, Bukhara, and Khiva are
              renowned for their unique architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: "Samarkand",
                  description:
                    "Capital of Amir Temur's empire, famous for Registan Square and Shohi Zinda Complex",
                  videoId: "vabrXxXuWzY",
                },
                {
                  city: "Bukhara",
                  description:
                    "Important center of Islamic civilization, home to Ark Fortress and Poi Kalon Complex",
                  videoId: "SajKK1jtcR0",
                },
                {
                  city: "Khiva",
                  description:
                    "Medieval museum city, famous for its Ichan-Qala monument",
                  videoId: "E9Xs4WvuBzs",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0a192f] text-white hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      {item.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-center text-gray-200">
                      {item.description}
                    </p>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">About Uzbekistan</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-300">
                  <p>
                    Uzbekistan, a jewel of Central Asia, is proud to host the
                    Al-Khwarizmi Olympiad. This ancient land, once a crucial
                    part of the Silk Road, boasts a rich tapestry of history,
                    culture, and scientific heritage.
                  </p>
                  <p>
                    Known for its stunning Islamic architecture, Uzbekistan is
                    home to UNESCO World Heritage sites such as Samarkand,
                    Bukhara, and Khiva. These cities, with their magnificent
                    madrasas, minarets, and mausoleums, stand as testaments to
                    the country's intellectual and artistic achievements.
                  </p>
                  <p>
                    Today, Uzbekistan is a rapidly modernizing nation, balancing
                    its rich traditions with contemporary advancements in
                    education, technology, and infrastructure.
                  </p>
                  <p>
                    With its warm hospitality, vibrant culture, and dynamic
                    progress, Uzbekistan welcomes participants from around the
                    world to experience both its historical grandeur and its
                    vision for the future. The Al-Khwarizmi Olympiad is more
                    than a competition—it's a celebration of knowledge,
                    innovation, and the enduring spirit of discovery.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/vQVwkyn3-F8?si=QRf031BvSjKSHdAt"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <a
            href="https://uzbekistan.travel/en/uzbekistan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-xl text-lg"
          >
            Discover More About Uzbekistan
          </a>
        </div>
      </div>
    </section>
  );
}
