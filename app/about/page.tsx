import { Card, CardContent } from "@/components/ui/card";

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
                The Al-Khwarizmi International Mathematics and Informatics
                Olympiad (KhIMIOs) is a prestigious global competition that aims to
                identify and nurture exceptional talent in mathematics and
                informatics. Named after the legendary Persian mathematician
                Al-Khwarizmi, the Olympiad serves as a platform for bright young
                minds from around the world to challenge their problem-solving
                abilities, enhance their analytical skills, and interact with
                peers who share a passion for mathematics and computing.
              </p>
              <p className="text-gray-300">
                The 4th Al-Khwarizmi KhIMIOs will take place from May 25–31, 2026,
                in Uzbekistan, bringing together talented students from multiple
                countries to compete in the fields of Mathematics and
                Informatics.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* About Al-Khwarizmi Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">About Muhammad ibn Musa al-Khwarizmi</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Muhammad ibn Musa al-Khwarizmi (c. 780 – c. 850)</strong> stands
                  as one of the most influential scholars of the Islamic Golden Age and a foundational figure
                  in the history of mathematics and computer science. His groundbreaking contributions to
                  algebra, arithmetic, astronomy, geography, and algorithmic thinking laid the intellectual
                  groundwork for disciplines that continue to define modern science and technology.
                </p>
                <p>
                  Al-Khwarizmi approached maths with clarity, precision, and a systematic methodology far
                  ahead of his time. His seminal book <em>&quot;Kitab al-Jabr wa-l Muqabala&quot;</em> not only
                  introduced algebra as an independent field but also provided logical techniques that
                  continue to be taught today. His works on Hindu-Arabic numerals revolutionized global
                  mathematics, making complex calculations simpler and more accessible — a transformation
                  that still shapes modern computation.
                </p>
                <p>
                  One of his lasting legacies is the concept of the <strong className="text-white">algorithm</strong>,
                  derived from the Latinized form of his name, <em>Algoritmi</em>. His structured procedures
                  for calculation became the intellectual ancestor of modern computing, programming, and
                  problem-solving techniques used in informatics.
                </p>
                <p>
                  Al-Khwarizmi&apos;s contributions extended beyond pure mathematics. In astronomy and
                  geography, he applied mathematical models and precise measurements to chart coordinates,
                  refine calendars, and develop accurate world maps. His emphasis on logic, quantification,
                  and systematic methods closely mirrors the analytical processes that define today&apos;s
                  mathematical and computer-based sciences. Moreover, he synthesized knowledge from Greek,
                  Indian, and Persian sources, demonstrating an openness to global intellectual exchange —
                  a value that lies at the heart of every international Olympiad.
                </p>
                <p>
                  As participants of the Al-Khwarizmi International Mathematics and Informatics Olympiad,
                  young scholars follow in his footsteps — mastering complex mathematical concepts, applying
                  algorithmic thinking, and embracing creativity and integrity in scientific inquiry.
                </p>

                <blockquote className="border-l-4 border-[#C9A84C] pl-6 py-2 my-6 italic text-lg text-[#C9A84C]">
                  &quot;Reason is the guide to solving every difficulty.&quot;
                  <span className="block text-sm text-gray-400 mt-2 not-italic">— Al-Khwarizmi</span>
                </blockquote>

                <p>
                  Al-Khwarizmi&apos;s legacy teaches us that mathematics is a universal language and that
                  every idea, every proof, and every algorithm contributes to the progress of human knowledge.
                  This guiding principle continues to inspire the KhIMIOs Olympiad today. Through this
                  competition, we honour his legacy by expanding the frontiers of knowledge — one problem,
                  one solution, and one discovery at a time.
                </p>
              </div>

              {/* YouTube Video */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Learn More About Al-Khwarizmi</h3>
                <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/oRkNaF0QvnI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              </div>
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
                Al-Khwarizmi KhIMIOs seeks to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Identify and support students with exceptional abilities in
                  mathematics and informatics.
                </li>
                <li>
                  Provide an international platform for participants to compete
                  and learn from one another.
                </li>
                <li>
                  Promote Uzbekistan as a center for scientific excellence and
                  talent development.
                </li>
                <li>
                  Encourage collaboration between educators, institutions, and
                  young scholars to foster a culture of innovation.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Competition Format</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Mathematics
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Two rounds of written examinations</li>
                  <li>4 problems per round, each worth 7 points</li>
                  <li>Each round lasts 4 hours (240 minutes)</li>
                  <li>Total maximum score: 56 points across both rounds</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Informatics
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Conducted over two days through an online system</li>
                  <li>3 problems per day, each worth 100 points</li>
                  <li>Each day&apos;s competition lasts 4 hours</li>
                  <li>Programming language: C++</li>
                  <li>Total maximum score: 600 points across both days</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Team Composition</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                Each participating country may send a delegation consisting of:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>4 participants for the Mathematics competition</li>
                <li>4 participants for the Informatics competition</li>
                <li>
                  2 team leaders to accompany and support the participants
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Evaluation & Awards</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                Solutions are reviewed by expert judges and academic
                professionals, ensuring accuracy, fairness, and alignment with
                international standards. Awards are distributed as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Gold, Silver, and Bronze medals (1:2:3 ratio)</li>
                <li>
                  Certificates & Diplomas for all medalists and distinguished
                  participants
                </li>
                <li>
                  Special Awards for exceptional creativity and innovative
                  problem-solving
                </li>
                <li>Potential monetary prizes for top-ranking competitors</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Why Participate?</h2>
          <Card className="bg-[#1f2937] shadow-xl">
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Compete at an elite international level</li>
                <li>Gain global recognition for academic excellence</li>
                <li>
                  Build connections with like-minded peers, experts, and
                  institutions
                </li>
                <li>Experience Uzbekistan&apos;s rich culture and hospitality</li>
                <li>
                  Enhance problem-solving, analytical thinking, and programming
                  skills
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
