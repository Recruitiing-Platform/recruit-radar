'use client';

import { jobData } from '@/data';
import { JobDataInterface } from '@/interfaces/HomepageInterface';
import React from 'react';
import { MapPin } from 'lucide-react';
// import { IoMdRadioButtonOn } from 'react-icons/io';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type Props = {};

const JobsComponent = (props: Props) => {
  const router = useRouter();

  return (
    <div className="px-4 md:px-10 lg:px-20 3xl:px-60">
      <h1 className="text-center font-recSemiBold text-headerFour lg:display-two pb-10">Latest Job Openings</h1>

      {/* Latest Job Displayed */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 3xl:gap-10 pb-11 lg:pb-[60px]'>
        {jobData.map((job: JobDataInterface, index: number) => (
          <div key={index} className='p-5 rounded-[20px] border border-recSubtle dark:border-[#242424] border-l-[5px] cursor-pointer hover:scale-105 transition transform duration-500' style={{borderLeftColor: job.sideColor}}>
            <div className='flex items-center justify-between text-textSmall 3xl:text-headerSix font-recMedium pb-8'>
              <span>Type: {job.type}</span>
              <span className='text-recSubtle'>{job.timePosted}</span>
            </div>
            <h3 className='font-recBold text-headerSix 3xl:text-headerFour pb-2 hover:underline'>{job.job}</h3>
            <p className='btn-text 3xl:text-headerSix text-recSubtle dark:text-recLightGrey pb-8'>{job.salaryRange}</p> 
            <div className='flex justify-between items-center'>
              <div className='btn-text 3xl:text-headerSix text-recSubtle dark:text-recLightGrey pb-2 flex items-center gap-1'>
                <MapPin className="text-recSubtle dark:text-recLightGrey" />
                <span>{job.jobLocation}</span>
              </div>
              {/* <div className='btn-text text-recSubtle dark:text-recLightGrey pb-2 flex items-center gap-1'>
                <IoMdRadioButtonOn
                  className="text-recSubtle dark:text-recLightGrey"
                  size={24}
                />
                <span>{job.location}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Create Button */}
      <Button className='block mx-auto w-60 3xl:w-72 h-12 rounded-3xl font-recMedium text-headerSix 3xl:text-headerFive hover:scale-105 ease-in-out transition transform duration-300' style={{color: "#F0F0F0"}}
       onClick={() => router.push('/signup')}
      >Create account</Button>
    </div>
  );
};

export default JobsComponent;
