import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User } from 'lucide-react';
import { RiUserSettingsFill } from "react-icons/ri";
import SettingsCompanyInfoTab from './SettingsCompanyInfoTab';
import SettingsAccountTabComponent from './SettingsAccountTabComponent';

type Props = {}

const EmployerSettingsComponent = (props: Props) => {
  return (
    <div className="px-5 py-10 md:p-10">
      <h1 className="text-headerSix md:text-headerThree pb-4 mb-10 md:mt-0 font-recBold">
        Settings
      </h1>
      <Tabs defaultValue="company-info" className="w-full mt-5">
        <TabsList className="w-fit flex flex-col md:flex-row items-start md:items-center justify-center bg-[none] pb-14">
          <TabsTrigger
            value="company-info"
            className="text-textSmall md:text-headerSix flex gap-2 justify-center items-center data-[state=active]:border dark:data-[state=active]:border-b-recLightGrey data-[state=active]:border-b-recDark data-[state=active]:text-[#000] dark:data-[state=active]:text-recLightGrey w-56 md:w-fit py-3 font-recSemiBold"
          >
            <span>
              <User size={20} />
            </span>
            Company info
          </TabsTrigger>
          <TabsTrigger
            value="account-settings"
            className="text-textSmall md:text-headerSix flex gap-2 justify-center items-center data-[state=active]:border dark:data-[state=active]:border-b-recLightGrey data-[state=active]:border-b-recDark data-[state=active]:text-[#000] dark:data-[state=active]:text-recLightGrey w-56 md:w-fit md:px-5 py-3 font-recSemiBold"
          >
            <span>
              <RiUserSettingsFill size={20} />
            </span>
            Account Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="company-info">
          <SettingsCompanyInfoTab />
        </TabsContent>
        <TabsContent value="account-settings">
          <SettingsAccountTabComponent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EmployerSettingsComponent