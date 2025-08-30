import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Euro, Package, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const pricingOptions = [
    {
      icon: Euro,
      title: t('pricing.card.single.title'),
      price: '€80',
      description: t('pricing.card.single.desc')
    },
    {
      icon: Package,
      title: t('pricing.card.package5.title'),
      price: '€350',
      description: t('pricing.card.package5.desc')
    },
    {
      icon: ShieldCheck,
      title: t('pricing.card.package10.title'),
      price: '€650',
      description: t('pricing.card.package10.desc')
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.title')}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('pricing.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="h-full"
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                      <option.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {option.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-blue-600 mt-2">{option.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {option.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white text-lg px-8 py-3">
              <a href="/contact">{t('pricing.cta')}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 