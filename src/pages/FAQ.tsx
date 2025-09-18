/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus, Heart, Zap, Shield, Brain, Clock, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageData } from '@/hooks/usePageData';
import { faqData, type FAQItem } from '@/data/faq';

const FAQ = () => {
  const { t } = useLanguage();
  const currentFAQItems = usePageData<FAQItem[]>(faqData);

  return (
    <PageLayout
      title="FAQ - SANSO Amsterdam"
      description="Frequently asked questions about Hyperbaric Oxygen Therapy at SANSO Amsterdam. Get answers to common questions about HBOT treatment."
    >
      <div className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
              {t('faq.title')}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-espresso leading-relaxed">
                {t('faq.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {currentFAQItems?.map((item: FAQItem, index: number) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className="border border-olive/30 rounded-lg mb-4 bg-stone shadow-soft"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-ink pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-espresso leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-stone rounded-2xl p-8 shadow-soft border border-olive/30">
              <h3 className="text-2xl font-serif text-ink mb-4">
                {t('faq.cta.questions')}
              </h3>
              <p className="text-espresso mb-6 max-w-2xl mx-auto">
                {t('faq.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-clay text-white visited:text-white rounded-lg font-semibold hover:bg-forest transition-colors duration-300"
                >
                  {t('faq.cta.contact')}
                </a>
                <a
                  href="/reservation"
                  className="inline-flex items-center justify-center px-6 py-3 border border-clay text-clay rounded-lg font-semibold hover:bg-clay hover:text-cream transition-colors duration-300"
                >
                  {t('faq.cta.book')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
