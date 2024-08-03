import Image from 'next/image';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

const LoginFormComponent = () => {
  const { setLoginEmail, setLoginPassword, signInError, handleLoginSubmit, buttonColor } = useRecruitRadarHook();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form
      className="grid grid-cols-1 min-w-full gap-2"
      onSubmit={handleLoginSubmit}
    >
      <div className="grid grid-col-1 relative pb-2">
        <label className="text-left min-w-full text-textSmall font-recRegular pb-2">
          Email*
        </label>
        <div className="text-recBody rounded-md bg-recLightGrey flex py-2 pl-8 relative">
          <input
            onChange={e => setLoginEmail(e.target.value)}
            className="bg-recLightGrey outline-none border-none w-full"
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            required
          />
          <span>
            <Image
              className="absolute inset-y-0 left-0 top-3 pointer-events-none ml-2"
              src="/mdi_user.png"
              alt="arrow icon"
              width={18}
              height={18}
            ></Image>
          </span>
        </div>
      </div>

      <div className="grid grid-col-1 relative">
        <label className="text-left text-textSmall font-recRegular pb-2">
          Password*
        </label>

        <div className="text-recBody rounded-md bg-recLightGrey flex py-2 pl-8 relative">
          <input
            onChange={e => setLoginPassword(e.target.value)}
            className="bg-recLightGrey outline-none border-none w-full"
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="enter your password"
            required
          />
          <span>
            <Image
              className="absolute top-3 left-0 ml-2 pointer-events-none"
              src="/lock.png"
              alt="lock icon"
              width={18}
              height={18}
            ></Image>
          </span>
          <div
            onClick={togglePasswordVisibility}
            className="mr-2 cursor-pointer text-recSubtle"
          >
            {passwordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
          </div>
        </div>
      </div>

      <p className="text-left mb-4 text-textSmall font-recSemiBold">
        <Link href="/forgot-password" className="hover:underline">
          Forgot password?
        </Link>
      </p>
      <div>
        {signInError &&
        <p className='text-left text-recError text-textSmall'>
          Your email or password is incorrect
        </p>}
      </div>

      <button
        className={`${buttonColor} py-2 rounded-md text-recLight flex items-center justify-center gap-1 hover:opacity-25 mb-4 ease-in-out duration-100`}
        type="submit"
      >
        Login
        <span>
          <Image
            className="top-1 left-50"
            src="/icon.png"
            alt="arrow icon"
            width={15}
            height={15}
          ></Image>
        </span>
      </button>
    </form>
  );
};

export default LoginFormComponent;
