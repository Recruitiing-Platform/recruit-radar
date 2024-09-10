'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { BsFillLayersFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import { IoBookmarksSharp, IoLogOutOutline } from 'react-icons/io5';
import { IoMdNotifications, IoMdSettings } from 'react-icons/io';
import LogoutAlertDialogComponent from '@/components/LogoutAlertDialogComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import NavSideBarComponent from '../JobSeekerProfileComponents/NavSideBarComponent';
import EmployerOverviewComponent from './EmployerOverviewComponent';
import EmployerProfileComponent from './EmployerProfileComponent';
import EmployerJobPostComponent from './EmployerJobPostComponent';
import EmployerJobComponent from './EmployerJobComponent';
import EmployerNotificationComponent from './EmployerNotificationComponent';
import EmployerNavSideBarComponent from './EmployerNavSidebarComponent';

const EmployerSideBarComponent = () => {
  const {
    employerProfile,
    employerOverview,
    jobPosts,
    employerJobs,
    employerSettings,
    employerNotification,
    handleEmployerProfileClick,
    handleEmployerOverviewClick,
    handleEmployerNotificationClick,
    handleEmployerPostClick,
    handleEmployerJobClick,
    handleEmployerSettings,
  } = useRecruitRadarHook();

  return (
    <div className="z-50 hidden md:block">
      <ResizablePanelGroup
        direction="horizontal"
        className="pt-1 pl-10 dark:bg-[#000611] bg-recLight hidden md:flex"
      >
        <ResizablePanel defaultSize={20} className="hidden md:flex">
          <div className="lg:p-6 pt-14">
            <h1 className="font-recMedium text-[12px] py-2 mb-5">
              EMPLOYER’S DASHBOARD
            </h1>
            <div className="space-y-2.5">
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-colors transform duration-300 dark:hover:bg-recSecondary hover:pl-2 ${
                  employerOverview
                    ? 'bg-recLightGrey dark:bg-recSecondary px-2 dark:font-recBold'
                    : ''
                }`}
                onClick={handleEmployerOverviewClick}
              >
                <BsFillLayersFill
                  className={`${
                    employerOverview
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    employerOverview
                      ? 'dark:text-recLight font-[700] text-[#001233]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Overview
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  employerProfile
                    ? 'bg-recLightGrey font-recSemiBold dark:bg-recSecondary px-2'
                    : ''
                }`}
                onClick={handleEmployerProfileClick}
              >
                <FaUserCircle
                  className={`${
                    employerProfile
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#001233] hover:font-recBold ${
                    employerProfile
                      ? 'dark:text-recLight font-[700] text-[#001233]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Employer&apos;s Profile
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  jobPosts
                    ? 'bg-recLightGrey font-recSemiBold dark:bg-recSecondary px-2'
                    : ''
                }`}
                onClick={handleEmployerPostClick}
              >
                <MdAssignment
                  className={`${
                    jobPosts
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight text-[#001233] hover:font-recBold ${
                    jobPosts
                      ? 'dark:text-recLight font-[700] text-[#001233]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Post A Job
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  employerJobs
                    ? 'bg-recLightGrey dark:bg-recSecondary px-2 font-recSemiBold'
                    : ''
                }`}
                onClick={handleEmployerJobClick}
              >
                <IoBookmarksSharp
                  className={`${
                    employerJobs
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#001233] hover:font-recBold ${
                    employerJobs
                      ? 'dark:text-recLight text-[#001233] font-[700]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  My Jobs
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  employerNotification
                    ? 'bg-recLightGrey dark:bg-recSecondary px-2 font-recSemiBold'
                    : ''
                }`}
                onClick={handleEmployerNotificationClick}
              >
                <IoMdNotifications
                  className={`${
                    employerNotification
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#001233] hover:font-recBold ${
                    employerNotification
                      ? 'dark:text-recLight text-[#001233] font-[700]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Notifications
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  employerSettings ? 'bg-recLightGrey dark:bg-recSecondary px-2' : ''
                }`}
                onClick={handleEmployerSettings}
              >
                <IoMdSettings
                  className={`${
                    employerSettings
                      ? 'dark:text-recLight text-[#001233]'
                      : 'text-[#556177]'
                  }`}
                />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#001233] hover:font-recBold ${
                    employerSettings
                      ? 'dark:text-recLight text-[#001233] font-recSemiBold'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Settings
                </span>
              </div>
              <LogoutAlertDialogComponent>
                <div className="flex items-center gap-3 py-2 cursor-pointer transition-all transform duration-300 hover:font-recBold dark:hover:font-recBold hover:pl-2 pt-96">
                  <IoLogOutOutline color="#E81010" />
                  <span className="text-recError font-recSemiBold text-textSmall">
                    Logout
                  </span>
                </div>
              </LogoutAlertDialogComponent>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle
          className="border-r border-recBody hidden md:flex"
          withHandle
        />
        <ResizablePanel className="hidden md:block" defaultSize={80}>
          {employerOverview && <EmployerOverviewComponent />}
          {employerProfile && <EmployerProfileComponent />}
          {jobPosts && <EmployerJobPostComponent />}
          {employerJobs && <EmployerJobComponent />}
          {employerNotification && <EmployerNotificationComponent />}
          {employerSettings && <EmployerProfileComponent />}
        </ResizablePanel>
      </ResizablePanelGroup>

      <EmployerNavSideBarComponent />
    </div>
  );
};

export default EmployerSideBarComponent;
