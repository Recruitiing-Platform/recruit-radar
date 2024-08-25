/* eslint-disable @next/next/no-img-element */

import React from 'react'
type Props = {}
const page = (props: Props) => {
  return (
    <section>
        <div className="flex items-center justify-center min-h-screen"> 
            <div>
                <img className='w-[766px] h-[1024px] bg-[#F5F4FB]' src="/hire.jpg " alt="frame"/>
            </div> 
            <div className='bg-[#FFFFFF] w-[766px] h-[1024px]'>
                <div className='w-[462px] h-[312px] mt-[288px] ml-[172px] bg-[#FFFFFF]'>
                    <div className=' w-[462px] h-[40px] text-[32px] pl-4 font-recBold  text-[#000000] font-sans align-middle'>
                      <p>Please select your user type</p>
                    </div>
                    <div className='flex justify-between gap-5'>
                     <div className='hover:bg-recPrimary w-[171px] h-[191px] mt-[61px] border rounded-[32px] border-spacing-1 border-[#AAB0BB] pt-[11px] ml-[5px]'>
                         <div className='w-[92px] h-[92px] bg-[#AAB0BB] rounded-[10000px] ml-[36px] pt-[11px] pb-[5px] pl-[11px] pr-[5px] '>
                             <img src ="/vec.jpg" alt="employer vector" /> 
                         </div>
                         <div className='w-[131px] h-[30px] text-[24px] text-[#555562] ml-[25px] mt-[15px]'>Employer</div>
                     </div>
                      <div className=' hover:bg-recPrimary w-[171px] h-[191px] mt-[61px] border rounded-[32px] border-spacing-1 border-[#AAB0BB] pt-[11px] mr-[5px]'>
                      <div className='w-[92px] h-[92px] bg-[#AAB0BB] rounded-[10000px] ml-[36px] pt-[20px] pb-[10px] pl-[20px] pr-[10px] '>
                             <img src="/seeker.jpg" alt="employer vector" /> 
                         </div>
                         <div className='w-[131px] h-[30px] text-[24px] text-[#555562] ml-[25px] mt-[15px]'>Job Seeker</div>
                      </div>
                    </div>
                </div>
            </div>     
        </div>
    </section>
  )
}

export default page