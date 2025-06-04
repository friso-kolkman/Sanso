
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Zap, Shield } from 'lucide-react';

const Science = () => {
  const scienceCards = [
    {
      icon: Heart,
      title: 'Angiogenesis',
      description: 'HBOT stimulates the formation of new blood vessels, improving circulation and oxygen delivery to damaged tissues. This enhanced vascular network supports faster healing and tissue regeneration.'
    },
    {
      icon: Zap,
      title: 'Stem Cell Mobilization',
      description: 'Hyperbaric oxygen therapy increases the release of stem cells from bone marrow by up to 800%. These circulating stem cells can differentiate into various cell types to repair damaged organs and tissues.'
    },
    {
      icon: Shield,
      title: 'Anti-Inflammation',
      description: 'HBOT reduces inflammatory markers and modulates immune responses, creating an optimal healing environment. This anti-inflammatory effect helps manage chronic conditions and accelerates recovery.'
    }
  ];

  const faqItems = [
    {
      question: 'How does 2 ATA pressure increase oxygen levels?',
      answer: 'At 2 ATA (atmospheres absolute), the increased pressure allows oxygen to dissolve directly into blood plasma at concentrations 10-15 times higher than normal breathing. This dissolved oxygen can reach areas with compromised circulation that red blood cells cannot access.'
    },
    {
      question: 'Is HBOT safe for everyone?',
      answer: 'HBOT is generally safe when administered by trained professionals. However, certain conditions like untreated pneumothorax, certain medications, and pregnancy may be contraindications. A thorough medical evaluation is required before treatment.'
    },
    {
      question: 'How many sessions are typically needed?',
      answer: 'Treatment protocols vary depending on the condition being treated. Acute conditions may require 10-20 sessions, while chronic conditions might need 20-40 sessions. Your treatment plan will be customized based on your specific needs and response to therapy.'
    },
    {
      question: 'What conditions can HBOT help with?',
      answer: 'HBOT has shown benefits for wound healing, radiation injury, carbon monoxide poisoning, decompression sickness, and various off-label applications including traumatic brain injury, stroke recovery, and certain inflammatory conditions.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Side effects are typically mild and may include ear pressure (similar to flying), temporary vision changes, or claustrophobia. Serious complications are rare when treatment is properly supervised by medical professionals.'
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
              The Science Behind HBOT
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hyperbaric Oxygen Therapy utilizes pressurized environments at 2 ATA (atmospheres absolute) 
                to dramatically increase oxygen bioavailability. Under these conditions, oxygen dissolves 
                directly into blood plasma at concentrations <strong>10 times higher</strong> than normal 
                atmospheric pressure, creating powerful therapeutic effects at the cellular level. This 
                enhanced oxygen delivery triggers cascading biological responses that promote healing, 
                reduce inflammation, and stimulate the body's natural regenerative processes.
              </p>
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
              Frequently Asked Questions
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
