import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.reservation'), path: '/reservation' },
    { name: t('nav.science'), path: '/science' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.howItWorks'), path: '/how-it-works' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isLandingPage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Mobile-optimized text colors
  const textColorClass = 'text-white';
  const textColorHoverClass = 'hover:text-white/80';
  const textColorActiveClass = 'text-white';
  const textColorInactiveClass = 'text-white/90';

  return (
    <nav 
      className="site-nav bg-black/40 backdrop-blur-lg shadow-2xl fixed w-full top-0 z-50 border-b border-white/10 text-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2 group" aria-label="SANSŌ Amsterdam - Home">
              <span className={`text-lg sm:text-xl font-seasons font-light drop-shadow-lg ${textColorClass}`}>
                SANSŌ
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex items-center space-x-12" role="menubar">
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
                  <span className="!text-black" style={{color: 'black'}}>{t('nav.bookSession')}</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${textColorClass} ${textColorHoverClass} p-3 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/20"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.path.startsWith('/#') ? (
                      <a
                        href={item.path}
                        onClick={closeMenu}
                        className="block px-4 py-4 text-white hover:text-white/80 font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg min-h-[44px] flex items-center"
                        role="menuitem"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block px-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg min-h-[44px] flex items-center ${
                          isActive(item.path)
                            ? 'text-white bg-white/10'
                            : 'text-white hover:text-white/80 hover:bg-white/5'
                        }`}
                        role="menuitem"
                        aria-current={isActive(item.path) ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Language Switcher */}
                <div className="px-4 py-3 border-t border-white/20">
                  <LanguageSwitcher textColor="white" />
                </div>
                
                {/* Book Session Button */}
                <div className="px-4 py-3">
                  <Button asChild className="w-full bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[48px] text-base font-semibold">
                    <Link to="/reservation" onClick={closeMenu} aria-label="Book a session">
                      <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                      <span className="text-black">{t('nav.bookSession')}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
