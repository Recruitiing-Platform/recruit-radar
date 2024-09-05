import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import React from 'react';
import { FaBell, FaBriefcase } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight, SquareCheckBig } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { overviewJobData } from '@/data';

type Props = {};

const OverviewComponent = (props: Props) => {
  const { rRUser, handleClickProfile, setShowProfile, setShowProfileHome } =
    useRecruitRadarHook();

  const avatarPicFallback =
    rRUser?.displayName.split(' ')[0][0] +
      rRUser?.displayName.split(' ')[1][0] || 'CN';

  const handleEditProfile = () => {
    handleClickProfile();
    setShowProfile(true);
    setShowProfileHome(false);
  };

  return (
    <div className="px-5 md:px-10 py-10 md:py-20">
      <h1 className="text-headerSix md:text-headerFour font-recSemiBold pb-3">
        Hello, {rRUser?.displayName}
      </h1>
      <p className="pb-10 text-textSmall md:text-headerSix font-recRegular">
        Here is your daily activities and job alerts.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between pb-10">
        <div className="w-full mb-5 md:mb-0 md:w-[32%] bg-[#FDE9E7] p-6 rounded-xl flex justify-between items-center">
          <div className="">
            <p className="text-[#0A0A0A] font-recSemiBold text-headerFour">
              500
            </p>
            <span className="pt-1 text-textSmall text-[#525252]">
              Applied Jobs
            </span>
          </div>
          <FaBriefcase className="text-recSecondary" />
        </div>
        <div className="w-full mb-5 md:mb-0 md:w-[32%] bg-[#E1EFFF] p-6 rounded-xl flex justify-between items-center">
          <div className="">
            <p className="text-[#0A0A0A] font-recSemiBold text-headerFour">
              240
            </p>
            <span className="pt-1 text-textSmall text-[#525252]">
              Favorite Jobs
            </span>
          </div>
          <FaBookmark className="text-recSecondary" />
        </div>
        <div className="w-full md:w-[32%] bg-[#F5F4FB] p-6 rounded-xl flex justify-between items-center">
          <div className="">
            <p className="text-[#0A0A0A] font-recSemiBold text-headerFour">
              600
            </p>
            <span className="pt-1 text-textSmall text-[#525252]">
              Job Alerts
            </span>
          </div>
          <FaBell className="text-recSecondary" />
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-between md:items-center p-5 md:px-9 md:py-6 rounded-lg"
        style={{
          backgroundImage:
            'linear-gradient(93deg, #150096 -1.7%, #9F0BA2 100.47%)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-3 pb-4 md:pb-0">
          <Avatar className="w-16 h-16 border border-recLightGrey hidden md:flex">
            <AvatarImage
              src={rRUser?.photoURL || 'https://github.com/shadcn.png'}
            />
            <AvatarFallback>{avatarPicFallback}</AvatarFallback>
          </Avatar>
          <div className="text-recAccent">
            <p className="text-headerSix font-recSemiBold pb-3">
              Your profile setup is not completed.
            </p>
            <span className="font-recRegular">
              Complete your profile editing & build your custom resume.
            </span>
          </div>
        </div>
        <Button
          className="flex items-center bg-recLightGrey text-recBody gap-2 w-40 font-recMedium hover:gap-3 hover:scale-105 transition-transform duration-300 hover:bg-recLightGrey"
          onClick={handleEditProfile}
        >
          Edit Profile <MoveRight />
        </Button>
      </div>
      <div className="pt-20 pb-5">
        <div className="flex items-center justify-between">
          <p className="text-headerSix font-recSemiBold">Recently Applied</p>
          <p className="hover:underline hover:font-recMedium cursor-pointer flex items-center gap-1 hover:gap-2">
            View All{' '}
            <span>
              <ArrowRight size={18} />
            </span>
          </p>
        </div>
        <Table>
          <TableHeader className="py-4 bg-[#F5F4FB] dark:bg-recSecondary">
            <TableRow>
              <TableHead className="w-[200px]">JOBS</TableHead>
              <TableHead className="w-[200px]">DATE APPLIED</TableHead>
              <TableHead className="w-[150px]">STATUS</TableHead>
              <TableHead className="text-center">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {overviewJobData.map(jobData => (
              <TableRow key={jobData.job.jobTitle}>
                <TableCell className="py-10">
                  <div className="flex gap-3 items-center pb-2">
                    <span className="text-headerSix font-recSemiBold truncate w-1/2 lg:w-[70%]">
                      {jobData.job.jobTitle}
                    </span>
                    <span className="text-[#556177] font-recMedium px-2.5 py-1 rounded-lg bg-[#F5F4FB] text-textSmall border border-[#AAB0BB]">
                      {jobData.job.jobLocation}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-recBody">
                    <span>{jobData.job.jobType}</span>
                    <span className="h-1 w-1 rounded-full bg-recLightGrey"></span>
                    <span>{jobData.job.daysRem}</span>
                  </div>
                </TableCell>
                <TableCell>{jobData.appliedDate}</TableCell>
                <TableCell>
                  <div className="text-[#04802E] flex items-center font-recMedium gap-2">
                    <span>
                      <SquareCheckBig size={18} />
                    </span>
                    <span>{jobData.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button className="w-[200px]">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OverviewComponent;
