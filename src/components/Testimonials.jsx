"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import reviewsData from "../../reviews/reviews.json";

export default function Testimonials() {
  const [columns, setColumns] = useState({ first: [], second: [], third: [] });

  useEffect(() => {
    // Only take the first 30 reviews with text to keep the page fast
    if (Array.isArray(reviewsData) && reviewsData.length > 0) {
      const topReviews = reviewsData
        .filter(r => r.text && r.text.length > 20) // Filter out empty or very short reviews
        .slice(0, 30); // 30 reviews = 10 per column

      const dataToUse = topReviews.length > 0 ? topReviews : reviewsData.slice(0, 30);

      // Split into 3 columns
      const colSize = Math.ceil(dataToUse.length / 3);
      setColumns({
        first: dataToUse.slice(0, colSize),
        second: dataToUse.slice(colSize, colSize * 2),
        third: dataToUse.slice(colSize * 2)
      });
    }
  }, []);

  if (columns.first.length === 0) return null;

  return (
    <section className="bg-background my-16 md:my-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-red-100 text-[#CC1B1B] bg-red-50 py-1 px-4 rounded-full text-sm font-semibold tracking-wide">
              Testimonials
            </div>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-text-dark text-center">
            What our <span className="text-[#CC1B1B]">users say</span>
          </h2>
          <p className="font-body text-center mt-5 text-text-gray text-lg w-full">
            Don't just take our word for it. Read honest reviews from our valued customers about our premium car rental service.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={columns.first} duration={25} />
          <TestimonialsColumn testimonials={columns.second} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={columns.third} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
}
