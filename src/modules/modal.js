export const modal = () => {
	const modal = document.querySelector(".header-modal");
	const overlay = document.querySelector(".overlay");
	const btn = document.getElementsByClassName("btn")[1];
	const closeBtn = document.querySelector(".header-modal__close");

	btn.addEventListener("click", (event) => {
		event.preventDefault();
		overlay.style.display = "block";
		modal.style.display = "block";
	});

	closeBtn.addEventListener("click", () => {
		overlay.style.display = "none";
		modal.style.display = "none";
	});
	const serviceBtn = document.querySelectorAll(".service-button");
	const servicesModal = document.querySelector(".services-modal");
	const servicesClose = document.querySelector(".services-modal__close");
	const overlaytwo = document.querySelector(".overlay");
	const subj = servicesModal.querySelector('input[name="subject"]');

	serviceBtn.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			overlaytwo.style.display = "block";
			servicesModal.style.display = "block";
			subj.value = event.target.attributes[1].value;
		});
	});

	servicesClose.addEventListener("click", (event) => {
		event.preventDefault();
		overlaytwo.style.display = "none";
		servicesModal.style.display = "none";
	});
};