import {
    validateInput,
    isValidatedForm
} from './validation';

export const sendModal = () => {
    const form = document.querySelectorAll('form[name="callback-form"]'),
        form1 = document.querySelectorAll('form[name="application-form"]'),
        inputs = document.querySelectorAll('input');


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
                const formData = new FormData(item);
                postData('https://jsonplaceholder.typicode.com/posts', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => message);
                clearInputs();
            }
        });
    });
    form1.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            if (isValidatedForm(item)) {
                const formData = new FormData(item);
                postData('https://jsonplaceholder.typicode.com/posts', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => message);
                clearInputs();
            }
        });
    });
};