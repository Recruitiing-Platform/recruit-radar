import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const EmployerOverviewComponent = () => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-headerFive font-recBold">Dashboard</h1>
        <div className="flex items-center gap-4">
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
          <Button variant="outline" className="flex items-center gap-2 w-40 font-recMedium hover:border-2">
            New job
            <span>
              <Plus size={18} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployerOverviewComponent;
