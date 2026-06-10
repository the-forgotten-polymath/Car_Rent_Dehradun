export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Search Cars",
      description: "Find the perfect car for your trip from our wide selection.",
      image: "/media/amaze/amaze-360/87151c/frame-20.jpg"
    },
    {
      number: "2",
      title: "Choose",
      description: "Select your dates, compare prices, and choose your car.",
      image: "/media/creta/creta-360/0c0a0d/frame-20.jpg"
    },
    {
      number: "3",
      title: "Book & Confirm",
      description: "Book securely online and get instant confirmation.",
      image: "/media/seltos/seltos-360/f4f4f4/frame-20.jpg"
    },
    {
      number: "4",
      title: "Pickup & Drive",
      description: "Pick up your car and enjoy your journey hassle-free.",
      image: "/media/innova-hycross/innova-hycross-360/6b6c70/frame-20.jpg"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#CC1B1B] font-bold text-sm tracking-wider uppercase mb-3">Simple Steps</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-4">
            How It Works
          </h2>
          <p className="font-body text-text-gray text-lg w-full">
            Renting a car has never been easier. Follow these simple steps and hit the road in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-[#FAF8F5] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow pt-8 flex flex-col items-center text-center mt-6">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#CC1B1B] text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10">
                {step.number}
              </div>
              
              <div className="px-6 flex flex-col items-center flex-grow w-full">
                <h3 className="font-heading text-xl font-bold text-text-dark mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-gray text-[15px] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              
              <div className="w-full mt-auto bg-[#f4f4f4] overflow-hidden rounded-b-3xl">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-32 md:h-40 object-cover object-bottom" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
