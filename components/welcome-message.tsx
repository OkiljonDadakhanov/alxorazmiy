"use client";

import type React from "react";
import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const WelcomeMessage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[90%] mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center"
        >
          <Image
            src="/logo/logoblue.png"
            alt="Al-Khwarazmi Olympiad logo"
            width={300}
            height={300}
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain mb-8"
          />

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
          >
            Welcome to the Al-Khwarazmi International Mathematical and
            Informatical Olympiad
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="800"
            className="text-lg md:text-xl text-gray-700 text-center max-w-4xl leading-relaxed mb-12"
          >
            We are delighted to welcome you to the 28th Junior Balkan
            Mathematical Olympiad in Antalya. This prestigious event brings
            together young mathematical talents from various countries,
            fostering a spirit of friendly competition and collaboration. We are
            honored to host not only these gifted students but also
            distinguished academic leaders from around the world.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="800"
            className="grid md:grid-cols-2 gap-8 text-center md:text-left"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To inspire and challenge young minds in the fields of
                mathematics and informatics, promoting critical thinking and
                problem-solving skills on a global stage.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-gray-700">
                An exciting competition that tests ingenuity, fosters new
                friendships, and creates lasting memories. We hope your stay
                will be both pleasurable and intellectually stimulating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
