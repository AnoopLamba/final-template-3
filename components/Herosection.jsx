import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper1 max-w-[1152px] w-full h-[492px] relative"
      >
        <SwiperSlide className="bg-[url(/img/bg.png)] bg-no-repeat bg-cover bg-center relative">
          <div className="bg-black bg-opacity-25 w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(/img/bg.png)] bg-no-repeat bg-cover bg-center">
          <div className="bg-black bg-opacity-25 w-full h-full"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(/img/bg.png)] bg-no-repeat bg-cover bg-center">
          <div className="bg-black bg-opacity-25 w-full h-full"></div>
        </SwiperSlide>

        {/* this is box div */}
        <div className=" flex flex-col gap-y-5 swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical"></div>
        <div className="max-w-[484px] max-sm:max-w-[280px] max-sm:translate-x-[-50%] max-sm:top-[50%] max-sm:left-[50%] max-sm:translate-y-[-50%] w-full rounded-[10px] bg-[#FF725E] absolute top-[40px] left-[50px] z-10 p-[30px] max-sm:p-[20px] font-Poppins">
          <p className="text-[30px] max-sm:text-[20px] font-semibold text-white max-w-[424px] w-full ">
            We play and Learn <br />
            Who said <span className=" text-[#22343D]">Education </span> is{" "}
            <span className=" text-[#22343D]">boring?</span>
          </p>
          <p className="text-[20px] max-sm:text-[16px] max-w-[424px] w-full text-white font-normal mt-[25px] max-sm:mt-[15px] ">
            Rapkhen is an outstanding Nursery & Primary school targeting
            educational System, helping Kids to read and write.
          </p>
          <button className="max-w-[186px] w-full rounded-[5px] group duration-300 max-sm:mt-[20px] justify-center gap-5 mt-[35px] hover:border-[3px] hover:bg-transparent hover:border-white flex items-center max-sm:h-[40px] max-sm:max-w-[150px] hover:text-white bg-white h-[66px] text-[20px] text-[#22343D] font-normal leading-[21px]  ">
            More info
            <svg
              width="18"
              height="6"
              viewBox="0 0 18 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" group-hover:stroke-white  duration-300 stroke-[#22343D] "
                d="M1 3.2658L17 3.26268M17 3.26268L13.5 0.499756M17 3.26268L13.5 5.50024"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </>
  );
}
