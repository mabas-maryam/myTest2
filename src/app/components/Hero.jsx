import Image from "next/image";
import HeroImage1 from "../../../public/assets/Hero3.svg";
import CustomButton from "./common/CustomButton";
import CustomInput from "./common/CustomInput";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="px-5 pt-4 pb-8 lg:container lg:max-w-[846px] lg:m-auto">
        <h1 className="font-medium text-[36px] text-center md:text-[40px] lg:text-[48px] lg:pt-11 lg:pb-6">
            Empowering Your Business with Cutting-Edge Solutions
        </h1>
        <p className="text-faded text-center text-[20px] lg:text-[18px] mt-6">
            Join us in transforming the way you operate for better efficiency and growth.
        </p>
      </div>
      <div className="text-faded px-5 pb-2 lg:container flex flex-col justify-center items-center gap-y-4 gap-x-6 lg:flex-row lg:gap-x-10">
          <CustomInput placeholder="Enter your email address" customClassName="h-[58px] lg:w-[407px] p-6" />
          <CustomButton text='Get Started Today' btnClassName="h-[58px] lg:w-[224px] p-6 bg-[#EF2A82]" />
      </div>
      <div className="w-full lg:container">
          <Image className="m-auto h-[171px] w-[320px] md:h-[297px] md:w-[640px] lg:w-[1200px] lg:h-[640px]" src={HeroImage1} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
