export interface RegulationItem {
  number: number
  text: string
  bullets?: string[]
}

export interface RegulationChapter {
  id: string
  number: number
  title: string
  items: RegulationItem[]
}

export const regulations: RegulationChapter[] = [
  {
    id: "general-provisions",
    number: 1,
    title: "General Provisions",
    items: [
      {
        number: 1,
        text:
          'These Regulations define the procedure for organizing and conducting the International Al-Khwarizmi Mathematics and Informatics Olympiad (hereinafter referred to as the "International Olympiad") among students of general secondary education schools, regardless of ownership form.',
      },
      {
        number: 2,
        text:
          "The International Olympiad may be held in various regions of Uzbekistan as well as in other countries.",
      },
      {
        number: 3,
        text: "The International Olympiad will have its own website.",
      },
    ],
  },
  {
    id: "objectives-and-tasks",
    number: 2,
    title: "Objectives and Tasks of the International Olympiad",
    items: [
      {
        number: 4,
        text: "The objectives of the International Olympiad are as follows:",
        bullets: [
          "to widely promote at the international level the great contributions of our ancestors to the development of world civilization;",
          "to create an environment for talented students to engage in friendly competition with their peers from foreign countries, helping them develop the skills necessary for successful participation in international Olympiads;",
          "to showcase the talents and creative abilities of students at the international level;",
          "to increase students' interest in studying exact sciences in depth.",
        ],
      },
      {
        number: 5,
        text: "The tasks of the International Olympiad are as follows:",
        bullets: [
          "to ensure that exact sciences are taught at educational institutions in accordance with modern requirements;",
          "to identify and encourage talented and gifted students in exact sciences by establishing a system of incentives;",
          "to help talented and gifted students in exact sciences showcase their knowledge at the international level;",
          "to enhance the pedagogical skills of teachers in exact sciences and provide them with opportunities to gain international experience;",
          "to further promote the achievements of talented students in the International Olympiad among their peers worldwide.",
        ],
      },
    ],
  },
  {
    id: "procedure",
    number: 3,
    title: "Procedure for Conducting the International Olympiad",
    items: [
      {
        number: 6,
        text:
          "A Republican Organizing Committee will be established to organize and conduct the International Olympiad, and it will be approved by the Ministry of Preschool and School Education of the Republic of Uzbekistan. The Ministry of Preschool and School Education of the Republic of Uzbekistan will coordinate the organization and conduct of the International Olympiad.",
      },
      {
        number: 7,
        text:
          "The International Olympiad is held for students under the age of 16 (born on or after December 25, 2011) studying in general education schools.",
      },
      {
        number: 8,
        text: "The International Olympiad in Mathematics consists of two rounds:",
        bullets: [
          "The first round is conducted in written form, consisting of 4 tasks, each scored up to 10 points (total of 40 points). Participants have 4 hours (240 minutes) to complete the tasks.",
          "The second round is also conducted in written form, consisting of 4 tasks, each scored up to 10 points (total of 40 points). Participants have 4 hours (240 minutes) to complete the tasks.",
          "The maximum possible score for both rounds is 80 points.",
        ],
      },
      {
        number: 9,
        text:
          "The International Olympiad in Informatics is held online over 2 days. Each day, participants receive 3 tasks.",
        bullets: [
          "Each fully solved task is automatically graded in the information system and awarded 100 points, with a total of 600 points possible.",
          "Participants have 4 hours per day to complete the tasks.",
          "The results are determined solely based on the scores obtained, with no penalty points for incorrect attempts.",
          "Participants must write program codes exclusively in the C++ programming language.",
        ],
      },
      {
        number: 10,
        text:
          "The composition of teams for the International Olympiad includes teams from foreign countries consisting of 4 participants in Mathematics, 4 participants in Informatics, and 2 team leaders.",
      },
      {
        number: 11,
        text:
          "Winners are determined based on final results, with the number of winners not exceeding 60% of the total participants. Gold, silver, and bronze medals, as well as corresponding diplomas, are awarded to winners in a 1:2:3 ratio.",
      },
      {
        number: 12,
        text:
          "The work of participants is defended by team leaders and evaluated by the jury.",
      },
      {
        number: 13,
        text:
          "The Organizing Committee ensures a unified scientific-methodological approach in preparing for and conducting the International Olympiad, forms and approves the jury, prepares the Olympiad tasks in Uzbek and English, organizes their translation into other languages while maintaining confidentiality, and establishes the grading criteria and final result determination procedure.",
      },
      {
        number: 14,
        text:
          "The jury ensures that the tasks meet international Olympiad standards and correspond to the required level of complexity.",
      },
      {
        number: 15,
        text:
          "The jury evaluates the tasks based on approved grading criteria and principles of fairness.",
      },
      {
        number: 16,
        text:
          "The use of tablets and mobile phones is prohibited during the Olympiad. Participants violating this rule will be disqualified by decision of the jury, and an official report will be signed by the jury chair and members.",
      },
    ],
  },
  {
    id: "jury-panel",
    number: 4,
    title: "The Jury Panel",
    items: [
      {
        number: 17,
        text:
          "To ensure impartiality, fairness, and transparency in determining the winners of the International Olympiad, a Jury consisting of up to 20 experienced international and local experts is formed and approved by the Organizing Committee. The Jury members elect a Chair from among themselves.",
      },
      {
        number: 18,
        text: "The Jury performs the following tasks:",
        bullets: [
          "evaluates the participants' work based on approved grading criteria and in consultation with team leaders;",
          "prepares and formalizes decision texts based on the results of the International Olympiad;",
          "announces the results of the International Olympiad in the presence of participants and team leaders;",
          "provides a detailed report on the results of the International Olympiad to the Organizing Committee and submits necessary documents.",
        ],
      },
    ],
  },
  {
    id: "observers",
    number: 5,
    title: "Observers",
    items: [
      {
        number: 19,
        text: "Observers perform the following duties:",
        bullets: [
          "familiarize the jury members with the Olympiad documents for the respective subject;",
          "identify participants who violate established procedures and regulations, document the violation, and submit a report to the Organizing Committee.",
        ],
      },
    ],
  },
  {
    id: "awarding",
    number: 6,
    title: "Awarding of International Olympiad Winners",
    items: [
      {
        number: 20,
        text:
          "Winners and prize recipients of the International Olympiad are awarded gold, silver, and bronze medals, diplomas, and commemorative gifts by the Organizing Committee.",
      },
    ],
  },
  {
    id: "final-provisions",
    number: 7,
    title: "Final Provisions",
    items: [
      {
        number: 21,
        text:
          "Any disputes arising from the application of these Regulations will be resolved in accordance with the relevant legal acts.",
      },
      {
        number: 22,
        text:
          "Persons responsible for violating the provisions of these Regulations will be held accountable in accordance with the applicable legal framework.",
      },
    ],
  },
]
