import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import logo from "../assets/logo.png";

interface SidebarProps {
  navItems: Array<{
    path: string;
    label: string;
    icon: React.ElementType;
  }>;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, onLogout }) => {
  const path = useLocation().pathname;
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-900">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex w-full items-start px-2">
              <img
                // src={logo}
                alt="Logo"
                className="w-40 h-9 object-center object-contain"
              />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    path === item.path
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      path === item.path
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
            <button
              onClick={onLogout}
              className="flex-shrink-0 w-full group block"
            >
              <div className="flex items-center">
                <div>
                  <LogOut
                    className="inline-block h-6 w-6 rounded-full text-gray-400 group-hover:text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white">
                    Logout
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
