import React, { useEffect } from 'react';
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
    <div className="min-h-screen" style={{background: "linear-gradient(to bottom, #111827, #f3f4f6, #f9fafb)"}}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your HBOT Session
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the healing power of hyperbaric oxygen therapy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={handleCalendlyClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-800 text-lg px-8 py-4"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your HBOT Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 90-minute session includes a thorough intake consultation 
              followed by your hyperbaric oxygen therapy treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Session Overview */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="mr-3 h-6 w-6 text-gray-600" />
                  Session Details
                </CardTitle>
                <CardDescription>
                  What to expect during your visit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">30-minute Intake Consultation</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive health assessment and treatment planning
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">60-minute HBOT Treatment</h4>
                    <p className="text-sm text-gray-600">
                      Relaxing session in our state-of-the-art hyperbaric chamber
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Post-Treatment Consultation</h4>
                    <p className="text-sm text-gray-600">
                      Review of your session and recommendations for follow-up
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-3 h-6 w-6 text-gray-600" />
                  Visit Us
                </CardTitle>
                <CardDescription>
                  Located in the heart of Amsterdam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">SANSŌ Amsterdam</p>
                    <p className="text-sm text-gray-600">
                      [Address will be provided after booking]
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <p className="text-sm text-gray-600">+31 (0) 20 XXX XXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <p className="text-sm text-gray-600">info@sanso.amsterdam</p>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary" className="text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    Free parking available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendly Widget */}
          <div id="calendly-widget" className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Select Your Preferred Time
              </h3>
              <p className="text-lg text-gray-600">
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
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose SANSŌ Amsterdam?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Expert Care</h4>
                <p className="text-gray-600">
                  Our certified practitioners provide personalized treatment plans
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">State-of-the-Art</h4>
                <p className="text-gray-600">
                  Latest hyperbaric technology in a comfortable, safe environment
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Flexible Scheduling</h4>
                <p className="text-gray-600">
                  Book sessions that fit your schedule with easy online booking
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-xl mb-6 text-gray-200">
              Book your HBOT session today and experience the benefits of hyperbaric oxygen therapy
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-4"
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
