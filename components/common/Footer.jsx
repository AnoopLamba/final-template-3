import Image from "next/image";
import {
  Btnicon,
  Callicon,
  Emailicon,
  Facebookicon,
  Instagramicon,
  Twittericon,
  Whatsappicon,
} from "./Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[url('/img/footer-bg.png')] bg-no-repeat bg-center bg-cover py-[30px] sm:py-[50px] md:py-[75px] px-3">
        {/* text */}
        <div className="max-[706px] w-full mx-auto text-[#fff] text-center font-poppins text-2xl sm:text-[30px] font-medium leading-10">
          <p>
            A wonderful <span className="text-[#FF725E]">first</span> out of
            home learning
          </p>
          <p>
            <span className="text-[#FF725E]">Experience</span> For you Child.
          </p>
        </div>

        {/* email input */}
        <div className="max-w-[900px] mt-[30px] sm:mt-[50px] md:mt-[80px] w-full mx-auto rounded-[5px] border-[2px] h-[50px] md:h-[80px] pl-2 sm:pl-4 md:pl-5 border-white bg-[rgba(0,0,0,0.40)] overflow-hidden">
          <form className="flex justify-between items-center">
            {/* input */}
            <input
              type="email"
              placeholder="Enter e-mail to recieve news letter"
              className=" max-sm:pl-2 w-full bg-transparent text-white outline-none placeholder:text-[#fff] placeholder:font-poppins placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[20px] font-light md:font-normal leading-10"
            />

            {/* btn */}
            <button className="flex px-5 group duration-300 items-center hover:bg-[#fff] bg-[#FF725E] w-[60px] sm:w-[100px] h-[46px] md:h-[76px]">
              <Btnicon />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#22343D] w-full px-3 pb-[50px]">
        <div className="max-w-[1052px] w-full mx-auto flex justify-between flex-wrap gap-7">
          {/* logo */}
          <div className="pt-[19px] max-w-[221px] w-full">
            <Image
              className="max-sm:max-w-[90px] max-md:max-w-[130px]"
              src="/img/Footer-Logo.PNg"
              width={176}
              height={78}
              alt="logo"
            />

            <p className="text-[#fff] font-poppins text-[20px] font-normal pt-[13px] leading-[34px]">
              Rapkhen is an outstanding Nursery & Primary school targeting
              educational System, helping Kids to read and write.
            </p>

            <div className="flex justify-between pt-[22px]">
              <Link href="">
                <Facebookicon />
              </Link>
              <Link href="">
                <Whatsappicon />
              </Link>
              <Link href="">
                <Instagramicon />
              </Link>
              <Link href="">
                <Twittericon />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="max-w-[141px] pt-[50px]">
            <div>
              <p className="text-[#FF725E] font-poppins text-[25px] font-semibold">
                Links
              </p>
            </div>

            <div className="flex flex-col gap-y-[28px] pt-5">
              <div>
                <Link
                  href=""
                  className="text-[#fff] font-poppins text-[20px] font-normal leading-[21px]"
                >
                  About us
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  className="text-[#fff] font-poppins text-[20px] font-normal leading-[21px]"
                >
                  Management
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  className="text-[#fff] font-poppins text-[20px] font-normal leading-[21px]"
                >
                  News & Event
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  className="text-[#fff] font-poppins text-[20px] font-normal leading-[21px]"
                >
                  Gallery
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  className="text-[#fff] font-poppins text-[20px] font-normal leading-[21px]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div className="max-w-[235px] pt-[50px]">
            <div className="pb-5">
              <p className="text-[#FF725E] font-poppins text-[25px] font-semibold">
                Find Us
              </p>
            </div>

            <div>
              <p className="text-[#fff] text-[20px] font-poppins font-normal leading-[33px]">
                Lorem ipsum dolor siter amet, consectetur adipising.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-5">
              <Emailicon />
              <p className="text-[#fff] text-[20px] font-poppins font-normal leading-[32px]">
                Info@gmail.com
              </p>
            </div>

            <div className="flex gap-2 pt-5">
              {/* call */}
              <div className="pt-2">
                <Callicon />
              </div>

              <div>
                <p className="text-[#FFF] font-poppins text-[20px] font-normal leading-[33px]">
                  +234 805 029 1265
                </p>
                <p className="text-[#FFF] font-poppins text-[20px] font-normal leading-[33px]">
                  +234 907 228 0656
                </p>
              </div>
            </div>
          </div>

          {/* Contact us */}

          <div className=" min-[997px]:max-w-[296px] w-full pt-[50px]">
            <div className="pb-[38px]">
              <p className="text-[#FF725E] font-poppins text-[25px] font-semibold">
                Contact us
              </p>
            </div>

            {/* input */}

            <div className="w-full flex flex-col items-end gap-[10px]">
              <input
                type="text"
                placeholder="Lorem ipsum"
                className="placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[12px] placeholder:font-normal leading-10 rounded-[5px] bordere-[2px] border-[#fff] bg-[#EDEDED] w-full h-[40px] pl-[10px] outline-none"
              />
              <input
                type="text"
                placeholder="Lorem ipsum"
                className="placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[12px] placeholder:font-normal leading-10 rounded-[5px] bordere-[2px] border-[#fff] bg-[#EDEDED] w-full h-[40px] pl-[10px] outline-none"
              />
              <textarea
                type="text"
                placeholder="Lorem ipsum dolor...."
                className="placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[12px] placeholder:font-normal leading-10 rounded-[5px] bordere-[2px] border-[#fff] bg-[#EDEDED] w-full h-[70px] pl-[10px] outline-none resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button className="p-3 sm:p-4 md:p-5 mt-[10px] rounded-[5px] bg-[#FF725E] border-[1px] border-[#FF725E] hover:bg-transparent w-full max-w-[155px] sm:max-w-[185px] tracking-[-0.4px] hover:text-[#FF725E] duration-300 text-[#fff] font-poppins text-[16px] sm:text-[20px]  font-normal leading-[21px]">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* copyright */}

        <div className="pt-[50px] flex justify-center">
          <p className="text-[#FFF] text-center font-poppins text-[18px] font-medium leading-[21px] tracking-[-0.36px]">
            Copyright © 2021. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
