'use client';

import Image from 'next/image';
import RightSideLoginComponent from '@/components/LoginComponents/RightSideLoginComponent';

const Login = () => {

  return (
    <div className="lg:flex">
      <div className="w-3/5 p-10 bg-[url('/bglogin.png')] bg-cover bg-no-repeat hidden lg:block">
        <Image src="/logo.png" alt="logo" width={100} height={800}></Image>

        <h1 className="font-recSemiBold text-center text-textLarge mt-40 text-recLightGrey dark:text-recLightGrey">
          Discover Your Perfect
          <span className="text-recPrimary"> Career</span> Match
        </h1>
      </div>
      <RightSideLoginComponent />
    </div>
  );
};

export default Login;
