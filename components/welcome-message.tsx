import { type FC } from "react";
import Image from "next/image";

const BULLET_POINTS = [
  {
    id: "challenge",
    text: "Challenging Problems: Engage in thought-provoking tasks with high intellectual standards for junior level",
  },
  {
    id: "collaboration",
    text: "Collaboration: Connect with like-minded individuals from diverse backgrounds and exchange knowledge",
  },
  {
    id: "recognition",
    text: "Recognition: Showcase your talents and be celebrated for your achievements",
  },
  {
    id: "legacy",
    text: "Legacy of Excellence: Be part of an event that honors the timeless contributions of Al-Khwarizmi to science and mathematics",
  },
] as const;

const WelcomeMessage: FC = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Welcome to Al-Khwarizmi Olympiad"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90%]">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image
              src="/logo/logoblue.png"
              alt="Al-Khwarazmi Olympiad logo"
              width={300}
              height={300}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
              priority
              loading="eager"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
            Welcome to Al-Khwarizmi International Mathematics and Informatics
            Olympiad!
          </h1>

          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl leading-relaxed mb-12">
            Al-Khwarizmi International Mathematics and Informatics Olympiad is a
            unique opportunity where knowledge and intellectual power come
            together! This competition offers you the opportunity to test your
            skills, showcase innovative ideas, and explore the harmony of modern
            technology and timeless traditions. We believe that every
            participant will unlock their potential and leave a lasting mark,
            just as Al-Khwarizmi did in the world of science and discovery. We
            wish you the best of luck in your pursuit of knowledge!
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <section aria-labelledby="mission-heading">
              <h2
                id="mission-heading"
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                Our Mission
              </h2>
              <p className="text-gray-700">
                To inspire and empower young minds by creating an inclusive
                platform for innovation, exploration, and intellectual growth.
                Al-Khwarizmi International Mathematics and Informatics Olympiad
                seeks to nurture the next generation of thinkers,
                problem-solvers, and trailblazers, fostering a passion for
                science, technology, and critical thinking.
              </p>
              <p className="text-gray-700 mt-2">
                Through this initiative, we aim to honor the legacy of
                Al-Khwarizmi by encouraging excellence, collaboration, and
                creativity among youth from all corners of the world.
              </p>
            </section>

            <section aria-labelledby="expectations-heading">
              <h2
                id="expectations-heading"
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                What to Expect
              </h2>
              <p className="text-gray-700 mb-4">
                At the Al-Khwarizmi Olympiad, you can expect a dynamic and
                inspiring environment where innovation meets intellectual
                curiosity. Here's what awaits you:
              </p>

              <ul
                className="text-gray-700 space-y-2 list-none"
                role="list"
                aria-label="Key features of the Olympiad"
              >
                {BULLET_POINTS.map((point) => (
                  <li key={point.id} className="flex items-start">
                    <span className="mr-2" aria-hidden="true">
                      •
                    </span>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 mt-4">
                Prepare to be inspired, challenged, and empowered as you embark
                on this extraordinary journey!
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
