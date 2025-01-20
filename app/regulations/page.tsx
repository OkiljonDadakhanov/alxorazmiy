import RegulationList from "@/components/regulations-list";

const regulations = [
  {
    id: 1,
    text: "The aims of the Junior Balkan Mathematical Olympiad (JBMO) include:",
    details: [
      "The challenging, encouragement and development of mathematically gifted school students in all participating member countries.",
      "The fostering of friendly relations among the students and teachers of the member countries.",
      "The creation of opportunities for exchanging school syllabus and practices.",
    ],
  },
  { id: 2, text: "The official language of the JBMO is English." },
  {
    id: 3,
    text: "The JBMO is organized once every year within June 23 to June 30.",
    details: [
      "Member countries include Albania, Bosnia & Herzegovina, Bulgaria, Cyprus, etc.",
      "Care should be taken that no country is hindered due to major religious holidays.",
    ],
  },
  {
    id: 4,
    text: "The JBMO can only be organized in one of the member countries.",
  },
  {
    id: 5,
    text: "New member countries must be accepted unanimously at least a year before participation.",
  },
];

export default function RegulationsPage() {
  return (
    <main>
      <RegulationList regulations={regulations} />
    </main>
  );
}
