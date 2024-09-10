import { ArrowRight, SquareCheckBig } from 'lucide-react';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { savedJobsData } from '@/data';
import { Button } from '@/components/ui/button';
import { AiOutlineCloseSquare } from 'react-icons/ai';

type Props = {};

const SavedJobComponent = (props: Props) => {
  return (
    <div className="p-10">
      <div className="flex items-end justify-between pb-10">
        <h1 className="text-headerThree font-recBold">
          Saved Jobs <sup className="text-headerSix font-recSemiBold">(20)</sup>
        </h1>
        <p className="hover:underline hover:font-recMedium cursor-pointer flex items-center gap-1 hover:gap-2">
          View All{' '}
          <span>
            <ArrowRight size={18} />
          </span>
        </p>
      </div>
      <Table>
        <TableHeader className="py-4 bg-[#F5F4FB] dark:bg-recSecondary">
          <TableRow>
            <TableHead className="w-[200px]">JOBS</TableHead>
            <TableHead className="w-[150px]">STATUS</TableHead>
            <TableHead className="text-center">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {savedJobsData.map((jobData: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="py-10">
                <div className="flex gap-3 items-center pb-2">
                  <span className="text-headerSix font-recSemiBold truncate w-1/2 lg:w-[70%]">
                    {jobData.job.jobTitle}
                  </span>
                  <span className="text-[#556177] font-recMedium px-2.5 py-1 rounded-lg bg-[#F5F4FB] text-textSmall border border-[#AAB0BB]">
                    {jobData.job.jobLocation}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-recBody">
                  <span>{jobData.job.jobType}</span>
                  <span className="h-1 w-1 rounded-full bg-recLightGrey"></span>
                  <span>{jobData.job.amount}</span>
                  {jobData.job.daysRem && <span className="h-1 w-1 rounded-full bg-recLightGrey"></span>}
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
              <TableCell className='text-center'>
              {jobData.status === 'Active' ? (<Button className="w-[200px]">Apply Now</Button>) : (<Button variant='disabledJob' disabled className="w-[200px]">Deadline Expired</Button>)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SavedJobComponent;
