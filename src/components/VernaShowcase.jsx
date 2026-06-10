import Car360Viewer from "./Car360Viewer";

export default function VernaShowcase() {
  return (
    <section className="w-full bg-[#f4f4f4] py-20 overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        <div className="text-center z-20 relative px-4 translate-y-1 md:translate-y-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-dark mb-4 drop-shadow-sm">
            Experience the Perfect Drive, <span className="text-[#CC1B1B]">Every Time</span>
          </h2>
        </div>
        
        {/* Full width horizontally container */}
        <div className="w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] relative flex items-center justify-center -mt-8 scale-110 md:scale-[1.4] transform origin-center z-10">
          {/* We pass a custom className to make it fill the space and remove aspect ratio constraint */}
          <Car360Viewer 
            carFolder="verna" 
            colorFolder="464c4a" 
            autoRotate={true} 
            className="w-full h-full mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
