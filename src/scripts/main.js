import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import '@styles/vendor.scss';
import 'swiper/css/bundle';
import '@styles/main.scss';

import actualYear from '@scripts/modules/actual-year';
import uaParser from '@scripts/modules/ua-parser';
import vhFix from '@scripts/modules/vh-fix';

import {isDevices} from '@scripts/helpers/index';
import lazyLoad from '@scripts/modules/lazy-load';
// import scrollToAnchor from './modules/scrollToAnchor';
// import lazyBlur from './modules/lazyBlur';
// import analytics from '@components/analytics/analytics';
// import router from '@components/router/router';
import home from '../pages/home/home';
import {header} from '../components/header/header';
import slider from '../components/slider/slider';
import {Tabs} from '../components/tabs/tabs';
import {initQty} from '../components/field-num/field-num';
// import sharing from '../components/sharing/sharing';

// eslint-disable-next-line no-underscore-dangle
window._debounce = debounce;
// eslint-disable-next-line no-underscore-dangle
window._throttle = throttle;

let resizeWidth = null;

const resize = () => {
	if (isDevices() && resizeWidth && resizeWidth === innerWidth) {
		return;
	}

	document.body.classList.add('is-resizing');

	uaParser.resize();
	// resize logic

	document.body.classList.remove('is-resizing');

	resizeWidth = innerWidth;
};

// добавить скрипты для инициализации при переходах
// const scriptsInit = [
// 	// активируем нужные модули которые будут использоваться и должны обновлять при переходах между страницами
// 	lazyLoad.init,
// 	scrollToAnchor.init,
// 	lazyBlur.init,
// 	analytics.init,
// 	sharing.init,
//
// 	home.init,
// 	article.init,
// ];

// добавить скрипты для удаленния данных при уходе
// const scriptsDestroy = [];

const init = () => {
	uaParser.init();
	actualYear.init();
	vhFix.init();
	lazyLoad.init();
	header();
	home.init();
	slider.init();
	window.tabs = new Tabs();
	initQty();

	// закоментировать или удалить если SPA поведение не требуется
	// router.init(scriptsInit, scriptsDestroy);

	resizeWidth = innerWidth;
	window.addEventListener('resize', _debounce(resize, 500));
};

document.addEventListener('DOMContentLoaded', init);
