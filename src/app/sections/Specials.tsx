import React from "react";

export default function Specials() {
  return (
    <div className=" flex-1  mx-auto container py-6">
      <div className=" text-[#524d41] md:grid md:grid-cols-2">
        <div className=" md:space-y-2">
          <p className=" uppercase">Type of Bouquet</p>
          <p className=" md:text-4xl md:font-semibold">
            Find your perfect <br />
            flower bouquet
          </p>
        </div>
        <div className=" md:grid md:grid-cols-1">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              libero debitis, harum eos ad dolor dolores eum dolore nemo saepe.
            </p>
          </div>
          <div>
            <p className=" border md:p-2 bg-[#504d43] text-white font-light">
              Show All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
