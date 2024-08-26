import Link from "next/link";
import Image from "next/image";

type Props = {};

const NavLogoComponent = (props: Props) => {
  return (
    <>
      <Link href="/" className="hidden dark:flex">
        <Image
          src="/rr-dark.svg"
          width={120}
          height={30}
          loading="lazy"
          alt="RecruitRadar Logo"
        />
      </Link>
      <Link href="/" className="dark:hidden">
        <Image
          src="/rr_light.svg"
          width={120}
          height={30}
          loading="lazy"
          alt="RecruitRadar Logo"
        />
      </Link>
    </>
  );
};

export default NavLogoComponent;
