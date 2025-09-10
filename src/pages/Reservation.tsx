import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Phone, Mail, Star, CheckCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-sand">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-clay to-forest text-cream py-16 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              Book Your HBOT Session
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream/90">
              Experience the healing power of hyperbaric oxygen therapy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-cream text-clay hover:bg-cream/90 text-lg px-8 py-4"
                onClick={handleCalendlyClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cream text-cream hover:bg-cream hover:text-clay text-lg px-8 py-4"
                onClick={() => document.getElementById('calendly-widget')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Available Times
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
              Your HBOT Experience
            </h2>
            <p className="text-xl text-espresso max-w-3xl mx-auto">
              Our comprehensive 90-minute session includes a thorough intake consultation 
              followed by your hyperbaric oxygen therapy treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Session Overview */}
            <Card className="shadow-soft bg-stone border border-olive/30">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-serif text-ink">
                  <Clock className="mr-3 h-6 w-6 text-clay" />
                  Session Details
                </CardTitle>
                <CardDescription className="text-espresso">
                  What to expect during your visit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink">30-minute Intake Consultation</h4>
                    <p className="text-sm text-espresso">
                      Comprehensive health assessment and treatment planning
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink">60-minute HBOT Treatment</h4>
                    <p className="text-sm text-espresso">
                      Relaxing session in our state-of-the-art hyperbaric chamber
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-ink">Post-Treatment Consultation</h4>
                    <p className="text-sm text-espresso">
                      Review of your session and recommendations for follow-up
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Contact */}
            <Card className="shadow-soft bg-stone border border-olive/30">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-serif text-ink">
                  <MapPin className="mr-3 h-6 w-6 text-clay" />
                  Visit Us
                </CardTitle>
                <CardDescription className="text-espresso">
                  Located in the heart of Amsterdam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-espresso mr-3" />
                  <div>
                    <p className="font-medium text-ink">SANSŌ Amsterdam</p>
                    <p className="text-sm text-espresso">
                      [Address will be provided after booking]
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-espresso mr-3" />
                  <p className="text-sm text-espresso">+31 (0) 20 XXX XXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-espresso mr-3" />
                  <p className="text-sm text-espresso">info@sanso.amsterdam</p>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary" className="text-sm bg-amber/20 text-amber border-amber/30">
                    <Star className="h-4 w-4 mr-1" />
                    Free parking available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendly Widget */}
          <div id="calendly-widget" className="bg-stone rounded-2xl shadow-soft p-8 border border-olive/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-serif text-ink mb-4">
                Select Your Preferred Time
              </h3>
              <p className="text-lg text-espresso">
                Choose from available slots for your HBOT session
              </p>
            </div>
            
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/sanso/30min"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif text-ink mb-4">
                Why Choose SANSŌ Amsterdam?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-clay/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-clay" />
                </div>
                <h4 className="text-xl font-serif mb-2 text-ink">Expert Care</h4>
                <p className="text-espresso">
                  Our certified practitioners provide personalized treatment plans
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-clay/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-clay" />
                </div>
                <h4 className="text-xl font-serif mb-2 text-ink">State-of-the-Art</h4>
                <p className="text-espresso">
                  Latest hyperbaric technology in a comfortable, safe environment
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-clay/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-clay" />
                </div>
                <h4 className="text-xl font-serif mb-2 text-ink">Flexible Scheduling</h4>
                <p className="text-espresso">
                  Book sessions that fit your schedule with easy online booking
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-clay to-forest rounded-2xl p-8 text-center text-cream">
            <h3 className="text-3xl font-serif mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-xl mb-6 text-cream/90">
              Book your HBOT session today and experience the benefits of hyperbaric oxygen therapy
            </p>
            <Button 
              size="lg" 
              className="bg-cream text-clay hover:bg-cream/90 text-lg px-8 py-4"
              onClick={handleCalendlyClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Session Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
