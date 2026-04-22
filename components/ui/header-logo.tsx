import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link
    href="/"
    className="relative flex h-14 w-[92px] shrink-0 items-center sm:h-16 sm:w-[112px] lg:h-[4.5rem] lg:w-[128px]"
  >
    <Image
      className="object-contain object-left"
      alt="Alxorazmiy logo"
      src="/logo/vertikal.png"
      fill
     sizes="(max-width: 640px) 180px, (max-width: 1034px) 220px, 260px"
      priority
    />
  </Link>
);

export default Logo;
