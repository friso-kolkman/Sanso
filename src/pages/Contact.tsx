import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <PageLayout
      title="Contact - SANSO Amsterdam"
      description="Get in touch with SANSO Amsterdam for your Hyperbaric Oxygen Therapy consultation. Book your session today."
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
