import React from "react";
import { Arrownexticon, Galleryarrowicon, Tworow } from "./common/Icon";
import { Map2 } from "./common/Helper";

const GalleryPage = () => {
  return (
    <div className=" font-poppines max-w-[1152px] w-full mx-auto px-4 py-12 lg:p-12 bg-white">
      <div className=" text-center">
        <h1 className=" text-[30px] font-bold text-[#22343D] leading-normal ">
          Our{" "}
          <span className=" text-[30px] font-bold text-[#FF725E] leading-normal ">
            {" "}
            Gallery
          </span>
        </h1>
        <div className=" flex justify-center">
          <Tworow />
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 mt-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[50px]">
        {Map2.map((items, index) => (
          <div
            key={index}
            className=" max-sm:flex justify-center w-full group relative"
          >
            <div className=" ">{items.img}</div>
            <div className=" z-50 absolute hidden group-hover:block translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ">
              {items.searchimg}
            </div>
            <div className=" absolute top-0 hidden group-hover:block ">
              {items.shadowimg}
            </div>
          </div>
        ))}
      </div>
      <div className=" max-w-[1152px] w-full flex justify-between max-sm:flex-col gap-y-10  mt-12 mx-auto">
        <div className=" rounded-[5px] justify-center py-5 max-sm:mx-auto max-w-[234px] w-full  px-4 flex items-center bg-[#FF725E]">
          <button className=" flex  items-center gap-5">
            <Galleryarrowicon />
            <p
              className=" text-white text-[14px]  font-medium leading-[21px]
              "
            >
              Previous page
            </p>
          </button>
        </div>
        <div className=" rounded-[5px] justify-center py-5 max-sm:mx-auto max-w-[195px] w-full  px-4 flex items-center bg-[#FF725E]">
          <button className=" flex  items-center gap-5">
            <p
              className=" text-white text-[14px]  font-medium leading-[21px]
              "
            >
              Previous page
            </p>

            <Arrownexticon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
