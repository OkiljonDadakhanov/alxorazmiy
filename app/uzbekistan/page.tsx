import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Uzbekistan() {
  return (
    <section>
      <div className="bg-[#0a192f] text-white p-6 sm:p-9 mb-6 sm:mb-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
          Uzbekistan
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          O'zbekiston
        </h1>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Buyuk Tarix va Yangi Imkoniyatlar Diyori
        </h2>

        <div className="mb-8">
          <p className="text-lg mb-4 text-center">
            O'zbekiston Markaziy Osiyoning yuragida joylashgan, boy tarixi,
            madaniy merosi va tabiiy go'zalligi bilan ajralib turadigan
            mamlakatdir. Qadimiy shaharlari, me'moriy obidalari, milliy taomlari
            va mehmondo'st xalqi bilan dunyo e'tiborini tortib kelmoqda.
          </p>
          <div className="w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/qr3tvR2tcJA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>
        </div>

        <Card className="mb-8 hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-[#0a192f]">
              Tarixiy meros va madaniyat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg text-center">
              O'zbekiston qadimdan Buyuk Ipak yo'lining markazida joylashgan
              bo'lib, bu yerdan o'tgan savdo yo'llari Sharq va G'arb
              sivilizatsiyalarini bog'lagan. Samarqand, Buxoro va Xiva kabi
              shaharlari o'zining betakror me'morchiligi bilan mashhur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  city: "Samarqand",
                  description:
                    "Amir Temur davlati poytaxti, Registon maydoni va Shohi Zinda majmuasi bilan tanilgan.",
                  videoId: "vabrXxXuWzY",
                },
                {
                  city: "Buxoro",
                  description:
                    "Islom sivilizatsiyasining muhim markazi, Ark qal'asi va Poyi Kalon majmuasi joylashgan.",
                  videoId: "SajKK1jtcR0",
                },
                {
                  city: "Xiva",
                  description:
                    "O'rta asrlardan saqlanib qolgan muzey-shahar, Ichan-Qal'a yodgorligi bilan mashhur.",
                  videoId: "E9Xs4WvuBzs",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0a192f] text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                      {item.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-center text-gray-200">
                      {item.description}
                    </p>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-[#0a192f]">
              Turistik diqqatga sazovor joylar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Hazrati Imom majmuasi (Toshkent)",
                  description:
                    "Dunyoning eng qadimiy Qur'on nusxasi saqlanadigan muqaddas joy.",
                  videoId: "-AYpIfMfFl4",
                },
                {
                  name: "Chorvoq va Chimgan",
                  description:
                    "Tog'-chang'i kurortlari va dam olish maskanlari.",
                  videoId: "Bm7QOmPcR8c",
                },
                {
                  name: "Sarmishsoy darasi (Navoiy)",
                  description:
                    "10 000 yillik petrogliflar joylashgan tarixiy joy.",
                  videoId: "f9ByOiEJKFc",
                },
                {
                  name: "Boysun madaniyati (Surxondaryo)",
                  description:
                    "YuNESKOning nomoddiy madaniy merosi ro'yxatiga kiritilgan qadimiy an'analar.",
                  videoId: "PmhKsKdARwQ",
                },
                {
                  name: "Orol dengizi va Moynoq",
                  description:
                    "Ekologik muammolar sabab yo'qolib borayotgan dengiz hududi.",
                  videoId: "I8nVIf9ijLo",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0a192f] text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center text-white">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-center text-gray-200">
                      {item.description}
                    </p>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <a
            href="https://uzbekistan.travel/en/uzbekistan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Learn More About Uzbekistan
          </a>
        </div>
      </div>
    </section>
  );
}
