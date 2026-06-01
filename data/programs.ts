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
        contestants: "Check-in",
        leaders: "Check-in",
        judges: "Check-in",
      },
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 12:00",
        contestants: "Free time",
        leaders: "",
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
        leaders: "Interactive games with volunteers",
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
        contestants: "",
        leaders: "Registration (distribution of gifts)",
        judges: "Free time",
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
        contestants: "Interactive games with volunteers (sports day)",
        leaders: "",
        judges: "Discussion meeting",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 17:00",
        contestants: "Pre olympiad preparatory process",
        leaders: "",
        judges: "Discussion meeting",
      },
      {
        time: "18:00 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Opening Ceremony",
        leaders: "Opening Ceremony",
        judges: "Opening Ceremony",
      },
      {
        time: "21:00 – 22:00",
        contestants: "",
        leaders:
          "Preparation for the first round of the olympiad / Board games / Movie night; Translation of first round olympiad questions (online countries)",
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
        leaders: "Translation process (offline countries)",
        judges: "Working on olympiad problems",
      },
      {
        time: "09:00 – 13:00",
        contestants: "First Round of the Olympiad",
        leaders: "Excursion (Islamic Civilization Center)",
        judges: "First Round of the Olympiad",
      },
      {
        time: "13:00 – 15:00",
        contestants: "Lunch",
        leaders: "Lunch (Besh Kazan)",
        judges: "Lunch",
      },
      {
        time: "15:00 – 19:00",
        contestants:
          "Zakovat (mathematics and informatics); Appeal session (informatics)",
        leaders: "Excursion (Chorsu bazar)",
        judges: "Checking first round works",
      },
      {
        time: "19:00 – 20:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:30 – 21:30",
        contestants: "",
        leaders:
          "Preparation for the second round of the olympiad / Board games; Translation of second round olympiad questions (online countries)",
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
        leaders: "Translation process (offline countries)",
        judges: "Working on olympiad problems",
      },
      {
        time: "09:00 – 13:00",
        contestants: "Second Round of the Olympiad",
        leaders: "Excursion (Amirsay resort)",
        judges: "Second Round of the Olympiad",
      },
      {
        time: "13:00 – 15:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "15:00 – 19:00",
        contestants:
          "National sports games of participating countries (mathematics and informatics); Appeal session (informatics)",
        leaders: "National games of participating countries",
        judges: "Checking second round works",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Interactive games with volunteers / Board games",
        leaders: "",
        judges: "Discussion of first round proceedings",
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
        judges: "Appeals process (mathematics/informatics)",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch (Besh Kazan)",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Excursion (Tashkent City)",
        leaders: "",
        judges: "Appeals process (mathematics/informatics)",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:00 – 22:00",
        contestants: "Board games / Movie night",
        leaders: "",
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
        leaders: "Sports day (national games of participating countries)",
        judges: "Excursion (Islamic Civilization Center)",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch (Besh Kazan)",
      },
      {
        time: "14:30 – 16:00",
        contestants: "Free time / Board games",
        leaders: "Free time / Board games",
        judges: "Free time / Board games",
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
        contestants: "Departure",
        leaders: "Departure",
        judges: "Departure",
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
