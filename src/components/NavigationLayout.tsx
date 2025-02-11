"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <nav className="bg-[#f6efe2] text-[#514a3c] p-4 ">
        <div className=" mx-auto flex justify-between items-center md:py-8">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ fontSize: "24px" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <NavBar />
        </div>

        {/* Mobile menu positioned fixed to the top with high z-index */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed top-12 left-0 right-0 z-50 bg-[#f6efe2] shadow-lg border-t"
          >
            <MobileNavBar />
          </div>
        )}
      </nav>

      <main className=" py-8">{children}</main>
    </div>
  );
}
