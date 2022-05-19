import {
	validateInput,
	isValidatedForm
} from "./validation";
export const sendForm = ({
	formId,
	someElement = []
}) => {
	const body = document.querySelector("body");
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div');
	form.append(statusBlock);

	statusBlock.style.textAlign = 'center';
	statusBlock.style.opacity = '0.7';
	statusBlock.style.color = '#546a76';
	statusBlock.style.margin = '10px';

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
	const sendData = (data) => {
		return fetch("https://jsonplaceholder.typicode.com/posts", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
			.then((response) => {
				if (response.status !== 404) {
					return response.json();
				} else {
					console.log("Ошибка отправки");
				}
			});
	};
	const submitForm = () => {
		showMessage('sending');
		const formElements = form.querySelectorAll("input[type=text]");
		const formData = new FormData(form);
		const formBody = {};
		let calcTotal = document.getElementById("calc-total");

		formData.forEach((val, key) => {
			formBody[key] = val;
		});
		if (someElement.length > 0) {
			someElement.forEach(elem => {
				const element = document.querySelector(elem.selector);
				if (element) {
					formBody[element.id] = elem.type === 'block' ? element.textContent : element.value;
				}
			});
		}
		if (body.classList.contains("balkony")) {
			if (calcTotal.value !== "") {
				someElement.forEach((elem) => {
					const element = document.getElementById(elem.id);
					formBody[elem.id] = element.value;
				});
			}
		}
		sendData(formBody)
			.then((data) => {
				showMessage('success');
				formElements.forEach((input) => {
					input.value = "";
				});
			}).catch(error => {
				console.log(error.message);
				setTimeout(() => {
					formElements.forEach(input => {
						input.value = '';
					});
				}, 5000);
			});
	};
	form.addEventListener('input', e => {
		if (e.target.matches('input')) {
			validateInput(e.target);
		}
		return;
	});
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (isValidatedForm(form)) {
			submitForm();
		} else {
			showMessage('not valid');
		}
	});

};