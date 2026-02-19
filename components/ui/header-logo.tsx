import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <Image
      className="rounded p-1"
      alt="Alxorazmiy logo"
      src="/logo/logowhite.png"
      width={70}
      height={70}
      priority
    />
  </Link>
);

export default Logo;
