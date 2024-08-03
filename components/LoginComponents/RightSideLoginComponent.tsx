import LoginSvgComponent from '@/components/SvgComponents/LoginSvgComponent';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import LoginFormComponent from '@/components/LoginComponents/LoginFormComponent';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

const RightSideLoginComponent = () => {
  const {googleLoading, twitterLoading, signInWithGoogle, signInWithTwitter} = useRecruitRadarHook();
  const router = useRouter();

  return (
    <div className="lg:w-2/5 relative bg-recLight p-4 text-center text-recDark">
      <LoginSvgComponent />

      <div className="md:py-6 grid grid-cols-1 px-5 md:px-40 lg:px-12 pt-5 bg-recLight">
        <div className="mb-4">
          <h1 className="text-headerOne font-recBold text-recDark">Log in</h1>
          <p className="font-recMedium">Welcome back to Recruit Radar</p>
        </div>

        <button
          className={`border-2 border-recLightGrey font-textBody rounded-md mb-2 py-2 text-textSmall inline-flex item-center justify-center gap-2 font-recRegular min-h-auto transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 hover:bg-recPrimary/50 hover:border-recPrimary/50 ${
            googleLoading
              ? 'cursor-not-allowed border-recPrimary/50 bg-recPrimary/50'
              : 'cursor-pointer'
          }`}
          onClick={signInWithGoogle}
        >
          <span className="">
            <Image
              src="/googleicon.png"
              alt="arrow icon"
              width={22}
              height={22}
            ></Image>
          </span>
          <p>Login with Google</p>
        </button>
        <div
          className={`border-2 border-recLightGrey font-textBody rounded-md mb-2 py-2 text-textSmall flex  item-center justify-center gap-2 font-recRegular min-h-auto transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 hover:bg-recPrimary/50 hover:border-recPrimary/50 ${
            twitterLoading
              ? 'cursor-not-allowed border-recPrimary/50 bg-recPrimary/50'
              : 'cursor-pointer'
          }`}
          onClick={signInWithTwitter}
        >
          <BsTwitterX size={20} />
          <span>Login with Twitter/X</span>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex-grow border-t-2 border-recLightGrey pb-2"></div>
          <p className="mb-2 text-textSmall font-recRegular mx-2">
            or Login with Email
          </p>
          <div className="flex-grow border-t-2 border-recLightGrey pb-2"></div>
        </div>
        <LoginFormComponent />
        <footer>
          <p className="text-textSmall mb-2">
            By continuing you accept our standard{' '}
            <span>
              <Link
                href="#"
                className="text-recPrimary font-recMedium hover:underline"
              >
                terms and condition
              </Link>
            </span>{' '}
            and our
            <span>
              <Link
                href="#"
                className="text-recPrimary font-recMedium hover:underline"
              >
                {' '}
                privacy policy
              </Link>
            </span>
          </p>
          <p className="text-textSmall">
            Don’t have an account?{' '}
            <Link href='/signup'
              className="font-recSemiBold hover:underline cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RightSideLoginComponent;
