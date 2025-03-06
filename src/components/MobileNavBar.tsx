"use client";

import { SearchInput } from "@/atoms/SearchInput";
import Link from "next/link";
import React from "react";

export default function MobileNavBar() {
  return (
    <div className="fixed flex flex-col h-72 w-full bg-[#f6efe2] shadow-lg border-t p-4">
      <div>
        {" "}
        <Link
          href="/"
          className="block p-4 text-[#514a3c] hover:bg-[#514a3c] hover:text-[#ba4040] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block p-4 text-[#514a3c] hover:bg-[#514a3c] hover:text-[#f6efe2] transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block p-4 text-[#514a3c] hover:bg-[#514a3c] hover:text-[#f6efe2] transition-colors"
        >
          Contact
        </Link>
      </div>
      {/* Search Input */}
      <div className="">
        <SearchInput />
      </div>
    </div>
  );
}
