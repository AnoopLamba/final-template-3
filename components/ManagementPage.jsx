import Link from "next/link";
import {
  Facebookicon,
  Fb,
  Insta,
  Instagramicon,
  Line,
  Tweet,
  Twittericon,
  Whatsapp,
  Whatsappicon,
} from "./common/Icon";
import Image from "next/image";
import { Data } from "./common/Helper";
import HeaderBanner from "./common/HeaderBanner";

const ManagementPage = () => {
  return (
    <>
      {/* banner */}
      <HeaderBanner heading="Mangement" />

      {/* founder */}
      <div className="max-w-[1151px] bg-[#FFF] font-poppins w-full pb-[50px] mx-auto ">
        <div className="mx-auto flex max-w-[1052px] items-center gap-y-7 px-4 mt-12 w-full gap-8  justify-between max-lg:flex-col-reverse">
          <div className="max-w-[501px] max-sm:text-center w-full">
            <p className="text-[30px] font-semibold leading-normal text-[#FF725E]">
              THE FOUNDER
            </p>
            <p className="text-[20px] mt-2 font-medium leading-[35px]">
              MR. LOREM IPSUM
            </p>
            <p className="sm:text-[20px] font-normal sm:leading-[35px]  sm:mt-5">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magna aliqua. computer science
              students Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod temp incididunt ut
              labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad
              minim Lorem ipsum eiusmod temp incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div className="flex max-w-[171px]  mt-5 max-sm:mx-auto justify-between w-full ">
              <Link className=" hover:scale-110" href="">
                <Fb />
              </Link>
              <Link className=" hover:scale-110" href="">
                <Whatsapp />
              </Link>
              <Link className=" hover:scale-110" href="">
                <Insta />
              </Link>
              <Link className=" hover:scale-110" href="">
                <Tweet />
              </Link>
            </div>
          </div>
          <Image src="/img/Men.png" height={500} width={501} alt="men" />
        </div>
      </div>

      {/* our team */}
      <div className="bg-[#F2F2F2] font-poppins  px-3">
        <div className="max-w-[1152px] w-full  mx-auto pb-[50px]">
          <p className="text-[#22343D] text-[22px] sm:text-[30px] text-center font-semibold leading-normal pt-7">
            Meet Our{" "}
            <span className="text-[#FF725E] text-[30px] font-semibold leading-normal">
              Team
            </span>
          </p>
          <div className="max-w-[143px] w-full mx-auto">
            <Line />
          </div>
          <div className="max-w-[1052px] mx-auto mt-[19px] flex justify-center gap-[15px] md:gap-[76px] flex-wrap gap-y-[40px] md:gap-y-[50px]  w-full">
            {Data.map((items, index) => (
              <div
                key={index}
                className="max-w-[300px] rounded-[10px] bg-white w-full"
              >
                <div>
                  <p> {items.img}</p>
                  <p className="text-[#FF725E] pt-[10px] px-5 text-[16px] leading-[26px] font-normal">
                    {" "}
                    {items.text}
                  </p>
                  <p className="text-[#22343D] px-5 pt-[5px] text-[22px] leading-normal font-semibold">
                    {" "}
                    {items.name}
                  </p>
                  <p className="text-[#22343D] px-5 pt-[10px] text-[16px] leading-[26px] font-normal">
                    {" "}
                    {items.lorem}
                  </p>
                  <div className="flex gap-x-[25px] px-5 pt-[17px] cursor-pointer pb-[15px]">
                    <Link className=" hover:scale-110" href="">
                      <Fb />
                    </Link>
                    <Link className=" hover:scale-110" href="">
                      <Whatsapp />
                    </Link>
                    <Link className=" hover:scale-110" href="">
                      <Insta />
                    </Link>
                    <Link className=" hover:scale-110" href="">
                      <Tweet />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementPage;
