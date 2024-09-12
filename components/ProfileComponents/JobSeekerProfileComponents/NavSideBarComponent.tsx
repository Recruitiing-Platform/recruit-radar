import React, { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainProfileComponent from './MainProfileComponent';
import MainCertComponent from './MainCertComponent';
import MainExperienceComponent from './MainExperienceComponents';
import MainEducationComponent from './MainEducationComponents';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import NavJobSeekerProfileComponent from './NavJobSeekerProfileComponent';

type Props = {};

const NavSideBarComponent = (props: Props) => {
  const {
    showProfileHome,
    showProfile,
  } = useRecruitRadarHook();

  const [activeTab, setActiveTab] = useState<string>('profile');

  return (
    <>
      {showProfileHome && (
        <NavJobSeekerProfileComponent />
      )}

      {showProfile && (
        <div className="pt-10 block md:hidden dark:bg-[#000611]">
          <h1 className="text-headerTwo font-recSemiBold pl-5 pb-10">
            Finish setting up your profile{' '}
          </h1>
          <Tabs
            defaultValue="profile"
            onValueChange={(value: string) => setActiveTab(value)}
            className=""
          >
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="profile" className="flex-col">
                Profile{' '}
                {activeTab === 'profile' && (
                  <span className="w-8 h-[2px] bg-recPrimary"></span>
                )}
              </TabsTrigger>
              <TabsTrigger value="cert" className="flex-col">
                Certification{' '}
                {activeTab === 'cert' && (
                  <span className="w-8 h-[2px] bg-recPrimary"></span>
                )}
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex-col">
                Experience{' '}
                {activeTab === 'experience' && (
                  <span className="w-8 h-[2px] bg-recPrimary"></span>
                )}
              </TabsTrigger>
              <TabsTrigger value="education" className="flex-col">
                Education{' '}
                {activeTab === 'education' && (
                  <span className="w-8 h-[2px] bg-recPrimary"></span>
                )}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <MainProfileComponent />
            </TabsContent>
            <TabsContent value="cert">
              <MainCertComponent />
            </TabsContent>
            <TabsContent value="experience"><MainExperienceComponent /></TabsContent>
            <TabsContent value="education"><MainEducationComponent /></TabsContent>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default NavSideBarComponent;