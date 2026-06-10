"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-gray-100 bg-white shadow-sm p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Cars</Tab>
      <Tab setPosition={setPosition}>How It Works</Tab>
      <Tab setPosition={setPosition}>Testimonials</Tab>
      <Tab setPosition={setPosition}>Contact Us</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-semibold text-white mix-blend-difference md:px-5 md:py-2 transition-colors"
    >
      <Link href={`#${children.toLowerCase().replace(/ /g, '-')}`}>
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-black md:h-[36px]"
    />
  );
};

export default NavHeader;
