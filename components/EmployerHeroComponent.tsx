import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

const EmployerHeroComponent = (props: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center lg:text-left gap-10 md:gap-2 items-center justify-between lg:mt-32 mt-20 px-5 md:px-10 lg:px-20 xl:px-36 font-sans 3xl:pr-80 3xl:pl-96">
        <div className="bg-recLightGrey lg:py-8 px-8 md:px-2 lg:px-8 py-10 md:py-2 md:h-fit rounded-2xl md:w-[30%] items-center text-center shadow-employer">
          <Image
            className="mx-auto mb-2"
            src="/red-checkmark.png"
            alt="red checkmark"
            width={40}
            height={40}
          ></Image>
          <h5 className="text-recDark font-recSemiBold text-center mb-2 text-headerFour">
            Guaranteed
          </h5>
          <p className="text-recDark text-textSmall lg:text-[16px] pb-10 lg:pb-0">
            Make informed decisions with recruiter radar features.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:py-8 md:px-2 h-fit px-8 lg:px-8 md:w-[30%] rounded-2xl">
          <Image
            className="sm:hidden lg:block mx-auto mb-2 my-6"
            src="/firmware-amico.png"
            alt="firmware"
            width={30}
            height={30}
          />
          <Image
            className="sm:block lg:hidden mx-auto mb-2"
            src="/firmware-amico.png"
            alt="firmware"
            width={70}
            height={70}
          />
          <h5 className="font-recBold text-center mb-2 text-headerFour">Streamlined</h5>
          <p className="text-recBody lg:w-[80%] text-textSmall lg:text-[16px]">
            Enjoy an effortless hiring process with intuitive tools and seamless workflows.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center h-fit lg:py-8 px-8 md:w-[30%] rounded-2xl">
          <Image
            className="mx-auto mb-2 my-6"
            src="/chart-inject.png"
            alt="chart inject"
            width={30}
            height={30}
          ></Image>
          <h5 className="font-recSemiBold text-center mb-2 text-headerFour">Top-notch</h5>
          <p className="text-recBody lg:w-[80%] text-textSmall lg:text-[16px]">
            Access top-tier talent and enhance your team with candidates that match your role
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[#FDF5F4] dark:bg-[#000611] lg:flex-row items-center text-center lg:text-left gap-2 lg:mt-20 mt-10 justify-between lg:py-8 md:pl-4 md:pr-28 py-2 px-5 3xl:pr-80 3xl:pl-96">
        <div className='pr-5'>
          <Image
            className='hidden dark:flex'
            src="/hiring-dark.gif"
            alt="image of hiring"
            width={600}
            height={200}
            unoptimized
          />
          <Image className='dark:hidden flex'
            src="/hiring.gif"
            alt="image of hiring"
            width={600}
            height={200}
            unoptimized
          />
        </div>
        <div>
          <h2 className="text-headerThree md:text-headerTwo font-recBold mb-4 mt-4 3xl:text-headerOne">
            Automate your sourcing efforts
          </h2>
          <p className="text-[rgba(238, 238, 240, 1)] mb-8 3xl:text-headerSix">
            Go beyond traditional job boards. Recruit Radar helps you reach
            ideal<br></br> candidates where they spend their time online,
            increasing your<br></br>
            visibility even when they are not actively searching.
          </p>
          <div className=" grid md:grid-cols-2 grid-cols-1 pl-7 md:pl-0 gap-6 text-[rgba(238, 238, 240, 1)] text-left">
            <div className="flex items-center gap-5">
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
              <span className='text-headerSix'>Job Listing Creation</span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className='text-headerSix'>Job Promotion</span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className='text-headerSix'>Candidate Filtering </span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className='text-headerSix'>Application Management</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerHeroComponent;
