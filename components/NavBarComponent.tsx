'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ButtonComponent from './ButtonComponent';
import { ModeToggle } from './ModeToggle';
import { usePathname, useRouter } from 'next/navigation';
import { navData } from '@/data';
import { NavDataInterface } from '@/interfaces/HomepageInterface';
import MobileNavComponent from './MobileNavComponent';

type Props = {};

const NavBarComponent = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleNavBarScroll);

    return () => window.removeEventListener('scroll', handleNavBarScroll);
  }, []);

  return (
    <>
    <nav
      className={`sm:hidden lg:flex dark:bg-[#000611] bg-recLight z-[100] lg:px-10 xxl:px-20 3xl:px-60 h-32 flex items-center justify-between sticky top-0 ${
        scrolled ? 'shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)]' : ''
      }`}
    >

      {/* Logo */}
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

      {/* Nav Items */}
      <ul className="flex h-16 items-center gap-7 shadow-[2px_2px_8px_0px_rgba(194,193,193,0.59)] dark:shadow-[2px_2px_4px_2px_rgba(198,198,198,0.07)] border border-recLightGrey dark:border-recSecondary rounded-full px-14">
        {navData.map((data: NavDataInterface, index: number) => (
          <>
            <li key={index}
              className={
                pathname === data.link
                  ? `text-[20px] 3xl:text-headerThree font-recSemiBold text-recAccent`
                  : `text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
              }
            >
              <Link href={data.link}>{data.name}</Link>
            </li>
          </>
        ))}
      </ul>

      <div className='flex gap-10 items-center'>
        {/* Register button */}
        <ButtonComponent
          btnText="Create Account"
          iconFill="#FFC8C8"
          className="w-48 3xl:w-72 font-recSemiBold"
          onClick={() => router.push('/signup')}
        />

        {/* Change mode component */}
        <ModeToggle />
      </div>
    </nav>
    <MobileNavComponent />
    </>
  );
};

export default NavBarComponent;
