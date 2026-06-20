# ODBM — Project Backlog

> **Ce document fait partie d'un système à 4 documents.**
> - **`ATLASEO_strategy.md`** — vision, positionnement, pricing, plan 12 mois (hérité, lecture seule)
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation (hérité, lecture seule)
> - **`odbm_brief.md`** — spec projet ODBM (cible, scope, design system, sitemap)
> - **`odbm_backlog.md`** — ce fichier. **Tableau de bord opérationnel du projet ODBM.**
>
> **Rôle** : ce document est l'interface entre le brief ODBM et le travail quotidien sur ce projet. Structuré par **phase projet** (et non par priorité), parce qu'un projet client a un début, un milieu et une fin — contrairement au backlog agence qui est éternel.
>
> **Mise à jour** : à chaque session de travail. Cocher ce qui est fait, ajouter à l'Inbox ce qui apparaît, déplacer les items entre phases au fur et à mesure de l'avancement.
>
> **Created**: 2026-06-15 — v0.1
> **Last updated**: 2026-06-19 — v0.2 (post-session Discovery Q/R structurée + intégration Carrières en V1)

---

## Légende

**Effort** :
- **[XS]** <1h
- **[S]** 1-3h
- **[M]** 3-8h
- **[L]** 1-3 jours
- **[XL]** >3 jours

**Tags** :
- 📍 **Bloqué externe** — dépend d'une action extérieure (client, ANRT, fournisseur)
- 💰 **Impact revenu** — bloque ou conditionne une facturation
- 🚨 **Bloquant publication** — empêche la mise en ligne tant que non résolu
- 🔗 **Référence** — pointeur vers la section du brief ou des docs parents

---

## Phase 1 — Discovery & Devis (phase actuelle)

> Objectif : récupérer toutes les infos manquantes pour passer en phase Design avec un brief complet, et formaliser le devis officiel signé.
>
> **Note v0.2** : la session Discovery Q/R structurée du 2026-06-19 a résolu 19 questions structurantes. Les items restants ci-dessous sont des Pending à clarifier avec Yassine, soit immédiatement (bloquants devis/build) soit lors du message WhatsApp accompagnant le premier draft de maquettes.

### Bloquants devis (à résoudre avant signature contrat)

- [ ] **[S]** 💰 **Validation scénario Carrières A par Yassine** (autonome via CMS Decap — reco interne ATLASEO). Si refus, fallback scénario B (géré ATLASEO) avec pricing ajusté à 9 500 MAD.
- [ ] **[S]** 📍 **Vérifier disponibilité domaine `entrepriseodbm.ma`** côté ANRT
- [ ] **[S]** 📍 **Clarifier statut domaine `odbm.ma`** (Yassine le possède-t-il ? Si oui, redirection 301 à prévoir vers entrepriseodbm.ma post-lancement)
- [ ] **[M]** 💰 **Devis officiel formalisé** scénario A (11 000 MAD one-shot + 500 MAD/an) avec scénario B en option chiffrée. PDF aux couleurs ATLASEO, mention ICE/IF ATLASEO complète.
- [ ] **[S]** 💰 **Signature contrat + modalités acompte 30/40/30** (3 300 / 4 400 / 3 300 MAD)
- [ ] **[XS]** 💰 **Encaissement acompte signature** 3 300 MAD avant démarrage Phase 2

### Pending Yassine à inclure dans message WhatsApp post-draft

Les 14 Pending suivants ne bloquent pas le devis ni le démarrage Phase 2, mais doivent être résolus avant ou pendant Phase 3 (Build).

- [ ] **[S]** **Présence physique Casa** pour arbitrage adresse GBP (bureau, dépôt, atelier — sinon Mansouria par défaut)
- [ ] **[S]** **Liste exhaustive des métiers** (validation gros œuvre / génie civil / étanchéité / Entreprise Générale + ajouts éventuels)
- [ ] **[S]** **Métier phare / axe de développement commercial** des 12-24 prochains mois (orientation hiérarchie projets affichés)
- [ ] **[M]** **Inventaire détaillé des projets** (4 connus + ceux à ajouter : nom, lieu, type, MO, année, volume)
- [ ] **[S]** 🚨 **Certificat ISO 9001 TÜV NORD** (PDF avec numéro, périmètre, dates de validité)
- [ ] **[S]** **Autres certifications/agréments/affiliations** (Qualification BTP marocaine, RC pro, décennale, agréments publics, FNBTP, CGEM, ISO 14001/45001)
- [ ] **[S]** **Chiffres clés** (année création, effectifs permanents/chantier, projets livrés, surface construite, CA si publiable)
- [ ] **[S]** **Partenariats récurrents** (bureaux d'études, architectes, sous-traitants clés mentionnables)
- [ ] **[S]** **Profils types recrutés** (chefs de chantier, conducteurs travaux, ingénieurs, ouvriers spécialisés — calibrage template Decap)
- [ ] **[S]** **2-3 anciennes annonces LinkedIn** de recrutement (calibrage template offre + ton + structure)
- [ ] **[S]** **Logo ODBM en SVG ou PNG transparent HD** (sinon vectorisation gratuite par ATLASEO dans le scope)
- [ ] **[S]** **Photo professionnelle de Yassine** pour /a-propos (ou autorisation extraction still vidéo)
- [ ] **[S]** **Adresse email destinataire** des formulaires (contact + candidatures + RGPD/CNDP — point de contact unique fonctionnel)
- [ ] **[S]** **Confirmation indicative fréquence recrutement** (6-12 offres/an estimé en session — à valider)

### Préparation message WhatsApp accompagnant le draft

- [ ] **[M]** **Rédiger message WhatsApp consolidé pour Yassine** (post-draft Phase 2) : présentation des maquettes + 14 Pending formulés client-friendly + structure claire de réponse attendue
- [ ] **[XS]** **Envoyer message + maquettes** quand draft Phase 2 prêt
- [ ] **[S]** **Synthétiser retour Yassine** en mise à jour brief v0.3 + ajustement backlog

### Volet hors workflow client (à gérer en parallèle par founder ATLASEO)

- [ ] **[L]** **Structure juridique ATLASEO et modalités facturation** (ICE, IF, RC ATLASEO à finaliser) — prérequis émission devis officiel

---

## Phase 2 — Design System & Maquettes

> Objectif : valider avec ODBM toute la direction visuelle avant la moindre ligne de code, pour éviter les refontes coûteuses en build.
>
> **Note v0.2** : direction visuelle déjà fortement cadrée en session Discovery (référence TGCC, anti-référence SGTM, palette cobalt+anthracite, ton ingénierie+fierté métier, chiffres bruts assumés). Phase 2 affine et valide en visuel.

- [ ] **[M]** **Vectoriser le logo** si Yassine n'a pas de SVG/PNG HD (Adobe Illustrator ou Figma, ~30 min)
- [ ] **[M]** **Éyedropper précisément les couleurs du logo** (bleu cobalt B + gris anthracite ODM) → valeurs HEX exactes pour palette web
- [ ] **[M]** **Construire la palette web complète** (primaire cobalt, secondaire anthracite, neutres, fonctionnels) → tokens Tailwind config
- [ ] **[M]** **Benchmarker 4 candidates typo display** sur maquette test (Hanken Grotesk vs IBM Plex Sans vs Archivo vs Space Grotesk) → choix final
- [ ] **[L]** **Mood board visuel** ODBM (références TGCC + Turner Construction + groupe-legendre + sebtp + photos chantier client) → présentation 6-8 slides
- [ ] **[L]** **Maquette hero Accueil** (photo chantier drone plein écran + overlay sombre + H1 + chiffres clés) via Stitch ou HTML prototype direct
- [ ] **[M]** **Maquette page Réalisations** (mosaïque verticale 4 projets, cards éditoriales)
- [ ] **[M]** **Maquette page À propos** avec section "Mot du gérant" (intégration vidéo) + "Nos métiers vus par ceux qui les font"
- [ ] **[M]** **Maquette page Métiers** (3 sections gros œuvre/génie civil/étanchéité + posture Entreprise Générale)
- [ ] **[M]** **Maquette page Carrières** (liste offres + carte offre + formulaire candidature avec consentement bloquant)
- [ ] **[M]** **Maquette page Contact** (coordonnées NAP + carte + WhatsApp + click-to-call + formulaire simple)
- [ ] **[S]** 💰 **Validation maquettes par Yassine** (4-5 pages clés) → déclenche encaissement 40% (4 400 MAD)
- [ ] **[S]** **Synthétiser retours Yassine** sur maquettes en ajustements brief v0.3

---

## Phase 3 — Build V1 (Site vitrine + Carrières + GBP)

> Objectif : livrer un site indexable, performant, avec module Carrières scénario A fonctionnel et fiche Google Business optimisée.
>
> **Note v0.2** : Carrières est maintenant en V1 (plus de phase Carrières V2 séparée). Le scope Build est plus chargé que dans le backlog v0.1 mais reste maîtrisable.

### Setup repo et fondations

- [ ] **[S]** **Créer le repo GitHub** `fendragond/odbm-entrepriseodbm-ma` (privé)
- [ ] **[S]** **Cloner le starter ATLASEO** + initialiser projet ODBM
- [ ] **[S]** **Appliquer overrides design tokens** ODBM (palette cobalt+anthracite, typo display retenue, espacement)
- [ ] **[M]** **Désactiver/simplifier composants ATLASEO non adaptés ODBM** : collaboration stepper, glassmorphism cards, gradients H1, milled button vert, animations excessives
- [ ] **[S]** **Configurer `astro.config.mjs`** pour ODBM (site URL, sitemap filter, adapter Cloudflare)
- [ ] **[S]** **Configurer `wrangler.toml`** ODBM

### Pages V1 indexables

- [ ] **[M]** **Page Accueil** (hero photo chantier drone + chiffres clés + 3 métiers + 4 projets phares + section équipe + CTA contact)
- [ ] **[M]** **Page À propos** (histoire ODBM, équipe, valeurs, section "Mot du gérant" avec vidéo Yassine, interviews chefs de chantier intégrées, certifications ISO 9001 mise en avant)
- [ ] **[L]** **Page Réalisations** (mosaïque 4 projets, cards éditoriales, vidéos drone intégrées, photos optimisées WebP avec lazy loading)
- [ ] **[M]** **Page Métiers** (3 sections gros œuvre/génie civil/étanchéité avec vidéos chefs de chantier si pertinent, posture Entreprise Générale transverse)
- [ ] **[M]** **Page Carrières** (liste dynamique offres depuis Astro content collection, filtres simples par métier/type contrat, formulaire candidature)
- [ ] **[M]** **Page Contact** (coordonnées NAP officiel + carte + WhatsApp + click-to-call + formulaire contact simple avec consentement bloquant)

### Pages legal noindex

- [ ] **[S]** **Mentions Légales** (Cloudflare hébergeur + ATLASEO réalisation/maintenance avec backlink atlaseo.ma, gérant Yassine EL FADLI, infos juridiques ODBM)
- [ ] **[S]** **Politique de Confidentialité** conforme CNDP/RGPD (template ATLASEO adapté : finalités traitements, durée conservation, droits, contact, transferts Cloudflare US)

### Module Carrières scénario A — brique technique

- [ ] **[L]** **Setup Decap CMS** sur le repo (config admin/config.yml avec schéma offre d'emploi)
- [ ] **[M]** **Schéma content collection offres** (titre, type contrat, lieu, expérience, niveau études, missions, profil, avantages, date publication, statut)
- [ ] **[L]** **Route Worker `/api/candidature`** (Astro + Cloudflare Worker handler) → réception multipart form-data avec CV PDF
- [ ] **[M]** **Intégration Resend** pour envoi email RH avec CV en pièce jointe
- [ ] **[S]** **Variables environnement Wrangler** : `RH_EMAIL`, `RESEND_API_KEY`
- [ ] **[S]** **Honeypot anti-bot** + **rate limiting Cloudflare** sur route `/api/candidature`
- [ ] **[S]** **Consentement CNDP/RGPD bloquant** sur formulaire candidature (case à cocher obligatoire avec lien actif vers /confidentialite)
- [ ] **[M]** **Schema JobPosting JSON-LD** par offre (Google for Jobs visibility)
- [ ] **[S]** **Page candidature spontanée** intégrée dans /carrieres (variant du formulaire sans rattachement à une offre)
- [ ] **[S]** **Formation Yassine sur Decap CMS** (session live 30 min via WhatsApp screen share + vidéo récap 10 min)

### Vidéos et médias

- [ ] **[M]** **Setup Cloudflare Stream** account + upload vidéos interviews
- [ ] **[M]** **Sous-titrage FR** des vidéos interviews (Whisper local ou service tiers + revue humaine)
- [ ] **[S]** **Vérification audio chefs de chantier** (suppression bruits, normalisation niveaux si nécessaire)
- [ ] **[S]** **Intégration vidéos** dans pages À propos et Métiers via composant `<CloudflareStreamPlayer>`
- [ ] **[M]** **Compression batch photos chantiers** (Squoosh ou Sharp en build pipeline) → WebP + fallback JPG
- [ ] **[S]** **Sélection et préparation 8-12 photos** pour fiche GBP

### SEO technique et schemas

- [ ] **[S]** **Schema Organization + LocalBusiness** complet (NAP, ICE, IF, capital, founder Yassine, hasCredential ISO 9001)
- [ ] **[S]** **Schema BreadcrumbList** sur toutes les pages internes
- [ ] **[S]** **Schema ItemList** sur /realisations (liste des projets)
- [ ] **[S]** **Schema FAQPage** si FAQ pertinente sur Accueil ou Carrières
- [ ] **[S]** **Meta descriptions uniques** (≤155 chars) avec ☎️ + numéro pour les 6 pages indexables
- [ ] **[S]** **Sitemap.xml** configuré (5 pages indexables, exclure /mentions-legales + /confidentialite)
- [ ] **[S]** **robots.txt** configuré (allow all + sitemap URL)
- [ ] **[XS]** **Canonical tags** vérifiés sur chaque page (URL réelle, no www, no trailing slash, no .html)

### QA et performance

- [ ] **[M]** **QA visuelle complète** sur staging URL (`odbm-entrepriseodbm-ma.fahd-d-d01.workers.dev`)
- [ ] **[M]** **Lighthouse audit** sur staging — cible : 90+ mobile, 95+ desktop sur les 4 catégories
- [ ] **[S]** **Test responsive** sur 3 vraies tailles d'écran (mobile 375, tablet 768, desktop 1440)
- [ ] **[S]** **Test formulaire candidature en conditions réelles** : envoi candidature test avec vrai CV PDF → vérification arrivée mail destinataire + pas en spam Hotmail
- [ ] **[S]** **Validation schemas** sur schema.org validator pour toutes les pages (Organization, LocalBusiness, JobPosting test, BreadcrumbList)
- [ ] **[S]** **Test sous-titres vidéos** sur mobile + desktop + différents navigateurs

---

## Phase 4 — Launch V1

> Objectif : mise en ligne propre avec indexation rapide et GBP actif.

### DNS et domaine

- [ ] **[S]** 📍 **Achat domaine `entrepriseodbm.ma`** via ANRT (validation peut prendre quelques jours)
- [ ] **[S]** **Configuration nameservers Cloudflare**
- [ ] **[S]** **Custom domain Cloudflare** + redirect www → non-www
- [ ] **[S]** **DNS records pour Resend** : SPF, DKIM, DMARC (envoi formulaires depuis no-reply@entrepriseodbm.ma)
- [ ] **[XS]** **Test SSL et HTTPS forcé**

### Google Search Console

- [ ] **[S]** **GSC verify** (DNS TXT via Cloudflare)
- [ ] **[S]** **Soumission sitemap** dans GSC
- [ ] **[S]** **URL Inspection** sur les 6 pages indexables (demander indexation pour les 5 principales)

### Google Business Profile

- [ ] **[M]** 💰 🚨 **Création GBP ODBM** :
  - Catégorie principale : **Entreprise de construction**
  - Catégories secondaires : **Entreprise de génie civil**, **Entreprise d'étanchéité**
  - Adresse selon arbitrage Phase 1 (Casa si présence confirmée, Mansouria sinon)
  - NAP cohérent avec site + LinkedIn + kerix
  - Upload 8-12 photos chantiers + logo
- [ ] **[S]** **Premier post GBP de lancement** (annonce nouveau site, lien vers entrepriseodbm.ma)
- [ ] **[S]** **Validation Yassine sur fiche GBP** avant publication finale

### Analytics

- [ ] **[S]** **GA4 property** créée + tracking code intégré et vérifié
- [ ] **[XS]** **Cloudflare Web Analytics** activé

### Livraison client

- [ ] **[S]** 💰 **Encaissement solde 30%** (3 300 MAD) à la mise en ligne
- [ ] **[M]** **Session formation Yassine** post-livraison : utilisation Decap CMS pour publier offres, gestion GBP, vérification candidatures arrivées
- [ ] **[S]** **Documentation client** : guide PDF court (5-8 pages) pour Yassine — login Decap, comment publier une offre, comment retirer une offre expirée, comment voir les candidatures arrivées, contact ATLASEO en cas de souci

### Suivi indexation post-launch

- [ ] **[XS]** **Vérification indexation GSC J+7**
- [ ] **[XS]** **Vérification indexation GSC J+14**
- [ ] **[XS]** **Vérification indexation GSC J+30** — objectif : 100% pages indexées, zéro "Détectée — non indexée"
- [ ] **[XS]** **Vérification Core Web Vitals J+30** (toutes pages "Good")

---

## Phase 5 — Maintenance & itérations post-livraison

> Section à enrichir au fil du temps avec les demandes ad hoc d'ODBM et les actions de maintenance récurrentes.

- [ ] **[XS]** **Rapport mensuel performance** ODBM (impressions GSC, positions, leads via formulaire/WhatsApp) — si un récurrent de maintenance est vendu en plus du Pack Visibilité
- [ ] **[XS]** **Mise à jour mensuelle GBP** (1 post minimum par mois pour signal d'activité — à arbitrer si ATLASEO le gère ou si Yassine s'en charge)
- [ ] **[S]** **Première offre d'emploi publiée** par Yassine via Decap CMS — vérification rendu sur site, validation schema JobPosting visible Google for Jobs
- [ ] **[XS]** **Vérification mensuelle délivrabilité formulaire candidature** (envoi test, vérification réception)
- [ ] (à compléter au fil des demandes)

---

## 📥 Inbox (à trier)

> Idées et tâches qui apparaissent en cours de session vont d'abord ici, sans casser le flow. À reclasser dans les phases lors de la revue mensuelle.

- (vide pour l'instant)

---

## ✅ Done — Archive

> Ce qui a déjà été fait avant la création du backlog. À compléter avec les vraies dates côté founder.

- [x] 2026-06-XX — Premier contact WhatsApp ODBM (ami du founder)
- [x] 2026-06-XX — Benchmark sites BTP envoyé (tgcc.ma, citymo.ma, sgtm.ma + refs FR : groupe-legendre, sebtp-construction, wigfrance + international : turnerconstruction)
- [x] 2026-06-XX — Deck commercial `ATLASEO_Proposition_ODBM.pptx` livré (14 slides, sans prix, focus site vitrine + fiche Google)
- [x] 2026-06-XX — Réunion ODBM, accord sur scope **Pack Visibilité**
- [x] 2026-06-XX — ODBM demande ajout **module Carrières**, deux scénarios proposés (autonome 11 000 MAD vs géré 9 500 MAD + récurrent)
- [x] 2026-06-15 — Brief ODBM v0.1 créé (`odbm_brief.md`)
- [x] 2026-06-15 — Backlog ODBM v0.1 créé (`odbm_backlog.md`)
- [x] 2026-06-19 — Réception fiche d'identité ODBM officielle (PDF) + logo JPEG depuis founder
- [x] 2026-06-19 — Session Discovery Q/R structurée (founder + Claude) : 19 décisions actées, 14 Pending consolidés pour message WhatsApp post-draft
- [x] 2026-06-19 — Décision domaine confirmée : `entrepriseodbm.ma`
- [x] 2026-06-19 — Décision SPOC client confirmée : Yassine EL FADLI gérant, canal WhatsApp + appels
- [x] 2026-06-19 — Décision activité réelle confirmée : nationale (Casa, Rabat, Marrakech + autres)
- [x] 2026-06-19 — Décision audiences cibles confirmée : promoteurs + hôteliers + BE/architectes + particuliers fortunés/investisseurs
- [x] 2026-06-19 — Décision direction visuelle confirmée : référence TGCC, anti-référence SGTM, charte from-scratch à partir du logo
- [x] 2026-06-19 — Décision ton éditorial confirmée : ingénierie + fierté du métier + chiffres bruts assumés
- [x] 2026-06-19 — Décision mise en avant gérant confirmée : présence mesurée mix B+A (Yassine sur /a-propos uniquement)
- [x] 2026-06-19 — Décision reco interne scénario Carrières A (Decap CMS, 11 000 MAD)
- [x] 2026-06-19 — Décision approche email candidatures : routing-only, destinataire fourni par Yassine
- [x] 2026-06-19 — Décision mentions légales : Cloudflare hébergeur + ATLASEO réalisation/maintenance avec backlink atlaseo.ma
- [x] 2026-06-19 — Décision page /confidentialite : dédiée, noindex, footer + consentement bloquant formulaires
- [x] 2026-06-19 — Décision modalités paiement : 30/40/30 sur 11 000 MAD one-shot + 500 MAD/an récurrent
- [x] 2026-06-19 — Décision posture projet : mode itératif assumé, pas d'engagement date livraison
- [x] 2026-06-19 — Brief ODBM v0.2 produit
- [x] 2026-06-19 — Backlog ODBM v0.2 produit

---

## 📊 Revue mensuelle

> À faire le 1er de chaque mois (10 min). Routine identique à `ATLASEO_backlog.md` adaptée projet client.

### Routine de revue

1. **Archive** : déplacer les tâches cochées vers Done avec la date de complétion
2. **Inbox** : trier les nouvelles tâches dans la bonne phase
3. **Phase actuelle** : confirmer où en est le projet (toutes les phases précédentes finies ?)
4. **Réajustement** : si une tâche stagne depuis 2 semaines → comprendre pourquoi (bloquée client ? sous-estimée ? à découper ?)
5. **Notes** : noter ci-dessous bilan + apprentissages

### Historique des revues

#### Juin 2026 (initial)
- Backlog v0.1 créé à partir du brief ODBM v0.1
- Phase 1 (Discovery & Devis) chargée
- 7 items déjà dans Done (historique pré-backlog)

#### Juin 2026 (v0.2 — 2026-06-19)
- Session Discovery Q/R structurée résolue : 19 décisions actées, 14 Pending consolidés
- Phase 1 mise à jour : items bloquants devis isolés, Pending Yassine post-draft listés
- Phase 5 (Carrières V2) absorbée dans Phase 3 (Build V1) — Carrières maintenant en V1 scope
- Phase 3 considérablement enrichie : module Carrières scénario A, vidéos Cloudflare Stream, sous-titrage, schemas étendus
- 20+ items archivés dans Done (décisions session 2026-06-19)
- Apprentissages : la session Q/R structurée est très efficace pour faire avancer un projet — à réutiliser comme pattern pour futurs clients en phase Discovery

#### [Juillet 2026] — à compléter le 1er août
- Tâches complétées :
- Tâches glissées :
- Apprentissages :
- Ajustements pour août :

---

**Fin du backlog ODBM.**
