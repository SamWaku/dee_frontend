import React from "react";
import Image from "next/image";
import { Flower2, Sparkles, Star, MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className=" md:pt-20 pt-12 grid md:grid-cols-1 md:flex md:space-x-16 md:space-y-0 space-y-4">
      <div className=" text-[#524d41] space-y-6 md:space-y-10 relative md:pt-16 md:text-left text-center">
        <p className="  text-6xl md:text-7xl ">
          Perfect gifts <br />
          for you
        </p>
        <p>
          Whether you want to express your appreciation <br /> or send them to
          your favorite person, <br />
          we&apos;ve got your needs covered.{" "}
        </p>
        <div className=" grid grid-cols-1 gap-4 md:flex md:gap-4 ">
          <div className=" p-2 border md:p-2 bg-[#504d43] text-white font-light md:mx-0 mx-24">
            Get Yours Now
          </div>
          <div className="md:p-2 flex items-center md:space-x-2 md:pl-0 pl-36">
            <div>How it works</div>{" "}
            <div className=" ">
              <MoveUpRight width={15} className=" text-sm " />
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:flex xl:space-x-28 md:space-x-20 md:space-y-0 space-y-6">
        {/* Image */}
        <div className=" md:mx-0 mx-10">
          <Image
            className=" rounded-t-full"
            src="/assets/Hero.jpg" // Move logo to public folder
            alt="Image1"
            width={420}
            height={40}
            priority
          />
        </div>

        <div className=" md:pt-0 pt-8  md:absolute md:mx-0 mx-20 xl:right-60 md:right-32 md:top-60 space-y-6 ">
          <div className=" md:flex md:gap-2 text-left items-center">
            {/* Flower icon - hidden on small/medium screens, visible on large */}
            <div className="hidden lg:block border bg-white p-2 shadow-lg">
              <Flower2 className="text-[#524d41]" />
            </div>
            {/* Flower icon - visible only on small screens */}
            <div className=" mx-24 block md:hidden lg:hidden border bg-white p-3 shadow-lg">
              <Flower2 width={40} height={40} className="text-[#524d41]" />
            </div>
            <div className=" md:text-left text-center">
              <div className=" text-2xl font-light text-black">50+</div>
              <div>Kind of flowers</div>
            </div>
          </div>

          <div className=" md:flex md:gap-2 text-left items-center">
            <div className="hidden lg:block border bg-white p-2 shadow-lg">
              <Sparkles className=" font-semibold text-[#524d41]" />
            </div>
            <div className=" mx-24 block md:hidden lg:hidden border bg-white p-3 shadow-lg">
              <Sparkles
                width={40}
                height={40}
                className=" font-semibold text-[#524d41]"
              />
            </div>
            <div className=" md:text-left text-center">
              <div className=" text-2xl font-light text-black">150+</div>
              <div>Unique Styles</div>
            </div>
          </div>

          <div className=" grid grid-cols-1  md:flex gap-2 text-left items-center">
            <div className="hidden lg:block border bg-white p-2 shadow-lg">
              <Star className=" text-[#524d41]" />
            </div>
            <div className=" mx-24 block md:hidden lg:hidden border bg-white p-3 shadow-lg">
              <Star width={40} height={40} className=" text-[#524d41]" />
            </div>
            <div className=" md:text-left text-center">
              <div className=" text-2xl font-light text-black">600+</div>
              <div>Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
