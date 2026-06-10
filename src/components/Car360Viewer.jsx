"use client";
import { useState, useEffect, useRef } from 'react';

export default function Car360Viewer({ carFolder, colorFolder, autoRotate = true, className }) {
  const totalFrames = 72;
  const [currentFrame, setCurrentFrame] = useState(20);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Preload even earlier before it enters viewport
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let loadedCount = 0;
    
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === totalFrames) {
        setAllImagesLoaded(true);
      }
    };

    // Load frame-20 immediately so user sees the car from a nice angle instantly
    const img1 = new window.Image();
    img1.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`;
    img1.onload = () => {
      setIsFirstFrameLoaded(true);
      handleLoad();
    };
    img1.onerror = () => {
      setHasError(true);
      setIsFirstFrameLoaded(true);
      handleLoad(); // Don't hang if missing
    };

    // Preload the rest in the background
    for (let i = 1; i <= totalFrames; i++) {
      if (i === 20) continue; // Already loaded above
      const img = new window.Image();
      const frameStr = i.toString().padStart(2, '0');
      img.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-${frameStr}.jpg`;
      img.onload = handleLoad;
      img.onerror = handleLoad; // Crucial: don't hang if a frame is missing
    }
  }, [carFolder, colorFolder, isVisible]);

  useEffect(() => {
    if (!allImagesLoaded || !autoRotate || hasError) return;
    
    // Auto-rotate the car smoothly
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev === totalFrames ? 1 : prev + 1));
    }, 100); // Super smooth 10fps spin
    
    return () => clearInterval(interval);
  }, [allImagesLoaded, autoRotate, hasError]);

  const frameStr = currentFrame.toString().padStart(2, '0');
  const imageSrc = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-${frameStr}.jpg`;

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center overflow-hidden ${className || 'w-full aspect-[4/3]'}`}>
      {(!isFirstFrameLoaded && isVisible && !hasError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 z-10 rounded-2xl">
          <div className="w-6 h-6 border-2 border-[#CC1B1B] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-[#FAF8F5] rounded-2xl scale-90 opacity-70">
          <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Coming Soon</span>
        </div>
      ) : isVisible && (
        <img 
          src={isFirstFrameLoaded ? imageSrc : `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`} 
          alt={`${carFolder} 360 View`} 
          className={`w-full h-full object-contain select-none transition-opacity duration-300 scale-110 ${isFirstFrameLoaded ? 'opacity-100' : 'opacity-0'}`}
          draggable="false"
          onError={(e) => { 
            // Fallback to frame 20 if a rotating frame is missing to prevent broken images
            // Only update if it's not already frame-20 to prevent infinite loops!
            if (!e.target.src.includes('frame-20.jpg')) {
              e.target.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`; 
            }
          }}
        />
      )}
    </div>
  );
}
