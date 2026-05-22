export interface Program {
  time: string;
  contestants: string;
  leaders: string;
  judges: string;
}

export const programsData: {
  title: string;
  date: string;
  programs: Program[];
}[] = [
  {
    title: "Day 1 - Monday",
    date: "June 1, 2026",
    programs: [
      {
        time: "Throughout the day",
        contestants: "Check-in at the resort",
        leaders: "Check-in at the resort",
        judges: "Check-in at the resort",
      },
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 12:00",
        contestants: "",
        leaders: "Registration (distribution of gifts)",
        judges: "Working on olympiad problems",
      },
      {
        time: "12:00 – 13:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants: "",
        leaders: "Free time",
        judges: "Working on olympiad problems",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Various interactive games",
        leaders: "",
        judges: "Rest",
      },
    ],
  },
  {
    title: "Day 2 - Tuesday",
    date: "June 2, 2026",
    programs: [
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 12:00",
        contestants: "",
        leaders: "Various interactive games",
        judges: "Working on olympiad problems",
      },
      {
        time: "12:00 – 13:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 17:00",
        contestants: "",
        leaders: "Preparation for the Opening Ceremony",
        judges: "Working on olympiad problems",
      },
      {
        time: "18:00 – 19:30",
        contestants: "Opening Ceremony",
        leaders: "Opening Ceremony",
        judges: "Opening Ceremony",
      },
      {
        time: "19:30 – 20:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:30 – 22:00",
        contestants: "Free time (preparation for the first round of the olympiad)",
        leaders: "Translation of first round olympiad questions",
        judges: "Meeting",
      },
    ],
  },
  {
    title: "Day 3 - Wednesday",
    date: "June 3, 2026",
    programs: [
      {
        time: "07:00 – 08:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "08:00 – 09:00",
        contestants: "Preparation for the first round",
        leaders: "Translation process",
        judges: "Working on tasks",
      },
      {
        time: "09:00 – 13:00",
        contestants: "First Round of the Olympiad",
        leaders: "Excursion (Islamic Civilization Center)",
        judges: "First Round of the Olympiad",
      },
      {
        time: "13:00 – 14:30",
        contestants: "Lunch",
        leaders: "Lunch (Besh qozon)",
        judges: "Lunch",
      },
      {
        time: "14:30 – 19:00",
        contestants: "Rest",
        leaders: "Excursion (Chorsu Bazaar)",
        judges: "Grading olympiad works",
      },
      {
        time: "19:00 – 20:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:30 – 21:30",
        contestants: "Free time (preparation for the second round of the olympiad)",
        leaders: "Translation of second round olympiad questions",
        judges: "Discussion of first round proceedings",
      },
    ],
  },
  {
    title: "Day 4 - Thursday",
    date: "June 4, 2026",
    programs: [
      {
        time: "07:00 – 08:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "08:00 – 09:00",
        contestants: "Preparation for the second round",
        leaders: "Translation process",
        judges: "Working on tasks",
      },
      {
        time: "09:00 – 13:00",
        contestants: "Second Round of the Olympiad",
        leaders: "Excursion (Amirsoy resort)",
        judges: "Second Round of the Olympiad",
      },
      {
        time: "13:30 – 14:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "15:00 – 18:00",
        contestants: "",
        leaders:
          "Various interactive games (national games of participating countries)",
        judges: "Grading second round works",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Various games with volunteers",
        leaders: "",
        judges: "Discussion of second round proceedings",
      },
    ],
  },
  {
    title: "Day 5 - Friday",
    date: "June 5, 2026",
    programs: [
      {
        time: "07:00 – 08:30",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 13:00",
        contestants: "Excursion (Islamic Civilization Center)",
        leaders: "",
        judges: "Appeals process",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch (Besh qozon)",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Excursion (Tashkent City)",
        leaders: "",
        judges: "Appeals process",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:00 – 22:00",
        contestants: "",
        leaders: "Preparation for the Awarding Ceremony",
        judges: "Finalizing results",
      },
    ],
  },
  {
    title: "Day 6 - Saturday",
    date: "June 6, 2026",
    programs: [
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 13:00",
        contestants: "",
        leaders:
          "Various interactive games (national games of participating countries)",
        judges: "Excursion (Islamic Civilization Center)",
      },
      {
        time: "13:00 – 14:30",
        contestants: "",
        leaders: "Lunch",
        judges: "Lunch (Besh qozon)",
      },
      {
        time: "14:30 – 16:00",
        contestants: "Free time (preparation for the closing ceremony)",
        leaders: "Free time (preparation for the closing ceremony)",
        judges: "Free time (preparation for the closing ceremony)",
      },
      {
        time: "18:00 – 19:30",
        contestants: "Award and Closing Ceremony",
        leaders: "Award and Closing Ceremony",
        judges: "Award and Closing Ceremony",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Banquet",
        leaders: "Banquet",
        judges: "Banquet",
      },
      {
        time: "21:00",
        contestants: "Farewell for departing participants",
        leaders: "Farewell for departing participants",
        judges: "Farewell for departing participants",
      },
    ],
  },
  {
    title: "Day 7 - Sunday",
    date: "June 7, 2026",
    programs: [
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "Throughout the day",
        contestants: "Departure",
        leaders: "Departure",
        judges: "Departure",
      },
      {
        time: "13:00 – 14:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
    ],
  },
];
