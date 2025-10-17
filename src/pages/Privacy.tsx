import PageLayout from '@/components/PageLayout';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <PageLayout
      title="Privacyverklaring — SANSO Amsterdam"
      description="Hoe SANSO Amsterdam omgaat met persoonsgegevens"
      url="https://sanso.amsterdam/privacy"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif text-ink mb-6">Privacyverklaring</h1>
        <p className="text-espresso mb-4">
          Deze privacyverklaring beschrijft hoe <strong>SANSO Amsterdam</strong> persoonsgegevens verwerkt wanneer je ons contactformulier gebruikt of je aanmeldt voor de wachtlijst.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Verwerkingsverantwoordelijke</h2>
        <p className="text-espresso">SANSO Amsterdam — e‑mail: info@sanso.amsterdam</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Welke gegevens</h2>
        <p className="text-espresso">Naam (indien ingevuld), e‑mail, telefoon (optioneel), en het bericht dat je zelf invoert.</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Doeleinden en grondslag</h2>
        <ul className="list-disc pl-6 text-espresso space-y-2">
          <li>Contact opnemen en vragen beantwoorden (gerechtvaardigd belang / pre‑contractueel).</li>
          <li>Wachtlijst en intake-afspraken plannen (gerechtvaardigd belang / pre‑contractueel).</li>
          <li>Marketing e‑mails alleen met voorafgaande toestemming (opt‑in).</li>
        </ul>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Ontvangers/verwerkers</h2>
        <p className="text-espresso mb-2">We schakelen de volgende partijen in als verwerker, met een verwerkersovereenkomst (DPA):</p>
        <ul className="list-disc pl-6 text-espresso space-y-2">
          <li><strong>Vercel</strong> (hosting van de website).</li>
          <li><strong>Google Workspace</strong> (e‑mail en kantoortools).</li>
          <li><strong>SheetMonkey of Google Sheets</strong> (opslag van aanmeldingen voor de wachtlijst, afhankelijk van configuratie).</li>
          <li><strong>E‑mailprovider</strong> (verzenden/ontvangen van e‑mail).</li>
        </ul>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Bewaartermijn</h2>
        <p className="text-espresso">Leads en contactverzoeken bewaren we maximaal 12 maanden, tenzij een klantrelatie ontstaat of je om eerdere verwijdering verzoekt.</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Jouw rechten</h2>
        <p className="text-espresso">Je hebt recht op inzage, rectificatie, verwijdering, beperking en bezwaar. Mail ons via <a href="mailto:info@sanso.amsterdam" className="underline">info@sanso.amsterdam</a>.</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Bijzondere persoonsgegevens</h2>
        <p className="text-espresso">Vermijd het delen van medische details in het vrije tekstveld. Wij vragen daar niet om en verwerken dergelijke informatie niet doelbewust. Indien dergelijke informatie onverhoopt wordt gedeeld, beperken we de verwerking tot afhandeling van je verzoek en verwijderen of anonimiseren we deze zo snel mogelijk.</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Beveiliging</h2>
        <p className="text-espresso">Wij treffen passende technische en organisatorische maatregelen om je gegevens te beschermen.</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Contact & klachten</h2>
        <p className="text-espresso">Vragen of verzoeken? Neem contact op via <a href="mailto:info@sanso.amsterdam" className="underline">info@sanso.amsterdam</a>. Je hebt het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Privacy;


