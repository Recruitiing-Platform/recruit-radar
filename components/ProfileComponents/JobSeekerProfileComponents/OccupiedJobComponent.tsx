import React from 'react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
interface Props {
  jobTitle: String;
  employerName: String;
  applicationDate: String;
  salary: String;
  status: String;
  datePosted: String;
  location: String;
}

const OccupiedJobComponent = (props: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between px-6">
        <div className="py-6">
          <h1 className="text-recPrimary text-headerSix md:text-headerFour pb-5 font-recSemiBold underline cursor-pointer">
            {props.jobTitle}
          </h1>
          <p className="font-recSemiBold text-[18px]">{props.employerName}</p>

          <p className="text-recPrimary font-recSemiBold">
            Application date : {props.applicationDate}
          </p>
          <p>Monthly salary Expectation</p>
          <p>
            (Gross): <span className="font-recBold">{props.salary}</span>
          </p>
          <p className="pb-3">Status : {props.status}</p>
          <Button className="w-32">View</Button>
        </div>
        <div className="pt-6 pr-8">
          <p className="text-recBody">Posted on {props.datePosted}</p>
          <p className="py-2 text-recBody">Location : {props.location}</p>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default OccupiedJobComponent;
