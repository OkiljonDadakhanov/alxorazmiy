export interface Program {
  time: string;
  contestants: string;
  deputyLeaders: string;
  leaders: string;
}

export const programsData: {
  title: string;
  date: string;
  programs: Program[];
}[] = [
  {
    title: "Day 1 - Wednesday",
    date: "May 7",
    programs: [
      {
        time: "08:00 - 11:00",
        contestants: "check-in (school)",
        deputyLeaders: "check-in (hotel)",
        leaders: "check-in (hotel)",
      },
      {
        time: "11:00 - 13:00",
        contestants: "registration (hotel)",
        deputyLeaders: "registration (hotel)",
        leaders: "registration (hotel)",
      },
      {
        time: "13:00 - 14:00",
        contestants: "lunch (school)",
        deputyLeaders: "lunch (hotel)",
        leaders: "lunch (hotel)",
      },
      {
        time: "18:00 - 19:00",
        contestants: "dinner (school)",
        deputyLeaders: "dinner (hotel)",
        leaders: "dinner (hotel)",
      },
      {
        time: "20:00 - 22:00",
        contestants: "1st meeting",
        deputyLeaders: "1st meeting",
        leaders: "1st meeting",
      },
    ],
  },
  {
    title: "Day 2 - Thursday",
    date: "May 8",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (hotel)",
        leaders: "breakfast (hotel)",
      },
      {
        time: "10:00 - 12:00",
        contestants: "opening ceremony",
        deputyLeaders: "opening ceremony",
        leaders: "opening ceremony",
      },
      {
        time: "13:00 - 14:00",
        contestants: "lunch (school)",
        deputyLeaders: "lunch (hotel)",
        leaders: "lunch (hotel)",
      },
      {
        time: "15:00 - 17:00",
        contestants: "excursion",
        leaders: "excursion",
        deputyLeaders: "preparation for the exam",
      },
      {
        time: "18:00 - 19:00",
        contestants: "dinner (school)",
        deputyLeaders: "dinner (hotel)",
        leaders: "dinner (hotel)",
      },
    ],
  },
  {
    title: "Day 3 - Friday",
    date: "May 9",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (school)",
        leaders: "breakfast (school)",
      },
      {
        time: "08:00 - 09:00",
        contestants: "free time",
        deputyLeaders: "translation exam",
        leaders: "translation exam",
      },
      {
        time: "09:30 - 13:30",
        contestants: "exam day-1",
        deputyLeaders: "free time",
        leaders: "free time",
      },
      {
        time: "13:30 - 14:30",
        contestants: "lunch(school)",
        deputyLeaders: "lunch(school)",
        leaders: "lunch(school)",
      },
      {
        time: "15:00 - 17:00",
        contestants: "excursion",
        leaders: "excursion",
        deputyLeaders: "check of exam day-1",
      },
      {
        time: "18:00 - 19:00",
        contestants: "dinner(school)",
        deputyLeaders: "dinner(school)",
        leaders: "dinner(hotel)",
      },
    ],
  },

  {
    title: "Day 4 - Saturday",
    date: "May 10",
    programs: [
      {
        time: "07:00 - 08:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (school)",
        leaders: "breakfast (school)",
      },
      {
        time: "08:00 - 09:00",
        contestants: "free time",
        deputyLeaders: "translation exam",
        leaders: "translation exam",
      },
      {
        time: "09:30 - 13:30",
        contestants: "exam day-2",
        deputyLeaders: "free time",
        leaders: "free time",
      },
      {
        time: "13:30 - 14:30",
        contestants: "lunch(school)",
        leaders: "lunch(school)",
        deputyLeaders: "lunch(school)",
      },
      {
        time: "15:00 - 17:00",
        contestants: "excursion",
        leaders: "excursion",
        deputyLeaders: "check of exam day-2",
      },
      {
        time: "18:00 - 19:00",
        contestants: "dinner(school)",
        deputyLeaders: "dinner(school)",
        leaders: "dinner(hotel)",
      },
    ],
  },

  {
    title: "Day 5 - Sunday",
    date: "May 11",
    programs: [
      {
        time: "06:00 - 07:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (hotel)",
        leaders: "breakfast (hotel)",
      },
      {
        time: "07:00 - 09:00",
        contestants: "physical activity",
        deputyLeaders: "moderation of day-1",
        leaders: "moderation of day-1",
      },
      {
        time: "13:00 - 14:00",
        contestants: "lunch(school)",
        leaders: "lunch(school)",
        deputyLeaders: "lunch(school)",
      },
      {
        time: "17:00 - 19:00",
        contestants: "mental activity",
        leaders: "moderation of day-2",
        deputyLeaders: "moderation of day-2",
      },
      {
        time: "20:00 - 21:00",
        contestants: "dinner(school)",
        deputyLeaders: "dinner(school)",
        leaders: "dinner(school)",
      },
    ],
  },

  {
    title: "Day 6 - Monday",
    date: "May 12",
    programs: [
      {
        time: "06:00 - 07:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (hotel)",
        leaders: "breakfast (hotel)",
      },
      {
        time: "10:00 - 12:00",
        contestants: "free time",
        deputyLeaders: "free time",
        leaders: "free time",
      },
      {
        time: "13:00 - 14:00",
        contestants: "lunch(school)",
        leaders: "lunch(hotel)",
        deputyLeaders: "lunch(hotel)",
      },
      {
        time: "16:00 - 18:00",
        contestants: "closing ceremony",
        leaders: "closing ceremony",
        deputyLeaders: "closing ceremony",
      },
      {
        time: "19:00 - 21:00",
        contestants: "gala dinner",
        deputyLeaders: "gala dinner",
        leaders: "gala dinner",
      },
    ],
  },

  {
    title: "Day 2 - Tuesday",
    date: "May 13",
    programs: [
      {
        time: "06:00 - 07:00",
        contestants: "breakfast (school)",
        deputyLeaders: "breakfast (hotel)",
        leaders: "breakfast (hotel)",
      },
      {
        time: "08:00 - 13:00",
        contestants: "departure",
        deputyLeaders: "departure",
        leaders: "departure",
      },
      {
        time: "13:00 - 14:00",
        contestants: "lunch(school)",
        leaders: "lunch(hotel)",
        deputyLeaders: "lunch(hotel)",
      },
    ],
  },
];
