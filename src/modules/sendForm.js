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
	const text = document.createElement("div");
	
	text.style.textAlign = 'center';
	text.style.opacity = '0.7';
	text.style.color = '#546a76';
	text.style.margin = '10px';
	const sendData = (data) => {
		return fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => {
			if (response.status !== 404) {
				return response.json();
			} else {
				console.log("Ошибка отправки");
			}
		});
	};
	const submitForm = () => {
		const formElements = form.querySelectorAll("input[type=text]");
		const formData = new FormData(form);
		const formBody = {};
		let calcTotal = document.getElementById("calc-total");

		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		if (body.classList.contains("balkony")) {
			if (calcTotal.value !== "") {
				someElement.forEach((elem) => {
					const element = document.getElementById(elem.id);
					formBody[elem.id] = element.value + ' Рублей';
				});
			}
		}
		sendData(formBody).then((data) => {
			if (data) {
				text.textContent = "Форма успешно отправлена";
				form.append(text);
			} else {
				text.textContent = "Произошла ошибка, данные формы не отправлены";
			}
			setTimeout(() => {
				text.textContent = "";
			}, 2000);
			formElements.forEach((input) => {
				input.value = "";
				input.classList.remove("error");
			});
		});
	};
	if (form) {
		form.addEventListener('input', e => {
			if (e.target.matches('input')) {
				validateInput(e.target);
			}
			return;
		});
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			if (isValidatedForm(form)) {
				submitForm();
			}
		});
	}
};