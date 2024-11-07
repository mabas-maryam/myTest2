import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Star from "../../../public/assets/star.svg";
import CustomButton from "./common/CustomButton";

const Features = () => {
  return (
    <div className="bg-white p-[64px]" id="features">
      <div className="items-center mb-14 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h1 className="text-info font-medium text-[24px] lg:max-w-[572px] lg:text-[42px]  mb-6">
            Elevate Your Business with Our Expertise          </h1>
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            Discover innovative solutions tailored to your business needs. Partner with us and unlock your company's potential for growth and success.
          </p>
          <div className="text-faded flex flex-col justify-start items-center gap-4 md:flex-row">
            <CustomButton text='Explore Our Services' btnClassName="bg-transparent text-black lg:w-[215]" />
            <CustomButton text='Join Us Today' btnClassName="bg-[#EF2A82] lg:w-[215]" />
          </div>

          <div className="grid grid-cols-2 text-black gap-2 py-4">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold">2.5k+</div>
              <p className="text-dark-gray">Over 1,000 satisfied clients worldwide</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <div className="text-lg font-semibold">
                  5.0
                </div>
                <Image className="w-5" src={Star} alt="Star" />
              </div>
              <p>Rated 4.9 out of 5 by users</p>
            </div>
          </div>
        </div>
        <div>
          <Image className="m-auto hidden md:flex md:w-[656px] lg:w-[504px]" src={Feature1} alt="Feature1" />
        </div>
      </div>
    </div>
  );
};

export default Features;
