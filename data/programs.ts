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
        time: "During the day",
        contestants:
          "Arrival of participants, check-in, and registration",
        leaders:
          "Arrival of participants, check-in, and registration",
        judges:
          "Arrival of participants, check-in, and registration",
      },
      {
        time: "07:00 – 09:00",
        contestants: "Breakfast",
        leaders: "Breakfast",
        judges: "Breakfast",
      },
      {
        time: "09:00 – 12:00",
        contestants:
          "Arrival of participants, check-in, and registration",
        leaders:
          "Arrival of participants, check-in, and registration",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "12:00 – 13:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants:
          "Arrival of participants, check-in, and registration",
        leaders:
          "Arrival of participants, check-in, and registration",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:30",
        contestants:
          "Nighttime bonfire: networking event outside the camp",
        leaders:
          "Nighttime bonfire: networking event outside the camp",
        judges:
          "Nighttime bonfire: networking event outside the camp",
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
        time: "09:00 – 10:00",
        contestants: "Preparations for the opening ceremony of the Olympiad",
        leaders: "Preparations for the opening ceremony of the Olympiad",
        judges: "Preparations for the opening ceremony of the Olympiad",
      },
      {
        time: "10:00 – 12:00",
        contestants: "Opening ceremony of the Olympiad",
        leaders: "Opening ceremony of the Olympiad",
        judges: "Opening ceremony of the Olympiad",
      },
      {
        time: "12:30 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Cruise excursion along the camp coastline",
        leaders: "Cruise excursion along the camp coastline",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "19:30 – 21:00",
        contestants: "Free time, preparation for the Olympiad tasks",
        leaders:
          "Gathering; translation of the first round of Olympiad questions",
        judges:
          "Gathering; translation of the first round of Olympiad questions",
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
        contestants: "Preparation for the first round of the Olympiad",
        leaders: "Translation processes",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "09:00 – 13:30",
        contestants: "The first round of the Olympiad",
        leaders: 'Visit to the "New Uzbekistan" University',
        judges: "The first round of the Olympiad",
      },
      {
        time: "13:30 – 14:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:30 – 19:30",
        contestants: "Visit to the Islamic Civilization center",
        leaders: "Visit to the Islamic Civilization center",
        judges: "Checking the Olympiad work",
      },
      {
        time: "19:30 – 20:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:30 – 21:30",
        contestants: "Free time, preparation for the Olympiad tasks",
        leaders:
          "Discussion on first round processes; translation of the second round of Olympiad questions",
        judges:
          "Discussion on first round processes; translation of the second round of Olympiad questions",
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
        contestants: "Preparation for the second round of the Olympiad",
        leaders: "Translation processes",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "09:00 – 13:30",
        contestants: "The second round of the Olympiad",
        leaders: "Tashkent Mallga sayohat",
        judges: "The second round of the Olympiad",
      },
      {
        time: "13:30 – 14:30",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:30 – 19:30",
        contestants: "Cruise excursion along the camp coastline",
        leaders: "Cruise excursion along the camp coastline",
        judges: "Checking the Olympiad work",
      },
      {
        time: "19:30 – 20:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:30 – 21:30",
        contestants:
          "Nighttime bonfire: networking event outside the camp",
        leaders:
          "Nighttime bonfire: networking event outside the camp",
        judges: "Discussion on second round processes",
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
        contestants: "Moderation (appeals processes)",
        leaders: "Moderation (appeals processes)",
        judges: "Moderation (appeals processes)",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 18:00",
        contestants: "Moderation (appeals processes)",
        leaders: "Moderation (appeals processes)",
        judges: "Moderation (appeals processes)",
      },
      {
        time: "18:30 – 19:30",
        contestants: "Dinner",
        leaders: "Dinner",
        judges: "Dinner",
      },
      {
        time: "20:00 – 22:00",
        contestants: "Preparation for the closing ceremony of the Olympiad",
        leaders: "Preparation for the closing ceremony of the Olympiad",
        judges: "Final results",
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
        contestants: "Preparation for the awarding ceremony",
        leaders: "Preparation for the awarding ceremony",
        judges: "Preparation for the awarding ceremony",
      },
      {
        time: "13:00 – 14:00",
        contestants: "Lunch",
        leaders: "Lunch",
        judges: "Lunch",
      },
      {
        time: "14:00 – 15:00",
        contestants: "Preparation for the awarding ceremony",
        leaders: "Preparation for the awarding ceremony",
        judges: "Preparation for the awarding ceremony",
      },
      {
        time: "15:00 – 17:30",
        contestants: "Olympiad awarding ceremony and closing ceremony",
        leaders: "Olympiad awarding ceremony and closing ceremony",
        judges: "Olympiad awarding ceremony and closing ceremony",
      },
      {
        time: "18:00 – 22:00",
        contestants: "Banquet",
        leaders: "Banquet",
        judges: "Banquet",
      },
      {
        time: "22:00",
        contestants: "Tracking departing participants",
        leaders: "Tracking departing participants",
        judges: "Tracking departing participants",
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
        time: "09:00 – 20:00",
        contestants: "Departure",
        leaders: "Departure",
        judges: "Departure",
      },
    ],
  },
];
