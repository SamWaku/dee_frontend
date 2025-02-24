import { Sparkle } from "lucide-react";
import React from "react";

export default function Specials() {
  return (
    <div className="   md:mx-12 md:py-10 md:space-y-10">
      <div className=" md:mx-[30rem] relative flex items-center text-center text-[#524d41] md:text-4xl lg:text-4xl uppercase md:font-semibold lg:font-semibold">
        <div>
          <Sparkle className=" -rotate-45 absolute top-8 -left-3" width={15} />
        </div>
        <div>Specials</div>
        <div>
          <Sparkle className=" absolute bottom-7" width={12} />
        </div>
      </div>
    </div>
  );
}
