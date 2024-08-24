'use client';
import { useInView } from 'react-intersection-observer';

import React, { useState } from 'react';
import Image from 'next/image';
import FooterComponent from '@/components/FooterComponent';
import NavBarComponent from '@/components/NavBarComponent';
import { ModeToggle } from '@/components/ModeToggle';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ButtonComponent from '@/components/ButtonComponent';
import { useRouter } from 'next/navigation';
import EmployerNavComponent from '@/components/EmployerNavComponent';
import { Button } from '@/components/ui/button';
import { employerSliderImages } from '@/data';
import { EmployerDataInterface } from '@/interfaces/HomepageInterface';
import EmployerHeroComponent from '@/components/EmployerHeroComponent';

const Employer: React.FC = () => {
  const router = useRouter();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="dark:bg-[#000611] min-h-screen font-sans">
      <EmployerNavComponent />
      <div className="flex flex-col w-full lg:flex-row text-center md:text-left mt-24 justify-between items-center gap-10 pl-32 pr-14">
        <div>
          <h1 className="text-[56px] font-recBold leading-[70px] mt-4 pb-4">
            <span className="text-recSubtle">Discover </span>
            and <span className="text-recPrimary"> Connect</span> <br></br>with
            your next perfect <br></br>
            hire effortlessly.
          </h1>
          <p className="font-recMedium font-sans text-[18px] my-2">
            Build your employer brand & attract top talent. Stay visible, even
            when they are not actively searching.
          </p>
          <a href="#">
            <Button className="text-[18px] py-2 px-2 rounded-md mt-4 w-48">
              Start Hiring
            </Button>
          </a>
        </div>
        <div>
          <Image
            src="/3d-image.png"
            alt="men in an office"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>
      <div className="lg:flex hidden justify-center mt-20 gap-24">
        {employerSliderImages.map((data: EmployerDataInterface, index: number) => 
          (
          <React.Fragment key={index}>
          <Image
            src={data.image}
            alt={data.altText}
            width={100}
            height={100}
          />
          </React.Fragment>
          )
        )}
      </div>
      <EmployerHeroComponent />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-40 mt-4 place-items-center px-4">
        <div>
          <Image
            className="lg:mx-36"
            src="/data-extract.png"
            alt="A man extracting data"
            width={400}
            height={300}
          ></Image>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-headerTwo font-recBold mb-4 mt-4">
            Everything you need to build<br></br> your best team
          </h2>
          <p className="text-textSmall text-[rgba(238, 238, 240, 1)] mb-8">
            AI Radar, our advanced sourcing technology, leverages the power of
            our massive<br></br> candidate pool (160 million+) and job data (1.5
            million+) to streamline your<br></br> recruitment process. Developed
            by our expert data science team, AI Radar utilizes
            <br></br> publicly available information to deliver you:
          </p>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 text-[rgba(238, 238, 240, 1)] place-items-center text-left">
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                Rediscover relevant candidates who applied in the past
              </span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                Career page builder that<br></br> highlights your jobs.
              </span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Auto-fill applications and mobile optimization.</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                One-click posting to 200+<br></br> job sites.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:mt-60 mt-10 justify-center lg:gap-24 px-4">
        <div>
          <h2 className="text-headerTwo font-recBold mb-4 mt-4">
            Connect with Top Talent<br></br> Anywhere in just one click
          </h2>
          <p className="text-textSmall text-[rgba(238, 238, 240, 1)] mb-8">
            Recruit Radars built-in video, audio conferencing and in-app
            messaging allow you to<br></br> conduct remote interviews
            seamlessly. Assess candidates skills and easily<br></br> communicate
            and collaborate with your team from the comfort of your desk,
            <br></br> regardless of location.
          </p>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 text-[rgba(238, 238, 240, 1)] place-items-center text-left">
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Candidate Communication</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Teams Collaboration</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Talent Pipeline</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Seamless Interview</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/messaging.png"
            alt="Messaging"
            width={500}
            height={200}
          ></Image>
        </div>
      </div>
      <div
        ref={ref}
        className=" lg:grid  hidden grid-cols-3 items-center text-center mt-48"
      >
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerThree">
            {inView ? (
              <CountUp start={0} end={160} duration={2.5}></CountUp>
            ) : null}
            million+
          </h2>
          <p className="text-recLightGrey font-recMedium  text-headerFive">
            Candidate pool
          </p>
        </div>
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerThree">
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
          <p className="text-recLightGrey font-recMedium  text-headerFive">
            Job data
          </p>
        </div>
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerTwo">
            {inView ? (
              <CountUp start={0} end={90} duration={2.5}></CountUp>
            ) : null}
            %
          </h2>
          <p className="text-recLightGrey font-recMedium text-headerFive">
            Success stories
          </p>
        </div>
      </div>

      <div className="mt-4 flex  gap-4 justify-center pb-40">
        <div className="inline-block relative px-8 text-center">
          <span
            className="inline-block lg:bg-cover bg-center bg-cover lg:py-20 px-6 lg:px-60 py-6 bg-[url('/small-bg.png')] lg:bg-[url('/opacity-bg.png')]"
            style={{
              // backgroundImage: `url('/opacity-bg.png')`,
              borderRadius: '24px',
            }}
          >
            <div className="flex lg:flex-row flex-col lg:gap-32 gap-2">
              <div className="gap-4">
                <h5 className=" lg:text-headerFive font-recSemiBold text-textBody">
                  Ready to take your hiring to the next level?
                </h5>
                <p className="lg:text-textSmall font-recRegular text-[10px] ">
                  Sign up for Recruit Radar now and start Your Free Recruit
                  Radar Trial Today!
                </p>
              </div>
              <div className="mt-4">
                <a href="#">
                  <button className="whitespace-nowrap rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-recPrimary text-recAccent hover:bg-recPrimary/90 px-2 py-2 items-center justify-center font-recSemiBold">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Employer;
