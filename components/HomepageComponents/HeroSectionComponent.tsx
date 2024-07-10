'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const HeroSectionComponent = (props: Props) => {
  return (
    <div
      className="px-4 md:px-10 xl:px-20 sm:py-10 lg:py-32 text-center"
      id="hero"
    >
      <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }} className="text-recDark sm:font-recSemiBold sm:text-headerThree smd:display-two lg:text-textLarge dark:text-recLightGrey lg:font-recBold pb-6">
        Your Best Recruiting System!
      </motion.h1>
      <motion.p initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }} className="sm:display-small lg:text-headerSix 3xl:text-headerFour lg:font-recMedium text-recSubtle dark:text-recLightGrey md:w-2/3 3xl:w-1/2 mx-auto pb-10">
        RecruitRadar helps in connecting job seekers to their dream jobs and
        employers to top-notch candidates with trusted and structured matching
        system.
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} className="space-y-6 md:space-x-7 pb-8 lg:pb-16">
        <Button className="text-recLightGrey text-[24px] font-recMedium w-full h-12 md:w-72 md:h-16 hover:scale-105 transition transform duration-300">
          Find your next hire
        </Button>
        <Button
          variant="outline"
          className="text-[24px] font-recMedium w-full h-12 md:w-72 md:h-16 hover:scale-105 transition transform duration-300"
        >
          Find your next job
        </Button>
      </motion.div>

      <motion.div  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} className="flex items-center justify-center">
        <Image
          src="/hero-pic.jpg"
          width={826}
          height={463}
          alt="Hero Image"
          loading="lazy"
          className="object-center object-cover rounded-md lg:rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroSectionComponent;
