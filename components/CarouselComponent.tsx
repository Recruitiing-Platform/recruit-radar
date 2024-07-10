'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonialData } from '@/data';
import { TestimonialDataInterface } from '@/interfaces/HomepageInterface';

export function CarouselPlugin() {
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
      className="lg:max-w-[620px] xl:max-w-[900px] xxl:max-w-[1440px] 3xl:max-w-[2560px]"
    >
      <CarouselContent className=''>
        {testimonialData.map((data: TestimonialDataInterface, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className='border-0 bg-recLightGrey dark:bg-[#000] rounded-2xl'>
                <CardContent className="p-5 3xl:p-10">
                  <h3 className='text-headerSix 3xl:text-headerThree font-recSemiBold pb-2'>{data.name}, {data.job}</h3>
                  <p className="3xl:text-headerFour">{data.testimony}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <div className="flex items-center gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
    </Carousel>
  );
}
