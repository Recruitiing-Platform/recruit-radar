import { employerSliderImages } from "@/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

type Props = {}

const ContinuousScrollComponent = (props: Props) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={7}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={300}
      modules={[Autoplay]}
      className="lg:flex justify-center mt-20 gap-20"
    >
        {employerSliderImages.map((data, index) => (
          <SwiperSlide key={index} className="w-auto">
            <Image
              src={data.image}
              alt={data.altText}
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ContinuousScrollComponent