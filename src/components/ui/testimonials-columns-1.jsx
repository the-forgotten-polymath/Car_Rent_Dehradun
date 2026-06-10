"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={`${props.className || ''} w-[320px] shrink-0`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, photoUrl, name, time, rating }, i) => (
                <div className="p-8 rounded-3xl border border-gray-100 shadow-sm shadow-[#CC1B1B]/5 bg-white flex flex-col gap-4" key={i}>
                  <div className="flex items-center gap-3">
                    {photoUrl ? (
                      <img
                        width={48}
                        height={48}
                        src={photoUrl}
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover bg-gray-100"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex shrink-0 items-center justify-center text-gray-500 font-bold text-xl">
                        {name.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-heading font-bold tracking-tight text-text-dark leading-5">{name}</div>
                      <div className="leading-5 text-text-gray opacity-80 tracking-tight text-xs">{time || 'Customer'}</div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(rating || 5)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <div className="font-body text-text-gray text-[15px] leading-relaxed line-clamp-6">{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
