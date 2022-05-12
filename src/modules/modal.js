export const modal = () => {
    const btn = document.querySelector('.button');
    const modal = document.querySelector('.header-modal');
    const closeBtn = document.querySelector('.header-modal__close');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'inline-block';
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
    });
};