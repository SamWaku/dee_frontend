import { Sparkle } from "lucide-react";
import React from "react";

export default function Specials() {
  return (
    <div className="   md:mx-12 md:py-10 md:space-y-10">
      <div className=" md:mx-[30rem] md:relative md:flex md:items-center text-center text-[#524d41] md:text-4xl lg:text-4xl uppercase md:font-semibold lg:font-semibold">
        <div>
          <Sparkle
            className=" md:-rotate-45 md:absolute md:top-8 md:-left-3"
            width={15}
          />
        </div>
        <div>Specials</div>
        <div>
          <Sparkle className=" md:absolute md:bottom-7" width={12} />
        </div>
      </div>
      <div className=" md:grid md:grid-cols-3">
        <div className=" md:grid md:grid-cols-1 md:gap-6">
          <div className="  rounded-r-full bg-white md:h-40"></div>
          <div className="  rounded-l-full bg-white md:h-40"></div>
        </div>
        <div className=" md:gri">
          <div className="  bg-white rounded-t-full md:h-full"></div>
        </div>
        <div className=" md:grid md:grid-cols-1 md:gap-6 md:w-80">
          <div className="  rounded-l-full bg-white md:h-40"></div>
          <div className="  rounded-r-full bg-white md:h-40"></div>
        </div>
      </div>
    </div>
  );
}
