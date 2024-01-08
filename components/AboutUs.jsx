import Image from "next/image";
import { Lineicon } from "./common/Icon";
import HeaderBanner from "./common/HeaderBanner";

const AboutUs = () => {
  return (
    <>
      {/* banner */}
      <HeaderBanner heading="About Us" />

      <div className="max-w-[1052px] w-full mx-auto px-4 lg:px-3 py-[50px]">
        <div>
          <p
            className="text-[#22343D]  leading-[25px] sm:leading-[30px]
           md:leading-[40px] text-center font-poppins text-[16px] sm:text-[18px] 
           md:text-[20px] not-italic font-normal uppercase"
          >
            One of the most important, yet underrated, pages on an entire
            website is the About Us page, particularly for small- and
            medium-sized business owners (SMBs). The About Us page is one of
            your best chances to create a meaningful connection with a site
            visitor that builds confidence in the potential customer and lays
            the foundation of a solid business relationship. In this blog post,
            we&apos;ll outline what an About Us page is, a few of the most
            important elements of an About Us page, show off some awesome About
            Us page examples, and highlight a few of the beautiful About Us page
            templates that are available to Duda customers and partners.
          </p>
        </div>
      </div>

      <div className="max-w-[1052px] w-full mx-auto px-4 lg:px-3">
        <div className="flex max-lg:flex-col gap-[50px] ">
          <div className="mx-auto max-w-[300px] md:max-w-[400px] lg:max-w-[501px] w-full">
            <Image src="/img/Boy-img.png" width={501} height={499} alt="boy" />
          </div>

          <div className="mx-auto">
            <div className="flex flex-col  justify-center tems-center">
              <p className="text-[#22343D] font-poppins text-[30px] not-italic font-semibold uppercase">
                Our <span className="text-[#FF725E]">Mission</span>
              </p>

              <Lineicon />
            </div>

            <div className="max-w-[501px] w-full mx-auto pt-[22px]">
              <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal">
                Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod temp incididunt ut labore dol magna aliqua.
                Ut enim ad minim Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed eiusmod temp incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                amet, consectetur adipng elit, sed do eiusmod temp incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1052px] py-[50px] w-full mx-auto px-4 lg:px-3">
        <div className="flex max-lg:flex-col-reverse gap-[50px] ">
          <div className="mx-auto">
            <div className="flex flex-col  justify-center tems-center">
              <p className="text-[#22343D] font-poppins text-[30px] not-italic font-semibold uppercase">
                Our <span className="text-[#FF725E]">Vision</span>
              </p>

              <Lineicon />
            </div>

            <div className="max-w-[501px] w-full mx-auto pt-[22px]">
              <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic font-normal">
                Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad
                minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod temp incididunt ut labore dol magna aliqua.
                Ut enim ad minim Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed eiusmod temp incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                amet, consectetur adipng elit, sed do eiusmod temp incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-[300px] md:max-w-[400px] lg:max-w-[501px] w-full">
            <Image
              src="/img/Teaching-img.png"
              width={501}
              height={499}
              alt="teacher"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
