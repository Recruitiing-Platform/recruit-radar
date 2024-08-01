import React from 'react';
import SignUpFormComponent from './SignUpFormComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import GoogleSvgComponent from '../SvgComponents/GoogleSvgComponent';
import { BsTwitterX } from 'react-icons/bs';

const RightSideSignUpComponent = () => {
  const { signInWithGoogle, signInWithTwitter } = useRecruitRadarHook();

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-[50%] bg-recLight px-8 relative md:static">
      <div className="absolute inset-0 bg-recLightGrey md:bg-transparent opacity-10 md:opacity-100 md:hidden"></div>
      <div className="relative z-10 w-full max-w-md">
        <h2 className="text-[#000030] text-headerTwo mb-2 text-center font-recBold">
          Create Account
        </h2>
        <p className="text-[#000030] mb-2 text-left font-recBold">
          Find your dream job, launch your career.
        </p>

        <SignUpFormComponent />

        <p className="text-center text-recSecondary text-xs mb-6 mt-3">
          By continuing you accept our&nbsp;
          <span className="underline cursor-pointer hover:font-recBold hover:text-recDark">
            terms and conditions
          </span>
          &nbsp; including our&nbsp;
          <span className="underline cursor-pointer hover:font-recBold hover:text-recDark">
            privacy policy
          </span>
          .
        </p>

        <div className="relative my-6 flex items-center justify-center">
          <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
          <span className="px-2 text-sm text-recDark bg-white">Or</span>
          <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
        </div>

        <div className="flex flex-col space-y-3 mb-6">
          <div
            className="flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-all duration-300 hover:scale-105"
            onClick={signInWithGoogle}
          >
            <GoogleSvgComponent />
            <span>Sign in with Google</span>
          </div>
          <div
            className="flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-all hover:scale-105 duration-300"
            onClick={signInWithTwitter}
          >
            <BsTwitterX />
            <span>Sign in with Twitter/X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideSignUpComponent;
