'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavNext,
  CarouselNavPrevious,
} from '@/components/ui/carousel';
import { testimonialData } from '@/data';
import { TestimonialDataInterface } from '@/interfaces/HomepageInterface';

export function CarouselNavPlugin() {
    // const [activeIndex, setActiveIndex] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

//   const handleSelect = (index: any) => {
//     setActiveIndex(index);
//   };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex flex-col"
    >
      <CarouselContent className='sm:max-w-[280px] sml:max-w-[320px] smd:max-w-[425px] mdm:max-w-[370px] mdl:max-w-[400px] md:max-w-[468px] mdg:max-w-[600px]'>
        {testimonialData.map((data: TestimonialDataInterface, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className='border-0 bg-recLightGrey dark:bg-[#000] rounded-2xl'>
                <CardContent className="p-5">
                  <h3 className='text-[18px] font-recSemiBold pb-2 md:pb-5 lg:pb-2 w-2/3'>{data.name}, {data.job}</h3>
                  <p className='text-textSmall md:text-textBody'>{data.testimony}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <div className="flex items-center gap-3">
          <CarouselNavPrevious />
          <CarouselNavNext />
        </div>
    </Carousel>
  );
}
