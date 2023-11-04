import React, { useRef, useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState('/mars_ship.mp4');
  const [overlayOpacity, setOverlayOpacity] = useState('opacity-0');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = window.innerWidth <= 640;
  const videoStyle = isMobile 
    ? (currentVideo === '/mars_ship.mp4' 
        ? { objectPosition: 'calc(100% + 190px) center' } 
        : { objectPosition: 'calc(100% + 650px) center' })
    : {};


  const handleVideoEnd = () => {
    setOverlayOpacity('opacity-100'); // Fade in the overlay
    setTimeout(() => {
      setCurrentVideo(currentVideo === '/mars_ship.mp4' ? '/distant_ship.mp4' : '/mars_ship.mp4');
    }, 1000);
  };

  const playVideo = () => {
    videoRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error("Video play failed:", error);
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        playVideo();
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
    <div className="relative h-screen w-full">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline
        muted 
        onEnded={handleVideoEnd} 
        className="w-full h-full object-cover absolute" 
        style={videoStyle} // Change position depeneding on video and screen
      >
        <source src={currentVideo} type="video/mp4" />
      </video>
      {!isPlaying && 
        <button 
          onClick={playVideo} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white bg-blue-600 p-4 rounded"
        >
          Play
        </button>
      }
      <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${overlayOpacity}`}></div>
    </div>
  );
};

export default HeroBanner;
