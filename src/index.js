import {
    modal
} from "./modules/modal";

import {
    servicesModal
} from "./modules/servicesModal";

import {
    timer
} from "./modules/timer";

import {
    swiper
} from "./modules/swiper";

import {
    scroll
} from "./modules/scroll";

import {
    increase
} from "./modules/increase";

import {
    calculate
} from "./modules/calculate";

import {
    validation
} from "./modules/validation";

import {
    sendForm
} from "./modules/sendForm";

import {
    serviceSlider
} from "./modules/serviceSlider";

modal();
servicesModal();
timer('20 may 2022 22:00');
swiper();
scroll();
increase({
	elementSelector: '.document-overlay',
	modalSelector: '.image-modal',
	overlaySelector: '.overlay',
	closeSelector: '.image-modal__close',
	isImageModal: true,
	boxElementSelector: '.sertificate-document',
	modalBodySelector: '.image-modal__body'
});
calculate();
validation();
sendForm();
serviceSlider();