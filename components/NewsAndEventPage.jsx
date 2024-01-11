import Image from "next/image";
import { Cards } from "./common/Helper";
import Link from "next/link";
import HeaderBanner from "./common/HeaderBanner";
import { EyeIcons, MessageIcons } from "./common/Icon";

const NewsAndEventPage = () => {
  return (
    <>
      {/* Banner */}
      <HeaderBanner heading="News & Event" />

      <div className="max-w-[1152px] w-full mx-auto  sm:px-[30px] p-4 sm:py-[50px] ">
        <p className="flex justify-center text-[30px] font-semibold  font-poppins text-[#22343D] ">
          News & <span className=" text-[#FF725E]"> Event</span>
        </p>
        <div className="flex justify-center">
          <svg
            width="143"
            height="9"
            viewBox="0 0 143 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="97" height="2" rx="1" fill="#22343D" />
            <rect x="43" y="7" width="100" height="2" rx="1" fill="#FF725E" />
          </svg>
        </div>
        <div className="  w-full  flex justify-between flex-wrap mt-[50px] gap-y-[40px] gap-x-2 ">
          {Cards.map((items, index) => (
            <div
              key={index}
              className="max-w-[344px] w-full rounded-[10px] mx-auto shadow-[0px_0px_20px_2px]   shadow-[rgba(0,0,0,0.20)] pb-[20px] "
            >
              <Image src={items.img} width={344} height={232} alt="img" />
              <p className="max-w-[282px] w-full text-[20px] max-sm:px-1 text-[#000] font-normal  leading-[32px] mx-auto mt-[34px] font-poppins ">
                {items.name}
              </p>
              <div className=" max-w-[284px] w-full mx-auto max-sm:px-1  mt-[10px] flex justify-between items-center  text-[20px] font-medium font-poppins">
                <p className="max-w-[127px] w-full leading-[32px]">
                  {items.master}
                </p>
                <Link
                  href=""
                  className="max-w-[60px] w-full flex justify-between items-center "
                >
                  <MessageIcons />
                  <p>{items.ten}</p>
                </Link>
                <Link
                  href=""
                  className="max-w-[60px] w-full flex justify-between items-center "
                >
                  <EyeIcons />
                  <p>{items.twintynine}</p>
                </Link>
              </div>

              <p className="max-w-[284px] w-full max-sm:px-1 mx-auto font-poppins text-[19px] font-normal  leading-[32px] mt-5 ">
                {items.date}
              </p>
            </div>
          ))}
          <div className="w-full     ">
            <button className="max-w-[195px] border-[2px] border-[#FF725E] group  w-full hover:bg-transparent  sm:px-5 sm:py-7 px-2 py-4 float-right flex bg-[#FF725E] items-center rounded-[5px] mt-[50px] justify-between">
              <p className="max-w-[99px] group-hover:text-[#FF725E] w-full font-poppins text-[20px] font-normal leading-[21px] tracking-[-0.4px] text-white ">
                Next page
              </p>
              <span>
                <svg
                  width="18"
                  height="7"
                  viewBox="0 0 18 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-[#FF725E]"
                    d="M1 3.7658L17 3.76268M17 3.76268L13.5 0.999756M17 3.76268L13.5 6.00024"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndEventPage;
