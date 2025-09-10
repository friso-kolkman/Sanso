import { Euro, Package, ShieldCheck } from 'lucide-react';

export interface PricingOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  description: string;
}

export const createPricingOptions = (t: (key: string) => string): PricingOption[] => [
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
