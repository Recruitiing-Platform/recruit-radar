import { chooseData } from '@/data';
import { ChooseDataInterface } from '@/interfaces/ChooseDataInterface';
import Image from 'next/image';
import React from 'react';

type Props = {};

const ChooseComponent = (props: Props) => {
  return (
    <div className="py-40 px-40">
      <h1 className="display-two text-center pb-10">
        Why choose <span className="text-recPrimary">RecruitRadar</span>
      </h1>
      <div className="dark:hidden flex justify-center pb-5">
        <Image
          src="/choose-img.jpg"
          width={1064}
          height={336}
          alt="Choose RR Image"
          loading="lazy"
        />
      </div>
      <div className="dark:flex hidden justify-center pb-5">
        <Image
          src="/choose-img-dark.jpg"
          width={1064}
          height={336}
          alt="Choose RR Image"
          loading="lazy"
        />
      </div>

      <div className='grid grid-cols-2 gap-5'>
        {chooseData.map((data: ChooseDataInterface, index: number) => (
          <div key={index} className="text-center px-28 py-8 flex flex-col gap-6 items-center justify-center border dark:border-[#242424] rounded-[20px]">
            <div className="p-5 rounded-full bg-recPrimary/20 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d={data.path} fill="#FF595A" />
              </svg>
            </div>
            <span>{data.textContent}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseComponent;
