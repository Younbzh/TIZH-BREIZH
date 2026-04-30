import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Tarifs() {
  const { formule } = siteConfig;

  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Tarifs"
        title="Ce que je propose"
        description="J'ai voulu quelque chose de simple et lisible. Pas de menu compliqué : une formule complète, et des produits faits avec soin."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6 md:col-span-1">
            <h3 className="text-sm font-semibold text-white">{formule.name}</h3>
            <p className="mt-1 text-3xl font-bold text-white">{formule.price}</p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-300">
              {formule.includes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-white/50">·</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
              C'est ma formule phare. Simple, généreuse, et faite maison.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Galette seule</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Pour ceux qui veulent juste une bonne galette de blé noir bien garnie.
              Je propose plusieurs garnitures selon les jours.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Crêpe seule</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Beurre-sucre, confiture, ou autre selon les disponibilités.
              Parfait pour finir sur une note sucrée.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="À savoir"
        title="Un mot sur la carte"
        description="Je prépare mes galettes et crêpes à la minute, avec des produits locaux. La carte peut légèrement varier selon les saisons et les producteurs avec qui je travaille. N'hésitez pas à me contacter pour en savoir plus."
      />
    </div>
  );
}

export default Tarifs;
