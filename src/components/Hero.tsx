import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  useEffect(() => {
    // Only set up video event listeners on desktop
    if (!isMobile) {
      const video = videoRef.current;
      if (video) {
        const handleLoadStart = () => {
          setShowPlayButton(true);
        };

        const handleCanPlay = () => {
          setShowPlayButton(false);
        };

        const handleError = () => {
          setShowPlayButton(true);
        };

        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('error', handleError);

        return () => {
          video.removeEventListener('loadstart', handleLoadStart);
          video.removeEventListener('canplay', handleCanPlay);
          video.removeEventListener('error', handleError);
        };
      }
    } else {
      // On mobile, ensure play button is hidden
      setShowPlayButton(false);
    }
  }, [isMobile]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Handle play error silently
      });
    }
  };

  return (
    <header className="relative w-full h-screen overflow-hidden" role="banner">
      {/* Video Background - Only on desktop */}
      {!isMobile && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video showing hyperbaric oxygen therapy"
        >
          <source src="/can_we_create_a_close_up_of_a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image Fallback for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hbot-chamber.jpg"
            alt="HBOT Chamber - Hyperbaric oxygen therapy treatment room"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Play Button Overlay - Only show on desktop when needed */}
      {!isMobile && showPlayButton && (
        <div className="absolute inset-0 z-15 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="bg-black/30 hover:bg-black/50 rounded-full p-6 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[64px] min-w-[64px] flex items-center justify-center"
            aria-label="Play background video"
          >
            <Play className="w-16 h-16 text-white fill-white" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true"></div>

      {/* Main Content Area - Positioned at bottom left */}
      <div className="absolute bottom-0 left-0 z-20 pb-6 px-4 sm:pb-8 sm:px-6 lg:pb-12 lg:px-12">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-white text-sm sm:text-base font-light tracking-wide mb-4 sm:mb-6">
            {t('hero.tagline')}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight sm:leading-none mb-6 sm:mb-8">
            <span className="text-white">{t('hero.headline.line1')}</span>
            <br />
            <span className="text-white">{t('hero.headline.line2')}</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8" role="group" aria-label="Call to action buttons">
            <Link to="/reservation">
              <Button 
                size="lg" 
                className="bg-cream hover:bg-cream/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[48px] w-full sm:w-auto"
                aria-label={t('hero.cta')}
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-black" aria-hidden="true" />
                <span className="text-black">{t('hero.cta')}</span>
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-clay text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[48px] w-full sm:w-auto"
                aria-label={t('hero.learnMore')}
              >
                {t('hero.learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
