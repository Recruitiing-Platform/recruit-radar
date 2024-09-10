import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock } from 'lucide-react';
import SettingsProfileTabComponent from './SettingsProfileTabComponent';
import SettingsPasswordTabComponent from './SettingsPasswordTabComponent';

const SettingsComponent = () => {
  return (
    <div className="px-5 py-10 md:p-10">
      <h1 className="text-headerSix md:text-headerThree pb-4 font-recBold">
        Settings
      </h1>
      <Tabs defaultValue="account" className="w-full mt-5">
        <TabsList className="w-fit flex items-center justify-center bg-[none] pb-14">
          <TabsTrigger
            value="account"
            className="flex gap-2 justify-center items-center data-[state=active]:border dark:data-[state=active]:border-b-recLightGrey data-[state=active]:border-b-recDark data-[state=active]:text-[#000] dark:data-[state=active]:text-recLightGrey w-fit py-3 font-recSemiBold"
          >
            <span>
              <User size={20} />
            </span>
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="flex gap-2 justify-center items-center data-[state=active]:border dark:data-[state=active]:border-b-recLightGrey data-[state=active]:border-b-recDark data-[state=active]:text-[#000] dark:data-[state=active]:text-recLightGrey w-fit px-5 py-3 font-recSemiBold"
          >
            <span>
              <Lock size={20} />
            </span>
            Manage Passwords
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <SettingsProfileTabComponent />
        </TabsContent>
        <TabsContent value="password">
          <SettingsPasswordTabComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsComponent;
