export const servicesModal = () => {
    const modal = document.querySelector('.services-modal');
    const btn = document.querySelectorAll('.service-button');
    const btnClose = document.querySelector('.services-modal__close');

    btn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'inline-block';
        });
    });
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
    });
};