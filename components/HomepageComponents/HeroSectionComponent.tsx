import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

type Props = {};

const HeroSectionComponent = (props: Props) => {
  return (
    <div className="px-20 py-32 text-center">
      <h1 className="text-recDark text-textLarge dark:text-recLightGrey font-[800] pb-6">
        Your Best Recruiting System!
      </h1>
      <p className="text-headerSix font-recMedium text-recSubtle dark:text-recLightGrey w-2/3 mx-auto pb-10">
        RecruitRadar helps in connecting job seekers to their dream jobs and
        employers to top-notch candidates with trusted and structured matching
        system.
      </p>
      <div className="space-x-7 pb-16">
        <Button className="text-recLightGrey text-[24px] font-recMedium w-72 h-16 hover:scale-105 transition transform duration-300">
          Find your next hire
        </Button>
        <Button
          variant="outline"
          className="text-[24px] font-recMedium w-72 h-16 hover:scale-105 transition transform duration-300"
        >
          Find your next job
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/hero-pic.jpg"
          width={826}
          height={463}
          alt="Hero Image"
          loading="lazy"
          className="object-center object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSectionComponent;
