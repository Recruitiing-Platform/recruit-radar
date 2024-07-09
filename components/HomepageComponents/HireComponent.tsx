import { rotateLinkData } from '@/data';
import { LinkDataInterface } from '@/interfaces/HomepageInterface';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {};

const HireComponent = (props: Props) => {
  return (
    <div className="px-10 pb-40">
      <div className='relative h-[450px]'>
        {rotateLinkData.map((link: LinkDataInterface, index: number) => (
          <div key={index} className='object-center object-cover' style={{position: "absolute", top: link.top, left: link.left}}>
            <Image
              src={link.link}
              width={link.width}
              height={link.width}
              alt="image link"
              className='rounded-full'
            />
          </div>
        ))}
        <div className='absolute top-[40%] left-[22%] h-64 w-[700px] bg-recPrimary/25 rounded-full blur-effect'></div>
        <div className='absolute top-[40%] left-[25%] w-1/2 text-center'>
            <h2 className='display-two pb-6'>Ready for your next hire</h2>
            <p className='text-headerSix font-recRegular leading-8 pb-11'>Along with conventional advertising & below the line activities & organiztions have come to realize that they need to invest</p>
            <Button className='block mx-auto w-60 text-headerSix font-recMedium rounded-3xl hover:scale-105 ease-in-out transition transform duration-300' style={{color: "#F0F0F0"}}>Create account</Button>
        </div>
      </div>
    </div>
  );
};

export default HireComponent;
