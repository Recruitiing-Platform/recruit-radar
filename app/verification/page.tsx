"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import verificationIcon from "../../app/auth/Assets/EmailImg.png";
import Mail from "../auth/Assets/Mail.png";
import Image1 from "../auth/Assets/LeftImg.png";
import Logo from "../auth/Assets/logo.png";

const VerificationPage = () => {
  const texts = [
    "All you need to <br /> hire or get hired <br /> fast.",
    "Access thousands <br /> of job <br /> opportunities",
    "Professionally <br /> tailor resume",
    "AI powered <br /> applicant tracking <br /> system",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side (Desktop View) */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-recLightGrey text-recSecondary relative">
        <div className="absolute top-10 left-10">
          <Image
            src={Logo}
            alt="RecruitRadar Logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center max-w-lg px-8">
          <div className="relative w-full h-full flex items-center justify-center">
            {texts.map((text, index) => (
              <p
                key={index}
                className={`absolute text-center text-headerOne font-recBold text-transparent bg-clip-text transition-opacity duration-1000 ${
                  currentTextIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #150096, #9F0BA2)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  minHeight: "6rem",
                  lineHeight: "1.5",
                  whiteSpace: "pre-line",
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={Image1}
            alt="Decorative circles"
            width={350}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center items-center bg-recLight p-8 relative md:static">
        <div className="absolute inset-0 bg-recLightGrey md:bg-transparent opacity-10 md:opacity-100 md:hidden"></div>
        <div className="relative z-10 w-full max-w-md text-center">
          <div className="mb-8 relative">
            <Image
              src={verificationIcon}
              alt="Verification Icon"
              width={150}
              height={60}
              className="mx-auto"
            />
          </div>
          <h2 className="text-[#000030] text-headerTwo mb-2 mt-0.5">
            Email verification
          </h2>
          <p className="text-[#000030] mb-4">
            We have sent an email to your email address. <br />
            Kindly click on the button below to verify your email.
          </p>
          <button className="flex items-center justify-center w-full h-11 py-3 bg-[#000C22] text-recLight font-recBold rounded-lg mb-4">
            Verify Email
            <Image src={Mail} alt="Mail Icon" className="h-5 w-5 ml-2" />
          </button>

          <p className="text-recSecondary text-sm">
            Not received the email?{" "}
            <a href="#" className="underline">
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
