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
					formBody[elem.id] = element.value;
				});
			}
		}
		sendData(formBody)
			.then((data) => {
				formElements.forEach((input) => {
					input.value = "";
				});
			});
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (isValidatedForm(form)) {
				submitForm();
			}
		});
	};
};