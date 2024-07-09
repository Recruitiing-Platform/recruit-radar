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
      className=""
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    //   onSelect={handleSelect}
    >
      <CarouselContent>
        {testimonialData.map((data: TestimonialDataInterface, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className='border-0 bg-recLightGrey dark:bg-[#000] rounded-2xl'>
                <CardContent className="p-5">
                  {/* <div className='flex items-center gap-2 pb-5 pr-4 justify-end'>
                    {Array.from({ length: testimonialData.length}).map((_, i: number) => <div key={i} className={`w-2 h-2 rounded-full cursor-pointer ${i === activeIndex ? "bg-recPrimary" : "bg-recSubtle"}`}></div>)}
                  </div> */}
                  <h3 className='text-headerSix font-recSemiBold pb-2'>{data.name}, {data.job}</h3>
                  <p>{data.testimony}</p>
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
