export interface MenuItem {
    label: string;
    href?: string;
    submenu?: SubMenuItem[];
  }
  
  export interface SubMenuItem {
    label: string;
    href: string;
  }