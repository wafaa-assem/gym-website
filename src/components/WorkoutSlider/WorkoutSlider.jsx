import boxing from "../../assets/boxing.png";
import body from "../../assets/full-body.png";
import fitness from "../../assets/fitness.png";
import yoga from "../../assets/yoga.png";
import battle from "../../assets/battle-rope.png";
import resistance from "../../assets/resistance.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./WorkoutSlider.css";

const WorkoutSlider = () => {
  return (
    // swiper
    <Swiper
      spaceBetween={28}
      slidesPerView={2}
      grabCursor
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // any interaction with slider not effect on autoplay
        pauseOnMouseEnter: true,
      }}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] relative">
        <img
          src={resistance}
          className="w-full h-full object-cover"
          alt="resistance"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          resistance
        </div>
      </SwiperSlide>
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] bg-red-300 relative">
        <img
          src={boxing}
          className="w-full h-full object-cover"
          alt="boxing image"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          Boxing
        </div>
      </SwiperSlide>
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] relative">
        <img
          src={body}
          className="w-full h-full object-cover"
          alt="body image"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          Full Body
        </div>
      </SwiperSlide>
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] relative">
        <img
          src={fitness}
          className="w-full h-full object-cover"
          alt="fitness image"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          Fitness
        </div>
      </SwiperSlide>
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] relative">
        <img
          src={yoga}
          className="w-full h-full object-cover"
          alt="yoga image"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          Yoga
        </div>
      </SwiperSlide>
      {/* swiper-slide */}
      <SwiperSlide className="max-w-[320px] max-h-[320px] relative">
        <img
          src={battle}
          className="w-full h-full object-cover"
          alt="battle image"
        />
        <div className="bg-white absolute bottom-5 left-5 px-4 py-[2px] font-semibold text-sm text-gray-600 rounded-sm">
          Battle Rope
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorkoutSlider;
