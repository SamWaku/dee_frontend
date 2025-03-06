"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(defaultQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const query = inputValue.trim();
    router.push(query ? `/?q=${query}` : "/");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="relative bg-white shadow-md rounded-full p-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 border-2 border-gray-300 px-3 py-1 rounded-full"
      >
        <Search className="text-[#514a3c]" size={20} />
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="w-32 bg-white outline-none text-gray-800"
        />
        <ShoppingBag className="text-[#514a3c]" size={20} />
      </motion.div>
    </div>
  );
};
