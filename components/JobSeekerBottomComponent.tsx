import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const EmployerBottomComponent = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:mt-10 mt-4 items-center justify-between w-full px-5 md:px-10 lg:px-20 xl:px-32 3xl:px-80">
        <div className="text-center lg:text-left px-5 md:px-10 lg:px-0 lg:w-1/2">
          <h2 className="text-headerThree md:text-headerTwo font-recBold mb-4 lg:mt-4 3xl:text-headerTwo">
            AI driven career guidance and accessment.
          </h2>
          <p className="text-[rgba(238, 238, 240, 1)] mb-8 3xl:text-headerSix text-recSubtle">
            Effortlessly navigate through job listings tailored to your skills
            and preferences, and utilize our advanced search functionality to
            find opportunities that match your career aspirations.
          </p>
          <Button className="text-[18px] py-2 px-2 rounded-md mt-4 w-48 hover:scale-105 transition-all transform duration-300 font-recRegular">
        Get started now
          </Button>
        
        </div>
        <div className="pr-7">
          <Image
            className="hidden dark:flex"
            src="/jobseekers.png"
            alt="3 job seekers"
            width={700}
            height={300}
          />
         
        </div>
      </div>
    
    </>
  );
};

export default EmployerBottomComponent;
