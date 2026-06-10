export default function BestDeals() {
  return (
    <section className="bg-white py-24 px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#CC1B1B] font-bold text-sm tracking-wider uppercase mb-3">Best Deals</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Discover Our Exclusive Deals
          </h2>
          {/* Decorative Squiggle SVG matching the mockup */}
          <div className="flex justify-center mt-6">
            <svg width="240" height="24" viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12C20 12 25 4 35 4C45 4 50 20 60 20C70 20 75 4 85 4C95 4 100 20 110 20C120 20 125 4 135 4C145 4 150 20 160 20C170 20 175 4 185 4C195 4 200 20 210 20C220 20 225 12 235 12" stroke="#CC1B1B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FAF8F5] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-full h-[280px] overflow-hidden">
              <img src="/media/white_sedan_scenic.png" alt="Weekly Specials" className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-text-dark mb-2">Weekly Specials</h3>
              <p className="font-body text-text-gray text-base mb-6">Save more on weekly car rentals.</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-50 text-[#CC1B1B] px-4 py-1.5 rounded-lg text-sm font-bold">10% OFF</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-semibold">All Vehicles</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-semibold">Great Savings</span>
              </div>
              
              <button className="bg-[#CC1B1B] hover:bg-[#A81616] text-white px-8 py-3 rounded-xl font-bold text-sm transition-colors shadow-md">
                View Deals
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF8F5] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-full h-[280px] overflow-hidden">
              <img src="/media/red_suv_scenic.png" alt="Weekend Discounts" className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-text-dark mb-2">Weekend Discounts</h3>
              <p className="font-body text-text-gray text-base mb-6">Get the best prices for weekend getaways.</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-50 text-[#CC1B1B] px-4 py-1.5 rounded-lg text-sm font-bold">15% OFF</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-semibold">Selected Cars</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-semibold">Limited Time</span>
              </div>
              
              <button className="bg-[#CC1B1B] hover:bg-[#A81616] text-white px-8 py-3 rounded-xl font-bold text-sm transition-colors shadow-md">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
