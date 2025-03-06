import { Sparkle } from "lucide-react";
import React from "react";

export default function Specials() {
  return (
    <div className=" min-h-40 md:mx-12 mx-10 py-10 space-y-10">
      <div className=" md:mx-[30rem] mx-[6rem] md:relative md:flex md:items-center text-center text-[#524d41] md:text-4xl lg:text-4xl uppercase md:font-semibold lg:font-semibold">
        <div className=" ">
          <Sparkle
            className=" items-end -rotate-45 absolute md:top-8 md:-left-3 left-60 top-10 pr-0"
            width={15}
          />
        </div>
        <div className=" font-mono text-xl">Specials</div>
        <div>
          <Sparkle
            className=" absolute md:bottom-7 md:left-0 right-60"
            width={12}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-8">
        {/* <div className=" grid grid-cols-1 gap-6 mx-20"></div> */}
        <div className=" md:grid">
          <div className="  ">
            <video
              className="  md:w-80 h-full rounded-lg"
              autoPlay
              muted

              // poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/video3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className=" ">
          <div className="  ">
            <video
              className="  md:w-80 h-full rounded-lg"
              autoPlay
              muted

              // poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/video4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="  ">
          <video
            className=" md:w-80 h-full rounded-lg"
            autoPlay
            muted

            // poster="/images/video-thumbnail.jpg"
          >
            <source src="/videos/video5.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" ">
            <video
              className=" bg-white w-80 h-full rounded-t-full"
              autoPlay
              muted

              // poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div> */
}
{
  /* <div className="  0">
            <video
              className=" bg-white w-full h-full rounded-t-full"
              autoPlay
              muted

              // poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
          </div> */
}
