import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqItems = [
  {
    icon: Mail,
    questionKey: 'contact.faq.email.question',
    answerKey: 'contact.faq.email.answer',
    defaultQ: 'Can I contact you by email?',
    defaultA: 'Yes, you can reach us at info@oxyrevive.com for any questions or to book a session.'
  },
  {
    icon: Phone,
    questionKey: 'contact.faq.phone.question',
    answerKey: 'contact.faq.phone.answer',
    defaultQ: 'Can I call to book a session?',
    defaultA: 'Absolutely! Call us at +31 20 123 4567 to speak with our team.'
  },
  {
    icon: MessageCircle,
    questionKey: 'contact.faq.response.question',
    answerKey: 'contact.faq.response.answer',
    defaultQ: 'How quickly will I get a response?',
    defaultA: 'We aim to respond to all inquiries within 24 hours.'
  }
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
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
              {t('contact.title') || 'Contact Us'}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('contact.subtitle') || 'Ready to start your HBOT journey? Get in touch for a free consultation.'}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t('science.faq.title') || 'Frequently Asked Questions'}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                      <AccordionTrigger className="flex items-center gap-2 text-left text-gray-900 hover:text-blue-600 py-4">
                        <item.icon className="h-5 w-5 text-blue-600" />
                        {t(item.questionKey) || item.defaultQ}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                        {t(item.answerKey) || item.defaultA}
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

export default Contact; 