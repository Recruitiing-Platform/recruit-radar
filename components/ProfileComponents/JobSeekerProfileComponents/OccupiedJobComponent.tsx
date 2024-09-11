import React from 'react'
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
        <div className="grid grid-cols-2">
          <div className="py-6 px-6">
            <h1 className="text-recError font-recSemiBold underline">
              {props.jobTitle}
            </h1>
            <p className="font-recSemiBold">{props.employerName}</p>
        
            <p className="text-recError font-recSemiBold">
              Application date : {props.applicationDate}
            </p>
            <p>Monthly salary Expectation</p>
            <p>
              (Gross): <span className="font-recBold">{props.salary}</span>
            </p>
            <p>Status : {props.status}</p>
            <Button>View</Button>
          </div>
          <div className="py-4">
            <p className="text-recBody">Posted on {props.datePosted}</p>
            <p className="py-2 text-recBody">Location : {props.location}</p>
          </div>
        </div>
        <hr></hr>
      </>
    );
}

export default OccupiedJobComponent
