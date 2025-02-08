"use client";

import Link from "next/link";

type NavBarProps = {
  name: string | null; // Define the type for the name prop
};

const NavBar = () => {
  return (
    <div className="xl:px-10 lg:px-10 fixed w-full bg-[#f6efe2]   justify-between z-10">
      <nav className="flex w-full py-4 justify-between">
        {/* Desktop Menu */}
        <div className="text-[#514a3c] hidden md:flex space-x-6">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
