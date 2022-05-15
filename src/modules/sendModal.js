import {
    validateInput,
    isValidatedForm
} from './validation';

export const sendModal = () => {
    const modal = document.querySelector('.header-modal--opened');
    const modalOverlay = document.querySelector('.overlay');
    const modal1 = document.querySelector('.services-modal--opened');
    const form = document.querySelectorAll('form[name="callback-form"]'),
        form1 = document.querySelectorAll('form[name="application-form"]'),
        inputs = document.querySelectorAll('input');


    const noneModal = () => {
        modal.style.display = 'none';
    };
    const noneModalOverlay = () => {
        modalOverlay.style.display = 'none';
    };
    const noneModal1 = () => {
        modal1.style.display = 'none';
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.json();
    };
    inputs.forEach(item => {
        item.addEventListener('input', e => {
            if (e.target.matches('input')) {
                validateInput(e.target);
            }
            return;
        });
    });
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            if (isValidatedForm(item)) {
                setTimeout(() => {
                    noneModal();
                    noneModalOverlay();
                    const formData = new FormData(item);
                    postData('https://jsonplaceholder.typicode.com/posts', formData)
                        .then(res => {

                        })
                        .catch(() => message);
                    clearInputs();
                }, 1000);
            }
        });
    });
    form1.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            if (isValidatedForm(item)) {
                setTimeout(() => {
                    noneModal1();
                    noneModalOverlay();
                    const formData = new FormData(item);
                    postData('https://jsonplaceholder.typicode.com/posts', formData)
                        .then(res => {

                        })
                        .catch(() => message);
                    clearInputs();
                }, 1000);
            }
        });
    });
};