import Image from 'next/image';

export default function Hero() {
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
      <div className="relative z-10 w-full max-w-[1280px] mx-auto text-center flex flex-col items-center mt-24 sm:mt-32 md:mt-48 px-4 pb-32">
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
          <button className="w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white rounded-full font-body text-[14px] sm:text-[15px] font-semibold transition-all hover:bg-primary-dark shadow-md hover:shadow-lg flex justify-center items-center gap-2 group">
            Book Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
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

      {/* Search Booking Bar (Floating at the bottom edge) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-5xl mx-auto bg-white rounded-3xl md:rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col md:flex-row items-center justify-between z-30">
        
        {/* Location Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto md:border-r border-gray-100">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-[#D32F2F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-text-dark font-bold text-[15px]">Select</span>
          </div>
          <div className="w-[1px] h-4 bg-gray-200 mx-3 shrink-0"></div>
          <span className="text-gray-400 text-[14px] font-medium truncate">Pickup Location</span>
        </div>

        {/* Date Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto md:border-r border-gray-100">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-[#D32F2F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="text-gray-600 font-semibold text-[15px]">Select Date</span>
          </div>
        </div>

        {/* Time Section */}
        <div className="flex items-center flex-1 px-4 py-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2 shrink-0">
            <svg className="w-[18px] h-[18px] text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-gray-600 font-semibold text-[15px]">Select Time</span>
          </div>
          <svg className="w-4 h-4 text-gray-400 ml-auto md:ml-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto bg-[#CC1B1B] hover:bg-[#B71C1C] text-white rounded-full px-8 py-3.5 flex items-center justify-center gap-2 font-semibold transition-all mt-2 md:mt-0 shadow-md hover:shadow-lg shrink-0">
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          Search
        </button>
      </div>
    </section>
  );
}
