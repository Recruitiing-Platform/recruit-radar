import LogoutAlertDialogComponent from '@/components/LogoutAlertDialogComponent';
import { ModeToggle } from '@/components/ModeToggle';
import NavLogoComponent from '@/components/NavLogoComponent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { sideBarTexts } from '@/data';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import OverviewComponent from './OverviewComponent';
import AppliedJobComponent from './AppliedJobComponent';
import SavedJobComponent from './SavedJobComponent';
import JobAlertComponent from './JobAlertComponent';
import SettingsComponent from './SettingsComponent';
import ProfileHomeComponent from './ProfileHomeComponent';
import NavSideBarComponent from './NavSideBarComponent';

type Props = {};

const MobileNavBarComponent = (props: Props) => {
  const { rRUser } = useRecruitRadarHook();

  const [scrolled, setScrolled] = useState<boolean>(false);

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
    isOpen,
    setIsOpen,
  } = useRecruitRadarHook();

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleNavBarScroll);

    return () => window.removeEventListener('scroll', handleNavBarScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const avatarPicFallback =
    rRUser?.displayName.split(' ')[0][0] +
      rRUser?.displayName.split(' ')[1][0] || 'CN';

  return (
    <>
      <div
        className={`dark:bg-[#000611] bg-recLightGrey z-[100] h-20 flex md:hidden items-center justify-between px-5 md:p-10 lg:px-14 sticky shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)] top-0 ${
          scrolled ? 'shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)]' : ''
        }`}
      >
        <div onClick={() => setIsOpen(true)}>
          <Menu />
        </div>
        <div className="flex items-center px-2 py-0.5 gap-1 w-[50%] border border-recLightGrey dark:border-recSubtle bg-recLight dark:bg-[#000611] rounded-lg">
          <Input
            placeholder="Search"
            className="outline-none border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="cursor-pointer p-2 hover:bg-recSubtle dark:hover:bg-[#000611] rounded-full">
            <Search size={18} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="flex items-center outline-none border-none">
                <div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={rRUser?.photoURL || 'https://github.com/shadcn.png'}
                    />
                    <AvatarFallback>{avatarPicFallback}</AvatarFallback>
                  </Avatar>
                </div>
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-none space-y-2 z-[200] mb-2 dark:bg-[#000]">
              <DropdownMenuItem className="cursor-pointer hover:bg-recSecondary">
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-recSecondary">
                Notifications
              </DropdownMenuItem>
              <LogoutAlertDialogComponent>
                <span className="px-2 py-2 block text-recError hover:text-recError dark:hover:text-recError hover:font-recBold cursor-pointer">
                  Log out
                </span>
              </LogoutAlertDialogComponent>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
        {isOpen && (
          <div className="absolute top-0 left-0 right-0 h-screen z-10 bg-[#000]/70 overflow-hidden"></div>
        )}
        {isOpen && (
          <div className="bg-recLight dark:bg-[#000611] absolute top-0 left-0 w-[70%] h-screen z-20 pt-5">
            <div className="absolute right-4" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </div>
            {/* Nav Items */}
            <div className="pl-5">
              <NavLogoComponent />
            </div>
            <p className="text-textSmall pt-10 pl-5">JOB SEEKER’S DASHBOARD</p>
            <ul className="flex flex-col items-center gap-8 py-10">
              <li
                className={
                  overview
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickOverview}
              >
                Overview
              </li>
              <li
                className={
                  profile
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickProfile}
              >
                Job Seeker&apos;s Profile
              </li>
              <li
                className={
                  appliedJobs
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickAppliedJobs}
              >
                Applied Jobs
              </li>
              <li
                className={
                  savedJobs
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickSavedJobs}
              >
                Saved Jobs
              </li>
              <li
                className={
                  jobAlerts
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickJobAlerts}
              >
                Job Alert
              </li>
              <li
                className={
                  settings
                    ? `text-[16px] font-recSemiBold dark:text-recAccent`
                    : `text-[16px] font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400`
                }
                onClick={handleClickSettings}
              >
                Settings
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        {overview && <OverviewComponent />}
        {/* {profile && <NavSideBarComponent />} */}
        {appliedJobs && <AppliedJobComponent />}
        {savedJobs && <SavedJobComponent />}
        {jobAlerts && <JobAlertComponent />}
        {settings && <SettingsComponent />}
      </div>
    </>
  );
};

export default MobileNavBarComponent;
