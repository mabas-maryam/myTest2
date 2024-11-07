"use client";

const Video = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-white text-center p-20 pt-14 lg:px-0" id="video">
        <div className="pb-4">
            <p className="text-dark-gray text-[18px]">
                Empowering Your Business Success
            </p>
            <h2 className="text-black leading-2 text-[30px] font-semibold">
                Innovative Solutions for Modern Enterprises
            </h2>
        </div>
      <div className="w-1/2">
          <video className="w-full h-auto border border-gray-200 rounded-lg" controls>
              <source src="https://www.youtube.com/watch?v=Zq5fmkH0T78" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
};

export default Video;
