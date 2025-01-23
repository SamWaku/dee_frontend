import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    path: string;
    label: string;
    icon: React.ElementType;
  }>;
  onLogout: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navItems,
  onLogout,
}) => {
  const path = useLocation().pathname;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="md:hidden">
          <motion.div
            className="fixed inset-0 flex z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed inset-0 bg-gray-600 bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
              onClick={onClose}
            ></motion.div>
            <motion.div
              className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={onClose}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <motion.div
                  className="flex-shrink-0 flex items-center px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <span className="text-white text-2xl font-semibold">
                    Logo
                  </span>
                </motion.div>
                <nav className="mt-5 px-2 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                          path === item.path
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                        onClick={onClose}
                      >
                        <item.icon
                          className={`mr-4 flex-shrink-0 h-6 w-6 ${
                            path === item.path
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                          aria-hidden="true"
                        />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              <motion.div
                className="flex-shrink-0 flex border-t border-gray-700 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="flex-shrink-0 w-full group block"
                >
                  <div className="flex items-center">
                    <div>
                      <LogOut
                        className="inline-block h-9 w-9 rounded-full text-gray-400 group-hover:text-gray-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-300 group-hover:text-white">
                        Logout
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            </motion.div>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
