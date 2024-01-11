import React from "react";
import {
  Arrownexticon,
  Galleryarrowicon,
  Searchicon,
  Tworow,
} from "./common/Icon";
import { Map2 } from "./common/Helper";
import Image from "next/image";
import HeaderBanner from "./common/HeaderBanner";

const GalleryPage = () => {
  return (
    <>
      {/* banner */}
      <HeaderBanner heading="Gallery" />

      <div className=" font-poppines max-w-[1152px] w-full mx-auto px-4 py-12 lg:p-12 bg-white">
        <div className=" text-center">
          <h1 className=" text-[22px] sm:text-[30px] font-bold text-[#22343D] leading-normal ">
            Our{" "}
            <span className=" text-[22px] sm:text-[30px] font-bold text-[#FF725E] leading-normal ">
              {" "}
              Gallery
            </span>
          </h1>
          <div className=" flex justify-center">
            <Tworow />
          </div>
        </div>
        <div className="max-lg:max-w-[750px] w-full grid justify-center grid-cols-1 mt-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-6 sm:gap-y-[50px]">
          {Map2.map((items, index) => (
            <div
              key={index}
              className=" max-sm:flex justify-center  w-full group relative"
            >
              <div className=" flex justify-center">
                <Image
                  width={350}
                  height={250}
                  src={items.img}
                  alt="student img"
                />
              </div>
              <div className=" z-50 absolute hidden group-hover:block translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
                <Searchicon />
              </div>
              <div className=" absolute top-0 hidden group-hover:block ">
                <Image
                  src="/img/shadow.png"
                  width={350}
                  height={250}
                  alt="shadow"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" max-w-[1152px]  w-full  flex justify-between max-sm:flex-col gap-y-10  mt-12 mx-auto">
          <div className=" rounded-[5px] border-[2px] border-[#FF725E] group  hover:bg-transparent justify-center py-5 max-sm:mx-auto max-w-[234px] w-full  px-4 flex items-center bg-[#FF725E]">
            <button className=" flex  items-center gap-5">
              <Galleryarrowicon />
              <p
                className=" text-white text-[14px] group-hover:text-[#FF725E]  font-medium leading-[21px]
              "
              >
                Previous page
              </p>
            </button>
          </div>
          <div className=" rounded-[5px] justify-center py-5 group border-[2px] border-[#FF725E] hover:bg-transparent max-sm:mx-auto max-w-[195px] w-full  px-4 flex items-center bg-[#FF725E]">
            <button className=" flex  items-center gap-5">
              <p
                className=" text-white text-[14px] group-hover:text-[#FF725E]  font-medium leading-[21px]
              "
              >
                Previous page
              </p>

              <Arrownexticon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
