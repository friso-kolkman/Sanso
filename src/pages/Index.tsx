
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Brain, Heart, Clock, Shield, Leaf } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Ensure no card is expanded on mount
  useEffect(() => {
    setExpandedCard(null);
  }, []);

  const benefitCards = [
    {
      title: "Verbeterde Cognitieve Functie",
      description: "Beter geheugen, focus en mentale helderheid door optimale zuurstofvoorziening.",
      icon: <Brain className="w-6 h-6" />,
      iconBg: "bg-blue-100 text-blue-600"
    },
    {
      title: "Hart & Vaten Gezondheid",
      description: "Verbeterde bloedcirculatie en cardiovasculaire functie voor optimale gezondheid.",
      icon: <Heart className="w-6 h-6" />,
      iconBg: "bg-red-100 text-red-600"
    },
    {
      title: "Anti-Aging Voordelen",
      description: "Minder oxidatieve stress, gezondere huid en meer vitaliteit.",
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-green-100 text-green-600"
    },
    {
      title: "Immuunsysteem Ondersteuning",
      description: "Sterkere afweer en betere natuurlijke bescherming tegen ziekte.",
      icon: <Shield className="w-6 h-6" />,
      iconBg: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Levensduur Verlenging",
      description: "Langere gezondheidsspanne door geoptimaliseerde celwerking.",
      icon: <Leaf className="w-6 h-6" />,
      iconBg: "bg-green-700 text-white"
    }
  ];

  const handleCardClick = (index: number) => {
    console.log('Card clicked:', index, 'Current expanded:', expandedCard);
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Cinematic Hero Section */}
      <Hero />

      {/* HBOT voordelen blok */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-normal text-center text-gray-900 mb-12"
          >
            Voordelen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center text-gray-600 mb-16"
          >
            Wetenschappelijk bewezen voordelen van HBOT. Bij <span className="font-seasons font-light">SANSŌ</span> richten we ons op echte, meetbare resultaten van hyperbare zuurstoftherapie.
          </motion.p>
          <motion.div className="space-y-4" layout>
            {benefitCards.map((card, index) => (
              <motion.div 
                key={index} 
                layout
                className={`rounded-xl ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} shadow-md overflow-hidden`}
              >
                <div 
                  className="flex items-center p-6 cursor-pointer"
                  onClick={() => handleCardClick(index)}
                >
                  <div className={`rounded-full p-3 mr-6 ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 flex-grow">
                    {card.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence mode="wait">
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",
                        height: {
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pt-6 pb-6 bg-gray-100">
                        <p className="text-gray-700 text-base leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nederlandse call-to-action onder de blokken */}
      <section className="py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-center text-gray-700 mb-3 max-w-2xl mx-auto">
            Ervaar deze voordelen met onze geavanceerde zit-hyperbare kamer, die kan pressuriseren tot 2.0 ATA
          </p>
          <div className="flex justify-center mt-2">
            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white font-normal px-6 py-2 rounded-md shadow">
              <a href="/pricing">Bekijk prijzen & pakketten</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
