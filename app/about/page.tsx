import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import registon from "@/public/gallery/registon.jpg";
import group from "@/public/gallery/group.jpg";
import buhoro from "@/public/gallery/buhoro.jpg";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Al-Khwarizmi Olympiad
        </h1>

        <section className="mb-16">
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                The Al-Khwarizmi International Mathematical and Informatical
                Olympiad is a unique opportunity where knowledge and
                intellectual power converge. This competition offers
                participants the chance to test their skills, showcase
                innovative ideas, and explore the harmony of modern technology
                and timeless traditions.
              </p>
              <p className="text-gray-300">
                We believe that every participant will unlock their potential
                and leave a lasting mark, just as Al-Khwarizmi did in the world
                of science and discovery. We wish you the best of luck in your
                pursuit of knowledge!
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                To inspire and empower young minds by creating an inclusive
                platform for innovation, exploration, and intellectual growth.
                The Al-Khwarizmi International Mathematical and Informatical
                Olympiad seeks to nurture the next generation of thinkers,
                problem-solvers, and trailblazers, fostering a passion for
                science, technology, and critical thinking.
              </p>
              <p className="text-gray-300">
                Through this initiative, we aim to honor the legacy of
                Al-Khwarizmi by encouraging excellence, collaboration, and
                creativity among youth from all corners of the world.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Olympiad Process</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                The Al-Khwarizmi Olympiad is a rigorous and exciting process
                that unfolds in several stages:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>
                  <strong>Registration:</strong> Participants from around the
                  world register through their national coordinators or directly
                  via our online platform.
                </li>
                <li>
                  <strong>National Selections:</strong> Many countries conduct
                  national competitions to select their top performers for the
                  international event.
                </li>
                <li>
                  <strong>Arrival and Orientation:</strong> Selected
                  participants arrive in Uzbekistan and attend an orientation
                  session to familiarize themselves with the competition format
                  and local customs.
                </li>
                <li>
                  <strong>Competition Days:</strong> The Olympiad typically
                  spans 2-3 days, featuring both individual and team challenges
                  in mathematics and informatics.
                </li>
                <li>
                  <strong>Cultural Program:</strong> Between competition events,
                  participants engage in cultural activities to experience
                  Uzbekistan's rich heritage.
                </li>
                <li>
                  <strong>Awards Ceremony:</strong> The Olympiad concludes with
                  a grand ceremony where medals and special awards are presented
                  to top performers.
                </li>
              </ol>
              <p className="text-gray-300 mt-4">
                Throughout the process, emphasis is placed on fair competition,
                cultural exchange, and the celebration of intellectual
                achievement.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">About Uzbekistan</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <p className="text-gray-300 mb-4">
                    Uzbekistan, a jewel of Central Asia, is proud to host the
                    Al-Khwarizmi Olympiad. This ancient land, once a crucial
                    part of the Silk Road, boasts a rich tapestry of history,
                    culture, and scientific heritage.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Known for its stunning Islamic architecture, Uzbekistan is
                    home to UNESCO World Heritage sites such as Samarkand,
                    Bukhara, and Khiva. These cities, with their magnificent
                    madrasas, minarets, and mausoleums, stand as testaments to
                    the country's intellectual and artistic achievements
                    throughout history.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Uzbekistan's contribution to mathematics and science is
                    significant. The country gave birth to many renowned
                    scholars, including Al-Khwarizmi himself, whose works on
                    algebra and algorithms laid the foundation for much of
                    modern mathematics and computer science.
                  </p>
                  <p className="text-gray-300">
                    Today, Uzbekistan is a rapidly modernizing nation, balancing
                    its rich traditions with contemporary advancements in
                    education, technology, and infrastructure. The country's
                    warm hospitality, diverse landscapes - from the Tian Shan
                    mountains to the Kyzylkum desert - and delicious cuisine
                    make it an unforgettable destination for Olympiad
                    participants.
                  </p>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <Image
                    src={registon}
                    alt="Registan Square, Samarkand"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src={buhoro}
                    alt="Bukhara Old City"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Past Olympiads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[2022, 2021, 2020].map((year) => (
              <Card key={year} className="bg-[#1f2937] shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {year} Olympiad
                  </h3>
                  <Image
                    src={group}
                    alt={`${year} Olympiad`}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    The {year} Al-Khwarizmi Olympiad brought together brilliant
                    minds from around the world, showcasing exceptional talent
                    in mathematics and informatics.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
