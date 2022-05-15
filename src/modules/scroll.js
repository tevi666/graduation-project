export const scroll = () => {
	const scrollBtn = document.querySelector('.smooth-scroll');
	scrollBtn.style.display = 'none';

	const trackScroll = () => {
		const scrolled = window.pageYOffset;
		const coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			scrollBtn.style.display = 'block';
		}
		if (scrolled < coords) {
			scrollBtn.style.display = 'none';
		}

	};

	const backToTop = () => {
		const header = document.getElementById('header');
		if (header) {
			header.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center'
			});
		} else {
			document.body.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center'
			});
		}
	};
	window.addEventListener('scroll', trackScroll);
	scrollBtn.addEventListener('click', backToTop);
};