import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqItems = [
    {
      id: 'what-is-hbot',
      question: 'What is Hyperbaric Oxygen Therapy (HBOT)?',
      expanded: true,
      answer: 'Hyperbaric Oxygen Therapy is a medical treatment that involves breathing pure oxygen in a pressurized chamber. This increases the amount of oxygen in your blood, which can help heal wounds, fight infections, and improve various health conditions. At SANSO Amsterdam, we use state-of-the-art equipment to provide this therapy.'
    },
    {
      id: 'how-hbot-works',
      question: 'How does HBOT work?',
      expanded: false,
      answer: 'During HBOT, you lie in a pressurized chamber while breathing 100% oxygen. The increased pressure allows your lungs to absorb more oxygen, which is then carried throughout your body via the bloodstream. This enhanced oxygen delivery promotes healing and recovery by stimulating the body\'s natural healing processes.'
    },
    {
      id: 'conditions-treated',
      question: 'What conditions can HBOT treat?',
      expanded: false,
      answer: 'HBOT is used to treat various conditions including chronic wounds, diabetic foot ulcers, radiation injuries, carbon monoxide poisoning, decompression sickness, and certain infections. It\'s also being studied for its potential benefits in neurological conditions, sports recovery, and anti-aging.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Two-Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 p-6"
          >
            {/* Left Column - Image */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/faq/hero.jpg"
                  alt="Close-up of a person's bare back lying on pebbles/sand, grains scattered on the skin."
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column - FAQ Content */}
            <div className="w-full flex flex-col justify-center">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-serif text-[#24303A] mb-10"
              >
                Frequent Questions
              </motion.h2>

              {/* FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {faqItems.map((item, index) => (
                  <Accordion key={item.id} type="single" collapsible defaultValue={item.expanded ? item.id : undefined}>
                    <AccordionItem value={item.id} className="border-b border-[#D8DDE2] last:border-b-0">
                      <AccordionTrigger className="text-lg text-[#24303A] hover:text-[#51606B] flex justify-between items-center py-4">
                        {item.question}
                        <span className="ml-auto">
                          <Plus className="h-5 w-5 text-[#51606B]" />
                        </span>
                      </AccordionTrigger>
                      {item.answer && (
                        <AccordionContent className="text-[#51606B] leading-relaxed pb-4">
                          {item.answer}
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  </Accordion>
                ))}
              </motion.div>

              {/* Discover All Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
              >
                <a
                  href="#"
                  aria-label="Discover all frequently asked questions"
                  className="text-[#24303A] hover:text-[#51606B] font-medium transition-colors duration-200"
                >
                  DISCOVER ALL
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 