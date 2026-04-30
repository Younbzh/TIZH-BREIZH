import Section from '../components/Section';

function Infos() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Mon histoire"
        title="De la mécanique aux crêpes"
        description="Je m'appelle Florian Bodin, je suis originaire de Sainte-Marie (44). Pendant 4 ans, j'ai travaillé comme mécanicien de précision chez BIC à Redon."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Comment ça a commencé</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Ma belle-famille avait l'habitude de cuisiner des galettes et des crêpes.
              J'ai eu envie d'apprendre. Ce qui a commencé comme une passion est devenu mon projet professionnel.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Une formation sérieuse</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Je me suis formé à l'Atelier de la crêpe de Saint-Malo, où j'ai obtenu mon CQP
              (Certificat de Qualification Professionnelle). En octobre 2025, j'ai lancé Tizh Breizh.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ma philosophie"
        title="Ce qui compte pour moi"
        description="Je n'ai pas ouvert un food truck pour faire comme tout le monde. J'ai des convictions sur la qualité, les produits et la façon de bien recevoir les gens."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Produits locaux</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Je sélectionne mes ingrédients chez des producteurs de la région.
              Je préfère payer un peu plus cher pour un produit que je connais et que je respecte.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Fait à la minute</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Chaque galette, chaque crêpe est préparée au moment où vous la commandez.
              Je ne fais pas dans le réchauffé. C'est artisanal, et ça se voit.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Accueil chaleureux</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Je suis de la région, et j'aime bien prendre le temps d'échanger.
              Mon food truck, c'est un endroit simple où l'on se sent bien.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Infos;
