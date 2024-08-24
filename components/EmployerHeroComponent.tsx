import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

const EmployerHeroComponent = (props: Props) => {
  const [hoverTouch, setHoverTouch] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:gap-32 justify-between lg:mt-32 mt-20 px-24 font-sans">
        <div className={`bg-recLightGrey lg:py-8 px-8 py-2 rounded-2xl w-96 items-center text-center shadow-employer ${hoverTouch ? "" : ""}`}>
          <Image
            className="mx-auto mb-2"
            src="/red-checkmark.png"
            alt="red checkmark"
            width={40}
            height={40}
          ></Image>
          <h5 className="text-recDark font-recSemiBold text-center mb-2 text-headerFour">
            Guaranteed
          </h5>
          <p className="text-recDark">
            Make informed decisions with recruiter radar features.
          </p>
        </div>
        <div className="items-center text-center lg:py-8 px-8 py-2 bg-recLightGrey w-96 mx-auto rounded-2xl">
          <Image
            className="mx-auto mb-2  my-6"
            src="/firmware-amico.png"
            alt="firmware"
            width={30}
            height={30}
          ></Image>
          <h5 className="font-recBold text-center mb-2 text-headerFour">Streamlined</h5>
          <p className="text-recBody w-[80%]">
            Enjoy an effortless hiring process with intuitive tools and seamless workflows.
          </p>
        </div>
        <div className="items-center text-center">
          <Image
            className="mx-auto mb-2 mt-6"
            src="/chart-inject.png"
            alt="chart inject"
            width={30}
            height={30}
          ></Image>
          <h5 className="font-recSemiBold text-center mb-2">Top-notch</h5>
          <p className="text-textSmall text-recBody">
            Access top-tier talent and<br></br> enhance your team with <br></br>
            candidates that match your role
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:mt-60 mt-10 justify-center lg:gap-32 lg:py-8 px-8 py-2">
        <div>
          <Image
            src="/job offers.png"
            alt="image of hiring"
            width={500}
            height={200}
          ></Image>
        </div>
        <div>
          <h2 className="text-headerTwo font-recBold mb-4 mt-4">
            Automate your sourcing <br></br> efforts
          </h2>
          <p className="text-textSmall text-[rgba(238, 238, 240, 1)] mb-8">
            Go beyond traditional job boards. Recruit Radar helps you reach
            ideal<br></br> candidates where they spend their time online,
            increasing your<br></br>
            visibility even when they are not actively searching.
          </p>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 place-items-center text-[rgba(238, 238, 240, 1)] text-left">
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Job Listing Creation</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Job Promotion</span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Candidate Filtering </span>
            </div>
            <div className="grid grid-cols-[20%_80%] w-48">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 12.3334C1.66602 12.3334 3.66602 12.3334 6.33268 17C6.33268 17 13.7447 4.77737 20.3327 2.33337"
                  stroke="#D9861D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Application Management</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerHeroComponent;
