"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "@/atoms/SearchInput";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between gap-40 bg-[#f6efe2] px-4 md:px-10 py-0 w-full">
      {/* Logo */}
      <div className="flex-shrink-0 mr-8">
        <Image src="/Logo.png" alt="Logo" width={130} height={40} priority />
      </div>

      {/* Desktop Menu - changed to max-w-xl to prevent overcrowding */}
      <div className="flex-1 max-w-xl flex justify-between space-x-20">
        <Link href="/" className="hover:underline whitespace-nowrap">
          Home
        </Link>
        <Link href="/about" className="hover:underline whitespace-nowrap">
          Service
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
        <SearchInput />
      </div>
    </nav>
  );
};

export default NavBar;
