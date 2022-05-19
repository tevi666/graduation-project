import {
    modal
} from "./modules/modal";

import {
    timer
} from "./modules/timer";

import {
    swiperBenefits,
    swiperServices
} from "./modules/swiper";

import {
    scroll
} from "./modules/scroll";

import {
    calculate
} from "./modules/calculate";

import {
    sendForm
} from "./modules/sendForm";

import {
    menu
} from "./modules/menu";

import {
    comments
} from "./modules/comments";

timer("20 may 2022 22:00");
scroll();
modal({
    elementSelector: ".callback",
    modalSelector: ".header-modal",
    overlaySelector: ".overlay",
    closeSelector: ".header-modal__close",
});

modal({
    elementSelector: "measurer-call",
    modalSelector: ".services-modal",
    overlaySelector: ".overlay",
    closeSelector: ".services-modal__close",
    isServices: true,
    servicesBlockSelector: "#services",
});

modal({
    elementSelector: ".document-overlay",
    modalSelector: ".image-modal",
    overlaySelector: ".overlay",
    closeSelector: ".image-modal__close",
    isImageModal: true,
    boxElementSelector: ".sertificate-document",
    modalBodySelector: ".image-modal__body",
});
calculate();
const body = document.querySelector("body");
if (body.classList.contains("okna")) {
    sendForm({
        formId: "form1",
        someElement: [],
    });
    sendForm({
        formId: "form2",
        someElement: [],
    });
    sendForm({
        formId: "callback-form1",
        someElement: [],
    });
    sendForm({
        formId: "application-form1",
        someElement: [],
    });
}
if (body.classList.contains("balkony")) {
    sendForm({
        formId: "form3",
        someElement: [{
            id: "calc-total",
        }, ],
    });
    sendForm({
        formId: "form4",
        someElement: [{
            id: "calc-total",
        }, ],
    });
    sendForm({
        formId: "callback-form2",
        someElement: [{
            id: "calc-total",
        }, ],
    });
    sendForm({
        formId: "application-form2",
        someElement: [{
            id: "calc-total",
        }, ],
    });
}
if (body.classList.contains("kuhni")) {
    sendForm({
        formId: "form5",
        someElement: [],
    });
    sendForm({
        formId: "form6",
        someElement: [],
    });
    sendForm({
        formId: "callback-form3",
        someElement: [],
    });
    sendForm({
        formId: "application-form3",
        someElement: [],
    });
}
menu();
comments();