import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./ImageSlider.css";

const ImageSlider = ({ title, images, interval = 5000 }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade,
        ]}
        slidesPerView={1}
        loop={images.length > 1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1200}
        autoplay={{
          delay: interval,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="nursery-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${title}-${index}`}>
            <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px]">
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h2 className="text-lg font-bold text-white drop-shadow-lg sm:text-xl">
                  {title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;