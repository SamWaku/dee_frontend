"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 w-full py-10 md:pb-4 pb-48 min-h-[160px] text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:text-left text-center">
            <h3 className="text-xl font-bold mb-4">Deelicious Does Flowers</h3>
            <p className="max-w-md">
              A brief description of your company and what you offer to your
              customers.
            </p>
            <div className=" text-center md:text-left  pt-2">
              <h4 className="text-lg font-semibold mb-3">Links</h4>
              <ul>
                <li className="mb-2">Home</li>
                <li className="mb-2">Service</li>
                <li className="mb-2">Ready to shop</li>
                <li className="mb-2">Pricing</li>
                <li className="mb-2">About Us</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <ul>
                  <li className="mb-2">info@example.com</li>
                  <li className="mb-2">+1 (555) 123-4567</li>
                  <li className="mb-2">123 Main St, City</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="map-container overflow-hidden rounded-md lg:w-full w-62">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1401.669469677897!2d28.338639228079625!3d-15.421418962797786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI1JzE2LjkiUyAyOMKwMjAnMjIuNyJF!5e0!3m2!1sen!2szm!4v1702801479368!5m2!1sen!2szm"
                  width="600"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Tech Ohns. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
