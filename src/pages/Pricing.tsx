import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { createPricingOptions } from '@/data/pricing';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();
  const pricingOptions = createPricingOptions(t);

  return (
    <PageLayout
      title="Pricing - SANSO Amsterdam"
      description="Transparent pricing for Hyperbaric Oxygen Therapy sessions at SANSO Amsterdam. Choose the package that fits your needs."
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
                className={`h-full flex flex-col bg-stone shadow-soft border border-olive/30 hover:shadow-lg transition-all duration-300 ${
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
                <CardContent className="text-center mt-auto flex flex-col">
                  <CardDescription className="text-espresso mb-6">
                    {option.description}
                  </CardDescription>
                  <Link to="/reservation"><Button 
                    className={`mt-auto w-full ${
                      index === 1 
                        ? 'bg-clay hover:bg-forest text-cream' 
                        : 'bg-stone border border-clay text-clay hover:bg-clay hover:text-cream'
                    }`}
                  >
                    {t('pricing.cta')}
                  </Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;
