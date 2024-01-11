import { Arrowicon } from "./Icon";

const HeaderBanner = ({ heading }) => {
  return (
    <div className='bg-[url("/img/Hero-bg.png")] bg-no-repeat max-w-[1152px] mx-auto bg-right h-[178px] flex items-center bg-cover w-full py-11'>
      <div className="mx-auto text-center">
        <p className="text-white font-Roboto text-2xl sm:text-[53px] font-medium ">
          {heading}
        </p>

        <div className="mx-auto pt-[10px] sm:pt-[22px] flex items-center justify-center gap-[10px]">
          <p className="text-[rgba(255,255,255,0.60)] font-Roboto text-[16px] font-normal">
            Home
          </p>
          <Arrowicon />
          <p className="text-white font-Roboto text-[16px] font-medium">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
