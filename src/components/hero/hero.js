import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const init = () => {
	if (document.querySelector('.hero')) {
		// eslint-disable-next-line
		const slider = new Swiper('.hero .swiper', {
			modules: [Pagination],
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
			},
		});
	}
};

export default {
	init,
};
