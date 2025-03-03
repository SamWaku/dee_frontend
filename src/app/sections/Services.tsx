import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Services() {
  return (
    <div className=" min-h-screen md:mx-12 mx-10 py-10  space-y-10">
      <div className=" text-[#524d41] grid md:grid-cols-2 grid-cols-1 md:text-left text-center">
        <div className=" space-y-6 md:space-y-2">
          <p className=" uppercase md:text-lg text-2xl">Type of Bouquet</p>
          <p className=" text-4xl font-semibold">
            Find your perfect <br />
            flower bouquet
          </p>
        </div>
        <div className="md:flex-row space-y-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              libero debitis, harum eos ad dolor dolores eum dolore nemo saepe.
            </p>
          </div>
          <div className=" md:mx-0 mx-12 grid md:grid-cols-2">
            <p className=" text-center items-center border md:p-2 bg-[#504d43] text-white font-light">
              Show All
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" md:space-y-0 space-y-12 grid grid-cols-1 md:grid-cols-3 md:items-center">
        <div className=" relative ">
          <div className=" -rotate-12 absolute md:top">
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
          <div className="  md:pt-4 absolute left-24 md:left-28 flex md:grid md:grid-cols-2 gap-2">
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
          <div className="  md:pt-4 absolute left-24 md:left-28 flex md:grid md:grid-cols-2 gap-2">
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
          <div className="  md:pt-4 absolute left-24 md:left-28 flex md:grid md:grid-cols-2 gap-2">
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
