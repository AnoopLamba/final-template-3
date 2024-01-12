import Image from "next/image";
import { BtnArrowIcon, LineIcons, Searchicon } from "./common/Icon";
import { blog, staff } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";
import HeroSection from "./Herosection";

const HomePage = () => {
  return (
    <>
      {/* Herosection */}
      <HeroSection />
      {/* Our activities */}
      <div className="max-w-[1092px] w-full mx-auto bg-[#FFF] pt-[51px] pb-[40px] px-3 lg:px-[2px]">
        <div className="max-w-[209px] w-full mx-auto">
          <p className="text-[#22343D] font-poppins text-[30px] font-bold">
            Our <span className="text-[#FF725E]">Activities</span>
          </p>
          <div className="flex justify-center">
            <LineIcons />
          </div>
        </div>
        <div className="flex justify-around lg:justify-center flex-wrap pt-10 max-sm:gap-y-[35px] gap-[10px]">
          <div className="max-w-[350px] flex flex-col justify-center items-center">
            <div>
              <Image
                src="/img/painting.png"
                width={120}
                height={120}
                alt="painting"
              />
              <p className="text-[#22343D] pt-5 pb-[10px] text-center font-poppins text-[22px] font-semibold">
                Painting
              </p>
            </div>

            <p className="text-[#22343D] text-center font-poppins text-[16px] font-normal leading-[26px]">
              painting is the expression or application of human creative skill
              and imagination, typically in a visual form.
            </p>
          </div>
          <div className="max-w-[350px] flex flex-col justify-center items-center">
            <div>
              <Image
                src="/img/sport.png"
                width={120}
                height={120}
                alt="sport"
              />
              <p className="text-[#22343D] pt-5 pb-[10px] text-center font-poppins text-[22px] font-semibold">
                Sport
              </p>
            </div>

            <p className="text-[#22343D] text-center font-poppins text-[16px] font-normal leading-[26px]">
              Sports are games such as football and basketball and other
              competitive leisure activities which need physical effort and
              skill.
            </p>
          </div>
          <div className="max-w-[350px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/img/entertainment.png"
                width={120}
                height={120}
                alt="entertainment"
              />
              <p className="text-[#22343D] pt-5 pb-[10px] text-center font-poppins text-[22px] font-semibold">
                Entertainment
              </p>
            </div>

            <p className="text-[#22343D] text-center font-poppins text-[16px] font-normal leading-[26px]">
              Entertainment is a form of activity that holds the attention and
              interest of an audience or gives pleasure and delight.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Latest blog */}
      <div className="bg-[#F2F2F2] pb-[41px] pt-[30px] px-3">
        <h2 className="text-[#22343D] text-center font-poppins text-[30px] font-bold leading-[38px] uppercase">
          Latest <span className="text-[#FF725E]">Blog</span>
        </h2>
        <div className="w-fit mx-auto">
          <LineIcons />
        </div>
        <div className="mt-12 flex flex-wrap gap-3 justify-center max-w-[1072px] w-full mx-auto">
          {blog.map((item, index) => (
            <div
              key={index}
              className="p-[5px] md:p-[10px] rounded-[10px] bg-white shadow-[0px_0px_20px_2px_rgba(0,0,0,0.20)] max-w-[344px] w-full md:h-[466px]"
            >
              <Image src={item.img} alt="image-1" width={324} height={231} />
              <div className="mt-6 px-1 md:px-3 lg:px-5 flex flex-col gap-3 md:gap-5">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#22343D] font-poppins text-[16px] md:text-[20px] font-normal leading-6 sm:leading-8">
                    {item.about}
                  </p>
                  <div className="flex gap-4 md:gap-[26px] items-center">
                    <p className="text-[#22343D] font-poppins text-[20px] font-medium leading-8">
                      {item.position}
                    </p>
                    {item.icons.map((icn, icnindex) => (
                      <div
                        key={icnindex}
                        className="flex gap-[15px] items-center"
                      >
                        <div className="flex gap-[10px] items-center">
                          {icn.icon}
                          <p className="text-[#22343D] font-poppins text-[20px] font-medium leading-8">
                            {icn.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#22343D] font-poppins text-[16px] md:text-[20px] font-normal leading-6 sm:leading-8">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[51px] flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#FF725E] rounded-[5px] border border-[#FF725E] flex gap-5 py-5 px-[30px] text-white text-[20px] font-poppins leading-[21px] tracking-[-0.4px] font-normal items-center group duration-300 hover:bg-white hover:text-[#FF725E]"
          >
            More Articles
            <span>
              <BtnArrowIcon />
            </span>
          </button>
        </div>
      </div>

      {/* Our team slider */}
      <div className="bg-[#F2F2F2] pt-[30px] pb-[40px]">
        <h2 className="text-[#22343D] text-center font-poppins text-[30px] font-bold leading-[38px] uppercase">
          Meet Our <span className="text-[#FF725E]">Team</span>
        </h2>
        <div className="mx-auto w-fit mb-[20px]">
          <LineIcons />
        </div>
        <div className="max-w-[1052px] w-full mx-auto px-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              marginTop: 50,
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 76,
              },
            }}
            modules={[Pagination]}
            className="mySwiper2 h-[550px] px-3 pt-[19px] max-w-[300px] min-[576px]:max-w-[675px] lg:max-w-[1050px] w-full mx-auto flex items-center justify-center"
          >
            {staff.map((item, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[300px] w-full !h-fit rounded-[10px] bg-white shadow-[0px_0px_20px_2px_rgba(0,0,0,0.20)]"
              >
                <Image
                  src={item.img}
                  width={300}
                  height={281}
                  className="md:max-w-[300px] md:w-full md:h-[281px] rounded-t-[10px]"
                  alt="img"
                />
                <div className="px-1 md:px-5 pt-[10px] pb-[15px]">
                  <p className="text-[#FF725E] font-Poppins text-[10px] md:text-[16px] font-normal leading-[20px] md:leading-[26px]">
                    {item.position}
                  </p>
                  <p className="text-[#22343D] font-Poppins text-[22px] font-semibold leading-[30px]">
                    {item.name}
                  </p>
                  <p className="text-[#22343D] font-Poppins text-[16px] font-normal leading-[26px]">
                    {item.about}
                  </p>
                  <div className="flex flex-wrap md:flex-nowrap justify-start items-center gap-y-1 gap-x-2 md:gap-[25px] mt-[10px]">
                    {item.icons.map((icn, icnIndex) => (
                      <Link
                        href={icn.link}
                        key={icnIndex}
                        className="w-fit h-fit"
                      >
                        {icn.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Our gallery */}
      <div className="px-3 md:px-[50px] pt-[50px] pb-10">
        <h2 className="text-[#22343D] text-center font-poppins text-[30px] font-bold leading-[38px] uppercase">
          Our <span className="text-[#FF725E]">Gallery</span>
        </h2>
        <div className="w-fit mx-auto">
          <LineIcons />
        </div>
        <div className="pt-10 flex justify-around lg:justify-center gap-10 flex-wrap ">
          <div className="relative group cursor-pointer max-w-[318px] h-[293px]">
            <Image
              src="/img/gallery-img-1.png"
              width={318}
              height={293}
              alt="gallery img"
            />
            <div className=" absolute top-0  bg-[rgba(0,0,0,0.40)]  hidden group-hover:flex justify-center items-center w-full  max-w-[318px] h-[293px]">
              <Searchicon />
            </div>
          </div>
          <div className="relative group cursor-pointer max-w-[318px] h-[293px]">
            <Image
              src="/img/gallery-img-2.png"
              width={318}
              height={293}
              alt="gallery img 2"
            />
            <div className=" absolute top-0  bg-[rgba(0,0,0,0.40)]  hidden group-hover:flex justify-center items-center w-full  max-w-[318px] h-[293px]">
              <Searchicon />
            </div>
          </div>

          <div className="relative group cursor-pointer max-w-[318px] h-[293px]">
            <Image
              src="/img/gallery-img-3.png"
              width={318}
              height={293}
              alt="gallery img 3"
            />

            <div className=" absolute top-0  bg-[rgba(0,0,0,0.40)]  hidden group-hover:flex justify-center items-center w-full  max-w-[318px] h-[293px]">
              <Searchicon />
            </div>
          </div>
        </div>
        <div className="mt-[37px] flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#FF725E] rounded-[5px] border border-[#FF725E] flex gap-5 py-5 px-[30px] text-white text-[20px] font-poppins leading-[21px] tracking-[-0.4px] font-normal items-center group duration-300 hover:bg-white hover:text-[#FF725E]"
          >
            View more
            <span>
              <BtnArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
