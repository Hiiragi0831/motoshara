import Swiper from 'swiper';
import {Thumbs} from 'swiper/modules';

const galleryThumbs = new Swiper('.product__swiper-thumbs', {
	slidesPerView: 2,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		1024: {
			slidesPerView: 4,
		},
	},
});

const gallery = new Swiper('.product__swiper', {
	modules: [Thumbs],
	init: false,
	slidesPerView: 1,
	thumbs: {
		swiper: galleryThumbs,
	},
});

const init = () => {
	if (document.querySelector('.product__image')) {
		gallery.init();
	}
};

export default {
	init,
};
