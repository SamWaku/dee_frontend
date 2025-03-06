"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import MobileNavBar from "@/components/MobileNavBar";

interface NavigationLayoutProps {
  children: ReactNode;
}

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-[#f6efe2] text-[#514a3c] md:py-4 relative">
        <div className="z-50 fixed top-0 left-0 right-0 flex justify-between items-center md:py-0 py-4 px-6 md:px-12 bg-[#f6efe2] shadow-md">
          {/* Logo */}
          <div className="md:hidden">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <NavBar />
          </div>
        </div>

        {/* Mobile Menu - Positioned correctly with full width */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="  fixed top-16 left-0 right-0 z-50 bg-[#f6efe2] shadow-lg border-t p-4"
          >
            <div className=" ">
              <MobileNavBar />
            </div>
          </div>
        )}
      </nav>

      <main className="py-8">{children}</main>
    </div>
  );
}
