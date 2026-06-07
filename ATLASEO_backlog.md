# ATLASEO — Operational Backlog

> **Ce document fait partie d'un système à 4 documents.**
> - **`ATLASEO_strategy.md`** — vision, positionnement, pricing, plan 12 mois
> - **`ATLASEO_context.md`** — méthodes techniques, infrastructure, protocole d'indexation
> - **`atlaseo-ma_brief.md`** — projet du site ATLASEO.ma
> - **`ATLASEO_backlog.md`** — ce fichier. **Tableau de bord opérationnel quotidien.**
>
> **Rôle** : ce document est l'interface entre la stratégie 12 mois et le travail quotidien. Toutes les actions y sont listées, priorisées, datées. C'est ce que tu ouvres en premier le matin.
>
> **Mise à jour** : à chaque session de travail. Cocher ce qui est fait, ajouter ce qui apparaît, repriorier si nécessaire.

---

## Légende

**Priorité** :
- 🔴 **Haute** — à faire maintenant ou très prochainement, bloque la suite
- 🟡 **Moyenne** — à faire ce trimestre, important mais pas urgent
- 🟢 **Basse** — à faire quand l'occasion se présente, nice to have

**Effort** :
- **[XS]** — <1h (action rapide)
- **[S]** — 1-3h (demi-journée)
- **[M]** — 3-8h (journée complète)
- **[L]** — 1-3 jours
- **[XL]** — >3 jours (mini-projet)

**Tag** :
- 📍 **Bloquant** — bloque d'autres actions, à dépatouiller en premier
- 💰 **Revenu** — impact direct sur génération de revenu
- 🔗 **Référence** — pointeur vers la section du doc parent (strategy / brief)

---

## 🔴 Priorité Haute

### Lancement officiel atlaseo.ma

- [ ] **[S]** 📍 Achat domaine atlaseo.ma — date cible : **fin mai 2026** — 🔗 brief Pending
- [ ] **[S]** 📍 Custom domain Cloudflare + redirect www → non-www — dépend : achat domaine — 🔗 brief Pending
- [ ] **[XS]** GSC verify (DNS TXT via Cloudflare) — dépend : custom domain — 🔗 strategy §7 Phase 0
- [ ] **[XS]** Soumission sitemap GSC — dépend : GSC verify — 🔗 strategy §7 Phase 0
- [ ] **[S]** GA4 property + tracking code vérifié — date cible : **j+2 après lancement** — 🔗 brief Pending
- [ ] **[XS]** Cloudflare Web Analytics activé — date cible : **j+2 après lancement** — 🔗 strategy §8.5
- [ ] **[M]** GBP ATLASEO créé + lien site + photos + catégories — date cible : **j+3 après lancement** — 🔗 strategy §5.5
- [ ] **[S]** Lighthouse production sur URL réelle (atlaseo.ma) — dépend : custom domain — 🔗 brief Pending
- [ ] **[M]** LCP mobile <2.5s (preload image hero mobile) — actuellement 3.2s — 🔗 brief Pending

### Quick wins SEO (avant ou juste après lancement)

- [x] Refaire les 5 meta descriptions avec 📞 + numéro — 2026-06-03
- [x] Ajouter schema LocalBusiness (en plus d'Organization) avec areaServed — 2026-06-03
- [x] Ajouter schema BreadcrumbList sur toutes les pages internes — 2026-06-03
- [x] Corriger bug "Lighthouse 0/100" hero accueil — 2026-06-03
- [x] Mention CNDP/RGPD discrète sur /creation-site-web ou footer — 2026-06-03
- [x] Section "Pourquoi pas un site low-cost ?" sur /creation-site-web — 2026-06-03
- [ ] Update numéro de téléphone

### Suivi indexation (récurrent juin 2026)

- [ ] **[XS]** Vérification GSC à j+7 après lancement
- [ ] **[XS]** Vérification GSC à j+14
- [ ] **[XS]** Vérification GSC à j+21
- [ ] **[XS]** Vérification GSC à j+30 — objectif : 5/5 pages indexées, zéro "Détectée — non indexée"

---

## 🟡 Priorité Moyenne

### Enrichissement sémantique pages d'expertise (juillet-août 2026)

- [x] **[XL]** FAQ longue (8-12 questions) ajoutée en bas de `/`, `/creation-site-web`, `/seo-local`, `/offres` + schema FAQPage — 2026-06-07
- [x] **[L]** Section "Comprendre le SEO local en 2026" sur `/seo-local` (~350 mots + schéma visuel) — 🔗 strategy §7 Phase 2 — 2026-06-03
- [x] **[L]** Section "Erreurs courantes des PME marocaines en SEO local" sur `/seo-local` (~450 mots) — 🔗 strategy §7 Phase 2  — 2026-06-03
- [x] **[L]** Section "L'infrastructure Cloudflare en détail" sur `/creation-site-web` (~350 mots) — 🔗 strategy §7 Phase 2 — 2026-06-05
- [x] **[M]** Section "Combien de temps pour des résultats SEO ?" sur `/seo-local` (~250 mots, timeline mois par mois) — 🔗 strategy §7 Phase 2  — 2026-06-03

### Étude de cas Dr Yousra (priorité business haute)

- [ ] **[XL]** 💰 Création page `/realisations/dryousra-medecine-esthetique` (~1500 mots, screenshots, stats GSC, témoignage) — date cible : **août 2026** — 🔗 strategy §6.1 + §7 Phase 2
- [ ] **[S]** 💰 Demande officielle témoignage écrit à Dr Yousra
- [ ] **[S]** 💰 Capture stats GSC dryousra.ma (impressions, mots-clés rankés, vitesse) pour intégration étude de cas
- [ ] **[M]** 💰 Coordination avec Dr Yousra pour un post Instagram mentionnant ATLASEO — date cible : **après publication étude de cas**

### Premier sprint commercial

- [ ] **[S]** 💰 LinkedIn personnel mis à jour avec lien atlaseo.ma + bio orientée ATLASEO — date cible : **juin 2026**
- [ ] **[S]** 💰 Page entreprise LinkedIn ATLASEO créée
- [ ] **[M]** 💰 Inscription Pages Jaunes Maroc, Sortlist, Companeo.ma, Maroc Annonces — 🔗 strategy §6.3 mois 1-3
- [ ] **[S]** Compte Instagram ATLASEO créé (lien dans Schema sameAs)
- [ ] **[M]** 💰 Pitch deck commercial v1 (à partir du PPT pricing existant + slides ajoutées)

### Expansion géolocalisée — Phase 3 (septembre 2026)

- [ ] **[XL]** `/creation-site-web-casablanca` (~1800 mots) — quartiers : Anfa, Maarif, Gauthier, Casa-Finance City, Sidi Maarouf, Bourgogne, Ain Diab — date cible : **septembre 2026** — 🔗 strategy §7 Phase 3
- [ ] **[S]** Validation indexation `/creation-site-web-casablanca` à j+14, j+21
- [ ] **[L]** Premier article blog : "Combien coûte un site web professionnel au Maroc en 2026 — analyse honnête" (~1200 mots) — date cible : **septembre 2026** — 🔗 strategy §6.2

### Verticalisation médicale — Phase 4 (octobre-novembre 2026)

- [ ] **[XL]** `/site-web-medecins` (~1800 mots) avec pain points médicaux, conformité CNDP, WhatsApp + click-to-call, schema MedicalBusiness — date cible : **octobre 2026** — 🔗 strategy §7 Phase 4
- [ ] **[XL]** `/creation-site-web-rabat` (~1800 mots) — quartiers : Agdal, Hay Riad, Souissi, Hassan — date cible : **novembre 2026** — 🔗 strategy §7 Phase 4
- [ ] **[L]** Article blog #2 : "WordPress vs Astro pour PME marocaine — guide de décision 2026" — date cible : **octobre 2026**
- [ ] **[L]** Article blog #3 : "SEO local pour médecins au Maroc — checklist complète 2026" — date cible : **novembre 2026**

### Mesure GEO/AEO (récurrent à partir d'octobre 2026)

- [ ] **[S]** Créer la feuille de suivi GEO (Google Sheets ou Notion) — 10 requêtes × 4 LLM — 🔗 strategy §5.6 + §8.2
- [ ] **[XS]** Test GEO mensuel octobre 2026
- [ ] **[XS]** Test GEO mensuel novembre 2026
- [ ] **[XS]** Test GEO mensuel décembre 2026

---

## 🟢 Priorité Basse

### Expansion géo — Phase 5 (décembre 2026 - février 2027)

- [ ] **[XL]** `/creation-site-web-marrakech` (~1800 mots) — date cible : **décembre 2026**
- [ ] **[XL]** `/creation-site-web-tanger` (~1800 mots) — date cible : **janvier 2027**
- [ ] **[L]** `/site-web-dentistes` (~1500 mots) — date cible : **février 2027**
- [ ] **[XL]** Deuxième étude de cas client `/realisations/[client-2]` — dépend : premier client signé après Dr Yousra
- [ ] **[L]** Article blog #4-6 (cf. strategy §6.2 calendrier)

### Récolte et ajustements — Phase 6 (mars-mai 2027)

- [ ] **[L]** Audit GSC complet : pages performantes vs stagnantes — date cible : **mars 2027**
- [ ] **[M]** Refonte pages sous-performantes (à identifier après audit)
- [ ] **[M]** Demande d'articles invités sur 2-3 blogs business marocains (Maroc Pro, Le Brief, La Vie Éco)
- [ ] **[M]** Bilan année 1 : MRR, clients, mix, sources de leads
- [ ] **[L]** V2 du document stratégique en fonction des apprentissages

### Backlinks et authority (continu, à activer mois 7-12)

- [ ] **[M]** Partenariat avec 2-3 agences complémentaires (graphistes, photographes, community managers)
- [ ] **[S]** 2-3 témoignages clients sur leurs sites avec backlink
- [ ] **[S]** Profil Clutch créé (annuaire international agences)
- [ ] **[M]** Interview/citation dans un article de presse local
- [ ] **[L]** Intervention dans un événement entrepreneurial marocain

### Templates et guides téléchargeables (mois 10-12)

- [ ] **[L]** Template "Checklist SEO local Maroc" en PDF téléchargeable
- [ ] **[L]** Template "Brief créatif site web Maroc" en PDF téléchargeable
- [ ] **[M]** Page `/ressources` qui liste les téléchargements (avec lead capture optionnel)

### Articles blog (cadence 1/mois à partir de septembre 2026)

- [ ] Article #4 — "Pourquoi un site à 1500 DH ne rankera jamais sur Google"
- [ ] Article #5 — "Google Business Profile pour professions libérales au Maroc"
- [ ] Article #6 — "Mobile-first au Maroc : 85% du trafic, et alors ?"
- [ ] Article #7 — "Comment Google classe les entreprises locales"
- [ ] Article #8 — "Core Web Vitals pour PME marocaine"
- [ ] Article #9 — "Refonte ou nouveau site — quand refondre ?"
- [ ] Article #10 — "SEO dentaire au Maroc — guide cabinet dentaire"
- [ ] Article #11 — "Avis Google : impact réel sur la visibilité locale"
- [ ] Article #12 — "Mesurer le ROI de son site web — méthode PME marocaine"

---

## 📥 Inbox (à trier)

> Toutes les idées et tâches qui apparaissent en cours de session vont d'abord ici. Tu les classes dans Haute / Moyenne / Basse lors de la revue mensuelle.

- (vide pour l'instant)

---

## ✅ Done — Archive

> Ce qui a été fait, classé chronologiquement. Récupéré du session log atlaseo-ma_brief.md.

### Mai 2026

- [x] 2026-05-17 Brief atlaseo-ma généré depuis mockup Stitch (design system, pages, CTAs, content)
- [x] 2026-05-18 Repo créé (fendragond/atlaseo-ma), Astro scaffold, Tailwind v4, 7 pages buildées
- [x] 2026-05-19 QA rounds 1-5, copy/UX fixes, animations, images WebP, Lighthouse desktop 90+ partout
- [x] 2026-05-21 Images intégrées /seo-local (3 images), hero mobile, benchmark /offres, footer copyright, mobile real device test, /offres heading order fixed (a11y 100), Lighthouse mobile 100/100/100 partout (Perf ~62 en dev)
- [x] 2026-05-21 Suppression @astrojs/cloudflare adapter, wrangler.jsonc créé, wrangler deploy réussi (https://atlaseo-ma.fahd-d-d01.workers.dev), Lighthouse production /seo-local : Desktop 98/100/100/100, Mobile 90/100/100/100. LCP desktop 1.1s, mobile 3.2s
- [x] 2026-05-22 Git tree nettoyé (61 changes commit), .wrangler/ et .vscode/ dans .gitignore, .gitattributes ajouté, deployment protocol documenté
- [x] 2026-05-24 Document stratégie ATLASEO produit (analyse benchmark 14 sites, positionnement, plan 12 mois)
- [x] 2026-05-25 Restructuration système 3 docs (strategy / context / brief) — frontières nettes
- [x] 2026-05-25 Backlog opérationnel créé

### Juin 2026

- [x] 2026-06-03 Quick wins SEO lot 1 (commit df638a6) : LocalBusiness schema, BreadcrumbList x4, meta descriptions 📞, CNDP/RGPD, section low-cost. Validé schema.org 0 erreur. Docs remis à la racine.
- [x] 2026-06-03 Enrichissement sémantique /seo-local complet : nav "Visibilité Locale", section Comprendre SEO local (~350 mots), section GEO/AEO avec logos ChatGPT/Claude/Gemini (~200 mots), section Erreurs PME x6 (~450 mots), timeline 4 jalons (~250 mots), FAQ x11 + FAQPage schema. Total ~2800 mots.
- [x] 2026-06-05 Enrichissement sémantique /creation-site-web complet : section Infrastructure Cloudflare (~350 mots), section Méthode ATLASEO x3 piliers (~300 mots), FAQ x11 + FAQPage schema. Total ~1000 mots ajoutés.
- [x] 2026-06-05 Fix footer label SEO Local → Visibilité Locale + FAQ accordion JS toggle fix (arrow icon, JS data-faq-item / data-faq-icon pattern)
- [x] 2026-06-05 Enrichissement sémantique /offres complet : section "Comprendre la tarification" (3 tiers marché), guide de décision (5 profils), section transparence "Ce qui n'est pas inclus" (6 items icône close rouge), FAQ x11 + FAQPage schema. Suppression section Benchmark redondante. ~2000 mots ajoutés.
- [x] 2026-06-07 — Homepage conversion : FAQ accueil x10 + FAQPage schema. Trust strip card Dr Yousra El Khadri (CAS CLIENT badge, citation, photo, lien dryousra.ma). Sticky mobile CTA bar (WhatsApp + Devis gratuit, scroll-triggered, md:hidden). Commits 4b8abba + 5082c4b. Mergé sur main + déployé.

---

## 📊 Revue mensuelle

> À faire le 1er de chaque mois (10-15 minutes). Cette routine maintient le backlog cohérent et te donne une vision claire de ta vélocité.

### Routine de revue

1. **Archive** : déplacer toutes les actions cochées vers la section Done (ajouter la date)
2. **Inbox** : trier toutes les nouvelles tâches arrivées en Haute / Moyenne / Basse
3. **Réajustement** : si une tâche Haute n'a pas avancé depuis 2 semaines, demander pourquoi (vraiment haute ? bloquée ? à découper en plus petit ?)
4. **Repriorisation** : passer des Moyenne en Haute si leur date cible approche
5. **Métriques** : noter ci-dessous le bilan du mois

### Historique des revues

#### Mai 2026 (initial)
- Backlog créé à partir de strategy + brief
- Phase 1 (Quick wins) chargée en Haute
- 7 tâches dans Done (historique brief)

#### [Juin 2026] — à compléter le 1er juillet
- Tâches complétées ce mois :
- Tâches glissées :
- Apprentissages :
- Ajustements pour juillet :

---

## 🔄 Comment utiliser ce backlog au quotidien

**Le matin / début de session** :
1. Ouvre ce fichier
2. Regarde les 5-10 premières tâches en Haute
3. Choisis 1-3 tâches que tu vas attaquer aujourd'hui (selon ton énergie et le temps disponible)
4. Va dans Claude avec les bons documents (strategy + context + brief si projet en cours)

**Pendant la session** :
- Si une nouvelle tâche apparaît, mets-la dans **Inbox** (ne pas casser le flow pour la classer)

**Fin de session** :
1. Coche `[x]` ce qui est fait
2. Ajoute la date de complétion à côté
3. Si une tâche était [XL] et tu n'as fait qu'une partie, la découper en sous-tâches plus petites
4. Mets à jour le session log dans le brief atlaseo-ma si la session concernait ce projet
5. Commit Git

**Si tu es perdu et tu ne sais pas quoi faire** :
- Reviens à la première tâche Haute non cochée
- Ou demande à Claude : *"Voici mon backlog ATLASEO, qu'est-ce que tu me suggères de faire en priorité aujourd'hui ?"* (en lui collant ce fichier)

---

**Fin du backlog.**
