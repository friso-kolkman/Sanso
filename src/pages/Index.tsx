
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
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
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white text-lg px-8 py-3"
              >
                <a href="#contact">{t('hero.cta')}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HBOT voordelen blok */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif"
          >
            Voordelen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center text-gray-600 mb-16"
          >
            Wetenschappelijk bewezen voordelen van HBOT. Bij SANSO richten we ons op echte, meetbare resultaten van hyperbare zuurstoftherapie.
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
                  <h3 className="font-serif text-xl font-bold text-gray-900 flex-grow">
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
                      <div className="px-6 pb-6 bg-gray-100">
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
            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white font-semibold px-6 py-2 rounded-md shadow">
              <a href="/pricing">Bekijk prijzen & pakketten</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials blok */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Ervaringen van onze cliënten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Anna Jansen'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Anna Jansen</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>2 weken geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Herstel</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Na mijn behandeling voelde ik me energieker dan ooit. De persoonlijke aandacht en professionele begeleiding waren top!”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Post operatief herstel</span>
            </article>
            {/* Testimonial 2 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Mark de Vries'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Mark de Vries</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>1 maand geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-700">Energie</span>
              </div>
              <p className="text-gray-800 text-base mb-2">"De sessies hebben mijn herstel na een blessure enorm versneld. Ik raad SANSO aan iedereen aan!"</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Sport Blessure</span>
            </article>
            {/* Testimonial 3 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Sophie Willems'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Sophie Willems</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>3 maanden geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">Sport</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Ik merkte al na een paar sessies verschil in mijn energie en herstel. Fijne sfeer en deskundig team.”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Chronische vermoeidheid</span>
            </article>
            {/* Testimonial 4 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Peter van Leeuwen'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Peter van Leeuwen</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>1 week geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">Welzijn</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Zeer prettige ervaring! De uitleg was duidelijk en ik voelde me direct op mijn gemak. Absolute aanrader.”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Slaapstoornis</span>
            </article>
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
