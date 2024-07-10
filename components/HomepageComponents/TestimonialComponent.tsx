import Image from 'next/image'
import React from 'react'
import { CarouselPlugin } from '../CarouselComponent'
import { CarouselNavPlugin } from '../CarouselNavComponent'

type Props = {}

const TestimonialComponent = (props: Props) => {
  return (
    <div className='p-4 md:px-10 lg:px-20 md:py-10 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-5'>
      {/* Image */}
        <div className='object-center object-cover'>
          <Image src="/testimonial01.jpg" alt='Testimonial image' width={413} height={540} className='rounded-2xl' loading='lazy' />
        </div>

        {/* Testimonies */}
        <div className='hidden lg:flex flex-col'>
          {/* topic and arrows */}
          <div>
            <h1 className='font-recSemiBold text-headerThree w-2/3 pb-4 pt-1'>What Our Users Say About <span className='text-recPrimary'>RecruitRadar</span></h1>
          </div>
          <CarouselPlugin />
        </div>

        {/* Testimonies Mobile */}
        <div className='flex lg:hidden'>
          <CarouselNavPlugin />
        </div>
    </div>
  )
}

export default TestimonialComponent