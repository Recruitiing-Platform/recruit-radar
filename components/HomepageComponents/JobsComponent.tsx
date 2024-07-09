import { jobData } from '@/data';
import { JobDataInterface } from '@/interfaces/HomepageInterface';
import React from 'react';
import { MapPin } from 'lucide-react';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { Button } from '../ui/button';

type Props = {};

const JobsComponent = (props: Props) => {
  return (
    <div className="px-20">
      <h1 className="text-center display-two pb-10">Latest Job Openings</h1>

      {/* Latest Job Displayed */}
      <div className='grid grid-cols-3 gap-5 pb-[60px]'>
        {jobData.map((job: JobDataInterface, index: number) => (
          <div key={index} className='p-5 rounded-[20px] border border-recSubtle dark:border-[#242424] border-l-[8px] cursor-pointer hover:scale-105 transition transform duration-500' style={{borderLeftColor: job.sideColor}}>
            <div className='flex items-center justify-between text-textSmall font-recMedium pb-8'>
              <span>Type: {job.type}</span>
              <span className='text-recSubtle'>{job.timePosted}</span>
            </div>
            <h3 className='font-recBold text-headerSix pb-2 hover:underline'>{job.job}</h3>
            <p className='btn-text text-recSubtle dark:text-recLightGrey pb-8'>{job.salaryRange}</p> 
            <div className='flex justify-between items-center'>
              <div className='btn-text text-recSubtle dark:text-recLightGrey pb-2 flex items-center gap-1'>
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
      <Button className='block mx-auto w-60 h-12 rounded-3xl font-recMedium text-headerSix hover:scale-105 ease-in-out transition transform duration-300' style={{color: "#F0F0F0"}}>Create account</Button>
    </div>
  );
};

export default JobsComponent;
