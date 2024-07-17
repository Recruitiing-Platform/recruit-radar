'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navData } from '@/data';
import { NavDataInterface } from '@/interfaces/HomepageInterface';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

type Props = {};

const MobileNavComponent = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleNavBarScroll);

    return () => window.removeEventListener('scroll', handleNavBarScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className={`sm:block lg:hidden ${scrolled ? 'shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)] sticky top-0 z-[100]' : ''
          }`}>
      <motion.nav
        className={`dark:bg-[#000611] bg-recLight flex items-center justify-between px-4 md:px-10 pt-6 pb-3 ${isOpen ? "w-screen top-0 z-10 fixed h-16" : "sticky top-0"} ${
            scrolled ? 'shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)] sticky top-0 z-[100]' : ''
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

        <div className="flex gap-3 items-center">
          {/* Change mode component */}
          <ModeToggle />
          {/* Hamburger menu */}
          <div
            aria-label="Toggle menu"
            className="p-2 rounded-full border border-[#F1F1F1] dark:border-[#242424] transition-all transform duration-500"
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            <Menu />
          </div>
        </div>
      </motion.nav>
      {isOpen && <div className='absolute top-0 left-0 right-0 h-screen z-10 bg-[#000]/70 overflow-hidden'></div>}
      {isOpen && <div className="bg-recLight dark:bg-[#000611] absolute top-0 right-0 w-[70%] h-screen z-20 pt-10">
        <div className='absolute right-4' onClick={() => setIsOpen(false)}>
          <X />
        </div>
        {/* Nav Items */}
        <ul className="flex flex-col items-center justify-center gap-8 py-28">
          {navData.map((data: NavDataInterface) => (
            <>
              <li
                className={
                  pathname === data.link
                    ? `text-[20px] font-recSemiBold text-recAccent`
                    : `text-[20px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
              >
                <Link href={data.link}>{data.name}</Link>
              </li>
            </>
          ))}
        </ul>
        <Button
          className="font-recSemiBold block mx-auto" onClick={() => router.push('/signup')}>Create Account</Button>
      </div>}
    </div>
  );
};

export default MobileNavComponent;
