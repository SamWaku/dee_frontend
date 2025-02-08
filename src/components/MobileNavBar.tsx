"use client";

import Link from "next/link";
import React from "react";

export default function MobileNavBar() {
  return (
    <div className="flex flex-col w-full bg-[#f6efe2] shadow-lg border-t">
      <Link
        href="/"
        className="block p-4 text-[#514a3c] hover:bg-[#514a3c] hover:text-[#f6efe2] transition-colors"
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
  );
}
