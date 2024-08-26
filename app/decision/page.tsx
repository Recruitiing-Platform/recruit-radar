'use client';

import { toast } from '@/components/ui/use-toast';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LeftSideSignUpComponent from '@/components/SignUpComponents/LeftSideSignUpComponent';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { MdContentPasteSearch } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Props = {};

const DecisionPage = (props: Props) => {
  const router = useRouter();
  const { rRUser } = useRecruitRadarHook();
  const [mainDecision, setMainDecision] = useState<boolean>(true);
  const [employerDecision, setEmployerDecision] = useState<boolean>(false);
  const [jobSeekerDecision, setJobSeekerDecision] = useState<boolean>(false);

  if (!rRUser) {
    toast({
      description:
        'Please sign up before you can access the Recruit Radar dashboard.',
    });
    router.push('/signup');
  }
  if (rRUser && !rRUser.emailVerified) {
    toast({
      description:
        'Please ensure your email is verified before you can access the Recruit Radar dashboard.',
    });
    router.push('/error');
  }

  const handleEmployerClick = () => {
    setEmployerDecision(true);
    setMainDecision(false);
    setJobSeekerDecision(false);
  };

  const handleMainClick = () => {
    setEmployerDecision(false);
    setMainDecision(true);
    setJobSeekerDecision(false);
  };

  const handleSeekerClick = () => {
    setEmployerDecision(false);
    setMainDecision(false);
    setJobSeekerDecision(true);
  };

  return (
    <div className="flex h-screen ">
      <LeftSideSignUpComponent />
      <div className="bg-[#FFFFFF] h-full w-1/2 flex flex-col items-center justify-center">
        {mainDecision && (
          <p className="text-headerThree font-recSemiBold pb-16 text-[#000]">
            Please select your user type
          </p>
        )}
        {employerDecision && (
          <p className="text-headerThree font-recSemiBold pb-16">
            Employer
          </p>
        )}
        {jobSeekerDecision && (
          <p className="text-headerThree font-recSemiBold pb-16">
            Job Seeker
          </p>
        )}

        {mainDecision && (
          <div className="flex items-center gap-16">
            <div
              className="flex flex-col items-center justify-center gap-5 px-10 py-6 rounded-2xl border border-recBody hover:border-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={handleEmployerClick}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdOutlineSupervisorAccount size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Employer
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5 px-8 py-6 rounded-2xl border border-recBody hover:border-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={handleSeekerClick}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdContentPasteSearch size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Job Seeker
              </span>
            </div>
          </div>
        )}
        {employerDecision && (
          <>
          <div className="flex items-center gap-16 pb-5">
            <div
              className="flex flex-col items-center justify-center gap-5 px-7 py-6 rounded-2xl border border-recBody hover:border-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={() => router.push('/employer')}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdOutlineSupervisorAccount size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Go to Homepage
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5 px-8 py-6 rounded-2xl border border-recBody hover:text-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={() => router.push('/employer/profile')}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdContentPasteSearch size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Set up profile
              </span>
            </div>
          </div>
          <Button className="w-48" onClick={handleMainClick}>Go Back</Button>
          </>
        )}
        {jobSeekerDecision && (
          <>
          <div className="flex items-center gap-16 pb-5">
            <div
              className="flex flex-col items-center justify-center gap-5 px-7 py-6 rounded-2xl border border-recBody hover:border-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={() => router.push('/seeker')}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdOutlineSupervisorAccount size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Go to Homepage
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5 px-8 py-6 rounded-2xl border border-recBody hover:text-recPrimary transition-all cursor-pointer transform duration-300"
              onClick={() => router.push('/seeker/profile')}
            >
              <div className="text-recLight p-7 bg-[#AAB0BB] hover:bg-recLight hover:border hover:border-recPrimary w-fit rounded-full hover:text-recPrimary">
                <MdContentPasteSearch size={54} />
              </div>
              <span className="text-headerFive font-recMedium text-[#555562]">
                Set up profile
              </span>
            </div>
          </div>
          <Button className="w-48" onClick={handleMainClick}>Go Back</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DecisionPage;
