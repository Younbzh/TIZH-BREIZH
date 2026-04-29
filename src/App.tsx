import React from 'react';
import { Phone, Mail, Facebook, MapPin, Clock, Star, Heart, Check, Leaf, ChevronRight } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const valueIcons = {
  leaf: Leaf,
  star: Star,
  heart: Heart,
  check: Check,
};

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f2', fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background food truck */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/camion.jpg')" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(20,15,10,0.82) 0%, rgba(28,20,12,0.70) 60%, rgba(20,15,10,0.88) 100%)' }} />

        {/* Ermine dots decoration */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }} />

        <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-8 pt-10">
          {/* Logo */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 shadow-2xl"
            style={{ borderColor: '#c98c1a' }}>
            <img src="/logo.jpeg" alt="Logo Tizh Breizh" className="w-full h-full object-cover" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: '#c98c1a', color: '#1c1a17' }}>
            <span>Food Truck · Depuis octobre 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tight">
            TIZH<br />BREIZH
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-semibold max-w-xl" style={{ color: '#f5e6c3' }}>
            Galettes & Crêpes artisanales<br />
            <span style={{ color: '#c98c1a' }}>aux produits locaux</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{ background: '#c98c1a', color: '#1c1a17' }}
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: '#c98c1a', color: '#f5e6c3' }}
            >
              <Facebook className="w-5 h-5" />
              Suivre sur Facebook
            </a>
          </div>

          {/* Scroll hint */}
          <div className="pt-8 animate-bounce" style={{ color: '#c98c1a' }}>
            <ChevronRight className="w-6 h-6 rotate-90" />
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="#faf8f2" />
          </svg>
        </div>
      </header>

      {/* ── FORMULE BREIZH ──────────────────────────────────── */}
      <section className="py-10 text-center" style={{ background: '#1c1a17' }}>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#c98c1a' }}>La formule du moment</p>
          <div className="inline-flex items-center gap-6 px-10 py-5 rounded-2xl border-2" style={{ borderColor: '#c98c1a', background: 'rgba(201,140,26,0.08)' }}>
            <div>
              <span className="text-5xl font-black" style={{ color: '#c98c1a' }}>{siteConfig.formule.price}</span>
            </div>
            <div className="text-left text-white">
              <p className="text-xl font-black mb-1">{siteConfig.formule.name}</p>
              <p className="text-sm font-medium" style={{ color: '#f5e6c3' }}>
                {siteConfig.formule.includes.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTOIRE DE FLORIAN ──────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo camion */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#e8d09a' }}>
                <img src="/camion.jpg" alt="Le food truck Tizh Breizh" className="w-full h-80 lg:h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-full blur-3xl opacity-40" style={{ background: '#c98c1a' }} />
            </div>

            {/* Texte */}
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#c98c1a' }}>L'histoire</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: '#1c1a17' }}>
                De la mécanique<br />aux crêpes bretonnes
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#3d2b1f' }}>
                Florian Bodin travaillait dans la mécanique de précision chez BIC, à Redon. Quatre ans dans un univers bien éloigné de la restauration — jusqu'à ce que sa belle-famille lui transmette l'amour des galettes et crêpes.
              </p>
              <blockquote className="pl-5 py-1 text-lg italic font-semibold" style={{ borderLeft: '4px solid #c98c1a', color: '#3d2b1f' }}>
                "{siteConfig.founder.quote}"
              </blockquote>
              <p className="text-lg leading-relaxed" style={{ color: '#3d2b1f' }}>
                Il intègre alors <strong>l'Atelier de la crêpe à Saint-Malo</strong> pour se former sérieusement et décroche son <strong>Certificat de Qualification Professionnelle</strong>. En octobre 2025, Tizh Breizh prend la route autour de Redon.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "CQP · Atelier de la crêpe, Saint-Malo" },
                  { label: "Produits locaux" },
                  { label: "Lancé en oct. 2025" },
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ background: '#f5e6c3', color: '#3d2b1f' }}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ─────────────────────────────────────────── */}
      <section className="py-16" style={{ background: '#1c1a17' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.values.map((value, idx) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <div key={idx} className="rounded-2xl p-7 text-center space-y-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,140,26,0.2)' }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                    style={{ background: 'rgba(201,140,26,0.15)' }}>
                    <Icon className="w-7 h-7" style={{ color: '#c98c1a' }} />
                  </div>
                  <h3 className="font-black text-lg text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#a89880' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CARTE / TARIFS ───────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#c98c1a' }}>La carte</p>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: '#1c1a17' }}>Galettes & Crêpes</h2>
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Portrait — menu complet */}
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#e8d09a' }}>
              <img src="/tarifs-formules.jpeg" alt="Formules Tizh Breizh" className="w-full h-auto" />
            </div>
            {/* Paysage — tarifs */}
            <div className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#e8d09a' }}>
              <img src="/tarifs.jpeg" alt="Tarifs Tizh Breizh" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANNING ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#2b231a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#c98c1a' }}>Où nous trouver</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Planning de la semaine</h2>
          </div>

          {/* Image lieux-horaires si dispo */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 mb-10" style={{ borderColor: 'rgba(201,140,26,0.3)' }}>
            <img src="/lieux-horaires.jpeg" alt="Lieux et horaires Tizh Breizh" className="w-full h-auto object-contain" />
          </div>

          <div className="space-y-3">
            {siteConfig.schedule.map((slot, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,140,26,0.2)' }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-28 text-sm font-black uppercase" style={{ color: '#c98c1a' }}>{slot.day}</span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-white">
                    <Clock className="w-4 h-4" style={{ color: '#c98c1a' }} />
                    {slot.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#f5e6c3' }}>
                  <MapPin className="w-4 h-4" style={{ color: '#c98c1a' }} />
                  {slot.location}
                  <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(201,140,26,0.15)', color: '#c98c1a' }}>
                    {slot.dept}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASCOTTE LOKA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#faf8f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#c98c1a' }}>La mascotte</p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: '#1c1a17' }}>
                🐺 Loka vous accueille !
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#3d2b1f' }}>
                {siteConfig.mascotte.description}
              </p>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ background: '#c98c1a', color: '#1c1a17' }}
              >
                <Facebook className="w-5 h-5" />
                Suivre Loka sur Facebook
              </a>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#e8d09a' }}>
                <img src="/mascotte.jpeg" alt="Loka, mascotte de Tizh Breizh" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ background: '#c98c1a' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#1c1a17' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#c98c1a' }}>Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Une question ?<br />On vous répond.</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(201,140,26,0.1)', border: '1px solid rgba(201,140,26,0.3)', color: '#f5e6c3' }}
            >
              <Phone className="w-7 h-7" style={{ color: '#c98c1a' }} />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 break-all"
              style={{ background: 'rgba(201,140,26,0.1)', border: '1px solid rgba(201,140,26,0.3)', color: '#f5e6c3' }}
            >
              <Mail className="w-7 h-7" style={{ color: '#c98c1a' }} />
              <span className="text-sm">{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(201,140,26,0.1)', border: '1px solid rgba(201,140,26,0.3)', color: '#f5e6c3' }}
            >
              <Facebook className="w-7 h-7" style={{ color: '#c98c1a' }} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: '#100e0b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.jpeg" alt="Tizh Breizh" className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: '#c98c1a' }} />
              <div>
                <p className="font-black text-xl text-white">{siteConfig.name}</p>
                <p className="text-sm" style={{ color: '#a89880' }}>{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="text-center" style={{ color: '#a89880' }}>
              <p className="text-sm">&copy; {new Date().getFullYear()} {siteConfig.name} · Florian Bodin</p>
              <p className="text-xs mt-1">
                Site créé par{' '}
                <a href="https://mlle-cindy.fr" target="_blank" rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200 underline"
                  style={{ color: '#c98c1a' }}>
                  MlleCindy
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(201,140,26,0.15)', color: '#c98c1a' }}>
                <Phone className="w-5 h-5" />
              </a>
              <a href={siteConfig.contact.facebook} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(201,140,26,0.15)', color: '#c98c1a' }}>
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(90deg); }
          50% { transform: translateY(8px) rotate(90deg); }
        }
        .animate-bounce { animation: bounce 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App;
