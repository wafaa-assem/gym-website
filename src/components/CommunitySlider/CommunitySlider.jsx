// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";

const CommunitySlider = () => {
  return (
    <Swiper spaceBetween={32} slidesPerView={3} grabCursor centeredSlides>
      <SwiperSlide>
        <div className="relative ">
          <img src={image2} alt="community image" />

          <div className="absolute inset-0 bg-black/5 text-center flex flex-col justify-end pb-12 text-white/85">
            <p className="italic mb-5 font-light px-3">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              vitae nemo! Cumque veniam saepe tempore.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-emerald-300 text-xl font-bold">~</span>
              <span className="font-bold">Name N.</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative ">
          <img src={image1} alt="community image" />

          <div className="absolute inset-0 bg-black/5 text-center flex flex-col justify-end pb-12 text-white/85">
            <p className="italic mb-5 font-light px-3">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              vitae nemo! Cumque .
            </p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-emerald-300 text-xl font-bold">~</span>
              <span className="font-bold">Name N.</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative ">
          <img src={image3} alt="community image" />

          <div className="absolute inset-0 bg-black/5 text-center flex flex-col justify-end pb-12 text-white/85">
            <p className="italic mb-5 font-light px-3">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              vitae nemo! Cumque veniam saepe tempore.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-emerald-300 text-xl font-bold">~</span>
              <span className="font-bold">Name N.</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative ">
          <img src={image4} alt="community image" />

          <div className="absolute inset-0 bg-black/5 text-center flex flex-col justify-end pb-12 text-white/85">
            <p className="italic mb-5 font-light px-3">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              vitae nemo! Cumque veniam saepe tempore.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-emerald-300 text-xl font-bold">~</span>
              <span className="font-bold">Name N.</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CommunitySlider;
