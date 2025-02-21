"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "@/atoms/Search";

type NavBarProps = {
  name: string | null; // Define the type for the name prop
};

const NavBar = () => {
  return (
    <div className="xl:px-10 lg:px-10 fixed w-full bg-[#f6efe2]   justify-between z-10">
      <nav className="flex w-full py-10 justify-between">
        {/* Desktop Menu */}
        <div className="text-[#514a3c] hidden md:flex space-x-60">
          <div>
            <Image
              src="/Logo.png" // Move logo to public folder
              alt="Logo"
              width={130}
              height={40}
              priority
            />
          </div>
          <div className=" md:flex md:gap-12 md:pt-6">
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
          <div className="md:pt-6">
            <SearchInput />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
