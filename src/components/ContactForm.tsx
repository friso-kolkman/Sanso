
import { useState, useMemo } from 'react';
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

  // Memoized validation state to prevent infinite loops
  const isFormValid = useMemo(() => {
    return formData.email.trim() && 
           validateEmail(formData.email) && 
           formData.message.trim() && 
           (formData.phone.trim() === '' || validatePhone(formData.phone));
  }, [formData]);

  const validateForm = (): boolean => {
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const functionUrl = import.meta.env.VITE_SUPABASE_FUNCTION_URL;
      
      if (!functionUrl) {
        throw new Error('VITE_SUPABASE_FUNCTION_URL not configured');
      }

      const response = await fetch(`${functionUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'ok') {
          toast({
            title: "Success!",
            description: t('contact.success'),
          });
          setFormData({ email: '', phone: '', message: '' });
          setErrors({});
        } else {
          throw new Error(result.reason || 'Failed to submit');
        }
      } else {
        throw new Error(`Server error: ${response.status}`);
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
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {t('contact.title')}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {t('contact.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-gray-700">
              {t('contact.email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your@email.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700">
              {t('contact.phone')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="+31 6 12345678"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700">
              {t('contact.message')}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
              placeholder={t('contact.message')}
              rows={4}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-black hover:bg-black/90"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? 'Verzenden...' : t('contact.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
