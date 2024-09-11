import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DonutChart from '@/components/animata/graphs/donut-chart';
import BarChart from '@/components/animata/graphs/bar-chart';
import { barItems } from '@/data';
import { IoMdNotifications } from 'react-icons/io';

const EmployerOverviewComponent = () => {
  return (
    <div className="px-5 py-10 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between pb-10">
        <h1 className="text-headerFive font-recBold">Dashboard</h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-textSmall font-recMedium">Date range:</p>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 text-textSmall text-recPrimary cursor-pointer">
                  <span className="font-recSemiBold">This week</span>
                  <span>
                    <TiArrowSortedDown />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="z-[300] mt-2 border-0 dark:bg-[#000]"
              >
                <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                  This month
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                  Three months
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                  This year
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 w-40 font-recMedium hover:border-2"
          >
            New job
            <span>
              <Plus size={18} />
            </span>
          </Button>
        </div>
      </div>

      {/* Donut Charts */}
      <div className="flex flex-col lg:flex-row items-center justify-between pb-7">
        <div className="flex justify-between lg:justify-normal mb-5 lg:mb-0 items-center lg:gap-2 xl:gap-5 px-5 py-6 border border-[#F1F1F1] dark:border-recDark shadow-md w-full lg:w-fit rounded-lg">
          <div className="space-y-2.5">
            <h1 className="text-headerFour font-recSemiBold">250</h1>
            <span className="block font-recSemiBold text-textSmall">
              Total job posting
            </span>
            <span className="block text-[12px] font-recRegular text-[#7A7A9D]">
              Increase since last month
            </span>
          </div>
          <div className="relative">
            <DonutChart
              size={85}
              progress={70}
              circleWidth={10}
              progressWidth={10}
              progressClassName="text-recPrimary"
              trackClassName="text-recPrimary/20"
            />
            <span className="text-textSmall text-recPrimary font-recMedium absolute bottom-[36%] left-[27%]">
              + 70%
            </span>
          </div>
        </div>
        <div className="flex justify-between lg:justify-normal mb-5 lg:mb-0 items-center lg:gap-2 xl:gap-5 px-5 py-6 border border-[#F1F1F1] dark:border-recDark shadow-md w-full lg:w-fit rounded-lg">
          <div className="space-y-2.5">
            <h1 className="text-headerFour font-recSemiBold">12</h1>
            <span className="block font-recSemiBold text-textSmall">
              Active job posting
            </span>
            <span className="block text-[12px] font-recRegular text-[#7A7A9D]">
              Increase since last month
            </span>
          </div>
          <div className="relative">
            <DonutChart
              size={85}
              progress={40}
              circleWidth={10}
              progressWidth={10}
              progressClassName="text-[#61C0BA]"
              trackClassName="text-[#61C0BA]/20"
            />
            <span className="text-textSmall text-[#61C0BA] font-recMedium absolute bottom-[36%] left-[27%]">
              + 40%
            </span>
          </div>
        </div>
        <div className="flex justify-between lg:justify-normal mb-5 lg:mb-0 items-center lg:gap-2 xl:gap-5 px-5 py-6 border border-[#F1F1F1] dark:border-recDark shadow-md w-full lg:w-fit rounded-lg">
          <div className="space-y-2.5">
            <h1 className="text-headerFour font-recSemiBold">250</h1>
            <span className="block font-recSemiBold text-textSmall">
              Applicants recieved
            </span>
            <span className="block text-[12px] font-recRegular text-[#7A7A9D]">
              Increase since last month
            </span>
          </div>
          <div className="relative">
            <DonutChart
              size={85}
              progress={50}
              circleWidth={10}
              progressWidth={10}
              progressClassName="text-[#DF847E]"
              trackClassName="text-[#DF847E]/20"
            />
            <span className="text-textSmall text-[#DF847E] font-recMedium absolute bottom-[36%] left-[27%]">
              + 50%
            </span>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      {/* <div className="hidden lg:flex group rounded border border-blue-100 bg-white p-2 mb-10">
        <div className="border-bottom relative box-border h-fit border-zinc-300">
          <BarChart height={248} items={barItems} />
        </div>
      </div> */}

      <div>
        <h3 className="font-recSemiBold pb-5">Recent activity</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 border border-[#F1F1F1] dark:border-recDark rounded-lg px-4 py-2.5 shadow-md mb-3">
          <div className="flex gap-10 items-center">
            <span className="block w-fit h-fit text-recError p-1 bg-recPrimary/50 rounded-sm">
              <X />
            </span>
            <div>
              <span className="font-recSemiBold">Job posting closed</span>
              <span className="text-[#7A7A9D] block text-[12px]">
                Ethical hacker
              </span>
            </div>
          </div>
          <p className="text-[#7A7A9D] text-[12px]">24 mins ago</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 border border-[#F1F1F1] dark:border-recDark rounded-lg px-4 py-2.5 shadow-md mb-3">
          <div className="flex gap-10 items-center">
            <span className="block w-fit h-fit text-[#A065BF] p-1 bg-[#A065BF]/50 rounded-sm">
              <IoMdNotifications size={25} />
            </span>
            <div>
              <span className="font-recSemiBold">New Application Received</span>
              <span className="text-[#7A7A9D] block text-[12px]">
                Ethical hacker
              </span>
            </div>
          </div>
          <p className="text-[#7A7A9D] text-[12px] font-recMedium">
            Applicant:{' '}
            <span className="text-[#000] dark:text-recLightGrey">
              Suoyo Oyintare
            </span>
          </p>
          <p className="text-[#7A7A9D] text-[12px]">24 mins ago</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 border border-[#F1F1F1] dark:border-recDark rounded-lg px-4 py-2.5 shadow-md mb-3">
          <div className="flex gap-10 items-center">
            <span className="block w-fit h-fit text-[#A065BF] p-1 bg-[#A065BF]/50 rounded-sm">
              <IoMdNotifications size={25} />
            </span>
            <div>
              <span className="font-recSemiBold">New Application Received</span>
              <span className="text-[#7A7A9D] block text-[12px]">
                Ethical hacker
              </span>
            </div>
          </div>
          <p className="text-[#7A7A9D] text-[12px] font-recMedium">
            Applicant:{' '}
            <span className="text-[#000] dark:text-recLightGrey">
              Suoyo Oyintare
            </span>
          </p>
          <p className="text-[#7A7A9D] text-[12px]">24 mins ago</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 border border-[#F1F1F1] dark:border-recDark rounded-lg px-4 py-2.5 shadow-md mb-3">
          <div className="flex gap-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className='w-fit h-fit p-1 bg-[#61C0BA]/50 rounded-sm'
            >
              <path
                d="M22.428 14.8122L20.3556 12.9666C19.7556 12.4326 19.7556 11.5578 20.3556 11.0238L22.428 9.17703C23.028 8.64303 22.8684 8.14623 22.0728 8.06823L19.3248 7.80783C18.5304 7.73343 18.1008 7.04823 18.3756 6.28863L19.8336 2.22903C20.1072 1.46703 19.7724 1.19103 19.0908 1.61223L15.8496 3.61623C15.689 3.71681 15.5096 3.78351 15.3224 3.81222C15.1351 3.84093 14.9439 3.83104 14.7606 3.78316C14.5773 3.73528 14.4057 3.65043 14.2564 3.53381C14.1071 3.41719 13.9832 3.27128 13.8924 3.10503L12.7188 1.00983C12.324 0.304225 11.6724 0.301825 11.2704 1.00023L10.1796 2.89623C9.77518 3.59823 8.84999 3.89583 8.12399 3.56343L6.20399 2.68263C5.47439 2.34663 4.91639 2.73303 4.95959 3.54183L5.06279 5.47983C5.10719 6.28863 4.50959 7.12023 3.73799 7.32903L1.88399 7.82583C1.11359 8.03463 0.971986 8.64183 1.57199 9.17583L3.64439 11.0226C4.24439 11.5566 4.24439 12.4314 3.64439 12.9654L1.57199 14.8122C0.971986 15.3462 1.13039 15.8646 1.92359 15.9606L4.43759 16.2654C5.23079 16.3614 5.67239 17.0694 5.41919 17.8386L4.13039 21.7482C3.87719 22.5174 4.23839 22.815 4.93199 22.4142L7.88759 20.703C8.23239 20.5121 8.63597 20.4565 9.01958 20.547C9.40318 20.6375 9.73931 20.8677 9.96239 21.1926L11.1888 23.0394C11.6352 23.7102 12.306 23.6742 12.6768 22.9578L13.7556 20.8782C13.9352 20.5332 14.2425 20.272 14.6119 20.1503C14.9813 20.0285 15.3837 20.0559 15.7332 20.2266L17.814 21.267C18.5316 21.6234 19.0824 21.255 19.0392 20.4486L18.9348 18.5082C18.8928 17.6994 19.488 16.8702 20.262 16.6614L22.1136 16.1622C22.8864 15.9534 23.028 15.3462 22.428 14.8122ZM13.2 16.7994H10.8V14.3994H13.2V16.7994ZM13.2 13.1994H10.8V7.19943H13.2V13.1994Z"
                fill="#61C0BA"
              />
            </svg>
            <div>
              <span className="font-recSemiBold">New Job Posting</span>
              <span className="text-[#7A7A9D] block text-[12px]">
                Ethical hacker
              </span>
            </div>
          </div>
          <p className="text-[#7A7A9D] text-[12px]">24 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default EmployerOverviewComponent;
