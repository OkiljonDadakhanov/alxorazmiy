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
            <NavigationMenuTrigger className="bg-[#0a1e3f] text-white px-4 text-1xl py-2 rounded-lg hover:bg-gray-700 transition-colors">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-64">
              {item.submenu.map((sub, index) => (
                <NavigationMenuLink asChild key={index} className="w-full">
                  <Link
                    href={sub.href}
                    className="block px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer w-full whitespace-nowrap"
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
        currentRoute === item.href ? "text-yellow-500" : "hover:text-gray-400"
      }
    >
      <Link href={item.href ?? "/"}>{item.label}</Link>
    </li>
  );
};

export default DesktopMenuItem;
