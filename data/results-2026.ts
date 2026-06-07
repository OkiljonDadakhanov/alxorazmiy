import { Result } from "@/types/results";

export const results2026Files = {
  mathematics: {
    href: "/results/matematics_Khimio 2026 result_final.xlsx",
    filename: "matematics_Khimio 2026 result_final.xlsx",
    label: "Mathematics Final Results",
  },
  informatics: {
    href: "/results/Informatics_Khimio 2026 result_final.xlsx",
    filename: "Informatics_Khimio 2026 result_final.xlsx",
    label: "Informatics Final Results",
  },
} as const;

export const results2026: {
  mathematics: Result[];
  informatics: Result[];
} = {
  mathematics: [
    { rank: 1, name: "DOSTONBEK RAHMONKULOV", participant: "Uzbekistan", score: 80 },
    { rank: 2, name: "UMARBEK UBAYDULLAEV", participant: "Uzbekistan", score: 70 },
    { rank: 3, name: "ARNAT YERNAR", participant: "Kazakhstan", score: 67 },
    { rank: 4, name: "ELDORBEK KHAKIMOV", participant: "Uzbekistan", score: 61 },
    { rank: 5, name: "AKHMET BERDIMURAT", participant: "Kazakhstan", score: 60 },
    { rank: 6, name: "SERDAR NAZAROVEZOV", participant: "Turkmenistan", score: 58 },
    { rank: 7, name: "AKMYRAT AKMYRADOV", participant: "Turkmenistan", score: 57 },
    { rank: 8, name: "BEXULTAN ZHANDELDINOV", participant: "Kazakhstan", score: 56 },
    { rank: 9, name: "JARGAL BATGEREL", participant: "Mongolia", score: 56 },
    { rank: 10, name: "ASHRAFJON RAVSHANOV", participant: "Uzbekistan", score: 53 },
    { rank: 11, name: "ALDIYAR MUKHITULY", participant: "Kazakhstan", score: 52 },
  ],
  informatics: [
    { rank: 1, name: "Jakhonali Khaydaraliev", participant: "Uzbekistan", score: 800 },
    { rank: 2, name: "Nemțișor Andrei (online)", participant: "Romania (online)", score: 800 },
    { rank: 3, name: "Danciu Traian (online)", participant: "Romania (online)", score: 718.22 },
    { rank: 4, name: "Oysha Mirzatillaeva", participant: "Uzbekistan", score: 691 },
    { rank: 5, name: "Temurbek Ubaydullaev", participant: "Uzbekistan", score: 691 },
    { rank: 6, name: "Shahruz Erkinov", participant: "Uzbekistan", score: 686 },
    { rank: 7, name: "Raykhona Sanakulova", participant: "Uzbekistan", score: 648 },
    { rank: 8, name: "Alisher Yelaman", participant: "Kazakhstan", score: 640.2 },
    { rank: 9, name: "Emirkhan Sydykbaev", participant: "Kyrgyzstan", score: 611 },
    { rank: 10, name: "Mukhammadnabi Ashurov", participant: "Tajikistan", score: 592 },
    { rank: 11, name: "Humoyun Abduraufov", participant: "Uzbekistan", score: 582.61 },
    { rank: 12, name: "Bekten Abduvaliev", participant: "Kyrgyzstan", score: 570 },
    { rank: 13, name: "Bondoc Vlad (online)", participant: "Romania (online)", score: 568.71 },
    { rank: 14, name: "Isamatdin Baybolov", participant: "Uzbekistan", score: 568.11 },
  ],
};
