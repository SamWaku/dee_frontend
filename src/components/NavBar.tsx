"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "@/atoms/SearchInput";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between xl:gap-40 md:gap-32 bg-[#f6efe2] px-4 md:px-10 py-0 w-full">
      {/* Logo */}
      <div className="flex-shrink-0 mr-8">
        <Image src="/Logo.png" alt="Logo" width={130} height={40} priority />
      </div>

      {/* Desktop Menu - changed to max-w-xl to prevent overcrowding */}
      <div className="flex-1 max-w-xl flex justify-between xl:space-x-20 md:space-x-12">
        <Link href="/" className="hover:underline whitespace-nowrap">
          Home
        </Link>
        <Link href="/about" className="hover:underline whitespace-nowrap">
          service
        </Link>
        <Link href="/contact" className="hover:underline whitespace-nowrap">
          Ready to shop
        </Link>
        <Link href="/contact" className="hover:underline whitespace-nowrap">
          Pricing
        </Link>
        <Link href="/contact" className="hover:underline whitespace-nowrap">
          About Us
        </Link>
      </div>

      {/* Search Input - added ml-auto to push it to the right */}
      <div className="hidden md:block ">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
    </nav>
  );
};

export default NavBar;
