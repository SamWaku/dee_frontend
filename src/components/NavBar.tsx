"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "@/atoms/SearchInput";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between items-center bg-[#f6efe2] px-6 md:px-12">
      {/* Logo */}
      <Image src="/Logo.png" alt="Logo" width={130} height={40} priority />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          Service
        </Link>
        <Link href="/contact" className="hover:underline">
          Ready to shop
        </Link>
        <Link href="/contact" className="hover:underline">
          Pricing
        </Link>
        <Link href="/contact" className="hover:underline">
          About Us
        </Link>
      </div>

      {/* Search Input */}
      <div className="hidden md:block">
        <SearchInput />
      </div>
    </nav>
  );
};

export default NavBar;
