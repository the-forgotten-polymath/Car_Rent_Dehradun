"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Cars', 'How It Works', 'Testimonials', 'Contact Us'];

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-10 h-10 relative flex items-center justify-center bg-white rounded-full overflow-hidden p-1 border border-gray-100">
            <img src="/logo.png" alt="Car Rent Dehradun Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="font-heading font-bold text-[20px] text-[#1A1A1A] leading-tight flex items-start tracking-tight">
              Car Rent Dehradun
              <span className="text-[10px] ml-1 mt-0.5">&reg;</span>
            </span>
            <span className="text-[12px] text-[#6B6B6B] font-body mt-0.5">
              Premium Car Rental Service
            </span>
          </div>
          <div className="flex flex-col sm:hidden">
             <span className="font-heading font-bold text-[16px] text-[#1A1A1A] leading-tight">
              Car Rent Dehradun
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-[14px] font-body font-medium text-[#6B6B6B] hover:text-[#C9540A] transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#1A1A1A] p-2 -mr-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg absolute w-full left-0">
          {navLinks.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              onClick={() => setIsOpen(false)}
              className="block text-[15px] font-body font-medium text-[#1A1A1A] hover:text-[#C9540A] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
