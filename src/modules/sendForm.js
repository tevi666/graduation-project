import {
    validateInput,
    isValidatedForm
} from './validation';

export const sendForm = ({
    formSelector,
    additionalData = []
}) => {
    const form = document.querySelector(formSelector);
    const calcItemInput = document.querySelectorAll('.calc-item-input');
    const calcItemSelect = document.querySelectorAll('.calc-item-select');

    const statusBlock = document.createElement('div');
    form.append(statusBlock);

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };
    const nullingTheForm = () => {
        calcItemInput.forEach(input => {
            input.value = '';
        });
    };
    const nullingTheFormSelect = () => {
        calcItemSelect.forEach(select => {
            select.value = '--';
        });
    };

    const showMessage = (status) => {
        statusBlock.innerHTML = '';
        switch (status) {
            case 'sending':
                statusBlock.innerHTML = `Отправка..`;
                break;
            case 'error':
                statusBlock.innerHTML = `Ошибка отправки данных. Попробуйте позднее`;
                setTimeout(() => {
                    statusBlock.innerHTML = '';
                }, 5000);
                break;
            case 'success':
                statusBlock.innerHTML = `Данные успешно отправлены`;
                setTimeout(() => {
                    statusBlock.innerHTML = '';
                }, 3000);
                break;
            case 'not valid':
                statusBlock.innerHTML = `Проверьте правильность введенных данных`;
                break;
        }
    };

    const submitForm = () => {
        showMessage('sending');
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const fromBody = {};

        formData.forEach((val, key) => {
            fromBody[key] = val;
        });

        if (additionalData.length > 0) {
            additionalData.forEach(elem => {
                const element = document.querySelector(elem.selector);
                if (element) {
                    fromBody[element.id] = elem.type === 'block' ? element.textContent : element.value;
                }
            });
        }

        sendData(fromBody)
            .then(data => {
                showMessage('success');
                formElements.forEach(input => {
                    input.value = '';
                });
            }).catch(error => {
                showMessage('error');
                console.log(error.message);
                setTimeout(() => {
                    formElements.forEach(input => {
                        input.value = '';
                    });
                }, 5000);
            });
    };

    try {
        if (!form) {
            throw new Error(`form ${formSelector} is not found`);
        }

        form.addEventListener('input', e => {
            if (e.target.matches('input')) {
                validateInput(e.target);
            }
            return;
        });

        form.addEventListener('submit', e => {
            e.preventDefault();
            nullingTheForm();
            nullingTheFormSelect();
            if (isValidatedForm(form)) {
                submitForm();
            } else {
                showMessage('not valid');
            }
        });
    } catch (error) {
        console.log(error);
    }
};