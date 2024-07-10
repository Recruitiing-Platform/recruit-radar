import Image from 'next/image'
import React from 'react'
import { CarouselPlugin } from '../CarouselComponent'

type Props = {}

const TestimonialComponent = (props: Props) => {
  return (
    <div className='p-20 flex items-center justify-between gap-5'>
      {/* Image */}
        <div className='object-center object-cover w-[200%]' >
          <Image src="/testimonial01.jpg" alt='Testimonial image' width={413} height={540} className='rounded-2xl' loading='lazy' />
        </div>

        {/* Testimonies */}
        <div>
          {/* topic and arrows */}
          <div>
            <h1 className='font-recSemiBold text-headerThree w-2/3 pb-4 pt-1'>What Our Users Say About <span className='text-recPrimary'>RecruitRadar</span></h1>
          </div>
          <CarouselPlugin />
        </div>
    </div>
  )
}

export default TestimonialComponent