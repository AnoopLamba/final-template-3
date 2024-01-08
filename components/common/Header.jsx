import Image from "next/image";
import { Arrowicon, Darkbtnicon, Sidebaricon } from "./Icon";

const Header = () => {
  return (
    <>
      <nav className="max-w-[1064px] w-full mx-auto px-3  pb-[10px]">
        <div className="flex justify-between items-center pt-[27px] pb-[10px]">
          {/* logo */}

          <div>
            <a href="">
              {" "}
              <Image
                className="max-sm:w-[90px]"
                src="/img/Logo-img.png"
                width={120}
                height={60}
                alt="logo"
              />
            </a>
          </div>

          {/* links */}

          <ul className="flex gap-10 max-lg:hidden ">
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                Home
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                About us
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                Management
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                News & Event
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                Gallery
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#FF725E] hover:font-semibold duration-300">
                Contact us
              </li>
            </a>
          </ul>

          <div className="flex items-center gap-5 sm:gap-10">
            <button>
              <Darkbtnicon />
            </button>

            <button className="lg:hidden">
              <Sidebaricon />
            </button>
          </div>
        </div>
      </nav>

      <div className='bg-[url("/img/Hero-bg.png")] bg-no-repeat max-w-[1152px] mx-auto bg-center h-[178px] flex items-center bg-cover w-full py-11'>
        <div className="mx-auto max-w-[251px] text-center w-full">
          <p className="text-white font-Roboto text-2xl sm:text-[53px] font-medium ">
            About us
          </p>

          <div className="w-[133px] mx-auto pt-[10px] sm:pt-[22px] flex items-center justify-between">
            <p className="text-[rgba(255,255,255,0.60)] font-Roboto text-[16px] font-normal">
              Home
            </p>
            <Arrowicon />
            <p className="text-white font-Roboto text-[16px] font-medium">
              About us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
