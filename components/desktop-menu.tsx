import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItem } from "@/types/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopMenuItem = ({ item }: { item: MenuItem }) => {
  const currentRoute = usePathname();

  if (item.submenu) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-slate-800 px-3 py-2 text-sm rounded-xl hover:text-[#1E3A8A] hover:bg-slate-100 transition-colors data-[state=open]:text-[#1E3A8A] data-[state=open]:bg-slate-100">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="mt-2 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl backdrop-blur-sm">
              {item.submenu.map((sub, index) => (
                <NavigationMenuLink asChild key={index} className="w-full">
                  <Link
                    href={sub.href ?? "/"}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A] rounded-xl cursor-pointer w-full whitespace-nowrap transition-colors"
                  >
                    {sub.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <li
      className={
        currentRoute === item.href
          ? "text-[#1E3A8A]"
          : "text-slate-700 hover:text-[#1E3A8A]"
      }
    >
      <Link href={item.href ?? "/"}>{item.label}</Link>
    </li>
  );
};

export default DesktopMenuItem;
