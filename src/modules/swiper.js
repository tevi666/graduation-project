import Swiper, {
    Autoplay
} from "swiper";
export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            }
        },
    });
};