import React from 'react';
import Image from 'next/image';

type Props = {};

const EmployerBottomComponent = (props: Props) => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:mt-10 mt-4 items-center justify-between w-full px-5 md:px-10 lg:px-20 xl:px-32 3xl:px-80">
        <div className="text-center lg:text-left px-5 md:px-10 lg:px-0 lg:w-1/2">
          <h2 className="text-headerThree md:text-headerTwo font-recBold mb-4 lg:mt-4 3xl:text-headerOne">
            Everything you need to build your best team
          </h2>
          <p className="text-[rgba(238, 238, 240, 1)] mb-8 3xl:text-headerSix">
            AI Radar, our advanced sourcing technology, leverages the power of
            our massive candidate pool (160 million+) and job data (1.5
            million+) to streamline your recruitment process. Developed by our
            expert data science team, AI Radar utilizes publicly available
            information to deliver you:
          </p>
          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6 text-[rgba(238, 238, 240, 1)] lg:place-items-center text-left">
            <div className="flex items-center gap-5">
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
              <span className="text-[18px]">
                Rediscover relevant candidates who applied in the past
              </span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-headerSix">
                Career page builder that highlights your jobs.
              </span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-headerSix">
                Auto-fill applications and mobile optimization.
              </span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-headerSix">
                One-click posting to 200+ job sites.
              </span>
            </div>
          </div>
        </div>
        <div className='pr-7'>
          <Image
            className='hidden dark:flex'
            src="/data-extract.png"
            alt="A man extracting data"
            width={700}
            height={300}
          />
          <Image
            className='dark:hidden flex'
            src="/dark-data-extract.png"
            alt="A man extracting data"
            width={700}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:text-left gap-2 items-center lg:mt-32 mt-20 justify-between md:pl-10 md:pr-32 bg-[#FDF5F4] dark:bg-[#000611] 3xl:px-80">
        <div className='pr-10 md:pr-0'>
          <Image
            className='hidden dark:flex'
            src="/messaging.gif"
            alt="Messaging"
            width={500}
            height={200}
          />
          <Image
            className='dark:hidden flex'
            src="/light-messaging.gif"
            alt="Messaging"
            width={500}
            height={200}
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-5">
          <h2 className="text-headerThree md:text-headerTwo font-recBold mb-4 mt-4 3xl:text-headerOne">
            Connect with Top Talent Anywhere in just one click
          </h2>
          <p className="text-[rgba(238, 238, 240, 1)] mb-8 3xl:text-headerSix">
            Recruit Radars built-in video, audio conferencing and in-app
            messaging allow you toconduct remote interviews seamlessly. Assess
            candidates skills and easily communicate and collaborate with your
            team from the comfort of your desk, regardless of location.
          </p>
          <div className=" grid md:grid-cols-2 grid-cols-1 pl-10 md:pl-0 gap-6 text-[rgba(238, 238, 240, 1)] text-left">
            <div className="flex items-center gap-5">
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
              <span className="text-[18px]">Candidate Communication</span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-[18px]">Teams Collaboration</span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-[18px]">Talent Pipeline</span>
            </div>
            <div className="flex items-center gap-5">
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
              <span className="text-[18px]">Seamless Interview</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerBottomComponent;
