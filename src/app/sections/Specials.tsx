import { Sparkle } from "lucide-react";
import React from "react";

export default function Specials() {
  return (
    <div className=" min-h-40 md:mx-12 mx-10 py-10 space-y-10">
      <div className=" md:mx-[30rem] mx-[6rem] md:relative md:flex md:items-center text-center text-[#524d41] md:text-4xl lg:text-4xl uppercase md:font-semibold lg:font-semibold">
        <div className=" ">
          <Sparkle
            className=" items-end -rotate-45 md:absolute md:top-8 md:-left-3 left-60 -bottom-10 pr-0"
            width={15}
          />
        </div>
        <div className=" font-mono text-xl">Specials</div>
        <div>
          <Sparkle className=" md:absolute md:bottom-7" width={12} />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 md: gap-10">
        <div className=" grid grid-cols-1 gap-6">
          <div className="  rounded-r-full bg-white md:h-40 h-60"></div>
          <div className="  rounded-l-full bg-white md:h-40 h-60"></div>
        </div>
        <div className=" md:grid">
          <div className="  bg-white rounded-t-full md:h-full h-60"></div>
        </div>
        <div className=" grid grid-cols-1 gap-6 md:w-80">
          <div className="  rounded-l-full bg-white md:h-40 h-60"></div>
          <div className="  rounded-r-full bg-white md:h-40 h-60"></div>
        </div>
      </div>
    </div>
  );
}
