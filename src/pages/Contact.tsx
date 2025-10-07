import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title="Contact - SANSO Amsterdam"
      description={t('contact.subtitle')}
    >
      <div className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
              {t('contact.title') || 'Contact Us'}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-espresso leading-relaxed">
                {t('contact.subtitle') || 'Ready to start your HBOT journey? Get in touch for a free consultation.'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-6">
            {/* Bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm">
              <li className="rounded-2xl px-4 py-3 border text-center bg-clay/15 text-clay border-clay/30 shadow-soft hover:shadow-md transition-shadow">
                {t('contact.bullets.priority')}
              </li>
              <li className="rounded-2xl px-4 py-3 border text-center bg-forest/15 text-forest border-forest/30 shadow-soft hover:shadow-md transition-shadow">
                {t('contact.bullets.intake')}
              </li>
              <li className="rounded-2xl px-4 py-3 border text-center bg-amber/15 text-amber border-amber/30 shadow-soft hover:shadow-md transition-shadow">
                {t('contact.bullets.updates')}
              </li>
            </ul>
          </div>
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="shadow-soft bg-stone border border-olive/30">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
