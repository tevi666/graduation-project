import {
    animate
} from './helpers';

export const increase = ({
    elementSelector,
    modalSelector,
    overlaySelector,
    closeSelector,
    isImageModal = false,
    boxElementSelector = '',
    modalBodySelector = '',
    animationDuration = 300
}) => {
    try {
        const buttons = document.querySelectorAll(elementSelector);
        const modal = document.querySelector(modalSelector);
        const overlay = document.querySelector(overlaySelector);
        const closeBtn = modal.querySelector(closeSelector);

        const openModal = (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            overlay.style.display = 'block';
            animate({
                duration: animationDuration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress;
                }
            });
        };

        const closeModal = () => {
            animate({
                duration: animationDuration,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = 1 - progress;
                }
            });
            setTimeout(() => {
                modal.style.display = 'none';
                overlay.style.display = 'none';
            }, animationDuration);

        };

        const changeModalContent = (e) => {
            const modalBody = modal.querySelector(modalBodySelector);
            //очищаем контейнер для изображения
            modalBody.innerHTML = '';

            //получаем src уменьшенного изображения, помещаем его в массив из названий папок и названия файла
            const imgSrcArr = e.target.closest(boxElementSelector).querySelector('img').getAttribute('src').split('/');

            //добавляем в массив название папки с оригинальным изображением
            imgSrcArr.splice(imgSrcArr.length - 1, 0, 'original');

            //переводим массив в строку
            const originalImgSrc = imgSrcArr.toString().replace(/\,/g, '/');

            const img = document.createElement('img');
            img.setAttribute('src', originalImgSrc);
            img.setAttribute('alt', 'certificate');
            modalBody.append(img);
        };

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (isImageModal) {
                    changeModalContent(e);
                }
                openModal(e);
            });
        });

        closeBtn.addEventListener('click', closeModal);

    } catch (error) {
        console.log(error.message);
    }
};