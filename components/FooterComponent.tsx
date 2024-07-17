import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <div className="bg-[#001233]">
      <div className="h-24 bg-recPrimary"></div>

      <div className="px-4 lg:px-28 3xl:px-56 flex sm:flex-col md:flex-row gap-14 md:gap-0 items-start justify-between pt-16 text-recLight">
      {/* Get in touch */}
        <div className="sm:hidden md:block relative w-[330px] h-[368px]">
          <div className="w-[150px] h-[150px] bg-[#FA949D] rounded-full"></div>
          <div className="w-[250px] h-[250px] bg-[#5B2EDA]/50 rounded-full absolute left-10 bottom-[52px] flex flex-col items-center justify-center z-20">
            <h3 className="font-recBold">Want to be part of us?</h3>
            <Link
              href="/contact"
              className="underline hover:font-recBold cursor-pointer transition transform duration-300"
            >
              Get in touch
            </Link>
          </div>
          <div className="w-[150px] h-[150px] bg-[#8EC1C0] rounded-full absolute right-0 bottom-0 z-10"></div>
        </div>

        <div className="flex flex-col md:hidden">
            <h3 className="font-recBold 3xl:text-headerSix">Want to be part of us?</h3>
            <Link
              href="/contact"
              className="underline hover:font-recBold cursor-pointer transition transform duration-300 3xl:text-headerSix"
            >
              Get in touch
            </Link>
        </div>

        {/* Services */}
        <div className="space-y-5">
          <h4 className="uppercase text-recLight font-recBold text-[22px] 3xl:text-[26px] tracking-[6.16px]">
            Our services
          </h4>
          <Link
            href="/recruiter"
            className="block pb-5 text-[20px] 3xl:text-headerFive font-recRegular hover:underline hover:font-recMedium transition-all transform duration-300"
          >
            For Recruiters
          </Link>
          <Link
            href="/seeker"
            className="text-[20px] 3xl:text-headerFive font-recRegular hover:underline hover:font-recMedium transition-all transform duration-300"
          >
            For Job Seekers
          </Link>
        </div>

        {/* socials */}
        <div>
          <h4 className="uppercase text-recLight font-recBold text-[22px] 3xl:text-[26px] tracking-[6.16px] pb-5">
            follow us
          </h4>
          <div className="flex items-center gap-10">
            <div className="p-4 w-fit bg-[#5F30E3] rounded-full hover:scale-110 hover:bg-[#5F30E3]/80 cursor-pointer transition transform duration-300 ease-in-out">
              <Link href="">
                <FaTwitter />
              </Link>
            </div>
            <div className="p-4 w-fit bg-recPrimary rounded-full hover:scale-110 hover:bg-recPrimary/80 cursor-pointer transition transform duration-300 ease-in-out">
              <Link href="">
                <FaFacebookF />
              </Link>
            </div>
            <div className="p-4 w-fit bg-[#5F30E3] rounded-full hover:scale-110 hover:bg-[#5F30E3]/80 cursor-pointer transition transform duration-300 ease-in-out">
              <Link href="">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='text-[10px] md:text-textSmall 3xl:text-textBody text-center text-recLight flex flex-wrap items-center px-5 gap-2.5 justify-start md:justify-center py-14 md:pb-10'>
        <h6>2024 All Rights Reserved</h6>
        <span className='w-2 h-2 bg-[#FA949D] rounded-full'></span>
        <Link href='' className='hover:underline hover:font-recSemiBold text-[10px] md:text-textSmall'>Privacy Policy</Link>
        <span className='w-2 h-2 bg-[#FA949D] rounded-full'></span>
        <Link href='' className='hover:underline hover:font-recSemiBold text-[10px] md:text-textSmall'>Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default FooterComponent;
