import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) return true; // Phone is optional
    
    // E.164 format (international)
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    
    // Dutch local formats
    const dutchLocalRegex = /^(0[1-9][0-9]{8}|0[1-9][0-9]{7})$/;
    
    // Remove spaces and dashes for validation
    const cleanPhone = phone.replace(/[\s-]/g, '');
    
    return e164Regex.test(cleanPhone) || dutchLocalRegex.test(cleanPhone);
  };

  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }

    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = t('contact.phoneInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    }

    return newErrors;
  }, [formData, t]);

  const isFormValid = useMemo(() => {
    const validationErrors = validateForm();
    return Object.keys(validationErrors).length === 0;
  }, [validateForm]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Send to our serverless API which appends to Google Sheets
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: t('contact.success'),
        });
        setFormData({ email: '', phone: '', message: '' });
        setErrors({});
      } else {
        // Try to surface Formspree error details if available
        let details = '';
        try {
          const data = await response.json();
          if (data && data.error) {
            details = `: ${data.error}`;
          }
        } catch (_) {}
        throw new Error(`Form submission failed (${response.status})${details}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: t('contact.error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card id="form" className="max-w-md mx-auto shadow-soft bg-stone border border-olive/30">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif text-ink">
          {t('contact.title')}
        </CardTitle>
        <CardDescription className="text-espresso">
          {t('contact.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-labelledby="contact-form-title">
          <div>
            <Label htmlFor="email" className="text-ink">
              {t('contact.email')} <span className="text-danger" aria-label="required">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`mt-1 form-input ${errors.email ? 'border-danger' : ''}`}
              placeholder="your@email.com"
              required
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" className="text-danger text-sm mt-1" role="alert" aria-live="polite">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-ink">
              {t('contact.phone')} <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`mt-1 form-input ${errors.phone ? 'border-danger' : ''}`}
              placeholder="+31 6 12345678"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p id="phone-error" className="text-danger text-sm mt-1" role="alert" aria-live="polite">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-ink">
              {t('contact.message')} <span className="text-danger" aria-label="required">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`mt-1 form-input ${errors.message ? 'border-danger' : ''}`}
              placeholder={t('contact.messagePlaceholder') || t('contact.message')}
              rows={4}
              required
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p id="message-error" className="text-danger text-sm mt-1" role="alert" aria-live="polite">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-clay hover:bg-forest text-cream focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            disabled={isSubmitting || !isFormValid}
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'Verzenden...' : t('contact.submit')}
          </Button>
          
          <div className="text-center text-sm text-espresso mt-2" aria-live="polite">
            {isSubmitting ? (t('contact.sending') || 'Sending your message...') : (
              <>
                <span className="block">{t('contact.replyWithin')}</span>
                <span className="block opacity-80">{t('contact.privacyNote')}</span>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
