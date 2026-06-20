# ODBM — Project Brief

> **Ce document fait partie d'un système à 4 documents.**
> - **`ATLASEO_strategy.md`** — vision, positionnement, pricing, plan 12 mois (hérité, lecture seule pour ce projet)
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation (hérité, lecture seule)
> - **`odbm_brief.md`** — ce fichier. Spec projet ODBM.
> - **`odbm_backlog.md`** — tableau de bord opérationnel des tâches projet.
>
> **Hiérarchie** : ce brief hérite des deux docs ATLASEO. Pour les décisions de stratégie ou de méthode, ne pas re-débattre ici — référer aux docs parents. Ce brief contient uniquement les décisions spécifiques au projet ODBM.
>
> **Created**: 2026-06-15 — v0.1 (kickoff)
> **Last updated**: 2026-06-19 — v0.2 (post-session Discovery Q/R structurée)
>
> **Session log:**
> - 2026-06-XX — Premier contact WhatsApp ODBM (ami du founder), benchmark envoyé (tgcc, citymo, sgtm + refs FR/international)
> - 2026-06-XX — Deck commercial `ATLASEO_Proposition_ODBM.pptx` livré (14 slides, sans prix, focus site + GBP)
> - 2026-06-XX — Réunion ODBM, accord sur le scope Pack Visibilité. ODBM demande ajout module Carrières (page + candidature spontanée).
> - 2026-06-15 — Brief ODBM v0.1 créé. Project Claude `ODBM_site` initialisé.
> - 2026-06-19 — Session Discovery Q/R structurée (founder + Claude). Réception fiche d'identité ODBM officielle + logo JPEG. Acquisition de 19 décisions structurantes, consolidation de 14 Pending à clarifier avec Yassine en post-draft. Brief v0.2 produit.
>
> **Pending (à clarifier avec Yassine en post-draft) :**
> - [ ] **Présence physique Casa** pour adresse GBP (bureau, dépôt, atelier — sinon Mansouria par défaut)
> - [ ] **Liste exhaustive des métiers** (validation gros œuvre / génie civil / étanchéité / Entreprise Générale + ajouts éventuels)
> - [ ] **Métier phare / axe de développement commercial** des 12-24 prochains mois
> - [ ] **Inventaire détaillé des projets** (4 connus à date : nom, lieu, type, MO, année, volume)
> - [ ] **Certificat ISO 9001 TÜV NORD** (PDF avec numéro, périmètre, dates) — **bloquant publication site**
> - [ ] **Autres certifications/agréments/affiliations** (Qualification BTP marocaine, RC pro, décennale, agréments publics, FNBTP, CGEM, ISO 14001/45001)
> - [ ] **Chiffres clés** (année création, effectifs permanents/chantier, projets livrés, surface construite, CA si publiable)
> - [ ] **Partenariats récurrents** (bureaux d'études, architectes, sous-traitants clés)
> - [ ] **Profils types recrutés** (chefs de chantier, conducteurs travaux, ingénieurs, ouvriers spécialisés, etc.)
> - [ ] **2-3 anciennes annonces LinkedIn** de recrutement (calibrage template offre + détection profils types)
> - [ ] **Logo ODBM en SVG ou PNG transparent HD** (sinon vectorisation gratuite par ATLASEO dans le scope)
> - [ ] **Photo professionnelle de Yassine** pour page À propos (ou autorisation extraction still vidéo)
> - [ ] **Validation scénario Carrières A** (autonome via CMS Decap — reco interne ATLASEO)
> - [ ] **Adresse email destinataire** des formulaires (contact + candidatures + RGPD/CNDP — point de contact unique)
>
> **Volet hors workflow client (à finaliser côté ATLASEO avant émission devis officiel) :**
> - Structure juridique ATLASEO et modalités de facturation conforme (ICE, IF, RC ATLASEO)

---

## 1. Site Overview

- **Client** : ODBM — L'Omnium des Bâtisseurs Marocains
- **Forme juridique** : SARL au capital de 5 000 000 MAD
- **Gérant** : Yassine EL FADLI
- **R.C.** : 7705-BENSLIMANE | **ICE** : 002540829000091 | **IF** : 45872816 | **Patente** : 39940328 | **CNSS** : 2068952
- **Siège juridique** : Bureau 9, Imm 2, 2ème étage, Résidence Perle Bentria, El Mansouria, Bouznika
- **Banque** : AWB-CA EL MECHOUAR CASABLANCA | **RIB** : 007780000341500000172623
- **Secteur** : BTP — gros œuvre, génie civil, étanchéité (positionnement "Entreprise Générale")
- **Activité réelle** : nationale — chantiers à Casablanca, Rabat, Marrakech et autres villes du Maroc
- **Domaine confirmé** : `entrepriseodbm.ma` (à acheter via ANRT, vérification disponibilité en Phase 1)
- **Type de site** : Showcase site / vitrine d'agence BTP avec module Carrières (V1 intégré)
- **Langue** : Français (mono-langue, pas d'i18n)
- **Pages V1 estimées** : 6 indexables (Accueil, À propos, Réalisations, Métiers, Carrières, Contact) + 2 legal noindex
- **CTA model** : Option A étendue — WhatsApp + click-to-call + mailto, **+ formulaire candidature** sur page Carrières (route Worker `/api/candidature`)
- **Canonical format** : `https://entrepriseodbm.ma/page` (no www, no trailing slash, no .html — règle héritée context §10)
- **Pack vendu** : Pack Visibilité (7 000 MAD + 500 MAD/an) + module Carrières scénario A en add-on (1 500 MAD + 2 500 MAD = +4 000 MAD one-shot) → **Total proposé : 11 000 MAD one-shot + 500 MAD/an**

---

## 2. Profil client — Synthèse consolidée v0.2

### 2.1 Identité visible et présence digitale actuelle

- **Site web actuel** : ❌ aucun
- **Fiche Google Business** : ❌ aucune
- **Domaine** : `entrepriseodbm.ma` choisi (à acheter)
- **LinkedIn** : ✅ https://www.linkedin.com/company/l-omnium-des-batisseurs-marocains-odbm/ — **géré directement par Yassine**
- **Instagram** : ✅ https://instagram.com/entreprise_odbm
- **Annuaire** : ✅ fiche kerix.net — https://www.kerix.net/fr/annuaire-entreprise/odbm
- **Email actuel** : `odbm-travaux@hotmail.com` (Hotmail — à upgrader vers `@entrepriseodbm.ma` à terme, hors scope V1)

### 2.2 Gouvernance projet

- **SPOC unique côté client** : **Yassine EL FADLI**, gérant et décideur final
- **Pas de comité de validation à étages** — décisions rapides, mais disponibilité Yassine sera le facteur limitant du planning (gérant PME BTP en activité, chantiers prioritaires)
- **Canal de communication** : WhatsApp principal, appels téléphoniques en backup pour sujets lourds
- **Tone client** : tutoiement (ami direct du founder ATLASEO)
- **Discipline livrables** : tout livrable formel (devis PDF, contrat, maquettes validées, lien staging) doit transiter par un canal traçable — WhatsApp avec PDF + message récap clair acceptable, email ponctuel pour archivage si besoin

### 2.3 Audiences cibles du site (4 profils)

Mix B2B premium + B2C haut de gamme. Toutes les audiences cibles sont des **décideurs informés ou des professionnels du secteur** — le ton du site est calibré en conséquence (vocabulaire métier assumé, pas de vulgarisation grand public).

| Audience | Recherche prioritaire | Trust signals qui marchent |
|---|---|---|
| **Promoteurs immobiliers** | Fiabilité, capacité financière, respect des délais, références multi-projets | ISO 9001, capital 5 MMAD, références chantiers livrés, chiffres clés effectifs |
| **Hôteliers / opérateurs touristiques** | Expérience projets complexes (technique + esthétique + délais hôteliers serrés), références balnéaires | Magic House (asset clé), photos drone, équipe visible |
| **Bureaux d'études / architectes** | Partenaire technique fiable, capable de dialoguer plans/CCTP, respect maîtrise d'œuvre | ISO 9001, vocabulaire technique BTP, mention de BE partenaires (à compléter Yassine) |
| **Particuliers fortunés / investisseurs** | Interlocuteur direct, sérieux administratif, discrétion, sur-mesure | Yassine identifié (mot du gérant vidéo), forme juridique solide, équipe humaine |

**Conséquence éditoriale** : pas de pitch type "vous voulez construire votre rêve" (insultant pour BE, inutile pour promoteur). Pas de mots-clés marketing creux ("excellence", "passion", "savoir-faire unique", "satisfaction garantie", "à votre écoute"). Vocabulaire métier assumé : "contractant général", "maître d'œuvre", "TCE", "VRD", "PV de réception", "CCTP" si pertinent.

### 2.4 Forces commerciales à mettre en avant

- **Certification ISO 9001 TÜV NORD active**, périmètre global (toute l'activité ODBM certifiée) — **trust signal central du site**
- **Capital social 5 MMAD** (officiel sur fiche, utilisable sans risque)
- **Forme juridique SARL** stable
- **Activité nationale réelle** (Casa, Rabat, Marrakech) — pas une PME locale repliée sur une zone
- **Projets photogéniques** (Magic House balnéaire à Mansouria, immeubles RDC+5 Casa, autres à inventorier)
- **Variété des chantiers** (résidentiel + balnéaire + génie civil) — couverture multi-segments
- **Présence sociale active** (LinkedIn géré par le gérant, Instagram actif) — preuve d'activité réelle, pas une coquille vide
- **Espace blanc concurrentiel** : aucun concurrent PME BTP marocain n'a un site moderne + fiche Google bien optimisée + vidéos équipe authentiques

---

## 3. Assets disponibles côté ODBM

### 3.1 Logo

- Format actuel : **JPEG** (`Logo_ODBM.jpeg`) — limites : fond blanc non transparent, compression destructive
- Format cible : **SVG** (idéal) ou **PNG transparent HD** (1500-2000px min)
- **Pending Yassine** : récupération version vectorielle/HD si disponible chez son graphiste d'origine
- **Plan de contingence** : si non disponible, **ATLASEO vectorise gratuitement dans le scope** Pack Visibilité (~30 min de travail Adobe Illustrator/Figma)
- **Composantes visuelles du logo** : typographie géométrique très lourde (proche Eurostile / Bank Gothic), accent **bleu cobalt** sur le B, reste en **gris anthracite**. Tagline "L'OMNIUM DES BÂTISSEURS MAROCAINS". Mention "Entreprise Générale" présente sur supports officiels.

### 3.2 Photos et vidéos chantiers (asset majeur)

- **Photos** : différents chantiers, vues drone disponibles
- **Vidéos drone** : disponibles pour plusieurs projets
- **Best-of projets** : compilation disponible
- **Nombre de projets identifiés à date** : 4 (Magic House Mansouria + immeubles RDC+5 Casa connus, 2 autres à inventorier avec Yassine)
- **Implication design `/realisations` V1** : **mosaïque verticale**, une carte par projet, format généreux (2-3 photos par carte, vidéo drone embarquée pour projets photogéniques). Pas de filtres (inutiles à 4 projets, signal "site vide qui fait semblant"). Pas de fiches projet individuelles V1 (règle context §10 — pas de pages enfants tant que page parent pas indexée).
- **Évolution V2 (à 12 mois)** : à 8-10 projets total, passage en grille bento ou filtres légers, création éventuelle de fiches projet `/realisations/[slug]`.

### 3.3 Interviews vidéo équipe (asset différenciateur fort)

- **Format** : vidéos 2-3 minutes
- **Intervenants** : mix Yassine (gérant) + chefs de chantier
- **Contenu** : présentation métier + témoignage projet
- **Qualité** : tournage **semi-pro** (utilisable web, vérification audio/sous-titres à prévoir avant intégration)
- **Pourquoi c'est rare au Maroc BTP** : aucun concurrent direct (TGCC, SGTM, citymo, sebtp) ne montre ses chefs de chantier en vidéo. Approche **Turner Construction** à l'international, totalement absente du marché marocain.
- **Implications intégration site** :
  - **Page À propos** : section "Mot du gérant" (vidéo Yassine) + section "Nos métiers vus par ceux qui les font" (vidéos chefs de chantier)
  - **Page Métiers** : si un chef de chantier parle spécifiquement d'un métier (gros œuvre / génie civil / étanchéité), sa vidéo s'intègre dans la section correspondante
  - **Accueil** : possible teaser vidéo (15-20s) ou section "L'équipe" avec CTA vers /a-propos (arbitrage Phase 2)
- **Hébergement vidéo recommandé** : **Cloudflare Stream** (cohérence stack, contrôle, perf, ~5$/mois stockage + 1$/1000 min vues). Alternatives : YouTube unlisted (gratuit mais branding YT sur site premium) ou Vimeo Pro (~7€/mois, redondant avec Stream).
- **Post-production possiblement nécessaire** :
  - **Sous-titres FR obligatoires** (accessibilité + SEO + mobile sans son)
  - Vérification qualité audio chefs de chantier (bruit chantier, vent)
  - Formats secondaires possibles (9:16 ou 1:1 pour réseaux sociaux)

### 3.4 Fiche d'identité ODBM (récupérée le 2026-06-19)

- PDF officiel fourni — toutes les données légales et bancaires intégrées en §1
- Indique `www.odbm.ma` comme site web → **conflit avec décision domaine `entrepriseodbm.ma`** : à clarifier en Phase 1 (Yassine possède-t-il odbm.ma ? Si oui, mise en place redirection 301 vers entrepriseodbm.ma)

---

## 4. Add-on Carrières — Reco interne scénario A

### 4.1 Reco interne consolidée

**Scénario A — Autonome via mini-CMS Decap** retenu en interne, à confirmer avec Yassine.

**Justification** : fréquence de recrutement déclarée régulière (6-12 offres/an estimé, à confirmer). À cette fréquence :
- Scénario B (géré ATLASEO à 150 MAD/offre ou 400 MAD/mois forfait) crée 6-12 tâches récurrentes peu rentables côté ATLASEO et un point de friction "publier l'offre urgente dimanche soir"
- Scénario A (CMS autonome, +1 500 MAD one-shot vs B) se rembourse côté client dès la 4e offre publiée, et donne autonomie complète à ODBM

**Argument vente à Yassine** : *"Tu restes maître de ton recrutement, pas dépendant de notre agenda. Tu publies une offre en 5 minutes quand tu veux."*

### 4.2 Choix CMS — Decap (vs TinaCMS)

**Decap CMS** préféré pour ODBM :
- **Gratuit, git-based**, hébergé sur le repo, pas de service tiers payant ni de freemium tier qui bascule
- Interface plus brute mais suffisante pour publier des offres d'emploi (5-6 champs)
- Plus pérenne long terme qu'un service cloud freemium

### 4.3 Brique technique (validée scénario A)

- Page `/carrieres` listant les offres
- Offres en *content collection* Astro (un `.md` par offre)
- **Decap CMS** comme interface de publication pour Yassine
- Formulaire de candidature spontanée + dépôt CV
- Route Worker `/api/candidature` → **Resend** → mail destinataire fourni par Yassine (variable d'environnement `RH_EMAIL`, pas en dur)
- Schema **JobPosting** par offre (Google for Jobs)
- Case **consentement CNDP/RGPD** bloquante (collecte CV = données personnelles)
- Optionnel V2 : archivage CV dans Cloudflare R2 (hors scope V1)

### 4.4 Schéma de contenu offre d'emploi (template Decap)

Champs prévus dans le template (couvre tous les profils BTP typiques, profils précis à confirmer Yassine) :
- Intitulé du poste (texte libre)
- Type de contrat (select : CDI / CDD / Stage / Alternance / Intérim)
- Localisation (texte libre — ville + chantier si pertinent)
- Expérience requise (texte libre ou tranches débutant / 2-5 ans / 5+ ans)
- Niveau d'études (texte libre)
- Missions principales (texte riche markdown)
- Profil recherché (texte riche markdown)
- Avantages éventuels (texte riche markdown, optionnel)
- Date de publication
- Statut (actif / expiré)

Le schema JSON-LD `JobPosting` se construit automatiquement à partir de ces champs.

### 4.5 Adresse email destinataire des candidatures

- **Approche routing-only côté ATLASEO** : pas de création d'email pro pour ODBM
- Le formulaire poste vers l'adresse fournie par Yassine (à confirmer — probablement `odbm-travaux@hotmail.com` par défaut)
- Variable d'environnement `RH_EMAIL` pour pouvoir changer sans rebuild
- **Configuration DNS requise** : SPF/DKIM/DMARC sur `entrepriseodbm.ma` pour permettre l'envoi via Resend depuis `no-reply@entrepriseodbm.ma` ou `formulaire@entrepriseodbm.ma`
- **Point d'attention délivrabilité Hotmail** : Hotmail/Outlook plus sévère que Gmail sur filtrage spam, surtout transactionnel avec PJ. **Test obligatoire en conditions réelles** avant mise en prod (envoi candidature test → vérification arrivée + pas en spam).

### 4.6 Pricing Carrières scénario A

- **One-shot** : 7 000 MAD (Pack Visibilité) + 2 500 MAD (module Carrières) + 1 500 MAD (setup CMS Decap) = **11 000 MAD**
- **Récurrent** : 500 MAD/an (hébergement Cloudflare + domaine + maintenance technique de base)

---

## 5. Design System — Direction validée v0.2

### 5.1 Références et anti-références

- **Référence positive validée par Yassine** : **TGCC** (tgcc.ma) — sobriété, photographie chantier dominante, hiérarchie claire, chiffres bruts en avant, ton institutionnel sérieux
- **Anti-référence explicite** : **SGTM** — "trop clinquant pour le domaine" (animations, transitions, effets glassy/parallax excessifs → mauvais signal de crédibilité B2B BTP)
- **Implication** : ODBM s'inspire de la **discipline éditoriale et visuelle de TGCC** (transposée à l'échelle PME) + **différenciateurs ODBM** que TGCC n'a pas (vidéos chefs de chantier, photos drone, traitement éditorial cards-projets)

### 5.2 Palette web (à valider Phase 2 sur maquettes)

Construite à partir du logo + neutres + accents fonctionnels. **Pas de jaune sécurité ou orange BTP** : le bleu cobalt du logo fait déjà l'accent visuel, ajouter une 3e couleur diluerait l'identité.

| Rôle | Couleur | Origine |
|---|---|---|
| Primaire / accents / CTAs | **Bleu cobalt** (~`#1B3FBB` ou `#1E40AF`, à éyedropper précisément du logo vectoriel) | Extrait du B du logo |
| Secondaire / structure / headings | **Gris anthracite** (~`#3F3F46` ou `#27272A`, à confirmer) | Extrait du O-D-M du logo |
| Fond principal | Blanc / off-white (`#FFFFFF`, `#FAFAFA`) | Neutre standard |
| Fond alterné (sections) | Gris clair béton (`#F4F4F5` ou similaire) | Cohérence univers BTP |
| États fonctionnels | Vert success / rouge erreur (standard Tailwind) | Interface uniquement, pas de communication |

### 5.3 Divergences du starter ATLASEO

Le starter ATLASEO fournit la fondation technique (Astro, Tailwind, Material Symbols, composants de base) mais **l'expression visuelle ODBM diverge significativement** d'ATLASEO.ma. Le site ODBM ne doit pas ressembler à un fork visible d'ATLASEO.ma.

**À désactiver ou simplifier** :
- ❌ **Collaboration stepper interactif** (auto-advance 5s, crossfade SVG, progress ring) → trop "saas/agence", remplacer par timeline projet statique ou processus en 3 étapes simples
- ❌ **Glassmorphism** des cards ATLASEO → à atténuer ou retirer pour ODBM (trop tech-startup, mauvais pour univers BTP)
- ❌ **Gradients sur mots-clés H1** (le "croissance" en gradient vert ATLASEO) → typo monochrome solide sur ODBM
- ❌ **Milled button** vert gradient ATLASEO → bouton plat solide bleu cobalt ODBM
- ❌ **Bento grid avec dark mode + glassmorphism** → garder principe (variation tailles de cards) mais simplifier visuellement (moins de cards en dark mode, moins d'icônes décoratives)
- ❌ **Animations excessives** (cohérent avec anti-référence SGTM) — transitions courtes, pas de scroll-jacking, pas d'effets gratuits

### 5.4 Typographie display (à arbitrer Phase 2)

Le logo ODBM a une typo très géométrique (proche Eurostile / Bank Gothic). La display web doit dialoguer avec elle, pas la contredire.

**Candidates à benchmarker en Phase 2** :
- **Hanken Grotesk** (typo starter ATLASEO actuelle) — option par défaut, à challenger
- **IBM Plex Sans** — plus géométrique/industrielle, dialogue mieux avec logo
- **Archivo** — sans-serif sobre, registre institutionnel
- **Space Grotesk** — moderne mais peut sembler trop tech-startup

**Décision finale** sur premières maquettes (Stitch ou HTML proto direct).

### 5.5 Photographie et vidéo

- **Hero accueil** : **photo chantier plein écran** (drone Magic House ou immeuble Casa) avec overlay sombre subtil pour lisibilité texte — différenciateur visuel majeur, aucun concurrent direct ne fait ça correctement
- **Page Réalisations** : photos travaillées en cards-projets style éditorial type magazine architecture (pas du portfolio générique grille uniforme)
- **Vidéos** : intégration directe dans pages À propos et Métiers (cf §3.3) — différenciateur fort

### 5.6 Ton éditorial validé

**Direction : ingénierie + fierté du métier + chiffres bruts assumés**.

- Sérieux dans le fond (vocabulaire technique BTP, données chiffrées, certif ISO mise en avant)
- Humain dans la forme (équipe visible, chefs de chantier qui parlent, ton respectueux du métier)
- **Chiffres bruts assumés** dès qu'on en a (ex: "8 ans d'expérience", "27 chantiers livrés", "5 MMAD de capital", "100% ISO 9001") plutôt que formules littéraires creuses
- **Bannir** : "expertise reconnue", "excellence", "passion", "savoir-faire unique", "satisfaction garantie", "à votre écoute"
- **Assumer** : "contractant général", "maître d'œuvre", "TCE", "lots techniques", "VRD", "PV de réception", "CCTP" si pertinent

### 5.7 Mise en avant du gérant Yassine

**Niveau "présence mesurée" — mix B+A** : Yassine est présent, identifié, visible, mais le site ne tourne pas autour de sa personne.

| Page | Présence Yassine |
|---|---|
| Accueil | Aucune (le site présente ODBM, pas Yassine) |
| À propos | **Section "Mot du gérant"** : vidéo 2-3 min + nom + fonction "Gérant et fondateur d'ODBM" + photo pro. Pas de pavé biographique. |
| Métiers | Aucune (ce sont les chefs de chantier qui parlent ici) |
| Réalisations | Aucune (les projets parlent d'eux-mêmes) |
| Footer / Mentions légales | "Gérant : Yassine EL FADLI" (obligatoire) |
| Schema Organization | `founder` avec nom de Yassine (boost E-E-A-T, signal GEO/AEO) |

---

## 6. Sitemap V1

### 6.1 Pages indexables (6)
/ → Accueil (hero photo chantier + chiffres clés + 3 métiers + 4 projets phares + section équipe + CTA contact)

/a-propos→ ODBM histoire/équipe/valeurs/certifications, Mot du gérant Yassine (vidéo), interviews chefs de chantier

/realisations→ Portfolio 4 projets en mosaïque verticale (Magic House, immeubles Casa, + 2 autres à inventorier)

/metiers→ Gros œuvre / Génie civil / Étanchéité (sections sur une seule page, posture Entreprise Générale transverse — pages séparées V2 si chacune ≥1500 mots et trafic le justifie)

/carrieres→ Liste offres dynamiques (Decap CMS) + formulaire candidature spontanée

/contact→ Coordonnées NAP officiel + carte + WhatsApp + click-to-call + formulaire contact simple

### 6.2 Pages legal (noindex, footer uniquement)
/mentions-legales→ Mentions légales (Cloudflare hébergeur + ATLASEO réalisation/maintenance avec backlink atlaseo.ma)

/confidentialite→ Politique de confidentialité conforme CNDP/RGPD (template ATLASEO adapté)
**Important UX/légal** : la page `/confidentialite` est **accessible depuis le footer + via consentement bloquant** sur les formulaires (contact et candidature) — case à cocher obligatoire avec lien actif vers la page. Pas dans la navbar.

### 6.3 Pages V2 potentielles (à n'ajouter qu'après V1 indexée — règle context §10)

- `/realisations/[slug]` — fiche détaillée par projet (uniquement si volume 8-10 projets et chacune ≥1200 mots)
- `/metiers/gros-oeuvre`, `/metiers/genie-civil`, `/metiers/etancheite` — uniquement si chacune ≥1500 mots et trafic le justifie
- Pages géolocalisées `/realisations-casablanca`, `/realisations-rabat`, `/realisations-marrakech` — uniquement adossées à de vrais projets locaux, pas du copier-coller géo

---

## 7. SEO — Stratégie ODBM

### 7.1 Principe directeur (hérité strategy + adapté BTP)

ODBM ne cherche pas à battre TGCC, SGTM, citymo sur les requêtes nationales BTP saturées à court terme. La stratégie est de **gagner sur les terrains où la concurrence est faible** :
- Requêtes longue traîne géo-métier ("entreprise gros œuvre [quartier Casa]", "constructeur immeuble résidentiel Mohammedia")
- Requêtes verticales ("entreprise générale Maroc certifiée ISO 9001")
- Requêtes recrutement BTP ("offres emploi chef de chantier Casablanca" via JobPosting)
- **Réponses IA** (ChatGPT, Perplexity, Claude, Gemini) — terrain quasi vierge au Maroc BTP en 2026

### 7.2 Architecture SEO cible V1 (focus Casa) + ouvertures V2

**V1 lancement** : positionnement national assumé, focus Casa pour fiche GBP et schema LocalBusiness (concentration des recherches BTP au Maroc). On évite les 4 pages géo dès le départ — règle context §10, pas de cluster d'un coup sur domaine neuf.

**V2 (mois 4-9 post-lancement, si volume + budget justifient)** : ouverture progressive `/realisations-casablanca`, `/realisations-rabat`, `/realisations-marrakech` — **adossées à de vrais projets locaux** (pas du copier-coller géo).

### 7.3 Mots-clés cibles V1

**Primaires** :
- entreprise gros œuvre maroc / casablanca
- entreprise construction maroc / casablanca
- entreprise générale BTP maroc
- entreprise génie civil maroc
- étanchéité bâtiment maroc

**Longue traîne (faible concurrence, forte intention)** :
- entreprise gros œuvre RDC+X Casablanca
- entrepreneur général Casablanca
- construction immeuble résidentiel maroc
- entreprise BTP certifiée ISO 9001 maroc
- entreprise BTP recrutement maroc (page Carrières)
- complexe balnéaire construction maroc (asset Magic House)

### 7.4 Schema markup prévu

- **`Organization`** + **`LocalBusiness`** sur toutes les pages (siège ODBM, NAP cohérent)
  - `founder` : Yassine EL FADLI
  - `hasCredential` : ISO 9001 TÜV NORD (numéro certif à compléter Yassine)
  - `taxID` : ICE 002540829000091
  - `vatID` : IF 45872816
  - `legalName` : ODBM SARL
- **`BreadcrumbList`** sur toutes les pages internes
- **`JobPosting`** sur chaque offre Carrières (Google for Jobs visibility)
- **`FAQPage`** si FAQ pertinente sur Accueil ou Carrières
- **`ItemList`** sur page Réalisations (liste de projets)

### 7.5 Fiche Google Business Profile

- **Catégorie principale** : Entreprise de construction
- **Catégories secondaires** : Entreprise de génie civil, Entreprise d'étanchéité
- **Adresse GBP** : **arbitrage en Phase 1** selon présence physique Casa confirmée par Yassine
  - Option A (si présence Casa) : adresse Casa (bureau commercial, dépôt, atelier) — beaucoup plus efficace SEO local (gros volume recherche)
  - Option B (par défaut) : adresse siège Mansouria/Bouznika — cohérent fiche d'identité mais zone faible volume
- **NAP cohérent partout** : nom "ODBM" (ou "ODBM — L'Omnium des Bâtisseurs Marocains" si caractères dispo), téléphone et adresse identiques sur site + GBP + LinkedIn + kerix
- **Photos** : sélection 8-12 photos chantiers (Magic House drone + immeubles Casa + chantier équipe) + logo + intérieur bureau si dispo
- **Premier post de lancement** + post mensuel récurrent (signal d'activité GBP)

---

## 8. Stack technique

Hérité du starter ATLASEO (cf. `ATLASEO_context.md §1 et §5`) :
- **Astro** + **Tailwind v4** + **Cloudflare Workers Static Assets** + **Wrangler**
- Repo GitHub privé : `fendragond/odbm-entrepriseodbm-ma` (nom à confirmer en Phase 1)
- Pas de BDD

**Spécificités ODBM (nouveau pattern pour starter futurs clients)** :
- **Route Worker `/api/candidature`** — le site arrête d'être 100% statique. Pattern à intégrer au starter pour futurs clients avec besoins formulaire complexe.
- **Decap CMS** intégré au repo pour gestion offres d'emploi par le client
- **Cloudflare Stream** pour hébergement vidéos (interviews équipe, possiblement drone hero)
- **Variables d'environnement** : `RH_EMAIL` (destinataire candidatures), `RESEND_API_KEY` (envoi email), à configurer Wrangler

### 8.1 Décisions techniques actées

- Service email transactionnel : **Resend** (cohérence stack moderne, bonne délivrabilité Maroc)
- Archivage CV V1 : **non** (mail direct vers RH_EMAIL avec CV en PJ). V2 possible avec R2 si Yassine en exprime le besoin.
- CMS Carrières : **Decap** (git-based, gratuit, pérenne)
- Hébergement vidéo : **Cloudflare Stream** (cohérence stack + perf + contrôle)
- Stratégie images chantiers : compression batch (Squoosh ou Sharp en build pipeline), formats **WebP + fallback JPG**, lazy loading systématique (pages Réalisations et Accueil seront riches en photos)

### 8.2 Configuration DNS (à anticiper Phase 4 Launch)

- Achat domaine `entrepriseodbm.ma` via ANRT
- Nameservers Cloudflare
- DNS records : A/CNAME + redirect www → non-www
- **SPF/DKIM/DMARC** pour Resend (envoi `no-reply@entrepriseodbm.ma` ou `formulaire@entrepriseodbm.ma`)
- Configuration domaine custom sur Cloudflare Worker

---

## 9. Images et assets à récupérer / produire

| Asset | Usage | Source | Format cible | Statut |
|---|---|---|---|---|
| Logo ODBM | Navbar, footer, OG, schema | Yassine (graphiste origine) | SVG ou PNG transparent HD | **Pending** (sinon vectorisation gratuite ATLASEO) |
| Hero chantier drone | Accueil hero plein écran | Dossier photos client | WebP 1920×1080 + 9:16 mobile | Disponible (Magic House ou immeuble Casa) |
| Portfolio 4 projets | /realisations | Dossier photos client | WebP plusieurs tailles | Disponible (à inventorier) |
| Photos métiers (gros œuvre, génie civil, étanchéité) | /metiers + Accueil | Dossier photos client | WebP | Disponible (à curer) |
| Portrait Yassine professionnel | /a-propos section "Mot du gérant" | À demander à Yassine, sinon still extrait vidéo | WebP 800×800 | **Pending** |
| Vidéos interviews (Yassine + chefs de chantier) | /a-propos + /metiers | Dossier vidéos client | MP4 → Cloudflare Stream | Disponible (à curer + sous-titrer) |
| Photo siège Mansouria ou bureau Casa | /contact | À demander ou Google Street View | WebP 800×400 | Pending selon arbitrage adresse GBP |
| OG default image | Toutes pages (fallback) | Design ATLASEO basé sur ODBM | JPG 1200×630 | À créer en Phase 3 |
| Certificat ISO 9001 TÜV NORD | Visuel /a-propos + référence schema | Yassine | PDF + extrait image | **Pending — bloquant publication** |

---

## 10. Devis et contractualisation

### 10.1 Pricing consolidé

**Pack Visibilité + Module Carrières scénario A (reco interne)** :

| Composante | Montant (MAD) |
|---|---|
| Pack Visibilité (site 6 pages + GBP + SEO local + suivi 1 mois) | 7 000 |
| Module Carrières (page + formulaire + JobPosting schema + setup Resend) | 2 500 |
| Setup CMS Decap (interface autonome publication offres) | 1 500 |
| **TOTAL one-shot** | **11 000** |
| Récurrent annuel (hébergement Cloudflare + domaine + maintenance technique) | **500/an** |

**Alternative si Yassine refuse l'autonomie (scénario B — géré ATLASEO)** :
- One-shot : 7 000 + 2 500 = 9 500 MAD
- Récurrent : 500 MAD/an + 150 MAD/offre publiée OU 400 MAD/mois forfait illimité
- Le devis officiel sera proposé **scénario A par défaut** avec scénario B en option chiffrée clairement en alternative.

### 10.2 Modalités de paiement

**30 / 40 / 30** sur le total one-shot 11 000 MAD :

| Étape | % | Montant (MAD) | Déclencheur |
|---|---|---|---|
| Signature contrat | 30% | 3 300 | Bon de commande signé, début Discovery confirmé |
| Validation maquettes | 40% | 4 400 | Maquettes design system + 4-5 pages clés validées par Yassine |
| Livraison V1 | 30% | 3 300 | Site en ligne sur `entrepriseodbm.ma`, GBP créée, GSC configurée |

**Récurrent annuel** : 500 MAD/an facturé à l'anniversaire de la mise en ligne, payable d'avance.

### 10.3 Délai et engagement

- **Pas d'engagement de date de livraison** côté ODBM
- **Mode itératif assumé** : draft → feedback Yassine → ajustements → validation → livraison
- **Estimation interne réaliste (non communiquée à Yassine)** :
  - Phase 1 fin → fin juin / début juillet (réponses Yassine aux Pending)
  - Phase 2 → 2 semaines (mood board → maquettes validées)
  - Phase 3 → 3-4 semaines (build complet V1)
  - Phase 4 → 1 semaine (lancement + GBP + GSC + GA4)
  - **Livraison V1 réaliste : fin août - mi-septembre 2026**

---

## 11. Launch checklist (héritée context §7)

Pre-launch, Launch day, Post-launch — voir `ATLASEO_context.md §7`. Adaptations ODBM :
- Vérifier que **formulaire candidature** fonctionne en prod (envoi test CV → arrivée mail destinataire + pas en spam Hotmail)
- Vérifier consentement CNDP/RGPD cliquable et bloquant sur formulaires contact + candidature
- Vérifier schema **`JobPosting`** validé sur schema.org pour les premières offres
- GBP ODBM créée avec catégorie principale **"Entreprise de construction"**, catégories secondaires "Entreprise de génie civil", "Entreprise d'étanchéité"
- Premier post GBP de lancement publié
- Vérifier intégration et chargement vidéos Cloudflare Stream sur mobile + desktop
- **Bloquant publication** : certificat ISO 9001 TÜV NORD reçu et numéro de certification renseigné dans schema `hasCredential`

---

## 12. Rappels critiques (héritage context §10)

- ❌ Pas de mise en ligne sans GSC + sitemap soumis le jour même
- ❌ Canonical = `entrepriseodbm.ma` sans www, sans trailing slash, sans `.html`
- ❌ Page count V1 : 6 indexables max + 2 legal noindex. Pas de pages métier × ville. Pas de fiches projet individuelles tant que `/realisations` pas indexée + 8-10 projets atteints.
- ❌ Pas d'AI-content brut — toute copy passe par revue humaine
- ❌ Formulaire candidature = données personnelles = consentement explicite obligatoire (CNDP)
- ❌ Pas d'affichage logo ISO 9001 TÜV NORD sans certificat officiel reçu et numéro renseigné dans schema (risque légal + signal SEO incomplet)
- ❌ Pas de mise en avant de Yassine au-delà du périmètre validé (section "Mot du gérant" sur /a-propos uniquement, pas en hero accueil)

---

**Fin v0.2.**

> Ce brief est à enrichir à chaque session avec le client. Prochaine mise à jour prévue : post-message WhatsApp Yassine accompagnant le premier draft de maquettes (Phase 2).
