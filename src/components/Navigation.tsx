
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Check if we're on the landing page (root path)
  const isLandingPage = location.pathname === '/';

  const navItems = [
    { name: t('nav.science'), path: '/science' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/#contact') return false;
    return location.pathname === path;
  };

  // Dynamic text color classes based on page
  const textColorClass = isLandingPage ? 'text-white' : 'text-black';
  const textColorHoverClass = isLandingPage ? 'hover:text-white/80' : 'hover:text-black/80';
  const textColorActiveClass = isLandingPage ? 'text-white' : 'text-black';
  const textColorInactiveClass = isLandingPage ? 'text-white/90' : 'text-black/90';

  return (
    <nav className="bg-transparent backdrop-blur-md fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <span className={`text-xl font-seasons font-light drop-shadow-lg ${textColorClass}`}>
                SANSŌ
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    className={`${textColorInactiveClass} ${textColorHoverClass} font-medium transition-colors drop-shadow-sm`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors drop-shadow-sm ${
                      isActive(item.path)
                        ? textColorActiveClass
                        : `${textColorInactiveClass} ${textColorHoverClass}`
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <LanguageSwitcher textColor={isLandingPage ? 'white' : 'black'} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild className="bg-white hover:bg-white/90 text-black shadow-lg">
                <Link to="/contact">{t('nav.bookSession')}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} ${textColorHoverClass} p-2 drop-shadow-sm`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-white hover:text-white/80 font-medium"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 font-medium ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher textColor="white" />
              </div>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-white hover:bg-white/90 text-black">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    {t('nav.bookSession')}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
