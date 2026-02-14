import { MenuItem } from "@/types/navigation";

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "4-Al-Khwarizmi KHIMIO",
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
    label: "KHIMIO",
    submenu: [
      { label: "About KHIMIO", href: "/about" },
      { label: "KHIMIO 2023", href: "/imio2023" },
      { label: "KHIMIO 2024", href: "/imio2024" },
      { label: "KHIMIO 2025", href: "/khimio2025" },
    ],
  },
  {
    label: "Results/Problems",
    submenu: [
      { label: "Al-Khwarizmi KHIMIO problems", href: "/problems" },
      { label: "Al-Khwarizmi KHIMIO results", href: "/results" },
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
