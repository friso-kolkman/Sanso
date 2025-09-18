import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { benefitCards } from '@/data/benefits';

const Index = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>SANSO Amsterdam - Advanced Hyperbaric Oxygen Therapy</title>
        <meta name="description" content="Experience the power of pressurized oxygen therapy at SANSO Amsterdam. Advanced HBOT treatments for accelerated healing, recovery, and wellness." />
        <meta name="keywords" content="hyperbaric oxygen therapy, HBOT, Amsterdam, healing, recovery, wellness, oxygen therapy, pressurized oxygen" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanso.amsterdam/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SANSO Amsterdam - Advanced Hyperbaric Oxygen Therapy" />
        <meta property="og:description" content="Experience the power of pressurized oxygen therapy at SANSO Amsterdam. Advanced HBOT treatments for accelerated healing, recovery, and wellness." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanso.amsterdam/" />
        <meta property="og:image" content="https://sanso.amsterdam/og-image.jpg" />
        <meta property="og:site_name" content="SANSO Amsterdam" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SANSO Amsterdam - Advanced Hyperbaric Oxygen Therapy" />
        <meta name="twitter:description" content="Advanced hyperbaric oxygen therapy for accelerated healing and recovery. Experience the power of pressurized oxygen at SANSO Amsterdam." />
        <meta name="twitter:image" content="https://sanso.amsterdam/og-image.jpg" />
        <link rel="canonical" href="https://sanso.amsterdam/" />
      </Helmet>
      
      <div className="min-h-screen bg-sand">
        <Navigation />
        
        {/* Cinematic Hero Section - starts from very top */}
        <Hero />
        
        <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20 md:pt-24">
          {/* HBOT voordelen blok */}
          <section className="py-12 sm:py-16 bg-sand">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ink mb-3 sm:mb-4">
                  {t('home.benefits.title')}
                </h2>
                <p className="text-base sm:text-lg text-espresso max-w-3xl mx-auto leading-relaxed">
                  {t('home.benefits.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <AnimatePresence>
                  {benefitCards.map((card, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => handleCardClick(index)}
                    >
                      <div className="bg-stone rounded-2xl p-6 sm:p-8 shadow-soft border border-olive/30 hover:shadow-lg transition-all duration-300 h-full">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          {card.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-serif text-ink mb-3 sm:mb-4 group-hover:text-clay transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base text-espresso leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-stone">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ink mb-4 sm:mb-6">
                {t('home.cta.title')}
              </h2>
              <p className="text-base sm:text-lg text-espresso mb-8 sm:mb-10 max-w-2xl mx-auto">
                {t('home.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/reservation">
                  <button className="bg-clay text-cream hover:bg-forest px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 min-h-[48px] w-full sm:w-auto">
                    {t('home.cta.book')}
                  </button>
                </Link>
                <Link to="/pricing">
                  <button className="border-2 border-clay text-clay hover:bg-clay hover:text-cream px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 min-h-[48px] w-full sm:w-auto">
                    {t('home.cta.viewPricing')}
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
