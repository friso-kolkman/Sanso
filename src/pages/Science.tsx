
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Zap, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Science = () => {
  const { t } = useLanguage();

  const scienceCards = [
    {
      icon: Heart,
      title: t('science.angiogenesis.title'),
      description: t('science.angiogenesis.description')
    },
    {
      icon: Zap,
      title: t('science.stemCell.title'),
      description: t('science.stemCell.description')
    },
    {
      icon: Shield,
      title: t('science.antiInflammation.title'),
      description: t('science.antiInflammation.description')
    }
  ];

  const faqItems = [
    {
      question: t('science.faq.pressure.question'),
      answer: t('science.faq.pressure.answer')
    },
    {
      question: t('science.faq.safety.question'),
      answer: t('science.faq.safety.answer')
    },
    {
      question: t('science.faq.sessions.question'),
      answer: t('science.faq.sessions.answer')
    },
    {
      question: t('science.faq.conditions.question'),
      answer: t('science.faq.conditions.answer')
    },
    {
      question: t('science.faq.sideEffects.question'),
      answer: t('science.faq.sideEffects.answer')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('science.title')}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('science.intro') }}
              />
            </div>
          </motion.div>

          {/* Science Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {scienceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="h-full"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                      <card.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t('science.faq.title')}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-blue-600 py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Science;
