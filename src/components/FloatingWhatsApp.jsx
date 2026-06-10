"use client";
import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918439777772"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8 fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.3c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7.1c-18.4-29.6-28.1-63.7-28.1-99 0-103.6 84.3-187.9 188-187.9 50.2 0 97.4 19.5 132.9 55 35.5 35.5 55 82.7 55 132.9 0 103.7-84.3 187.9-188 187.9zm103.4-141.5c-5.7-2.8-33.6-16.6-38.8-18.5-5.2-1.9-9-.2-12.8 5.4-3.8 5.6-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.7-28.2-16.9-15.1-28.4-33.8-31.7-39.5-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.5-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-10 1.4-15.1 7.1-5.2 5.7-20 19.4-20 47.4 0 28 20.4 55.1 23.2 58.9 2.8 3.8 40.2 61.4 97.3 86.1 13.6 5.9 24.2 9.4 32.5 12 13.7 4.3 26.2 3.7 36 2.2 11-1.7 33.6-13.7 38.3-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.3-5.2-3.8-10.9-6.6z" />
      </svg>
    </a>
  );
}
