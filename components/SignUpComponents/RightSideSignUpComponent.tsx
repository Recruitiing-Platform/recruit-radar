import React from 'react';
import SignUpFormComponent from './SignUpFormComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import GoogleSvgComponent from '../SvgComponents/GoogleSvgComponent';
import { BsTwitterX } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const RightSideSignUpComponent = () => {
  const router = useRouter();
  const { signInWithGoogle, signInWithTwitter, googleLoading, twitterLoading } = useRecruitRadarHook();

  return (
    <div className="flex-1 flex flex-col justify-center items-center md:pt-2 lg:pt-0 md:w-[50%] bg-recLight px-4 md:px-8 relative lg:static">
      <div className="absolute inset-0 bg-recLightGrey md:bg-transparent opacity-10 md:opacity-100 md:hidden"></div>
      <div className="relative z-10 md:max-w-md">
        <h2 className="text-[#000030] text-headerThree mt-8 md:mt-0 lg:text-headerTwo mb-1 text-center font-recBold">
          Create Account
        </h2>
        <p className="text-[#000030] text-textSmall md:text-[16px] mb-2 md:mb-0 lg:mb-1 text-center md:text-left font-recBold">
          Find your dream job, launch your career.
        </p>

        <SignUpFormComponent />

        <p className="text-center text-recSecondary text-xs mb-6 md:mb-2 lg:mb-2 mt-3 md:mt-0 lg:mt-1">
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

        <div className="relative my-6 md:my-2 flex items-center justify-center">
          <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
          <span className="px-2 text-sm text-recDark bg-white">Or</span>
          <hr className="w-1/2 border-0 mt-3 mb-3 h-px bg-recDark" />
        </div>

        <div className="flex flex-col space-y-3 mb-2">
          <div
            className={`flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-all duration-300 hover:scale-105 ${googleLoading ? 'cursor-not-allowed border-recPrimary/50 bg-recPrimary/50' : 'cursor-pointer'}`}
            onClick={signInWithGoogle}
          >
            <GoogleSvgComponent />
            {googleLoading ? <span>Loading...</span> : <span>Sign in with Google</span>}
          </div>
          <div
            className={`flex items-center gap-3 justify-center bg-gray-200 text-recSecondary font-recSemiBold py-2 px-4 rounded-lg border border-recSecondary cursor-pointer hover:bg-recPrimary/50 hover:border-recPrimary/50 transition-all hover:scale-105 duration-300 ${twitterLoading ? 'cursor-not-allowed bg-recPrimary/50 border-recPrimary/50' : 'cursor-pointer'}`}
            onClick={signInWithTwitter}
          >
            <BsTwitterX />
            {twitterLoading ? <span>Loading...</span> : <span>Sign in with Twitter/X</span>}
          </div>
        </div>

        <p className='text-[#000030] mb-6 text-textSmall text-center'>Already have an account? <span className='font-recSemiBold cursor-pointer hover:font-recBold hover:underline transition-all duration-300' onClick={() => router.push('/login')}>Login here</span></p>
      </div>
    </div>
  );
};

export default RightSideSignUpComponent;
