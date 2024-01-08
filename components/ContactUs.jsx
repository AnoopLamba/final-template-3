import React from "react";
import { Lineicon } from "./common/Icon";

const ContactUs = () => {
  return (
    <div className="max-w-[1056px] w-full mx-auto px-3">
      <h2 className="text-[#22343D] text-center font-poppins text-[30px] mt-[30px] font-bold">
        Contact <span className="text-[#FF725E]">& Find us</span>
      </h2>
      <div className="flex justify-center">
        <Lineicon />
      </div>
      <div className="flex w-full rounded-[10px] mt-[52px] sm:flex-row flex-col max-sm:items-center max-sm:gap-[30px]">
        <div className="p-[30px] bg-[#FF725E] max-w-[451px] w-full flex flex-col gap-[30px] max-sm:rounded-[10px]  sm:rounded-l-[10px]">
          <h3 className="text-[#22343D] font-poppins text-[25px] sm:text-[30px] font-bold uppercase">
            Contact Info
          </h3>
          <p className="text-[#22343D] font-poppins text-[16px] sm:text-[20px] font-medium ">
            You can always reach us via following contact details. We will give
            our best to reach you as possible.
          </p>
          <div className="flex gap-[25px]">
            <p className="text-[#22343D] font-poppins text-[16px] sm:text-[20px] font-normal ">
              Phone:
            </p>
            <div>
              <p className="text-[rgba(255,255,255,0.80)] font-poppins text-[16px] sm:text-[20px] font-semibold leading-[33px] ">
                +234 805 029 1265{" "}
              </p>
              <p className="text-[rgba(255,255,255,0.80)] font-poppins text-[16px] sm:text-[20px] font-semibold leading-[33px] ">
                +234 907 228 0656
              </p>
            </div>
          </div>
          <div className="flex gap-[32px]">
            <p className="text-[#22343D] font-poppins text-[16px] sm:text-[20px] font-normal ">
              Email:{" "}
            </p>
            <div>
              <p className="text-[rgba(255,255,255,0.80)] font-poppins text-[16px] sm:text-[20px] font-semibold leading-[33px] ">
                Info20@gmail.com
              </p>
              <p className="text-[rgba(255,255,255,0.80)] font-poppins text-[16px] sm:text-[20px] font-semibold leading-[33px] ">
                Info21@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <p className="text-[#22343D] font-poppins text-[16px] sm:text-[20px] font-normal ">
              Address:
            </p>
            <div>
              <p className="text-[rgba(255,255,255,0.80)] font-poppins text-[16px] sm:text-[20px] font-semibold leading-[33px] ">
                4 law castle agbole aro opp. fidelity bank omida, abeokuta.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-sm:rounded-[10px]  sm:rounded-r-[10px] max-sm:max-w-[451px] max-sm:h-[400px]">
          <iframe
            className="w-full h-full max-sm:rounded-[10px]  sm:rounded-r-[10px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.23607041825!2d75.67313746410663!3d29.15616578966612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704647687638!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <h2 className="text-[#22343D] text-center font-poppins text-[30px] mt-[46px] font-bold">
        Get In <span className="text-[#FF725E]">Touch</span>
      </h2>
      <div className="flex justify-center">
        <Lineicon />
      </div>
      <form action="" className="mt-[25px] w-full">
        <input
          type="text"
          placeholder="Name"
          className="outline-none w-full rounded-[5px] bg-[#F2F2F2] h-[80px] p-5 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="outline-none mt-[30px] w-full rounded-[5px] bg-[#F2F2F2] h-[80px] p-5 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none mt-[30px] w-full rounded-[5px] bg-[#F2F2F2] h-[80px] p-5 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px]"
        />
        <textarea
          type="chatbox"
          placeholder="Mesaage here..."
          className="outline-none mt-[30px] resize-none w-full rounded-[5px] bg-[#F2F2F2] h-[300px] p-5 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px]"
        />
        <div className="flex justify-end mt-[50px]">
          {" "}
          <button
            type="submit"
            className="rounded-[5px] w-[205px] h-[61px] hover:bg-transparent hover:border-black hover:text-black bg-[#22343D] border border-white text-white font-poppins text-[20px] font-medium leading-[21px] tracking-[0.4px]"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
