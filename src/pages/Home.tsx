import ColdOpen from '../components/ColdOpen';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import Section from '../components/Section';

function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <ColdOpen />
      <Hero />
      <TrustSignals />

      <Section
        eyebrow="Ma carte"
        title="Ce que je vous propose"
        description="Je prépare des galettes de blé noir et des crêpes à la minute, avec des ingrédients que je sélectionne moi-même chez des producteurs de la région."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Galettes de blé noir</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Je les garnis généreusement avec des produits de qualité : complète, champignons, saumon...
              Une vraie galette salée, comme on les aime en Bretagne.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Crêpes sucrées</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Beurre-sucre, confiture, Nutella... Mes crêpes viennent clore le repas en douceur.
              Légères, dorées, et faites à la minute.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">La Formule Breizh – 10€</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              1 galette + 1 crêpe + 1 boisson. C'est ma formule phare : simple, généreuse, et faite maison.
              Pour bien manger sans se compliquer la vie.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ma tournée"
        title="Où me retrouver chaque semaine"
        description="Je sillonne les communes autour de Redon, en Loire-Atlantique et en Ille-et-Vilaine. Voilà où je suis en général :"
      >
        <div className="glass p-7 md:p-8 rose-halo">
          <ol className="space-y-3 text-sm text-neutral-300 leading-relaxed list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">Mardi soir :</span>{' '}
              Avessac (44)
            </li>
            <li>
              <span className="font-semibold text-white">Mercredi en journée :</span>{' '}
              Renac (35)
            </li>
            <li>
              <span className="font-semibold text-white">Jeudi 17h30 – 21h00 :</span>{' '}
              Massérac · Sous les halles (44)
            </li>
            <li>
              <span className="font-semibold text-white">Vendredi midi :</span>{' '}
              Redon · Paul &amp; Joseph (35)
            </li>
            <li>
              <span className="font-semibold text-white">Vendredi soir :</span>{' '}
              Sainte-Marie (44)
            </li>
            <li>
              <span className="font-semibold text-white">Samedi midi &amp; soir :</span>{' '}
              Redon (35)
            </li>
          </ol>
        </div>
      </Section>
    </div>
  );
}

export default Home;
