import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Switch } from "@/components/ui/switch"
import { jobAlertData } from '@/data'
import { JobAlerts } from '@/interfaces/ProfileInterface'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type Props = {}

const JobAlertComponent = (props: Props) => {
  return (
    <div className='p-5 md:p-10 lg:pr-20'>
      <h1 className='text-headerFive font-recSemiBold pb-3'>Notification</h1>
      <div className='flex items-center justify-between p-4 border border-[#808080]/50 rounded-lg mb-14 gap-3 md:gap-0'>
        <div className='flex items-center gap-2 py-3'>
          <span className='hidden md:flex p-2.5 bg-recSecondary text-recAccent rounded-lg' >
          <IoMdNotificationsOutline size={32} />
          </span>
          <div>
            <h3 className='text-headerSix font-recMedium pb-1'>Push notification</h3>
            <p className='text-recBody font-recRegular'>Automatically receive new notification</p>
          </div>
        </div>
        <Switch />
      </div>
      <div className='grid md:grid-col-1 lg:grid-cols-2 gap-10 pb-14'>
        {jobAlertData.map((alert: JobAlerts, index: number) => {
          return (
            <div key={index} className='py-4 px-6 rounded-lg bg-recLightGrey dark:bg-recDark shadow-sm'>
              <div className='flex gap-4 items-center pb-6'>
                <Image src={alert.logo} alt="logo" width={40} height={40} className='bg-recSecondary p-2 rounded-lg' />
                <div>
                  <h2 className='text-headerSix font-recMedium'>{alert?.job}</h2>
                  <p className='text-textSmall text-recBody'>{alert?.company}</p>
                </div>
              </div>
              <div className='flex gap-2 items-center text-[12px]  md:text-textSmall'>
                <h4 className=''>${alert?.amount}</h4>
                <span className='h-1 w-1 bg-[#000] dark:bg-recLightGrey rounded-full'></span>
                <span>{alert.years} years experience</span>
                <span className='h-1 w-1 bg-[#000] dark:bg-recLightGrey rounded-full'></span>
                <span>Remote</span>
              </div>
              <p className='py-5 text-[12px] text-[#556177]'>{alert?.about}</p>
              <div className='flex items-center gap-2 pb-8'>
                <span className='px-2 py-1 bg-[#071E41] text-recLightGrey rounded-sm text-[12px]'>New</span>
                <span className='text-[12px]'>{alert?.dayPosted}</span>
              </div>
              <div className='flex flex-wrap items-center gap-5 justify-center'>
                <Button variant='alertOutline' className='w-52 md:w-40'>Decline</Button>
                <Button className='w-52 md:w-40'>Apply</Button>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default JobAlertComponent