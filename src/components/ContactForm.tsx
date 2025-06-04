
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageSquare } from 'lucide-react';

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
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // RFC 5322 compliant email regex (simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  // E.164 format (+country code) or Dutch local format
  const phoneRegex = /^(\+[1-9]\d{1,14}|0[1-9]\d{8})$/;

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'email':
        if (!value) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (!value) return 'Phone number is required';
        if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
          return 'Please enter a valid phone number (E.164 format or Dutch local)';
        }
        break;
      case 'message':
        if (!value) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        break;
      default:
        return undefined;
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isFormValid = () => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key as keyof FormData, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) return;

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
            description: "Thanks, we'll reach out within 24 hours!",
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
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.values(errors).some(error => error);
  const isFormEmpty = Object.values(formData).some(value => !value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
          <CardDescription className="text-gray-600">
            Ready to start your healing journey? Get in touch with our team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="+31 6 12345678 or 06 12345678"
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="h-4 w-4" />
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={errors.message ? 'border-red-500' : ''}
                placeholder="Tell us about your health goals and how we can help..."
                rows={4}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={hasErrors || isFormEmpty || isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
