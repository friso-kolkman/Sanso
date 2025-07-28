
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white text-lg px-8 py-3"
              >
                <a href="#contact">{t('hero.cta')}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HBOT voordelen blok */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Voordelen</h2>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Wetenschappelijk bewezen voordelen van HBOT<br />
            Bij HBOT Amsterdam richten we ons op echte, meetbare resultaten van hyperbare zuurstoftherapie, ondersteund door uitgebreid medisch onderzoek.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cognitieve functie */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Verbeterde Cognitieve Functie</h3>
              <p className="text-gray-700">Beter geheugen, focus en mentale helderheid door optimale zuurstofvoorziening en neuroplasticiteit.</p>
            </div>
            {/* Hart & vaten */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.657-1.343-3-3-3z" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cardiovasculaire Optimalisatie</h3>
              <p className="text-gray-700">Sterker hart, betere doorbloeding en meer zuurstof naar vitale organen.</p>
            </div>
            {/* Celregeneratie */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-green-700 text-white rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cellulaire Regeneratie</h3>
              <p className="text-gray-700">Versnelde genezing en verbeterde celherstelmechanismen voor optimaal herstel.</p>
            </div>
            {/* Anti-aging */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Anti-Aging Voordelen</h3>
              <p className="text-gray-700">Minder oxidatieve stress, gezondere huid en meer vitaliteit op lange termijn.</p>
            </div>
            {/* Immuunsysteem */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Immuunsysteem Ondersteuning</h3>
              <p className="text-gray-700">Sterkere afweer en betere natuurlijke bescherming tegen ziekte.</p>
            </div>
            {/* Levensduur */}
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm flex flex-col items-start">
              <div className="bg-green-700 text-white rounded-full p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3" /></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Levensduur Verlenging</h3>
              <p className="text-gray-700">Langere gezondheidsspanne door geoptimaliseerde celwerking en mitochondriale prestaties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nederlandse call-to-action onder de blokken */}
      <section className="py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-center text-gray-700 mb-3 max-w-2xl mx-auto">
            Ervaar deze voordelen met onze geavanceerde zit-hyperbare kamer, die kan pressuriseren tot 2.0 ATA
          </p>
          <div className="flex justify-center mt-2">
            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white font-semibold px-6 py-2 rounded-md shadow">
              <a href="/pricing">Bekijk prijzen & pakketten</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials blok */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Ervaringen van onze cliënten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Anna Jansen'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Anna Jansen</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>2 weken geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Herstel</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Na mijn behandeling voelde ik me energieker dan ooit. De persoonlijke aandacht en professionele begeleiding waren top!”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Post operatief herstel</span>
            </article>
            {/* Testimonial 2 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Mark de Vries'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Mark de Vries</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>1 maand geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-700">Energie</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“De sessies hebben mijn herstel na een blessure enorm versneld. Ik raad HBOT Amsterdam aan iedereen aan!”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Sport Blessure</span>
            </article>
            {/* Testimonial 3 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Sophie Willems'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Sophie Willems</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>3 maanden geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">Sport</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Ik merkte al na een paar sessies verschil in mijn energie en herstel. Fijne sfeer en deskundig team.”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Chronische vermoeidheid</span>
            </article>
            {/* Testimonial 4 */}
            <article className="rounded-2xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col" tabIndex={0} aria-label='Testimonial van Peter van Leeuwen'>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-900 mr-2">Peter van Leeuwen</span>
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700" title="Geverifieerde cliënt">✔ Geverifieerd</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>1 week geleden</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1l-1.45-1.32C19.16 9.09 18.6 8.5 18.6 7.77V5.5C18.6 3.57 17.03 2 15.1 2H8.9C6.97 2 5.4 3.57 5.4 5.5v2.27c0 .73-.56 1.32-1.3 2.01L2.65 11.1c-.78.71-.88 1.92-.22 2.7.66.78 1.87.88 2.65.17l1.45-1.32c.74-.67 1.3-1.26 1.3-1.99V5.5c0-.83.67-1.5 1.5-1.5h6.2c.83 0 1.5.67 1.5 1.5v5.76c0 .73.56 1.32 1.3 1.99l1.45 1.32c.78.71 1.99.61 2.65-.17.66-.78.56-1.99-.22-2.7z"/></svg>Google</span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">Welzijn</span>
              </div>
              <p className="text-gray-800 text-base mb-2">“Zeer prettige ervaring! De uitleg was duidelijk en ik voelde me direct op mijn gemak. Absolute aanrader.”</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium w-auto">Slaapstoornis</span>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
