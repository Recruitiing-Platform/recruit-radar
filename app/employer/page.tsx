"use client";
import { useInView } from "react-intersection-observer";

import React, { useState } from "react";
import Image from "next/image";
import FooterComponent from "@/components/FooterComponent";
import NavBarComponent from "@/components/NavBarComponent";
import { ModeToggle } from "@/components/ModeToggle";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Menu, X } from "lucide-react";

interface Props {}


const Employer: React.FC = (props: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
   const [counterOn, setCounterOn] = useState(false);
  const [shadow, setShadow] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dark:bg-[#000611]  min-h-screen ">
      <nav
        className={`flex dark:bg-[#000611] bg-recLight z-[100] lg:px-10 xxl:px-20 3xl:px-60 h-32  items-center lg:justify-around justify-between px-4 sticky top-0 ${
          shadow ? "shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)]" : ""
        } `}
      >
        <a href="#">
          <Image src="/radarbg.png" alt="logo" width={120} height={800}></Image>
        </a>
        <div className="flex gap-64">
          <ul className="h-16 items-center gap-7 shadow-[2px_2px_8px_0px_rgba(194,193,193,0.59)] dark:shadow-[2px_2px_4px_2px_rgba(198,198,198,0.07)] border border-recLightGrey dark:border-recSecondary rounded-full px-14 hidden lg:flex">
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <a href="#">Pricing</a>
            </li>
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <a href="#">Contact</a>
            </li>
            <li className="text-[20px] 3xl:text-headerThree font-recRegular text-recSubtle hover:font-recMedium hover:text-recDark dark:hover:font-recMedium dark:hover:text-recAccent transition transform duration-400">
              <a href="#">Resource</a>
            </li>
          </ul>
          <div className="flex gap-6 items-center">
            <a href="#" className="hidden lg:block">
              <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-recPrimary text-recAccent hover:bg-recPrimary/90 h-10 px-2 py-2 flex items-center justify-center gap-2 w-30 3xl:w-72 font-recSemiBold ">
                <span className="3xl:text-headerFive">Sign up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="7"
                    height="7"
                    rx="2.5"
                    fill="#FFC8C8"
                  ></rect>
                  <rect
                    x="0.5"
                    y="10"
                    width="7"
                    height="7"
                    rx="2.5"
                    fill="#FFC8C8"
                  ></rect>
                  <rect
                    x="10.5"
                    width="7"
                    height="7"
                    rx="2.5"
                    fill="#FFC8C8"
                  ></rect>
                  <rect
                    x="10.5"
                    y="10"
                    width="7"
                    height="7"
                    rx="2.5"
                    fill="#FFC8C8"
                  ></rect>
                </svg>
              </button>
            </a>
            <a href="#" className="hidden lg:block">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#FF595A] text-recPrimary bg-background h-10 w-28 hover:font-recBold transition duration-200"
                type="button"
                id="radix-:R2h37qcq:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                Try for Free
              </button>
            </a>
            <ModeToggle />
            <div
              aria-label="Toggle menu"
              className="p-2 rounded-full border border-[#F1F1F1] dark:border-[#242424] transition-all transform duration-500 md:hidden"
            >
              <Menu />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row text-center md:text-left gap-2 mt-24 justify-around px-4">
        <div>
          <h1 className="text-headerOne font-recBold mt-4">
            <span className="text-recSubtle">Discover </span>
            and <span className="text-recPrimary"> Connect</span> <br></br>with
            your next perfect <br></br>
            hire effortlessly.
          </h1>
          <p className="text-textSmall mt-2">
            Build your employer brand & attract top talent. Stay visible, even
            when they are not<br></br> actively searching.
          </p>
          <a href="#">
            <button className="bg-recPrimary py-2 px-2 rounded-md mt-4">
              Start Hiring
            </button>
          </a>
        </div>
        <div>
          <Image
            src="/3d-image.png"
            alt="men in an office"
            width={500}
            height={200}
          ></Image>
        </div>
      </div>
      <div className="lg:flex hidden justify-center mt-20 gap-24">
        <Image
          src="/mail-chimp.png"
          alt="mail chimp logo"
          width={80}
          height={80}
        ></Image>
        <Image
          src="/better-uptime.png"
          alt="better uptime logo"
          width={80}
          height={80}
        ></Image>
        <Image src="/slack.png" alt="slack logo" width={80} height={80}></Image>
        <Image
          src="/jira-software.png"
          alt="jira software logo"
          width={80}
          height={80}
        ></Image>
        <Image
          src="/gitbook.png"
          alt="gitbook logo"
          width={80}
          height={80}
        ></Image>
        <Image
          src="/better-uptime.png"
          alt="better uptime logo"
          width={80}
          height={80}
        ></Image>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:gap-32 justify-center lg:mt-32 mt-20 px-24">
        <div
          className=" bg-recLightGrey lg:py-8 px-4 py-2 rounded-md items-center text-center shadow-lg shadow-recLightGrey
"
        >
          <Image
            className="mx-auto mb-2"
            src="/red-checkmark.png"
            alt="red checkmark"
            width={40}
            height={40}
          ></Image>
          <h5 className="text-recDark font-recSemiBold text-center mb-2">
            Guaranteed
          </h5>
          <p className="text-textSmall text-recDark">
            Make informed decisions with <br></br> recruiter radar features.
          </p>
        </div>
        <div className="items-center text-center">
          <Image
            className="mx-auto mb-2  my-6"
            src="/firmware-amico.png"
            alt="firmware"
            width={30}
            height={30}
          ></Image>
          <h5 className=" font-recBold text-center mb-2">Streamlined</h5>
          <p className="text-textSmall text-recBody">
            Enjoy an effortless hiring<br></br> process with intuitive tools and
            <br></br> seamless workflows.
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
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:mt-60 mt-10 justify-center lg:gap-32">
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
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-40 mt-4 place-items-center px-4">
        <div>
          <Image
            className="lg:mx-36"
            src="/data-extract.png"
            alt="A man extracting data"
            width={400}
            height={300}
          ></Image>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-headerTwo font-recBold mb-4 mt-4">
            Everything you need to build<br></br> your best team
          </h2>
          <p className="text-textSmall text-[rgba(238, 238, 240, 1)] mb-8">
            AI Radar, our advanced sourcing technology, leverages the power of
            our massive<br></br> candidate pool (160 million+) and job data (1.5
            million+) to streamline your<br></br> recruitment process. Developed
            by our expert data science team, AI Radar utilizes
            <br></br> publicly available information to deliver you:
          </p>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 text-[rgba(238, 238, 240, 1)] place-items-center text-left">
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
              <span>
                Rediscover relevant candidates who applied in the past
              </span>
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
              <span>
                Career page builder that<br></br> highlights your jobs.
              </span>
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
              <span>Auto-fill applications and mobile optimization.</span>
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
              <span>
                One-click posting to 200+<br></br> job sites.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:mt-60 mt-10 justify-center lg:gap-24 px-4">
        <div>
          <h2 className="text-headerTwo font-recBold mb-4 mt-4">
            Connect with Top Talent<br></br> Anywhere in just one click
          </h2>
          <p className="text-textSmall text-[rgba(238, 238, 240, 1)] mb-8">
            Recruit Radars built-in video, audio conferencing and in-app
            messaging allow you to<br></br> conduct remote interviews
            seamlessly. Assess candidates skills and easily<br></br> communicate
            and collaborate with your team from the comfort of your desk,
            <br></br> regardless of location.
          </p>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 text-[rgba(238, 238, 240, 1)] place-items-center text-left">
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
              <span>Candidate Communication</span>
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
              <span>Teams Collaboration</span>
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
              <span>Talent Pipeline</span>
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
              <span>Seamless Interview</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/messaging.png"
            alt="Messaging"
            width={500}
            height={200}
          ></Image>
        </div>
      </div>
      <div
        ref={ref}
        className=" lg:grid  hidden grid-cols-3 items-center text-center mt-48"
      >
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerThree">
            {inView ? (
              <CountUp start={0} end={160} duration={2.5}></CountUp>
            ) : null}
            million+
          </h2>
          <p className="text-recLightGrey font-recMedium  text-headerFive">
            Candidate pool
          </p>
        </div>
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerThree">
            {inView ? (
              <CountUp start={0} end={1.5} duration={2.5} decimals={1}></CountUp>
            ) : null}
            million+
          </h2>
          <p className="text-recLightGrey font-recMedium  text-headerFive">
            Job data
          </p>
        </div>
        <div>
          <h2 className="text-recLightGrey font-recBold text-headerTwo">
            {inView ? (
              <CountUp start={0} end={90} duration={2.5}></CountUp>
            ) : null}
            %
          </h2>
          <p className="text-recLightGrey font-recMedium text-headerFive">
            Success stories
          </p>
        </div>
      </div>

      <div className="mt-4 flex  gap-4 justify-center pb-40">
        <div className="inline-block relative px-8 text-center">
          <span
            className="inline-block lg:bg-cover bg-center bg-cover lg:py-20 px-6 lg:px-60 py-6 bg-[url('/small-bg.png')] lg:bg-[url('/opacity-bg.png')]"
            style={{
              // backgroundImage: `url('/opacity-bg.png')`,
              borderRadius: "24px",
            }}
          >
            <div className="flex lg:flex-row flex-col lg:gap-32 gap-2">
              <div className="gap-4">
                <h5 className=" lg:text-headerFive font-recSemiBold text-textBody">
                  Ready to take your hiring to the next level?
                </h5>
                <p className="lg:text-textSmall font-recRegular text-[10px] ">
                  Sign up for Recruit Radar now and start Your Free Recruit
                  Radar Trial Today!
                </p>
              </div>
              <div className="mt-4">
                <a href="#">
                  <button className="whitespace-nowrap rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-recPrimary text-recAccent hover:bg-recPrimary/90 px-2 py-2 items-center justify-center font-recSemiBold">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Employer;

