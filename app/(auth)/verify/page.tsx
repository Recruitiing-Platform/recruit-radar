'use client';

import { useEffect } from 'react';
import { applyActionCode } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { ModeToggle } from '@/components/ModeToggle';

const VerifyPage = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      const oobCode = new URLSearchParams(window.location.search).get(
        'oobCode'
      ) as string;
      
      const mode = new URLSearchParams(window.location.search).get(
        'mode'
      ) as string;

      const mode = new URLSearchParams(window.location.search).get(
        'mode'
      ) as string;

      if (!oobCode) {
        router.push('/error');
      }

      try {
        if (mode === 'resetPassword') {
          router.push(`/reset?oobCode=${oobCode}`);
        } else if (mode === 'verifyEmail') {
          await applyActionCode(auth, oobCode);
          router.push('/success'); 
        } else {
          router.push('/error');
        }
      } catch (error) {
        console.error('Error processing the action:', error);
        router.push('/error');
      }
    };

    verifyEmail();
  }, [router]);

  return (
    <div className="px-5 md:px-10 lg:px-20 pt-5">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <div className="text-recDark dark:text-recLightGrey flex flex-col items-center justify-center h-[80vh]">
        <FaEnvelopeOpenText size={92} />
        <p className="text-headerFour text-center md:text-headerTwo font-recBold pt-6 pb-2">
          Verifying your email...
        </p>
        <p className="text-textSmall md:text-[18px] text-center">
          Almost there... we are currently verifying your email...
        </p>
      </div>
    </div>
  );
};

export default VerifyPage;
