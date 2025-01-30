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
            Welcome to the Al-Khwarizmi International Mathematical and
            Informatical Olympiad!
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="800"
            className="text-lg md:text-xl text-gray-700 text-center max-w-4xl leading-relaxed mb-12"
          >
            The Al-Khwarizmi International Mathematical and Informatical
            Olympiad is a unique opportunity where knowledge and intellectual
            power come together! This competition offers you the opportunity to
            test your skills, showcase innovative ideas, and explore the harmony
            of modern technology and timeless traditions. We believe that every
            participant will unlock their potential and leave a lasting mark, We
            wish you the best of luck in your pursuit of knowledge! just as
            Al-Khwarizmi did in the world of science and discovery.
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
                To inspire and empower young minds by creating an inclusive
                platform for innovation, exploration, and intellectual growth.
                The Al-Khwarizmi International Mathematical and Informatical
                Olympiad seeks to nurture the next generation of thinkers,
                problem-solvers, and trailblazers, fostering a passion for
                science, technology, and critical thinking.
              </p>
              <p className="text-gray-700 mt-2">
                Through this initiative, we aim to honor the legacy of
                Al-Khwarizmi by encouraging excellence, collaboration, and
                creativity among youth from all corners of the world.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-gray-700">
                At the Al-Khwarizmi Olympiad, you can expect a dynamic and
                inspiring environment where innovation meets intellectual
                curiosity. Here’s what awaits you:
              </p>

              <ul className="text-gray-700">
                <li>
                  {" "}
                  • Challenging Problems: Engage in thought-provoking tasks high
                  intellectual standarts for junior level
                </li>
                <li>
                  {" "}
                  • Collaboration: Connect with like-minded individuals from
                  diverse backgrounds and exchange knowledge.
                </li>
                <li>
                  • Recognition: Showcase your talents and be celebrated for
                  your achievements.{" "}
                </li>
                <li>
                  • Legacy of Excellence: Be part of an event that honors the
                  timeless contributions of Al-Khwarizmi to science and
                  mathematics.
                </li>
              </ul>
              <p className="text-gray-700 mt-2">
                Prepare to be inspired, challenged, and empowered as you embark
                on this extraordinary journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
