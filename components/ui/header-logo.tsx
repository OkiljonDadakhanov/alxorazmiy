import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <Image
      className="rounded p-5"
      alt="Alxorazmiy logo"
      src="/logo/logowhite.png"
      width={180}
      height={180}
      priority
    />
  </Link>
);

export default Logo;
