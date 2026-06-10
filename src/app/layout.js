import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: "Car Rent Dehradun | Premium Car Rental Service",
  description: "Your premium car rental service in Dehradun. Affordable, reliable, and comfortable cars for your journey. Self-drive and chauffeur options available.",
  keywords: ["Car Rent Dehradun", "Dehradun car rental", "rent a car in Dehradun", "self drive cars Dehradun", "premium car rental Uttarakhand", "hire a car Dehradun"],
  openGraph: {
    title: "Car Rent Dehradun | Premium Car Rentals",
    description: "Your premium car rental service in Dehradun. Affordable, reliable, and comfortable cars for your journey.",
    url: '/',
    siteName: 'Car Rent Dehradun',
    images: [
      {
        url: '/logo.png', 
        width: 800,
        height: 600,
        alt: 'Car Rent Dehradun Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Car Rent Dehradun | Premium Car Rentals",
    description: "Your premium car rental service in Dehradun. Affordable, reliable, and comfortable cars for your journey.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
