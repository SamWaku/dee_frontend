"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 w-full py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="max-w-md">
              A brief description of your company and what you offer to your
              customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Links</h4>
              <ul>
                <li className="mb-2">Home</li>
                <li className="mb-2">Service</li>
                <li className="mb-2">Ready to shop</li>
                <li className="mb-2">Pricing</li>
                <li className="mb-2">About Us</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <ul>
                <li className="mb-2">info@example.com</li>
                <li className="mb-2">+1 (555) 123-4567</li>
                <li className="mb-2">123 Main St, City</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
