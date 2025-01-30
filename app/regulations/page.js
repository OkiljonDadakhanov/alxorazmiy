const regulations = [
  {
    id: "organizer",
    title: "Organizer",
    content:
      "The organization and conduct of the International Olympiad are coordinated by the Ministry of Preschool and School Education of the Republic of Uzbekistan.",
  },
  {
    id: "participants",
    title: "Participants",
    content:
      "The International Olympiad is held for students under the age of 15 (born on or after January 1, 2010) studying in general education schools.",
  },
  {
    id: "registration",
    title: "Registration Procedure",
    content: [
      "Countries wishing to participate must contact alxorazmiy2025@gmail.com.",
      "The Organizing Committee collects the necessary information about the participants.",
      "Registration closes 30 days before the start of the International Olympiad.",
    ],
  },
  {
    id: "math-olympiad",
    title: "Mathematics Olympiad",
    content: [
      "Two rounds of written exams",
      "4 tasks per round, each worth 7 points (total: 28 points per round)",
      "4 hours (240 minutes) per round",
      "Maximum total score: 56 points",
    ],
  },
  {
    id: "informatics-olympiad",
    title: "Informatics Olympiad",
    content: [
      "Conducted over 2 days in an online system",
      "3 problems each day, worth 100 points each (total: 600 points)",
      "4 hours allotted each day",
      "Programs must be written in C++",
    ],
  },
  {
    id: "team-composition",
    title: "Team Composition",
    content:
      "Teams from foreign countries consist of 4 participants in Mathematics, 2 participants in Informatics, and 2 team leaders.",
  },
  {
    id: "awards",
    title: "Medals and Awards",
    content: [
      "Winners are determined based on final results",
      "Gold, silver, and bronze medals awarded",
      "Medals distributed in a 1:2:3 ratio",
      "Winners receive corresponding diplomas",
    ],
  },
  {
    id: "coordination",
    title: "Coordination",
    content:
      "Team leaders are responsible for defending the work of participants, and the work is evaluated by the jury panel.",
  },
  {
    id: "prohibited-actions",
    title: "Prohibited Actions",
    content: [
      "Violations of rules are not allowed",
      "Use of electronic devices (tablets, phones, smartwatches, etc.) is prohibited",
      "Violators will be disqualified",
      "A formal report will be prepared for any violations",
    ],
  },
];

import RegulationList from "@/components/regulations-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <RegulationList regulations={regulations} />
    </main>
  );
}
