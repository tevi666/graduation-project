export const validateInput = (input) => {
	if (input.value) {
		if (input.name === 'fio') {
			input.classList.remove('error');
			input.value = input.value.replace(/[^а-яА-Яa-zA-Z-\s]/g, '');
		} else if (input.name === 'phone') {
			input.classList.remove('error');
			input.value = input.value.replace(/[^\+\d]/g, '');
		}
	}
};

export const isValidatedForm = (form) => {
	const inputsList = form.querySelectorAll('input');

	let fioSuccess = false;
	let phoneSuccess = false;

	if (inputsList) {
		inputsList.forEach(input => {
			if (input.name === 'fio') {
				input.value = input.value.trim();
				fioSuccess = !!input.value && /[а-яА-Яa-zA-Z-\s]/g.test(input.value);

				if (!fioSuccess) {
					input.classList.add('error');
				}
			}

			if ((input.name === 'phone')) {
				phoneSuccess = !!input.value && /^([+]?[0-9]{5,16})$/g.test(input.value);

				if (!phoneSuccess) {
					input.classList.add('error');
				}
			}

		});
	}

	return fioSuccess && phoneSuccess;
};