# ATLASEO — Document Stratégique

> **Ce document fait partie d'un système à 3 documents.**
> - **`ATLASEO_strategy.md`** — ce fichier. Vision, positionnement, pricing, plan 12 mois. **Master doc — source de vérité business.**
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation, règles dures (s'applique à tous les projets).
> - **`atlaseo-ma_brief.md`** (ou `<client>_brief.md`) — projet en cours.
>
> **Hiérarchie** : Strategy définit le *quoi* et le *pourquoi*. Context définit le *comment*. Brief définit le projet précis. En cas de doute, strategy gagne.
>
> **Statut** : v2.0 — Document de référence stratégique
> **Date** : Mai 2026
> **Usage** : Contexte permanent à coller dans les prompts IA (Claude, ChatGPT) pour orienter toutes les décisions ATLASEO.
> **Fondement** : Analyse benchmark de 14 sites concurrents + retour d'expérience dryousra.ma + leçons d'indexation Google + observation du marché marocain en 2026.

---

## Table des matières

1. [Synthèse exécutive — 1 page](#1-synthèse-exécutive)
2. [Diagnostic du marché marocain](#2-diagnostic-du-marché-marocain)
3. [Positionnement ATLASEO](#3-positionnement-atlaseo)
4. [Stratégie produit et pricing](#4-stratégie-produit-et-pricing)
5. [Stratégie SEO + GEO](#5-stratégie-seo--geo)
6. [Stratégie de contenu et d'autorité](#6-stratégie-de-contenu-et-dautorité)
7. [Plan d'action priorisé 12 mois](#7-plan-daction-priorisé-12-mois)
8. [Métriques et KPIs](#8-métriques-et-kpis)
9. [Anti-modèles — ce qu'il ne faut PAS faire](#9-anti-modèles)
10. [Annexes](#10-annexes)

---

## 1. Synthèse exécutive

**Vision** : ATLASEO est l'agence web premium accessible du marché marocain, combinant le design d'un studio créatif international et le SEO discipliné d'une agence locale établie. Cible prioritaire : professions libérales (médecins, dentistes, avocats) et PME marocaines (10-50 employés) à Casablanca, Rabat, Marrakech, Tanger.

**Différenciateurs uniques** :
- Stack technique moderne (Astro + Cloudflare Workers Static Assets) → performance Lighthouse 99/100 mobile et desktop
- Design system propriétaire (Hanken Grotesk, bento grids, glassmorphisme) → niveau visuel rare au Maroc
- Workflow IA-assisté (Claude Pro stratégie + Cursor exécution) → vélocité de production 5-10x supérieure aux agences classiques
- Canal d'acquisition asymétrique via Dr Yousra (100k followers Instagram, accès à la communauté médicale esthétique marocaine)

**Positionnement prix** : 40-50% moins cher que les agences mid-market (8 000-25 000 MAD), 30-50% plus cher que les freelances étudiants (1 500-4 000 MAD). Sweet spot : 4 000-9 500 MAD one-shot + récurrent.

**Stratégie SEO 12 mois** : ne pas chercher à battre Hostino/Energiedin sur les requêtes nationales saturées. Construire l'autorité progressivement par :
1. Quick wins techniques (mois 1-2)
2. Enrichissement sémantique des 5 pages existantes (mois 2-3)
3. Expansion géolocalisée mesurée — 1 page/mois (mois 3-7)
4. Verticalisation médicale cachée (mois 4-9)
5. Construction backlinks et autorité (continu)
6. Blog stratégique (1 article/mois à partir du mois 4)
7. **Optimisation GEO/AEO en parallèle du SEO Google** — apparition dans ChatGPT, Perplexity, Claude, Gemini

**Anti-stratégies explicites** : ne pas créer 30+ pages géolocalisées (anti-Hostino/Urikacloud), ne pas faire de keyword stuffing (anti-Rhillane), ne pas multiplier pages métier × ville (piège dryousra confirmé), ne pas ajouter de blabla SEO sans expertise réelle (signal HCU négatif), ne pas sacrifier le design pour ajouter du contenu (différentiation perdue).

**Métriques de succès 12 mois** :
- 10-12 pages indexées en GSC, zéro "Détectée — non indexée"
- 3-5 mentions ATLASEO ou clients ATLASEO dans réponses ChatGPT/Perplexity sur requêtes pertinentes
- 5-8 clients livrés (mix Starter + Visibilité + Croissance)
- MRR (revenu mensuel récurrent) de 3 900-5 200 MAD/mois fin d'année 1 (3-4 clients Pack Croissance × 1300 MAD)
- Top 10 Google sur "création site web Casablanca premium" et 2-3 requêtes longues traîne médicales

---

## 2. Diagnostic du marché marocain

### 2.1 Cartographie des concurrents (14 sites analysés)

Cinq archétypes dominent le marché marocain de la création de sites web :

**Archétype A — Le scaleur géolocalisé** (Hostino, Urikacloud, Energiedin)
Stratégie : multiplier les pages par ville (12-15 villes), templates réutilisés avec contenu différencié sur les quartiers locaux. Utilise pillar page + cluster. Stack moderne (Astro headless, ou WordPress + Cloudflare). Ranke fort grâce à la quantité.

**Archétype B — Le keyword stuffer** (Rhillane, King4media)
Stratégie : densité maximale du mot-clé cible dans le contenu et les titres. Marche encore en 2026 au Maroc parce que la concurrence sémantique est faible, mais sera progressivement pénalisé par les updates Google (Helpful Content, E-E-A-T). King4media est l'archétype absolu — site HTML brut de 2013, contenu cassé, mais ranke par autorité de domaine accumulée.

**Archétype C — Le freelance éducatif** (Baleez)
Stratégie : posture éditoriale nuancée, ton honnête, tableaux comparatifs freelance vs agence, prix affichés explicitement, organisation par régions administratives marocaines. Faible volume de pages mais densité forte. Modèle de référence pour la qualité éditoriale.

**Archétype D — L'agence portfolio premium** (Energiedin)
Stratégie : capitaliser sur les références prestigieuses (Adidas, médias français à fort trafic) en les répétant sur chaque page. Trust signal massif. Double domaine (.com et .ma). Modèle inaccessible à court terme pour ATLASEO.

**Archétype E — Le studio créatif sans SEO** (Fabrik212)
Stratégie : aucune. Le site est conçu pour l'expérience visuelle et la conversion une fois sur place. Pas indexé sérieusement sur Google. Représente l'opposé du marché marocain dominant — admirable esthétiquement, invisible commercialement.

### 2.2 Cartographie des références internationales (3 agences premium)

**Digidop (France, Webflow)**
- Spécialisation extrême : ne fait que Webflow
- Triple accréditation officielle (Webflow Expert, Client-First, Global Leader)
- Vend sur résultats chiffrés : "+43% conversion (Ramify)", "$30M raised (Bsport)", "100% marketing autonomy (TSE)"
- Ticket moyen : $25 000 par site
- Modèle : "spécialise sur une stack, vends sur les résultats clients, prix élevé assumé"

**Adveris (France, WordPress / probablement Webflow)**
- 60 collaborateurs, 500 clients, 15 ans d'existence
- Verticalisation forte : page dédiée par métier (architecte, designer, association, public, fédération, étude notariale, etc.)
- **A déjà productisé une offre "Agence GEO / Optimisation Référencement IA ChatGPT"** — confirmation que le GEO est en train de devenir un service distinct sur le marché premium
- Modèle inaccessible à court terme

**Plugandweb (France + Maroc, WordPress)**
- Hybride France/Maroc avec offre offshore Maroc à 1990 DH
- Anti-modèle pour ATLASEO : représente le concurrent low-cost que tu dois différencier de toi

### 2.3 Constats clés du marché marocain

**Constat 1 — Personne ne combine design premium + SEO sérieux**
Sur les 8 sites marocains analysés, aucun n'a un design moderne ET un SEO mature. C'est l'espace blanc d'ATLASEO.

**Constat 2 — L'autorité de domaine bat le design**
King4media est un fossile HTML de 2013 qui ranke encore. Cela démontre que Google récompense fortement l'ancienneté et l'accumulation de signaux SEO au Maroc, indépendamment de la qualité produit. Conséquence : ne pas espérer rattraper les vieux domaines en 6 mois.

**Constat 3 — La stratégie de pages géolocalisées est universelle**
Tous les rankers utilisent des pages par ville. C'est devenu la table d'entrée du SEO marocain. Mais la qualité de ces pages varie énormément (de Urikacloud copy-paste à Hostino vraiment différencié).

**Constat 4 — Le GEO arrive au Maroc en 2025-2026**
SEO.ma mentionne explicitement "ChatGPT, Gemini, Grok" dans son pitch. C'est la première agence SEO marocaine à le faire. Fenêtre d'opportunité encore très ouverte.

**Constat 5 — Le keyword stuffing marche encore mais ne durera pas**
Rhillane fait du stuffing massif et ranke. C'est une stratégie 2015-2020 qui finit par être pénalisée. Ne pas se laisser tenter — court terme attractif, long terme dangereux.

**Constat 6 — Mobile-first est non-négociable**
85% du trafic Maroc est sur mobile. Tous les sites concurrents s'y plient. ATLASEO doit en faire un argument frontal, pas juste une caractéristique.

### 2.4 Espaces blancs identifiés

Trois opportunités stratégiques non occupées :

1. **Le segment "design premium + SEO discipliné"** — aucun concurrent ne combine les deux. C'est le positionnement central d'ATLASEO.

2. **Le GEO/AEO local marocain** — seul SEO.ma le mentionne, aucun ne le maîtrise réellement. ATLASEO peut s'y positionner avant les autres.

3. **La verticalisation médicale esthétique premium** — niche très peu travaillée au Maroc, avec un accès direct via Dr Yousra et la communauté qu'elle représente.

---

## 3. Positionnement ATLASEO

### 3.1 La promesse en une phrase

> ATLASEO crée des sites web premium ultra-rapides et pilote leur visibilité Google et IA pour les professions libérales et PME marocaines qui veulent du sérieux sans payer le prix d'une agence corporate.

### 3.2 Cible client

**Profil prioritaire** : Mix opportuniste avec biais vertical médical caché.

- **Couche commerciale visible** : "Agence web pour PME et professions libérales au Maroc". Communication large, pricing accessible (4 000-9 500 MAD), pour ne fermer aucune porte.
- **Couche stratégique cachée** : ATLASEO devient progressivement la référence pour les médecins esthétiques marocains, via l'effet Dr Yousra et l'accumulation de cas clients dans cette niche.

**Géographie cible** : Casablanca (basée) > Rabat > Marrakech > Tanger. Quatre pages géolocalisées à construire à terme, dans cet ordre.

**Typologie de client idéal** :
- Solo professionnel (médecin, dentiste, avocat) ou TPE/PME (10-50 employés)
- Capable d'investir 4 000-9 500 MAD initialement + récurrent
- Conscient que "un site low-cost à 1500 DH n'amène aucun client"
- Mobile-first (vérifie son téléphone avant son ordi)
- Veut du résultat mesurable (clients qui appellent, qui prennent rendez-vous)
- Pas chercheur de "site corporate compliqué" — veut un outil clair et performant

### 3.3 Le canal d'acquisition asymétrique : Dr Yousra

Dr Yousra est un actif stratégique sous-exploité. Elle représente :

- 100k followers Instagram qualifiés (audience médicale esthétique francophone marocaine)
- Crédibilité médicale dans la communauté professionnelle
- Une étude de cas exemplaire (site dryousra.ma, indexation progressive, conversion WhatsApp)
- Un canal de référencement direct vers ATLASEO

**Tactique** : ATLASEO doit construire une page-étude de cas Dr Yousra qui :
- Quantifie les résultats (impressions GSC, mots-clés rankés, vitesse Lighthouse, leads générés)
- Met en avant le "before/after" en termes de visibilité
- Sert d'aimant SEO sur les requêtes "site web médecin esthétique Maroc", "création site dermatologue Casablanca"
- Devient le point d'entrée naturel quand Dr Yousra mentionne ATLASEO à ses confrères

Cette page est le **levier le plus puissant à court terme** que possède ATLASEO. Plus puissant qu'une page géolocalisée. À prioriser au mois 2-3.

### 3.4 Ce qu'ATLASEO N'EST PAS

L'anti-positionnement est aussi important que le positionnement. ATLASEO assume frontalement :

- **N'est PAS un freelance low-cost à 1500 DH** — le pack Starter à 4000 MAD est déjà 2-3x plus cher qu'un site WordPress générique de freelance étudiant.
- **N'est PAS une agence corporate à 50 000 MAD** — ne fait pas de RFP, ne fait pas de comités de pilotage, ne fait pas de chefs de projet dédiés. Le fondateur est l'interlocuteur direct.
- **N'est PAS un studio créatif uniquement** — le design est moyen pour le marché premium international mais excellent pour le Maroc. ATLASEO assume la "performance avant l'art".
- **N'est PAS une agence "tout faire"** — ne fait pas de gestion réseaux sociaux, pas de community management, pas de motion design, pas de print, pas de logo seul. Focus création web + SEO/GEO.
- **N'est PAS un revendeur d'hébergement** — Cloudflare est inclus dans tous les packs, ATLASEO ne facture pas de marge sur l'hébergement (différenciation forte vs Hostino dont c'est le business model).

### 3.5 Le moat (avantage défensif à 12 mois)

Trois moats en construction :

1. **Stack technique différenciant** : Astro + Cloudflare Workers Static Assets. Un freelance WordPress ne peut pas migrer rapidement. Une agence WordPress non plus (formation, refonte de processus). ATLASEO part avec 12-18 mois d'avance technique.

2. **Workflow IA-assisté documenté** : le couple ATLASEO_context.md + brief.md + Claude + Cursor permet de produire un site en 1-2 semaines au coût d'un freelance. Aucun concurrent marocain ne fonctionne ainsi en 2026.

3. **Verticalisation médicale cachée** : à 12 mois, ATLASEO doit avoir 3-5 études de cas médicales (dermato, dentiste, kiné, ophtalmo) qui forment un cluster sémantique impossible à rattraper rapidement par un nouveau concurrent.

### 3.6 Roadmap clients prévisible

Au-delà du mix opportuniste, certains profils-clients sont déjà identifiés ou anticipés et structurent la trajectoire des 12 prochains mois.

**Client #1 — dryousra.ma (déjà livré)**
Premier site livré (HTML/CSS pur, pas Astro). Sert de référence portfolio et de cas d'apprentissage des règles d'indexation (cf. ATLASEO_context.md §9). Reste maintenu mais non refait. Sera valorisé en étude de cas dédiée sur atlaseo.ma à partir du mois 2-3.

**Client #2 (en cours) — ATLASEO.ma elle-même**
Le site de l'agence est techniquement le projet en cours. Il prouve la pipeline end-to-end avant le travail client réel. Il doit démontrer : Lighthouse parfait, LCP rapide, schema visible, indexation rapide. Détails opérationnels dans `atlaseo-ma_brief.md`.

**Client #3 anticipé — entreprise de tourisme médical**
Profil probable : entreprise marocaine ciblant des patients internationaux (France, Belgique, Afrique). Nécessitera FR + EN dès le départ — pas en retrofit. Trust signals critiques : credentials médicaux, accréditations (JCI, ISO), témoignages patients, pricing transparent, response time. Pack visé : Croissance (besoin de SEO long terme + reporting). Stack : Astro avec `@astrojs/i18n` activé dès la base.

**Clients #4 et suivants — verticalisation médicale**
Via Dr Yousra et son réseau, l'objectif est d'attirer progressivement d'autres médecins esthétiques marocains. Cette concentration construit progressivement le moat médical caché (cf. §3.5).

---

## 4. Stratégie produit et pricing

### 4.1 Les 3 packs ATLASEO

| Pack | Prix one-shot | Récurrent | Positionnement |
|---|---|---|---|
| **Starter** | 4 000 MAD | 500 MAD/an | Présence en ligne pro, simple et efficace |
| **Visibilité** | 7 000 MAD | 500 MAD/an | Site + présence Google locale optimisée |
| **Croissance** | 9 500 MAD | 1 300 MAD/mois | Site + Google + SEO local suivi mensuel |

### 4.2 Lecture stratégique du pricing

**Le Pack Starter (4000 MAD)** est un produit d'appel honnête, pas un loss leader. Il inclut un site complet (5 pages), domaine, hébergement Cloudflare, SSL, design responsive, livraison 7 jours. C'est un produit rentable s'il est livré via le starter template ATLASEO en moins de 20h de travail effectif. À utiliser pour :
- Convertir des prospects budgets serrés
- Construire le portfolio rapidement
- Servir de "site d'entrée" qui peut être upgradé plus tard vers Visibilité ou Croissance

**Le Pack Visibilité (7000 MAD)** est le sweet spot pour la cible professions libérales. Il transforme le site en outil d'acquisition local via Google Business Profile et les avis clients guidés. Le client paie pour de la visibilité, pas seulement pour un site. Ce pack devrait représenter 40-50% du mix de ventes.

**Le Pack Croissance (9500 MAD + 1300 MAD/mois)** est le produit qui construit la valeur long terme d'ATLASEO. Le récurrent à 1300 MAD/mois est la base de la MRR (revenu mensuel récurrent). 10 clients en Pack Croissance = 13 000 MAD/mois récurrents. C'est ce qui transforme ATLASEO d'une agence "projet à projet" en une agence avec un revenu prévisible. À pitcher en premier dans chaque proposition.

### 4.3 Règle de mix de ventes cible (12 mois)

Objectif sur 8 clients livrés en année 1 :
- 2 Starter (16% du CA one-shot, 0% MRR)
- 3 Visibilité (33% du CA one-shot, 0% MRR)
- 3 Croissance (51% du CA one-shot, 100% MRR)

CA annuel cible année 1 : ~55 000 MAD one-shot + ~15 000-25 000 MAD récurrent (selon timing des signatures Pack Croissance) = ~70 000-80 000 MAD cumulés. Le MRR à fin d'année 1 vise 3 900 MAD/mois (3 clients × 1300 MAD), soit ~47 000 MAD/an en run-rate pour l'année 2.

### 4.4 Le pack Croissance comme produit pivot

Le pack Croissance ne se vend pas comme "un site web qui ranke". Il se vend comme **un investissement marketing mensuel** :

> "Pour 1300 DH/mois, ATLASEO devient votre département marketing digital miniature : un article par mois, optimisation SEO continue, suivi de vos positions, gestion de vos avis Google, et un rapport clair tous les mois."

Comparaison à mettre en avant côté client : "1300 DH/mois c'est moins cher qu'une demi-journée de Google Ads et ça construit un actif durable au lieu de payer pour du clic éphémère."

### 4.5 Politique de devis

- Devis personnalisé gratuit, réponse sous 24h (engagement)
- Pas de négociation sur les prix affichés des packs (positionnement)
- Devis sur-mesure uniquement si demande hors-pack (e-commerce, application, refonte complète existante) — minimum 15 000 MAD
- Pas de "site gratuit en échange de visibilité" (anti-modèle classique)

---

## 5. Stratégie SEO + GEO

### 5.1 Principe directeur

ATLASEO ne cherche pas à battre Hostino, Energiedin ou Rhillane sur "création site web Maroc" à court terme. Cette bataille est perdue d'avance pendant 12-18 mois pour un domaine neuf. La stratégie est de **gagner sur les terrains où la concurrence est faible** :

- Requêtes longue traîne médicales ("création site web dentiste Casablanca", "site internet médecin esthétique Maroc")
- Requêtes premium ("agence web premium Maroc", "création site Astro Cloudflare Maroc")
- Requêtes verticales ("site web professions libérales Maroc")
- **Réponses IA** (ChatGPT, Perplexity, Claude, Gemini) — terrain quasi vierge au Maroc en 2026

**Priorités de ciblage linguistique** :
- Français en priorité absolue — c'est la langue de la majorité des recherches B2B et B2C qualifiées au Maroc
- Arabe (translitéré) en seconde priorité pour les requêtes locales très spécifiques ("دكتور كازا", "محامي الرباط") — à intégrer dans les pages géolocalisées en mots-clés secondaires, pas comme version séparée
- Anglais : uniquement sur clients spécifiques (médecine tourisme, B2B international) — voir §3.6
- Pas de version séparée arabe d'atlaseo.ma — pas le ROI

**Priorité SEO local** : pour les professions libérales et commerces, le SEO local (Google Business Profile + Local Pack) est plus rentable que le SEO national. C'est la cible #1 du Pack Visibilité et Croissance. Le Pack Starter, lui, vise juste la présence en ligne, pas l'acquisition par Google.

### 5.2 Architecture SEO cible (à 12 mois)

```
atlaseo.ma/
├── /                          ← pillar accueil (positionnement général)
├── /offres                    ← pricing
├── /creation-site-web         ← pillar création web (national)
├── /seo-local                 ← pillar SEO local (national)
├── /contact
│
├── /creation-site-web-casablanca   ← cluster géo prio 1 (mois 4)
├── /creation-site-web-rabat        ← cluster géo prio 2 (mois 6)
├── /creation-site-web-marrakech    ← cluster géo prio 3 (mois 8)
├── /creation-site-web-tanger       ← cluster géo prio 4 (mois 10)
│
├── /site-web-medecins              ← cluster vertical métier (mois 5)
├── /site-web-dentistes             ← cluster vertical métier (mois 7)
│
├── /realisations/dryousra-medecine-esthetique  ← étude de cas hero (mois 2-3)
├── /realisations/[client-2]                    ← étude de cas (mois 6+)
│
└── /blog/                          ← 6-10 articles à 12 mois
    ├── /combien-coute-site-web-maroc-2026
    ├── /wordpress-vs-astro-pme-maroc
    ├── /seo-local-medecins-maroc
    └── ...
```

**Total visé à 12 mois** : 15-18 pages indexables de qualité. Pas 30+. Discipline d'indexation à maintenir.

### 5.3 Règles de qualité par page (non-négociables)

Chaque page doit respecter :

- **Densité de contenu** : pages d'expertise 1800-2200 mots, pages géo 1500-2000 mots, pages verticales 1500-2000 mots, étude de cas 1200-1800 mots, articles blog 800-1500 mots, accueil 800-1000 mots, offres 1000-1200 mots, contact 350 mots.
- **Unicité de contenu** : zéro copier-coller avec changement de ville ou de métier. Chaque page doit citer des données spécifiques (quartiers, secteurs économiques, exemples de mots-clés, statistiques locales).
- **Structure HTML sémantique** : un seul H1, hiérarchie H2/H3 logique, balises sémantiques (`<article>`, `<section>`, `<nav>`).
- **Meta description** : 130-155 caractères, inclut emoji ☎️ + numéro de téléphone pour augmenter le CTR (technique observée chez Hostino).
- **Schema markup** approprié : Organization + LocalBusiness sur toutes les pages, FAQPage sur pages avec FAQ, BreadcrumbList sur toutes les pages internes, Service sur les pages packs, Article sur les pages blog, MedicalBusiness sur les pages verticales médicales.
- **Internal linking** : chaque page liée depuis au moins 2 autres pages, avec ancres descriptives (jamais "cliquez ici").
- **Performance** : Lighthouse desktop ≥95 partout, mobile ≥90 partout. Pour le LCP mobile, préload de l'image hero obligatoire.

### 5.4 La discipline d'indexation (rappel des leçons dryousra)

Ces règles sont reprises du `ATLASEO_context.md` §10 et restent applicables. Elles sont rappelées ici parce qu'elles vont déterminer le succès ou l'échec de toute la stratégie SEO.

**Avant chaque mise en ligne d'une nouvelle page** :
- Vérifier que la page a au moins 1500 mots de contenu unique
- Vérifier qu'elle est liée depuis au moins 2 autres pages
- Vérifier que canonical tag = URL réelle
- Soumettre l'URL à GSC pour indexation après publication
- **Attendre 2-3 semaines** avant de publier la page suivante du même cluster

**Après publication** :
- Vérifier indexation à j+7, j+14, j+30
- Si "Détectée — non indexée" apparaît : **fixer le problème** (contenu plus long, plus de liens internes, plus de signaux) avant de demander la ré-indexation
- Ne jamais "consommer" la quota GSC de 10-15 demandes/jour sur des pages thin

### 5.5 SEO local : Google Business Profile comme produit central

GBP est central, pas accessoire. Inclus dans Visibilité et Croissance. Pour ATLASEO elle-même :

- Créer la fiche GBP ATLASEO dès le lancement du domaine final
- NAP cohérent partout : `ATLASEO — Casablanca, Maroc — +212 6XX XX XX XX`
- Photos : interface du site, screenshots dashboard, photos professionnelles fondateur
- Catégorie principale : "Concepteur de sites web" + catégories secondaires "Agence de marketing", "Spécialiste du référencement"
- Mise à jour mensuelle : un post GBP par mois (mini-article ou annonce)
- Backlink depuis GBP vers atlaseo.ma — premier backlink de qualité acquis

Pour les clients (Pack Visibilité et Croissance) : même méthode appliquée. GBP devient un outil de fidélisation — un client qui voit son GBP ranker reste avec ATLASEO.

### 5.6 GEO/AEO — apparaître dans ChatGPT, Perplexity, Claude, Gemini

**Pourquoi maintenant** : les LLM représentent 5-15% du trafic d'information aujourd'hui (estimation 2026), probablement 30-50% à horizon 2028. Apparaître dans leurs réponses devient un canal d'acquisition majeur. Au Maroc, presque personne ne le fait — fenêtre d'opportunité.

**Comment les LLM citent des sources** :
- Ils privilégient les pages avec contenu structuré et clairement attribuable
- Ils citent fréquemment Wikipedia, sites .gov, .edu, presse établie, et **sites avec autorité de domaine + contenu informationnel dense**
- Perplexity et ChatGPT (avec recherche) crawlent le web régulièrement et indexent des passages, pas juste des pages
- Le contenu en format Q/R structuré (FAQPage schema) est sur-cité

**Tactiques GEO pour ATLASEO** :

1. **Format Q/R explicite sur les pages clés** : chaque page d'expertise doit avoir une section "Questions fréquentes" de 8-12 entrées au format question naturelle / réponse de 50-100 mots. Schema FAQPage obligatoire.

2. **Réponses auto-suffisantes** : chaque paragraphe doit pouvoir être extrait et avoir du sens sans contexte. Éviter les "comme vu plus haut" ou "voir section précédente". Chaque section doit pouvoir être citée individuellement.

3. **Données chiffrées explicites** : "Au Maroc, 85% du trafic web est mobile en 2026" est plus citable qu'"une grande partie du trafic est mobile". Les LLM préfèrent les chiffres précis avec source.

4. **Listicles ciblées** : "Les 5 critères pour choisir une agence web au Maroc", "Les 7 erreurs SEO des PME marocaines" — formats que les LLM aiment particulièrement extraire.

5. **Comparaisons structurées** : "WordPress vs Astro pour PME marocaine — tableau comparatif". Les LLM citent souvent les comparatifs.

6. **Auteur identifié** : chaque article blog signé avec bio courte (E-E-A-T). Page `/a-propos` détaillée. Cela aide les LLM à attribuer la source.

7. **Tester régulièrement** : prompter ChatGPT, Perplexity, Claude, Gemini chaque mois avec des requêtes types ("Quelles sont les meilleures agences web au Maroc en 2026 ?", "Comment choisir une agence SEO à Casablanca ?", "Combien coûte un site web professionnel au Maroc ?") et noter si ATLASEO apparaît, dans quel contexte.

**Mesure GEO (méthode manuelle, encore expérimentale)** :
- Liste de 10 requêtes test à exécuter chaque mois sur 4 LLM (ChatGPT, Perplexity, Claude, Gemini)
- Pour chaque combo (requête × LLM) : ATLASEO mentionnée ? Comment ? Quelle source citée ?
- Suivi dans une feuille de calcul simple
- Objectif 12 mois : ATLASEO mentionnée dans 3-5 réponses sur 40 (10% de couverture)

### 5.7 Quick wins SEO immédiats (à faire ce mois-ci)

Listé par ordre de priorité, gain effort-bénéfice maximal :

1. **Ajouter numéro de téléphone partout** : header, footer, schema, meta descriptions. Format : `+212 6XX XX XX XX` ou format local `06 XX XX XX XX` selon préférence.

2. **Refaire les meta descriptions avec ☎️** :
   - Accueil : `Création de sites web premium + SEO local à Casablanca, Rabat, Marrakech. Cloudflare, Lighthouse 99/100, livraison 7 jours ☎️ +212 6XX XX XX XX`
   - /creation-site-web : `Site web professionnel sur Astro + Cloudflare. Design sur-mesure, mobile-first, Lighthouse 99/100, livraison 7 jours au Maroc ☎️ +212 6XX XX XX XX`
   - /seo-local : `SEO local Maroc : Casablanca, Rabat, Marrakech. Google Business Profile + avis clients + suivi mensuel. Résultats 2-4 semaines ☎️ +212 6XX XX XX XX`
   - /offres : `3 packs création site web au Maroc : Starter 4000 MAD, Visibilité 7000 MAD, Croissance 9500 MAD + suivi mensuel ☎️ +212 6XX XX XX XX`
   - /contact : `Contactez ATLASEO. Devis personnalisé gratuit sous 24h. WhatsApp disponible pour réponse instantanée ☎️ +212 6XX XX XX XX`

3. **Ajouter schema LocalBusiness** en complément de Organization. ATLASEO est basée à Casablanca, c'est gratuit comme signal.

4. **Ajouter schema BreadcrumbList** sur toutes les pages internes.

5. **Corriger le bug "Lighthouse 0/100"** sur le hero accueil (probable compteur animé qui ne se déclenche pas).

6. **Ajouter une section "Pourquoi pas un site low-cost ?"** sur /creation-site-web qui attaque frontalement les sites à 999-1500 MAD avec arguments factuels (Lighthouse, sécurité, SEO, maintenance, durée de vie).

7. **Mention CNDP/RGPD** discrète sur /creation-site-web ou en footer.

### 5.8 Cible SEO 12 mois : positionnement Google

**Mois 3** : ranking sur "ATLASEO Casablanca" (requête marque, gagnable facile)

**Mois 6** : top 20 sur "création site web premium Casablanca", "agence web Astro Maroc", "site web médecin esthétique Casablanca"

**Mois 9** : top 10 sur ces mêmes requêtes + apparition sur "création site web Casablanca" (top 30)

**Mois 12** : top 5 sur les requêtes premium et médicales, top 20 sur "création site web Casablanca", top 50 sur "création site web Maroc" (saturé)

---

## 6. Stratégie de contenu et d'autorité

### 6.1 Le rôle stratégique de Dr Yousra

Dr Yousra est l'actif marketing #1 d'ATLASEO en 2026. Trois utilisations stratégiques :

**Étude de cas hero (à construire mois 2-3)**
Page `/realisations/dryousra-medecine-esthetique` détaillée :
- Le challenge initial (besoin de visibilité Google, communauté médicale marocaine compétitive)
- La solution ATLASEO (site, structure SEO, intégration WhatsApp, schemas medicaux)
- Les résultats chiffrés (impressions GSC, mots-clés rankés, vitesse Lighthouse, leads WhatsApp/téléphone)
- Les leçons apprises (les fameux 12/32 pages indexées du context doc — à transformer en récit d'apprentissage transparent et honnête)
- Le témoignage de Dr Yousra (à demander officiellement et à formaliser)

**Vidéo ou post Instagram (à coordonner avec Dr Yousra)**
- Une publication sur le compte de Dr Yousra (100k followers) qui mentionne ATLASEO et son travail
- Cela génère immédiatement 10-50 visites qualifiées
- Cela génère probablement 1-3 leads médicaux dans les 30 jours
- Cela génère un backlink social fort (signal de notoriété)

**Référencement par les pairs**
- Demander à Dr Yousra de mentionner ATLASEO à 5-10 confrères dans son réseau direct
- Préparer un message-type qu'elle peut envoyer
- Chaque mention = un lead qualifié à fort taux de conversion (réseau de confiance)

### 6.2 Plan de publication blog

**Cadence** : 1 article par mois minimum, jamais en dessous, jamais plus de 2 (qualité > quantité).

**Caractéristiques** : 800-1500 mots, signé, schema Article, image hero unique, FAQ intégrée (3-5 questions).

**Calendrier proposé (12 premiers articles)** :

| Mois | Article | Cible SEO | Cible GEO |
|---|---|---|---|
| 4 | Combien coûte un site web professionnel au Maroc en 2026 — analyse honnête | "prix site web Maroc" | "Quel est le prix d'un site web au Maroc ?" |
| 5 | WordPress vs Astro pour PME marocaine — guide de décision 2026 | "WordPress Astro Maroc" | "WordPress ou Astro pour mon site ?" |
| 6 | SEO local pour médecins au Maroc — checklist complète 2026 | "SEO médecin Maroc" | "Comment optimiser le SEO d'un cabinet médical au Maroc ?" |
| 7 | Pourquoi un site à 1500 DH ne rankera jamais sur Google | "site web pas cher Maroc" | "Pourquoi un site low-cost ne ranke pas ?" |
| 8 | Google Business Profile pour professions libérales au Maroc — guide complet | "Google Business Profile Maroc" | "Comment configurer Google Business Profile au Maroc ?" |
| 9 | Mobile-first au Maroc : 85% du trafic, et alors ? | "site mobile Maroc" | "Pourquoi mon site doit être mobile au Maroc ?" |
| 10 | Comment Google classe les entreprises locales — algorithme expliqué | "SEO local Google fonctionnement" | "Comment Google Maps classe les entreprises ?" |
| 11 | Core Web Vitals pour PME marocaine — pourquoi c'est crucial | "Core Web Vitals Maroc" | "Qu'est-ce que les Core Web Vitals ?" |
| 12 | Refonte ou nouveau site — quand faut-il refondre son site web ? | "refonte site web Maroc" | "Quand refondre son site web ?" |
| 13 | SEO dentaire au Maroc — guide pour cabinet dentaire | "SEO dentiste Maroc" | "Comment être premier sur Google quand on est dentiste ?" |
| 14 | Avis Google : impact réel sur la visibilité locale au Maroc | "avis Google Maroc impact SEO" | "Les avis Google influencent-ils le SEO ?" |
| 15 | Mesurer le ROI de son site web — méthode pour PME marocaine | "ROI site web Maroc" | "Comment mesurer le retour sur investissement d'un site web ?" |

### 6.3 Plan de backlinks (12 mois)

Mois 1-3 : Foundation
- Google Business Profile ATLASEO (1 backlink fort)
- LinkedIn personnel fondateur (lien atlaseo.ma dans bio)
- LinkedIn page entreprise ATLASEO
- Inscription Pages Jaunes Maroc, Companeo.ma, Maroc Annonces
- Inscription Sortlist Maroc (annuaire international agences)

Mois 4-6 : Networking
- Partenariat avec 2-3 agences complémentaires (graphistes, photographes, community managers) — échange de liens et de leads
- 2-3 témoignages clients sur leurs sites (Dr Yousra notamment)
- Profil sur Clutch (annuaire international agences, qualité de backlink)

Mois 7-9 : Editorial
- 1-2 articles invités sur des blogs business marocains (Maroc Pro, Le Brief, La Vie Éco) — sujets SEO/digital
- Interview ou citation dans un article de presse local (médecine + digital)
- Présentation ou intervention dans un événement entrepreneurial marocain (Casablanca Startup Stock, etc.)

Mois 10-12 : Authority
- Création de templates ou guides téléchargeables gratuits ("Checklist SEO local Maroc", "Brief créatif site web Maroc") — vecteur de backlinks naturels
- Contribution à des annuaires verticaux (annuaires médicaux, juridiques selon clients)
- Participation à des communautés professionnelles online (Facebook, LinkedIn) avec partage régulier de contenus

**Objectif réaliste à 12 mois** : 15-25 backlinks de qualité, dont 3-5 forts (presse, partenariats officiels, annuaires de référence).

### 6.4 La construction du portfolio premium

Chaque nouveau client devient une étude de cas potentielle. Règle dès le début du projet :

- Demander en signature de contrat le droit d'utiliser le projet en portfolio
- Capturer des screenshots avant/après (si refonte) ou des stats de lancement (si nouveau site)
- Capturer les positions GSC à j+30, j+60, j+90
- Demander un témoignage écrit à j+90 (quand les premiers résultats sont visibles)
- Construire la page étude de cas à j+120

Objectif 12 mois : 5 études de cas live, dont 3 médicales et 2 PME non-médicales. Cela construit progressivement le moat de spécialisation médicale tout en gardant le positionnement large visible.

---

## 7. Plan d'action priorisé 12 mois

> Chaque phase pose les fondations de la suivante. Ne pas sauter d'étape.

### Phase 0 — Fin mai 2026 (en cours) : finalisation lancement

- [ ] Achat domaine atlaseo.ma
- [ ] Configuration custom domain Cloudflare + redirect www → non-www
- [ ] Google Search Console verify (DNS TXT) + soumission sitemap
- [ ] Google Business Profile création + lien site
- [ ] GA4 property + tracking code vérifié
- [ ] Optimisation LCP mobile (preload image hero mobile) — viser <2.5s
- [ ] Test indexation : URL Inspection sur les 5 pages dans GSC

### Phase 1 — Juin 2026 : Quick wins et fondations

**Objectif** : les 5 pages indexées proprement, zéro "Détectée — non indexée", quick wins SEO appliqués.

- [ ] Ajouter numéro de téléphone partout (header, footer, schema, meta descriptions)
- [ ] Refaire les 5 meta descriptions avec ☎️ + numéro (cf §5.7)
- [ ] Ajouter schema LocalBusiness en plus d'Organization
- [ ] Ajouter schema BreadcrumbList sur toutes les pages internes
- [ ] Corriger bug "Lighthouse 0/100" hero accueil
- [ ] Ajouter section "Pourquoi pas un site low-cost ?" sur /creation-site-web (~400 mots)
- [ ] Mention CNDP/RGPD discrète sur /creation-site-web
- [ ] Vérifier indexation hebdomadairement (j+7, j+14, j+21, j+28)
- [ ] LinkedIn personnel + page entreprise mis à jour avec lien atlaseo.ma
- [ ] Inscription Pages Jaunes Maroc, Sortlist

**Livrables Phase 1** : 5 pages indexées, GBP actif, 3-5 backlinks de base, site prêt pour démarchage commercial.

### Phase 2 — Juillet-août 2026 : Enrichissement sémantique + étude de cas Dr Yousra

**Objectif** : densité de contenu doublée sur pages d'expertise, première étude de cas live.

- [ ] FAQ longue (8-12 questions) ajoutée en bas de /, /creation-site-web, /seo-local, /offres + schema FAQPage
- [ ] Section "Comprendre le SEO local en 2026" ajoutée sur /seo-local (~350 mots, schéma visuel inclus)
- [ ] Section "Erreurs courantes des PME marocaines en SEO local" sur /seo-local (~450 mots)
- [ ] Section "L'infrastructure Cloudflare en détail" sur /creation-site-web (~350 mots, technique mais accessible)
- [ ] Section "Combien de temps pour des résultats SEO" sur /seo-local (~250 mots, timeline mois par mois honnête)
- [ ] Création page `/realisations/dryousra-medecine-esthetique` (~1500 mots, screenshots, stats GSC, témoignage)
- [ ] Coordination avec Dr Yousra pour un post Instagram mentionnant ATLASEO
- [ ] Vérification mensuelle GSC : Coverage, Core Web Vitals, Performance

**Livrables Phase 2** : pages d'expertise à 1500-2000 mots, étude de cas Dr Yousra live, mention Instagram de Dr Yousra.

### Phase 3 — Septembre 2026 : Première page géolocalisée + premier article blog

**Objectif** : capter la première requête "création site web Casablanca", lancer le blog.

- [ ] Création `/creation-site-web-casablanca` (~1800 mots) :
  - Mention quartiers : Anfa, Maarif, Gauthier, Casa-Finance City, Sidi Maarouf, Bourgogne, Ain Diab
  - Mention secteurs économiques de Casa : finance, services aux entreprises, santé, immobilier, retail
  - 3-4 exemples de mots-clés ciblés ("dentiste Maarif", "avocat Anfa")
  - FAQ géolocalisée (8 questions sur les spécificités Casa)
  - Schema LocalBusiness avec areaServed = Casablanca
- [ ] Premier article blog : "Combien coûte un site web professionnel au Maroc en 2026" (~1200 mots)
- [ ] Mise à jour interne linking : /creation-site-web-casablanca lié depuis accueil, /creation-site-web, footer
- [ ] Validation indexation `/creation-site-web-casablanca` à j+14, j+21

**Livrables Phase 3** : 7 pages indexées, premier article blog, premier ranking sur "création site web Casablanca" (objectif top 50 à fin septembre).

### Phase 4 — Octobre-novembre 2026 : Verticalisation médicale + deuxième page géo

**Objectif** : occuper la niche médicale, élargir la couverture géo.

- [ ] Création `/site-web-medecins` (~1800 mots) :
  - Pain points médicaux spécifiques (RDV, secret médical, déontologie, RGPD)
  - Conformité CNDP détaillée
  - Intégration WhatsApp + click-to-call (canaux préférés patients marocains)
  - Études de cas implicites (renvoi vers étude Dr Yousra)
  - Schema MedicalBusiness en plus de LocalBusiness
  - FAQ médecins (8 questions sur les spécificités secteur)
- [ ] Création `/creation-site-web-rabat` (~1800 mots) sur le même modèle que Casablanca
  - Mention quartiers Rabat : Agdal, Hay Riad, Souissi, Hassan
  - Mention spécificités Rabat : administratif, public, ambassades, services
- [ ] Articles blog : "WordPress vs Astro pour PME marocaine" (mois 4 du blog), "SEO local pour médecins au Maroc" (mois 5 du blog)
- [ ] Test GEO mensuel : 10 requêtes × 4 LLM, suivi dans tableau

**Livrables Phase 4** : 9 pages indexées, niche médicale activée, présence sur Casa + Rabat.

### Phase 5 — Décembre 2026 - février 2027 : Marrakech + Tanger + deuxième étude de cas

**Objectif** : couverture géo complète des 4 villes prioritaires, 2 études de cas live.

- [ ] Création `/creation-site-web-marrakech` (~1800 mots)
- [ ] Création `/creation-site-web-tanger` (~1800 mots)
- [ ] Création `/site-web-dentistes` (~1500 mots, sur modèle médecins mais spécifique cabinet dentaire)
- [ ] Deuxième étude de cas client `/realisations/[client-2]` (premier client signé après Dr Yousra)
- [ ] 3 articles blog supplémentaires (mois 6, 7, 8 du blog)
- [ ] Partenariats avec 2-3 agences complémentaires (graphistes, photographes)
- [ ] Test GEO mensuel continu

**Livrables Phase 5** : 13-14 pages indexées, 2 études de cas, 6-8 articles blog, premier MRR client (Pack Croissance).

### Phase 6 — Mars-mai 2027 : Récolte et ajustements

**Objectif** : optimiser ce qui marche, abandonner ce qui ne marche pas, scaler les vrais leviers.

- [ ] Audit GSC complet : quelles pages performent, lesquelles stagnent
- [ ] Refonte des pages sous-performantes (contenu enrichi, FAQ retravaillée, ou consolidation)
- [ ] Articles blog : continuation cadence 1/mois
- [ ] Demande d'articles invités sur 2-3 blogs business marocains
- [ ] Bilan année 1 : MRR atteint, nombre clients, mix de ventes, sources de leads
- [ ] V2 du document stratégique en fonction des apprentissages

**Livrables Phase 6** : bilan annuel, ajustement stratégique, V2 du document.

### Vue d'ensemble — calendrier compressé

```
Mois 0 (mai)   : Achat domaine, GSC, GBP, GA4
Mois 1 (juin)  : Quick wins SEO, schemas, backlinks de base
Mois 2-3 (juil-août) : FAQ, sections sémantiques, étude de cas Dr Yousra
Mois 4 (sept)  : /creation-site-web-casablanca + article #1 blog
Mois 5 (oct)   : /site-web-medecins + article #2
Mois 6 (nov)   : /creation-site-web-rabat + article #3
Mois 7 (déc)   : /creation-site-web-marrakech + article #4
Mois 8 (jan)   : /creation-site-web-tanger + article #5
Mois 9 (fév)   : /site-web-dentistes + article #6
Mois 10-12     : 2e étude de cas + articles #7-9 + partenariats + bilan
```

---

## 8. Métriques et KPIs

### 8.1 Métriques SEO (Google Search Console)

**À suivre mensuellement** :

| Métrique | Cible 3 mois | Cible 6 mois | Cible 12 mois |
|---|---|---|---|
| Pages indexées | 5/5 | 8/8 | 14/14 |
| Pages "Détectée — non indexée" | 0 | 0 | 0 |
| Impressions Google totales | 500 | 2 000 | 8 000 |
| Clics Google totaux | 30 | 150 | 600 |
| CTR moyen | 5% | 7% | 8% |
| Position moyenne sur mots-clés cibles | 50 | 25 | 12 |
| Core Web Vitals "Good" | 100% | 100% | 100% |

### 8.2 Métriques GEO (manuel)

**Liste des 10 requêtes test (à exécuter chaque mois sur ChatGPT, Perplexity, Claude, Gemini)** :

1. Quelles sont les meilleures agences web au Maroc en 2026 ?
2. Comment choisir une agence SEO à Casablanca ?
3. Combien coûte un site web professionnel au Maroc ?
4. Quelles agences au Maroc utilisent Astro ou Cloudflare ?
5. Comment optimiser le SEO d'un cabinet médical au Maroc ?
6. Quelle agence pour créer un site web de médecin esthétique à Casablanca ?
7. WordPress ou Astro pour un site au Maroc ?
8. Qu'est-ce que ATLASEO ?
9. Comment configurer Google Business Profile au Maroc ?
10. Quelles sont les erreurs SEO des PME marocaines ?

**Tableau de suivi mensuel** (à reproduire en Sheets ou Notion) :

| Requête | ChatGPT | Perplexity | Claude | Gemini |
|---|---|---|---|---|
| Q1 | Mentionnée O/N + contexte | ... | ... | ... |
| ... | ... | ... | ... | ... |

**Cible 12 mois** : ATLASEO mentionnée dans 3-5 réponses sur 40 (10% de couverture). Cible 24 mois : 10-15 sur 40.

### 8.3 Métriques business

| Métrique | Cible 6 mois | Cible 12 mois |
|---|---|---|
| Nombre de leads qualifiés | 8-12 | 20-30 |
| Taux de conversion lead → client | 30% | 35% |
| Nombre de clients signés | 3-4 | 7-10 |
| Mix de ventes (Starter / Visibilité / Croissance) | 1/2/1 | 2/3/3 |
| CA one-shot cumulé | ~25 000 MAD | ~55 000 MAD |
| MRR (Pack Croissance récurrent) | 2 600 MAD/mois | 3 900-5 200 MAD/mois |
| Source des leads (canal principal) | À identifier | Dr Yousra + Google direct |

### 8.4 Métriques produit (performance des sites livrés)

Pour chaque client livré, suivi à j+30, j+60, j+90, j+180 :

- Lighthouse desktop et mobile (4 catégories)
- Nombre de pages indexées GSC
- Impressions GSC du mois
- Clics GSC du mois
- Position moyenne sur les 3-5 mots-clés cibles
- Nombre de leads générés (à confirmer avec le client)

Ces données nourrissent le portfolio (études de cas) et permettent de calibrer le pricing.

### 8.5 Outils de suivi

- **Google Search Console** — source de vérité SEO
- **GA4** — comportement utilisateur sur atlaseo.ma
- **Cloudflare Web Analytics** — performance technique, RUM (Real User Monitoring)
- **Tableau de suivi GEO** — Google Sheets ou Notion, 1 entrée par requête × LLM × mois
- **CRM léger** — Notion ou Airtable suffisent pour 10-30 leads/mois
- **Outil de classement** — facultatif année 1. Si besoin : SERanking (35 €/mois) ou Ahrefs Webmaster Tools (gratuit pour propre domaine)

---

## 9. Anti-modèles

> Ce que ATLASEO ne fera PAS, même si c'est tentant.

### 9.1 Anti-modèles produits

- **Pas de pages métier × ville** : pas de "SEO pour dentistes Casablanca" ET "SEO pour dentistes Rabat" ET "SEO pour dentistes Marrakech". Ce piège dryousra reste valable. Solution : une page par métier (national), ou une page par ville (avec mention des métiers à l'intérieur). Jamais les deux dimensions multipliées.

- **Pas de pages "intent" thin** : pas de pages style dryousra "besoins/rajeunir", "besoins/lèvres". Les pages aggregator de moins de 300 mots sont noindex ou n'existent pas.

- **Pas d'e-commerce** : pas de Pack e-commerce, pas de WooCommerce, pas de Shopify. Focus création site vitrine + SEO/GEO. Si demande e-commerce : devis sur-mesure 15 000+ MAD ou refus poli.

- **Pas de "site gratuit en échange de visibilité"** : positionnement premium = prix minimum 4 000 MAD. Jamais en dessous.

### 9.2 Anti-modèles SEO

- **Pas de keyword stuffing à la Rhillane** : la requête cible doit apparaître naturellement, jamais plus de 2 fois par 100 mots, jamais en début de phrase mécaniquement.

- **Pas de templates géo identiques à la Urikacloud** : chaque page géo a son contenu propre, ses quartiers, ses exemples, sa FAQ.

- **Pas de "site multi-ville à 12+ pages géolocalisées" en année 1** : 4 villes max (Casa, Rabat, Marrakech, Tanger) suffisent et sont déjà ambitieux pour un domaine neuf.

- **Pas de blog massif sans expertise réelle** : 1 article/mois maximum, jamais d'IA pure sans réécriture humaine experte. Mieux vaut 1 bon article que 4 médiocres.

- **Pas de demande d'indexation GSC sans avoir fixé les problèmes** : règle dure du context doc.

- **Pas de noindex sur pages utiles** : seulement legal pages (/mentions-legales, /confidentialite).

### 9.3 Anti-modèles design

- **Pas de bullet-spam ni de blocs de texte non aérés** : le design est un actif, on ne le sacrifie pas pour caser plus de contenu.

- **Pas de stock photos génériques** : les photos doivent être pertinentes au marché marocain ou cohérentes avec le ton premium. Le hero phone-Google-Maps de l'accueil doit montrer un téléphone marocain réaliste, pas un iPhone US.

- **Pas d'animations lourdes** : tout effet doit être <100ms, sans bloquer le LCP, accessible aux utilisateurs avec prefers-reduced-motion.

- **Pas de couleurs hors palette** : la palette du brief.md §2.2 est fixée. Les CTAs sont en `secondary` (#006d37 / vert), point.

### 9.4 Anti-modèles commerciaux

- **Pas de devis "à partir de X"** sans engagement clair. Devis = prix exact pour le scope défini.

- **Pas de négociation sur les packs affichés** : un Starter c'est 4000 MAD, point. Sinon le client devient une exception et ouvre la porte à la guerre des prix.

- **Pas de "support 24/7" en argument** : c'est faux pour une équipe petite. Support sur horaires ouvrables, WhatsApp prioritaire pour Pack Croissance, point.

- **Pas de "garantie résultats SEO position #1"** : c'est mensonger et ça crée des conflits clients. Engagement = méthode + reporting + ajustements, pas position.

- **Pas de promesse "1000 visiteurs par jour grâce au SEO"** : c'est faux pour 95% des sites de PME locales. Promesse réaliste = visibilité locale + leads qualifiés.

---

## 10. Annexes

### A. Tableau récapitulatif des 14 sites benchmarkés

| Site | Pays | Stack | Stratégie dominante | Leçon ATLASEO |
|---|---|---|---|---|
| Hostino | Maroc | WordPress + Astro headless | Pages géo massives + FAQ + autorité hébergeur | Modèle géo à imiter en version raffinée |
| Rhillane | Maroc | WordPress + Cloudflare | Keyword stuffing massif + pages multi-villes | Anti-modèle éditorial |
| Dotma | Maroc | WordPress | Blog volume + couverture informationnelle | Modèle de blog éditorial honnête |
| Urikacloud | Maroc | Stack legacy (.htm) | Templates géo identiques + sous-domaines | Anti-modèle de scaling |
| King4media | Maroc | HTML 2013 | Ancienneté + keyword stuffing dans titres | Démonstration de la puissance domaine vieilli |
| Baleez | Maroc | WordPress + Divi | Posture freelance vs agence + tarifs + ton éducatif | Modèle éditorial de référence |
| Energiedin | Maroc | WordPress + 2 domaines | Portfolio prestige (Adidas) + pages géo + références FR | Modèle de capitalisation portfolio |
| Fabrik212 | International | SPA/Webflow probable | Aucune (volontaire) | Contre-modèle SEO, modèle esthétique |
| Digidop | France | Webflow | Spécialisation extrême + résultats chiffrés + 25k$ ticket | Modèle premium pure spec |
| Plugandweb | France + Maroc | WordPress | Hybride avec offre offshore Maroc 1990 DH | Anti-modèle low-cost |
| Adveris | France | WordPress probable | 60 collaborateurs + verticalisation + GEO productisé | Modèle agence mature, GEO précurseur |
| Medirif | Maroc | Inconnu | Invisible Google | Démonstration : niche sans SEO disparaît |
| Cadence Maroc | Maroc | Inconnu | Invisible organique, présent en pub | Démonstration : sans rank tu paies pour exister |
| SEO.ma | Maroc | Inconnu | Agence SEO + mention ChatGPT/Gemini/Grok | GEO arrive au Maroc 2025-2026 |

### B. Glossaire

- **SEO (Search Engine Optimization)** : ensemble des techniques pour ranker sur Google, Bing, etc.
- **GEO (Generative Engine Optimization)** : ensemble des techniques pour apparaître dans les réponses des LLM (ChatGPT, Perplexity, Claude, Gemini)
- **AEO (Answer Engine Optimization)** : équivalent à GEO, terme parfois utilisé pour insister sur les "answer engines"
- **E-E-A-T** : Experience, Expertise, Authoritativeness, Trustworthiness — critères Google de qualité éditoriale
- **HCU (Helpful Content Update)** : update Google qui pénalise le contenu de faible qualité, notamment IA pure
- **Schema markup** : balisage sémantique JSON-LD permettant à Google de comprendre la nature du contenu (Organization, LocalBusiness, FAQPage, Article, etc.)
- **MRR (Monthly Recurring Revenue)** : revenu mensuel récurrent — métrique fondamentale en SaaS et services récurrents
- **LCP (Largest Contentful Paint)** : temps de chargement du plus gros élément visible — métrique Core Web Vitals
- **CTR (Click-Through Rate)** : taux de clic — % de personnes qui cliquent sur un résultat parmi celles qui le voient
- **NAP (Name, Address, Phone)** : cohérence nom/adresse/téléphone sur tous les supports — critère SEO local
- **Pillar page / Cluster** : architecture où une page mère (pillar) traite un sujet large, et des pages enfants (cluster) traitent des sous-sujets en détail
- **Longue traîne** : requêtes très spécifiques à faible volume mais à fort taux de conversion ("création site web dentiste Maarif Casablanca" vs "création site web")

### C. Templates utilitaires

**Template de meta description avec ☎️** :
```
[Argument valeur principal en 80 chars]. [Différenciateurs en 40 chars] ☎️ +212 6XX XX XX XX
```

**Template JSON-LD LocalBusiness pour ATLASEO** :
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ATLASEO",
  "url": "https://atlaseo.ma",
  "telephone": "+212-6XX-XX-XX-XX",
  "email": "contact@atlaseo.ma",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "areaServed": [
    {"@type": "City", "name": "Casablanca"},
    {"@type": "City", "name": "Rabat"},
    {"@type": "City", "name": "Marrakech"},
    {"@type": "City", "name": "Tanger"}
  ],
  "priceRange": "4000-9500 MAD",
  "image": "https://atlaseo.ma/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/atlaseo",
    "https://www.instagram.com/atlaseo.ma"
  ]
}
```

**Template JSON-LD FAQPage** :
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question naturelle]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Réponse 50-100 mots]"
      }
    }
  ]
}
```

**Template structure de page géolocalisée (1800 mots)** :
1. Hero — titre H1 avec ville + sous-titre ~50 mots
2. Section "Pourquoi choisir une agence à [ville]" ~250 mots
3. Section "Nos services à [ville]" ~300 mots (avec mention des quartiers)
4. Section "Étude de cas [client local si disponible]" ~250 mots
5. Section "Secteurs économiques de [ville] qu'on accompagne" ~250 mots
6. Section "Les spécificités SEO de [ville]" ~250 mots
7. FAQ géolocalisée 8 questions ~400 mots
8. CTA final ~50 mots

### D. Checklist mensuelle de suivi

À répéter chaque premier lundi du mois :

- [ ] GSC Coverage — vérifier zéro "Détectée — non indexée" sur pages cibles
- [ ] GSC Core Web Vitals — toutes pages "Good"
- [ ] GSC Performance — top 10 requêtes du mois, top 10 pages
- [ ] Lighthouse — score sur 3 pages principales (accueil, /creation-site-web, /seo-local)
- [ ] Test GEO — 10 requêtes × 4 LLM, mise à jour du tableau
- [ ] GBP — un post mensuel publié
- [ ] LinkedIn — un post mensuel publié (cas client, conseil SEO, anecdote)
- [ ] Backlinks — nouveaux backlinks acquis ce mois (via Ahrefs Webmaster Tools gratuit ou GSC Liens)
- [ ] Leads — combien ce mois, sources, taux de conversion
- [ ] Si Pack Croissance clients : envoi rapport mensuel à chaque client (1300 MAD/mois facturé doit produire un rapport visible)

---

**Fin du document.**

> Ce document est une référence vivante. Le mettre à jour tous les 3 mois en fonction des apprentissages réels (positions Google, mentions LLM, retours clients). Versionner dans Git si possible.
