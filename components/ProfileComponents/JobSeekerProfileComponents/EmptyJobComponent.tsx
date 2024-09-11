import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import React from 'react'

interface Props {
    
}

const EmptyJobComponent = (props: Props) => {
    return (
   
        <div className="text-center">
          <div className="grid place-content-center py-6">
            <Image
              src="/searching-job.png"
              alt="Searching job picture"
              width={300}
              height={200}
            />
          </div>
          <p className="text-[black] text-textSmall font-recSemiBold">
            You have not applied for any job. Kindly click here to apply to a
            job.
          </p>
          <div className="py-8">
            <Button className="text-textSmall text-recLightGrey ">
              APPLY FOR JOB
            </Button>
          </div>
        </div>
    
    );
}

export default EmptyJobComponent
