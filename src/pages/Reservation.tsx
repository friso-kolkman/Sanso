import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Reservation = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleCalendlyClick = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/sanso/30min', '_blank');
  };

  return (
    <PageLayout
      title="Reservation - SANSO Amsterdam"
      description="Book your Hyperbaric Oxygen Therapy session at SANSO Amsterdam. Schedule your appointment online."
    >
      <div className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
              Book Your Session
            </h1>
            <p className="text-lg text-espresso max-w-2xl mx-auto">
              Schedule your Hyperbaric Oxygen Therapy session at SANSO Amsterdam. 
              Choose a time that works for you.
            </p>
          </div>

          {/* Calendly Widget */}
          <Card className="bg-stone shadow-soft border border-olive/30 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-ink">
                Select Your Appointment
              </CardTitle>
              <CardDescription className="text-espresso">
                Choose your preferred date and time for your HBOT session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/sanso/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              
              {/* Fallback button if Calendly doesn't load */}
              <div className="text-center mt-6">
                <Button 
                  onClick={handleCalendlyClick}
                  className="bg-clay hover:bg-forest text-cream"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Open Booking Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Session Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-stone shadow-soft border border-olive/30">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-ink flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-clay" />
                  Session Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-clay" />
                  <span className="text-espresso">60-90 minute sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-clay" />
                  <span className="text-espresso">2.0 ATA pressure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-clay" />
                  <span className="text-espresso">Professional guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-clay" />
                  <span className="text-espresso">Comfortable environment</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Info */}
          <Card className="bg-stone shadow-soft border border-olive/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-ink">
                Session Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-clay mb-2">€80</div>
                  <div className="text-espresso">Single Session</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clay mb-2">€350</div>
                  <div className="text-espresso">5-Session Package</div>
                  <Badge className="bg-amber/20 text-amber mt-2">Save €50</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-clay mb-2">€650</div>
                  <div className="text-espresso">10-Session Package</div>
                  <Badge className="bg-forest/20 text-forest mt-2">Save €150</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Reservation;
