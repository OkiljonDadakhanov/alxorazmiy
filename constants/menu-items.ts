import { MenuItem } from "@/types/navigation";

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "4-Al-Khwarizmi KhIMIOs",
    submenu: [
      { label: "Supervisory Committee", href: "/organization#supervisory" },
      { label: "Organizing Committee", href: "/organization" },
      { label: "Scientific Committee(Maths)", href: "/organization#math" },
      {
        label: "Scientific Committee(Informatics)",
        href: "/organization#informatics",
      },
      { label: "Program", href: "/programme" },
      { label: "Regulation", href: "/regulations" },
      { label: "Call for Questions", href: "/call-for-questions" },
    ],
  },
  { label: "Partnership", href: "/partnership" },
  {
    label: "Uzbekistan",
    submenu: [
      { label: "About Uzbekistan", href: "/uzbekistan" },
      { label: "Travel Details", href: "/travel-details" },
    ],
  },
  {
    label: "KhIMIOs",
    submenu: [
      { label: "About KhIMIOs", href: "/about" },
      { label: "KhIMIOs 2023", href: "/imio2023" },
      { label: "KhIMIOs 2024", href: "/imio2024" },
      { label: "KhIMIOs 2025", href: "/khimio2025" },
    ],
  },
  {
    label: "Results/Problems",
    submenu: [
      { label: "Al-Khwarizmi KhIMIOs problems", href: "/problems" },
      { label: "Al-Khwarizmi KhIMIOs results", href: "/results" },
    ],
  },
  {
    label: "News & Media",
    submenu: [
      { label: "Media", href: "/media" },
      { label: "Press release", href: "/press" },
      { label: "News", href: "/news" },
    ],
  },
];
