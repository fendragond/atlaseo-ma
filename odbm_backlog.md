# ODBM — Project Backlog

> **Ce document fait partie d'un système à 3 documents.**
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
- 🔗 **Référence** — pointeur vers la section du brief ou des docs parents

---

## Phase 1 — Discovery & Devis (phase actuelle)

> Objectif : récupérer toutes les infos manquantes pour passer en phase Design avec un brief complet, et formaliser le devis officiel signé.

- [ ] **[S]** Récupérer auprès d'ODBM le **domaine final choisi** (autre que odbm.ma)
- [ ] **[S]** 💰 Trancher avec ODBM le **scénario Carrières retenu** (autonome via mini-CMS vs géré par ATLASEO)
- [ ] **[M]** Session Discovery client — **identité visuelle** : logo existant ? charte couleurs ? ton/registre souhaité ?
- [ ] **[M]** Récupérer le **dossier photos chantiers** complet (Magic House à Mansouria, immeubles RDC+5 à Casablanca, autres projets)
- [ ] **[S]** Liste exhaustive des **projets/réalisations** à mettre en avant dans le portfolio
- [ ] **[S]** Liste détaillée des **métiers** ODBM (gros œuvre, génie civil, étanchéité, autres ?)
- [ ] **[S]** **Coordonnées officielles ODBM** : adresse siège, téléphone pro, email RH, email contact général
- [ ] **[S]** **URLs Instagram et LinkedIn officielles** pour intégration `sameAs` dans schema Organization
- [ ] **[S]** Confirmer **l'interlocuteur unique** côté ODBM (le founder ami direct ou implication directeur/RH ?)
- [ ] **[M]** 💰 **Devis officiel formalisé** selon scénario Carrières retenu (PDF aux couleurs ATLASEO)
- [ ] **[S]** 💰 **Signature contrat + modalités d'acompte** (30/40/30 ou autre selon négociation)

---

## Phase 2 — Design System & Maquettes

> Objectif : valider avec ODBM toute la direction visuelle avant la moindre ligne de code, pour éviter les refontes coûteuses en build.

- [ ] **[M]** Proposer une **palette ODBM** (tons terre/béton/acier + accent BTP type orange sécurité ou jaune chantier)
- [ ] **[M]** Proposer la **typo display** (alternatives à Hanken Grotesk : IBM Plex Sans, Archivo, Space Grotesk à benchmarker)
- [ ] **[L]** **Mood board visuel** validé avec ODBM (inspirations confirmées : tgcc.ma, citymo.ma, sgtm.ma, groupe-legendre.com, turnerconstruction.com)
- [ ] **[M]** Si **pas de logo existant** : trancher avec ODBM si création logo est in-scope (et facturée en sus) ou hors-scope
- [ ] **[L]** **Maquette hero Accueil** validée par ODBM (via Stitch ou HTML prototype direct dans Chrome)
- [ ] **[M]** Validation des **maquettes pages principales** (Accueil, Réalisations, Métiers, Contact)
- [ ] **[S]** Décision finale sur **inclusion ou pas de la page Carrières** dans la V1 (selon scénario tranché en Phase 1)

---

## Phase 3 — Build V1 (Site vitrine + GBP)

> Objectif : livrer un site indexable, performant, et la fiche Google Business optimisée. Hors module Carrières.

- [ ] **[S]** Créer le repo GitHub `fendragond/odbm-[suffix-domaine]` (privé)
- [ ] **[S]** Cloner le starter ATLASEO et appliquer les **overrides design tokens** (couleurs + typo ODBM)
- [ ] **[M]** Page **Accueil** (hero chantier + chiffres clés + 3 métiers + projets phares + CTA contact)
- [ ] **[M]** Page **À propos** (histoire ODBM, équipe, valeurs, certifications éventuelles)
- [ ] **[L]** Page **Réalisations** avec galerie chantiers optimisée WebP (lazy loading systématique)
- [ ] **[M]** Page **Métiers** (gros œuvre / génie civil / étanchéité — sections ou pages séparées selon validation)
- [ ] **[M]** Page **Contact** (coordonnées + carte + WhatsApp + formulaire simple sans backend)
- [ ] **[S]** **Mentions légales** + **Politique de confidentialité** (avec mention CNDP)
- [ ] **[S]** Schema **Organization + LocalBusiness** avec coordonnées ODBM complètes
- [ ] **[S]** **Sitemap.xml** + **robots.txt** configurés
- [ ] **[M]** **QA visuelle complète** sur staging URL (`[projet].fahd-d-d01.workers.dev`)
- [ ] **[M]** **Lighthouse audit** sur staging — cible : 90+ mobile, 95+ desktop sur les 4 catégories

---

## Phase 4 — Launch V1

> Objectif : mise en ligne propre avec indexation rapide et GBP actif.

- [ ] **[S]** 📍 **Achat domaine ODBM** (potentiellement validation ANRT si `.ma`)
- [ ] **[S]** **Custom domain Cloudflare** + redirect www → non-www
- [ ] **[S]** **GSC verify** (DNS TXT via Cloudflare)
- [ ] **[S]** **Soumission sitemap** dans GSC
- [ ] **[M]** 💰 **Création GBP ODBM** :
  - Catégorie principale : **Entreprise de construction**
  - Catégories secondaires : **Entreprise de génie civil**, **Entreprise d'étanchéité**
  - Photos chantiers, NAP cohérent partout, premier post de lancement
- [ ] **[S]** **GA4 property** créée + tracking code vérifié
- [ ] **[XS]** **Cloudflare Web Analytics** activé
- [ ] **[XS]** Vérification indexation GSC **J+7**
- [ ] **[XS]** Vérification indexation GSC **J+14**
- [ ] **[XS]** Vérification indexation GSC **J+30** — objectif : 100% pages indexées, zéro "Détectée — non indexée"

---

## Phase 5 — Carrières V2 (après scénario tranché)

> Les tâches varient selon le scénario retenu en Phase 1. Le bloc non retenu sera supprimé une fois la décision confirmée.

### Scénario A — Autonome (mini-CMS)

- [ ] **[L]** Setup **Decap CMS** ou **TinaCMS** sur le repo (choix à arbitrer selon UX souhaitée et tolérance ODBM)
- [ ] **[M]** Schéma de contenu offres d'emploi (titre, lieu, type contrat, description, requirements, date de publication, statut actif/expiré)
- [ ] **[M]** Page `/carrieres` avec **liste dynamique** des offres + filtres (par métier / type contrat)
- [ ] **[L]** **Formulaire candidature spontanée** (front + Worker route `/api/candidature` + Resend → mail RH)
- [ ] **[S]** **Honeypot** + **rate limiting Cloudflare** + **consentement CNDP/RGPD** bloquant
- [ ] **[M]** Schema **JobPosting** par offre (visibilité Google for Jobs)
- [ ] **[S]** **Formation ODBM** sur l'interface CMS (session live 30 min + vidéo récap 10 min)

### Scénario B — Géré par ATLASEO

- [ ] **[M]** Page `/carrieres` avec **liste statique** des offres (Astro content collection `.md`)
- [ ] **[L]** **Formulaire candidature spontanée** (front + Worker route `/api/candidature` + Resend → mail RH)
- [ ] **[S]** **Honeypot** + **rate limiting Cloudflare** + **consentement CNDP/RGPD** bloquant
- [ ] **[M]** Schema **JobPosting** par offre (visibilité Google for Jobs)
- [ ] **[S]** **Process interne ATLASEO** de publication d'offres (template `.md` + checklist déploiement)

---

## Phase 6 — Maintenance & itérations post-livraison

> Section à enrichir au fil du temps avec les demandes ad hoc d'ODBM et les actions de maintenance récurrentes.

- [ ] **[XS]** **Rapport mensuel performance** ODBM (impressions GSC, positions, leads via formulaire/WhatsApp) — si un recurring de maintenance est vendu en plus du Pack Visibilité
- [ ] **[XS]** **Mise à jour mensuelle GBP** (1 post minimum par mois pour signal d'activité)
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
- Backlog créé à partir du brief ODBM v0.1
- Phase 1 (Discovery & Devis) chargée
- 7 items déjà dans Done (historique pré-backlog)

#### [Juillet 2026] — à compléter le 1er août
- Tâches complétées :
- Tâches glissées :
- Apprentissages :
- Ajustements pour août :

---

**Fin du backlog ODBM.**
