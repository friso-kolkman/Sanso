import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { createPricingOptions } from '@/data/pricing';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();
  const pricingOptions = createPricingOptions(t);

  return (
    <PageLayout
      title="Pricing - SANSŌ Amsterdam"
      description="Transparent pricing for Hyperbaric Oxygen Therapy sessions at SANSŌ Amsterdam. Choose the package that fits your needs."
    >
      <div className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
              {t('pricing.title')}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-espresso leading-relaxed">
                {t('pricing.subtitle')}
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`bg-stone shadow-soft border border-olive/30 hover:shadow-lg transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-clay scale-105' : ''
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-clay/20 text-clay rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-ink">
                    {option.title}
                  </CardTitle>
                  <div className="text-4xl font-bold text-clay mt-2">
                    {option.price}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-espresso mb-6">
                    {option.description}
                  </CardDescription>
                  <Button 
                    className={`w-full ${
                      index === 1 
                        ? 'bg-clay hover:bg-forest text-cream' 
                        : 'bg-stone border border-clay text-clay hover:bg-clay hover:text-cream'
                    }`}
                  >
                    {t('pricing.cta')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-stone rounded-2xl p-8 shadow-soft border border-olive/30">
            <h3 className="text-2xl font-serif text-ink mb-6 text-center">
              {t('pricing.info.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-clay mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ink mb-2">
                    {t('pricing.info.included.title')}
                  </h4>
                  <p className="text-espresso">
                    {t('pricing.info.included.desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-clay mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ink mb-2">
                    {t('pricing.info.flexible.title')}
                  </h4>
                  <p className="text-espresso">
                    {t('pricing.info.flexible.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;
