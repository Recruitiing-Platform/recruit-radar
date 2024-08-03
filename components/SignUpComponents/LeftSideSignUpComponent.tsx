import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { useEffect, useState } from 'react';
import { texts } from '@/data';
import RightSideTextComponent from './RightSideTextComponent';

const LeftSideSignUpComponent = () => {
  return (
    <div className="hidden lg:flex w-[50%] flex-col items-center dark:bg-[#000611] bg-recLightGrey text-recSecondary relative">
      <div className="bg-gradient-to-r from-[#150096] to-[#9F0BA2] h-2 w-full rounded-sm"></div>
      <div className="flex items-center justify-between w-full p-10">
        <div>
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
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <RightSideTextComponent fromColor='#150096' toColor='#9F0BA2' className='relative md:w-[90%] lg:w-[70%] h-1/2 sm:hidden md:flex items-center dark:hidden justify-center' />
      <RightSideTextComponent fromColor='#150096' toColor='#9F0BA2' className='relative md:w-[90%] lg:w-[70%] h-1/2 sm:hidden md:dark:flex items-center hidden justify-center' />
      <div className="absolute bottom-0 left-0">
        <Image src="/left-img.png" width={350} height={300} alt="Circles" />
      </div>
    </div>
  );
};

export default LeftSideSignUpComponent;
