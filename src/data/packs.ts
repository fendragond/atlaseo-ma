export interface PackCta {
	text: string;
	href: string;
	variant: 'milled' | 'outline';
}

export interface Pack {
	id: string;
	name: string;
	featured: boolean;
	previewFeatures: string[];
	features: string[];
	previewCta: PackCta;
	cta: PackCta;
}

/** Feature lines that inherit from a lower pack — highlighted in PackCard */
export function isIncludedPackFeature(feature: string): boolean {
	return /^Tout (le|du) Pack (Starter|Visibilité)/i.test(feature);
}

export const DELIVERY_FOOTNOTE =
	'* Le délai commence à la réception de tous les éléments nécessaires.';

export const SUPPORT_FOOTNOTE =
	'* En jours ouvrés et dans les horaires normaux (lun–ven, 9h–18h).';

export const PACKS: Pack[] = [
	{
		id: 'starter',
		name: 'Pack Starter',
		featured: false,
		previewFeatures: [
			'Site vitrine (1-3 pages)',
			'Design responsive',
			'Hébergement Cloudflare',
			'SSL inclus',
			'Livraison 14 jours*',
		],
		features: [
			'Site vitrine professionnel (1-3 pages)',
			'Design sur-mesure responsive',
			'Hébergement Cloudflare (1 an inclus)',
			'Certificat SSL gratuit',
			'Optimisation vitesse (Lighthouse 90+)',
			'Intégration WhatsApp + click-to-call',
			'Livraison en 14 jours*',
		],
		previewCta: { text: 'Démarrer avec Starter', href: '/offres', variant: 'outline' },
		cta: { text: 'Démarrer avec Starter', href: '/contact', variant: 'outline' },
	},
	{
		id: 'visibilite',
		name: 'Pack Visibilité',
		featured: false,
		previewFeatures: [
			'Tout le Pack Starter',
			'SEO local de base',
			'Google Business Profile',
			'Optimisation meta tags',
			'Suivi 1 mois',
		],
		features: [
			'Tout le Pack Starter',
			"Jusqu'à 5 pages",
			'SEO on-page (meta, titres, structure)',
			'Création Google Business Profile',
			'Inscription annuaires locaux (3 minimum)',
			'Configuration Google Analytics + Search Console',
			'1 mois de suivi SEO post-lancement',
		],
		previewCta: { text: 'Choisir Visibilité', href: '/offres', variant: 'outline' },
		cta: { text: 'Choisir Visibilité', href: '/contact', variant: 'outline' },
	},
	{
		id: 'croissance',
		name: 'Pack Croissance',
		featured: true,
		previewFeatures: [
			'Tout le Pack Visibilité',
			'SEO local avancé',
			'Stratégie de contenu',
			'Rapport mensuel',
			'Support prioritaire* (<2h)',
		],
		features: [
			'Tout le Pack Visibilité',
			"Jusqu'à 8 pages",
			'SEO local avancé (mots-clés géo, NAP, citations)',
			'Stratégie de contenu (2 articles blog inclus)',
			'Optimisation Google Business Profile avancée',
			'Rapport de performance mensuel',
			'Support prioritaire* — réponse en <2h',
		],
		previewCta: { text: 'Passer à Croissance', href: '/contact', variant: 'milled' },
		cta: { text: 'Passer à Croissance', href: '/contact', variant: 'milled' },
	},
];

export type ComparisonValue = boolean | string;

export interface ComparisonRow {
	feature: string;
	starter: ComparisonValue;
	visibilite: ComparisonValue;
	croissance: ComparisonValue;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
	{ feature: 'Pages du site', starter: '1-3', visibilite: '5', croissance: '8' },
	{ feature: 'Design responsive', starter: true, visibilite: true, croissance: true },
	{ feature: 'Certificat SSL', starter: true, visibilite: true, croissance: true },
	{ feature: 'Hébergement Cloudflare', starter: true, visibilite: true, croissance: true },
	{ feature: 'Google Business Profile', starter: false, visibilite: true, croissance: true },
	{ feature: 'SEO on-page', starter: false, visibilite: true, croissance: true },
	{ feature: 'SEO local avancé', starter: false, visibilite: false, croissance: true },
	{ feature: 'Google Analytics', starter: false, visibilite: true, croissance: true },
	{ feature: 'Suivi post-lancement', starter: false, visibilite: '1 mois', croissance: 'Mensuel' },
	{ feature: 'Support prioritaire*', starter: false, visibilite: false, croissance: true },
	{ feature: 'Contenu blog', starter: false, visibilite: false, croissance: '2 articles' },
];
