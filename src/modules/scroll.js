export const scroll = () => {
    const scroll = document.querySelector('.smooth-scroll');

    function scrollToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(10, -80);
            setTimeout(scrollToTop, 10);
        }
    }
    scroll.addEventListener('click', scrollToTop);
};