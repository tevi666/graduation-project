export const validateInput = (input) => {
    if (input.value) {
        if (input.name === 'fio') {
            input.value = input.value.replace(/[^а-яА-Яa-zA-Z-\s]/g, '');
        } else if (input.name === 'phone') {
            input.value = input.value.replace(/[^\+\d]/g, '');
        }
    }
};

export const isValidatedForm = (form) => {
    const inputsList = form.querySelectorAll('input');

    let success = true;
    let fioSuccess = false;
    let phoneSuccess = false;

    if (inputsList) {
        inputsList.forEach(input => {
            if (input.value === '') {
                success = false;
            } else {

                if (input.name === 'fio') {
                    if (/[а-яА-Яa-zA-Z-\s]/g.test(input.value)) {
                        fioSuccess = true;
                    } else {
                        fioSuccess = false;
                    }
                }

                if ((input.name === 'phone')) {
                    if (/^([+]?[0-9]{11,16})*$/g.test(input.value)) {
                        phoneSuccess = true;
                    } else {
                        phoneSuccess = false;
                    }
                }
            }
        });
    }
    return success && fioSuccess && phoneSuccess;
};