"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import MobileNavBar from "@/components/MobileNavBar";
import Image from "next/image";

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
    <div className="">
      <nav className="bg-[#f6efe2] text-[#514a3c] md:py-4">
        <div className=" z-50 fixed grid grid-cols-2 md:flex md:justify-between items-center md:py-8">
          <div className=" md:hidden z-50">
            <Image
              src="/Logo.png" // Move logo to public folder
              alt="Logo"
              width={130}
              height={100}
              priority
            />
          </div>

          {/* Mobile Menu Button */}
          <div>
            <button
              className="md:hidden z-50 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{ fontSize: "24px" }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <NavBar />
        </div>

        {/* Mobile menu positioned fixed to the top with high z-index */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed top-20 left-0 right-0 z-50 bg-[#f6efe2] shadow-lg border-t"
          >
            <MobileNavBar />
          </div>
        )}
      </nav>

      <main className=" py-8">{children}</main>
    </div>
  );
}
