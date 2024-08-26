'use client';
import { useInView } from 'react-intersection-observer';

import React, { useState } from 'react';
import Image from 'next/image';
import FooterComponent from '@/components/FooterComponent';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';
import EmployerNavComponent from '@/components/EmployerNavComponent';
import { Button } from '@/components/ui/button';
import EmployerHeroComponent from '@/components/EmployerHeroComponent';
import EmployerBottomComponent from '@/components/EmployerBottomComponent';

import ContinuousScrollComponent from '@/components/ContinuousScrollComponent';

const Employer: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div className="dark:bg-[#000611] min-h-screen font-sans">
      <EmployerNavComponent />
      <div className="flex flex-col w-full lg:flex-row text-center md:text-left mt-14 md:mt-24 lg:mt-14 xl:mt-24 justify-between items-center gap-10 md:px-10 lg:pl-20 lg:pr-10 xl:pl-32 xl:pr-14 px-4 3xl:pr-80 3xl:pl-96">
        <div>
          <h1 className="text-headerTwo lg:text-headerThree xl:text-[56px] md:text-[56px] font-recBold leading-[48px] md:leading-[64px] lg:leading-[48px] xl:leading-[64px] mt-4 pb-4">
            <span className="text-recSubtle">Discover </span>
            and <span className="text-recPrimary"> Connect</span> <br></br>with
            your next perfect hire effortlessly.
          </h1>
          <p className="font-recMedium font-sans text-[18px] my-2 md:w-2/3 lg:pr-0">
            Build your employer brand & attract top talent. Stay visible, even
            when they are not actively searching.
          </p>
          <Button className="text-[18px] py-2 px-2 rounded-md mt-4 w-48 hover:scale-105 transition-all transform duration-300">
            Start Hiring
          </Button>
        </div>
        <div className='pl-7 md:pl-0'>
          <Image
            src="/3d-image.png"
            alt="men in an office"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>
      <div className='hidden md:flex'>
      <ContinuousScrollComponent />
      </div>
      <EmployerHeroComponent />
      <EmployerBottomComponent />
      <div
        ref={ref}
        className=" lg:grid dark:text-recLightGrey hidden grid-cols-3 items-center text-center my-10"
      >
        <div>
          <h2 className="font-recBold text-headerThree">
            {inView ? (
              <CountUp start={0} end={160} duration={2.5}></CountUp>
            ) : null}
            million+
          </h2>
          <p className="font-recMedium  text-headerFive">
            Candidate pool
          </p>
        </div>
        <div>
          <h2 className="font-recBold text-headerThree">
            {inView ? (
              <CountUp
                start={0}
                end={1.5}
                duration={2.5}
                decimals={1}
              ></CountUp>
            ) : null}
            million+
          </h2>
          <p className="font-recMedium  text-headerFive">
            Job data
          </p>
        </div>
        <div>
          <h2 className="font-recBold text-headerTwo">
            {inView ? (
              <CountUp start={0} end={90} duration={2.5}></CountUp>
            ) : null}
            %
          </h2>
          <p className="font-recMedium text-headerFive">
            Success stories
          </p>
        </div>
      </div>

      <div className="mt-16 flex text-recLightGrey gap-4 justify-center pb-40 md:pr-5 lg:pr-0">
        <div className="inline-block relative px-12 md:px-8 text-center">
          <div
            className="inline-block lg:bg-cover bg-center bg-cover md:px-14 md:py-10 lg:py-20 px-6 lg:px-32 py-6 bg-[url('/small-bg.png')] md:bg-[url('/opacity-bg.png')]"
            style={{
              borderRadius: '24px',
            }}
          >
            <div className="flex md:flex-row flex-col md:gap-10 lg:gap-32 gap-2">
              <div className="gap-4">
                <h5 className=" lg:text-headerFive font-recSemiBold text-textBody">
                  Ready to take your hiring to the next level?
                </h5>
                <p className="lg:text-textSmall font-recRegular text-[10px] ">
                  Sign up for Recruit Radar now and start Your Free Recruit
                  Radar Trial Today!
                </p>
              </div>
              <Button className="md:text-[18px] w-64 md:w-44 lg:w-64 hover:scale-105 transition-all transform duration-300 mt-5 md:mt-0">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Employer;
