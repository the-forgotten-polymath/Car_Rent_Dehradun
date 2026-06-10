export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 relative flex items-center justify-center bg-white rounded-full overflow-hidden p-2 shadow-sm">
                <img src="/logo.png" alt="Car Rent Dehradun Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl md:text-2xl tracking-tight leading-tight">Car Rent<br/>Dehradun</span>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed w-full">
              Your premium car rental service in Dehradun. We offer the best experience with top-quality vehicles for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 font-body text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#CC1B1B] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#CC1B1B] transition-colors">Cars</a></li>
              <li><a href="#" className="hover:text-[#CC1B1B] transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-[#CC1B1B] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 font-body text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CC1B1B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <a href="https://maps.app.goo.gl/Wnj32YMjssxvvL6y8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed">
                  Car Rent Dehradun<br/>
                  Dehradun, Uttarakhand
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#CC1B1B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:08439777772" className="hover:text-white transition-colors font-semibold text-lg">
                  08439777772
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Find Us</h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-gray-800 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110198.8105652516!2d77.9804765!3d30.3725174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b845b1b5f89%3A0xd98ae16ad8c5ed50!2sCar%20rent%20dehradun!5e0!3m2!1sen!2sus!4v1717770000000" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-body flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Car Rent Dehradun. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
