import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const EmployerHeroComponent = () => {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row text-center md:text-left mt-14 md:mt-24 lg:mt-14 xl:mt-24 justify-between items-center gap-10 md:px-10 lg:pl-20 lg:pr-10 xl:pl-32 xl:pr-14 px-4 3xl:pr-80 3xl:pl-96">
        <div>
          <h1 className="text-headerTwo lg:text-headerThree xl:text-[40px] md:text-[56px] font-recMedium leading-[48px] md:leading-[64px] lg:leading-[48px] xl:leading-[64px] mt-4 pb-4">
            We help you create a <br></br> profile that stands out
          </h1>
          <p className="font-recMedium font-sans text-[14px] my-2 md:w-2/3 lg:pr-0 text-recBody">
            Create a profile that spotlights you as the best for recruiters and
            hiring managers for all job posting available on the platform.
          </p>
          <Button className="text-[18px] py-2 px-2 rounded-md mt-4 w-48 hover:scale-105 transition-all transform duration-300 font-recRegular">
            Create your profile
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-8">
          <a
            href=""
            className="text-center bg-recLight pt-4 rounded-md px-6 transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <Image
              className="mx-auto mb-2"
              src="/pinkcheckmark.svg"
              alt="pink checkmark"
              width={40}
              height={40}
            ></Image>
            <h5 className="text-recDark font-recSemiBold text-center mb-2 text-textBody">
              One click
            </h5>
            <p className="text-recSubtle text-textSmall lg:text-[12px] pb-10 lg:pb-6">
              Generate a profile that fits you with just a click for all job
              post
            </p>
          </a>
          <a
            href=""
            className="text-center bg-recLight pt-4 rounded-md px-6 transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <Image
              className="mx-auto mb-2"
              src="/pinkcheckmark.svg"
              alt="pink checkmark"
              width={40}
              height={40}
            ></Image>
            <h5 className="text-recDark font-recSemiBold text-center mb-2 text-textBody">
              Easy process
            </h5>
            <p className="text-recSubtle text-textSmall lg:text-[12px] pb-10 lg:pb-6">
              We ensure you won’t spend hours filling long forms
            </p>
          </a>
          <a
            href=""
            className="text-center bg-recLight pt-4 rounded-md px-6 transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <Image
              className="mx-auto mb-2"
              src="/pinkcheckmark.svg"
              alt="pink checkmark"
              width={40}
              height={40}
            ></Image>
            <h5 className="text-recDark font-recSemiBold text-center mb-2 text-textBody">
              Style your way
            </h5>
            <p className="text-recSubtle text-textSmall lg:text-[12px] pb-10 lg:pb-4">
              Create a profile that shows the world your personality and style.
            </p>
          </a>
          <a
            href=""
            className="text-center bg-recLight pt-4 rounded-md px-6 transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <Image
              className="mx-auto mb-2"
              src="/pinkcheckmark.svg"
              alt="pink checkmark"
              width={40}
              height={40}
            ></Image>
            <h5 className="text-recDark font-recSemiBold text-center mb-2 text-textBody">
              Set preference
            </h5>
            <p className="text-recSubtle  text-textSmall lg:text-[12px] pb-10 lg:pb-6">
              Select the job industry, location, culture and mode that suits you
            </p>
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-[#FDF5F4] dark:bg-[#000611] lg:flex-row items-center text-center gap-2   lg:mt-20 mt-10 lg:justify-between lg:py-8 md:pl-4 md:pr-28 py-2 px-5 3xl:pr-80 3xl:pl-96">
        <div className="">
          <Image
            className="hidden dark:flex"
            src="/rafiki.png"
            alt="image of recommendation letter"
            width={700}
            height={200}
            unoptimized
          />
          <Image
            className="dark:hidden flex"
            src="/hiring.gif"
            alt="image of hiring"
            width={600}
            height={200}
            unoptimized
          />
        </div>
        <div className="lg:file:text-left">
          <h2 className="text-headerThree md:text-headerTwo font-recBold mb-4 mt-4 3xl:text-headerOne">
            Access personalized job<br></br>recommendations
          </h2>
          <p className="text-[rgba(238, 238, 240, 1)] mb-8 3xl:text-headerSix text-recSubtle">
            Effortlessly navigate through job listings tailored to <br></br>
            your skills and preferences, and utilize our advanced <br></br>
            search functionality to find opportunities that match<br></br> your
            career aspirations.
          </p>
          <Button className="text-[18px] py-2 px-2 rounded-md mt-4 w-48 hover:scale-105 transition-all transform duration-300 font-recRegular">
            Search Jobs for free
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmployerHeroComponent;
