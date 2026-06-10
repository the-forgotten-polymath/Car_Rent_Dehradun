"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [location, setLocation] = useState('');
  const [liveLocationUrl, setLiveLocationUrl] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const DEHRADUN_LOCATIONS = [
    "Jolly Grant Airport",
    "ISBT Dehradun",
    "Clock Tower",
    "Rajpur Road",
    "Clement Town",
    "Sahastradhara",
    "Prem Nagar",
    "Mussoorie Bus Stand",
    "Railway Station Dehradun"
  ];

  const filteredLocations = DEHRADUN_LOCATIONS.filter(loc => 
    loc.toLowerCase().includes(location.toLowerCase())
  );

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      setLocation("Fetching location...");
      setShowSuggestions(false);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://maps.google.com/?q=${latitude},${longitude}`;
          setLiveLocationUrl(url);
          setLocation("Current Location (Live)");
        },
        (error) => {
          console.error("Error fetching location", error);
          setLocation("");
          alert("Unable to fetch location. Please ensure location permissions are granted.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const handleBookNow = () => {
    // Construct WhatsApp message
    const pickupDisplay = liveLocationUrl ? `${location} \n📍 ${liveLocationUrl}` : (location || 'Not specified');
    const message = `Hello! I would like to book a car.
*Pickup Location:* ${pickupDisplay}
*Date:* ${date || 'Not specified'}
*Time:* ${time || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918439777772?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-white min-h-screen px-6 flex flex-col items-center justify-start">
      
      {/* Full-screen background image stretched to cover and anchored to the bottom */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_background.png" 
          alt="Car Rent Dehradun Hero Background" 
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto text-center flex flex-col items-center pt-24 md:pt-32 px-4 pb-56 md:pb-40">
        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-[64px] lg:text-[80px] font-bold text-text-dark leading-[1.1] mb-4 md:mb-6 tracking-tight drop-shadow-sm w-full">
          Your Next Trip <br />
          Starts with the Right Car
        </h1>
        
        {/* Tagline */}
        <p className="text-text-gray text-base sm:text-lg md:text-xl mb-8 md:mb-10 font-semibold drop-shadow-sm text-center mx-auto">
          Affordable Cars, Anytime You Need
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full px-2 sm:px-4">
          <a href="https://wa.me/918439777772" target="_blank" rel="noopener noreferrer" className="w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white rounded-full font-body text-[14px] sm:text-[15px] font-semibold transition-all hover:bg-primary-dark shadow-md hover:shadow-lg flex justify-center items-center gap-2 group">
            Book Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <button className="w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-white/90 backdrop-blur-sm border border-border rounded-full font-body text-[14px] sm:text-[15px] font-semibold text-text-dark transition-all hover:bg-white hover:shadow-md flex justify-center items-center gap-2 sm:gap-3">
            {/* Mock Avatars */}
            <div className="flex -space-x-2 hidden sm:flex">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-200 border border-white"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-200 border border-white"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-200 border border-white"></div>
            </div>
            Explore Drives
          </button>
        </div>
      </div>

      {/* Booking Form Bar (Floating at the bottom edge) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-5xl mx-auto bg-white rounded-3xl md:rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col md:flex-row items-center justify-between z-30">
        
        {/* Location Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto md:border-r border-b md:border-b-0 border-gray-100 relative">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-[#D32F2F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <input 
            type="text" 
            placeholder="Enter Pickup Location" 
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setLiveLocationUrl('');
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full ml-3 text-[14px] md:text-[15px] font-medium text-text-dark placeholder-gray-400 outline-none bg-transparent"
          />
          
          {/* Auto-suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 max-h-60 overflow-y-auto">
              
              {/* Current Location Option */}
              <div 
                onClick={handleUseCurrentLocation}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3m10-10h-3M5 12H2m10-7a7 7 0 100 14 7 7 0 000-14z" />
                  </svg>
                </div>
                <span className="text-[14px] text-blue-600 font-semibold tracking-tight">Use Current Location</span>
              </div>

              {/* Static Auto-Suggestions */}
              {filteredLocations.map((loc, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setLocation(loc);
                    setLiveLocationUrl('');
                    setShowSuggestions(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-[14px] text-text-dark font-medium">{loc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto md:border-r border-b md:border-b-0 border-gray-100">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-[#D32F2F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full ml-3 text-[14px] md:text-[15px] font-medium text-text-dark outline-none bg-transparent cursor-pointer"
          />
        </div>

        {/* Time Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto justify-between md:justify-start border-b md:border-b-0 border-gray-100">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <input 
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full ml-3 text-[14px] md:text-[15px] font-medium text-text-dark outline-none bg-transparent cursor-pointer"
          />
        </div>

        {/* Book Now Button */}
        <button 
          onClick={handleBookNow}
          className="w-full md:w-auto bg-[#CC1B1B] hover:bg-[#B71C1C] text-white rounded-full px-8 py-3.5 flex items-center justify-center gap-2 font-semibold transition-all mt-4 md:mt-0 shadow-md hover:shadow-lg shrink-0"
        >
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          Book Now
        </button>
      </div>
    </section>
  );
}
