import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';

interface PageLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
}

const PageLayout = ({ 
  title, 
  description, 
  keywords = '', 
  url = '', 
  image = 'https://sanso.amsterdam/og-image.jpg',
  children, 
  className = '',
  showNavigation = true 
}: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        {url && <link rel="canonical" href={url} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="SANSŌ Amsterdam" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      
      <div className={`min-h-screen bg-sand ${className}`}>
        {showNavigation && <Navigation />}
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`pt-16 sm:pt-20 md:pt-24 ${className}`}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
};

export default PageLayout;
