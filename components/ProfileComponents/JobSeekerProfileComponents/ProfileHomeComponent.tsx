'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainProfileComponent from '@/components/ProfileComponents/JobSeekerProfileComponents/MainProfileComponent';
import MainCertComponent from '@/components/ProfileComponents/JobSeekerProfileComponents/MainCertComponent';
import JobSeekerProfileComponent from './JobSeekerProfileComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

type Props = {};

const ProfileHomeComponent = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<string>('profile');
  const { showProfileHome, showProfile } = useRecruitRadarHook();

  return (
    <>
      {showProfileHome && (
        <JobSeekerProfileComponent />
      )}
      {showProfile && (
        <div className="pt-10 hidden md:block">
          <h1 className="text-headerTwo font-recSemiBold pl-5 pb-10">
            Finish setting up your profile{' '}
          </h1>
          <Tabs
            defaultValue="profile"
            onValueChange={(value: string) => setActiveTab(value)}
            className=""
          >
            <TabsList className="grid w-full grid-cols-4">
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
            <TabsContent value="experience">Experience</TabsContent>
            <TabsContent value="education">Education</TabsContent>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default ProfileHomeComponent;
