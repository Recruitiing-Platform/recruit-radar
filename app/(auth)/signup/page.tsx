'use client';

import RightSideSignUpComponent from '@/components/SignUpComponents/RightSideSignUpComponent';
import LeftSideSignUpComponent from '@/components/SignUpComponents/LeftSideSignUpComponent';
import EmailVerificationAlertComponent from '@/components/SignUpComponents/EmailVerificationAlertComponent';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';

const Page = () => {
  const { showAlert } = useRecruitRadarHook();

  return (
    <div className="h-screen md:overflow-hidden flex flex-col md:flex-row">
      {/* Left Side (Desktop View) */}
      <LeftSideSignUpComponent />

      {/* Right Side (Form) */}
      <RightSideSignUpComponent />
      {showAlert && <EmailVerificationAlertComponent />}
    </div>
  );
};

export default Page;
