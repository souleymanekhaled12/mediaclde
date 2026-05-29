# Ligne Rouge - Alassane Ibraima

## 🎯 Plateforme Média Numérique Premium

**Ligne Rouge** est une plateforme d'information indépendante dédiée à l'actualité rigoureuse, couvrant la politique, le sport, la culture et les enjeux internationaux avec un focus particulier sur l'Afrique de l'Ouest.

---

## 🏗️ Architecture Technique

### Stack Technologique
- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS 4 + Design tokens personnalisés
- **Routing** : Wouter (client-side)
- **UI Components** : shadcn/ui
- **Fonts** : Playfair Display (titres) + Source Sans 3 (corps) + Source Serif 4 (accents)
- **Build** : Vite + pnpm

### Structure du Projet
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation, ticker, search
│   │   ├── Hero.tsx            # Article principal + sidebar
│   │   ├── Trending.tsx        # Grille d'articles
│   │   ├── Newsletter.tsx      # Formulaire abonnement
│   │   ├── Footer.tsx          # Pied de page
│   │   └── ArticleDetail.tsx   # Vue article complet
│   ├── pages/
│   │   └── Home.tsx            # Page d'accueil principale
│   ├── lib/
│   │   ├── i18n.ts            # Configuration multilingue (FR/EN)
│   │   └── seo.ts             # Métadonnées SEO et structured data
│   ├── index.css              # Design tokens et styles globaux
│   └── App.tsx                # Routeur et ThemeProvider
├── public/
│   ├── robots.txt             # SEO crawling directives
│   └── manifest.json          # PWA configuration
└── index.html                 # Métadonnées SEO complètes
```

---

## 🎨 Design Philosophy

### Modernisme Éditorial Minimaliste

La plateforme suit une philosophie de design minimaliste éditorial inspirée par les grands journaux numériques (The Guardian, Financial Times).

**Principes clés** :
- **Typographie comme structure** : Hiérarchie claire via tailles et poids
- **Espace blanc stratégique** : Respiration maximale, marges généreuses
- **Neutralité élégante** : Palette noir/blanc/gris avec accent rouge vif
- **Accessibilité absolue** : Contraste maximal, lisibilité prioritaire

### Palette de Couleurs
| Couleur | Hex | Utilisation |
|---------|-----|------------|
| Noir profond | #0D1B2A | Texte principal, navigation |
| Blanc pur | #FFFFFF | Fond, cartes |
| Rouge vif | #C01D35 | Accents, badges, CTA |
| Crème | #F2F1EE | Fonds secondaires |
| Gris moyen | #7A7A7A | Texte secondaire |
| Gris clair | #DEDBD4 | Bordures, séparateurs |

### Typographie
- **Titres** : Playfair Display (serif, 700-800)
- **Corps** : Source Sans 3 (sans-serif, 400-600)
- **Accents** : Source Serif 4 (serif, 400 italic)

---

## 🌍 Internationalisation (i18n)

La plateforme supporte plusieurs langues via le système `i18n.ts` :

**Langues supportées** :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais

**Utilisation** :
```typescript
import { getLanguage, t } from '@/lib/i18n';

const lang = getLanguage();
const title = t(lang, 'trending.title'); // "À la une"
```

---

## 📱 Responsive Design

La plateforme est optimisée pour tous les appareils :

| Breakpoint | Tailwind | Utilisation |
|-----------|----------|------------|
| Mobile | < 640px | Navigation mobile, grille 1 colonne |
| Tablet | 640px - 1024px | Grille 2 colonnes |
| Desktop | > 1024px | Grille 3-4 colonnes, sidebar |

---

## 🔍 SEO & Performance

### Optimisations SEO
- ✅ Métadonnées OpenGraph complètes
- ✅ Structured Data (Schema.org NewsMediaOrganization)
- ✅ Twitter Card support
- ✅ robots.txt et sitemap configuration
- ✅ Preconnect pour les ressources externes
- ✅ Image optimization avec lazy loading
- ✅ Semantic HTML5

### Performance
- ✅ Images générées haute qualité (WebP + PNG)
- ✅ Lazy loading des images
- ✅ CSS minification automatique
- ✅ Code splitting via Vite
- ✅ Caching headers optimisés

### Accessibilité (WCAG AA)
- ✅ Contraste minimum 4.5:1 pour le texte
- ✅ Navigation au clavier complète
- ✅ ARIA labels et roles
- ✅ Focus indicators visibles
- ✅ Alt text sur toutes les images

---

## 📰 Contenu & Articles

### Structure Article
```typescript
interface Article {
  id: number;
  title: string;           // Titre principal
  subtitle: string;        // Sous-titre éditorial
  category: string;        // Politique, Sport, Culture, etc.
  date: string;           // Date de publication
  readTime: string;       // Temps de lecture estimé
  image: string;          // URL image haute qualité
  body: string;           // Contenu article
}
```

### Catégories
- 📰 Actualité
- 🏛️ Politique
- ⚽ Sport
- 👥 Société
- 🌍 International
- 🎭 Culture

---

## 🚀 Déploiement

### Build Production
```bash
pnpm run build
```

### Preview Local
```bash
pnpm run dev
```

### Déploiement sur Manus
1. Créer un checkpoint : `webdev_save_checkpoint`
2. Cliquer le bouton "Publish" dans l'interface
3. Le site est automatiquement déployé sur `alassaneibraima.manus.space`

---

## 🔧 Configuration & Secrets

### Variables d'Environnement
Les variables suivantes sont injectées automatiquement par Manus :
- `VITE_ANALYTICS_ENDPOINT` - Endpoint analytics
- `VITE_ANALYTICS_WEBSITE_ID` - ID website analytics
- `VITE_APP_ID` - Application ID
- `VITE_APP_TITLE` - Titre application

---

## 📊 Statistiques & Analytics

La plateforme intègre Umami Analytics pour suivre :
- Visiteurs uniques
- Pages vues
- Durée de session
- Articles populaires
- Taux de conversion newsletter

---

## 🎯 Feuille de Route Future

### Court terme (1-2 mois)
- [ ] Système de commentaires
- [ ] Partage social amélioré
- [ ] Sauvegarde articles favoris
- [ ] Notifications push

### Moyen terme (3-6 mois)
- [ ] Backend avec base de données
- [ ] Système d'authentification utilisateur
- [ ] Gestion de contenu (CMS)
- [ ] Support du live streaming
- [ ] Podcasts intégrés

### Long terme (6+ mois)
- [ ] Application mobile native
- [ ] Édition papier digitale
- [ ] Abonnements premium
- [ ] Marketplace de contenus
- [ ] Partenariats médias internationaux

---

## 📞 Support & Contact

**Email** : contact@alassaneibraima.com
**Twitter** : @alassaneibraima
**Facebook** : facebook.com/alassaneibraima

---

## 📄 Licence

© 2026 Alassane Ibraima. Tous droits réservés.

Plateforme développée avec ❤️ pour l'Afrique.
