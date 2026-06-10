import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-border shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Logo Icon Placeholder */}
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold">
            bp
          </div>
          <div className="flex flex-col">
            <Link href="/" className="font-heading font-bold text-xl text-text-dark leading-tight flex items-start">
              Buddingpreneurs
              <span className="text-[10px] ml-1 mt-0.5">&reg;</span>
            </Link>
            <span className="text-[10px] text-primary font-medium tracking-wide">
              A Collaborative Ecosystem for Women Entrepreneurs
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {[
            'Home', 'Workshops', 'Community', 'Directory', 'Blog', 
            'Our Programs', 'Business Plan', 'Disclaimer', 'About us', 'Contact', 'Log In'
          ].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[13px] font-body font-semibold text-text-dark hover:text-primary transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block ml-4">
          <Link 
            href="/join" 
            className="px-6 py-2.5 bg-primary text-white rounded-full text-[13px] font-body font-semibold transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Join Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-text-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
