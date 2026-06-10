export default function Features() {
  return (
    <section className="bg-white py-24 pt-32 px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <div className="bg-[#CC1B1B] text-white p-3 rounded-2xl flex items-center justify-center shadow-sm">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <p className="font-heading text-text-dark font-bold text-[19px] mb-0.5">
              24/7 Customer Support, <span className="font-medium text-text-gray">We're Here to Help!</span>
            </p>
            <p className="font-body text-text-gray text-[15px]">Have any questions? Call us anytime.</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#FFF5F5] rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="text-[#CC1B1B] mb-8">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M5 19h14a2 2 0 002-2v-4.5l-1-4a2 2 0 00-1.9-1.5H5.9a2 2 0 00-1.9 1.5l-1 4V17a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="font-heading text-[22px] font-bold text-text-dark mb-4 leading-[1.2]">Wide Range<br/>of Vehicles</h3>
            <p className="font-body text-text-gray text-[15px] mb-8 leading-relaxed flex-1 px-2">
              From economy to luxury, find the perfect car for your needs.
            </p>
            <button className="bg-[#CC1B1B] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-xl font-semibold text-[14px] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
              View All Cars
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF5F5] rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="text-[#CC1B1B] mb-8">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="font-heading text-[22px] font-bold text-text-dark mb-4 leading-[1.2]">Flexible<br/>Rental Plans</h3>
            <p className="font-body text-text-gray text-[15px] mb-8 leading-relaxed flex-1 px-2">
              Choose from daily, weekly, or monthly rental options.
            </p>
            <button className="bg-[#CC1B1B] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-xl font-semibold text-[14px] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
              View All Deals
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF5F5] rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg duration-300">
            <div className="text-[#CC1B1B] mb-8">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 className="font-heading text-[22px] font-bold text-text-dark mb-4 leading-[1.2]">24/7 Customer<br/>Support</h3>
            <p className="font-body text-text-gray text-[15px] mb-8 leading-relaxed flex-1 px-2">
              We're here to help you anytime, anywhere.
            </p>
            <button className="bg-[#CC1B1B] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-xl font-semibold text-[14px] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
