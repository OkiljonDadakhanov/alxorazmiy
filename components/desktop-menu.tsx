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
            <NavigationMenuTrigger className="bg-transparent text-slate-100 px-3 py-2 text-sm rounded-xl hover:text-[#00D1FF] hover:bg-white/5 transition-colors data-[state=open]:text-[#00D1FF] data-[state=open]:bg-white/10">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="mt-2 w-64 rounded-2xl border border-white/10 bg-[#040816]/95 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              {item.submenu.map((sub, index) => (
                <NavigationMenuLink asChild key={index} className="w-full">
                  <Link
                    href={sub.href ?? "/"}
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-[#00D1FF] rounded-xl cursor-pointer w-full whitespace-nowrap transition-colors"
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
          ? "text-[#00D1FF]"
          : "text-slate-200 hover:text-[#00D1FF]"
      }
    >
      <Link href={item.href ?? "/"}>{item.label}</Link>
    </li>
  );
};

export default DesktopMenuItem;
