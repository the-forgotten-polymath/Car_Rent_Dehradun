"use client";
import { useState, useEffect, useRef } from 'react';

export default function CarDetailModal({ car, onClose }) {
  const [viewMode, setViewMode] = useState('exterior'); // 'exterior' | 'interior'
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-20">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text-dark">{car.name}</h2>
            <p className="font-body text-text-gray text-sm">{car.type}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 relative bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
          
          {/* View Mode Toggle */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur shadow-md rounded-full p-1.5 flex gap-1 z-30 border border-gray-100">
            <button 
              onClick={() => setViewMode('exterior')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${viewMode === 'exterior' ? 'bg-[#CC1B1B] text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Exterior 360
            </button>
            <button 
              onClick={() => setViewMode('interior')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${viewMode === 'interior' ? 'bg-[#CC1B1B] text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Interior View
            </button>
          </div>

          {viewMode === 'exterior' && <InteractiveExteriorViewer carFolder={car.folder} colorFolder={car.color} />}
          {viewMode === 'interior' && <InteractiveInteriorViewer carFolder={car.folder} />}
          
        </div>

        {/* Footer Details */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm font-bold text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                {car.seats} Seats
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                {car.doors} Doors
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                {car.bags} Bags
              </span>
            </div>
            
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-400 line-through">${car.oldPrice}</div>
                <div className="text-[28px] font-bold text-text-dark leading-none">TBD<span className="text-sm font-semibold text-[#CC1B1B] ml-1">/day</span></div>
              </div>
              <button className="flex-1 sm:flex-none bg-[#CC1B1B] hover:bg-[#B71C1C] text-white px-10 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Drag-to-spin Exterior component
function InteractiveExteriorViewer({ carFolder, colorFolder }) {
  const totalFrames = 72;
  const [currentFrame, setCurrentFrame] = useState(20);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === totalFrames) setAllImagesLoaded(true);
    };

    // Load frame-20 immediately
    const img1 = new window.Image();
    img1.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`;
    img1.onload = () => {
      setIsFirstFrameLoaded(true);
      handleLoad();
    };
    img1.onerror = () => {
      setHasError(true);
      setIsFirstFrameLoaded(true);
      handleLoad(); // Don't hang
    };

    // Preload the rest
    for (let i = 1; i <= totalFrames; i++) {
      if (i === 20) continue;
      const img = new window.Image();
      const frameStr = i.toString().padStart(2, '0');
      img.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-${frameStr}.jpg`;
      img.onload = handleLoad;
      img.onerror = handleLoad; // Crucial to prevent hanging if a frame is missing
    }
  }, [carFolder, colorFolder]);

  // Handle Dragging
  const handlePointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX || (e.touches && e.touches[0].clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !allImagesLoaded || hasError) return; // Only allow drag when fully loaded and no error
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - startX.current;
    
    if (Math.abs(deltaX) > 10) { // Sensitivity
      if (deltaX > 0) {
        setCurrentFrame(prev => prev === 1 ? totalFrames : prev - 1);
      } else {
        setCurrentFrame(prev => prev === totalFrames ? 1 : prev + 1);
      }
      startX.current = clientX;
    }
  };

  const handlePointerUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    return () => {
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  const frameStr = currentFrame.toString().padStart(2, '0');
  const imageSrc = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-${frameStr}.jpg`;

  return (
    <div 
      className={`w-full h-full flex flex-col items-center justify-center relative select-none ${(allImagesLoaded && !hasError) ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      ref={containerRef}
    >
      {(!isFirstFrameLoaded && !hasError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#CC1B1B] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
          <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Image Coming Soon</span>
        </div>
      ) : (
        <>
          <img 
            src={isFirstFrameLoaded ? imageSrc : `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`} 
            alt="Interactive 360 View" 
            className={`max-w-[95%] max-h-[85%] object-contain pointer-events-none transition-opacity duration-300 scale-105 ${isFirstFrameLoaded ? 'opacity-100' : 'opacity-0'}`}
            draggable="false"
            onError={(e) => { 
              if (!e.target.src.includes('frame-20.jpg')) {
                e.target.src = `/media/${carFolder}/${carFolder}-360/${colorFolder}/frame-20.jpg`; 
              }
            }}
          />
          
          {allImagesLoaded && !hasError && (
            <div className="absolute bottom-10 flex items-center gap-2 text-gray-600 bg-white/90 px-5 py-2.5 rounded-full pointer-events-none shadow-sm backdrop-blur-sm">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              <span className="text-sm font-bold tracking-wide">Drag to rotate</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Pannellum Interior component
function InteractiveInteriorViewer({ carFolder }) {
  const viewerRef = useRef(null);
  const pannellumInstance = useRef(null);

  useEffect(() => {
    // Inject Pannellum CSS if not present
    if (!document.getElementById('pannellum-css')) {
      const link = document.createElement('link');
      link.id = 'pannellum-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
      document.head.appendChild(link);
    }

    const initViewer = () => {
      if (viewerRef.current && window.pannellum) {
        pannellumInstance.current = window.pannellum.viewer(viewerRef.current, {
          "type": "cubemap",
          "cubeMap": [
            `/media/${carFolder}/${carFolder}-interior/face-1.jpg`,
            `/media/${carFolder}/${carFolder}-interior/face-2.jpg`,
            `/media/${carFolder}/${carFolder}-interior/face-3.jpg`,
            `/media/${carFolder}/${carFolder}-interior/face-4.jpg`,
            `/media/${carFolder}/${carFolder}-interior/face-5.jpg`,
            `/media/${carFolder}/${carFolder}-interior/face-6.jpg`
          ],
          "autoLoad": true,
          "mouseZoom": false,
          "showControls": false
        });
      }
    };

    // Inject Pannellum JS if not present
    if (!document.getElementById('pannellum-js')) {
      const script = document.createElement('script');
      script.id = 'pannellum-js';
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.onload = initViewer;
      document.head.appendChild(script);
    } else {
      // Small timeout to ensure DOM is ready if script was already loaded
      setTimeout(initViewer, 100);
    }

    return () => {
      if (pannellumInstance.current) {
        pannellumInstance.current.destroy();
      }
    };
  }, [carFolder]);

  return (
    <div className="w-full h-full relative bg-gray-900">
      <div ref={viewerRef} className="w-full h-full"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white bg-black/60 px-5 py-2.5 rounded-full pointer-events-none backdrop-blur-sm z-10 shadow-lg">
        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
        <span className="text-sm font-bold tracking-wide">Drag to look around</span>
      </div>
    </div>
  );
}
