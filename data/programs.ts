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
    title: "Day 1 - Sunday",
    date: "May 25, 2026",
    programs: [
      {
        time: "During the day",
        contestants: "",
        leaders: "",
        judges: "Arrival of participants, check-in, and registration",
      },
      {
        time: "07:00 - 09:00",
        contestants: "",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 - 12:00",
        contestants: "",
        leaders: "",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "12:00 - 13:30",
        contestants: "",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 - 18:00",
        contestants: "",
        leaders: "",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 - 19:30",
        contestants: "",
        leaders: "",
        judges: "Dinner",
      },
      {
        time: "19:30 - 21:30",
        contestants: "",
        leaders: "",
        judges: "Nighttime bonfire: Networking event outside the camp",
      },
    ],
  },
  {
    title: "Day 2 - Monday",
    date: "May 26, 2026",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "09:00 - 10:00",
        contestants: "",
        leaders: "",
        judges: "Preparations for the opening ceremony of the Olympiad",
      },
      {
        time: "10:00 - 12:00",
        contestants: "",
        leaders: "",
        judges: "Opening ceremony of the Olympiad",
      },
      {
        time: "12:30 - 14:00",
        contestants: "",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:00 - 18:00",
        contestants: "",
        leaders: "Cruise excursion along the camp coastline",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 - 19:30",
        contestants: "",
        leaders: "",
        judges: "Dinner",
      },
      {
        time: "19:30 - 21:00",
        contestants: "Free time, preparation for the olympiad tasks",
        leaders: "",
        judges: "Gathering",
      },
      {
        time: "",
        contestants: "",
        leaders: "",
        judges: "Translation of the first round of Olympiad questions",
      },
    ],
  },
  {
    title: "Day 3 - Tuesday",
    date: "May 27, 2026",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "08:00 - 09:00",
        contestants: "Preparation for the first round of the olympiad",
        leaders: "Translation processes",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "09:00 - 13:30",
        contestants: "The first round of the Olympiad",
        leaders: 'Visit to the "New Uzbekistan" University',
        judges: "The first round of the Olympiad",
      },
      {
        time: "13:30 - 14:30",
        contestants: "",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:30 - 19:30",
        contestants: "",
        leaders: "Visit to the Islamic Civilization Center",
        judges: "Checking the Olympiad work",
      },
      {
        time: "19:30 - 20:30",
        contestants: "",
        leaders: "",
        judges: "Dinner",
      },
      {
        time: "20:30 - 21:30",
        contestants: "Free time, preparation for the olympiad tasks",
        leaders: "",
        judges: "Discussion on first round processes",
      },
      {
        time: "",
        contestants: "",
        leaders: "",
        judges: "Translation of the second round of Olympiad questions",
      },
    ],
  },
  {
    title: "Day 4 - Wednesday",
    date: "May 28, 2026",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "08:00 - 09:00",
        contestants: "Preparation for the second round of the olympiad",
        leaders: "Translation processes",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "09:00 - 13:30",
        contestants: "The second round of the Olympiad",
        leaders: "Trip to Tashkent Mall",
        judges: "The second round of the Olympiad",
      },
      {
        time: "13:30 - 14:30",
        contestants: "",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:30 - 19:30",
        contestants: "",
        leaders: "Cruise excursion along the camp coastline",
        judges: "Checking the Olympiad work",
      },
      {
        time: "19:30 - 20:30",
        contestants: "",
        leaders: "",
        judges: "Dinner",
      },
      {
        time: "20:30 - 21:30",
        contestants: "Nighttime bonfire: Networking event outside the camp",
        leaders: "",
        judges: "Discussion on second round processes",
      },
    ],
  },
  {
    title: "Day 5 - Thursday",
    date: "May 29, 2026",
    programs: [
      {
        time: "07:00 - 08:30",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "09:00 - 13:00",
        contestants: "",
        leaders: "",
        judges: "Moderation (Appeals processes)",
      },
      {
        time: "13:00 - 14:00",
        contestants: "",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:00 - 18:00",
        contestants: "",
        leaders: "",
        judges: "Moderation (Appeals processes)",
      },
      {
        time: "18:30 - 19:30",
        contestants: "",
        leaders: "",
        judges: "Dinner",
      },
      {
        time: "20:00 - 22:00",
        contestants: "",
        leaders: "Preparation for the Closing Ceremony of the Olympiad",
        judges: "Final results",
      },
    ],
  },
  {
    title: "Day 6 - Friday",
    date: "May 30, 2026",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "09:00 - 13:00",
        contestants: "",
        leaders: "",
        judges: "Preparation for the awarding ceremony",
      },
      {
        time: "13:00 - 14:00",
        contestants: "",
        leaders: "",
        judges: "Lunch",
      },
      {
        time: "14:00 - 15:00",
        contestants: "",
        leaders: "",
        judges: "Preparation for the awarding ceremony",
      },
      {
        time: "15:00 - 17:30",
        contestants: "",
        leaders: "",
        judges: "Olympiad Awarding Ceremony and Closing Ceremony",
      },
      {
        time: "18:00 - 22:00",
        contestants: "",
        leaders: "",
        judges: "Banquet",
      },
      {
        time: "22:00",
        contestants: "",
        leaders: "",
        judges: "Tracking departing participants",
      },
    ],
  },
  {
    title: "Day 7 - Saturday",
    date: "May 31, 2026",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "",
        leaders: "",
        judges: "Breakfast",
      },
      {
        time: "09:00 - 20:00",
        contestants: "",
        leaders: "",
        judges: "Departure",
      },
    ],
  },
];
