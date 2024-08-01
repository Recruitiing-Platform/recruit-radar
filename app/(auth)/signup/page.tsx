'use client';

import RightSideSignUpComponent from '@/components/SignUpComponents/RightSideSignUpComponent';
import LeftSideSignUpComponent from '@/components/SignUpComponents/LeftSideSignUpComponent';

const Page = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Side (Desktop View) */}
      <LeftSideSignUpComponent />

      {/* Right Side (Form) */}
      <RightSideSignUpComponent />
    </div>
  );
};

export default Page;
