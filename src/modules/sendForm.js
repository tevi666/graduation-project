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
			})
			.catch((error) => {
				console.log(error);
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
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			submitForm();
		});
		sendData(formBody)
			.then((data) => {
				formElements.forEach((input) => {
					input.value = "";
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	try {
		if (!form) {
			throw new Error("Верните форму на страницу");
		}

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			submitForm();
		});
	} catch (error) {
		console.log(error.message);
	}
};