export const scroll = () => {
    const scroll = document.querySelector('.smooth-scroll');

    function trackScroll() {
        const scrolles = window.pageYOffset;
        const clnHight = document.documentElement.clientHeight;
        if (scrolles > clnHight) {
            scroll.classList.add('smooth-scroll-show');
        }
        if (scrolles < clnHight) {
            scroll.classList.remove('smooth-scroll-show');
        }
    }

    function scrollToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(10, -80);
            setTimeout(scrollToTop, 10);
        }
    }
    window.addEventListener('scroll', trackScroll);
    scroll.addEventListener('click', scrollToTop);
};