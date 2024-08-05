import React from 'react';
import LoginSvgComponent from './SvgComponents/LoginSvgComponent';
import { ModeToggle } from './ModeToggle';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type Props = {};

const RightSidePasswordReset = (props: Props) => {
  const router = useRouter();
  const {
    setPwdResetEmail,
    pwdResetEmail,
    pwdResetAlert,
    setPwdResetAlert,
    error,
    loading,
    handlePasswordReset
  } = useRecruitRadarHook();

  return (
    <div className="lg:w-2/5 relative bg-recLight dark:bg-recDark dark:text-recAccent lg:dark:bg-recLight p-4 text-center text-recDark">
      <LoginSvgComponent />

      <div className="lg:hidden absolute left-5 top-5">
        <ModeToggle />
      </div>
      <div className="md:py-6 grid grid-cols-1 px-4 md:px-40  dark:bg-recDark dark:text-recAccent lg:px-12 pt-5 bg-recLight lg:dark:bg-recLight">
        {pwdResetAlert && (
          <div
            className={`flex flex-col md:flex-row gap-3 px-3 py-2 bg-recDark dark:bg-recLightGrey lg:dark:bg-recDark w-fit mb-10 ${
              pwdResetAlert ? 'mt-14 md:mt-0' : 'mt-0'
            }`}
          >
            <h3 className="text-center text-recAccent dark:text-recDark text-textSmall md:text-[16px] lg:dark:text-recAccent">
              Password reset initiated. A reset email has been sent to{' '}
              <span className="text-recPrimary">{pwdResetEmail}</span>
            </h3>
            <div
              className="p-1 rounded-full bg-recPrimary h-fit w-fit mx-auto md:mx-0 cursor-pointer text-[#000]"
              onClick={() => setPwdResetAlert(false)}
            >
              <X size={15} />
            </div>
          </div>
        )}
        <div className={`mb-6 ${pwdResetAlert ? 'mt-0' : 'mt-32'}`}>
          <h1 className="text-headerFour font-recSemiBold text-recDark dark:text-recLightGrey lg:dark:text-recDark">
            Forget Password
          </h1>
          <p className="font-recMedium text-recBody dark:text-recSubtle lg:dark:text-recBody">
            Enter your email address you logged in with
          </p>
        </div>
        <form className="mb-6" onSubmit={handlePasswordReset}>
          <input
            onChange={e => setPwdResetEmail(e.target.value)}
            className="bg-recLightGrey outline-none border-none text-recBody rounded-md py-2 pl-3 w-full mb-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          {loading ? (
            <Button className="w-full bg-recPrimary/50 cursor-not-allowed">
              Loading...
            </Button>
          ) : (
            <Button
              className="w-full hover:scale-105 duration-300 transition-transform"
              type="submit"
            >
              Continue
            </Button>
          )}
        </form>

        <p className="text-recBody dark:text-recSubtle lg:dark:text-recBody pb-3">
          Remember your Password?{' '}
          <span
            className="text-[#000] font-recMedium hover:font-recBold hover:underline cursor-pointer dark:text-recLight lg:dark:text-[#000]"
            onClick={() => router.push('/login')}
          >
            Log back in
          </span>
        </p>
        {error && <p className='text-recError'>{error}</p>}
      </div>
    </div>
  );
};

export default RightSidePasswordReset;
