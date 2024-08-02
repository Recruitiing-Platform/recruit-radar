'use client';

import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { useRecruitRadarHook } from '@/hooks/useRecruitRadarHook';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}

const ErrorPage = (props: Props) => {
    const { resendEmail } = useRecruitRadarHook();

    const router = useRouter();

    return (
      <div className='px-5 md:px-10 lg:px-20 pt-5'>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <div className="text-recDark dark:text-recLightGrey flex flex-col items-center justify-center h-[80vh]">
          <Image src='/error.png' alt='Error' width={150} height={150} />
          <p className='text-headerTwo font-recBold pt-6 pb-2'>Error</p>
          <p className='text-[18px] pb-3'>Email Verification failed...</p>
          <Button onClick={() => router.push('/signup')} className='text-[20px] w-64 mb-4'><span className='pr-2'><ArrowLeft /></span>Back to Signup</Button>
          <Button variant={'outline'} onClick={resendEmail} className='text-[20px] w-64'>Resend email</Button>
        </div>
      </div>
    )
}

export default ErrorPage