const VISIBLE_CLASS = 'is-visible';
const COUNT_DURATION = 1500;
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function easeOutCubic(t: number): number {
	return 1 - Math.pow(1 - t, 3);
}

export function countUp(
	el: HTMLElement,
	target: number,
	duration: number,
	options: { prefix?: string; suffix?: string; decimals?: number } = {},
): void {
	const { prefix = '', suffix = '', decimals = 0 } = options;
	const start = performance.now();

	const tick = (now: number) => {
		const progress = Math.min((now - start) / duration, 1);
		const value = target * easeOutCubic(progress);
		const display = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
		el.textContent = `${prefix}${display}${suffix}`;

		if (progress < 1) {
			requestAnimationFrame(tick);
		} else {
			el.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : String(target)}${suffix}`;
		}
	};

	requestAnimationFrame(tick);
}

function formatCountDisplay(
	value: number,
	prefix: string,
	suffix: string,
	decimals: number,
): string {
	const display = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
	return `${prefix}${display}${suffix}`;
}

export function initScrollAnimations(): void {
	if (prefersReducedMotion()) {
		document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
			el.classList.add(VISIBLE_CLASS);
		});
		return;
	}

	const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
	if (!elements.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add(VISIBLE_CLASS);
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
	);

	elements.forEach((el) => observer.observe(el));
}

export function initStaggerDelays(): void {
	document.querySelectorAll<HTMLElement>('[data-animate-stagger]').forEach((grid) => {
		const items = grid.querySelectorAll<HTMLElement>(':scope > [data-animate]');
		items.forEach((el, index) => {
			el.style.transitionDelay = `${(index + 1) * 100}ms`;
		});
	});
}

export function initCountUp(): void {
	const elements = document.querySelectorAll<HTMLElement>('[data-count]');
	if (!elements.length) return;

	const reduced = prefersReducedMotion();

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				const target = parseFloat(el.dataset.count ?? '0');
				const prefix = el.dataset.countPrefix ?? '';
				const suffix = el.dataset.countSuffix ?? '';
				const decimals = parseInt(el.dataset.countDecimals ?? '0', 10);

				if (reduced) {
					el.textContent = formatCountDisplay(target, prefix, suffix, decimals);
				} else {
					el.textContent = formatCountDisplay(0, prefix, suffix, decimals);
					countUp(el, target, COUNT_DURATION, { prefix, suffix, decimals });
				}

				const barTarget = el.dataset.countBar;
				if (barTarget) {
					const bar =
						el.parentElement?.querySelector<HTMLElement>('[data-count-bar-fill]') ??
						el.querySelector<HTMLElement>('[data-count-bar-fill]');
					if (bar) {
						if (reduced) {
							bar.style.width = `${barTarget}%`;
						} else {
							const start = performance.now();
							const animateBar = (now: number) => {
								const progress = Math.min((now - start) / COUNT_DURATION, 1);
								bar.style.width = `${parseFloat(barTarget) * easeOutCubic(progress)}%`;
								if (progress < 1) requestAnimationFrame(animateBar);
								else bar.style.width = `${barTarget}%`;
							};
							requestAnimationFrame(animateBar);
						}
					}
				}

				observer.unobserve(el);
			}
		},
		{ threshold: 0.2, rootMargin: '0px 0px -20px 0px' },
	);

	elements.forEach((el) => {
		observer.observe(el);
	});
}

export function initHeroWordReveal(): void {
	const h1 = document.querySelector<HTMLElement>('[data-hero-reveal]');
	if (!h1) return;

	if (prefersReducedMotion()) {
		h1.classList.add('hero-reveal--done');
		return;
	}

	const words = h1.querySelectorAll<HTMLElement>('.hero-word');
	const baseDelay = 200;

	words.forEach((word, index) => {
		word.style.animationDelay = `${baseDelay + index * 80}ms`;
	});

	h1.classList.add('hero-reveal--active');
}

export function initMagneticButtons(): void {
	if (isTouchDevice() || prefersReducedMotion()) return;

	const buttons = document.querySelectorAll<HTMLElement>('.milled-button');
	const maxX = 8;
	const maxY = 5;
	const radius = 60;

	buttons.forEach((btn) => {
		btn.style.willChange = 'transform';

		const onMove = (e: MouseEvent) => {
			const rect = btn.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dx = e.clientX - cx;
			const dy = e.clientY - cy;
			const dist = Math.hypot(dx, dy);

			if (dist > radius) {
				btn.style.transform = '';
				return;
			}

			const strength = 1 - dist / radius;
			const tx = Math.max(-maxX, Math.min(maxX, (dx / rect.width) * maxX * 2 * strength));
			const ty = Math.max(-maxY, Math.min(maxY, (dy / rect.height) * maxY * 2 * strength));
			btn.style.transform = `translate(${tx}px, ${ty}px)`;
		};

		const onLeave = () => {
			btn.style.transition = 'transform 300ms ease-out';
			btn.style.transform = '';
			window.setTimeout(() => {
				btn.style.transition = '';
			}, 300);
		};

		btn.addEventListener('mousemove', onMove);
		btn.addEventListener('mouseleave', onLeave);
	});
}

export function initCardTilt(): void {
	if (isTouchDevice() || prefersReducedMotion()) return;

	const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
	const maxDeg = 6;

	cards.forEach((card) => {
		card.style.transformStyle = 'preserve-3d';

		const onMove = (e: MouseEvent) => {
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;
			const rotateY = x * maxDeg * 2;
			const rotateX = -y * maxDeg * 2;
			card.style.transition = 'transform 50ms ease-out';
			card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		};

		const onLeave = () => {
			card.style.transition = 'transform 400ms ease-out';
			card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
			window.setTimeout(() => {
				card.style.transition = '';
			}, 400);
		};

		card.addEventListener('mousemove', onMove);
		card.addEventListener('mouseleave', onLeave);
	});
}

export function initScrollProgress(): void {
	if (prefersReducedMotion()) return;

	const bar = document.getElementById('scroll-progress');
	if (!bar) return;

	let ticking = false;

	const update = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
		bar.style.width = `${progress}%`;
		bar.style.opacity = scrollTop > docHeight * 0.05 ? '1' : '0';
		ticking = false;
	};

	window.addEventListener(
		'scroll',
		() => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		},
		{ passive: true },
	);

	update();
}

export function initParallax(): void {
	if (prefersReducedMotion()) return;

	const blobs = document.querySelectorAll<HTMLElement>('[data-parallax]');
	if (!blobs.length) return;

	let ticking = false;

	const update = () => {
		const scrollY = window.scrollY;
		blobs.forEach((el) => {
			const speed = parseFloat(el.dataset.parallaxSpeed ?? '0.08');
			const floatY = el.dataset.parallaxFloat === 'true' ? ' var(--blob-float-y, 0px)' : '';
			el.style.transform = `translateY(calc(${scrollY * speed}px${floatY}))`;
		});
		ticking = false;
	};

	window.addEventListener(
		'scroll',
		() => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		},
		{ passive: true },
	);

	update();
}

export function initAnimations(): void {
	initStaggerDelays();
	initScrollAnimations();
	initParallax();
	initCountUp();
	initHeroWordReveal();
	initMagneticButtons();
	initCardTilt();
	initScrollProgress();
}
