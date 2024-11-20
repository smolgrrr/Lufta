import React, { useRef, useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState('/mars_ship.mp4');
  const [overlayOpacity, setOverlayOpacity] = useState('opacity-0');
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = window.innerWidth <= 640;
  const videoStyle = isMobile
    ? (currentVideo === '/mars_ship.mp4'
      ? { objectPosition: 'calc(100% + 190px) center' }
      : { objectPosition: 'calc(100% + 650px) center' })
    : {};

  const handleVideoEnd = () => {
    setOverlayOpacity('opacity-100');
    setTimeout(() => {
      setCurrentVideo(currentVideo === '/mars_ship.mp4' ? '/distant_ship.mp4' : '/mars_ship.mp4');
    }, 1000);
  };

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        videoRef.current?.play();
        setOverlayOpacity('opacity-0');
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.src = currentVideo;
      videoRef.current.load();

      return () => {
        videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [currentVideo]);

  return (
    <div className="relative w-full h-[calc(100vh-110px)] sm:h-screen">
      {/* Background Overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${overlayOpacity} z-0`} />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover absolute z-10 transition-opacity duration-1000"
        style={videoStyle}
      >
        <source src={currentVideo} type="video/mp4" />
      </video>

      {/* Title Section */}
      <div className="absolute bottom-0 left-0 w-full z-10 p-4 sm:pl-16 sm:pb-12">
        <h1 id="our-mission" className="font-bold text-5xl sm:text-6xl md:text-7xl text-[#eee7e3] text-left">
          Airships Return
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
