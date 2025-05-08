import { MenuItem } from "@/types/navigation";

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "3-Al-Khwarizmi IMIO",
    submenu: [
      { label: "Organizing Committee", href: "/organization" },
      { label: "Scientific Committee(Maths)", href: "/organization#math" },
      {
        label: "Scientific Committee(Informatics)",
        href: "/organization#informatics",
      },
      { label: "Program", href: "/programme" },
      { label: "Regulation", href: "/regulations" },
    ],
  },
  { label: "Partnership", href: "/partnership" },
  { label: "Uzbekistan", href: "/uzbekistan" },
  {
    label: "IMIO",

    submenu: [
      { label: "About IMIO", href: "/about" },
      { label: "IMIO 2023", href: "/imio2023" },
      { label: "IMIO 2024", href: "/imio2024" },
    ],
  },
  {
    label: "Results/Problems",
    submenu: [
      { label: "Al-Khwarizmi IMIO problems", href: "/problems" },
      { label: "Al-Khwarizmi IMIO results", href: "/results" },
    ],
  },
  {
    label: "Media & Press",
    href: "/",
    submenu: [
      { label: "Media", href: "/media" },
      { label: "Press release", href: "/press" },
      { label: "News", href: "/news" },
    ],
  },
];
