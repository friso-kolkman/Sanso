import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  className?: string;
  showNavigation?: boolean;
}

const PageLayout = ({ 
  children, 
  title, 
  description, 
  className = "min-h-screen bg-sand",
  showNavigation = true 
}: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      <div className={className}>
        {showNavigation && <Navigation />}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-32"
        >
          {children}
        </motion.main>
      </div>
    </>
  );
};

export default PageLayout;
