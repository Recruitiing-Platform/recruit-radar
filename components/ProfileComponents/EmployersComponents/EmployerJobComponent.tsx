import { ArrowRight, ChevronDown, Ellipsis, MoveRight, Pencil, SquareCheckBig, Trash2 } from 'lucide-react';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { employerJobsData, savedJobsData } from '@/data';
import { Button } from '@/components/ui/button';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaUsers } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {};

const EmployerJobComponent = (props: Props) => {
  return (
    <div className="px-5 py-10 md:px-10 md:py-10 lg:pr-20">
      <div className="flex items-end justify-between pb-10">
        <h1 className="text-headerSix md:text-headerThree font-recBold">
          My Jobs <sup className="md:text-headerSix font-recSemiBold">(40)</sup>
        </h1>
        <div className="flex items-center gap-4">
          <p className="hidden md:flex text-headerSix font-recBold">Job Status</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="flex items-center gap-1">
                All Jobs{' '}
                <span>
                  <ChevronDown size={18} />
                </span>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="z-[300] mt-2 border-0 dark:bg-[#000]"
            >
              <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                Remote Jobs
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                Hybrid Jobs
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-recBody text-[14px] text-recPrimary dark:hover:bg-recSecondary hover:text-recPrimary dark:hover:text-recPrimary">
                Non-remote jobs
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table>
        <TableHeader className="py-4 bg-[#F5F4FB] dark:bg-recSecondary">
          <TableRow>
            <TableHead className="w-[200px]">JOBS</TableHead>
            <TableHead className="w-[150px]">STATUS</TableHead>
            <TableHead className="w-[200px]">APPLICATIONS</TableHead>
            <TableHead className="text-center">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employerJobsData.map((jobData: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="py-10">
                <div className="flex gap-3 items-center pb-2">
                  <span className="md:text-headerSix font-recSemiBold truncate w-1/2 lg:w-[70%]">
                    {jobData.job.jobTitle}
                  </span>
                  
                </div>
                <div className="flex items-center gap-3 text-recBody">
                  <span>{jobData.job.jobType}</span>
                  <span className="h-1 w-1 rounded-full bg-recLightGrey"></span>
                  <span>{jobData.job.daysRem}</span>
                </div>
              </TableCell>
              <TableCell>
                {jobData.status === 'Active' ? (
                  <div className="text-[#04802E] flex items-center font-recMedium gap-2">
                    <span>
                      <SquareCheckBig size={18} />
                    </span>
                    <span>{jobData.status}</span>
                  </div>
                ) : (
                  <div className="text-[#DC3545] flex items-center font-recMedium gap-2">
                    <span>
                      <AiOutlineCloseSquare size={18} />
                    </span>
                    <span>{jobData.status}</span>
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <span><FaUsers /></span>
                  <span className='text-textSmall'>{jobData.applications} Applications</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                
                <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <div className='flex items-center gap-2'>
                  <Button className="w-[200px]">View Applications</Button>
                  <span className='p-1 border border-recBody rounded-sm'><Ellipsis size={15} /></span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="z-[300] mt-2 border-0 dark:bg-[#000]"
            >
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2 hover:bg-recBody text-[14px] text-[#04802E] dark:hover:bg-recSecondary hover:text-[#04802E] dark:hover:text-[#04802E]">
                <span><Pencil size={18} /></span>Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2 hover:bg-recBody text-[14px] text-[#DC3545] dark:hover:bg-recSecondary hover:text-[#DC3545] dark:hover:text-[#DC3545]">
                <span><Trash2 size={18} /></span>Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button className='flex items-center gap-2 text-textSmall mt-5 ml-5 hover:scale-105 hover:gap-3 transition-all duration-300'>View All <span><MoveRight size={20} /></span></Button>
    </div>
  );
};

export default EmployerJobComponent;
