import React, { useRef, useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState('/mars_ship.mp4');
  const [overlayOpacity, setOverlayOpacity] = useState('opacity-0');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setOverlayOpacity('opacity-100'); // Fade in the overlay
    setTimeout(() => {
      setCurrentVideo(currentVideo === '/mars_ship.mp4' ? '/distant_ship.mp4' : '/mars_ship.mp4');
    }, 1000);
  };

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        videoRef.current!.play();
        setOverlayOpacity('opacity-0'); // Fade out the overlay
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
    <div className="relative">
      <video ref={videoRef} autoPlay muted onEnded={handleVideoEnd} className="w-full">
        <source src={currentVideo} type="video/mp4" />
      </video>
      <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${overlayOpacity}`}></div>
    </div>
  );
};

export default HeroBanner;
