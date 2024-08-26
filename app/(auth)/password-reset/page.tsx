'use client';

import RightSidePasswordReset from "@/components/RightSidePasswordReset";
import Image from "next/image";

const PasswordResetPage = () => {
  return (
    <div className="lg:flex h-screen">
      <div className="w-3/5 pl-16 bg-[url('/pwdreset.jpg')] bg-cover bg-no-repeat hidden lg:block">
        <Image src="/rr-dark.svg" alt="logo" width={120} height={38} className="pt-10" />
        <div>
        <h1 className="font-recSemiBold text-left text-headerOne w-[90%] leading-[64px] mt-16 pb-7">
          Discover Your Perfect
          <span className="text-recPrimary"> Career</span> Match
        </h1>
        <div className="text-center flex items-center justify-center">
          <Image src='/woman.png' alt="Woman Password Reset" width={320} height={320} />
        </div>
        </div>
      </div>
      <RightSidePasswordReset />
    </div>
  )
}

export default PasswordResetPage