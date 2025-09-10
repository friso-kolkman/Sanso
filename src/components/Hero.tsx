import React, { useEffect, useRef, useState } from 'react';
import { Award, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
      
      // On mobile, show play button by default
      if (isMobileDevice) {
        setShowPlayButton(true);
      }
    };

    checkMobile();

    // Handle video loading
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setVideoLoaded(true);
      const handleError = () => setVideoLoaded(false);
      const handleCanPlay = () => {
        // Try to play on mobile
        if (isMobile) {
          video.play().then(() => {
            setShowPlayButton(false);
            setVideoLoaded(true);
          }).catch(() => {
            // Autoplay failed, keep play button visible
            setShowPlayButton(true);
            setVideoLoaded(false);
          });
        }
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      
      // Try to play on desktop
      if (!isMobile) {
        video.play().catch(() => {
          setShowPlayButton(true);
          setVideoLoaded(false);
        });
      }
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [isMobile]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setShowPlayButton(false);
        setVideoLoaded(true);
      }).catch(() => {
        // Keep play button visible if play fails
        setShowPlayButton(true);
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {!isMobile && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/can_we_create_a_close_up_of_a.mp4" type="video/mp4" />
        </video>
      )}

      {/* Image Fallback for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hbot-chamber.jpg"
            alt="HBOT Chamber"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Play Button Overlay for Mobile */}
      {showPlayButton && (
        <div className="absolute inset-0 z-15 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="bg-black/30 hover:bg-black/50 rounded-full p-6 backdrop-blur-sm transition-all duration-300"
          >
            <Play className="w-16 h-16 text-white fill-white" />
          </button>
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end pb-8 px-8 lg:pb-12 lg:px-12 mt-32">
        <div className="max-w-6xl">
          {/* Tagline */}
          <p className="text-white text-sm font-light tracking-wide mb-6">
            Discover the benefits of pure oxygen therapy
          </p>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-none mb-8">
            <div className="text-white">Breath deeper,</div>
            <div className="text-white">feel better</div>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/reservation">
              <Button 
                size="lg" 
                className="bg-cream text-clay hover:bg-cream/90 text-lg px-8 py-4 font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Session
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-clay text-lg px-8 py-4 font-semibold"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
