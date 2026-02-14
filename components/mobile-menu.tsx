import { MenuItem } from "@/types/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenuItem = ({ item }: { item: MenuItem }) => {
  const currentRoute = usePathname();

  if (item.submenu) {
    return (
      <details className="text-center">
        <summary className="cursor-pointer py-2">{item.label}</summary>
        <ul className="flex flex-col space-y-2">
          {item.submenu.map((sub, index) => (
            <li key={index}>
              <Link
                href={sub.href ?? "/"}
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    );
  }

  return (
    <Link
      href={item.href ?? "/"}
      className={`block px-4 py-2 ${
        currentRoute === item.href ? "text-yellow-500" : "hover:text-gray-400"
      }`}
    >
      {item.label}
    </Link>
  );
};

export default MobileMenuItem;
