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
  const { t, language } = useLanguage();

  // Check if we're on the landing page (root path)
  const isLandingPage = location.pathname === '/';

  const navItems = [
    { name: language === 'nl' ? 'Reserveren' : 'Book Now', path: '/reservation' },
    { name: t('nav.science'), path: '/science' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: language === 'nl' ? 'Hoe?' : 'How it works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/#contact') return false;
    return location.pathname === path;
  };

  // Dynamic text color classes based on page
  const textColorClass = 'text-white';
  const textColorHoverClass = 'hover:text-white/80';
  const textColorActiveClass = 'text-white';
  const textColorInactiveClass = 'text-white/90';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className="site-nav bg-black/40 backdrop-blur-lg shadow-2xl fixed w-full top-16 z-50 border-b border-white/10 text-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2 group" aria-label="SANSŌ Amsterdam - Home">
              <span className={`text-xl font-seasons font-light drop-shadow-lg ${textColorClass}`}>
                SANSŌ
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  role="none"
                >
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path}
                      className={`${textColorInactiveClass} ${textColorHoverClass} font-medium transition-colors drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded`}
                      role="menuitem"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded ${
                        isActive(item.path)
                          ? textColorActiveClass
                          : `${textColorInactiveClass} ${textColorHoverClass}`
                      }`}
                      role="menuitem"
                      aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <LanguageSwitcher textColor="white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild className="bg-white hover:bg-white/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                <Link to="/contact" aria-label="Book a session">
                  <span className="text-black">{t('nav.bookSession')}</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${textColorClass} ${textColorHoverClass} p-2 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/20"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-white hover:text-white/80 font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                      role="menuitem"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'text-white hover:text-white/80'
                      }`}
                      role="menuitem"
                      aria-current={isActive(item.path) ? 'page' : undefined}
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
                <Button asChild className="w-full bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <a href="#contact" onClick={closeMenu} aria-label="Book a session">
                    <span className="text-black">{t('nav.bookSession')}</span>
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
