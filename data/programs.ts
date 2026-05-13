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
        contestants: "Check-in at School",
        leaders: "Check-in at the Hotel",
        judges: "Check-in at the Hotel",
      },
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "09:00 – 12:00",
        contestants: "Registration (distribution of gifts)",
        leaders: "Registration (distribution of gifts)",
        judges: "Working on olympiad problems (School)",
      },
      {
        time: "12:00 – 13:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Free time",
        leaders: "Free time",
        judges: "Working on olympiad problems (School)",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner (School)",
        leaders: "Dinner (School)",
        judges: "Dinner (School)",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Interactive games",
        leaders: "Return to Hotel (20:00)",
        judges: "Return to Hotel (20:00)",
      },
    ],
  },
  {
    title: "Day 2 - Tuesday",
    date: "June 2, 2026",
    programs: [
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "09:00 – 10:00",
        contestants: "Preparation for the Opening Ceremony (School)",
        leaders: "Preparation for the Opening Ceremony (School)",
        judges: "Preparation for the Opening Ceremony (School)",
      },
      {
        time: "10:00 – 12:00",
        contestants: "Opening Ceremony (School)",
        leaders: "Opening Ceremony (School)",
        judges: "Opening Ceremony (School)",
      },
      {
        time: "12:00 – 13:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "14:00 – 17:00",
        contestants: "Excursion (Tashkent Polytechnic Museum)",
        leaders: "Excursion (Tashkent Polytechnic Museum)",
        judges: "Working on olympiad problems (School)",
      },
      {
        time: "18:00 – 19:30",
        contestants: "Dinner (School)",
        leaders: "Dinner (School)",
        judges: "Dinner (School)",
      },
      {
        time: "19:30 – 21:00",
        contestants:
          "Free time (preparation for the first round of the olympiad)",
        leaders:
          "Meeting (School); Translation of first round olympiad questions (School)",
        judges:
          "Meeting (School); Translation of first round olympiad questions (School)",
      },
    ],
  },
  {
    title: "Day 3 - Wednesday",
    date: "June 3, 2026",
    programs: [
      {
        time: "07:00 – 08:00",
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "08:00 – 09:00",
        contestants: "Preparation for the first round (School)",
        leaders: "Translation process (School)",
        judges: "Working on olympiad problems (School)",
      },
      {
        time: "09:00 – 13:00",
        contestants: "First Round of the Olympiad (School)",
        leaders: "Excursion (Tashkent Presidential School)",
        judges: "First Round of the Olympiad (School)",
      },
      {
        time: "13:00 – 14:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "14:30 – 19:00",
        contestants: "Excursion (Islamic Civilization Center)",
        leaders: "Excursion (Islamic Civilization Center)",
        judges: "Grading first round works (School)",
      },
      {
        time: "19:00 – 20:30",
        contestants: "Dinner (School)",
        leaders: "Dinner (School)",
        judges: "Dinner (School)",
      },
      {
        time: "20:30 – 21:30",
        contestants:
          "Free time (preparation for the second round of the olympiad)",
        leaders:
          "Discussion of first round proceedings (School); Translation of second round olympiad questions (School)",
        judges:
          "Discussion of first round proceedings (School); Translation of second round olympiad questions (School)",
      },
    ],
  },
  {
    title: "Day 4 - Thursday",
    date: "June 4, 2026",
    programs: [
      {
        time: "07:00 – 08:00",
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "08:00 – 09:00",
        contestants: "Preparation for the second round (School)",
        leaders: "Translation process (School)",
        judges: "Working on olympiad problems (School)",
      },
      {
        time: "09:00 – 14:00",
        contestants: "Second Round of the Olympiad (School)",
        leaders: "Excursion (Chorsu Bazaar)",
        judges: "Second Round of the Olympiad (School)",
      },
      {
        time: "14:00 – 15:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "15:30 – 18:00",
        contestants: "Excursion (Victory Park Memorial Complex)",
        leaders: "Excursion (Victory Park Memorial Complex)",
        judges: "Grading second round works (School)",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner (School)",
        leaders: "Dinner (School)",
        judges: "Dinner (School)",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Interactive games",
        leaders: "Discussion of second round proceedings (School)",
        judges: "Discussion of second round proceedings (School)",
      },
    ],
  },
  {
    title: "Day 5 - Friday",
    date: "June 5, 2026",
    programs: [
      {
        time: "07:00 – 08:30",
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "09:00 – 13:00",
        contestants: "Sport games (School)",
        leaders: "Appeals process (School)",
        judges: "Appeals process (School)",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Sport games (School)",
        leaders: "Appeals process (School)",
        judges: "Appeals process (School)",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner (School)",
        leaders: "Dinner (School)",
        judges: "Dinner (School)",
      },
      {
        time: "20:00 – 22:00",
        contestants: "Preparation for the Awarding Ceremony",
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
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "09:00 – 13:00",
        contestants: "Excursion (Tashkent City Mall)",
        leaders: "Excursion (Tashkent City Mall)",
        judges: "Excursion (Tashkent City Mall)",
      },
      {
        time: "13:00 – 14:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
      {
        time: "14:30 – 16:00",
        contestants: "Free time (preparation for the awarding ceremony)",
        leaders: "Free time (preparation for the awarding ceremony)",
        judges: "Free time (preparation for the awarding ceremony)",
      },
      {
        time: "16:00 – 17:30",
        contestants: "Award and Closing Ceremony (School)",
        leaders: "Award and Closing Ceremony (School)",
        judges: "Award and Closing Ceremony (School)",
      },
      {
        time: "18:00 – 21:00",
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
        contestants: "Breakfast (School)",
        leaders: "Breakfast (Hotel)",
        judges: "Breakfast (Hotel)",
      },
      {
        time: "09:00 – 20:00",
        contestants: "Departure",
        leaders: "Departure",
        judges: "Departure",
      },
      {
        time: "13:00 – 14:30",
        contestants: "Lunch (School)",
        leaders: "Lunch (School)",
        judges: "Lunch (School)",
      },
    ],
  },
];
