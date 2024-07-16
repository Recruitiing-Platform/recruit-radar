/* eslint-disable @next/next/no-img-element */
import { FormInput } from 'lucide-react'
import React from 'react'
import image from 'next/image'
import ButtonComponent from '@/components/ButtonComponent'
 
type Props = {}

const ResetPasswordPage = (props: Props) => {
  return (
   /*main body*/
    <div className="pr-0 pl-8 pt-8 pb-8  flex items-center justify-center">
      {/*right side of form*/}
      <div>
        <img className='w-[812px] h-[1026px]' src="/bg.jpg" alt="background-image"/>
        <h1 className=" w-[735px] h-[154px] font-[600] text-[64px] mt-[295px] ml-[400px] absolute inset-0 ">Discover Your Perfect <span className='text-[#FF6A6B]'>Career</span> Match</h1>
      </div>
      {/*left side div*/}
      <div className=" p-8 h-[1026px] bg-recAccent mt-0 text-[#000030]">
        <div className='w-[499px] h-[756px] mt-[100px] pt-16 pb-24 pl-6 pr-24'>
        <div className=" w-[451px] h-[59px] gap-10">
          <div className='w-[497px] h-[30px]'>
            <h5 className='text-[24px]  text-[#000030] font-recSemiBold  w-[497px] h-[30px]'>Reset your Recruiter Rader Password</h5>
            <div className='text-[16px] text-[#555562]'>
              <p className=' text-[#8d8d9b] text-[16px] font-recBold w-[451px] h-[19px] '>Create a new password for your account</p>
              </div>
          </div>
        </div>
        {/*form div*/}
        <form>
          <div className='mt-10'>
            <label htmlFor="password" className=" w-[119px[ h-[19px] text-[16px] text-[#555562] font-recSemiBold   ">New Password</label>
            <input
              type="password"
              id="password"
              className="mt-2 w-[451px] h-[48px] pt-4 pb-10 pl-4 pr-4  border-radius-[8px] bg-[#F0F0F0]  "
              placeholder="Enter new password"
              
            />
          </div>
          <div className="mt-6">
            <label htmlFor="confirmPassword" className="w-[119px[ h-[19px] text-[16px] text-[#555562] font-recSemiBold ">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className=" w-[451px]  h-[48px] pt-4 pb-10 pl-4 pr-4  bg-[#F0F0F0] "
              placeholder="Confirm password"
            />
          </div>
          {/*reset button part*/}
          <div className='mt-32'>
          <ButtonComponent btnText={'Reset'} iconFill={'#F5F4FB'} className='w-[451px] h-[48px] '/>
          </div>
        </form>
        {/*login* link*/}
        <div className="text-center mt-8  ">
          <a href="/login" className="text-[#555562]  ml-16  ">Log in</a>
        </div>
        </div>
      </div>
  </div>
    
  );
}

export default ResetPasswordPage