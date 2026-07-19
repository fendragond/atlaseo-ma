# ATLASEO.ma — Project Brief

> **Ce document fait partie d'un système à 3 documents.**
> - **`ATLASEO_strategy.md`** — vision, positionnement, pricing, plan 12 mois (master doc business)
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation (applicable à tous les projets)
> - **`atlaseo-ma_brief.md`** — ce fichier. Projet du site ATLASEO.ma en cours.
>
> **Hiérarchie** : ce brief hérite des deux autres. Pour les décisions de stratégie ou de méthode, ne pas re-débattre ici — référer aux docs parents. Ce brief contient uniquement les décisions spécifiques au projet ATLASEO.ma.
>
> **Purpose**: Single source of truth for building ATLASEO.ma in Astro. Cursor works from this file exclusively — no re-deriving decisions.
> **Generated from**: Stitch mockup (5 pages + design system) + project context document.
> **Created**: 2026-05-17
> **Last updated**: 2026-07-19 — v2.2
>
> **Session log:**
> - 2026-05-17 — Brief generated from Stitch mockup.
> - 2026-05-18 — Repo created, Astro scaffold, Tailwind v4, 7 pages built.
> - 2026-05-19 — QA rounds 1–5, images WebP, Lighthouse desktop 90+.
> - 2026-05-21 — Images intégrées, mobile test passed, a11y 100. Cloudflare adapter supprimé, wrangler deploy réussi. LCP desktop 1.1s, mobile 3.2s.
> - 2026-05-22 — Git tree cleaned, .gitignore updated, deployment protocol documenté.
> - 2026-05-25 — Strategy doc produit, réorganisation 3-docs, quick wins SEO identifiés Phase 1.
> - 2026-06-03 — Quick wins SEO lot 1 (commit df638a6) : LocalBusiness schema, BreadcrumbList x4, meta descriptions 📞, CNDP/RGPD, section low-cost. Validé schema.org 0 erreur. Docs remis à la racine.
> - 2026-06-05 — Enrichissement sémantique /creation-site-web : section "Pourquoi Cloudflare change tout" (3 cartes + bannière), section "Méthode ATLASEO" (3 piliers numérotés), FAQ x11 + FAQPage schema JSON-LD. Fix FAQ accordion arrow (JS toggle). Fix footer label "Visibilité Locale". Commit: feat: creation-site-web semantic enrichment.
> - 2026-06-05 — Enrichissement sémantique /offres : section "Comprendre la tarification" (3 tiers marché web Maroc, 4 composantes devis), guide de décision 5 profils, section transparence "Ce qui n'est pas inclus" (6 items, icône close rouge), FAQ x11 + FAQPage schema JSON-LD. Suppression section Benchmark Maroc (redondante).
> - 2026-06-07 — Homepage conversion phase 2 : FAQ accueil x10 + FAQPage schema (commit 4b8abba), trust strip card Dr Yousra El Khadri (CAS CLIENT badge, format_quote ornament, dryousra.ma link, no stars), sticky mobile bottom CTA bar (WhatsApp + Devis gratuit, scroll-triggered, md:hidden). Branch feat/homepage-conversion mergée sur main et déployée.
> - 2026-06-09 — Logo et favicon intégrés. 5 variantes PNG (transparent, rognées) dans `public/images/logos/`. Favicons (16/32/48/180/192/512 + .ico) dans `public/`. Navbar : `atlaseo-logo-horizontal.png` à `h-10`. Footer : `atlaseo-logo-stacked.png` à `h-16`. SchemaOrg Organization logo mis à jour. Commits : 889add9, b326c9e + fix crop.
> - 2026-06-09 — Contact page enrichment : nouvelle section "À propos d'ATLASEO" (logo h-56 + motto "Pensé local. Indexé global.", narrative agence, carte fondateur Fahd D. + fondateur.webp, 3 piliers Notre approche). Reorder sections : About → Expertise de proximité → Contact Channels. Contact Channels restructuré en full-width WhatsApp + grille 3 colonnes (Email, Phone, Support client). Carte Infrastructure Cloudflare supprimée. Support client simplifié. Tags audience (PME, Commerces, Professions Libérales) supprimés. Copy "Expertise de proximité" élargie.
> - 2026-06-10 — Homepage collaboration stepper : nouvelle section interactive "Comment on travaille ensemble" entre Stratégie Data et Pricing Preview. Carte blanche avec stepper 3 phases (Comprendre / Construire / Faire grandir), SVG animés par phase (loupe + site, wireframe qui se construit, graphe ascendant), barre de progression avec auto-advance 5s, progress ring, nœuds cliquables avec icônes Material Symbols, crossfade desktop / show-hide mobile. Composant : `src/components/CollaborationStepper.astro`.
> - 2026-07-10 — Domaine atlaseo.ma activé sur Cloudflare. Zone DNS nettoyée (suppression des records cPanel du registrar). Custom domain sur le Worker atlaseo-ma. Redirect www → apex (Custom filter expression, http.host eq "www.atlaseo.ma", 301). Always Use HTTPS activé. Vérifié : https://atlaseo.ma répond 200 sans saut, https://www.atlaseo.ma un seul 301. Site live en production.
> - 2026-07-10 — Coordonnées réelles intégrées : contact@atlaseo.ma (remplace support@atlaseo.ma partout), téléphone +212 7 00 50 84 45 (affichage, tel:, JSON-LD), WhatsApp https://wa.me/212700508445. Profils sociaux officiels dans sameAs et footer : LinkedIn /company/atlaseo, Instagram /atlaseo.ma.
> - 2026-07-18/19 — Performance production : audit PSI mobile (Perf 73, FCP 4.1s, LCP 4.8s), diagnostic render-blocking Material Symbols CDN (780ms + 213KB). Fix : subset Material Symbols self-hosted, images redimensionnées (dev-setup, logos, hero-mobile, portrait), compteurs animés avec valeurs finales en HTML statique (commit 42b2a79). Résultat : Perf 99/100, LCP 1.8s, FCP 1.5s. Pages légales créées (/mentions-legales, /confidentialite, noindex, hors sitemap) — jamais commitées auparavant, contenu rédigé (éditeur Fahd Daoudi, auto-entrepreneur, Casablanca). Fix meta description /creation-site-web (7 → 14 jours). GSC : propriété domaine vérifiée (DNS TXT), sitemap-index.xml soumis (5 URLs validées), erreur de redirection transitoire diagnostiquée via Test en ligne, 5 demandes d'indexation envoyées après tests live verts. Footer : section Société déplacée sous le bloc brand, Services repositionné, effet lift + vert au hover sur les icônes et liens sociaux.
>
> **Pending (next session):**
> - [x] Lighthouse production sur URL réelle (https://atlaseo.ma)
> - [x] LCP mobile (3.2s → objectif <2.5s) — preload image hero mobile
> - [x] Google Search Console : verify DNS TXT + soumission sitemap + URL Inspection sur les 5 pages
> - [ ] GA4 property + tracking code vérifié
> - [ ] Cloudflare Web Analytics activé
> - [ ] Google Business Profile création + lien site
> - [ ] Email : forwarder cPanel → Gmail + configuration send-as (séance dédiée)
> - [ ] GitHub Action auto-deploy sur push to main (le domaine est maintenant configuré)

## 1. Site Overview

- **Domain**: atlaseo.ma
- **Type**: Showcase site / landing page for ATLASEO — a web creation and SEO agency
- **Language**: French (single language, no i18n)
- **Pages**: 5 content pages + legal/utility (see §3)
- **CTA model**: Option A — WhatsApp link, click-to-call, mailto. No form backend. Floating WhatsApp button on all pages.
- **Canonical format**: `https://atlaseo.ma/page` (no www, no trailing slash, no .html)
- **This site is also template v1** — after launch, the repo gets forked into `atlaseo-starter`

---

## 2. Design System

### 2.1 Fonts

| Role | Font | Source |
|---|---|---|
| Display / Headlines | **Hanken Grotesk** (600, 700) | Google Fonts |
| Body | **Inter** (400, 500) | Google Fonts |
| Labels / Mono | **JetBrains Mono** (500) | Google Fonts |
| Icons | **Material Symbols Outlined** | Google Fonts |

Load via `@fontsource` packages in Astro for self-hosting (better perf than Google Fonts CDN).

### 2.2 Colors

```
// tailwind.config.mjs — extend theme
colors: {
  surface: {
    DEFAULT: '#f7f9fb',
    'container-lowest': '#ffffff',
    'container-low': '#f2f4f6',
    'container': '#eceef0',
    'container-high': '#e6e8ea',
    'container-highest': '#e0e3e5',
    tint: '#525f71',
  },
  primary: {
    DEFAULT: '#000000',
    container: '#0f1c2c',
    fixed: '#d6e4f9',
  },
  secondary: {
    DEFAULT: '#006d37',
    container: '#6bfe9c',
    'on-container': '#00743a',
  },
  'on-surface': '#191c1e',
  'on-surface-variant': '#44474c',
  'on-primary': '#ffffff',
  'on-secondary': '#ffffff',
  outline: {
    DEFAULT: '#74777d',
    variant: '#c4c6cc',
  },
  error: '#ba1a1a',
}
```

**Key design color rules:**
- Deep Professional Blue (`#0D1B2A` / `primary-container`) for dark sections (hero dashboard, data section, CTA banners)
- Vibrant Growth Green (`#006d37` / `secondary`) reserved strictly for CTAs, check marks, positive data, action elements
- Slate Grays (`surface-*` scale) for clean neutral backgrounds
- Glassmorphism: `bg-white/70 backdrop-blur-[12px] border border-outline-variant/50`
- Cloud shadow: `shadow-[0_20px_40px_rgba(13,27,42,0.05)]`
- Milled button (primary CTA): `bg-gradient-to-b from-[#008141] to-[#006d37]` with `border-t border-white/30`

### 2.3 Typography Scale

```
// tailwind.config.mjs — extend theme
fontSize: {
  'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
  'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
  'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
  'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
  'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
  'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
  'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
}
```

**Usage rules:**
- `display-xl` → page hero `<h1>` only (responsive: clamp to `headline-lg-mobile` on mobile)
- `headline-lg` → section `<h2>` titles
- `headline-md` → card titles, sub-section `<h3>`
- `label-caps` → always `text-transform: uppercase`, always `font-family: JetBrains Mono`. Used for nav links, badges, form labels, button text, footer headings
- `body-lg` → hero subtitles, prominent descriptions
- `body-md` → default body copy

### 2.4 Spacing & Layout

```
spacing: {
  xs: '4px',
  sm: '12px',
  md: '24px',
  lg: '48px',
  xl: '80px',
  gutter: '24px',
}

// Container
maxWidth: { container: '1280px' }
```

- Desktop: 12-column grid, 1280px max-width
- Mobile: single column, gutter shrinks to 16px
- Section vertical padding: `py-xl` (80px)
- Card padding: `p-lg` (48px)
- Component gaps: `gap-md` (24px)

### 2.5 Elevation & Depth

- Default card: `bg-white border border-outline-variant/30` — no shadow
- Hover: border transitions to `border-primary`
- Elevated: `cloud-shadow` class → `box-shadow: 0 20px 40px rgba(13, 27, 42, 0.05)`
- Glassmorphism: `bg-white/70 backdrop-blur-[12px] border border-outline-variant/50` — used for navbar, floating badges, contact form container
- No heavy shadows anywhere

### 2.6 Shapes & Radius

- Standard elements (inputs, buttons): `rounded` (4px)
- Cards: `rounded-xl` (12px)
- Large containers/CTA blocks: `rounded-2xl` (16px)
- Circles: `rounded-full`
- No pill shapes on buttons

### 2.7 Shared UI Components (Astro)

Create these as reusable `.astro` components:

| Component | File | Notes |
|---|---|---|
| `Navbar.astro` | `src/components/Navbar.astro` | Glassmorphic, fixed. Links: Accueil, Nos offres, Création Web, SEO Local, Contact. CTA: "Obtenir un audit" → /contact. Mobile hamburger. |
| `Footer.astro` | `src/components/Footer.astro` | 4-col: brand+tagline+socials, Services (3 packs), Société (Mentions Légales, Confidentialité, Support), Social (LinkedIn, WhatsApp). Copyright: "© 2026 ATLASEO. Performance SEO & Expertise Google Business." |
| `SectionHeader.astro` | `src/components/SectionHeader.astro` | Props: `label` (optional, green mono-caps), `title`, `subtitle` (optional). Centered or left-aligned via prop. |
| `MilledButton.astro` | `src/components/MilledButton.astro` | Green gradient CTA button. Props: `href`, `text`, `icon` (optional Material Symbols name), `size` (sm/md/lg). |
| `OutlineButton.astro` | `src/components/OutlineButton.astro` | White/transparent with border. Props: `href`, `text`. |
| `WhatsAppFab.astro` | `src/components/contact/WhatsAppFab.astro` | Floating green circle, bottom-right, WhatsApp SVG icon. `href` = WhatsApp link (placeholder: `https://wa.me/212700508445`). Present on all pages. |
| `SchemaOrg.astro` | `src/components/seo/SchemaOrg.astro` | JSON-LD. Type: `Organization` for ATLASEO. Props for business name, address, phone, url, logo, etc. |
| `GlassCard.astro` | `src/components/GlassCard.astro` | Wrapper with glassmorphism styles. |
| `BentoCard.astro` | `src/components/BentoCard.astro` | Props: `span` (1 or 2), `dark` (boolean), `icon`, `title`. |

---

## 3. Page Structure & Copy

### Sitemap (pages that get indexed)

```
/                     → Accueil (homepage)
/offres               → Nos Offres (pricing)
/creation-site-web    → Expertise Création Web
/seo-local            → Expertise SEO Local
/contact              → Contact & Audit
```

**Legal pages** (noindex):
```
/mentions-legales     → Mentions Légales
/confidentialite      → Politique de Confidentialité
```

**Utility pages** (none needed — no form means no thank-you page):

**Total indexable pages: 5** — well within the 5–8 rule for a new showcase site.

---

### Page 1: Accueil (`/`)

**Meta:**
- `<title>`: ATLASEO — Création de Site Web & SEO Local à Casablanca
- `<meta description>`: Agence web à Casablanca. Sites performants sur infrastructure Cloudflare + référencement Google local. Résultats visibles en 2-4 semaines.
- Schema: `Organization`

**Sections (in order):**

#### 1.1 Hero
- **Badge**: ✓ Agence Web & SEO — Casablanca
- **H1**: `Votre site. Votre croissance.`
  - "croissance" gets a gradient treatment (primary → secondary)
- **Subtitle**: Nous créons des sites ultra-performants et pilotons votre référencement local pour que vos clients vous trouvent en premier — sur Google, Google Maps, et partout au Maroc.
- **CTA 1** (milled green): `Démarrer mon projet` → /contact (+ trending_up icon)
- **CTA 2** (outline): `Voir nos offres` → /offres
- **Visual** (right column, desktop only): Glass-framed dashboard mockup showing SEO performance metrics. Floating glass badge at bottom-left: Lighthouse `99/100` with speed icon.
- **Background**: Two decorative blurred blobs (green + blue) behind visual

#### 1.2 Infrastructure — Bento Grid
- **H2**: Infrastructure Technique de Classe Mondiale
- **Layout**: 4-column bento grid, 2 rows

| Card | Span | Icon | Title | Content |
|---|---|---|---|---|
| Hébergement Cloudflare | 2 cols | `cloud_done` | Hébergement Cloudflare | Mini bar chart (decorative, showing growth). Copy: "Vos sites sont hébergés sur le réseau mondial Cloudflare — le même qui protège 20% du web mondial. Temps de chargement <1s partout au Maroc." |
| SSL & Sécurité | 1 col | `security` | SSL & Sécurité | "Certificat SSL gratuit, protection DDoS, et firewall intégrés. Vos visiteurs sont en sécurité." |
| 100% Responsive | 1 col | `devices` | 100% Responsive | "Desktop, tablette, mobile — chaque page s'adapte parfaitement à tous les écrans." |
| Livraison Express | 2 cols, dark bg | `rocket_launch` | Livraison Express | Big number: **14** + "jours de livraison moyenne" |
| Expertise Premium | 2 cols, image overlay | — | Expertise Technique Premium | Image of code/dev setup with grayscale→color hover. Overlay text. |

#### 1.3 Dominez le Marché Local
- **Layout**: 2-column, image left + content right
- **Visual**: Photo of person holding phone with Google Maps results
- **H2**: Dominez le Marché Local
- **Checklist** (green check_circle icons):
  - **Optimisation Google Business Profile** — Nous créons et optimisons votre fiche Google pour maximiser votre visibilité dans les recherches locales et sur Google Maps.
  - **Gestion Stratégique des Avis** — Un flux constant d'avis positifs renforce votre crédibilité et votre classement local.
  - **Référencement Géolocalisé** — Ciblage de mots-clés locaux (ex: "dentiste Casablanca", "avocat Rabat") pour attirer les clients de votre zone.
- **CTA link**: En savoir plus → /seo-local

#### 1.4 Stratégie Data (Dark Section)
- **Background**: `primary-container` (#0f1c2c)
- **H2**: Une Stratégie de Croissance basée sur la Data
- **Layout**: 2 columns. Left: title + stats. Right: data panel.
- **Stats** (2×2 grid with left border):
  - Audit SEO — "Analyse complète de votre site et de vos concurrents"
  - Mots-clés — "Recherche et ciblage des requêtes à fort potentiel"
  - Suivi — "Monitoring mensuel de vos positions et performances"
  - Rapports — "Reporting clair et actionnable chaque mois"
- **Right panel**: Simulated data table (skeleton/decorative) suggesting keyword rankings, with a green CTA block at bottom: "Demandez votre audit gratuit" → /contact

#### 1.4b Comment on travaille ensemble (Collaboration Stepper)
- **Background**: `surface-container-low`
- **Label**: COLLABORATION
- **H2**: Comment on travaille ensemble
- **Subtitle**: Un parcours en trois temps, avec le même interlocuteur du premier échange à la 12ème facture du suivi mensuel.
- **Component**: `CollaborationStepper.astro` — interactive 3-phase stepper
- **Layout**: White card (`cloud-shadow`), 2 columns desktop (SVG left + content right), single column mobile. Progress bar with 3 clickable nodes at bottom. Auto-advance every 5s.
- **Phases**: 01 Comprendre (AVANT LE DEVIS) → 02 Construire (2 À 3 SEMAINES) → 03 Faire grandir (APRÈS LA MISE EN LIGNE, includes CTA → /contact)

#### 1.5 Pricing Preview
- **H2**: Des Offres Claires, Sans Surprises
- **Layout**: 3-column grid
- **Cards** (no prices displayed — CTAs drive to contact for a quote):

| Pack | Featured? | CTA |
|---|---|---|
| Pack Starter | No | "En savoir plus" (outline) → /offres |
| Pack Visibilité | No | "En savoir plus" (outline) → /offres |
| Pack Croissance | Yes (border-2 border-primary, scale-105, badge "Recommandé") | "Choisir ce pack" (milled green) → /contact |

- Features are summary-level here (4-5 bullet points per card). Full details on /offres.
- Pack Starter features: Site vitrine (1-3 pages), Design responsive, Hébergement Cloudflare, SSL inclus, Livraison 14 jours
- Pack Visibilité features: Tout du Pack Starter, SEO local de base, Google Business Profile, Optimisation meta tags, Suivi 1 mois
- Pack Croissance features: Tout du Pack Visibilité, SEO local avancé, Stratégie de contenu, Rapport mensuel, Support prioritaire (2h)

#### 1.6 Portfolio / Case Study — dryousra.ma
- **Background**: `surface-container-low`
- **H2**: Nos Réalisations
- **Layout**: 2 columns. Left: screenshot of dryousra.ma (homepage, framed in a browser mockup or device frame). Right: case study text.
- **Content**:
  - **Client**: Dr Yousra — Médecine Esthétique, Casablanca
  - **Résultat**: Site vitrine complet avec 20+ pages de services spécialisés. Intégration WhatsApp et click-to-call comme canaux de conversion principaux.
  - **Key highlights** (green check marks):
    - Design responsive sur-mesure
    - Pages de services détaillées avec FAQ intégrées
    - CTAs optimisés pour le marché marocain (WhatsApp + appel)
    - Meta descriptions et balises titre optimisées SEO
  - **CTA**: "Voir le site" → https://dryousra.ma (external link, opens in new tab)
- **Note for Cursor**: Take a screenshot of dryousra.ma homepage, save as `/public/images/portfolio-dryousra.webp`. Use a simple border + shadow frame, no elaborate device mockup.

#### 1.7 Footer
- See shared component spec (§2.7)

---

### Page 2: Nos Offres (`/offres`)

**Meta:**
- `<title>`: Nos Offres — Création de Site Web & SEO | ATLASEO
- `<meta description>`: Trois packs adaptés à votre budget : Starter, Visibilité, et Croissance. Site web performant + SEO local inclus. Comparez et choisissez.

**Sections:**

#### 2.1 Hero
- **Badge**: Nos Offres
- **H1**: `Investissez dans votre` `Croissance` (green)
- **Subtitle**: Des solutions pensées pour les PME et professionnels au Maroc. Pas de frais cachés, pas de surprises — juste des résultats.

#### 2.2 Pricing Cards (detailed version)
Same 3-column layout as homepage but with full feature lists. No prices displayed — CTAs drive to contact.

**Pack Starter**
- Site vitrine professionnel (1-3 pages)
- Design sur-mesure responsive
- Hébergement Cloudflare (1 an inclus)
- Certificat SSL gratuit
- Optimisation vitesse (Lighthouse 90+)
- Intégration WhatsApp + click-to-call
- Livraison en 14 jours ouvrés
- CTA: "Démarrer avec Starter" (outline) → /contact

**Pack Visibilité**
- Tout le Pack Starter
- Jusqu'à 5 pages
- SEO on-page (meta, titres, structure)
- Création Google Business Profile
- Inscription annuaires locaux (3 minimum)
- Configuration Google Analytics + Search Console
- 1 mois de suivi SEO post-lancement
- CTA: "Choisir Visibilité" (outline) → /contact

**Pack Croissance** ⭐ Featured (border-2 border-primary, scale-105, badge "Recommandé")
- Tout le Pack Visibilité
- Jusqu'à 8 pages
- SEO local avancé (mots-clés géo, NAP, citations)
- Stratégie de contenu (2 articles blog inclus)
- Optimisation Google Business Profile avancée
- Rapport de performance mensuel
- Support prioritaire — réponse en <2h
- CTA: "Passer à Croissance" (milled green) → /contact

#### 2.3 Feature Comparison Table
- Rows: Site pages, Responsive design, SSL, Hébergement Cloudflare, Google Business Profile, SEO on-page, SEO local avancé, Google Analytics, Suivi post-lancement, Support prioritaire, Contenu blog
- Columns: Fonctionnalité | Starter | Visibilité | Croissance
- Use check marks / dash / values

#### 2.4 Benchmark Marché Maroc 2026
- **H2**: Benchmark Marché Maroc 2026
- **Layout**: 2 columns, text left + image right
- **Content**: Brief competitive comparison — average cost of web agencies in Morocco, average delivery time, ATLASEO's positioning (faster, more transparent, Cloudflare-based)
- **Visual**: Dashboard/analytics screenshot in glass card
- **Stats bars**: Agences traditionnelles (25% bar, gray) vs ATLASEO (100% bar, green)

#### 2.5 CTA Banner (dark)
- **Background**: `primary-container`
- **H2**: Prêt à dominer votre marché local ?
- **Subtitle**: Obtenez votre audit gratuit et découvrez comment nous pouvons booster votre visibilité.
- **CTA 1** (milled green): Obtenir mon audit → /contact
- **CTA 2** (outline white): Nous contacter → /contact

---

### Page 3: Expertise Création Web (`/creation-site-web`)

**Meta:**
- `<title>`: Création de Site Web à Casablanca — Infrastructure Cloudflare | ATLASEO
- `<meta description>`: Sites web ultra-rapides sur Cloudflare. Design responsive, Lighthouse 99/100, livraison en 14 jours. L'infrastructure premium pour votre entreprise au Maroc.

**Sections:**

#### 3.1 Hero
- **Background**: `surface-container-low`
- **Badge**: Création Web
- **H1**: `Créez un site web qui propulse votre activité.`
- **Subtitle**: Infrastructure Cloudflare, design sur-mesure, performance maximale. Votre site professionnel livré en 14 jours, prêt à convertir.
- **CTA** (milled green): Lancer mon projet → /contact
- **Visual** (right): Dashboard screenshot in rounded card. Floating glass badge: speed icon + **99/100** (Lighthouse score)

#### 3.2 Bento Grid — Infrastructure
- **H2**: L'infrastructure de demain pour votre entreprise
- **Subtitle**: Chaque site que nous créons repose sur les mêmes technologies que les leaders mondiaux du web.
- **Layout**: 3-column bento, 2 rows

| Card | Span | Icon | Title | Copy |
|---|---|---|---|---|
| Cloudflare Enterprise | 2 cols | `cloud_done` | Hébergement Cloudflare Enterprise | Réseau de 300+ data centers dans le monde. Temps de réponse <50ms depuis le Maroc. CDN, cache intelligent, et protection DDoS inclus. |
| Responsive Design | 1 col | `devices` | Responsive Design | Chaque pixel est pensé pour mobile, tablette et desktop. 60% de vos visiteurs viendront du mobile. |
| Design Sur-mesure | 1 col | `palette` | Design Sur-mesure | Pas de templates génériques. Votre identité visuelle traduite en un design unique et professionnel. |
| Intégration Business | 2 cols, dark | `hub` | Intégration Business | WhatsApp, Google Analytics, Search Console, formulaires — tout est connecté dès le lancement. (Decorative large hub icon in background at 20% opacity) |

#### 3.3 Timeline — Votre site prêt en 14 jours
- **H2**: Votre site prêt en 14 jours
- **Subtitle**: Un processus clair, sans surprises.
- **Layout**: 4 steps, horizontal on desktop, vertical on mobile. Connected by progress line.

| Step | Label | Description |
|---|---|---|
| 1 (black circle) | Stratégie | Nous analysons votre marché, vos concurrents, et vos objectifs pour définir la meilleure approche. |
| 2 (black circle) | Design | Maquette sur-mesure validée par vous avant toute ligne de code. |
| 3 (black circle) | Développement | Code performant, SEO intégré, tests sur tous les appareils. |
| 4 (green circle) | Lancement | Mise en ligne, configuration DNS, soumission Google — votre site est live. |

#### 3.4 CTA Block (dark, full-width rounded)
- **Background**: `primary` full-width rounded-2xl
- **H2**: Prêt à transformer votre présence digitale ?
- **Subtitle**: Rejoignez les entreprises marocaines qui ont choisi l'infrastructure premium.
- **CTA 1** (milled green): Démarrer mon projet → /contact
- **CTA 2** (outline white): Voir nos offres → /offres
- **Stats grid** (right side, 2×2): `100%` Uptime, `24/7` Disponibilité, `SEO` Intégré (+ one more)

#### 3.5 CTA Anchor — L'offre "Essentiel Business"
- **Badge**: green pill
- **H2**: L'offre "Essentiel Business"
- **Subtitle**: Tout ce dont vous avez besoin pour lancer votre présence en ligne.
- **Glass card**: Features checklist (left) + milled green CTA (right): "Demander un devis" → /contact

---

### Page 4: Expertise SEO Local (`/seo-local`)

**Meta:**
- `<title>`: SEO Local au Maroc — Google Business & Référencement | ATLASEO
- `<meta description>`: Dominez les recherches locales à Casablanca, Rabat et Marrakech. Optimisation Google Business Profile, mots-clés géolocalisés, stratégie d'avis clients.

**Sections:**

#### 4.1 Hero
- **Badge**: SEO Local
- **H1**: `Dominez les recherches locales.`
- **Subtitle**: Vos clients vous cherchent sur Google. Nous nous assurons qu'ils vous trouvent — en premier, à chaque fois.
- **CTA** (milled green): Booster ma visibilité → /contact (+ arrow_forward icon)
- **Visual** (right): Google Maps screenshot showing local pack results, in glass card with decorative green blur blob behind

#### 4.2 L'épicentre du commerce au Maroc
- **Background**: `surface-container-low`
- **H2**: L'épicentre du commerce au Maroc
- **Subtitle**: 80% des consommateurs marocains recherchent un commerce local sur Google avant de se déplacer. Votre fiche Google Business est votre vitrine #1.
- **3-column cards**:

| Icon | Title | Copy |
|---|---|---|
| `visibility` | 80% de Visibilité | 4 consommateurs sur 5 utilisent Google pour trouver un professionnel près de chez eux. Sans fiche optimisée, vous êtes invisible. |
| `reviews` | Preuve Sociale | Les avis Google sont le premier critère de confiance. Une note au-dessus de 4.5 augmente les conversions de 25%. |
| `trending_up` | ROI Accéléré | Le SEO local génère des leads qualifiés à un coût 3x inférieur à la publicité payante. Résultats durables, pas éphémères. |

#### 4.3 Méthodologie 360°
- **Layout**: 2 columns. Left: numbered steps. Right: circular diagram (decorative).
- **H2**: Notre Méthodologie 360°
- **Subtitle**: Un accompagnement complet pour dominer votre marché local.
- **Steps**:

| # | Title | Description |
|---|---|---|
| 01 | Ciblage de Mots-clés Géo | Analyse des requêtes locales dans votre secteur. Identification des opportunités de positionnement à Casablanca, Rabat, Marrakech et au-delà. |
| 02 | Optimisation du Profil | Configuration complète de votre Google Business Profile : catégories, horaires, photos, services, attributs — chaque détail compte. |
| 03 | Citations Locales & NAP | Cohérence parfaite de votre Nom, Adresse et Téléphone sur tous les annuaires et plateformes pertinents au Maroc. |
| 04 | Stratégie d'Avis Clients | Mise en place d'un processus pour collecter des avis authentiques et y répondre professionnellement. |

#### 4.4 Pourquoi choisir ATLASEO ? (Bento Grid)
- **Background**: `surface-container-highest`
- **H2**: Pourquoi choisir ATLASEO ?
- **Layout**: 4-col bento, 2 rows, varying spans

| Card | Span | Style | Title | Content |
|---|---|---|---|---|
| Ultra Agile | 2×1 | White | Ultra Agile | Pas de réunions interminables, pas de process kafkaïens. Un interlocuteur unique, des décisions rapides, un site livré en 14 jours. |
| Infrastructure Premium | 2×2 | Dark with bg image | Infrastructure Premium | Cloudflare Workers, SSL, CDN mondial. Les mêmes technologies que les leaders du web, accessibles aux PME marocaines. (Checklist: Cloudflare Workers, SSL + DDoS, CDN 300+ villes) |
| Tarif Transparent | 1×1 | Green bg | Tarif Transparent | Devis clair et détaillé. Pas de frais cachés, pas de mauvaises surprises. |
| 2-4 Semaines | 1×1 | Light | 2-4 Semaines | De la stratégie au lancement. Résultats SEO visibles dès le premier mois. |

#### 4.5 CTA Banner
- **Background**: `primary-container`, rounded-2xl
- **H2**: Prêt à dominer votre ville ?
- **Subtitle**: Audit SEO gratuit — découvrez votre potentiel de croissance locale.
- **CTA 1** (milled green): Obtenir mon audit → /contact
- **CTA 2** (outline white): Voir nos offres → /offres

---

### Page 5: Contact (`/contact`)

**Meta:**
- `<title>`: Contact — Audit SEO Gratuit | ATLASEO Casablanca
- `<meta description>`: Contactez ATLASEO pour votre projet web ou SEO. Audit gratuit, réponse sous 24h. WhatsApp disponible pour une réponse instantanée.

**Sections:**

#### 5.1 Hero
(unchanged)

#### 5.2 À propos d'ATLASEO
New section inserted after hero. Three blocks:
- Block A: stacked logo at h-56, centered. Motto "Pensé local. Indexé global." in italic display font, on-surface-variant.
- Block B: 7/5 grid. Left column — agency narrative (H2 "Qui sommes-nous ?", 2 paragraphs). Right column — glassmorphic founder card (fondateur.webp rounded 96px, label "FONDATEUR", name "Fahd D.", quote).
- Block C: "Notre approche" — label-caps header, H2, subtitle, 3 equal cards (route / Parcours utilisateur, ads_click / Stratégie de conversion, palette / Discipline UX/UI).

#### 5.3 Expertise de proximité
Moved up from bottom of page. Casablanca aerial photo + H3 "Expertise de proximité" + updated copy (audience-agnostic). No audience tags.

#### 5.4 Contact Channels
Restructured layout: full-width WhatsApp card on top, 3-column grid below (Email, Phone, Support client). Infrastructure Cloudflare card removed. Support client card simplified (no highlight block, single body line).

---

## 4. SEO Implementation

### 4.1 Technical SEO

**Astro packages:**
- `astro-seo` — meta tags, canonical, OG tags per page
- `@astrojs/sitemap` — auto-generated sitemap
- Custom `SchemaOrg.astro` component for JSON-LD

**Per-page SEO checklist** (handled by `astro-seo` in layout):
- `<title>` — unique, keyword-rich, ≤60 chars
- `<meta name="description">` — unique, ≤155 chars, includes CTA language
- `<link rel="canonical">` — self-referencing, matches `https://atlaseo.ma/path` exactly
- OG tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `<meta name="robots">` — `index, follow` for content pages; `noindex` for /mentions-legales, /confidentialite

**robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://atlaseo.ma/sitemap-index.xml
```

**Sitemap** — must include only:
```
https://atlaseo.ma/
https://atlaseo.ma/offres
https://atlaseo.ma/creation-site-web
https://atlaseo.ma/seo-local
https://atlaseo.ma/contact
```

### 4.2 JSON-LD Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ATLASEO",
  "url": "https://atlaseo.ma",
  "logo": "https://atlaseo.ma/logo.svg",
  "description": "Agence de création de sites web et SEO local à Casablanca, Maroc.",
  "telephone": "+212700508445",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@atlaseo.ma",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.linkedin.com/company/atlaseo",
    "https://www.instagram.com/atlaseo.ma"
  ]
}
```

### 4.3 Target Keywords

| Page | Primary | Secondary |
|---|---|---|
| Accueil | création site web casablanca | agence web maroc, site internet casablanca |
| Offres | tarif site web maroc | prix site internet casablanca, agence web pas cher maroc |
| Création Web | création site web professionnel maroc | site vitrine casablanca, développement web maroc |
| SEO Local | seo local casablanca | référencement google maroc, google business profile maroc |
| Contact | agence seo casablanca contact | audit seo gratuit maroc |

### 4.4 Internal Linking Rules

Every page must be linked from at least 2 other pages:
- Navbar links to all 5 pages (safety net)
- Footer links to all 5 + legal pages
- Homepage links to /offres (pricing preview), /seo-local (local SEO section), /contact (hero CTA + data section CTA)
- /offres links to /contact (per-pack CTAs), /creation-site-web (benchmark context)
- /creation-site-web links to /contact (CTA blocks), /offres (pricing anchor)
- /seo-local links to /contact (CTA blocks), /offres (why section)
- /contact links to /offres (support prioritaire mention)

Use descriptive anchor text. Never "cliquez ici".

---

## 5. Astro Project Structure

```
atlaseo.ma/
├── astro.config.mjs
├── wrangler.toml
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── images/
│       ├── og-default.jpg          (1200×630 OG image)
│       ├── hero-dashboard.webp     (mock dashboard screenshot)
│       ├── hero-phone-maps.webp    (phone with Google Maps)
│       ├── casablanca-aerial.webp  (city photo for contact page)
│       ├── dev-setup.webp          (code/laptop photo for bento)
│       └── analytics-dashboard.webp (benchmark section)
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        (head, fonts, navbar, footer, WhatsApp FAB, analytics)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── offres.astro
│   │   ├── creation-site-web.astro
│   │   ├── seo-local.astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   └── confidentialite.astro
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeader.astro
│   │   ├── MilledButton.astro
│   │   ├── OutlineButton.astro
│   │   ├── GlassCard.astro
│   │   ├── BentoCard.astro
│   │   ├── seo/
│   │   │   └── SchemaOrg.astro
│   │   └── contact/
│   │       └── WhatsAppFab.astro
│   └── styles/
│       └── global.css              (Tailwind directives, glass-card, cloud-shadow, milled-button custom classes)
└── PROCESS.md                       (delivery checklist — see §8)
```

---

## 6. Astro Config

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://atlaseo.ma',
  output: 'static',
  adapter: cloudflare(),
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite'),
    }),
  ],
});
```

---

## 7. Wrangler Config

```toml
# wrangler.toml
name = "atlaseo-ma"
compatibility_date = "2024-09-23"
assets = { directory = "./dist" }

[vars]
ENVIRONMENT = "production"
```

Pure static site — no Worker entry point needed. Static assets served directly by Workers Static Assets.

---

## 8. Launch Checklist (PROCESS.md)

```markdown
# ATLASEO.ma — Launch Checklist

## Pre-launch
- [ ] All 5 pages built and reviewed
- [ ] Meta tags verified on every page (unique title + description)
- [ ] Canonical tags verified (URL Inspection in GSC)
- [ ] JSON-LD schema validated (schema.org validator)
- [ ] robots.txt reviewed — allows all content pages
- [ ] Sitemap generated — only 5 indexable URLs
- [ ] Internal links verified — no orphan pages, no broken links
- [ ] Lighthouse audit: all pages ≥90 on all 4 categories
- [ ] Mobile responsive tested on real devices
- [ ] WhatsApp link tested (opens correct conversation)
- [ ] Click-to-call link tested on mobile
- [ ] mailto link tested
- [ ] Images optimized (WebP, proper alt text)
- [ ] Trailing slash convention verified (no trailing slash)
- [ ] www redirect verified (www → non-www at Cloudflare)
- [ ] HTTPS enforced at Cloudflare

## Launch day
- [ ] `wrangler deploy`
- [ ] Domain configured in Cloudflare DNS
- [ ] Google Search Console: verify ownership (DNS TXT)
- [ ] Google Search Console: submit sitemap
- [ ] Google Search Console: URL Inspection on /, /offres, /creation-site-web, /seo-local, /contact
- [ ] Google Business Profile created and linked
- [ ] GA4 property created, tracking code verified
- [ ] Cloudflare Web Analytics enabled

## Post-launch (day 3, 7, 30)
- [ ] GSC Coverage report: check for errors
- [ ] GSC URL Inspection: verify indexation of key pages
- [ ] Core Web Vitals report: all "Good"
- [ ] Performance report: check impressions
- [ ] Fix any "Détectée — non indexée" immediately
- [ ] Backlinks: GBP, LinkedIn, 2-3 local directories
```

---

## 9. Images Needed

| Image | Used on | Format | Alt text | Source |
|---|---|---|---|---|
| Hero dashboard mockup | Accueil hero | WebP, 800×600 | Tableau de bord SEO ATLASEO montrant la progression des positions Google | Screenshot of a real or mock analytics dashboard |
| Phone with Google Maps | Accueil local section | WebP, 600×800 | Résultats de recherche locale Google Maps sur mobile | Stock photo or staged |
| Code/dev workspace | Accueil bento, Création Web | WebP, 800×400 | Environnement de développement web professionnel | Stock photo |
| Analytics dashboard | Offres benchmark | WebP, 800×400 | Dashboard d'analyse de performance SEO | Screenshot or mock |
| Casablanca aerial | Contact location | WebP, 800×400 | Vue aérienne de Casablanca au crépuscule | Stock photo |
| Founder photo | Contact About section | WebP, 400×400 | Fahd D., fondateur d'ATLASEO | public/images/team/fondateur.webp |
| dryousra.ma screenshot | Accueil portfolio | WebP, 800×600 | Capture d'écran du site dryousra.ma — médecine esthétique Casablanca | Screenshot of https://dryousra.ma homepage |
| ATLASEO logo | Navbar, footer, OG | SVG | ATLASEO logo | Design (text-based logo from Hanken Grotesk bold) |
| OG default image | All pages (fallback) | JPG 1200×630 | ATLASEO — Création de Site Web & SEO Local au Maroc | Branded graphic |

---

## 10. Content Word Counts

Per indexation rules, every page must have substantial content:

| Page | Target word count | Meets 300+ threshold? |
|---|---|---|
| Accueil | ~750 words | ✅ (includes portfolio section) |
| Offres | ~500 words | ✅ |
| Création Web | ~500 words | ✅ |
| SEO Local | ~550 words | ✅ |
| Contact | ~650 words | ✅ |

---

## 11. Rules and Process (références)

Les règles dures techniques (page count, content minimums, internal linking, technical zero tolerance, sitemap discipline) sont dans **`ATLASEO_context.md` §8 Indexation Protocol**. Cette section n'est pas dupliquée ici pour éviter la divergence.

Le protocole de déploiement (`npm run build` + `wrangler deploy`, différence avec Cloudflare Pages, notes Windows/PowerShell) est dans **`ATLASEO_context.md` §4 Workflow Model → Deployment Protocol**.

La launch checklist template (Pre-launch / Launch day / Post-launch) est dans **`ATLASEO_context.md` §7 Launch Checklist**. Voir la version atlaseo.ma-spécifique dans §8 ci-dessus.

### Rappels critiques spécifiques à atlaseo.ma
- ❌ Pas de blog au lancement, pas de sous-pages de services (5 pages indexables max — cf. §3)
- ❌ Canonical = `atlaseo.ma` sans www, sans trailing slash, sans `.html` (cf. §1)
- ❌ Pas de mise en ligne sans GSC + sitemap soumis le jour même
- ❌ Pas d'indexing request avant correction des problèmes identifiés en URL Inspection

