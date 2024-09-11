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
import OverviewComponent from './OverviewComponent';
import AppliedJobComponent from './AppliedJobComponent';
import SavedJobComponent from './SavedJobComponent';
import JobAlertComponent from './JobAlertComponent';
import SettingsComponent from './SettingsComponent';
import LogoutAlertDialogComponent from '@/components/LogoutAlertDialogComponent';
import ProfileHomeComponent from './ProfileHomeComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import NavSideBarComponent from './NavSideBarComponent';

const SideBarComponent = () => {
  const {
    overview,
    profile,
    appliedJobs,
    savedJobs,
    jobAlerts,
    settings,
    handleClickAppliedJobs,
    handleClickJobAlerts,
    handleClickOverview,
    handleClickProfile,
    handleClickSavedJobs,
    handleClickSettings,
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
              JOB SEEKER’S DASHBOARD
            </h1>
            <div className="space-y-2.5">
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  overview
                    ? 'bg-recLightGrey dark:bg-recSecondary pl-2 dark:font-recBold'
                    : ''
                }`}
                onClick={handleClickOverview}
              >
                <BsFillLayersFill color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    overview
                      ? 'dark:text-recLight font-recSemiBold text-[#000]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Overview
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  profile
                    ? 'bg-recLightGrey font-recSemiBold dark:bg-recSecondary pl-2'
                    : ''
                }`}
                onClick={handleClickProfile}
              >
                <FaUserCircle color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    profile
                      ? 'dark:text-recLight text-[#000] font-recSemiBold'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Job Seeker’s Profile
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  appliedJobs
                    ? 'bg-recLightGrey font-recSemiBold dark:bg-recSecondary pl-2'
                    : ''
                }`}
                onClick={handleClickAppliedJobs}
              >
                <MdAssignment color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    appliedJobs
                      ? 'dark:text-recLight font-recSemiBold text-[#000]'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Applied Jobs
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  savedJobs
                    ? 'bg-recLightGrey dark:bg-recSecondary pl-2 font-recSemiBold'
                    : ''
                }`}
                onClick={handleClickSavedJobs}
              >
                <IoBookmarksSharp color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    savedJobs
                      ? 'dark:text-recLight text-[#000] font-recSemiBold'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Saved Jobs
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  jobAlerts
                    ? 'bg-recLightGrey dark:bg-recSecondary pl-2 font-recSemiBold'
                    : ''
                }`}
                onClick={handleClickJobAlerts}
              >
                <IoMdNotifications color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    jobAlerts
                      ? 'dark:text-recLight text-[#000] font-recSemiBold'
                      : 'text-[#556177] font-recRegular'
                  }`}
                >
                  Job Alert
                </span>
              </div>
              <div
                className={`flex gap-3 items-center py-2 cursor-pointer transition-all transform duration-300 hover:bg-recLightGrey dark:hover:bg-recSecondary hover:pl-2 ${
                  settings ? 'bg-recLightGrey dark:bg-recSecondary pl-2' : ''
                }`}
                onClick={handleClickSettings}
              >
                <IoMdSettings color="#556177" />
                <span
                  className={`text-textSmall font-recRegular dark:hover:text-recLight hover:text-[#000] hover:font-recBold ${
                    settings
                      ? 'dark:text-recLight text-[#000] font-recSemiBold'
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
          {overview && <OverviewComponent />}
          {profile && <ProfileHomeComponent />}
          {appliedJobs && <AppliedJobComponent />}
          {savedJobs && <SavedJobComponent />}
          {jobAlerts && <JobAlertComponent />}
          {settings && <SettingsComponent />}
        </ResizablePanel>
      </ResizablePanelGroup>

      <NavSideBarComponent />
    </div>
  );
};

export default SideBarComponent;
