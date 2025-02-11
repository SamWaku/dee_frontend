import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Services() {
  return (
    <div className="   md:mx-12 md:py-10 md:space-y-10">
      <div className=" text-[#524d41] md:grid md:grid-cols-2">
        <div className=" md:space-y-2">
          <p className=" uppercase">Type of Bouquet</p>
          <p className=" md:text-4xl md:font-semibold">
            Find your perfect <br />
            flower bouquet
          </p>
        </div>
        <div className="md:flex-row md:space-y-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              libero debitis, harum eos ad dolor dolores eum dolore nemo saepe.
            </p>
          </div>
          <div className=" md:grid md:grid-cols-2">
            <p className=" text-center items-center border md:p-2 bg-[#504d43] text-white font-light">
              Show All
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" flex md:grid md:grid-cols-3 md:items-center">
        <div className=" relative ">
          <div className=" -rotate-45 absolute md:top">
            <p>Lillies </p>
          </div>
          <div>
            {" "}
            <Image
              className=" rounded-t-full"
              src="/assets/edited/Bouqeut1.png" // Move logo to public folder
              alt="Bouquet"
              width={320}
              height={40}
              priority
            />
          </div>
          <div className=" md:pt-4 md:absolute md:left-28 md:grid md:grid-cols-2 md:gap-2">
            <div>
              <p className=" uppercase">Shop Now </p>
            </div>
            <div>
              <MoveRight width={15} />
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className=" -rotate-45 absolute md:top">
            <p>Lillies </p>
          </div>
          <div>
            <Image
              className=" rounded-t-full"
              src="/assets/edited/Bouqeut2.png" // Move logo to public folder
              alt="Bouquet"
              width={320}
              height={40}
              priority
            />
          </div>
          <div className=" md:pt-4 md:absolute md:left-28 md:grid md:grid-cols-2 md:gap-2">
            <div>
              <p className=" uppercase">Shop Now </p>
            </div>
            <div>
              <MoveRight width={15} />
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className=" -rotate-45 absolute md:top">
            <p>Lillies </p>
          </div>
          <div>
            <Image
              className=" rounded-t-full"
              src="/assets/edited/Bouqeut3.png" // Move logo to public folder
              alt="Bouquet"
              width={320}
              height={40}
              priority
            />
          </div>
          <div className=" md:pt-4 md:absolute md:left-28 md:grid md:grid-cols-2 md:gap-2">
            <div>
              <p className=" uppercase">Shop Now </p>
            </div>
            <div>
              <MoveRight width={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
