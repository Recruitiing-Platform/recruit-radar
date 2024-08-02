'use client'

import { ModeToggle } from '@/components/ModeToggle'
import SuccessSvgComponent from '@/components/SvgComponents/SuccessSvgComponent'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className='px-5 md:px-10 lg:px-20 pt-5'>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <div className="text-recDark dark:text-recLightGrey flex flex-col items-center justify-center h-[80vh]">
        <SuccessSvgComponent />
        <p className='text-headerTwo font-recBold pt-6 pb-2'>Success</p>
        <p className='text-textSmall md:text-[18px] pb-3 text-center'>Email Verification is now successful...</p>
        <Button onClick={() => router.push('/decision')} className='text-[20px] w-40'>Continue <span className='pl-2 hover:pl-4 transition duration-300 ease-in-out'><ArrowRight /></span></Button>
      </div>
    </div>
  )
}

export default SuccessPage