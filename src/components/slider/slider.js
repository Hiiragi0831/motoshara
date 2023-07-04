import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const standard = new Swiper('.slider__standard .swiper', {
	modules: [Pagination],
	init: false,
	slidesPerView: 1,
	pagination: {
		el: '.slider__standard .swiper-pagination',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
		},
	},
});

const init = () => {
	if (document.querySelector('.slider__standard')) {
		standard.init();
	}
};

export default {
	init,
};
