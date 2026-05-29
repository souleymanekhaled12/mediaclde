export default function Footer() {
  const CATEGORIES = ['Actualité', 'Politique', 'Sport', 'Société', 'International', 'Culture'];

  return (
    <footer className="bg-white border-t border-[#DEDBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
              Al<span className="text-[#C01D35]">.</span>Ibraima
            </h3>
            <p className="text-sm text-[#4A4A4A] mb-6">
              Plateforme d'information indépendante dédiée à l'actualité rigoureuse et à l'excellence éditoriale.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#F2F1EE] text-[#0D1B2A] flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white transition-colors text-sm font-bold"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#F2F1EE] text-[#0D1B2A] flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white transition-colors text-sm font-bold"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {/* Rubriques */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A] mb-6">
              Rubriques
            </h4>
            <nav className="flex flex-col gap-3">
              {CATEGORIES.slice(0, 3).map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors"
                >
                  {cat}
                </a>
              ))}
            </nav>
          </div>

          {/* Plus */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A] mb-6">
              Plus
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                À propos
              </a>
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                Publicité
              </a>
            </nav>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A] mb-6">
              Légal
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#C01D35] transition-colors">
                Cookies
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#DEDBD4] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7A7A]">
          <p>© 2026 Alassane Ibraima. Tous droits réservés.</p>
          <p className="mt-4 sm:mt-0">Fait avec ❤️ pour l'Afrique</p>
        </div>
      </div>
    </footer>
  );
}
