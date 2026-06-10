"use client";
import { useState, useRef } from 'react';
import Car360Viewer from "./Car360Viewer";
import CarDetailModal from "./CarDetailModal";

const allCars = [
  { name: "Honda Amaze", type: "Automatic • Sedan", seats: 5, doors: 4, bags: 3, price: "TBD", oldPrice: "TBD", folder: "amaze", color: "87151c" },
  { name: "Kia Carens", type: "Automatic • MUV", seats: 7, doors: 5, bags: 4, price: "TBD", oldPrice: "TBD", folder: "carens", color: "0b0a0a" },
  { name: "Hyundai Creta", type: "Automatic • SUV", seats: 5, doors: 5, bags: 3, price: "TBD", oldPrice: "TBD", folder: "creta", color: "0c0a0d" },
  { name: "Toyota Innova Hycross", type: "Automatic • MUV", seats: 7, doors: 5, bags: 4, price: "TBD", oldPrice: "TBD", folder: "innova-hycross", color: "6b6c70" },
  { name: "Mahindra Scorpio", type: "Automatic • SUV", seats: 7, doors: 5, bags: 3, price: "TBD", oldPrice: "TBD", folder: "scorpio", color: "ad0b0b" },
  { name: "Mahindra Scorpio-N", type: "Automatic • SUV", seats: 7, doors: 5, bags: 4, price: "TBD", oldPrice: "TBD", folder: "scorpio-n", color: "393939" },
  { name: "Kia Seltos", type: "Automatic • SUV", seats: 5, doors: 5, bags: 3, price: "TBD", oldPrice: "TBD", folder: "seltos", color: "f4f4f4" },
  { name: "Mahindra Thar", type: "Automatic • SUV", seats: 4, doors: 3, bags: 2, price: "TBD", oldPrice: "TBD", folder: "thar", color: "65686f" },
  { name: "Hyundai Verna", type: "Automatic • Sedan", seats: 5, doors: 4, bags: 3, price: "TBD", oldPrice: "TBD", folder: "verna", color: "464c4a" },
  { name: "MG Windsor EV", type: "Automatic • EV", seats: 5, doors: 5, bags: 3, price: "TBD", oldPrice: "TBD", folder: "windsor-ev", color: "567383" }
];

export default function PopularCars() {
  const [selectedCar, setSelectedCar] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 w-full relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-4xl font-bold text-text-dark mb-3 flex items-center justify-center md:justify-start gap-3">
              Popular Rental Cars
            </h2>
            <p className="font-body text-text-gray text-lg">
              Explore our most booked and top-rated rental cars. Scroll to see all models.
            </p>
          </div>
          
          {/* Scroll Arrows */}
          <div className="flex items-center gap-3 hidden md:flex">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="w-full relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Spacer for proper alignment on the left to match max-width */}
          <div className="hidden xl:block min-w-[calc((100vw-1280px)/2-24px)]" />

          {allCars.map((car, idx) => (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[300px] sm:w-[320px] bg-[#FAF8F5] rounded-[24px] p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl duration-300 border border-transparent hover:border-gray-100 cursor-pointer"
              onClick={() => setSelectedCar(car)}
            >
              {/* 360 Viewer Area */}
              <div className="-mx-3 -mt-2 mb-3 bg-white/50 rounded-2xl overflow-hidden pointer-events-none">
                {/* autoRotate is passed down to Car360Viewer which now lazy loads */}
                <Car360Viewer carFolder={car.folder} colorFolder={car.color} />
              </div>

              <h3 className="font-heading text-xl font-bold text-text-dark mb-1 px-1">{car.name}</h3>
              <p className="font-body text-text-gray text-[13px] mb-5 px-1">{car.type}</p>

              {/* Features (Seats, Doors, Bags) */}
              <div className="flex justify-between mb-6 border-t border-b border-gray-200/60 py-3 px-2">
                <div className="flex flex-col items-center text-center">
                  <svg className="w-4 h-4 text-gray-500 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <span className="text-[11px] font-semibold text-gray-500">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-4 h-4 text-gray-500 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                  <span className="text-[11px] font-semibold text-gray-500">{car.doors} Doors</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-4 h-4 text-gray-500 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-[11px] font-semibold text-gray-500">{car.bags} Bags</span>
                </div>
              </div>

              {/* Price & View Button */}
              <div className="mt-auto flex items-center justify-between px-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-2xl font-bold text-text-dark leading-none">{car.price}</span>
                  <span className="text-[#CC1B1B] text-xs font-bold">/day</span>
                </div>
                <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm">
                  View 360
                </button>
              </div>
            </div>
          ))}

          {/* Spacer for proper alignment on the right */}
          <div className="min-w-6" />
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCar && (
        <CarDetailModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </section>
  );
}
