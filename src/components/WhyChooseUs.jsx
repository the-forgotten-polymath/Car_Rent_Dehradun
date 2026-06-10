export default function WhyChooseUs() {
  const features = [
    {
      title: "Easy Online Booking",
      description: "Book your car in just a few clicks. Fast, secure, and hassle-free online reservation.",
      icon: (
        <svg className="w-16 h-16 text-[#CC1B1B] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"></path>
        </svg>
      )
    },
    {
      title: "No Hidden Fees",
      description: "What you see is what you pay. Transparent pricing with no surprise charges.",
      icon: (
        <svg className="w-16 h-16 text-[#CC1B1B] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      title: "Free Cancellation",
      description: "Change your plans? No worries. Cancel for free up to 24 hours before pickup.",
      icon: (
        <svg className="w-16 h-16 text-[#CC1B1B] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
        </svg>
      )
    },
    {
      title: "Best Price Guarantee",
      description: "Find a better price? We'll match it. Get the best value for your money with RentDrive.",
      icon: (
        <svg className="w-16 h-16 text-[#CC1B1B] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24 px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#CC1B1B] font-bold text-sm tracking-wider uppercase mb-3">Our Benefits</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Why Choose <span className="text-[#CC1B1B]">Car Rent Dehradun?</span>
          </h2>
          <p className="font-body text-text-gray text-lg">
            We offer the best experience with top-quality services.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide w-full justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {features.map((feature, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[260px] md:w-[280px] text-center px-4 hover:-translate-y-2 transition-transform duration-300">
              {feature.icon}
              <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-text-gray leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
