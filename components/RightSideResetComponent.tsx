import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { useRouter } from 'next/navigation';
import LoginSvgComponent from './SvgComponents/LoginSvgComponent';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import ButtonComponent from './ButtonComponent';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const RightSideResetComponent = () => {
  const router = useRouter();
  const { error, loading, handleReset, setNewPassword, setConfirmPassword } =
    useRecruitRadarHook();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="lg:w-2/5 relative bg-recLight dark:bg-recDark dark:text-recAccent lg:dark:bg-recLight p-4 text-center text-recDark">
      <LoginSvgComponent />

      <div className="lg:hidden absolute left-5 top-5">
        <ModeToggle />
      </div>
      <div className="md:py-6 flex flex-col h-full justify-center px-4 md:px-40  dark:bg-recDark dark:text-recAccent lg:px-12 pt-5 bg-recLight lg:dark:bg-recLight">
        <div className='text-left pb-10'>
          <h1 className="text-headerSix font-recSemiBold text-recDark pb-1 dark:text-recLightGrey lg:dark:text-recDark ">
            Reset your Recruiter Rader Password
          </h1>
          <p className="font-recMedium text-recBody dark:text-recSubtle lg:dark:text-recBody">
            Create a new password for your account
          </p>
        </div>
        <div className="mb-3">
          <div className="flex flex-col items-start">
            <label htmlFor="password" className="text-recBody text-textSmall pb-2">
              New Password*
            </label>
            <div className='relative w-full'>
              <input
                onChange={e => setNewPassword(e.target.value)}
                className="bg-recLightGrey outline-none border-none text-recBody rounded-md py-2 pl-3 w-full mb-5"
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="*************"
              />
              <div
                onClick={togglePasswordVisibility}
                className="mr-2 cursor-pointer text-recSubtle absolute top-2 right-0"
              >
                {passwordVisible ? <Eye size={16} /> : <EyeOff size={16} />}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="confirmPassword" className="text-recBody text-textSmall pb-2">
              Confirm Password*
            </label>
            <div className="relative w-full">
              <input
                onChange={e => setConfirmPassword(e.target.value)}
                className="bg-recLightGrey outline-none border-none text-recBody rounded-md py-2 pl-3 w-full mb-1"
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="*************"
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className="mr-2 cursor-pointer text-recSubtle absolute right-0 top-2"
              >
                {confirmPasswordVisible ? <Eye size={16} /> : <EyeOff size={16} />}
              </div>
            </div>
          </div>
          {error && <p className="text-recError text-[12px] mb-4 text-left">{error}</p>}
          {loading ? (
            <Button className="w-full bg-recPrimary/50 cursor-not-allowed">
              Loading...
            </Button>
          ) : (
            <ButtonComponent
              className="w-full hover:scale-105 duration-300 transition-transform"
              btnText={'Reset'}
              iconFill={'#FFC8C8'}
              onClick={handleReset}
            />
          )}
        </div>
        <Button
          variant={'outline'}
          className="hover:scale-105 duration-300 ease-in-out transition-transform"
          onClick={() => router.push('/login')}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default RightSideResetComponent;
