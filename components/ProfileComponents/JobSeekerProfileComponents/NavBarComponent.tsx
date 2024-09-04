'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';
import { Bell, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LogoutAlertDialogComponent from '@/components/LogoutAlertDialogComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import MobileNavBarComponent from './MobileNavBarComponent';

type Props = {};

const NavBarComponent = (props: Props) => {
  const { rRUser } = useRecruitRadarHook();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleNavBarScroll);

    return () => window.removeEventListener('scroll', handleNavBarScroll);
  }, []);

  const avatarPicFallback = (rRUser?.displayName.split(' ')[0][0] + rRUser?.displayName.split(' ')[1][0]) || 'CN';

  return (
    <>
    <nav
      className={`hidden dark:bg-[#000611] bg-recLightGrey z-[100] h-20 md:flex items-center justify-between md:p-10 lg:px-14 sticky shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)] top-0 ${
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

      <div className="flex items-center px-2 py-0.5 gap-1 w-80 border border-recLightGrey dark:border-recSubtle bg-recLight dark:bg-[#000611] rounded-lg">
        <Input
          placeholder="Search"
          className="outline-none border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div className="cursor-pointer p-2 hover:bg-recSubtle dark:hover:bg-[#000611] rounded-full">
          <Search size={18} />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer hover:scale-105 transition-all transform duration-300">
          <Bell />
          <div className="w-2 h-2 rounded-full bg-recPrimary absolute top-0.5 right-0.5"></div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
            <div className="flex items-center gap-2 outline-none border-none">
              <div>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={rRUser?.photoURL || "https://github.com/shadcn.png"} />
                  <AvatarFallback>{avatarPicFallback}</AvatarFallback>
                </Avatar>
              </div>
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none bg-recLightGrey dark:bg-[#000] space-y-2 z-[200]">
            <DropdownMenuItem className="cursor-pointer hover:bg-recSecondary">
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-recSecondary">
              Notifications
            </DropdownMenuItem>
            <LogoutAlertDialogComponent>
              <span className="px-2 py-2 block text-recError hover:text-recError dark:hover:text-recError hover:font-recBold cursor-pointer">
                Log out
              </span>
            </LogoutAlertDialogComponent>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </nav>
    <MobileNavBarComponent />
    </>
  );
};

export default NavBarComponent;
