import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useArticles } from '@/contexts/ArticlesContext';

interface HeaderProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

const CATEGORIES = ['Accueil', 'Actualité', 'Politique', 'Sport', 'Société', 'International', 'Culture'];

export default function Header({ onCategoryChange, currentCategory }: HeaderProps) {
  const { publishedArticles } = useArticles();
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tickerItems = publishedArticles.slice(0, 6).map(a => a.title);

  return (
    <>
      {/* Ticker */}
      <div className="bg-[#0D1B2A] h-10 overflow-hidden flex items-center">
        <div className="bg-[#C01D35] text-white text-xs font-bold uppercase tracking-wider px-3 py-2 whitespace-nowrap flex-shrink-0">
          Flash Info
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-6 text-[#E8E4DC] text-sm font-medium">
                <div className="w-1 h-1 bg-[#C01D35] rounded-full flex-shrink-0"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#DEDBD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#0D1B2A]">
                Al<span className="text-[#C01D35]">.</span>Ibraima
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat === 'Accueil' ? 'all' : cat)}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    (cat === 'Accueil' && currentCategory === 'all') || currentCategory === cat
                      ? 'text-[#0D1B2A] border-b-2 border-[#C01D35]'
                      : 'text-[#4A4A4A] hover:text-[#0D1B2A] hover:bg-[#F2F1EE]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-[#4A4A4A] hover:text-[#0D1B2A] transition-colors"
                aria-label="Rechercher"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 text-[#4A4A4A] hover:text-[#0D1B2A] transition-colors"
                aria-label="Menu"
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden pb-4 border-t border-[#DEDBD4]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onCategoryChange(cat === 'Accueil' ? 'all' : cat);
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[#4A4A4A] hover:text-[#0D1B2A] hover:bg-[#F2F1EE] transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Search Overlay */}
      {showSearch && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full px-4 py-3 border-2 border-[#DEDBD4] rounded-sm focus:border-[#C01D35] focus:outline-none text-[#0D1B2A]"
            />
            {searchQuery && (
              <div className="mt-4 max-h-60 overflow-y-auto">
                {publishedArticles
                  .filter(a =>
                    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    a.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map(a => (
                    <div key={a.id} className="py-2 px-3 hover:bg-[#F2F1EE] rounded-sm cursor-pointer">
                      <p className="text-sm font-semibold text-[#0D1B2A]">{a.title}</p>
                      <p className="text-xs text-[#7A7A7A]">{a.category} · {a.date}</p>
                    </div>
                  ))}
              </div>
            )}
            <button
              onClick={() => setShowSearch(false)}
              className="mt-3 text-xs text-[#7A7A7A] hover:text-[#0D1B2A] flex items-center gap-2"
            >
              ✕ Fermer
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
