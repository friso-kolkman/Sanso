import { AnimatePresence } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { benefitCards } from '@/data/benefits';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Ensure no card is expanded on mount
  useEffect(() => {
    setExpandedCard(null);
  }, []);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>SANSŌ Amsterdam - Hyperbaric Oxygen Therapy Clinic</title>
        <meta name="description" content="Advanced hyperbaric oxygen therapy for accelerated healing and recovery. Experience the power of pressurized oxygen at SANSŌ Amsterdam." />
        <meta name="keywords" content="hyperbaric oxygen therapy, HBOT, healing, recovery, Amsterdam, oxygen therapy, medical treatment" />
        <meta property="og:title" content="SANSŌ Amsterdam - Hyperbaric Oxygen Therapy Clinic" />
        <meta property="og:description" content="Advanced hyperbaric oxygen therapy for accelerated healing and recovery. Experience the power of pressurized oxygen at SANSŌ Amsterdam." />
        <meta property="og:url" content="https://sanso.amsterdam/" />
        <meta property="og:image" content="https://sanso.amsterdam/og-image.jpg" />
        <meta name="twitter:title" content="SANSŌ Amsterdam - Hyperbaric Oxygen Therapy Clinic" />
        <meta name="twitter:description" content="Advanced hyperbaric oxygen therapy for accelerated healing and recovery. Experience the power of pressurized oxygen at SANSŌ Amsterdam." />
        <meta name="twitter:image" content="https://sanso.amsterdam/og-image.jpg" />
        <link rel="canonical" href="https://sanso.amsterdam/" />
      </Helmet>
      
      <div className="min-h-screen bg-sand">
        <Navigation />
        
        {/* Cinematic Hero Section - starts from very top */}
        <Hero />
        
        <main id="main-content" tabIndex={-1} className="pt-24">
          {/* HBOT voordelen blok */}
          <section className="py-16 bg-sand">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
                  Ontdek de voordelen van HBOT
                </h2>
                <p className="text-lg text-espresso max-w-3xl mx-auto">
                  Hyperbare Zuurstoftherapie kan je lichaam helpen sneller te herstellen en optimaal te functioneren.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {benefitCards.map((card, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => handleCardClick(index)}
                    >
                      <div className="bg-stone rounded-2xl p-8 shadow-soft border border-olive/30 hover:shadow-lg transition-all duration-300 h-full">
                        <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-serif text-ink mb-4 group-hover:text-clay transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-espresso leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Nederlandse call-to-action onder de blokken */}
          <section className="py-6 bg-sand">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-espresso text-lg">
                Klaar om de kracht van zuurstof te ervaren?{' '}
                <a 
                  href="#contact" 
                  className="text-clay hover:text-forest font-semibold transition-colors duration-300"
                >
                  Boek je eerste sessie
                </a>
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 bg-stone">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-espresso max-w-3xl mx-auto">
                  {t('contact.subtitle')}
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
