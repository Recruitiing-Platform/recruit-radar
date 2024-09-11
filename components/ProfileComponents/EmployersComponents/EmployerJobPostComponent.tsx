import React, { ChangeEvent } from 'react';
import OtherInfoComponent from './OtherInfoComponent';
import SalaryComponent from './SalaryComponent';
import TagsComponent from './TagsComponent';
import BenefitsComponent from './BenefitsComponent';
import { benefitsWords } from '@/data';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

type Props = {};

const EmployerJobPostComponent = (props: Props) => {
  const { toast } = useToast()
  const {handleEmployerJobClick} = useRecruitRadarHook();
  
  return (
    <div className="px-5 py-10 md:px-10 md:py-10 lg:pr-20">
      <h1 className="text-headerThree font-recSemiBold pb-8">Post a Job</h1>

      <div className="pb-5">
        <p className="text-headerSix font-recMedium pb-1">Job Title</p>
        <input
          type="text"
          className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
          placeholder="Add job title, role, vacancies etc"
        />
      </div>

      <TagsComponent />
      <SalaryComponent />
      <OtherInfoComponent />

      <p className="text-headerFive font-recSemiBold pb-5">Location</p>
      <div className="flex flex-col md:flex-row items-center gap-5 w-full pb-6">
        <div className="w-full">
          <p className="text-headerSix font-recMedium pb-1">Country</p>
          <input
            type="text"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="Nigeria"
          />
        </div>
        <div className="w-full">
          <p className="text-headerSix font-recMedium pb-1">City</p>
          <input
            type="text"
            className="w-full p-2 bg-recLightGrey dark:bg-[#000611] border rounded placeholder:text-textSmall"
            placeholder="Ikeja, Lagos"
          />
        </div>
      </div>

      <div className="pb-8">
        <input name="remote" type="checkbox" />
        <label htmlFor="remote" className="pl-2">
          Fully Remote Position - Worldwide
        </label>
      </div>

      <div>
        <p className="text-headerFive font-recSemiBold pb-5">Job Benefits</p>
        <div className="flex items-center flex-wrap gap-3 pb-8">
          {benefitsWords.map((benefit, index) => (
            <BenefitsComponent key={index} text={benefit} />
          ))}
        </div>
      </div>

      <p className="text-headerFive font-recSemiBold pb-5">Job Description</p>
      <textarea
        rows={10}
        className="w-full p-2 bg-recLightGrey mb-8 dark:bg-[#000611] border rounded placeholder:text-textSmall"
        placeholder="Add job description here"
      />

      <Button
        onClick={() => {
          toast({
            title: 'Congratulations, Your Job is successfully posted!',
            description: 'You can manage your posted jobs in the My Job section of your dashboard.',
            action: <ToastAction onClick={handleEmployerJobClick} altText="View Jobs" className='flex items-center gap-2'>View Jobs <span><MoveRight /></span></ToastAction>,
          });
        }}
        className="flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:scale-105"
      >
        Post Job{' '}
        <span>
          <MoveRight />
        </span>
      </Button>
    </div>
  );
};

export default EmployerJobPostComponent;
