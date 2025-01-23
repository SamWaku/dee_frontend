"use client";
import type { Metadata } from "next";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { userAtom } from "@/atoms/atoms";
import { useResetAtom } from "jotai/utils";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/SideBar";
import MobileSidebar from "@/components/mobile-sidebar";
import { Home, Users, FileText, Rocket, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "deelicious_does_flowers",
//   description: "Flowers shop",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const userData = useAtomValue(userAtom);
  const resetUser = useResetAtom(userAtom);

  // useEffect(() => {
  //   if (userData === null && !!Cookies.get("token")) {
  //     navigate("/login");
  //   }
  // }, [navigate, userData]);

  const navItems = [
    { path: "/specials", label: "Overview", icon: Home },
    { path: "/flowers", label: "User Management", icon: Users },
    { path: "/", label: "Claims", icon: FileText },
  ];

  const handleLogout = () => {
    const c = window.confirm("Are you sure you want to logout?");
    if (c) {
      Cookies.remove("token");
      resetUser();
      navigate("/login");
      toast.success("Successfully logged out!");
      return;
    }
    return;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar navItems={navItems} onLogout={handleLogout} />

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <MobileSidebar
            isOpen={isMobileSidebarOpen}
            onClose={() => setIsMobileSidebarOpen(false)}
            navItems={navItems}
            onLogout={handleLogout}
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex items-center">
                <span className="text-gray-700">
                  {userData?.fullname || "Guest"}
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="py-2">
            <div className="max-w-7xl mx-auto px-4">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
