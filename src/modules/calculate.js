import {
	animate
} from './helpers';

export const calculate = () => {
	try {
		const calcBlock = document.getElementById('calc');
		const calcType = document.getElementById('calc-type');
		const calcTypeMaterial = document.getElementById('calc-type-material');
		const calcSquare = document.getElementById('calc-input');
		const total = document.getElementById('calc-total');

		const countCalc = () => {
			const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
			const calcSquareValue = +calcSquare.value;
			const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

			let totalValue = 0;

			if (calcTypeValue && calcSquareValue && calcTypeMaterialValue) {
				totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue;
			} else if (calcTypeValue && calcSquareValue) {
				totalValue = calcSquareValue * calcTypeValue;
			} else {
				totalValue = 0;
			}
			return totalValue;
		};

		calcBlock.addEventListener('input', e => {
			if (e.target === calcSquare) {
				e.target.value = e.target.value.replace(/\D+/g, '');
			}
			if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {
				const totalValue = countCalc();

				animate({
					duration: 300,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						total.value = Math.round(progress * totalValue);
					}
				});
			}
		});
	} catch (e) {
		console.log(e.message);
	}
};