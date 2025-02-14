// navConfig.ts

export interface NavItem {
  path: string;
  label: string;
}

export const navigationItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/regulations", label: "Regulations" },
  { path: "/participants", label: "Participants" },
  { path: "/programme", label: "Programme" },
  { path: "/organization", label: "Organization" },
  { path: "/problems", label: "Problems" },
  { path: "/results", label: "Results" },
  { path: "/gallery", label: "Gallery" },
];
