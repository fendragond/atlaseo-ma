# ODBM — Project Brief

> **Ce document fait partie d'un système à 4 documents.**
> - **`ATLASEO_strategy.md`** — vision, positionnement, pricing, plan 12 mois (hérité, lecture seule pour ce projet)
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation (hérité, lecture seule)
> - **`odbm_brief.md`** — ce fichier. Spec projet ODBM.
> - **`odbm_backlog.md`** — tableau de bord opérationnel des tâches projet.
>
> **Hiérarchie** : ce brief hérite des deux docs ATLASEO. Pour les décisions de stratégie ou de méthode, ne pas re-débattre ici — référer aux docs parents. Ce brief contient uniquement les décisions spécifiques au projet ODBM.
>
> **Created**: 2026-06-15 — v0.1 (kickoff, à enrichir en phase Discovery)
>
> **Session log:**
> - 2026-06-XX — Premier contact WhatsApp ODBM (ami du founder), benchmark envoyé (tgcc, citymo, sgtm + refs FR/international)
> - 2026-06-XX — Deck commercial `ATLASEO_Proposition_ODBM.pptx` livré (14 slides, sans prix, focus site + GBP)
> - 2026-06-XX — Réunion ODBM, accord sur le scope Pack Visibilité. ODBM demande ajout module Carrières (page + candidature spontanée).
> - 2026-06-15 — Brief ODBM v0.1 créé. Project Claude `ODBM_site` initialisé.
>
> **Pending (next session — Discovery client) :**
> - [ ] **Domaine final** confirmé (autre que odbm.ma — à récupérer auprès du client)
> - [ ] **Scénario Carrières** tranché (autonome CMS vs géré par ATLASEO) → impacte le devis final
> - [ ] **Identité visuelle** : logo ODBM disponible ? charte couleurs existante ? sinon palette à proposer
> - [ ] **Photos chantiers** : récupérer le dossier complet (Magic House Mansouria, immeubles Casa, autres projets)
> - [ ] **Liste exhaustive des projets/réalisations** à mettre en avant
> - [ ] **Liste des métiers** détaillée (gros œuvre, génie civil, étanchéité, autres ?)
> - [ ] **Coordonnées officielles ODBM** : adresse siège, téléphone pro, email RH, email contact général
> - [ ] **Réseaux sociaux** : URLs LinkedIn + Instagram officielles pour sameAs schema
> - [ ] **Interlocuteur(s)** : qui valide quoi côté ODBM ? (founder ami direct, ou implique RH/direction ?)
> - [ ] **Signature contrat + acompte** : modalités à caler
> - [ ] Devis officiel formalisé selon scénario Carrières retenu

---

## 1. Site Overview

- **Client** : ODBM — L'Omnium des Bâtisseurs Marocains
- **Secteur** : BTP — gros œuvre, génie civil, étanchéité
- **Zone d'intervention** : national (Maroc)
- **Domain** : à confirmer (autre que odbm.ma — décidé par le client)
- **Type** : Showcase site / vitrine d'agence BTP avec module Carrières (V2)
- **Langue** : Français (mono-langue, pas d'i18n)
- **Pages V1 estimées** : 5-6 indexables (Accueil, À propos, Réalisations, Métiers, Carrières [V2], Contact)
- **CTA model** : Option A étendue — WhatsApp + click-to-call + mailto, **+ formulaire candidature** sur page Carrières (route Worker `/api/candidature`)
- **Canonical format** : `https://[domaine]/page` (no www, no trailing slash, no .html — règle héritée context §10)
- **Pack vendu** : Pack Visibilité (7 000 MAD + 500 MAD/an) + module Carrières en add-on

---

## 2. Profil client — Ce qu'on sait

### Présence digitale actuelle
- **Site web** : ❌ aucun
- **Fiche Google Business** : ❌ aucune
- **LinkedIn** : ✅ opérationnel — https://ma.linkedin.com/company/l-omnium-des-batisseurs-marocains-odbm
- **Instagram** : ✅ opérationnel — handle à récupérer
- **Annuaire** : ✅ fiche kerix.net — https://www.kerix.net/fr/annuaire-entreprise/odbm

### Projets identifiés (à enrichir auprès du client)
- Immeubles RDC+5 à Casablanca
- Complexe balnéaire **Magic House** à Mansouria
- (autres projets à lister)

### Forces commerciales à mettre en avant
- Projets sérieux et photogéniques
- Variété des chantiers (résidentiel + balnéaire + génie civil)
- Présence sociale active (preuve d'activité réelle)
- **Espace blanc** : aucun concurrent gros œuvre marocain n'a un site moderne + fiche Google bien optimisée (sauf TGCC à un autre niveau)

### Cible audience du site
- **Maîtres d'ouvrage** (promoteurs immobiliers, particuliers fortunés, hôteliers)
- **Bureaux d'études et architectes** (référencement pour appels d'offres)
- **Candidats** (recrutement actif — d'où le module Carrières)
- **Partenaires / sous-traitants**

---

## 3. Add-on Carrières — décisions à acter

### Brique technique (commune aux deux scénarios)
- Page `/carrieres` listant les offres
- Offres en *content collection* Astro (un .md par offre)
- Formulaire de candidature spontanée + dépôt CV
- Route Worker `/api/candidature` → Resend → mail RH ODBM (CV en pièce jointe)
- Schema **JobPosting** par offre (Google for Jobs)
- Case consentement **CNDP/RGPD** obligatoire (collecte de CV = données personnelles)
- Optionnel : archivage CV dans Cloudflare R2

### Scénario A — Autonome (recommandé si recrutement fréquent)
- Mini-CMS git-based (**Decap** ou **TinaCMS**) avec interface simple
- ODBM publie/retire ses offres seul, ATLASEO hors boucle
- **Prix : 11 000 MAD one-shot + 500 MAD/an** (7 000 + 2 500 module + 1 500 CMS)
- Setup initial plus lourd (~2-3 jours), zéro charge récurrente

### Scénario B — Géré par ATLASEO
- ODBM envoie l'offre, ATLASEO publie (edit + build + deploy)
- **Prix : 9 500 MAD one-shot + 500 MAD/an + 150 MAD/offre** (ou forfait 400 MAD/mois illimité)
- Setup léger, mais crée une tâche récurrente facturable

### Décision attendue
- À trancher en réunion client : fréquence de recrutement réelle ? autonomie souhaitée ? budget initial ?
- Reco interne : si ≥4 offres/an → scénario A. Sinon → scénario B.

---

## 4. Design System — À DÉFINIR

> Le starter ATLASEO fournit la base technique (composants Astro, Tailwind, Material Symbols). L'identité visuelle ODBM reste à concevoir — c'est un univers BTP, **pas** l'univers premium-tech d'ATLASEO. Pivot à faire avant code.

### Direction à explorer (hypothèse — à valider)
- **Palette** : tons terre / béton / acier (gris anthracite, beige sable, bleu nuit chantier) + un accent vif type **jaune sécurité** ou **orange BTP**
- **Typography** : conserver Hanken Grotesk display ? ou passer à une sans-serif plus industrielle (IBM Plex Sans, Archivo, Space Grotesk) ?
- **Photographie** : **hero photo de chantier** plein écran (Magic House ou immeuble Casa) — c'est le différenciateur visuel du secteur
- **Ton** : sérieux, métier, fierté du bâtisseur — pas tech, pas "agence"
- **Inspirations validées** : tgcc.ma, citymo.ma, sgtm.ma (Maroc) ; groupe-legendre.com, sebtp-construction.fr (France) ; turnerconstruction.com (international)

### À décider en session Discovery
- Logo ODBM existant ou à créer ?
- Palette finale
- Choix typo display
- Style photo (sobre/documentaire vs cinématique)

---

## 5. Sitemap V1 — préliminaire

```
/                     → Accueil (hero chantier + chiffres clés + 3 métiers + projets phares + CTA contact)
/a-propos             → ODBM, histoire, équipe, valeurs, certifications
/realisations         → Portfolio projets (Magic House, immeubles Casa, autres)
/metiers              → Gros œuvre / Génie civil / Étanchéité (sections ou pages séparées TBD)
/carrieres            → [V2] Offres + candidature spontanée (selon scénario A ou B)
/contact              → Coordonnées + carte + WhatsApp + formulaire simple
```

**Legal pages (noindex)** : `/mentions-legales`, `/confidentialite`

**Pages V2 potentielles** (à n'ajouter qu'après V1 indexée — règle context §10) :
- `/realisations/[slug]` — fiche détaillée par projet
- `/metiers/gros-oeuvre`, `/metiers/genie-civil`, `/metiers/etancheite` — uniquement si chacune ≥1500 mots

---

## 6. SEO — cibles préliminaires

> Stratégie SEO BTP Maroc : occuper « entreprise gros œuvre Casablanca » et variantes. Concurrence sérieuse mais pas saturée. Voir benchmark concurrents à compléter en session SEO.

### Mots-clés primaires à creuser
- entreprise gros œuvre maroc
- entreprise gros œuvre casablanca
- entreprise construction maroc
- entreprise génie civil maroc
- étanchéité bâtiment maroc

### Mots-clés longue traîne (faible concurrence, forte intention)
- entreprise gros œuvre RDC+X Casablanca
- entrepreneur général Casablanca
- construction immeuble résidentiel maroc
- entreprise BTP recrutement maroc (pertinent pour la page Carrières)

### Schema markup prévu
- `Organization` + `LocalBusiness` (siège ODBM)
- `BreadcrumbList` sur pages internes
- `JobPosting` sur chaque offre Carrières (V2)
- `FAQPage` si FAQ pertinente sur Accueil ou Carrières

### À compléter en session SEO
- Analyse 5-10 concurrents directs (tgcc, sgtm, citymo + 4-5 autres)
- Volume de recherche par mot-clé
- Quartiers / villes à cibler (Casa principal, autres villes selon zone réelle des chantiers)

---

## 7. Stack technique

Hérité du starter ATLASEO (cf. `ATLASEO_context.md §1 et §5`) :
- **Astro** + **Tailwind v4** + **Cloudflare Workers Static Assets** + **Wrangler**
- Repo GitHub privé : `fendragond/odbm-[suffix-domaine]` (à créer)
- Pas de BDD
- **Spécificité ODBM** : route Worker `/api/candidature` (le site arrête d'être 100% statique — nouveau pattern à intégrer au starter pour les futurs clients similaires)

### Décisions techniques spécifiques ODBM à acter
- [ ] Service email pour formulaire candidature : **Resend** (recommandé) ou MailChannels
- [ ] Archivage CV : R2 (oui/non)
- [ ] CMS si scénario A : Decap (gratuit, git-based) ou TinaCMS (interface plus polie, freemium)
- [ ] Stratégie images chantiers : compression batch (Squoosh/Sharp), formats WebP + fallback JPG, lazy loading systématique (les pages réalisations vont être lourdes en photos)

---

## 8. Images à récupérer / produire

| Image | Usage | Source | Format cible |
|---|---|---|---|
| Logo ODBM | Navbar, footer, OG, schema | À demander client | SVG si possible, sinon PNG transparent HD |
| Hero chantier (Magic House) | Accueil hero | Photo client | WebP 1920×1080 |
| Portfolio projets (8-15 photos) | /realisations | Photos client | WebP, plusieurs tailles |
| Photos métiers (gros œuvre, génie civil, étanchéité) | /metiers + Accueil | Photos client ou shoot | WebP |
| Portrait dirigeant + équipe clé | /a-propos | À organiser | WebP 800×800 |
| Casablanca / siège ODBM | /contact | Photo extérieur siège ou Google Street View | WebP |
| OG default image | Toutes pages (fallback) | Design ATLASEO basé sur ODBM | JPG 1200×630 |

---

## 9. Launch checklist (héritée context §7)

Pre-launch, Launch day, Post-launch — voir `ATLASEO_context.md §7`. Adaptations ODBM :
- Vérifier que **formulaire candidature** fonctionne en prod (envoi test CV → arrivée mail RH)
- Vérifier consentement CNDP/RGPD cliquable et bloquant
- Vérifier schema `JobPosting` validé sur schema.org pour les premières offres
- GBP ODBM créé avec catégorie principale **"Entreprise de construction"**, catégories secondaires "Entreprise de génie civil", "Entreprise d'étanchéité"

---

## 10. Rappels critiques (héritage context §10)

- ❌ Pas de mise en ligne sans GSC + sitemap soumis le jour même
- ❌ Canonical = domaine sans www, sans trailing slash, sans `.html`
- ❌ Page count V1 : 5-6 max. Pas de pages métier × ville. Pas de fiches projet individuelles tant que les pages parent ne sont pas indexées.
- ❌ Pas d'AI-content brut — toute copy passe par revue humaine
- ❌ Formulaire candidature = données personnelles = consentement explicite obligatoire (CNDP)

---

**Fin v0.1.**

> Ce brief est à enrichir en phase Discovery avec le client. À chaque session, mettre à jour le Session log + la liste Pending.
