export const header = () => {
	const headerComponent = document.querySelector('.header');
	const headerMobile = document.querySelector('.header-mobile');
	const bgOverflow = document.querySelector('.bg-overflow');
	const html = document.getElementsByTagName('html')[0];

	const menuOpen = () => {
		bgOverflow.classList.remove('is-hidden');
		bgOverflow.classList.add('is-active');
		headerMobile.classList.add('is-active');
		html.classList.add('overflow-hidden');
	};

	const menuClose = () => {
		headerMobile.classList.remove('is-active');
		bgOverflow.classList.remove('is-active');

		setTimeout(() => {
			bgOverflow.classList.add('is-hidden');
			html.classList.remove('overflow-hidden');
		}, 150);
	};

	if (headerComponent.querySelector('[data-large]')) {
		const large = headerComponent.querySelector('[data-large]').parentNode;
		large.querySelector('.header__dropdown').classList.add('header__dropdown--large');
	}

	document.querySelector('.header__burger').addEventListener('click', () => {
		menuOpen();
	});

	document.querySelector('.header-mobile__close').addEventListener('click', () => {
		menuClose();
	});

	bgOverflow.addEventListener('click', () => {
		menuClose();
	});
};
