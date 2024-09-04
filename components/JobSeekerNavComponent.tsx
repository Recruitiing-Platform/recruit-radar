import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLogoComponent from "./NavLogoComponent";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import EmployerMobileNavComponent from "./EmployerMobileNavComponent";

type Props = {};

const EmployerNavComponent = (props: Props) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleNavBarScroll);

    return () => window.removeEventListener("scroll", handleNavBarScroll);
  }, []);

  return (
    <div className="md:pr-8 lg:pr-0">
      <nav
        className={`sm:hidden lg:flex dark:bg-[#000611] bg-recLight z-[100] lg:px-10 xxl:px-20 3xl:px-60 h-32 items-center lg:justify-around justify-between px-4 sticky top-0 ${
          scrolled ? "shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)]" : ""
        } `}
      >
        <NavLogoComponent />
        <div>
          <ul className="h-16 items-center gap-14 shadow-[2px_2px_8px_0px_rgba(194,193,193,0.59)] dark:shadow-[2px_2px_4px_2px_rgba(198,198,198,0.07)] border border-recLightGrey dark:border-recSecondary rounded-full px-14 hidden lg:flex">
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <Link href="#">For Recruiters</Link>
            </li>
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <Link href="#">For Job Seeker</Link>
            </li>
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <Link href="#">Company</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/signup" className="hidden lg:block">
            <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  bg-recPrimary text-recLightGrey bg-background h-10 w-40 hover:font-recBold transition duration-200">
              Create Account
            </span>
          </Link>
          <ModeToggle />
          <div
            aria-label="Toggle menu"
            className="p-2 rounded-full border border-[#F1F1F1] dark:border-[#242424] transition-all transform duration-500 md:hidden"
          >
            <Menu />
          </div>
        </div>
      </nav>
      <EmployerMobileNavComponent />
    </div>
  );
};

export default EmployerNavComponent;
