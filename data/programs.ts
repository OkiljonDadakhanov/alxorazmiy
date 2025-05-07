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
    title: "Day 1 - Wednesday",
    date: "May 7, 2025",
    programs: [
      {
        time: "During the day",
        contestants: "School placement",
        leaders: "",
        judges: "Hotel accommodation",
      },
      {
        time: "07:00 - 09:00",
        contestants: "Lunch (school)",
        leaders: "Breakfast (school)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "09:00 - 12:00",
        contestants: "",
        leaders: "",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "12:00 - 13:30",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "14:00 - 18:00",
        contestants: "",
        leaders: "",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 - 19:30",
        contestants: "Dinner (school)",
        leaders: "Dinner (school)",
        judges: "Dinner (school)",
      },
      {
        time: "19:30 - 21:00",
        contestants: "Various interactive games",
        leaders: "",
        judges: "",
      },
      {
        time: "20:00",
        contestants: "",
        leaders: "Return to the hotel",
        judges: "Return to the hotel",
      },
    ],
  },
  {
    title: "Day 2 - Thursday",
    date: "May 8, 2025",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "09:00 - 12:00",
        contestants: "Preparations for the opening ceremony of the Olympiad",
        leaders: "Preparations for the opening ceremony of the Olympiad",
        judges: "",
      },
      {
        time: "12:00 - 13:00",
        contestants: "Opening ceremony of the Olympiad (school)",
        leaders: "Opening ceremony of the Olympiad (school)",
        judges: "Opening ceremony of the Olympiad (school)",
      },
      {
        time: "13:00 - 14:00",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "14:00 - 18:00",
        contestants: "Alley of Writers Tour",
        leaders: "Alley of Writers Tour",
        judges: "Work on Olympiad tasks",
      },
      {
        time: "18:30 - 19:30",
        contestants: "Dinner (school)",
        leaders: "Dinner (school)",
        judges: "Dinner (school)",
      },
      {
        time: "19:30 - 21:00",
        contestants:
          "Free time, preparation for the first round of the Olympiad",
        leaders:
          "Meeting (school), Translation of the first round of Olympiad questions",
        judges:
          "Meeting (school), Translation of the first round of Olympiad questions",
      },
    ],
  },
  {
    title: "Day 3 - Friday",
    date: "May 9, 2025",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "08:00 - 09:00",
        contestants: "Preparing for the first round",
        leaders: "Translation process",
        judges: "Working with assignments",
      },
      {
        time: "09:00 - 13:00",
        contestants: "The first round of the Olympiad",
        leaders: "Visit to the University of New Uzbekistan",
        judges: "The first round of the Olympiad",
      },
      {
        time: "13:00 - 14:30",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "14:30 - 19:00",
        contestants: "A trip to the New Uzbekistan Park",
        leaders: "A trip to the New Uzbekistan Park",
        judges: "Checking the Olympiad work",
      },
      {
        time: "19:00 - 20:30",
        contestants: "Dinner (school)",
        leaders: "Dinner (school)",
        judges: "Dinner (school)",
      },
      {
        time: "20:30 - 21:30",
        contestants: "Free time, preparation for the second round",
        leaders:
          "Discussion on first round processes, Translation of the second round of Olympiad questions",
        judges:
          "Discussion on first round processes, Translation of the second round of Olympiad questions",
      },
    ],
  },
  {
    title: "Day 4 - Saturday",
    date: "May 10, 2025",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "08:00 - 09:00",
        contestants: "Preparation for the second round",
        leaders: "Translation process",
        judges: "Working with assignments",
      },
      {
        time: "09:00 - 14:00",
        contestants: "The second round of the Olympiad",
        leaders: "Visit to the Tashkent Presidential School",
        judges: "The second round of the Olympiad",
      },
      {
        time: "14:00 - 15:30",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "15:30 - 18:00",
        contestants: "A trip to the Victory Park memorial complex",
        leaders: "A trip to the Victory Park memorial complex",
        judges: "Checking the second round of work",
      },
      {
        time: "18:30 - 19:30",
        contestants: "Dinner (school)",
        leaders: "Dinner (school)",
        judges: "Dinner (school)",
      },
      {
        time: "19:30 - 21:00",
        contestants: "With the participation of volunteers, various games",
        leaders: "Discussion on the second round of processes",
        judges: "Discussion on the second round of processes",
      },
    ],
  },
  {
    title: "Day 5 - Sunday",
    date: "May 11, 2025",
    programs: [
      {
        time: "07:00 - 08:30",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "09:00 - 13:00",
        contestants: "Moderation (Appeals processes)",
        leaders: "Moderation (Appeals processes)",
        judges: "Moderation (Appeals processes)",
      },
      {
        time: "13:00 - 14:00",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "14:00 - 18:00",
        contestants: "Moderation (Appeals processes)",
        leaders: "Moderation (Appeals processes)",
        judges: "Moderation (Appeals processes)",
      },
      {
        time: "18:30 - 19:30",
        contestants: "Dinner (school)",
        leaders: "Dinner (school)",
        judges: "Dinner (school)",
      },
      {
        time: "20:00 - 22:00",
        contestants: "Preparation for the awarding ceremony",
        leaders: "Preparation for the awarding ceremony",
        judges: "Final results",
      },
    ],
  },
  {
    title: "Day 6 - Monday",
    date: "May 12, 2025",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "09:00 - 13:00",
        contestants: "Preparing for the awarding ceremony",
        leaders: "Preparing for the awarding ceremony",
        judges: "Travel",
      },
      {
        time: "13:00 - 14:30",
        contestants: "Lunch (school)",
        leaders: "Lunch (school)",
        judges: "Lunch (school)",
      },
      {
        time: "14:30 - 16:00",
        contestants:
          "Free time, preparation for the closing ceremony of the Olympiad",
        leaders:
          "Free time, preparation for the closing ceremony of the Olympiad",
        judges: "Travel",
      },
      {
        time: "16:00 - 17:30",
        contestants: "Olympiad Awarding Ceremony and Closing Ceremony (School)",
        leaders: "Olympiad Awarding Ceremony and Closing Ceremony (School)",
        judges: "Olympiad Awarding Ceremony and Closing Ceremony (School)",
      },
      {
        time: "18:00 - 21:00",
        contestants: "Banquet",
        leaders: "Banquet",
        judges: "Banquet",
      },
      {
        time: "21:00",
        contestants: "Tracking departing participants",
        leaders: "Tracking departing participants",
        judges: "Tracking departing participants",
      },
    ],
  },
  {
    title: "Day 7 - Tuesday",
    date: "May 13, 2025",
    programs: [
      {
        time: "07:00 - 09:00",
        contestants: "Breakfast (school)",
        leaders: "Breakfast (hotel)",
        judges: "Breakfast (hotel)",
      },
      {
        time: "09:00 - 20:00",
        contestants: "Departure",
        leaders: "Departure",
        judges: "Departure",
      },
    ],
  },
];
