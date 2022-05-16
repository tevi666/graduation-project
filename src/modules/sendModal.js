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

    const message = {
        loading: 'Отправка..',
        success: 'Данные успешно отправлены',
        failure: 'Ошибка отправки данных. Попробуйте позднее',
    };
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
        document.querySelector('.status').textContent = message.loading;
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
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            if (isValidatedForm(item)) {
                let statusMessage = document.createElement('div');
                statusMessage.style.textAlign = 'center';
                statusMessage.style.margin = '10px';
                statusMessage.style.color = '#546a76';
                statusMessage.classList.add('status');
                item.append(statusMessage);
                const formData = new FormData(item);
                postData('https://jsonplaceholder.typicode.com/posts', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 1000);
                        setTimeout(() => {
                            noneModal();
                            noneModalOverlay();
                        }, 1100);
                    });
            }
        });
    });
    form1.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            if (isValidatedForm(item)) {
                let statusMessage = document.createElement('div');
                statusMessage.style.textAlign = 'center';
                statusMessage.style.margin = '10px';
                statusMessage.style.color = '#546a76';
                statusMessage.classList.add('status');
                item.append(statusMessage);
                const formData = new FormData(item);
                postData('https://jsonplaceholder.typicode.com/posts', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 1000);
                        setTimeout(() => {
                            noneModal1();
                            noneModalOverlay();
                        }, 1100);
                    });
            }
        });
    });
};